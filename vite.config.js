import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { themeBootScript, themeCss } from "./src/site/themeCss.js";

// Writes the palette from src/theme.js straight into index.html, so colours
// and the visitor's saved light/dark choice apply before any JS loads.
function themeTokens() {
  return {
    name: "theme-tokens",
    transformIndexHtml(html) {
      const style = `<style id="theme-tokens">${themeCss()}html,body{background:var(--bg);color:var(--text)}</style>`;
      const script = `<script>${themeBootScript()}</script>`;
      return html.replace("<!-- theme:inject -->", `${style}\n  ${script}`);
    },
  };
}

export default defineConfig({
  plugins: [react(), themeTokens()],
  server: {
    port: 3000,
    open: true,
  },
  base: "/",
});
