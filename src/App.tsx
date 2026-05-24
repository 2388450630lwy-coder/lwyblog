import { HashRouter, Routes, Route } from "react-router-dom";
import { Cursor } from "animal-island-ui";
import "animal-island-ui/style";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";

function App() {
  return (
    <Cursor>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<Post />} />
        </Routes>
      </HashRouter>
    </Cursor>
  );
}

export default App;
