import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Divider } from "animal-island-ui";
import { marked } from "marked";
import hljs from "highlight.js";
import { usePosts } from "../../hooks/usePosts";
import { loadImages } from "../../utils/images";
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

interface TocItem {
  id: string;
  text: string;
  level: number;
}

/** Add id="" to every h2/h3 in the HTML string, return the processed HTML + TOC items. */
function injectHeadingIds(html: string): { html: string; toc: TocItem[] } {
  const el = document.createElement("div");
  el.innerHTML = html;

  const headings = el.querySelectorAll("h2, h3");
  const toc: TocItem[] = [];

  headings.forEach((h, i) => {
    const id = `heading-${i}`;
    h.setAttribute("id", id);
    toc.push({
      id,
      text: h.textContent || "",
      level: parseInt(h.tagName.charAt(1)),
    });
  });

  return { html: el.innerHTML, toc };
}

function Post() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { posts } = usePosts();
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  // React to dark mode toggle from Header
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const post = posts.find((p) => p.id === id);
  const currentIndex = posts.findIndex((p) => p.id === id);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  // Build HTML with heading IDs baked in — runs synchronously, no timing issues
  const { htmlBody, tocItems } = useMemo(() => {
    if (!post) return { htmlBody: "", tocItems: [] as TocItem[] };
    let md = sectionsToMarkdown(post.sections);
    // Resolve @img/{id} short references to base64 data URLs
    const images = loadImages();
    if (images.length > 0) {
      const map = new Map(images.map((img) => [img.id, img.dataUrl]));
      md = md.replace(/!\[([^\]]*)\]\(@img\/([^)]+)\)/g, (_, alt, id) => {
        const url = map.get(id);
        return url ? `![${alt}](${url})` : `![${alt}](missing:${id})`;
      });
    }
    const raw = buildHtml(md);
    const result = injectHeadingIds(raw);
    return { htmlBody: result.html, tocItems: result.toc };
  }, [post]);

  const [isLoading, setIsLoading] = useState(true);
  const [activeId, setActiveId] = useState("");
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackTop, setShowBackTop] = useState(false);
  const isFirstLoad = useRef(true);

  // Scroll: progress bar + back-to-top visibility
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const st = window.scrollY;
        const ch = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(ch > 0 ? Math.round((st / ch) * 100) : 0);
        setShowBackTop(st > 400);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  const contentRef = useRef<HTMLElement>(null);

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

  // Scroll spy — highlight the first heading at or below the viewport top
  useEffect(() => {
    if (tocItems.length === 0) return;

    let rafId = 0;

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;

        for (const item of tocItems) {
          const el = document.getElementById(item.id);
          if (!el) continue;
          if (el.getBoundingClientRect().top >= 0) {
            setActiveId(item.id);
            return;
          }
        }

        // All headings above viewport — highlight the last one
        const last = tocItems[tocItems.length - 1];
        setActiveId(last.id);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [tocItems]);

  const handleTocClick = (headingId: string) => {
    setActiveId(headingId);
    const el = document.getElementById(headingId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCopy = useCallback((e: MouseEvent) => {
    const btn = e.target as HTMLElement;
    if (!btn.classList.contains("code-block-copy")) return;
    const code = btn.getAttribute("data-code");
    if (!code) return;
    const text = code
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/>/g, ">");
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = "已复制";
      btn.classList.add("copied");
      setTimeout(() => {
        btn.textContent = "复制";
        btn.classList.remove("copied");
      }, 2000);
    }).catch(() => {});
  }, []);

  // Image zoom handler
  const handleImageClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "IMG") {
      setZoomedImg((target as HTMLImageElement).src);
    }
  }, []);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.addEventListener("click", handleCopy);
    el.addEventListener("click", handleImageClick);
    return () => {
      el.removeEventListener("click", handleCopy);
      el.removeEventListener("click", handleImageClick);
    };
  }, [handleCopy, handleImageClick]);

  if (!post) {
    return (
      <div style={{ maxWidth: 800, margin: "60px auto", padding: "0 20px", textAlign: "center" }}>
        <Button type="text" onClick={() => navigate("/")}>
          返回首页
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

  return (
    <div
      className={dark ? "blog--dark" : ""}
      style={{
        color: dark ? "#f3e9d2" : "#444",
        background: dark ? "#2a241a" : "transparent",
      }}
    >
      {/* Reading progress bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 3,
          width: `${scrollProgress}%`,
          zIndex: 100,
          background: "linear-gradient(90deg, #19c8b9, #86d67a)",
          borderRadius: "0 2px 2px 0",
          transition: "width 0.15s linear",
        }}
      />

      {isLoading && (
        <div className={dark ? "post-loading-bar post-loading-bar--dark" : "post-loading-bar"}>
          <div className="post-loading-bar__track" />
        </div>
      )}

      {/* TOC Sidebar — fixed on the left, aligned with header */}
      {tocItems.length > 0 && (
        <aside className="post-toc">
          <nav className="post-toc-nav">
              <h4 className="post-toc-title">目录</h4>
              <ul className="post-toc-list">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      className={`post-toc-link post-toc-level-${item.level} ${activeId === item.id ? "post-toc-active" : ""}`}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleTocClick(item.id);
                      }}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
        </aside>
      )}

      <div className="post-layout">
        <div className="post-main">
          {/* Back button */}
          <div style={{ padding: "20px 0" }}>
            <Button type="text" onClick={() => navigate("/")}>
              返回文章列表
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
                {post.tags.map((t) => (
                  <span key={t} style={{ margin: "0 4px" }}>#{t}</span>
                ))}
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

          {/* Article body (Markdown rendered, heading IDs baked into HTML) */}
          <article
            ref={contentRef}
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: htmlBody }}
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
              <div
                onClick={() => navigate(`/posts/${prevPost.id}`)}
                style={{
                  flex: 1,
                  cursor: "pointer",
                  padding: "14px 18px",
                  borderRadius: 14,
                  background: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)",
                  border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.06)",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.04)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)";
                }}
              >
                <div style={{ fontSize: 12, opacity: 0.5, marginBottom: 4 }}>上一篇</div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{prevPost.title}</div>
                <div style={{ fontSize: 12, opacity: 0.4, marginTop: 4 }}>{prevPost.date}</div>
              </div>
            ) : (
              <div style={{ flex: 1 }} />
            )}
            {nextPost ? (
              <div
                onClick={() => navigate(`/posts/${nextPost.id}`)}
                style={{
                  flex: 1,
                  cursor: "pointer",
                  padding: "14px 18px",
                  borderRadius: 14,
                  textAlign: "right",
                  background: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)",
                  border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.06)",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.04)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)";
                }}
              >
                <div style={{ fontSize: 12, opacity: 0.5, marginBottom: 4 }}>下一篇</div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{nextPost.title}</div>
                <div style={{ fontSize: 12, opacity: 0.4, marginTop: 4 }}>{nextPost.date}</div>
              </div>
            ) : (
              <div style={{ flex: 1 }} />
            )}
          </div>

        </div>
      </div>

      {/* Back to top button */}
      {showBackTop && !mobileTocOpen && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: 84,
            right: 20,
            zIndex: 44,
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: dark ? "2px solid #4a3f2f" : "2px solid #e8dfc5",
            background: dark
              ? "linear-gradient(135deg, #3a3125, #2b2418)"
              : "linear-gradient(135deg, #fffdf5, #fff8e3)",
            boxShadow: dark
              ? "0 4px 16px rgba(0,0,0,0.4)"
              : "0 4px 16px rgba(180,140,60,0.2)",
            cursor: "pointer",
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: dark ? "#f3e9d2" : "#3b2f22",
            fontFamily: "inherit",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      )}

      {/* Mobile TOC floating button */}
      {tocItems.length > 0 && (
        <>
          <button
            className="post-mobile-toc-btn"
            onClick={() => setMobileTocOpen(true)}
            style={{
              position: "fixed",
              bottom: 24,
              right: 20,
              zIndex: 45,
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: dark ? "2px solid #4a3f2f" : "2px solid #e8dfc5",
              background: dark
                ? "linear-gradient(135deg, #3a3125, #2b2418)"
                : "linear-gradient(135deg, #fffdf5, #fff8e3)",
              boxShadow: dark
                ? "0 4px 16px rgba(0,0,0,0.4)"
                : "0 4px 16px rgba(180,140,60,0.2)",
              cursor: "pointer",
              fontSize: 20,
              display: "none",
              color: dark ? "#f3e9d2" : "#3b2f22",
              fontFamily: "inherit",
            }}
          >
            📑
          </button>

          {/* Mobile TOC overlay */}
          {mobileTocOpen && (
            <div
              className="post-mobile-toc-overlay"
              onClick={() => setMobileTocOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 50,
                background: "rgba(0,0,0,0.3)",
              }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: "fixed",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  zIndex: 51,
                  maxHeight: "60vh",
                  overflowY: "auto",
                  padding: "20px 20px 32px",
                  borderRadius: "20px 20px 0 0",
                  background: dark ? "#2e2820" : "#fdfaf3",
                  border: dark ? "1px solid #3d352a" : "1px solid #e8ddcc",
                }}
              >
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 12,
                }}>
                  <span style={{ fontWeight: 700, fontSize: 16 }}>目录</span>
                  <button
                    onClick={() => setMobileTocOpen(false)}
                    style={{
                      border: "none",
                      background: "none",
                      fontSize: 18,
                      cursor: "pointer",
                      color: dark ? "#f3e9d2" : "#3b2f22",
                      fontFamily: "inherit",
                    }}
                  >
                    ✕
                  </button>
                </div>
                <nav>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <a
                          style={{
                            display: "block",
                            padding: "8px 12px",
                            fontSize: 14,
                            fontWeight: activeId === item.id ? 700 : 400,
                            color: dark ? "#e0d8c8" : "#3b2f22",
                            textDecoration: "none",
                            borderRadius: 8,
                            background: activeId === item.id
                              ? (dark ? "rgba(200,160,80,0.2)" : "rgba(180,140,60,0.15)")
                              : "transparent",
                            paddingLeft: item.level === 3 ? 28 : 12,
                          }}
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setMobileTocOpen(false);
                            handleTocClick(item.id);
                          }}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </>
      )}

      {/* Image zoom overlay */}
      {zoomedImg && (
        <div
          onClick={() => setZoomedImg(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
            padding: 40,
          }}
        >
          <img
            src={zoomedImg}
            alt=""
            style={{
              maxWidth: "100%",
              maxHeight: "90vh",
              borderRadius: 12,
              boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Post;
