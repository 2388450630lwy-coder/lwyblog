import { useState, useEffect, lazy, Suspense, useMemo, useCallback } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Cursor, Footer } from "animal-island-ui";
import "animal-island-ui/style";
import "./global.css";
import Header from "./components/Header";
import { BlogProvider } from "./context/BlogContext";
import { loadSiteSettings } from "./utils/siteSettings";
import { loadSocial, getSocialSvg, isEmailLink, SOCIAL_PLATFORMS } from "./utils/socialLinks";

// ── Route-level code splitting ──
const Home = lazy(() => import("./pages/Home/Home"));
const Post = lazy(() => import("./pages/Post/Post"));
const Admin = lazy(() => import("./pages/Admin/Admin"));
const Categories = lazy(() => import("./pages/Categories/Categories"));
const Tags = lazy(() => import("./pages/Tags/Tags"));
const Archive = lazy(() => import("./pages/Archive/Archive"));

// Preload functions — triggered on nav hover so chunks arrive before click
const preloadMap: Record<string, () => void> = {
  "/categories": () => { import("./pages/Categories/Categories"); },
  "/tags": () => { import("./pages/Tags/Tags"); },
  "/archive": () => { import("./pages/Archive/Archive"); },
  "/admin": () => { import("./pages/Admin/Admin"); },
};

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("lwyblog-dark") === "1";
  });
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("lwyblog-dark", dark ? "1" : "0");
  }, [dark]);

  // Dynamic favicon, title, and meta tags from site settings — run once
  useEffect(() => {
    const settings = loadSiteSettings();
    const emoji = settings.logoEmoji || "🌿";
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${emoji}</text></svg>`;
    const href = `data:image/svg+xml,${encodeURIComponent(svg)}`;

    let link = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/svg+xml";
      document.head.appendChild(link);
    }
    link.href = href;

    document.title = settings.seoTitle || settings.blogTitle || "LWY's Island";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };
    if (settings.seoDescription) setMeta("description", settings.seoDescription);
    if (settings.seoKeywords) setMeta("keywords", settings.seoKeywords);
  }, []);

  // Memoized — these ran on every render before, now only re-evaluate when dark changes
  const siteSettings = useMemo(() => loadSiteSettings(), []);
  const localSocial = useMemo(() => loadSocial(), []);

  const social = useMemo(() => ({
    github: localSocial.github || siteSettings.social?.github || "",
    email: localSocial.email || siteSettings.social?.email || "",
    weibo: localSocial.weibo || siteSettings.social?.weibo || "",
    bilibili: localSocial.bilibili || siteSettings.social?.bilibili || "",
  }), [localSocial, siteSettings]);

  const socialLinks = useMemo(
    () =>
      SOCIAL_PLATFORMS
        .filter((p) => social[p.key as keyof typeof social])
        .map((p) => ({
          key: p.key,
          label: p.label,
          url: social[p.key as keyof typeof social],
        })),
    [social],
  );

  const handleThemeChange = useCallback((checked: boolean) => {
    setTransitioning(true);
    setTimeout(() => {
      setDark(checked);
      setTimeout(() => setTransitioning(false), 400);
    }, 80);
  }, []);

  const handleNavPreload = useCallback((path: string) => {
    preloadMap[path]?.();
  }, []);

  return (
    <Cursor>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <HashRouter>
          <BlogProvider>
            <Header
              dark={dark}
              onThemeChange={handleThemeChange}
              onNavPreload={handleNavPreload}
            />
            <div style={{ flex: 1 }}>
              <Suspense fallback={
                <div style={{ display: "flex", justifyContent: "center", padding: 80 }}>
                  <div style={{
                    width: 28, height: 28,
                    border: "3px solid rgba(140,140,165,0.12)",
                    borderTopColor: "#19c8b9",
                    borderRadius: "50%",
                    animation: "spin 0.6s linear infinite",
                  }} />
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
                    const email = isEmailLink(link.label);
                    const href = email ? `mailto:${link.url}` : link.url;
                    return (
                      <a
                        key={link.key}
                        href={href}
                        target={email ? undefined : "_blank"}
                        rel={email ? undefined : "noopener noreferrer"}
                        title={link.label}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 36,
                          height: 36,
                          borderRadius: "50%",
                          background: dark ? "rgba(255,255,255,0.06)" : "rgba(140,140,165,0.08)",
                          textDecoration: "none",
                          transition: "all 0.2s",
                          fontSize: 18,
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.background = dark ? "rgba(255,255,255,0.12)" : "rgba(140,140,165,0.18)";
                          el.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.background = dark ? "rgba(255,255,255,0.06)" : "rgba(140,140,165,0.08)";
                          el.style.transform = "translateY(0)";
                        }}
                      >
                        {getSocialSvg(link.label, dark ? "#c0b090" : "#6b5030")}
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
                  color: dark ? "#7a7a88" : "#9494a0",
                  textDecoration: "none",
                  opacity: 0.6,
                  transition: "opacity 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                  preloadMap["/admin"]?.();
                }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.6"; }}
              >
                管理后台
              </a>
            </div>
          </BlogProvider>
        </HashRouter>
        <div className="app-footer">
          {siteSettings.footerCopyright && (
            <div style={{
              textAlign: "center",
              padding: "0 0 8px",
              fontSize: 13,
              opacity: 0.5,
              color: dark ? "#c0b090" : "#6b5030",
            }}>
              {siteSettings.footerCopyright}
            </div>
          )}
          <Footer type={siteSettings.footerType as "sea" | "tree"} />
        </div>
      </div>
      {transitioning && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: dark ? "#1B1B1D" : "#fffdf5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{
            width: 28, height: 28,
            border: "3px solid rgba(140,140,165,0.12)",
            borderTopColor: "#19c8b9",
            borderRadius: "50%",
            animation: "spin 0.6s linear infinite",
          }} />
        </div>
      )}
    </Cursor>
  );
}

export default App;
