const REPO = "2388450630lwy-coder/lwyblog";
const TOKEN_KEY = "lwyblog-gh-token";

function getToken(): string {
  try {
    localStorage.removeItem(TOKEN_KEY);
    return sessionStorage.getItem(TOKEN_KEY) || "";
  } catch { return ""; }
}

export function getDeployToken(): string { return getToken(); }
export function setDeployToken(t: string): void {
  localStorage.removeItem(TOKEN_KEY);
  sessionStorage.setItem(TOKEN_KEY, t);
}
export function hasDeployToken(): boolean { return !!getToken(); }

/** Safely encode a string to base64 (handles Unicode correctly) */
function stringToBase64(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export interface DeployResult {
  ok: boolean;
  error?: string;
}

/** Get file SHA from GitHub */
async function getFileSha(path: string, token: string): Promise<{ sha: string | null; error?: string }> {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
      headers: { Authorization: `token ${token}`, Accept: "application/vnd.github.v3+json" },
    });
    if (!res.ok) {
      if (res.status === 404) return { sha: null };
      const body = await res.json().catch(() => ({}));
      return { sha: null, error: `读取 ${path}: ${res.status} ${body.message || res.statusText}` };
    }
    const data = await res.json();
    return { sha: data.sha || null };
  } catch (e) {
    return { sha: null, error: `网络错误: ${e instanceof Error ? e.message : String(e)}` };
  }
}

/** Commit a file to the repo via GitHub API */
async function commitFile(
  path: string,
  content: string,
  message: string,
  token: string,
): Promise<DeployResult> {
  try {
    const { sha, error: shaError } = await getFileSha(path, token);
    if (shaError) return { ok: false, error: shaError };

    const body: Record<string, unknown> = {
      message,
      content: stringToBase64(content),
    };
    if (sha) body.sha = sha;

    const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
      method: "PUT",
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errBody = await res.json().catch(() => ({ message: res.statusText }));
      return { ok: false, error: `${res.status}: ${errBody.message || "未知错误"}` };
    }

    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
}

/** Deploy site config to GitHub */
export async function deploySiteConfig(json: string): Promise<DeployResult> {
  const token = getToken();
  if (!token) return { ok: false, error: "未配置 Token" };
  return commitFile("src/data/site-config.json", json, "deploy: 更新站点配置", token);
}

export async function deployUserPosts(postsJson: string): Promise<DeployResult> {
  const token = getToken();
  if (!token) return { ok: false, error: "未配置 Token" };
  return commitFile("src/data/user-posts.json", postsJson, "deploy: 更新文章", token);
}

export async function deployImages(imagesJson: string): Promise<DeployResult> {
  const token = getToken();
  if (!token) return { ok: false, error: "未配置 Token" };
  return commitFile("public/data/user-images.json", imagesJson, "deploy: 更新图片", token);
}

export async function deploySiteAndPosts(configJson: string, postsJson: string): Promise<DeployResult> {
  const token = getToken();
  if (!token) return { ok: false, error: "未配置 Token" };
  const r1 = await commitFile("src/data/site-config.json", configJson, "deploy: 更新站点配置", token);
  if (!r1.ok) return r1;
  const r2 = await commitFile("src/data/user-posts.json", postsJson, "deploy: 更新文章", token);
  return r2;
}

/** Deploy everything: config + posts + images */
export async function deployAll(
  configJson: string,
  postsJson: string,
  imagesJson: string,
): Promise<DeployResult> {
  const token = getToken();
  if (!token) return { ok: false, error: "未配置 Token" };

  // Run sequentially to avoid race conditions on the same repo
  const r1 = await commitFile("src/data/site-config.json", configJson, "deploy: 更新站点配置", token);
  if (!r1.ok) return r1;
  const r2 = await commitFile("src/data/user-posts.json", postsJson, "deploy: 更新文章", token);
  if (!r2.ok) return r2;
  const r3 = await commitFile("public/data/user-images.json", imagesJson, "deploy: 更新图片", token);
  return r3;
}
