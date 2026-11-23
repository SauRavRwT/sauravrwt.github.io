import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  animate,
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { assetImage, useMediaQuery } from "./hooks";

const EASE = [0.22, 1, 0.36, 1];

// Marquee that speeds up and leans with your scroll velocity
export function VelocityMarquee({
  items,
  baseSpeed = 40,
  reverse = false,
  outlined = false,
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const half = useRef(0);
  const trackRef = useRef(null);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), {
    damping: 50,
    stiffness: 300,
  });
  const skew = useTransform(velocity, [-2500, 2500], [8, -8], { clamp: true });
  const boost = useTransform(velocity, [-2500, 0, 2500], [4, 1, 4], {
    clamp: true,
  });

  useLayoutEffect(() => {
    const measure = () => {
      if (trackRef.current) half.current = trackRef.current.scrollWidth / 2;
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useAnimationFrame((_, delta) => {
    if (reduce || !half.current) return;
    const dir = reverse ? 1 : -1;
    let next = x.get() + dir * baseSpeed * boost.get() * (delta / 1000);
    if (next <= -half.current) next += half.current;
    if (next > 0) next -= half.current;
    x.set(next);
  });

  const loop = [...items, ...items];
  return (
    <div
      className={`marquee${outlined ? " is-outlined" : ""}`}
      aria-hidden="true"
    >
      <motion.div
        ref={trackRef}
        className="marquee-track"
        style={{ x, skewX: reduce ? 0 : skew }}
      >
        {loop.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-star">✳</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// Numbers that count up when they come into view
export function CountUp({ value, duration = 1.4 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);
  useEffect(() => {
    if (!inView || reduce) return undefined;
    const c = animate(0, value, {
      duration,
      ease: EASE,
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => c.stop();
  }, [inView, value, duration, reduce]);
  return <span ref={ref}>{n}</span>;
}

export function StatsRow({ stats }) {
  return (
    <ul className="stats">
      {stats.map((s, i) => (
        <motion.li
          key={s.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: i * 0.07, duration: 0.7, ease: EASE }}
        >
          <Link to={s.to} className="stat">
            <span className="stat-value">
              <CountUp value={s.value} />
            </span>
            <span className="stat-label">{s.label}</span>
            <span className="stat-note mono">{s.note} →</span>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}

// Journey — pinned horizontal scroll on desktop, vertical list on mobile
function Stop({ event, i }) {
  const body = (
    <>
      <span className="stop-year">{event.date.getFullYear()}</span>
      <span className="stop-dot" aria-hidden="true">
        {event.current && <span className="pulse-dot" />}
      </span>
      <div className="stop-card card">
        <div className="stop-top">
          <span className="chip">{event.type}</span>
          <span className="mono muted stop-when">{event.when}</span>
        </div>
        <div className="stop-main">
          <span className="stop-logo">
            {event.logo ? (
              <img src={assetImage(event.logo)} alt="" loading="lazy" />
            ) : (
              <span aria-hidden="true">{event.icon}</span>
            )}
          </span>
          <div>
            <h3 className="stop-title">{event.title}</h3>
            <p className="muted stop-org">
              {event.org}
              {event.current && <span className="stop-now mono">now</span>}
            </p>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <li className="stop" style={{ "--i": i }}>
      {event.href ? (
        <a
          href={event.href}
          target="_blank"
          rel="noopener noreferrer"
          className="stop-link"
        >
          {body}
        </a>
      ) : (
        <Link to={event.to} className="stop-link">
          {body}
        </Link>
      )}
    </li>
  );
}

function JourneyVertical({ events, children }) {
  return (
    <div className="journey-v wrap">
      {children}
      <ol className="journey-v-list">
        {events.map((e, i) => (
          <Stop key={`${e.title}-${i}`} event={e} i={i} />
        ))}
      </ol>
    </div>
  );
}

function JourneyHorizontal({ events, children }) {
  const outer = useRef(null);
  const track = useRef(null);
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    const measure = () =>
      track.current &&
      setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [events.length]);

  const { scrollYProgress } = useScroll({
    target: outer,
    offset: ["start start", "end end"],
  });
  // Lenis already smooths the scroll, so this spring stays tight to avoid lag.
  const smooth = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 50,
    restDelta: 0.0005,
  });
  const x = useTransform(smooth, [0, 1], [0, -distance]);
  const fill = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={outer}
      className="journey-h"
      style={{ height: `calc(100vh + ${distance}px)` }}
    >
      <div className="journey-h-sticky">
        <div className="wrap journey-h-head">{children}</div>
        <div className="journey-h-rail" aria-hidden="true">
          <motion.span style={{ width: fill }} />
        </div>
        <motion.ol ref={track} className="journey-h-track" style={{ x }}>
          {events.map((e, i) => (
            <Stop key={`${e.title}-${i}`} event={e} i={i} />
          ))}
        </motion.ol>
      </div>
    </div>
  );
}

export function Journey(props) {
  const desktop = useMediaQuery("(min-width: 861px) and (min-height: 600px)");
  const reduce = useReducedMotion();
  return desktop && !reduce ? (
    <JourneyHorizontal {...props} />
  ) : (
    <JourneyVertical {...props} />
  );
}
