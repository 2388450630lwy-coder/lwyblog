import { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "animal-island-ui";
import { usePosts } from "../../hooks/usePosts";
import "./Tags.less";

interface TagStat {
  name: string;
  count: number;
}

export default function Tags() {
  const navigate = useNavigate();
  const { posts } = usePosts();
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const [selectedTag, setSelectedTag] = useState<string | null>(
    () => sessionStorage.getItem("lwyblog-tags-filter") || null
  );
  const resultsRef = useRef<HTMLDivElement>(null);

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
    if (!selectedTag) return [];
    return posts.filter((p) => p.tags.includes(selectedTag));
  }, [posts, selectedTag]);

  const maxCount = tagStats.length > 0 ? tagStats[0].count : 1;

  const handleTagClick = (tag: string) => {
    const isSame = selectedTag === tag;
    const next = isSame ? null : tag;
    setSelectedTag(next);
    if (next) sessionStorage.setItem("lwyblog-tags-filter", next);
    else sessionStorage.removeItem("lwyblog-tags-filter");
    if (!isSame) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <div
      className={dark ? "tags tags--dark" : "tags"}
      style={{
        background: dark ? "#2a241a" : "transparent",
        color: dark ? "#f3e9d2" : "#3b2f22",
      }}
    >
      <div className="tags-container">
        <h1 className="tags-title">🏷️ 标签云</h1>
        <p className="tags-subtitle">共 {tagStats.length} 个标签</p>

        <div className="tags-cloud">
          {tagStats.map((tag) => {
            const size = 0.85 + (tag.count / maxCount) * 1.1;
            const isActive = selectedTag === tag.name;
            return (
              <span
                key={tag.name}
                className={`tags-item ${isActive ? "tags-item--active" : ""}`}
                style={{
                  fontSize: `${size}em`,
                  opacity: selectedTag && !isActive ? 0.35 : 1,
                }}
                onClick={() => handleTagClick(tag.name)}
              >
                #{tag.name}
                <sup className="tags-item-count">{tag.count}</sup>
              </span>
            );
          })}
        </div>

        {/* Results area */}
        <div ref={resultsRef} className="tags-results">
          <div className="tags-results-header">
            <span>
              {selectedTag
                ? <>标签「<strong>#{selectedTag}</strong>」的文章（{filteredPosts.length} 篇）</>
                : <>全部文章（{posts.length} 篇）</>
              }
            </span>
            {selectedTag && (
              <Button type="text" onClick={() => setSelectedTag(null)}>
                清除筛选
              </Button>
            )}
          </div>
          <div className="tags-posts-list">
            {(selectedTag ? filteredPosts : posts).map((post) => (
              <Card key={post.id} color="app-green">
                <div
                  className="tags-post-card"
                  onClick={() => navigate(`/posts/${post.id}`)}
                >
                  <span className="tags-post-cover">{post.cover}</span>
                  <div className="tags-post-info">
                    <h3 className="tags-post-title">{post.title}</h3>
                    <div className="tags-post-meta">
                      <span>{post.date}</span>
                      <span style={{ marginLeft: 8, display: "flex", gap: 4, flexWrap: "wrap" }}>
                        {post.tags.map((t) => (
                          <span key={t} style={{ fontSize: 12, opacity: 0.6 }}>#{t}</span>
                        ))}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
