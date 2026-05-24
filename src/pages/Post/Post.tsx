import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Divider, Footer, Loading } from "animal-island-ui";
import { posts } from "../../data/posts";

function Post() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const isFirstLoad = useRef(true);

  const post = posts.find((p) => p.id === id);
  const currentIndex = posts.findIndex((p) => p.id === id);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);

    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      const timer = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [id]);

  if (!post) {
    return (
      <div style={{ maxWidth: 800, margin: "60px auto", padding: "0 20px", textAlign: "center" }}>
        <Button type="text" onClick={() => navigate("/")}>
          ← 返回首页
        </Button>
        <Card color="app-pink">
          <div style={{ padding: 40 }}>
            <h2>文章未找到</h2>
            <p style={{ color: "#666" }}>这篇文章可能不存在或已被删除。</p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 20px 40px" }}>
      {isLoading && <Loading />}

      {/* Back button */}
      <div style={{ padding: "20px 0" }}>
        <Button type="text" onClick={() => navigate("/")}>
          ← 文章一覧に戻る
        </Button>
      </div>

      {/* Article header */}
      <Card color="app-green">
        <div style={{ padding: 32, textAlign: "center" }}>
          <div style={{ fontSize: 64 }}>{post.cover}</div>
          <span
            style={{
              background: "rgba(255,255,255,0.6)",
              padding: "2px 12px",
              borderRadius: 12,
              fontSize: 13,
            }}
          >
            #{post.tag}
          </span>
          <h1 style={{ margin: "12px 0", fontSize: 28 }}>{post.title}</h1>
          <div style={{ color: "#888", fontSize: 14 }}>
            {post.date} · {post.readTime}
          </div>
        </div>
      </Card>

      {/* Excerpt */}
      <p
        style={{
          fontSize: 16,
          color: "#555",
          lineHeight: 1.8,
          marginTop: 24,
          fontStyle: "italic",
        }}
      >
        {post.excerpt}
      </p>

      <Divider type="line-teal" />

      {/* Article body */}
      <article>
        {post.sections.map((section, i) => (
          <section key={i} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 22, marginBottom: 12 }}>{section.heading}</h2>
            {section.paragraphs.map((p, j) => (
              <p
                key={j}
                style={{ fontSize: 16, lineHeight: 1.9, color: "#444", marginBottom: 12 }}
              >
                {p}
              </p>
            ))}
          </section>
        ))}
      </article>

      {/* Takeaways */}
      <Card color="app-yellow">
        <div style={{ padding: 24 }}>
          <h3>🌿 这篇文章的要点</h3>
          <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
            {post.takeaways.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      </Card>

      <Divider type="wave-yellow" />

      {/* Prev/Next navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          marginTop: 20,
        }}
      >
        {prevPost ? (
          <Button onClick={() => navigate(`/posts/${prevPost.id}`)}>
            ← {prevPost.title}
          </Button>
        ) : (
          <div />
        )}
        {nextPost ? (
          <Button onClick={() => navigate(`/posts/${nextPost.id}`)}>
            {nextPost.title} →
          </Button>
        ) : (
          <div />
        )}
      </div>

      <div style={{ marginTop: 40 }}>
        <Footer type="sea" />
      </div>
    </div>
  );
}

export default Post;
