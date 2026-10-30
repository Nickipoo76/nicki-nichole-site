import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import "@/App.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Privacy from "@/pages/Privacy";

function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);
}

// Handles hash scrolling ("/#contact", "/?topic=selling#contact") and top-of-page on route change.
function ScrollManager() {
  const { pathname, hash, search } = useLocation();
  useEffect(() => {
    const lenis = window.__lenis;
    if (hash) {
      // Retry briefly: the target may render a moment after a route change.
      let tries = 0;
      let timer;
      const go = () => {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          if (lenis) lenis.scrollTo(el, { offset: -80 });
          else el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (tries++ < 20) {
          timer = setTimeout(go, 100);
        }
      };
      timer = setTimeout(go, 50);
      return () => clearTimeout(timer);
    }
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash, search]);
  return null;
}

function App() {
  useSmoothScroll();
  return (
    <div className="grain min-h-screen bg-cream text-plum">
      <a
        href="#main-content"
        data-testid="skip-link"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-plum focus:px-6 focus:py-3 focus:text-cream"
      >
        Skip to content
      </a>
      <BrowserRouter>
        <ScrollManager />
        <Nav />
        <div id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
