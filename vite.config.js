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
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split UI libraries into separate chunks for better caching
          if (id.includes("node_modules/bootstrap")) {
            return "bootstrap";
          }
          if (id.includes("node_modules/baseui")) {
            return "baseui";
          }
          if (id.includes("node_modules/react-bootstrap")) {
            return "react-bootstrap";
          }
          // Split charting libraries
          if (
            id.includes("node_modules/chart.js") ||
            id.includes("node_modules/react-chartjs-2")
          ) {
            return "charts";
          }
          // Split animation libraries
          if (
            id.includes("node_modules/react-spring") ||
            id.includes("node_modules/react-reveal")
          ) {
            return "animations";
          }
          // Split styling libraries
          if (
            id.includes("node_modules/styled-components") ||
            id.includes("node_modules/radium") ||
            id.includes("node_modules/styletron")
          ) {
            return "styling";
          }
          // Split routing library
          if (id.includes("node_modules/react-router-dom")) {
            return "router";
          }
          // Split Apollo/GraphQL
          if (
            id.includes("node_modules/apollo") ||
            id.includes("node_modules/graphql")
          ) {
            return "graphql";
          }
          // Split React and ReactDOM into vendor
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/")
          ) {
            return "react-vendor";
          }
          // Group other node_modules as vendor
          if (id.includes("node_modules/")) {
            return "vendor";
          }
        },
      },
    },
  },
});
