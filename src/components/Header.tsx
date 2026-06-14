import { useState, useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Switch, Modal, Input } from "animal-island-ui";
import { useBlog } from "../context/BlogContext";
import { loadSiteSettings } from "../utils/siteSettings";

interface HeaderProps {
  dark: boolean;
  onThemeChange: (checked: boolean) => void;
  onNavPreload?: (path: string) => void;
}

const NAV_ITEMS = [
  { label: "首页", path: "/" },
  { label: "分类", path: "/categories" },
  { label: "标签", path: "/tags" },
  { label: "归档", path: "/archive" },
];

export default function Header({ dark, onThemeChange, onNavPreload }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { posts } = useBlog();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => {
        const input = document.querySelector(".animal-modal input") as HTMLInputElement;
        input?.focus();
      }, 100);
    }
  }, [searchOpen]);

  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem("lwyblog-search-history");
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  });

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return posts.filter((p) => {
      if (p.title.toLowerCase().includes(q)) return true;
      if (p.tags.some((t) => t.toLowerCase().includes(q))) return true;
      if (p.excerpt.toLowerCase().includes(q)) return true;
      if (p.sections.some((s) => {
        if (s.heading.toLowerCase().includes(q)) return true;
        if (s.paragraphs.some((para) => para.toLowerCase().includes(q))) return true;
        return false;
      })) return true;
      return false;
    });
  }, [posts, searchQuery]);

  // Highlight matching text
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

  function getMatchSnippet(post: typeof posts[0], query: string): string | null {
    const q = query.toLowerCase();
    if (post.excerpt.toLowerCase().includes(q)) return post.excerpt;
    for (const s of post.sections) {
      if (s.heading.toLowerCase().includes(q)) return s.heading;
      for (const p of s.paragraphs) {
        if (p.toLowerCase().includes(q)) {
          const idx = p.toLowerCase().indexOf(q);
          const start = Math.max(0, idx - 20);
          const end = Math.min(p.length, idx + query.length + 30);
          return (start > 0 ? "..." : "") + p.slice(start, end) + (end < p.length ? "..." : "");
        }
      }
    }
    return null;
  }

  const handleSearchSelect = (postId: string) => {
    const q = searchQuery.trim();
    if (q) {
      const updated = [q, ...searchHistory.filter((h) => h !== q)].slice(0, 5);
      setSearchHistory(updated);
      localStorage.setItem("lwyblog-search-history", JSON.stringify(updated));
    }
    setSearchOpen(false);
    setSearchQuery("");
    navigate(`/posts/${postId}`);
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 12,
          zIndex: 50,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 64,
          padding: "0 20px",
          marginBottom: 24,
          maxWidth: 960,
          width: "100%",
          margin: "0 auto 24px",
          background: dark
            ? "linear-gradient(135deg, #3a3125 0%, #2b2418 100%)"
            : "linear-gradient(135deg, #fffdf5 0%, #fff8e3 100%)",
          border: dark ? "2px solid #4a3f2f" : "2px solid #e8dfc5",
          borderRadius: 20,
          boxShadow: dark
            ? "0 6px 20px -10px rgba(0, 0, 0, 0.4)"
            : "0 6px 20px -10px rgba(180, 140, 60, 0.25)",
          color: dark ? "#f3e9d2" : "#3b2f22",
        }}
      >
        <span
          style={{ fontSize: 20, fontWeight: 800, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          {loadSiteSettings().blogTitle}
        </span>

        {/* Desktop nav */}
        <div className="header-nav-desktop" style={{ display: "flex", gap: 2, alignItems: "center" }}>
          {NAV_ITEMS.map((item) =>
            isActive(item.path) ? (
              <Button
                key={item.path}
                type="primary"
                onClick={() => {
                  if (item.path === "/" && location.pathname === "/") {
                    document.getElementById("posts")?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate(item.path);
                  }
                }}
              >
                {item.label}
              </Button>
            ) : (
              <Button
                key={item.path}
                type="text"
                onClick={() => navigate(item.path)}
                onMouseEnter={() => onNavPreload?.(item.path)}
              >
                {item.label}
              </Button>
            )
          )}

          <Button type="text" onClick={() => setSearchOpen(true)}>
            搜索
          </Button>
          <Switch
            checked={dark}
            onChange={onThemeChange}
            checkedChildren="🌙"
            unCheckedChildren="☀️"
          />
        </div>

        {/* Mobile hamburger */}
        <button
          className="header-mobile-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "none",
            border: "none",
            background: "none",
            fontSize: 22,
            cursor: "pointer",
            padding: 4,
            color: dark ? "#f3e9d2" : "#3b2f22",
            fontFamily: "inherit",
          }}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="header-mobile-menu"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "rgba(0,0,0,0.3)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "fixed",
              top: 12,
              left: 12,
              right: 12,
              zIndex: 100,
              padding: "20px 16px",
              borderRadius: 20,
              background: dark
                ? "linear-gradient(135deg, #3a3125 0%, #2b2418 100%)"
                : "linear-gradient(135deg, #fffdf5 0%, #fff8e3 100%)",
              border: dark ? "2px solid #4a3f2f" : "2px solid #e8dfc5",
              boxShadow: dark
                ? "0 6px 20px -10px rgba(0, 0, 0, 0.4)"
                : "0 6px 20px -10px rgba(180, 140, 60, 0.25)",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.path}
                type={isActive(item.path) ? "primary" : "text"}
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate(item.path);
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              type="text"
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchOpen(true);
              }}
            >
              搜索
            </Button>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "8px 0" }}>
              <Switch
                checked={dark}
                onChange={onThemeChange}
                checkedChildren="🌙"
                unCheckedChildren="☀️"
              />
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      <Modal
        open={searchOpen}
        onClose={() => {
          setSearchOpen(false);
          setSearchQuery("");
        }}
        title="搜索文章"
        footer={null}
      >
        <div style={{ padding: "12px 0" }}>
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索标题、标签或正文内容..."
            onKeyDown={(e) => {
              if (e.key === "Enter" && searchResults.length > 0) {
                handleSearchSelect(searchResults[0].id);
              }
            }}
          />
          <div style={{ marginTop: 16, maxHeight: 360, overflowY: "auto" }}>
            {/* Search history - when no query */}
            {!searchQuery.trim() && searchHistory.length > 0 && (
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 12, opacity: 0.5, marginBottom: 8 }}>最近搜索</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {searchHistory.map((h) => (
                    <span
                      key={h}
                      onClick={() => setSearchQuery(h)}
                      style={{
                        fontSize: 13,
                        padding: "4px 12px",
                        borderRadius: 14,
                        cursor: "pointer",
                        background: dark ? "rgba(200,160,80,0.15)" : "rgba(180,140,60,0.1)",
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* No results */}
            {searchQuery.trim() && searchResults.length === 0 && (
              <p style={{ color: "#999", textAlign: "center", padding: 24 }}>
                没有找到相关文章
              </p>
            )}

            {/* Result count */}
            {searchQuery.trim() && searchResults.length > 0 && (
              <div style={{ fontSize: 12, opacity: 0.5, marginBottom: 8 }}>
                找到 {searchResults.length} 篇文章
              </div>
            )}

            {/* Results */}
            {searchResults.map((post) => {
              const snippet = getMatchSnippet(post, searchQuery);
              return (
                <div
                  key={post.id}
                  onClick={() => handleSearchSelect(post.id)}
                  style={{
                    padding: "12px 16px",
                    borderRadius: 12,
                    cursor: "pointer",
                    marginBottom: 8,
                    background: dark ? "linear-gradient(135deg, rgba(58,49,37,0.3), rgba(43,36,24,0.3))"
                      : "linear-gradient(135deg, rgba(255,253,245,0.5), rgba(255,248,227,0.5))",
                    border: dark ? "1px solid rgba(200,160,80,0.08)" : "1px solid rgba(180,140,60,0.08)",
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = dark
                      ? "linear-gradient(135deg, rgba(58,49,37,0.6), rgba(43,36,24,0.6))"
                      : "linear-gradient(135deg, rgba(255,253,245,0.85), rgba(255,248,227,0.85))";
                    (e.currentTarget as HTMLElement).style.borderColor = dark
                      ? "rgba(200,160,80,0.2)" : "rgba(180,140,60,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = dark
                      ? "linear-gradient(135deg, rgba(58,49,37,0.3), rgba(43,36,24,0.3))"
                      : "linear-gradient(135deg, rgba(255,253,245,0.5), rgba(255,248,227,0.5))";
                    (e.currentTarget as HTMLElement).style.borderColor = dark
                      ? "rgba(200,160,80,0.08)" : "rgba(180,140,60,0.08)";
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>
                    {highlightText(post.title, searchQuery).map((part) => (
                      <span
                        key={part.key}
                        style={part.highlight ? {
                          background: dark ? "rgba(255,200,60,0.35)" : "rgba(255,200,60,0.4)",
                          borderRadius: 2,
                          padding: "0 1px",
                        } : undefined}
                      >
                        {part.text}
                      </span>
                    ))}
                  </div>
                  {snippet && (
                    <div style={{ fontSize: 13, opacity: 0.6, marginBottom: 4, lineHeight: 1.5 }}>
                      {snippet}
                    </div>
                  )}
                  <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 12,
                          padding: "1px 8px",
                          borderRadius: 8,
                          background: dark
                            ? "rgba(200,160,80,0.15)"
                            : "rgba(180,140,60,0.12)",
                        }}
                      >
                        #{t}
                      </span>
                    ))}
                    <span style={{ fontSize: 12, color: "#999", marginLeft: 8 }}>
                      {post.date}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </>
  );
}
