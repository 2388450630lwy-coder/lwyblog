import { useNavigate, useLocation } from "react-router-dom";
import { Button, Switch } from "animal-island-ui";

interface HeaderProps {
  dark: boolean;
  onThemeChange: (checked: boolean) => void;
}

export default function Header({ dark, onThemeChange }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
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
        margin: "0 auto 24px",
        background: dark
          ? "linear-gradient(135deg, #3a3125 0%, #2b2418 100%)"
          : "linear-gradient(135deg, #fffdf5 0%, #fff8e3 100%)",
        border: dark ? "2px solid #4a3f2f" : "2px solid #e8dfc5",
        borderRadius: 20,
        boxShadow: dark
          ? "0 6px 20px -10px rgba(0, 0, 0, 0.4)"
          : "0 6px 20px -10px rgba(180, 140, 60, 0.25)",
        color: dark ? "#f3e9d2" : "#3b2f22",
      }}
    >
      <span
        style={{ fontSize: 20, fontWeight: 800, cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        LWY's Island
      </span>
      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
        <Button
          type="text"
          onClick={() => {
            if (location.pathname === "/") {
              document.getElementById("posts")?.scrollIntoView({ behavior: "smooth" });
            } else {
              navigate("/");
            }
          }}
        >
          文章
        </Button>
        <Button type="text" onClick={() => navigate("/admin")}>
          管理
        </Button>
        <Switch
          checked={dark}
          onChange={onThemeChange}
          checkedChildren="🌙"
          unCheckedChildren="☀️"
        />
      </div>
    </header>
  );
}
