import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Card, Button } from "animal-island-ui";
import { useBlog } from "../../context/BlogContext";

function highlightText(text: string, query: string) {
  if (!query.trim()) return [{ text, highlight: false, key: 0 }];
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase()
      ? { text: part, highlight: true, key: i }
      : { text: part, highlight: false, key: i }
  );
}

function getMatchSnippet(post: ReturnType<typeof useBlog>["posts"][0], query: string): string | null {
  const q = query.toLowerCase();
  if (post.excerpt.toLowerCase().includes(q)) return post.excerpt;
  for (const s of post.sections) {
    if (s.heading.toLowerCase().includes(q)) return s.heading;
    for (const p of s.paragraphs) {
      if (p.toLowerCase().includes(q)) {
        const idx = p.toLowerCase().indexOf(q);
        const start = Math.max(0, idx - 30);
        const end = Math.min(p.length, idx + query.length + 40);
        return (start > 0 ? "..." : "") + p.slice(start, end) + (end < p.length ? "..." : "");
      }
    }
  }
  return null;
}

function readTime(post: ReturnType<typeof useBlog>["posts"][0]): number {
  const chars = post.sections.reduce((sum, s) =>
    sum + s.heading.length + s.paragraphs.reduce((a, p) => a + p.length, 0), 0);
  return Math.max(1, Math.round(chars / 400));
}

