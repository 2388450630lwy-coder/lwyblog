import React, { useState, useEffect, lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Cursor, Loading, Footer } from "animal-island-ui";
import "animal-island-ui/style";
import "./global.css";
import Header from "./components/Header";

// Route-level code splitting
const Home = lazy(() => import("./pages/Home/Home"));
const Post = lazy(() => import("./pages/Post/Post"));
const Admin = lazy(() => import("./pages/Admin/Admin"));
const Categories = lazy(() => import("./pages/Categories/Categories"));
const Tags = lazy(() => import("./pages/Tags/Tags"));
const Archive = lazy(() => import("./pages/Archive/Archive"));

function SiIcon({ path, color }: { path: string; color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={color}>
      <path d={path}/>
    </svg>
  );
}

const SOCIAL_ICONS: Record<string, (color: string) => React.ReactNode> = {
  github: (c) => <SiIcon path="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" color={c}/>,
  email: (c) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2"/>
      <path d="m2.5 5 8.5 7.5a2 2 0 0 0 2.5 0L22 5"/>
    </svg>
  ),
  weibo: (c) => <SiIcon path="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.737 5.439l-.002.004zM9.05 17.219c-.384.616-1.208.884-1.829.602-.612-.279-.793-.991-.406-1.593.379-.595 1.176-.861 1.793-.601.622.263.82.972.442 1.592zm1.27-1.627c-.141.237-.449.353-.689.253-.236-.09-.313-.361-.177-.586.138-.227.436-.346.672-.24.239.09.315.36.18.601l.014-.028zm.176-2.719c-1.893-.493-4.033.45-4.857 2.118-.836 1.704-.026 3.591 1.886 4.21 1.983.64 4.318-.341 5.132-2.179.8-1.793-.201-3.642-2.161-4.149z" color={c}/>,
  bilibili: (c) => <SiIcon path="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z" color={c}/>,
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
    setDark(checked);
  };

  return (
    <Cursor>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <HashRouter>
          <Header dark={dark} onThemeChange={handleThemeChange} />
          <div style={{ flex: 1 }}>
            <Suspense fallback={
              <div style={{ display: "flex", justifyContent: "center", padding: 80 }}>
                <Loading />
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/tags" element={<Tags />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/posts/:id" element={<Post />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </Suspense>
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
    </Cursor>
  );
}

export default App;
