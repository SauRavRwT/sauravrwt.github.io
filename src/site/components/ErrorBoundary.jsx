import React from "react";

// Catches a render error so one bad entry in portfolio.js can't blank the
// whole site. Inside the layout, nav and footer stay up and only the page
// shows the fallback. Give it a `resetKey` (the route) so moving to another
// page tries again.
export default class ErrorBoundary extends React.Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("Page crashed:", error, info?.componentStack);
  }

  componentDidUpdate(prev) {
    if (this.state.error && prev.resetKey !== this.props.resetKey) {
      this.setState({ error: null });
    }
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <section className="notfound" role="alert">
        <div className="wrap">
          {/* "p" has a descender the 404 digits don't, so loosen the line */}
          <h1 className="notfound-code" style={{ lineHeight: 1 }}>
            O<span className="serif">o</span>ps
          </h1>
          <p className="lead">
            Something on this page broke. Try reloading, or head back home.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => window.location.reload()}
            >
              Reload
            </button>
            {/* plain link: works even if the router itself is what broke */}
            <a className="btn" href={import.meta.env.BASE_URL}>
              Back home <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
