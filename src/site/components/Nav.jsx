import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import { greeting } from "../../portfolio";
import { lockScroll, useTheme } from "./hooks";

export const NAV_LINKS = [
  { to: "/projects", label: "Work" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/blog", label: "Writing" },
  { to: "/resume", label: "Résumé" },
];

function isActive(pathname, to) {
  return pathname === to || pathname.startsWith(`${to}/`);
}

function ThemeToggle() {
  const [theme, toggle] = useTheme();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      className="nav-icon-btn"
      onClick={toggle}
      aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
      title={`Switch to ${dark ? "light" : "dark"} theme`}
    >
      <motion.svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ rotate: dark ? 0 : 180 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
      </motion.svg>
    </button>
  );
}

export default function Nav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() || 0;
    setScrolled(y > 20);
    setHidden(y > 300 && y > prev && !open);
  });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    lockScroll(open);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      lockScroll(false);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <motion.div
        className="nav-progress"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <motion.header
        className={`nav${scrolled ? " is-scrolled" : ""}`}
        animate={{ y: hidden ? -110 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav-inner">
          <Link
            to="/home"
            className="nav-logo"
            aria-label={`${greeting.title} — home`}
          >
            <span className="nav-mark">SR</span>
            <span className="nav-name">{greeting.title}</span>
          </Link>

          <nav className="nav-links" aria-label="Main">
            {NAV_LINKS.map((l) => {
              const active = isActive(pathname, l.to);
              return (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className="nav-link"
                  aria-current={active ? "page" : undefined}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="nav-link-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span>{l.label}</span>
                </NavLink>
              );
            })}
          </nav>

          <div className="nav-actions">
            <ThemeToggle />
            <Link to="/contact" className="btn btn-primary btn-sm nav-cta">
              Let's talk
            </Link>
            <button
              type="button"
              className="nav-icon-btn nav-burger"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              <span className={`burger${open ? " is-open" : ""}`} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile">
              {[
                { to: "/home", label: "Home" },
                ...NAV_LINKS,
                { to: "/contact", label: "Contact" },
              ].map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15 + i * 0.05,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    to={l.to}
                    className={`mobile-link${
                      isActive(pathname, l.to) ? " is-active" : ""
                    }`}
                  >
                    <span className="mono">0{i + 1}</span>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
