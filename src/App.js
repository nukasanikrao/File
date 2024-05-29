import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./routerExample/About";
import Blog from "./routerExample/Blog";
import BlogDetails from "./routerExample/BlogDetails";
import Home from "./routerExample/Home";
import NoPage from "./routerExample/NoPage";
import PageLayout from "./routerExample/PageLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blog/:id/:username" element={<BlogDetails />}></Route>
            <Route path="*" element={<NoPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
