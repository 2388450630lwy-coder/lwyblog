/**
 * 图片迁移脚本：下载 WordPress 图片 → 压缩 base64 → 替换@img/
 * 用法: npx tsx scripts/migrate-images.ts
 */
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_PATH = path.join(__dirname, "..", "src", "data", "posts.ts");
const IMAGES_OUT = path.join(__dirname, "..", "src", "data", "seed-images.json");
const MAX_WIDTH = 550;       // max width in px
const JPEG_QUALITY = 70;     // JPEG quality (0-100)

function genId(): string {
  return Math.random().toString(36).slice(2, 10);
}

async function downloadAndCompress(url: string): Promise<string | null> {
  try {
    const resp = await fetch(url);
    if (!resp.ok) return null;
    const inputBuffer = Buffer.from(await resp.arrayBuffer());

    // Compress with sharp: resize, convert to JPEG
    const compressed = await sharp(inputBuffer)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: JPEG_QUALITY })
      .toBuffer();

    const b64 = compressed.toString("base64");
    return `data:image/jpeg;base64,${b64}`;
  } catch (e) {
    console.error(`  Error: ${e}`);
    return null;
  }
}

async function main() {
  console.log("Reading posts.ts...");
  let postsContent = fs.readFileSync(POSTS_PATH, "utf-8");

  // Extract unique image URLs
  const urlRegex = /https?:\/\/[^")\]}\s]+\.(?:jpg|jpeg|png|gif|webp|svg)[^")\]}\s]*/gi;
  const urls = [...new Set(postsContent.match(urlRegex) || [])];
  console.log(`Found ${urls.length} unique image URLs\n`);

  // Download + compress
  const imageMap = new Map<string, { id: string; dataUrl: string }>();
  let idx = 0;
  let totalBytes = 0;
  for (const url of urls) {
    idx++;
    const name = path.basename(new URL(url).pathname);
    process.stdout.write(`[${idx}/${urls.length}] ${name} ... `);
    const dataUrl = await downloadAndCompress(url);
    if (dataUrl) {
      const id = genId();
      imageMap.set(url, { id, dataUrl });
      totalBytes += dataUrl.length;
      const kb = Math.round(dataUrl.length / 1024);
      console.log(`OK (${kb} KB)`);
    } else {
      console.log("FAIL");
    }
  }

  const totalMB = Math.round(totalBytes / 1024 / 1024 * 10) / 10;
  console.log(`\nDownloaded ${imageMap.size}/${urls.length} images, total size: ~${totalMB} MB`);

  // Replace URLs in posts
  let replaced = 0;
  for (const [url, { id }] of imageMap) {
    const before = postsContent.length;
    const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    postsContent = postsContent.replace(new RegExp(escapedUrl, "g"), `@img/${id}`);
    if (postsContent.length !== before) replaced++;
  }

  console.log(`Replaced URLs in ${replaced} unique URL patterns`);
  fs.writeFileSync(POSTS_PATH, postsContent, "utf-8");

  // Seed images
  const seedImages = [...imageMap.values()].map(({ id, dataUrl }) => ({
    id,
    dataUrl,
    name: id,
    date: new Date().toISOString().slice(0, 10),
  }));

  fs.writeFileSync(IMAGES_OUT, JSON.stringify(seedImages), "utf-8");
  console.log(`✅ Written ${seedImages.length} seed images → ${IMAGES_OUT}`);
}

main().catch(console.error);
