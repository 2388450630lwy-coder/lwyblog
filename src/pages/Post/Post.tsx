import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Divider, Footer, Loading } from "animal-island-ui";
import { marked } from "marked";
import hljs from "highlight.js";
import { usePosts } from "../../hooks/usePosts";
import "../../markdown.css";
import "highlight.js/styles/atom-one-dark.css";
import type { PostSection } from "../../data/posts";

function sectionsToMarkdown(sections: PostSection[]): string {
  return sections
    .map((s) => {
      const heading = `## ${s.heading}`;
      const body = s.paragraphs.join("\n\n");
      return `${heading}\n\n${body}`;
    })
    .join("\n\n");
}

function escapeAttr(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildHtml(markdown: string): string {
  const renderer = new marked.Renderer();

  renderer.code = function ({ text, lang }: { text: string; lang?: string }) {
    const langLabel = lang || "plain text";

    let highlighted: string;
    if (lang && hljs.getLanguage(lang)) {
      const result = hljs.highlight(text, { language: lang });
      highlighted = result.value;
    } else {
      highlighted = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }

    return `
<div class="code-block-wrapper">
  <div class="code-block-header">
    <span class="code-block-lang">${langLabel}</span>
    <button class="code-block-copy" data-code="${escapeAttr(text)}">复制</button>
  </div>
  <pre><code class="hljs language-${langLabel}">${highlighted}</code></pre>
</div>`.trim();
  };

  marked.setOptions({ renderer });
  return marked.parse(markdown) as string;
}

function Post() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { posts } = usePosts();
  const dark = document.documentElement.classList.contains("dark");
  const [isLoading, setIsLoading] = useState(true);
  const isFirstLoad = useRef(true);
  const contentRef = useRef<HTMLElement>(null);

  const post = posts.find((p) => p.id === id);
  const currentIndex = posts.findIndex((p) => p.id === id);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);

    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      const timer = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [id]);

  const handleCopy = useCallback((e: MouseEvent) => {
    const btn = e.target as HTMLElement;
    if (!btn.classList.contains("code-block-copy")) return;
    const code = btn.getAttribute("data-code");
    if (!code) return;
    const text = code
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = "已复制";
      btn.classList.add("copied");
      setTimeout(() => {
        btn.textContent = "复制";
        btn.classList.remove("copied");
      }, 2000);
    }).catch(() => {});
  }, []);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.addEventListener("click", handleCopy);
    return () => el.removeEventListener("click", handleCopy);
  }, [handleCopy]);

  if (!post) {
    return (
      <div style={{ maxWidth: 800, margin: "60px auto", padding: "0 20px", textAlign: "center" }}>
        <Button type="text" onClick={() => navigate("/")}>
          ← 返回首页
        </Button>
        <Card color="app-pink">
          <div style={{ padding: 40 }}>
            <h2>文章未找到</h2>
            <p style={{ color: "#666" }}>这篇文章可能不存在或已被删除。</p>
          </div>
        </Card>
      </div>
    );
  }

  const htmlBody = buildHtml(sectionsToMarkdown(post.sections));

  return (
    <div
      className={dark ? "post--dark" : ""}
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "0 20px 40px",
        color: dark ? "#f3e9d2" : "#444",
        background: dark ? "#2a241a" : "transparent",
        minHeight: "100vh",
      }}
    >
      {isLoading && <Loading />}

      {/* Back button */}
      <div style={{ padding: "20px 0" }}>
        <Button type="text" onClick={() => navigate("/")}>
          ← 文章一覧に戻る
        </Button>
      </div>

      {/* Article header */}
      <Card color="app-green">
        <div style={{ padding: 32, textAlign: "center" }}>
          <div style={{ fontSize: 64 }}>{post.cover}</div>
          <span
            style={{
              background: "rgba(255,255,255,0.6)",
              padding: "2px 12px",
              borderRadius: 12,
              fontSize: 13,
            }}
          >
            #{post.tag}
          </span>
          <h1 style={{ margin: "12px 0", fontSize: 28 }}>{post.title}</h1>
          <div style={{ color: "#888", fontSize: 14 }}>
            {post.date}
          </div>
        </div>
      </Card>

      {/* Excerpt */}
      <p
        style={{
          fontSize: 16,
          color: "#555",
          lineHeight: 1.8,
          marginTop: 24,
          fontStyle: "italic",
        }}
      >
        {post.excerpt}
      </p>

      <Divider type="line-teal" />

      {/* Article body (Markdown rendered) */}
      <article
        ref={contentRef}
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: htmlBody }}
        style={{ fontSize: 16, lineHeight: 1.9, color: "#444" }}
      />

      {/* Takeaways */}
      <Card color="app-yellow">
        <div style={{ padding: 24 }}>
          <h3>🌿 这篇文章的要点</h3>
          <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
            {post.takeaways.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      </Card>

      <Divider type="wave-yellow" />

      {/* Prev/Next navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          marginTop: 20,
        }}
      >
        {prevPost ? (
          <Button onClick={() => navigate(`/posts/${prevPost.id}`)}>
            ← {prevPost.title}
          </Button>
        ) : (
          <div />
        )}
        {nextPost ? (
          <Button onClick={() => navigate(`/posts/${nextPost.id}`)}>
            {nextPost.title} →
          </Button>
        ) : (
          <div />
        )}
      </div>

      <div style={{ marginTop: 40 }}>
        <Footer type="sea" />
      </div>
    </div>
  );
}

export default Post;
