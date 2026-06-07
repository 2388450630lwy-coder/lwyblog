import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../../hooks/usePosts";
import "./Archive.less";

interface GroupedPosts {
  year: string;
  months: {
    month: string;
    posts: ReturnType<typeof usePosts>["posts"];
  }[];
  total: number;
}

function useGroupedPosts(posts: ReturnType<typeof usePosts>["posts"]): GroupedPosts[] {
  return useMemo(() => {
    const map: Record<string, Record<string, typeof posts>> = {};

    for (const post of posts) {
      const [year, month] = post.date.split("-");
      if (!map[year]) map[year] = {};
      if (!map[year][month]) map[year][month] = [];
      map[year][month].push(post);
    }

    const years = Object.keys(map).sort((a, b) => b.localeCompare(a));
    return years.map((year) => {
      const months = Object.keys(map[year])
        .sort((a, b) => b.localeCompare(a))
        .map((month) => ({
          month,
          posts: map[year][month],
        }));
      const total = months.reduce((sum, m) => sum + m.posts.length, 0);
      return { year, months, total };
    });
  }, [posts]);
}

const MONTH_NAMES: Record<string, string> = {
  "01": "一月", "02": "二月", "03": "三月", "04": "四月",
  "05": "五月", "06": "六月", "07": "七月", "08": "八月",
  "09": "九月", "10": "十月", "11": "十一月", "12": "十二月",
};

export default function Archive() {
  const navigate = useNavigate();
  const { posts } = usePosts();
  const grouped = useGroupedPosts(posts);
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

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

  return (
    <div
      className={dark ? "archive archive--dark" : "archive"}
      style={{
        background: dark ? "#2a241a" : "transparent",
        color: dark ? "#f3e9d2" : "#3b2f22",
      }}
    >
      <div className="archive-container">
        <h1 className="archive-title">📅 文章归档</h1>
        <p className="archive-subtitle">共 {posts.length} 篇文章</p>

        <div className="archive-timeline">
          {grouped.map((group) => (
            <div key={group.year} className="archive-year-group">
              <div className="archive-year-header">
                <span className="archive-year-marker" />
                <span className="archive-year">📅 {group.year}</span>
                <span className="archive-year-count">{group.total} 篇</span>
              </div>

              <div className="archive-months">
                {group.months.map((m) => (
                  <div key={`${group.year}-${m.month}`} className="archive-month-row">
                    <div className="archive-month-label">
                      <span className="archive-month-dot" />
                      <span className="archive-month-name">
                        {MONTH_NAMES[m.month] || `${m.month}月`}
                      </span>
                      <span className="archive-month-count">{m.posts.length} 篇</span>
                    </div>
                    <div className="archive-month-posts">
                      {m.posts.map((post) => (
                        <div
                          key={post.id}
                          className="archive-post-link"
                          onClick={() => navigate(`/posts/${post.id}`)}
                        >
                          <span className="archive-post-cover">{post.cover}</span>
                          <span className="archive-post-date">{post.date}</span>
                          <span className="archive-post-title">{post.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
