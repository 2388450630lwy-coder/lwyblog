import { HashRouter, Routes, Route } from "react-router-dom";
import { Cursor } from "animal-island-ui";
import "animal-island-ui/style";
import "./global.css";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <Cursor>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </HashRouter>
    </Cursor>
  );
}

export default App;