export default function Search() {
  const navigate = useNavigate();
  const { posts } = useBlog();
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const input = document.querySelector(".search-page-input") as HTMLInputElement;
    input?.focus();
  }, []);

  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem("lwyblog-search-history");
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  });

  const saveToHistory = (q: string) => {
    const updated = [q, ...searchHistory.filter((h) => h !== q)].slice(0, 5);
    setSearchHistory(updated);
    localStorage.setItem("lwyblog-search-history", JSON.stringify(updated));
  };

  // Popular tags
  const popularTags = useMemo(() => {
    const map: Record<string, number> = {};
    for (const p of posts) {
      for (const t of p.tags) {
        map[t] = (map[t] || 0) + 1;
      }
    }
    return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([name]) => name);
  }, [posts]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return posts.filter((p) => {
      if (p.title.toLowerCase().includes(q)) return true;
      if (p.tags.some((t) => t.toLowerCase().includes(q))) return true;
      if (p.excerpt.toLowerCase().includes(q)) return true;
      if (p.sections.some((s) => {
        if (s.heading.toLowerCase().includes(q)) return true;
        return s.paragraphs.some((para) => para.toLowerCase().includes(q));
      })) return true;
      return false;
    });
  }, [posts, query]);

  const goToPost = (postId: string) => {
    if (query.trim()) saveToHistory(query.trim());
    navigate(`/posts/${postId}`);
  };

  const isEmpty = !query.trim();
  const hasResults = query.trim() && results.length > 0;
  const noResults = query.trim() && results.length === 0;

  return (
    <div style={{
      maxWidth: 720,
      margin: "0 auto",
      padding: "32px 20px 80px",
      color: dark ? "#d4d4db" : "#2a2a35",
    }}>
      {/* Hero search bar */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{
          fontSize: 28,
          fontWeight: 800,
          margin: "0 0 8px",
        }}>搜索文章</h1>
        <p style={{
          fontSize: 14,
          opacity: 0.5,
          margin: "0 0 24px",
        }}>
          共 {posts.length} 篇文章，{new Set(posts.flatMap((p) => p.tags)).size} 个标签
        </p>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索标题、标签或正文内容..."
            onKeyDown={(e) => {
              if (e.key === "Enter" && results.length > 0) {
                goToPost(results[0].id);
              }
            }}
            className="search-page-input"
          />
          <div style={{ fontSize: 12, opacity: 0.35, marginTop: 8 }}>
            输入关键词即时搜索 · 回车打开第一篇结果
          </div>
        </div>
      </div>

      {/* Empty state */}
      {isEmpty && (
        <>
          {/* Search history */}
          {searchHistory.length > 0 && (
            <div style={{ marginBottom: 28 }}>
              <div style={{
                fontSize: 13,
                fontWeight: 600,
                opacity: 0.45,
                marginBottom: 10,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}>最近搜索</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {searchHistory.map((h) => (
                  <span
                    key={h}
                    onClick={() => setQuery(h)}
                    style={{
                      fontSize: 14,
                      padding: "6px 18px",
                      borderRadius: 18,
                      cursor: "pointer",
                      background: dark ? "rgba(160,160,180,0.10)" : "rgba(140,140,165,0.07)",
                      border: dark ? "1px solid rgba(160,160,180,0.12)" : "1px solid rgba(140,140,165,0.10)",
                    }}
                  >
                    {h}
                  </span>
                ))}
                <span
                  onClick={() => {
                    setSearchHistory([]);
                    localStorage.removeItem("lwyblog-search-history");
                  }}
                  style={{
                    fontSize: 13,
                    padding: "6px 14px",
                    borderRadius: 18,
                    cursor: "pointer",
                    opacity: 0.35,
                    background: "transparent",
                  }}
                >清除记录</span>
              </div>
            </div>
          )}

          {/* Popular tags */}
          <div>
            <div style={{
              fontSize: 13,
              fontWeight: 600,
              opacity: 0.45,
              marginBottom: 10,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}>热门标签</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {popularTags.map((t) => (
                <span
                  key={t}
                  onClick={() => setQuery(t)}
                  style={{
                    fontSize: 14,
                    padding: "6px 16px",
                    borderRadius: 16,
                    cursor: "pointer",
                    background: dark ? "rgba(160,160,180,0.08)" : "rgba(140,140,165,0.06)",
                  }}
                >#{t}</span>
              ))}
            </div>
          </div>
        </>
      )}

      {/* No results */}
      {noResults && (
        <div style={{
          textAlign: "center",
          padding: "60px 20px",
        }}>
          <div style={{ fontSize: 48, marginBottom: 16, opacity: 0.6 }}>🔍</div>
          <p style={{
            fontSize: 15,
            opacity: 0.5,
            margin: "0 0 8px",
          }}>没有找到包含「{query}」的文章</p>
          <p style={{
            fontSize: 13,
            opacity: 0.35,
            margin: "0 0 24px",
          }}>试试其他关键词，或浏览热门标签</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
            {popularTags.slice(0, 6).map((t) => (
              <span
                key={t}
                onClick={() => setQuery(t)}
                style={{
                  fontSize: 13,
                  padding: "5px 14px",
                  borderRadius: 14,
                  cursor: "pointer",
                  background: dark ? "rgba(160,160,180,0.08)" : "rgba(140,140,165,0.06)",
                }}
              >#{t}</span>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {hasResults && (
        <div>
          <div style={{
            fontSize: 13,
            opacity: 0.45,
            fontWeight: 600,
            marginBottom: 16,
          }}>
            找到 {results.length} 篇匹配「{query}」的文章
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {results.map((post) => {
              const snippet = getMatchSnippet(post, query);
              return (
                <Card key={post.id}>
                  <div
                    onClick={() => goToPost(post.id)}
                    style={{
                      cursor: "pointer",
                      padding: "2px 0",
                    }}
                  >
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 12,
                      marginBottom: 8,
                    }}>
                      <div style={{ fontWeight: 700, fontSize: 17, lineHeight: 1.4, flex: 1 }}>
                        {highlightText(post.title, query).map((part) => (
                          <span
                            key={part.key}
                            style={part.highlight ? {
                              background: dark ? "rgba(200,160,60,0.35)" : "rgba(200,150,50,0.35)",
                              borderRadius: 3,
                              padding: "0 2px",
                            } : undefined}
                          >{part.text}</span>
                        ))}
                      </div>
                      <span style={{
                        fontSize: 12,
                        opacity: 0.4,
                        whiteSpace: "nowrap",
                        marginTop: 3,
                      }}>{post.date} · {readTime(post)} 分钟</span>
                    </div>
                    {snippet && (
                      <div style={{
                        fontSize: 14,
                        opacity: 0.55,
                        lineHeight: 1.7,
                        marginBottom: 10,
                      }}>
                        {snippet}
                      </div>
                    )}
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
                      {post.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: 11,
                            padding: "2px 10px",
                            borderRadius: 10,
                            background: dark ? "rgba(160,160,180,0.10)" : "rgba(140,140,165,0.08)",
                            fontWeight: query.trim().toLowerCase() === t.toLowerCase() ? 700 : 400,
                            color: query.trim().toLowerCase() === t.toLowerCase()
                              ? (dark ? "#c8c8d4" : "#5a5a68") : undefined,
                          }}
                        >#{t}</span>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
