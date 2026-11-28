import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Mount once the web fonts are in, so they don't swap in while the intro and
// hero are animating (a swap re-lays out the whole page). Fonts normally beat
// the app bundle anyway; on a slow connection we give up waiting quickly.
const FONT_WAIT_MS = 600;
const fontsReady = window.__fontsReady || Promise.resolve();
const timeout = new Promise((resolve) => setTimeout(resolve, FONT_WAIT_MS));

Promise.race([fontsReady, timeout]).then(() => {
  createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
