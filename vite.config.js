import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  base: "/",
  build: {
    // If you are getting a strict size warning, you can lift the limit here
    chunkSizeWarningLimit: 600,
    rolldownOptions: {
      output: {
        advancedChunks: {
          groups: [
            {
              name: "react-vendor",
              test: /\/node_modules\/(react|react-dom)\//,
            },
            {
              name: "bootstrap",
              test: /\/node_modules\/bootstrap/,
            },
            {
              name: "baseui",
              test: /\/node_modules\/baseui/,
            },
            {
              name: "react-bootstrap",
              test: /\/node_modules\/react-bootstrap/,
            },
            {
              name: "charts",
              test: /\/node_modules\/(chart\.js|react-chartjs-2)/,
            },
            {
              name: "animations",
              test: /\/node_modules\/react-spring/,
            },
            {
              name: "styling",
              test: /\/node_modules\/(styled-components|radium|styletron)/,
            },
            {
              name: "router",
              test: /\/node_modules\/react-router-dom/,
            },
            {
              name: "graphql",
              test: /\/node_modules\/(apollo|graphql)/,
            },
            {
              name: "vendor",
              test: /\/node_modules\//,
            },
          ],
        },
      },
    },
  },
});
