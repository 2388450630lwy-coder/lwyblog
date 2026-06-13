/**
 * WordPress WXR → 博客数据迁移脚本
 * 用法: npx tsx scripts/migrate.ts
 */
import { XMLParser } from "fast-xml-parser";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WXR_PATH = path.join(process.env.HOME!, "Downloads/lwy_blog.WordPress.2026-06-13.xml");
const OUTPUT_PATH = path.join(__dirname, "..", "src", "data", "posts.ts");

// ─── Category config ───
function decodeNicename(n: string): string {
  try { return decodeURIComponent(n); } catch { return n; }
}

const NICENAME_TO_CAT: Record<string, string> = {
  linux: "linux", unity: "unity", tools: "tools",
  // English
  algorithm: "algorithm", pattern: "pattern", insight: "insight",
  "basic-algorithm": "algorithm",
  // URL-encoded Chinese (WP exports slugs this way)
  "%e8%ae%be%e8%ae%a1%e6%a8%a1%e5%bc%8f": "pattern",   // 设计模式
  "%e7%ae%97%e6%b3%95": "algorithm",                     // 算法
  "%e5%9f%ba%e7%a1%80%e7%ae%97%e6%b3%95": "algorithm",  // 基础算法
  "%e5%bf%83%e5%be%97": "insight",                       // 心得
  // Decoded Chinese
  "设计模式": "pattern",
  "算法": "algorithm",
  "基础算法": "algorithm",
  "心得": "insight",
};

const CAT_EMOJI: Record<string, string> = {
  linux: "🐧", unity: "🎮", tools: "🔧",
  algorithm: "📐", pattern: "🏗️", insight: "💭", default: "📝",
};

// ─── HTML → sections ───
interface Section {
  heading: string;
  paragraphs: string[];
}

const td = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced", bulletListMarker: "-" });
td.use(gfm);

function htmlToSections(html: string, fallbackTitle: string): Section[] {
  // Find all h1-h4 headings with their positions
  const re = /<h([1-4])[^>]*>(.*?)<\/h\1>/gi;
  interface Hit { index: number; end: number; title: string }
  const hits: Hit[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    hits.push({ index: m.index, end: m.index + m[0].length, title: m[2].replace(/<[^>]+>/g, "").trim() });
  }

  if (hits.length === 0) {
    const md = td.turndown(html).trim();
    return md ? [{ heading: fallbackTitle, paragraphs: splitMd(md) }] : [];
  }

  const sections: Section[] = [];

  // Content before first heading
  if (hits[0].index > 0) {
    const before = html.slice(0, hits[0].index).trim();
    if (before) {
      const md = td.turndown(before).trim();
      if (md) sections.push({ heading: fallbackTitle, paragraphs: splitMd(md) });
    }
  }

  // Content between headings
  for (let i = 0; i < hits.length; i++) {
    const start = hits[i].end;
    const end = i + 1 < hits.length ? hits[i + 1].index : html.length;
    const body = html.slice(start, end).trim();
    if (body) {
      const md = td.turndown(body).trim();
      if (md) sections.push({ heading: hits[i].title, paragraphs: splitMd(md) });
    }
  }

  return sections;
}

function splitMd(md: string): string[] {
  return md.split(/\n\n+/).map(p => p.trim()).filter(p => p);
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

// ─── Main ───
async function main() {
  console.log("Reading XML...");
  const xml = fs.readFileSync(WXR_PATH, "utf-8");

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    isArray: (name) => ["item", "category"].includes(name),
  });

  const items = parser.parse(xml).rss.channel.item || [];
  console.log(`Found ${items.length} items`);

  const blogPosts: any[] = [];
  let wpIdx = 0;

  for (const item of items) {
    // Filter: only published posts
    const status = stringItem(item, "wp:status");
    const postType = stringItem(item, "wp:post_type");
    if (postType !== "post") continue;
    if (status !== "publish") continue;

    const title = stringItem(item, "title").replace(/^"|"$/g, "");
    if (!title || title === "lwy_blog") continue;

    wpIdx++;
    const pubDate = stringItem(item, "wp:post_date") || stringItem(item, "pubDate");
    const dateStr = pubDate.slice(0, 10);

    const html = stringItem(item, "content:encoded");

    // Categories & tags
    const cats: string[] = [];
    const tags: string[] = [];
    const catArr = Array.isArray(item.category) ? item.category : (item.category ? [item.category] : []);
    for (const c of catArr) {
      const domain = c["@_domain"] || "";
      const nicename = c["@_nicename"] || "";
      const text = c["#text"] || c["_"] || "";
      if (domain === "category" && nicename) cats.push(nicename);
      else if (domain === "post_tag" && nicename) tags.push(text || nicename);
    }

    const primaryCat = cats[0] || "default";
    const decoded = decodeNicename(primaryCat);
    const catId = NICENAME_TO_CAT[primaryCat] || NICENAME_TO_CAT[decoded] || "default";

    // Excerpt
    const excerptRaw = stringItem(item, "excerpt:encoded");
    const excerpt = excerptRaw ? stripHtml(excerptRaw).slice(0, 120) : stripHtml(html).slice(0, 120) + "...";

    // HTML → sections
    const sections = htmlToSections(html, title);

    blogPosts.push({
      id: `wp-${wpIdx}`,
      tags: [...new Set(tags)],
      categoryId: catId,
      title,
      date: dateStr,
      cover: CAT_EMOJI[catId] || "📝",
      excerpt,
      sections,
      takeaways: [],
    });
  }

  console.log(`Extracted ${blogPosts.length} published posts`);

  // Generate TypeScript
  const output = `export interface PostSection {
  heading: string;
  paragraphs: string[];
}

export interface Category {
  id: string;
  name: string;
}

export interface Post {
  id: string;
  tags: string[];
  categoryId?: string;
  title: string;
  date: string;
  cover: string;
  coverImage?: string;
  excerpt: string;
  sections: PostSection[];
  takeaways: string[];
}

export const DEFAULT_CATEGORY_ID = "default";
export const DEFAULT_CATEGORY_NAME = "默认分类";

export const posts: Post[] = ${JSON.stringify(blogPosts, null, 2)};
`;

  fs.writeFileSync(OUTPUT_PATH, output, "utf-8");
  console.log(`✅ Written ${blogPosts.length} posts → ${OUTPUT_PATH}`);

  // Stats
  const catCounts: Record<string, number> = {};
  for (const p of blogPosts) catCounts[p.categoryId] = (catCounts[p.categoryId] || 0) + 1;
  console.log("\nCategory distribution:");
  for (const [cat, n] of Object.entries(catCounts)) console.log(`  ${cat}: ${n} posts`);
}

function stringItem(item: any, key: string): string {
  const v = item[key];
  if (typeof v === "string") return v;
  if (Array.isArray(v)) return String(v[0] || "");
  return "";
}

main().catch(console.error);
