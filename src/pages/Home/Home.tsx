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
    { label: "文章", value: String(posts.length), emoji: "📝" },
    { label: "分类", value: String(new Set(posts.map((p) => p.categoryId || "default")).size), emoji: "📂" },
    { label: "标签", value: String(new Set(posts.flatMap((p) => p.tags)).size), emoji: "🏷️" },
    { label: "始于", value: posts.length > 0 ? String(new Date(posts[posts.length - 1].date).getFullYear()) : "—", emoji: "📅" },
  ];
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

  return (
    <div className={`blog ${dark ? "blog--dark" : ""}`}>
      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero-title">
          <Typewriter speed={80}>
            <span>{s.heroTypewriter}</span>
          </Typewriter>
        </div>
        <p className="blog-hero-sub">
          {s.heroSubtitle}
        </p>
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
          {posts.map((post) => (
            <div
              key={post.id}
              className="blog-post-card"
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
