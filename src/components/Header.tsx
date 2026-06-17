import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Switch } from "animal-island-ui";
import { loadSiteSettings } from "../utils/siteSettings";

interface HeaderProps {
  dark: boolean;
  onThemeChange: (checked: boolean) => void;
  onNavPreload?: (path: string) => void;
}

const NAV_ITEMS = [
  { label: "首页", path: "/" },
  { label: "分类", path: "/categories" },
  { label: "标签", path: "/tags" },
  { label: "归档", path: "/archive" },
];

export default function Header({ dark, onThemeChange, onNavPreload }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 12,
          zIndex: 50,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 64,
          padding: "0 20px",
          marginBottom: 24,
          maxWidth: 960,
          width: "100%",
          margin: "0 auto 24px",
          background: dark
            ? "linear-gradient(135deg, #2e2e36 0%, #25252e 100%)"
            : "linear-gradient(135deg, #fafafb 0%, #f4f4f7 100%)",
          border: dark ? "2px solid #3e3e4a" : "2px solid #d4d4dc",
          borderRadius: 20,
          boxShadow: dark
            ? "0 6px 20px -10px rgba(0, 0, 0, 0.4)"
            : "0 6px 20px -10px rgba(140, 140, 165, 0.25)",
          color: dark ? "#e4e4ea" : "#2a2a35",
        }}
      >
        <span
          style={{ fontSize: 20, fontWeight: 800, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          {loadSiteSettings().blogTitle}
        </span>

        {/* Desktop nav */}
        <div className="header-nav-desktop" style={{ display: "flex", gap: 2, alignItems: "center" }}>
          {NAV_ITEMS.map((item) =>
            isActive(item.path) ? (
              <Button
                key={item.path}
                type="primary"
                onClick={() => {
                  if (item.path === "/" && location.pathname === "/") {
                    document.getElementById("posts")?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate(item.path);
                  }
                }}
              >
                {item.label}
              </Button>
            ) : (
              <Button
                key={item.path}
                type="text"
                onClick={() => navigate(item.path)}
                onMouseEnter={() => onNavPreload?.(item.path)}
              >
                {item.label}
              </Button>
            )
          )}

          <Button type="text" onClick={() => navigate("/search")}>
            搜索
          </Button>
          <Switch
            checked={dark}
            onChange={onThemeChange}
            checkedChildren="🌙"
            unCheckedChildren="☀️"
          />
        </div>

        {/* Mobile hamburger */}
        <button
          className="header-mobile-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "none",
            border: "none",
            background: "none",
            fontSize: 22,
            cursor: "pointer",
            padding: 4,
            color: dark ? "#e4e4ea" : "#2a2a35",
            fontFamily: "inherit",
          }}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="header-mobile-menu"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "rgba(0,0,0,0.3)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "fixed",
              top: 12,
              left: 12,
              right: 12,
              zIndex: 100,
              padding: "20px 16px",
              borderRadius: 20,
              background: dark
                ? "linear-gradient(135deg, #2e2e36 0%, #25252e 100%)"
                : "linear-gradient(135deg, #fafafb 0%, #f4f4f7 100%)",
              border: dark ? "2px solid #3e3e4a" : "2px solid #d4d4dc",
              boxShadow: dark
                ? "0 6px 20px -10px rgba(0, 0, 0, 0.4)"
                : "0 6px 20px -10px rgba(140, 140, 165, 0.25)",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.path}
                type={isActive(item.path) ? "primary" : "text"}
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate(item.path);
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              type="text"
              onClick={() => {
                setMobileMenuOpen(false);
                navigate("/search");
              }}
            >
              搜索
            </Button>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "8px 0" }}>
              <Switch
                checked={dark}
                onChange={onThemeChange}
                checkedChildren="🌙"
                unCheckedChildren="☀️"
              />
            </div>
          </div>
        </div>
      )}

    </>
  );
}
