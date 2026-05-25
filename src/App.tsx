import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Cursor, Loading } from "animal-island-ui";
import "animal-island-ui/style";
import "./global.css";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import Admin from "./pages/Admin/Admin";

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("lwyblog-dark") === "1";
  });
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("lwyblog-dark", dark ? "1" : "0");
  }, [dark]);

  const handleThemeChange = (checked: boolean) => {
    setTransitioning(true);
    setTimeout(() => {
      setDark(checked);
      setTimeout(() => setTransitioning(false), 400);
    }, 80);
  };

  return (
    <Cursor>
      <HashRouter>
        <Header dark={dark} onThemeChange={handleThemeChange} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </HashRouter>
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
