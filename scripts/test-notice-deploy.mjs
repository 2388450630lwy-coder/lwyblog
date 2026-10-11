import assert from 'node:assert/strict';
import { deployNotice } from '../public/notice-publisher/deploy.js';
await assert.rejects(deployNotice({ env: 'prod', token: '' }), /Token/);
await assert.rejects(deployNotice({ env: '../bad', token: 'test' }), /环境/);
const originalFetch = globalThis.fetch;
const originalTimer = globalThis.setTimeout;
const calls = [];
let json;
let manifestJson;
let missingManifest = false;
const existingManifest = { files: { 'pre_notice_data.json': { FileHash: 'old', fileName: 'old.json', size: 10 }, 'notice_en.txt': { FileHash: 'text', fileName: 'text.txt', size: 20 } }, project: 'witcherdefense', revision: 6, schemaVersion: 2, version: 'old-version' };
let rejectRef = false;
existingManifest.files['prod/images/unused.png'] = { FileHash: 'unused', fileName: 'prod/images/old-unused.png', size: 1 };
existingManifest.files['pre/images/keep.png'] = { FileHash: 'keep', fileName: 'pre/images/keep.png', size: 1 };
globalThis.setTimeout = callback => { queueMicrotask(callback); return 0; };
globalThis.fetch = async (url, options = {}) => {
  const body = options.body ? JSON.parse(options.body) : undefined;
  calls.push({ url, method: options.method, body });
  let result = {};
  if (url.includes('/git/ref/heads/main')) result = { object: { sha: 'parent' } };
  else if (url.includes('/contents/public/game-notices/manifest.json')) {
    if (missingManifest) return { ok: false, status: 404, json: async () => ({ message: 'Not Found' }) };
    result = { encoding: 'base64', content: Buffer.from(JSON.stringify(existingManifest)).toString('base64') };
  }
  else if (url.endsWith('/git/commits/parent')) result = { tree: { sha: 'base' } };
  else if (url.endsWith('/git/trees/base')) result = { tree: [{ path: 'public', type: 'tree', sha: 'public' }] };
  else if (url.endsWith('/git/trees/public')) result = { tree: [{ path: 'game-notices', type: 'tree', sha: 'notices' }] };
  else if (url.endsWith('/git/trees/notices')) result = { tree: [{ path: 'prod', type: 'tree', sha: 'prod' }] };
  else if (url.endsWith('/git/trees/prod')) result = { tree: [{ path: 'images', type: 'tree', sha: 'images' }] };
  else if (url.endsWith('/git/trees/images?recursive=1')) result = { tree: [{ path: 'old-unused.png', type: 'blob', mode: '100644' }, { path: 'orphan.png', type: 'blob', mode: '100644' }] };
  else if (url.endsWith('/git/blobs')) {
    const decoded = Buffer.from(body.content, 'base64').toString();
    if (decoded.startsWith('{')) {
      if (JSON.parse(decoded).files) manifestJson = decoded;
      else json = decoded;
    }
    result = { sha: 'blob' };
  } else if (url.endsWith('/git/trees')) result = { sha: 'tree' };
  else if (url.endsWith('/git/commits')) result = { sha: 'published' };
  else if (url.includes('/actions/workflows')) result = { workflow_runs: [{ head_sha: 'published', status: 'completed', conclusion: 'success' }] };
  else if (url.endsWith('/git/refs/heads/main') && rejectRef) return { ok: false, status: 422, json: async () => ({ message: 'Update is not a fast forward' }) };
  else if (url.startsWith('https://www.lwyzyc.com/')) return { ok: true, text: async () => url.includes('/manifest.json') ? manifestJson : json };
  return { ok: true, json: async () => result };
};
try {
  const input = { env: 'prod', token: 'test', data: { tabs: [], items: [{ title: { cht: '公告' }, entryImage: 'prod/images/图片.png' }] }, images: [{ filename: '图片.png', blob: new Blob(['image bytes']) }] };
  const result = await deployNotice(input);
  assert.equal(result.url, 'https://www.lwyzyc.com/game-notices/prod_notice_data.json');
  assert.match(JSON.parse(json).items[0].entryImage, /^prod\/images\/[a-f0-9]{64}-图片\.png$/);
  assert.equal(input.data.items[0].entryImage, 'prod/images/图片.png');
  const tree = calls.find(call => call.url.endsWith('/git/trees')).body;
  assert.equal(tree.tree.length, 6);
  assert.deepEqual(tree.tree.filter(file => file.sha === null).map(file => file.path).sort(), ['public/game-notices/prod/images/old-unused.png', 'public/game-notices/prod/images/orphan.png']);
  const manifest = JSON.parse(manifestJson);
  assert.equal(manifest.revision, 7);
  assert.equal(manifest.schemaVersion, 2);
  assert.equal(Object.hasOwn(manifest, 'project'), false);
  assert.deepEqual(manifest.files['pre_notice_data.json'], existingManifest.files['pre_notice_data.json']);
  assert.deepEqual(manifest.files['notice_en.txt'], existingManifest.files['notice_en.txt']);
  assert.equal(Object.hasOwn(manifest.files, 'prod/images/unused.png'), false);
  assert.deepEqual(manifest.files['pre/images/keep.png'], existingManifest.files['pre/images/keep.png']);
  const entry = manifest.files['prod_notice_data.json'];
  assert.equal(entry.size, Buffer.byteLength(json));
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(json));
  assert.equal(entry.FileHash, Buffer.from(digest).toString('hex'));
  assert.equal(entry.fileName, entry.FileHash + '.json');
  assert.ok(tree.tree.some(file => file.path === 'public/game-notices/' + entry.fileName));
  assert.match(manifest.version, /^[a-f0-9]{64}$/);
  assert.equal(result.manifestUrl, 'https://www.lwyzyc.com/game-notices/manifest.json');
  assert.equal(tree.base_tree, 'base');
  assert.equal(calls.filter(call => call.method === 'PATCH').length, 1);
  assert.equal(calls.find(call => call.method === 'PATCH').body.force, false);
  assert.ok(calls.some(call => call.url.includes('head_sha=published')));
  calls.length = 0;
  rejectRef = true;
  await assert.rejects(deployNotice(input), /fast forward/);
  assert.ok(!calls.some(call => call.url.includes('/actions/')));
  rejectRef = false;
  missingManifest = true;
  const initial = await deployNotice(input);
  assert.equal(initial.revision, 1);
  assert.equal(Object.hasOwn(JSON.parse(manifestJson), 'project'), false);
  console.log('PASS: validation, atomic JSON/image commit, versioned image paths, CDN verification, concurrent update protection');
} finally {
  globalThis.fetch = originalFetch;
  globalThis.setTimeout = originalTimer;
}
