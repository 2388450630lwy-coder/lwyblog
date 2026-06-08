import { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Switch, Modal, Input } from "animal-island-ui";
import { usePosts } from "../hooks/usePosts";

interface HeaderProps {
  dark: boolean;
  onThemeChange: (checked: boolean) => void;
}

const NAV_ITEMS = [
  { label: "首页", path: "/" },
  { label: "分类", path: "/categories" },
  { label: "标签", path: "/tags" },
  { label: "归档", path: "/archive" },
];

export default function Header({ dark, onThemeChange }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { posts } = usePosts();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return posts.filter((p) => {
      if (p.title.toLowerCase().includes(q)) return true;
      if (p.tags.some((t) => t.toLowerCase().includes(q))) return true;
      return false;
    });
  }, [posts, searchQuery]);

  const handleSearchSelect = (postId: string) => {
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
          LWY's Island
        </span>

        <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
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
      </header>

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
            placeholder="输入关键词搜索标题或标签..."
          />
          <div style={{ marginTop: 16, maxHeight: 360, overflowY: "auto" }}>
            {searchQuery.trim() && searchResults.length === 0 && (
              <p style={{ color: "#999", textAlign: "center", padding: 24 }}>
                没有找到相关文章
              </p>
            )}
            {searchResults.map((post) => (
              <div
                key={post.id}
                onClick={() => handleSearchSelect(post.id)}
                style={{
                  padding: "12px 16px",
                  borderRadius: 12,
                  cursor: "pointer",
                  marginBottom: 8,
                  background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = dark
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = dark
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(0,0,0,0.03)";
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>
                  {post.title}
                </div>
                <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 12,
                        padding: "1px 8px",
                        borderRadius: 8,
                        background: dark
                          ? "rgba(255,255,255,0.1)"
                          : "rgba(255,255,255,0.6)",
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
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}
