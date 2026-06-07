import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Cursor, Loading, Footer } from "animal-island-ui";
import "animal-island-ui/style";
import { siGithub, siSinaweibo, siBilibili } from "simple-icons";
import "./global.css";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import Admin from "./pages/Admin/Admin";
import Categories from "./pages/Categories/Categories";
import Tags from "./pages/Tags/Tags";
import Archive from "./pages/Archive/Archive";

function SiIcon({ path, color }: { path: string; color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={color}>
      <path d={path}/>
    </svg>
  );
}

const SOCIAL_ICONS: Record<string, (color: string) => JSX.Element> = {
  github: (c) => <SiIcon path={siGithub.path} color={c}/>,
  email: (c) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2"/>
      <path d="m2.5 5 8.5 7.5a2 2 0 0 0 2.5 0L22 5"/>
    </svg>
  ),
  weibo: (c) => <SiIcon path={siSinaweibo.path} color={c}/>,
  bilibili: (c) => <SiIcon path={siBilibili.path} color={c}/>,
};

function loadSocial(): Record<string, string> {
  try {
    const raw = localStorage.getItem("lwyblog-social");
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("lwyblog-dark") === "1";
  });
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("lwyblog-dark", dark ? "1" : "0");
  }, [dark]);

  // Read social data on every render so admin changes appear instantly
  const social = loadSocial();
  const socialLinks = Object.entries(SOCIAL_ICONS)
    .filter(([key]) => social[key])
    .map(([key, iconFn]) => ({
      key,
      icon: iconFn(dark ? "#c0b090" : "#6b5030"),
      url: social[key],
    }));

  const handleThemeChange = (checked: boolean) => {
    setTransitioning(true);
    setTimeout(() => {
      setDark(checked);
      setTimeout(() => setTransitioning(false), 400);
    }, 80);
  };

  return (
    <Cursor>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <HashRouter>
          <Header dark={dark} onThemeChange={handleThemeChange} />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/tags" element={<Tags />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/posts/:id" element={<Post />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "24px 0 12px",
            }}
          >
            {socialLinks.length > 0 && (
              <div style={{ marginBottom: 12, display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
                {socialLinks.map((link) => {
                  const href = link.key === "email" ? `mailto:${link.url}` : link.url;
                  const iconColor = dark ? "#c0b090" : "#6b5030";
                  return (
                    <a
                      key={link.key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link.key}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        color: iconColor,
                        background: dark ? "rgba(255,255,255,0.06)" : "rgba(180,140,60,0.08)",
                        textDecoration: "none",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = dark ? "rgba(255,255,255,0.12)" : "rgba(180,140,60,0.18)";
                        el.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = dark ? "rgba(255,255,255,0.06)" : "rgba(180,140,60,0.08)";
                        el.style.transform = "translateY(0)";
                      }}
                    >
                      {SOCIAL_ICONS[link.key]?.(iconColor)}
                    </a>
                  );
                })}
              </div>
            )}
            <a
              href="#/admin"
              style={{
                display: "inline-block",
                fontSize: 13,
                fontWeight: 600,
                padding: "6px 18px",
                borderRadius: 16,
                color: dark ? "#8b7355" : "#b8a080",
                textDecoration: "none",
                opacity: 0.6,
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.6"; }}
            >
              管理后台
            </a>
          </div>
        </HashRouter>
        <div className="app-footer">
          <Footer type="sea" />
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          pointerEvents: transitioning ? "auto" : "none",
        }}
      >
        <Loading active={transitioning} />
      </div>
    </Cursor>
  );
}

export default App;
