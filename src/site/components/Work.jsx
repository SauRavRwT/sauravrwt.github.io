import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { assetImage, lockScroll, spotlight, useLiveStatus } from "./hooks";

const EASE = [0.22, 1, 0.36, 1];

// Live demo — opens the real deployed project inside the page.
export function LiveDemo({ project, onClose }) {
  const [loaded, setLoaded] = useState(false);
  const status = useLiveStatus(project?.live);
  const down = status === "down";

  useEffect(() => {
    if (!project) return undefined;
    setLoaded(false);
    const onKey = (e) => e.key === "Escape" && onClose();
    lockScroll(true);
    window.addEventListener("keydown", onKey);
    return () => {
      lockScroll(false);
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="demo-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="demo-window browser"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} live demo`}
            initial={{ y: 60, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 40, scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="browser-bar">
              <i />
              <i />
              <i />
              <span>{project.live.replace(/^https?:\/\//, "")}</span>
              {!down && (
                <a
                  className="demo-open"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in new tab ↗
                </a>
              )}
              <button
                type="button"
                className="demo-close"
                onClick={onClose}
                aria-label="Close demo"
              >
                ✕
              </button>
            </div>
            <div className="demo-frame">
              {down ? (
                <div className="demo-missing" role="status">
                  <span className="mono muted">404 · {project.name}</span>
                  <p className="demo-missing-title">Project is not live yet.</p>
                  <p className="muted">
                    It's still being deployed. The code is up on GitHub in the
                    meantime.
                  </p>
                  {project.code && (
                    <a
                      className="btn btn-primary btn-sm"
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View the code <span className="arrow">↗</span>
                    </a>
                  )}
                </div>
              ) : (
                <>
                  {(!loaded || status === "checking") && (
                    <div className="demo-loading mono">
                      Loading {project.name}…
                    </div>
                  )}
                  {status !== "checking" && (
                    <iframe
                      title={`${project.name} live demo`}
                      src={project.live}
                      onLoad={() => setLoaded(true)}
                      loading="lazy"
                    />
                  )}
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function Visual({ project }) {
  if (project.image) {
    return (
      <div className="browser work-shot">
        <div className="browser-bar">
          <i />
          <i />
          <i />
          <span>
            {(project.live || project.code).replace(/^https?:\/\//, "")}
          </span>
        </div>
        <img
          src={assetImage(`work/${project.image}`)}
          alt={`Screenshot of ${project.name}`}
          loading="lazy"
        />
      </div>
    );
  }
  if (project.visual === "paper") {
    return (
      <div className="work-paper">
        <span className="mono muted">Peer-reviewed · ICAISI 2025</span>
        <p className="work-paper-title serif">
          “T2I Generation Using Stable Diffusion”
        </p>
        <span className="mono muted">Taylor &amp; Francis</span>
        <div className="work-paper-lines" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <i key={i} style={{ width: `${92 - ((i * 17) % 40)}%` }} />
          ))}
        </div>
      </div>
    );
  }
  if (project.visual === "pipeline" && project.pipeline?.length) {
    return (
      <ol className="work-pipeline">
        {project.pipeline.map((step, i) => (
          <motion.li
            key={step}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: i * 0.12, duration: 0.6, ease: EASE }}
          >
            <span className="mono">{String(i + 1).padStart(2, "0")}</span>
            {step}
          </motion.li>
        ))}
      </ol>
    );
  }
  return null;
}

export function ProjectCard({ project, index, total, onDemo }) {
  const down = useLiveStatus(project.live) === "down";
  return (
    <article className="work-card card spot" onPointerMove={spotlight}>
      <div className="work-info">
        <div className="work-meta mono">
          <span className="accent">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
          <span className="muted">{project.year}</span>
        </div>
        <h3 className="work-title">{project.name}</h3>
        <p className="work-tagline serif">{project.tagline}</p>
        {project.highlights?.length > 0 && (
          <ul className="work-points">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
        <div className="chip-row">
          {(project.stack || []).map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
        <div className="work-actions">
          {project.live && down && (
            <span
              className="btn btn-sm is-offline"
              title="Project is not live yet."
            >
              Not live yet
            </span>
          )}
          {project.live && !down && (
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => onDemo(project)}
            >
              <span
                className="pulse-dot"
                style={{ background: "var(--on-accent)" }}
              />{" "}
              Try it live
            </button>
          )}
          {project.paper && (
            <a
              className="btn btn-sm"
              href={project.paper}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the paper <span className="arrow">↗</span>
            </a>
          )}
          <a
            className="btn btn-sm"
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code <span className="arrow">↗</span>
          </a>
        </div>
      </div>
      <div className="work-visual">
        <Visual project={project} />
      </div>
    </article>
  );
}

/* Cards pin and stack as you scroll; earlier ones shrink back slightly. */
function StackItem({ children, index, total }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (total - index) * 0.03]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0.6]);
  const top = 96 + index * 18;

  // Only pin a card if it fits on screen; otherwise its lower half (and the
  // "Try it live" button) would be hidden under the next card.
  const [fits, setFits] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const check = () =>
      setFits(el.offsetHeight <= window.innerHeight - top - 16);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    window.addEventListener("resize", check);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", check);
    };
  }, [top]);

  return (
    <div
      ref={ref}
      className={`stack-item${fits ? "" : " no-pin"}`}
      style={{ top }}
    >
      <motion.div
        style={
          reduce || !fits || index === total - 1
            ? undefined
            : { scale, opacity, transformOrigin: "top center" }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}

export function ProjectStack({ projects }) {
  const [demo, setDemo] = useState(null);
  return (
    <>
      <div className="stack">
        {projects.map((p, i) => (
          <StackItem key={p.name} index={i} total={projects.length}>
            <ProjectCard
              project={p}
              index={i}
              total={projects.length}
              onDemo={setDemo}
            />
          </StackItem>
        ))}
      </div>
      <LiveDemo project={demo} onClose={() => setDemo(null)} />
    </>
  );
}

function GalleryShot({ item, onOpen }) {
  const down = useLiveStatus(item.live) === "down";
  return (
    <button
      type="button"
      className={`gallery-shot${down ? " is-offline" : ""}`}
      onClick={onOpen}
      aria-label={
        down
          ? `${item.name}: project is not live yet`
          : `Open ${item.name} live demo`
      }
    >
      <img
        src={assetImage(`work/${item.image}`)}
        alt=""
        loading="lazy"
        draggable="false"
      />
      <span className="gallery-play mono">
        {down ? "Not live yet" : "▶ Play live"}
      </span>
    </button>
  );
}

// Draggable gallery of smaller shipped projects
export function Gallery({ items }) {
  const track = useRef(null);
  const viewport = useRef(null);
  const [limit, setLimit] = useState(0);
  const [demo, setDemo] = useState(null);
  const dragging = useRef(false);

  useEffect(() => {
    const measure = () => {
      if (!track.current || !viewport.current) return;
      setLimit(
        Math.max(0, track.current.scrollWidth - viewport.current.offsetWidth)
      );
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(viewport.current);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      <div className="gallery" ref={viewport}>
        <motion.ul
          ref={track}
          className="gallery-track"
          drag={limit > 0 ? "x" : false}
          dragConstraints={{ left: -limit, right: 0 }}
          dragElastic={0.08}
          whileTap={{ cursor: "grabbing" }}
          onDragStart={() => (dragging.current = true)}
          onDragEnd={() => setTimeout(() => (dragging.current = false), 80)}
        >
          {items.map((item, i) => (
            <motion.li
              key={item.name}
              className="gallery-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: EASE }}
            >
              <GalleryShot
                item={item}
                onOpen={() => !dragging.current && setDemo(item)}
              />
              <div className="gallery-text">
                <div className="gallery-head">
                  <h3>{item.name}</h3>
                  <a
                    href={item.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono muted underline-link"
                  >
                    code ↗
                  </a>
                </div>
                <p className="muted">{item.description}</p>
                <div className="chip-row">
                  {item.stack.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      {limit > 0 && (
        <p className="gallery-hint mono muted">← drag to explore →</p>
      )}
      <LiveDemo project={demo} onClose={() => setDemo(null)} />
    </>
  );
}
