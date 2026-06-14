const REPO = "2388450630lwy-coder/lwyblog";
const TOKEN_KEY = "lwyblog-gh-token";

function getToken(): string {
  try {
    return localStorage.getItem(TOKEN_KEY) || "";
  } catch { return ""; }
}

export function getDeployToken(): string { return getToken(); }
export function setDeployToken(t: string): void { localStorage.setItem(TOKEN_KEY, t); }
export function hasDeployToken(): boolean { return !!getToken(); }

/** Get file SHA from GitHub */
async function getFileSha(path: string, token: string): Promise<string | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
      headers: { Authorization: `token ${token}`, Accept: "application/vnd.github.v3+json" },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.sha || null;
  } catch { return null; }
}

/** Commit a file to the repo via GitHub API */
async function commitFile(
  path: string,
  content: string,
  message: string,
  token: string,
): Promise<boolean> {
  try {
    const sha = await getFileSha(path, token);
    const body: Record<string, unknown> = {
      message,
      content: btoa(unescape(encodeURIComponent(content))),
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
    return res.ok;
  } catch {
    return false;
  }
}

/** Deploy site config + posts to GitHub */
export async function deploySiteConfig(json: string): Promise<boolean> {
  const token = getToken();
  if (!token) return false;
  return commitFile("src/data/site-config.json", json, "deploy: 更新站点配置", token);
}

export async function deployUserPosts(postsJson: string): Promise<boolean> {
  const token = getToken();
  if (!token) return false;
  return commitFile("src/data/user-posts.json", postsJson, "deploy: 更新文章", token);
}

export async function deploySiteAndPosts(configJson: string, postsJson: string): Promise<boolean> {
  const token = getToken();
  if (!token) return false;
  const ok1 = await commitFile("src/data/site-config.json", configJson, "deploy: 更新站点配置", token);
  const ok2 = await commitFile("src/data/user-posts.json", postsJson, "deploy: 更新文章", token);
  return ok1 && ok2;
}
