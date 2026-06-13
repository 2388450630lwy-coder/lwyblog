import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Button,
  Modal,
  Typewriter,
  Collapse,
  Divider,
  Input,
  Switch,
  Time,
} from "animal-island-ui";
import { usePosts } from "../../hooks/usePosts";
import { useCategories } from "../../hooks/useCategories";
import { loadSiteSettings } from "../../utils/siteSettings";
import type { PostSection } from "../../data/posts";
import "./Home.less";

function readTime(sections: PostSection[]): number {
  const chars = sections.reduce((sum, s) => {
    return sum + s.heading.length + s.paragraphs.reduce((a, p) => a + p.length, 0);
  }, 0);
  return Math.max(1, Math.round(chars / 400));
}

function Home() {
  const navigate = useNavigate();
  const { posts } = usePosts();
  const { getCategoryName } = useCategories();
  const stats = [
    { label: "文章", value: "0", emoji: "📝" },
    { label: "分类", value: "0", emoji: "📂" },
    { label: "标签", value: "0", emoji: "🏷️" },
    { label: "始于", value: "0", emoji: "📅" },
  ];

  // Re-trigger count-up when posts load
  useEffect(() => {
    if (posts.length > 0) setStatsAnimated(false);
  }, [posts.length]);
  const [showCount, setShowCount] = useState(12);
  const [introOpen, setIntroOpen] = useState(
    () => !localStorage.getItem("lwyblog-visited")
  );
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [weeklyDigest, setWeeklyDigest] = useState(false);
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

  // Scroll reveal
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );
    requestAnimationFrame(() => {
      document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
    });
    return () => revealObserver.disconnect();
  }, [posts, showCount]);

  const closeIntro = useCallback(() => {
    setIntroOpen(false);
    localStorage.setItem("lwyblog-visited", "true");
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleSubscribe = useCallback(() => {
    if (email.includes("@")) {
      setSubscribed(true);
    }
  }, [email]);

  const s = loadSiteSettings();

  // ── Stats count-up ──
  const [statsAnimated, setStatsAnimated] = useState(false);
  useEffect(() => {
    if (posts.length === 0 || statsAnimated) return;
    setStatsAnimated(true);
    const targets = [
      posts.length,
      new Set(posts.map((p) => p.categoryId || "default")).size,
      new Set(posts.flatMap((p) => p.tags)).size,
      posts.length > 0 ? new Date(posts[posts.length - 1].date).getFullYear() : 0,
    ];
    const displays = document.querySelectorAll(".blog-stat-value");
    const duration = 800;
    const start = performance.now();
    const animate = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      displays.forEach((el, i) => {
        el.textContent = targets[i] > 0 ? String(Math.floor(targets[i] * eased)) : "—";
      });
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [posts.length, statsAnimated]);

  // ── Hero parallax on scroll ──
  useEffect(() => {
    const onScroll = () => {
      const st = window.scrollY;
      document.querySelectorAll<HTMLElement>(".blog-hero-cloud, .blog-hero-bird, .blog-hero-sun, .blog-hero-wave").forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-speed") || "0.3");
        el.style.transform = `translateY(${st * speed}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Shooting star (dark mode) ──
  useEffect(() => {
    if (!dark) return;
    const spawn = () => {
      const star = document.createElement("div");
      star.className = "shooting-star";
      star.style.left = (30 + Math.random() * 60) + "%";
      star.style.top = (Math.random() * 30) + "%";
      document.body.appendChild(star);
      setTimeout(() => star.remove(), 1500);
    };
    const timer = setInterval(spawn, 8000 + Math.random() * 6000);
    spawn();
    return () => clearInterval(timer);
  }, [dark]);

  return (
    <div className={`blog ${dark ? "blog--dark" : ""}`}>
      {/* Hero */}
      <section className="blog-hero">
        {/* Sunrise glow */}
        <div className="blog-hero-sun" data-speed="0.08" />
        {/* Clouds */}
        <div className="blog-hero-clouds">
          <span className="blog-hero-cloud blog-hero-cloud--1" data-speed="0.12">☁️</span>
          <span className="blog-hero-cloud blog-hero-cloud--2" data-speed="0.06">☁️</span>
          <span className="blog-hero-cloud blog-hero-cloud--3" data-speed="0.09">☁️</span>
        </div>
        {/* Bird */}
        <span className="blog-hero-bird" data-speed="0.15">🐦</span>
        {/* Stars (visible in dark mode via CSS) */}
        <div className="blog-hero-stars" style={{ opacity: dark ? 0.6 : 0 }}>
          {["✨","⭐","✨","🌟","✨","⭐","✨"].map((s, i) => (
            <span
              key={i}
              className="blog-hero-star"
              style={{
                left: `${8 + (i * 13) % 85}%`,
                top: `${5 + (i * 17) % 40}%`,
                animationDelay: `${(i * 0.7).toFixed(1)}s`,
                animationDuration: `${2.5 + (i % 3) * 1.2}s`,
                fontSize: `${10 + (i % 3) * 6}px`,
              }}
            >{s}</span>
          ))}
        </div>
        {/* Waves */}
        <div className="blog-hero-wave" />

        <div className="blog-hero-title">
          <Typewriter speed={80}>
            <span>{s.heroTypewriter}</span>
          </Typewriter>
        </div>
        <p className="blog-hero-sub">{s.heroSubtitle}</p>
        <div className="blog-hero-actions">
          <Button type="primary" onClick={() => scrollTo("posts")}>
            阅读文章
          </Button>
          <Button onClick={() => scrollTo("subscribe")}>
            邮件订阅
          </Button>
        </div>
        <div className="blog-hero-phone">
          <Time />
        </div>
      </section>

      {/* Stats */}
      <section className="blog-stats">
        {stats.map((s) => (
          <div key={s.label} className="blog-stat">
            <div className="blog-stat-emoji">{s.emoji}</div>
            <div className="blog-stat-value">{s.value}</div>
            <div className="blog-stat-label">{s.label}</div>
          </div>
        ))}
      </section>

      {/* About */}
      <section id="about" className="blog-about">
        <div className="blog-avatar">{s.avatarEmoji}</div>
        <h3 className="blog-about-name">{s.authorName}</h3>
        <p className="blog-about-desc" style={{ whiteSpace: "pre-line" }}>{s.authorBio}</p>
        <div className="blog-skills">
          {s.skillTags.map((tag) => (
            <span key={tag} className="blog-skill-tag">{tag}</span>
          ))}
        </div>
      </section>

      {/* Posts */}
      <section id="posts" className="blog-section">
        <h2 className="blog-section-title">最新文章</h2>
        <div className="blog-posts-grid">
          {posts.slice(0, showCount).map((post, idx) => (
            <div
              key={post.id}
              className="blog-post-card reveal"
              style={{ animationDelay: `${Math.min(idx * 60, 300)}ms` }}
              onClick={() => navigate(`/posts/${post.id}`)}
            >
              <Card>
                <div className="blog-post-card-inner">
                  {post.coverImage && (
                    <div className="blog-post-cover">
                      <img src={post.coverImage} alt="" className="blog-post-cover-img" />
                    </div>
                  )}
                  <div className="blog-post-tags">
                    <span className="blog-post-cat">{getCategoryName(post.categoryId)}</span>
                    {post.tags.map((t) => (
                      <span key={t} className="blog-post-tag">#{t}</span>
                    ))}
                  </div>
                  <h3 className="blog-post-title">{post.title}</h3>
                  <p className="blog-post-excerpt">
                    {post.excerpt.slice(0, 60)}...
                  </p>
                  <div className="blog-post-meta">
                    <span>{post.date}</span>
                    <span>约 {readTime(post.sections)} 分钟</span>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        {posts.length > showCount && (
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <Button type="primary" onClick={() => setShowCount(c => Math.min(c + 12, posts.length))}>
              加载更多（{posts.length - showCount} 篇剩余）
            </Button>
          </div>
        )}
      </section>

      {/* FAQ */}
      <section id="faq" className="blog-section">
        <h2 className="blog-section-title">常见问题</h2>
        <div className="blog-faq">
          {s.faqItems.map((faq) => (
            <Collapse
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </section>

      {/* Subscribe */}
      <section id="subscribe" className="blog-section">
        <Card>
          <div className="blog-subscribe-inner">
            <h2 className="blog-subscribe-title">{s.subscribeTitle}</h2>
            <p className="blog-subscribe-desc">{s.subscribeDescription}</p>
            {subscribed ? (
              <div className="blog-subscribe-success">
                <p>🎉</p>
                <p>{s.subscribeSuccessMessage}</p>
              </div>
            ) : (
              <div className="blog-subscribe-form">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                />
                <div className="blog-subscribe-switch">
                  <span>{s.subscribeSwitchOffLabel}</span>
                  <Switch
                    checked={weeklyDigest}
                    onChange={setWeeklyDigest}
                    checkedChildren={s.subscribeSwitchOnLabel}
                    unCheckedChildren="实时"
                  />
                </div>
                <Button type="primary" onClick={handleSubscribe}>
                  订阅
                </Button>
              </div>
            )}
          </div>
        </Card>
      </section>

      <Divider type="wave-yellow" />

      {/* Welcome Modal */}
      <Modal
        open={introOpen}
        onClose={closeIntro}
        onOk={closeIntro}
        title={s.welcomeModalTitle}
      >
        <div className="blog-modal-text">
          <span className="blog-modal-title">{s.welcomeModalBodyTitle}</span>
          <p className="blog-modal-desc" style={{ whiteSpace: "pre-line" }}>{s.welcomeModalDescription}</p>
        </div>
      </Modal>
    </div>
  );
}

export default Home;
