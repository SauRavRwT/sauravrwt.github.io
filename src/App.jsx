import React from "react";
import Site from "./site/Site";
import ErrorBoundary from "./site/components/ErrorBoundary";

// Outer safety net, in case the nav, footer or router itself throws.
// Page-level errors are caught closer, inside the layout.
export default function App() {
  return (
    <ErrorBoundary>
      <Site />
    </ErrorBoundary>
  );
}
