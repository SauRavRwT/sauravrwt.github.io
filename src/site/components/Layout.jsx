import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Seo from "./Seo";
import { greeting } from "../../portfolio";
import { INTRO_ACTIVE } from "../introState";
import { getLenis } from "./hooks";

// Inertia-style smooth scrolling for mouse wheels and trackpads.
// Touch devices keep native scrolling; reduced-motion users get none.
function SmoothScroll() {
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return undefined;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.12,
      anchors: { offset: -90 },
      // let modals, menus and embedded demos scroll on their own
      prevent: (node) => !!node.closest?.(".demo-backdrop, .mobile-menu"),
    });
    window.__lenis = lenis;
    return () => {
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, [reduce]);
  return null;
}

// Every route change starts at the top of the page.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

// A short, skippable intro, shown once per browser session.
function Intro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(INTRO_ACTIVE);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!show) return undefined;
    try {
      sessionStorage.setItem("intro-seen", "1");
    } catch (e) {
      /* ignore */
    }
    if (reduce) {
      setShow(false);
      return undefined;
    }
    const start = performance.now();
    const DURATION = 1300;
    let raf;
    const step = (now) => {
      const t = Math.min(1, (now - start) / DURATION);
      setCount(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) raf = requestAnimationFrame(step);
      else setTimeout(() => setShow(false), 250);
    };
    raf = requestAnimationFrame(step);
    const skip = () => setShow(false);
    window.addEventListener("keydown", skip);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", skip);
    };
  }, [show, reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro"
          onClick={() => setShow(false)}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="intro-name">
            {greeting.title.split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 0.05 + i * 0.035,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {c === " " ? " " : c}
              </motion.span>
            ))}
          </div>
          <div className="intro-count mono">
            {String(count).padStart(3, "0")}
          </div>
          <div className="intro-hint mono">click to skip</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Layout({ children }) {
  const { pathname } = useLocation();
  return (
    <div className="site">
      <Seo />
      <SmoothScroll />
      <ScrollToTop />
      <Intro />
      <a className="skip-link" href="#main">
        {/* Skip to content */}
      </a>
      <Nav />
      <motion.main
        id="main"
        key={pathname}
        className="site-main"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
