const API = 'https://api.github.com/repos/2388450630lwy-coder/lwyblog';
export const CDN = 'https://www.lwyzyc.com/game-notices/';

function base64(bytes) {
  let value = '';
  for (let i = 0; i < bytes.length; i += 8192) value += String.fromCharCode(...bytes.subarray(i, i + 8192));
  return btoa(value);
}

async function sha256(bytes) {
  return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', bytes)), b => b.toString(16).padStart(2, '0')).join('');
}

// Publish all resources in one commit; never expose a partially updated notice set.
export async function deployNotice({ env, data, images, token, onProgress = () => {} }) {
  if (!token) throw new Error('请先在管理后台「推送部署」中配置 GitHub Token');
  if (!/^[a-z0-9_-]+$/.test(env)) throw new Error('环境 ID 无效');
  async function api(path, body, method, allowMissing = false) {
    const response = await fetch(API + path, {
      method: method || (body ? 'POST' : 'GET'),
      headers: { Authorization: 'Bearer ' + token, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json' },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });
    const result = await response.json();
    if (allowMissing && response.status === 404) return null;
    if (!response.ok) throw new Error('GitHub ' + response.status + ': ' + (result.message || '请求失败'));
    return result;
  }
  onProgress('正在上传公告和图片…');
  const ref = await api('/git/ref/heads/main');
  const parent = await api('/git/commits/' + ref.object.sha);
  const existing = await api('/contents/public/game-notices/manifest.json?ref=' + ref.object.sha, undefined, undefined, true);
  let manifest = { files: {}, project: 'witcherdefense', revision: 0, schemaVersion: 2 };
  if (existing) {
    if (existing.encoding !== 'base64' || typeof existing.content !== 'string') throw new Error('无法读取现有 manifest.json');
    manifest = JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(existing.content.replace(/\s/g, '')), c => c.charCodeAt(0))));
    if (!manifest.files || typeof manifest.files !== 'object' || Array.isArray(manifest.files) || !Number.isSafeInteger(manifest.revision) || manifest.revision < 0) throw new Error('现有 manifest.json 格式无效，已取消发布');
  }
  const tree = [];
  const paths = new Map();
  for (const { filename, blob } of images) {
    if (!filename || /[\\/\x00-\x1f]/.test(filename) || filename === '.' || filename === '..') throw new Error('图片文件名无效');
    const bytes = new Uint8Array(await blob.arrayBuffer());
    const hash = await sha256(bytes);
    const path = env + '/images/' + hash + '-' + filename;
    paths.set(env + '/images/' + filename, path);
    manifest.files[env + '/images/' + filename] = { FileHash: hash, fileName: path, size: bytes.length };
    const uploaded = await api('/git/blobs', { content: base64(bytes), encoding: 'base64' });
    tree.push({ path: 'public/game-notices/' + path, mode: '100644', type: 'blob', sha: uploaded.sha });
  }
  const published = JSON.parse(JSON.stringify(data));
  for (const item of published.items) {
    for (const key of ['entryImage', 'contentImage']) {
      if (item[key]) {
        const replacement = paths.get(item[key]);
        if (!replacement) throw new Error('公告引用的图片未上传：' + item[key]);
        item[key] = replacement;
      }
    }
  }
  const json = JSON.stringify(published, null, 2);
  const file = env + '_notice_data.json';
  const jsonBytes = new TextEncoder().encode(json);
  const jsonHash = await sha256(jsonBytes);
  const uploaded = await api('/git/blobs', { content: base64(jsonBytes), encoding: 'base64' });
  tree.push({ path: 'public/game-notices/' + file, mode: '100644', type: 'blob', sha: uploaded.sha });
  tree.push({ path: 'public/game-notices/' + jsonHash + '.json', mode: '100644', type: 'blob', sha: uploaded.sha });
  manifest.files[file] = { FileHash: jsonHash, fileName: jsonHash + '.json', size: jsonBytes.length };
  manifest.revision += 1;
  delete manifest.version;
  manifest.version = await sha256(new TextEncoder().encode(JSON.stringify(manifest)));
  const manifestJson = JSON.stringify(manifest, null, 2);
  const manifestBlob = await api('/git/blobs', { content: base64(new TextEncoder().encode(manifestJson)), encoding: 'base64' });
  tree.push({ path: 'public/game-notices/manifest.json', mode: '100644', type: 'blob', sha: manifestBlob.sha });
  const newTree = await api('/git/trees', { base_tree: parent.tree.sha, tree });
  const commit = await api('/git/commits', { message: 'deploy: 发布 ' + env + ' 游戏公告', tree: newTree.sha, parents: [ref.object.sha] });
  await api('/git/refs/heads/main', { sha: commit.sha, force: false }, 'PATCH');
  const url = CDN + file;
  onProgress('已提交，等待网站部署完成…', { url, commit: commit.sha });
  // Match this commit, rather than mistaking a previous successful deployment for this one.
  for (let attempt = 0; attempt < 90; attempt++) {
    await new Promise(resolve => setTimeout(resolve, 5000));
    const runs = await api('/actions/workflows/deploy.yml/runs?head_sha=' + encodeURIComponent(commit.sha) + '&per_page=5');
    const run = runs.workflow_runs?.find(value => value.head_sha === commit.sha);
    if (run?.status === 'completed' && run.conclusion !== 'success') throw new Error('网站部署失败，请查看 GitHub Actions：' + run.html_url);
    if (run?.conclusion === 'success') {
      try {
        const response = await fetch(url + '?v=' + commit.sha, { cache: 'no-store' });
        const manifestResponse = await fetch(CDN + 'manifest.json?v=' + commit.sha, { cache: 'no-store' });
        const versionResponse = await fetch(CDN + jsonHash + '.json?v=' + commit.sha, { cache: 'no-store' });
        if (response.ok && (await response.text()).trim() === json.trim()
          && manifestResponse.ok && (await manifestResponse.text()).trim() === manifestJson.trim()
          && versionResponse.ok && (await versionResponse.text()).trim() === json.trim()) {
          return { url, manifestUrl: CDN + 'manifest.json', revision: manifest.revision, commit: commit.sha, images: Array.from(paths.values()).map(path => CDN + path) };
        }
      } catch { /* CDN may need more time to become available. */ }
      onProgress('网站已部署，等待 CDN 资源可访问…', { url, commit: commit.sha });
    }
  }
  throw new Error('公告已提交，但等待上线超时。请查看 GitHub Actions 和资源地址：' + url);
}
