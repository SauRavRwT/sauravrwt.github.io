import React, { Suspense, lazy } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import "./styles/site.css";
import "./styles/shell.css";
import "./styles/showcase.css";
import "./styles/pages.css";

const Projects = lazy(() => import("./pages/Projects"));
const Experience = lazy(() => import("./pages/Experience"));
const Education = lazy(() => import("./pages/Education"));
const Contact = lazy(() => import("./pages/Contact"));
const Resume = lazy(() => import("./pages/Resume"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BlogIndex = lazy(() =>
  import("./pages/Blog").then((m) => ({ default: m.BlogIndex }))
);
const BlogPost = lazy(() =>
  import("./pages/Blog").then((m) => ({ default: m.BlogPost }))
);

// Keeps the page height while a route chunk loads, so nothing flashes blank.
const Fallback = () => <div style={{ minHeight: "100vh" }} aria-busy="true" />;

export default function Site() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout>
        <Suspense fallback={<Fallback />}>
          <Switch>
            <Route path={["/", "/home"]} exact component={Home} />
            <Redirect from="/splash" to="/home" />
            <Route path="/projects" component={Projects} />
            <Route path="/experience" component={Experience} />
            <Route path="/education" component={Education} />
            <Route path="/blog" exact component={BlogIndex} />
            <Route path="/blog/:id" component={BlogPost} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}
