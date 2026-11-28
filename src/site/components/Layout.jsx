import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Seo from "./Seo";
import ErrorBoundary from "./ErrorBoundary";
import { RISEN, rise } from "./Reveal";
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

function jumpTo(y) {
  const lenis = getLenis();
  if (lenis) {
    lenis.resize();
    lenis.scrollTo(y, { immediate: true, force: true });
  } else {
    window.scrollTo({ top: y, left: 0, behavior: "instant" });
  }
}

const storageKey = (location) => `scroll:${location.key || location.pathname}`;

function readSaved(location) {
  try {
    const y = Number(sessionStorage.getItem(storageKey(location)));
    return Number.isFinite(y) ? y : 0;
  } catch (e) {
    return 0;
  }
}

// New pages start at the top. On reload or back/forward the page goes back
// to where you left it. Each history entry's position is kept in sessionStorage.
function ScrollMemory() {
  const location = useLocation();
  const history = useHistory();
  const current = useRef(location);
  const restoring = useRef(false);
  const firstRun = useRef(true);

  // The browser would restore before lazy content and pinned sections exist.
  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return undefined;
    const prev = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = prev;
    };
  }, []);

  // Remember the position of whichever entry is showing.
  useEffect(() => {
    let raf = 0;
    const save = () => {
      if (restoring.current) return;
      try {
        sessionStorage.setItem(
          storageKey(current.current),
          String(Math.round(window.scrollY))
        );
      } catch (e) {
        /* storage blocked: position just isn't remembered */
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(save);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", save);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pagehide", save);
    };
  }, []);

  useLayoutEffect(() => {
    current.current = location;
    const isRestore = firstRun.current || history.action === "POP";
    firstRun.current = false;

    const target = isRestore ? readSaved(location) : 0;
    if (target <= 0) {
      jumpTo(0);
      return undefined;
    }

    // Wait until the page is tall enough (lazy chunks, images, pinned
    // sections), then jump. Stop if the visitor starts scrolling.
    restoring.current = true;
    const started = performance.now();
    let raf = 0;
    const stop = () => {
      restoring.current = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("keydown", stop);
    };
    const tick = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max >= target || performance.now() - started > 2000) {
        jumpTo(Math.min(target, Math.max(0, max)));
        stop();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchstart", stop, { passive: true });
    window.addEventListener("keydown", stop);
    tick();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key, location.pathname]);

  return null;
}

// A short, skippable intro, shown once per browser session.
// Letters and the exit slide run on the compositor (`transform`), and the
// counter writes straight to the DOM, so the page mounting underneath
// can't make the intro stutter.
function Intro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(INTRO_ACTIVE);
  const countRef = useRef(null);

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
    const DURATION = 1300;
    let start = 0;
    let shown = -1;
    let raf;
    let timer;
    const step = (now) => {
      // count from the first painted frame, not from mount
      if (!start) start = now;
      const t = Math.min(1, (now - start) / DURATION);
      const n = Math.round((1 - Math.pow(1 - t, 3)) * 100);
      if (n !== shown && countRef.current) {
        shown = n;
        countRef.current.textContent = String(n).padStart(3, "0");
      }
      if (t < 1) raf = requestAnimationFrame(step);
      else timer = setTimeout(() => setShow(false), 250);
    };
    raf = requestAnimationFrame(step);
    const skip = () => setShow(false);
    window.addEventListener("keydown", skip);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      window.removeEventListener("keydown", skip);
    };
  }, [show, reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro"
          onClick={() => setShow(false)}
          exit={{ transform: ["translateY(0%)", "translateY(-100%)"] }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="intro-name">
            {greeting.title.split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ transform: "translateY(110%)" }}
                animate={{ transform: "translateY(0%)" }}
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
          <div className="intro-count mono" ref={countRef}>
            000
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
      <ScrollMemory />
      <Intro />
      {/* <a className="skip-link" href="#main">
        Skip to content
      </a> */}
      <Nav />
      <motion.main
        id="main"
        key={pathname}
        className="site-main"
        initial={{ opacity: 0, transform: rise("16px") }}
        animate={{ opacity: 1, ...RISEN }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <ErrorBoundary resetKey={pathname}>{children}</ErrorBoundary>
      </motion.main>
      <Footer />
    </div>
  );
}
