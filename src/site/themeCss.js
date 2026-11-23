// Turns the palette in src/theme.js into CSS custom properties.
// Used by vite.config.js, which inlines the result into index.html so the
// right colours are there on the very first paint (no flash).
import { chosenTheme, defaultMode } from "../theme.js";

const VARS = {
  bg: "--bg",
  bg2: "--bg-2",
  bg3: "--bg-3",
  line: "--line",
  text: "--text",
  muted: "--muted",
  faint: "--faint",
  accent: "--accent",
  accentText: "--accent-text",
  onAccent: "--on-accent",
};

const SHADOW = {
  dark: "0 30px 60px -20px rgba(0, 0, 0, 0.6)",
  light: "0 30px 60px -24px rgba(40, 35, 20, 0.25)",
};

function block(mode) {
  const t = chosenTheme[mode];
  const lines = Object.entries(VARS).map(([key, name]) => `${name}:${t[key]};`);
  lines.push(
    `--glass:${t.bg}c7;`,
    `--shadow:${SHADOW[mode]};`,
    `color-scheme:${mode};`
  );
  return lines.join("");
}

export const MODE = defaultMode === "light" ? "light" : "dark";

export function themeCss() {
  return (
    `:root,:root[data-theme="${MODE}"]{${block(MODE)}}` +
    `:root[data-theme="${MODE === "dark" ? "light" : "dark"}"]{${block(
      MODE === "dark" ? "light" : "dark"
    )}}`
  );
}

// Runs before the page paints: applies the visitor's saved mode, or the default.
export function themeBootScript() {
  const bg = { dark: chosenTheme.dark.bg, light: chosenTheme.light.bg };
  return `(function(){var m="${MODE}";try{var s=localStorage.getItem("theme");if(s==="dark"||s==="light")m=s}catch(e){}document.documentElement.setAttribute("data-theme",m);var c=document.querySelector('meta[name="theme-color"]');if(c)c.setAttribute("content",${JSON.stringify(
    bg
  )}[m])})();`;
}
