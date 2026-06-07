import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "animal-island-ui";
import { usePosts } from "../../hooks/usePosts";
import { useCategories } from "../../hooks/useCategories";
import "./Categories.less";

const EMOJI_MAP: Record<string, string> = {
  "前端": "🖥",
  "后端": "⚙️",
  "读书": "📚",
  "咖啡": "☕",
  "python": "🐍",
  "react": "⚛️",
  "typescript": "🔷",
  "css": "🎨",
  "node.js": "🟢",
  "vue": "💚",
  "默认分类": "📂",
};

function getEmoji(name: string): string {
  if (EMOJI_MAP[name]) return EMOJI_MAP[name];
  const lower = name.toLowerCase();
  for (const [key, emoji] of Object.entries(EMOJI_MAP)) {
    if (lower.includes(key.toLowerCase())) return emoji;
  }
  return "📂";
}

export default function Categories() {
  const navigate = useNavigate();
  const { posts } = usePosts();
  const { categories } = useCategories();
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const [expandedId, setExpandedId] = useState<string | null>(null);

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

  const categoryStats = useMemo(() => {
    const stats: { id: string; name: string; count: number }[] = [];

    for (const cat of categories) {
      const count = posts.filter((p) => (p.categoryId || "default") === cat.id).length;
      if (count > 0) stats.push({ ...cat, count });
    }

    return stats.sort((a, b) => b.count - a.count);
  }, [posts, categories]);

  const expandedPosts = useMemo(() => {
    if (!expandedId) return [];
    return posts.filter((p) => (p.categoryId || "default") === expandedId);
  }, [posts, expandedId]);

  const totalPosts = categoryStats.reduce((sum, c) => sum + c.count, 0);

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div
      className={dark ? "categories categories--dark" : "categories"}
      style={{
        background: dark ? "#2a241a" : "transparent",
        color: dark ? "#f3e9d2" : "#3b2f22",
      }}
    >
      <div className="categories-container">
        <h1 className="categories-title">📂 文章分类</h1>
        <p className="categories-subtitle">
          共 {categoryStats.length} 个分类 · {totalPosts} 篇文章
        </p>

        {/* Category cards grid */}
        <div className="categories-grid">
          {categoryStats.map((cat) => (
            <div
              key={cat.id}
              className={`categories-card ${expandedId === cat.id ? "categories-card--expanded" : ""}`}
              onClick={() => handleToggle(cat.id)}
            >
              <div className="categories-card-emoji">{getEmoji(cat.name)}</div>
              <div className="categories-card-name">{cat.name}</div>
              <div className="categories-card-count">{cat.count} 篇</div>
            </div>
          ))}
        </div>

        {/* Expanded posts */}
        {expandedId && (
          <div className="categories-expanded">
            <div className="categories-expanded-header">
              <span>
                {getEmoji(categoryStats.find((c) => c.id === expandedId)?.name || "")}{" "}
                {categoryStats.find((c) => c.id === expandedId)?.name} 的文章
              </span>
              <Button type="text" onClick={() => setExpandedId(null)}>
                收起
              </Button>
            </div>
            <div className="categories-posts">
              {expandedPosts.map((post) => (
                <Card key={post.id} color="app-green">
                  <div
                    className="categories-post-card"
                    onClick={() => navigate(`/posts/${post.id}`)}
                  >
                    <span className="categories-post-cover">{post.cover}</span>
                    <div className="categories-post-info">
                      <h3 className="categories-post-title">{post.title}</h3>
                      <div className="categories-post-meta">
                        <span>{post.date}</span>
                        <span className="categories-post-tags">
                          {post.tags.map((t) => (
                            <span key={t} className="categories-tag">#{t}</span>
                          ))}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
