import { useCallback, useEffect, useState } from "react";
import { chosenTheme } from "../../theme";

// Cursor-following glow for `.spot` cards.
export function spotlight(event) {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  el.style.setProperty("--my", `${event.clientY - rect.top}px`);
}

export function useTheme() {
  const read = () =>
    (typeof document !== "undefined" &&
      document.documentElement.getAttribute("data-theme")) ||
    "dark";
  const [theme, setTheme] = useState(read);

  useEffect(() => {
    const onChange = () => setTheme(read());
    window.addEventListener("themechange", onChange);
    return () => window.removeEventListener("themechange", onChange);
  }, []);

  const toggle = useCallback(() => {
    const next = read() === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.add("theme-switching");
    root.setAttribute("data-theme", next);
    setTimeout(() => root.classList.remove("theme-switching"), 450);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* storage blocked — theme still applies for this visit */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", chosenTheme[next].bg);
    window.dispatchEvent(new Event("themechange"));
  }, []);

  return [theme, toggle];
}

// Live clock in a given IANA time zone.
export function useClock(timeZone = "Asia/Kolkata") {
  const format = () =>
    new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone,
    });
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 10000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone]);
  return time;
}

export function useMediaQuery(query) {
  const get = () =>
    typeof window !== "undefined" && window.matchMedia(query).matches;
  const [matches, setMatches] = useState(get);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

// Project screenshots live one folder deeper, which `new URL()` globs can't reach.
const WORK_IMAGES = import.meta.glob("../../assets/images/work/*", {
  eager: true,
  query: "?url",
  import: "default",
});

export function assetImage(path) {
  if (path.startsWith("work/"))
    return WORK_IMAGES[`../../assets/images/${path}`];
  return new URL(`../../assets/images/${path}`, import.meta.url).href;
}

// Smooth scrolling (Lenis) lives on window so any component can reach it.
export function getLenis() {
  return typeof window !== "undefined" ? window.__lenis : undefined;
}

// Freeze page scrolling while a menu or modal is open.
export function lockScroll(locked) {
  document.documentElement.style.overflow = locked ? "hidden" : "";
  const lenis = getLenis();
  if (lenis) locked ? lenis.stop() : lenis.start();
}
