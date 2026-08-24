import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../../context/BlogContext";
import type { PostSection, Post } from "../../data/posts";
import "./Archive.less";

function readTime(sections: PostSection[]): number {
  const chars = sections.reduce((sum, s) => {
    return sum + s.heading.length + s.paragraphs.reduce((a, p) => a + p.length, 0);
  }, 0);
  return Math.max(1, Math.round(chars / 400));
}

function formatDay(date: string): string {
  const d = date.split("-")[2];
  return d ? `${parseInt(d, 10)}日` : date;
}

interface GroupedPosts {
  year: string;
  months: {
    month: string;
    posts: Post[];
  }[];
  total: number;
}

function useGroupedPosts(posts: Post[]): GroupedPosts[] {
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
  "01": "一月",
  "02": "二月",
  "03": "三月",
  "04": "四月",
  "05": "五月",
  "06": "六月",
  "07": "七月",
  "08": "八月",
  "09": "九月",
  "10": "十月",
  "11": "十一月",
  "12": "十二月",
};

export default function Archive() {
  const navigate = useNavigate();
  const { posts } = useBlog();
  const grouped = useGroupedPosts(posts);
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const [collapsedYears, setCollapsedYears] = useState<Set<string>>(() => {
    if (grouped.length <= 1) return new Set<string>();
    return new Set(grouped.slice(1).map((g) => g.year));
  });
  const [collapsedMonths, setCollapsedMonths] = useState<Set<string>>(new Set());

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
      style={{ color: dark ? "#e4e4ea" : "#3b2f22" }}
    >
      <div className="archive-container">
        <section className="archive-hero">
          <div className="archive-hero-glow" aria-hidden="true" />
          <span className="archive-spark archive-spark--1" aria-hidden="true" />
          <span className="archive-spark archive-spark--2" aria-hidden="true" />
          <span className="archive-spark archive-spark--3" aria-hidden="true" />
          <h1 className="archive-title">文章归档</h1>
          <p className="archive-subtitle">
            {grouped.length} 个年份 · {posts.length} 篇文章
          </p>
          <div className="archive-summary">
            <span>{grouped[0]?.year || "暂无年份"}</span>
            <span>{grouped[0]?.total || 0} 篇最新</span>
          </div>
        </section>

        <div className="archive-timeline">
          {grouped.map((group) => (
            <div key={group.year} className="archive-year-group">
              <div
                className="archive-year-header"
                onClick={() => {
                  setCollapsedYears((prev) => {
                    const next = new Set(prev);
                    if (next.has(group.year)) next.delete(group.year);
                    else next.add(group.year);
                    return next;
                  });
                }}
              >
                <span className="archive-year-marker" />
                <span className="archive-year">{group.year}</span>
                <span className="archive-year-count">{group.total} 篇</span>
                <span className={`archive-year-chevron ${!collapsedYears.has(group.year) ? "archive-year-chevron--open" : ""}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </div>

              {!collapsedYears.has(group.year) && (
                <div className="archive-months">
                  {group.months.map((m) => {
                    const key = `${group.year}-${m.month}`;
                    const isOpen = !collapsedMonths.has(key);
                    return (
                      <div key={key} className="archive-month-row">
                        <div
                          className="archive-month-label"
                          onClick={() => {
                            setCollapsedMonths((prev) => {
                              const next = new Set(prev);
                              if (next.has(key)) next.delete(key);
                              else next.add(key);
                              return next;
                            });
                          }}
                        >
                          <span className="archive-month-dot" />
                          <span className="archive-month-name">
                            {MONTH_NAMES[m.month] || `${m.month}月`}
                          </span>
                          <span className="archive-month-count">{m.posts.length} 篇</span>
                          <span className={`archive-month-chevron ${isOpen ? "archive-month-chevron--open" : ""}`}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </span>
                        </div>
                        {isOpen && (
                          <div className="archive-month-posts">
                            {m.posts.map((post) => (
                              <div
                                key={post.id}
                                className="archive-post-link"
                                onClick={() => navigate(`/posts/${post.id}`)}
                              >
                                <span className="archive-post-cover">{post.cover}</span>
                                <div className="archive-post-info">
                                  <h3 className="archive-post-title">{post.title}</h3>
                                  <div className="archive-post-meta">
                                    <span>{formatDay(post.date)}</span>
                                    <span>约 {readTime(post.sections)} 分钟</span>
                                    <span className="archive-post-tags">
                                      {post.tags.map((t) => (
                                        <span key={t} className="archive-tag">#{t}</span>
                                      ))}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
