import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Article from "./pages/Article";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index path="home" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="posts" element={<Blog />} />
    <Route path="posts/:id" element={<Article />} />
  </Route>
));

export default router;