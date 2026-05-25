import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Button,
  Modal,
  Typewriter,
  Collapse,
  Footer,
  Divider,
  Input,
  Switch,
  Phone,
} from "animal-island-ui";
import { usePosts } from "../../hooks/usePosts";
import "./Home.less";


const aboutTags = [
  "React / TS",
  "Node.js",
  "Vue.js",
  "Python",
  "读书",
  "咖啡",
];

const faqData = [
  {
    question: "这个博客是用什么搭建的？",
    answer:
      "使用 React 19 + TypeScript + Vite 构建，UI 组件库是 animal-island-ui，设计风格灵感来自动物森友会。",
  },
  {
    question: "博客多久更新一次？",
    answer:
      "我会在有新想法或学到新东西时更新博客，大概每月 1-2 篇文章。质量比频率更重要。",
  },
  {
    question: "可以转载文章吗？",
    answer:
      "欢迎转载，但请注明出处并附上原文链接。如果有任何疑问，可以通过邮件联系我。",
  },
  {
    question: "为什么叫「无人岛」？",
    answer:
      "这个博客就像一座小岛，记录着我的思考和成长。希望来访的你能在这里找到一些有用的东西。",
  },
];

function Home() {
  const navigate = useNavigate();
  const { posts } = usePosts();
  const stats = [
    { label: "文章", value: String(posts.length), emoji: "📝" },
    { label: "标签", value: String(new Set(posts.flatMap((p) => p.tags)).size), emoji: "🏷️" },
    { label: "来访者", value: "1.2k", emoji: "👣" },
    { label: "咖啡", value: "∞", emoji: "☕" },
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

  return (
    <div className={`blog ${dark ? "blog--dark" : ""}`}>
      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero-title">
          <Typewriter speed={80}>
            <span>欢迎来到我的小岛！</span>
          </Typewriter>
        </div>
        <p className="blog-hero-sub">
          在这里记录技术学习与生活点滴 🌿
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
          <Phone />
        </div>
      </section>

      {/* Stats */}
      <section className="blog-stats">
        {stats.map((s) => (
          <Card key={s.label} color="app-green">
            <div className="blog-stat">
              <div className="blog-stat-emoji">{s.emoji}</div>
              <div className="blog-stat-value">{s.value}</div>
              <div className="blog-stat-label">{s.label}</div>
            </div>
          </Card>
        ))}
      </section>

      {/* About */}
      <section id="about" className="blog-section">
        <h2 className="blog-section-title">关于我</h2>
        <Card color="app-yellow">
          <div className="blog-about-inner">
            <div className="blog-avatar">🦊</div>
            <div>
              <h3 className="blog-about-name">你好，我是 LWY</h3>
              <p className="blog-about-desc">
                一名热爱前端开发的程序员。喜欢探索新技术，用代码创造有趣的东西。
                工作之余喜欢读书、喝咖啡，偶尔钓鱼。
              </p>
            </div>
            <div className="blog-skills">
              {aboutTags.map((tag) => (
                <span key={tag} className="blog-skill-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Card>
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
              <Card color="app-green">
                <div className="blog-post-card-inner">
                  <div className="blog-post-cover">{post.cover}</div>
                  <div className="blog-post-tags">
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
          {faqData.map((faq) => (
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
        <Card color="app-pink">
          <div className="blog-subscribe-inner">
            <h2 className="blog-subscribe-title">📬 订阅更新</h2>
            <p className="blog-subscribe-desc">
              不想错过新文章？留下邮箱吧
            </p>
            {subscribed ? (
              <div className="blog-subscribe-success">
                <p>🎉</p>
                <p>订阅成功！有新文章时会通知你。</p>
              </div>
            ) : (
              <div className="blog-subscribe-form">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                />
                <div className="blog-subscribe-switch">
                  <span>仅新文章</span>
                  <Switch
                    checked={weeklyDigest}
                    onChange={setWeeklyDigest}
                    checkedChildren="周刊"
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

      {/* Footer */}
      <Footer type="sea" />

      {/* Welcome Modal */}
      <Modal
        open={introOpen}
        onClose={closeIntro}
        onOk={closeIntro}
        title="🌿 欢迎来到无人岛"
      >
        <div className="blog-modal-text">
          <Typewriter speed={60}>
            <span className="blog-modal-title">欢迎来到我的小岛！</span>
          </Typewriter>
          <p className="blog-modal-desc">
            这里记录着我的技术探索和日常思考。
            <br />
            随意逛逛，希望能有所收获～
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default Home;
