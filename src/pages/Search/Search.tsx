import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "animal-island-ui";
import { useBlog } from "../../context/BlogContext";
import "./Search.less";

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
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem("lwyblog-search-history");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const input = document.querySelector('input[placeholder="搜索标题、标签或正文内容..."]') as HTMLInputElement;
    input?.focus();
  }, []);

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

  const saveToHistory = (q: string) => {
    const updated = [q, ...searchHistory.filter((h) => h !== q)].slice(0, 5);
    setSearchHistory(updated);
    localStorage.setItem("lwyblog-search-history", JSON.stringify(updated));
  };

  const goToPost = (postId: string) => {
    if (query.trim()) saveToHistory(query.trim());
    navigate(`/posts/${postId}`);
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem("lwyblog-search-history");
  };

  const isEmpty = !query.trim();
  const hasResults = query.trim() && results.length > 0;
  const noResults = query.trim() && results.length === 0;

  return (
    <div
      className={dark ? "search search--dark" : "search"}
      style={{ color: dark ? "#e4e4ea" : "#3b2f22" }}
    >
      <div className="search-container">
        <section className="search-hero">
          <div className="search-hero-glow" aria-hidden="true" />
          <span className="search-spark search-spark--1" aria-hidden="true" />
          <span className="search-spark search-spark--2" aria-hidden="true" />
          <span className="search-spark search-spark--3" aria-hidden="true" />
          <h1 className="search-title">搜索文章</h1>
          <p className="search-subtitle">
            {posts.length} 篇文章 · {new Set(posts.flatMap((p) => p.tags)).size} 个标签
          </p>
          <div className="search-box">
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
          </div>
        </section>

        {isEmpty && (
          <div className="search-panels">
            {searchHistory.length > 0 && (
              <section className="search-panel">
                <div className="search-panel-header">
                  <h2>最近搜索</h2>
                  <button type="button" onClick={clearHistory}>清除记录</button>
                </div>
                <div className="search-chips">
                  {searchHistory.map((h) => (
                    <button key={h} type="button" className="search-chip" onClick={() => setQuery(h)}>
                      {h}
                    </button>
                  ))}
                </div>
              </section>
            )}

            <section className="search-panel">
              <div className="search-panel-header">
                <h2>热门标签</h2>
              </div>
              <div className="search-chips">
                {popularTags.map((t) => (
                  <button key={t} type="button" className="search-chip" onClick={() => setQuery(t)}>
                    #{t}
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}

        {noResults && (
          <section className="search-empty">
            <div className="search-empty-icon">?</div>
            <p>没有找到包含「{query}」的文章</p>
            <div className="search-chips search-chips--center">
              {popularTags.slice(0, 6).map((t) => (
                <button key={t} type="button" className="search-chip" onClick={() => setQuery(t)}>
                  #{t}
                </button>
              ))}
            </div>
          </section>
        )}

        {hasResults && (
          <section className="search-results">
            <div className="search-results-header">
              找到 {results.length} 篇匹配「<strong>{query}</strong>」的文章
            </div>

            <div className="search-posts-list">
              {results.map((post, index) => {
                const snippet = getMatchSnippet(post, query);
                return (
                  <div
                    key={`${post.id}-${index}`}
                    className="search-post-card"
                    onClick={() => goToPost(post.id)}
                  >
                    <span className="search-post-cover">{post.cover}</span>
                    <div className="search-post-info">
                      <div className="search-post-head">
                        <h3 className="search-post-title">
                          {highlightText(post.title, query).map((part) => (
                            <span key={part.key} className={part.highlight ? "search-highlight" : undefined}>
                              {part.text}
                            </span>
                          ))}
                        </h3>
                        <span className="search-post-date">{post.date} · {readTime(post)} 分钟</span>
                      </div>
                      {snippet && <p className="search-post-snippet">{snippet}</p>}
                      <div className="search-post-tags">
                        {post.tags.map((t) => (
                          <span
                            key={t}
                            className={query.trim().toLowerCase() === t.toLowerCase() ? "search-tag search-tag--active" : "search-tag"}
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
