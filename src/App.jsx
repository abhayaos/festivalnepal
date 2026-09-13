import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

const Home = lazy(() => import("./pages/Home"));
const Festivals = lazy(() => import("./pages/Festivals"));
const Gallery = lazy(() => import("./pages/Gallery"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogHistory = lazy(() => import("./blog-pages/NepalHistory"));
const BlogDashain = lazy(() => import("./blog-pages/DashainStory"));
const BlogTihar = lazy(() => import("./blog-pages/TiharStory"));
const NotFound = lazy(() => import("./pages/NotFound"));

const publicPaths = ["/", "/festivals", "/gallery", "/about", "/contact"];

export default function App() {
  const location = useLocation();
  const isBlog = location.pathname.startsWith("/blog");
  const isNotFound = !publicPaths.includes(location.pathname) && !isBlog;

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {!isNotFound && <Navbar />}
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <span className="text-4xl animate-pulse">🕯️</span>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/nepal-history" element={<BlogHistory />} />
            <Route path="/blog/dashain-story" element={<BlogDashain />} />
            <Route path="/blog/tihar-story" element={<BlogTihar />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      {!isNotFound && <Footer />}
      <ScrollToTopButton />
    </div>
  );
}
