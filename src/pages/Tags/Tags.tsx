import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "animal-island-ui";
import { useBlog } from "../../context/BlogContext";
import "./Tags.less";

interface TagStat {
  name: string;
  count: number;
}

export default function Tags() {
  const navigate = useNavigate();
  const { posts } = useBlog();
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const [selectedTags, setSelectedTags] = useState<Set<string>>(() => {
    try {
      const saved = sessionStorage.getItem("lwyblog-tags-filter");
      return saved ? new Set(JSON.parse(saved)) : new Set<string>();
    } catch {
      return new Set<string>();
    }
  });
  const [showAll, setShowAll] = useState(false);
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

  const tagStats = useMemo(() => {
    const map: Record<string, number> = {};
    for (const post of posts) {
      for (const tag of post.tags) {
        map[tag] = (map[tag] || 0) + 1;
      }
    }
    const stats: TagStat[] = Object.entries(map).map(([name, count]) => ({
      name,
      count,
    }));
    return stats.sort((a, b) => b.count - a.count);
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (selectedTags.size === 0) return posts;
    return posts.filter((p) =>
      [...selectedTags].every((t) => p.tags.includes(t))
    );
  }, [posts, selectedTags]);

  const maxCount = tagStats.length > 0 ? tagStats[0].count : 1;
  const topTag = tagStats[0];

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      if (next.size > 0) sessionStorage.setItem("lwyblog-tags-filter", JSON.stringify([...next]));
      else sessionStorage.removeItem("lwyblog-tags-filter");
      return next;
    });
    setShowAll(false);
  };

  const clearTags = () => {
    setSelectedTags(new Set());
    sessionStorage.removeItem("lwyblog-tags-filter");
  };

  return (
    <div
      className={dark ? "tags tags--dark" : "tags"}
      style={{ color: dark ? "#e4e4ea" : "#3b2f22" }}
    >
      <div className="tags-container">
        <section className="tags-hero">
          <div className="tags-hero-glow" aria-hidden="true" />
          <span className="tags-spark tags-spark--1" aria-hidden="true" />
          <span className="tags-spark tags-spark--2" aria-hidden="true" />
          <span className="tags-spark tags-spark--3" aria-hidden="true" />
          <h1 className="tags-title">文章标签</h1>
          <p className="tags-subtitle">
            {tagStats.length} 个标签 · {posts.length} 篇文章
          </p>
          <div className="tags-summary">
            <span>{topTag ? `#${topTag.name}` : "暂无标签"}</span>
            <span>{topTag?.count || 0} 篇最多</span>
          </div>
        </section>

        <div className="tags-cloud">
          {tagStats.map((tag) => {
            const size = 0.88 + (tag.count / maxCount) * 0.22;
            const isActive = selectedTags.has(tag.name);
            return (
              <span
                key={tag.name}
                className={`tags-item ${isActive ? "tags-item--active" : ""}`}
                style={{
                  fontSize: `${size}em`,
                  opacity: selectedTags.size > 0 && !isActive ? 0.55 : 1,
                }}
                onClick={() => handleTagClick(tag.name)}
              >
                #{tag.name}
                <sup className="tags-item-count">{tag.count}</sup>
              </span>
            );
          })}
        </div>

        <div className="tags-results">
          <div className="tags-results-header">
            <span>
              {selectedTags.size > 0 ? (
                <>
                  标签 <strong>{[...selectedTags].map((t) => `#${t}`).join(" + ")}</strong>（{filteredPosts.length} 篇）
                </>
              ) : (
                <>全部文章（{posts.length} 篇）</>
              )}
            </span>
            {selectedTags.size > 0 && (
              <Button type="text" onClick={clearTags}>
                清除筛选
              </Button>
            )}
          </div>
          <div className="tags-posts-list">
            {(showAll ? filteredPosts : filteredPosts.slice(0, SHOW_LIMIT)).map((post) => (
              <div
                key={post.id}
                className="tags-post-card"
                onClick={() => navigate(`/posts/${post.id}`)}
              >
                <span className="tags-post-cover">{post.cover}</span>
                <div className="tags-post-info">
                  <h3 className="tags-post-title">{post.title}</h3>
                  <div className="tags-post-meta">
                    <span>{post.date}</span>
                    <span className="tags-post-meta-tags">
                      {post.tags.map((t) => (
                        <span key={t}>#{t}</span>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {filteredPosts.length > SHOW_LIMIT && !showAll && (
              <div
                className="tags-show-more"
                onClick={() => setShowAll(true)}
              >
                展开全部 {filteredPosts.length} 篇
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
