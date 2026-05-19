import { Component, Suspense, lazy } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { settings } from "../portfolio";

// Lazy load page components for code splitting
const Home = lazy(() => import("../pages/home/HomeComponent"));
const Splash = lazy(() => import("../pages/splash/Splash"));
const Education = lazy(() => import("../pages/education/EducationComponent"));
const Experience = lazy(() => import("../pages/experience/Experience"));
const Opensource = lazy(() => import("../pages/opensource/Opensource"));
const Contact = lazy(() => import("../pages/contact/ContactComponent"));
const Projects = lazy(() => import("../pages/projects/Projects"));
const BlogComponent = lazy(() => import("../pages/blog/BlogComponent"));
const ResumePage = lazy(() => import("../pages/resume/Resume"));
const Error404 = lazy(() => import("../pages/errors/error404/Error"));

// Loading fallback component
const PageLoader = () => (
  <>
    <style>{`
      .spinner {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        border: 6px solid var(--scrollbar-color);
        border-top-color: transparent;
        animation: spinner-bulqg1 0.8s infinite linear alternate,
             spinner-oaa3wk 1.6s infinite linear;
      }

      @keyframes spinner-bulqg1 {
        0% {
          clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
        }
        12.5% {
          clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%);
        }
        25% {
          clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%);
        }
        50% {
          clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
        }
        62.5% {
          clip-path: polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
        }
        75% {
          clip-path: polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%);
        }
        100% {
          clip-path: polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%);
        }
      }

      @keyframes spinner-oaa3wk {
        0% {
          transform: scaleY(1) rotate(0deg);
        }
        49.99% {
          transform: scaleY(1) rotate(135deg);
        }
        50% {
          transform: scaleY(-1) rotate(0deg);
        }
        100% {
          transform: scaleY(-1) rotate(-135deg);
        }
      }
    `}</style>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 9999,
      }}
    >
      <div className="spinner"></div>
    </div>
  </>
);

export default class Main extends Component {
  componentDidMount() {
    document.documentElement.style.setProperty(
      "--scrollbar-color",
      this.props.theme.imageHighlight
    );
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.theme &&
      this.props.theme &&
      prevProps.theme.imageHighlight !== this.props.theme.imageHighlight
    ) {
      document.documentElement.style.setProperty(
        "--scrollbar-color",
        this.props.theme.imageHighlight
      );
    }
  }
  render() {
    return (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) =>
                settings.isSplash ? (
                  <Splash {...props} theme={this.props.theme} />
                ) : (
                  <Home {...props} theme={this.props.theme} />
                )
              }
            />
            <Route
              path="/home"
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />
            <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/education"
              render={(props) => (
                <Education {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/opensource"
              render={(props) => (
                <Opensource {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <Contact {...props} theme={this.props.theme} />
              )}
            />

            <Route
              path="/blog"
              render={(props) => (
                <BlogComponent {...props} theme={this.props.theme} />
              )}
            />

            {settings.isSplash && (
              <Route
                path="/splash"
                render={(props) => (
                  <Splash {...props} theme={this.props.theme} />
                )}
              />
            )}

            <Route
              path="/projects"
              render={(props) => (
                <Projects {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/resume"
              render={(props) => (
                <ResumePage {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="*"
              render={(props) => (
                <Error404 {...props} theme={this.props.theme} />
              )}
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}
