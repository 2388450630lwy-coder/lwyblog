import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "animal-island-ui";
import { useBlog } from "../../context/BlogContext";
import type { PostSection } from "../../data/posts";
import "./Categories.less";

function readTime(sections: PostSection[]): number {
  const chars = sections.reduce((sum, s) => {
    return sum + s.heading.length + s.paragraphs.reduce((a, p) => a + p.length, 0);
  }, 0);
  return Math.max(1, Math.round(chars / 400));
}

const CAT_COLORS = [
  "#7a8cb8",
  "#19c8b9",
  "#86d67a",
  "#8a88c0",
  "#6888aa",
  "#5aaf8a",
  "#6e88b0",
  "#3db8a0",
];

function getCatColor(index: number): string {
  return CAT_COLORS[index % CAT_COLORS.length];
}

function CategoryIcon({ color, size = 28 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M2 6a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z" />
    </svg>
  );
}

export default function Categories() {
  const navigate = useNavigate();
  const { posts, categories } = useBlog();
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => {
    const saved = sessionStorage.getItem("lwyblog-cat-expanded");
    return saved ? new Set([saved]) : new Set<string>();
  });
  const [showAllIds, setShowAllIds] = useState<Set<string>>(new Set());
  const SHOW_LIMIT = 5;

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

  const categoryPosts = useMemo(() => {
    const map: Record<string, typeof posts> = {};
    for (const cat of categoryStats) {
      map[cat.id] = posts.filter((p) => (p.categoryId || "default") === cat.id);
    }
    return map;
  }, [posts, categoryStats]);

  const totalPosts = categoryStats.reduce((sum, c) => sum + c.count, 0);
  const topCategory = categoryStats[0];

  const handleToggle = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      const arr = [...next];
      if (arr.length > 0) sessionStorage.setItem("lwyblog-cat-expanded", arr[0]);
      else sessionStorage.removeItem("lwyblog-cat-expanded");
      return next;
    });
  };

  return (
    <div
      className={dark ? "categories categories--dark" : "categories"}
      style={{ color: dark ? "#e4e4ea" : "#3b2f22" }}
    >
      <div className="categories-container">
        <section className="categories-hero">
          <div className="categories-hero-glow" aria-hidden="true" />
          <span className="categories-spark categories-spark--1" aria-hidden="true" />
          <span className="categories-spark categories-spark--2" aria-hidden="true" />
          <span className="categories-spark categories-spark--3" aria-hidden="true" />
          <h1 className="categories-title">文章分类</h1>
          <p className="categories-subtitle">
            {categoryStats.length} 个分类 · {totalPosts} 篇文章
          </p>
          <div className="categories-summary">
            <span>{topCategory?.name || "暂无分类"}</span>
            <span>{topCategory?.count || 0} 篇最多</span>
          </div>
        </section>

        <div className="categories-toolbar">
          {expandedIds.size > 0 ? (
            <>
              <span>已展开 {expandedIds.size} 个分类</span>
              <Button
                type="text"
                onClick={() => {
                  setExpandedIds(new Set());
                  sessionStorage.removeItem("lwyblog-cat-expanded");
                }}
              >
                收起全部
              </Button>
            </>
          ) : (
            <Button
              type="text"
              onClick={() => {
                const all = new Set(categoryStats.map((c) => c.id));
                setExpandedIds(all);
                if (all.size > 0) sessionStorage.setItem("lwyblog-cat-expanded", [...all][0]);
              }}
            >
              展开全部
            </Button>
          )}
        </div>

        <div className="categories-list">
          {categoryStats.map((cat, index) => {
            const isExpanded = expandedIds.has(cat.id);
            const posts = categoryPosts[cat.id] || [];
            return (
              <div
                key={cat.id}
                className={`categories-item ${isExpanded ? "categories-item--expanded" : ""}`}
              >
                <div
                  className={`categories-card ${isExpanded ? "categories-card--expanded" : ""}`}
                  onClick={() => handleToggle(cat.id)}
                >
                  <span className="categories-card-icon">
                    <CategoryIcon color={getCatColor(index)} />
                  </span>
                  <div className="categories-card-body">
                    <span className="categories-card-name">{cat.name}</span>
                    <span className="categories-card-count">{cat.count} 篇</span>
                  </div>
                  <span className={`categories-card-chevron ${isExpanded ? "categories-card-chevron--open" : ""}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </div>

                {isExpanded && (
                  <div className="categories-posts">
                    {(showAllIds.has(cat.id) ? posts : posts.slice(0, SHOW_LIMIT)).map((post) => (
                      <div
                        key={post.id}
                        className="categories-post-card"
                        onClick={() => navigate(`/posts/${post.id}`)}
                      >
                        <span className="categories-post-cover">{post.cover}</span>
                        <div className="categories-post-info">
                          <h3 className="categories-post-title">{post.title}</h3>
                          <div className="categories-post-meta">
                            <span>{post.date}</span>
                            <span>约 {readTime(post.sections)} 分钟</span>
                            <span className="categories-post-tags">
                              {post.tags.map((t) => (
                                <span key={t} className="categories-tag">#{t}</span>
                              ))}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                    {posts.length > SHOW_LIMIT && !showAllIds.has(cat.id) && (
                      <div
                        className="categories-show-more"
                        onClick={() => setShowAllIds((prev) => new Set(prev).add(cat.id))}
                      >
                        展开全部 {posts.length} 篇
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
