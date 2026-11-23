import React, { useEffect, useRef } from "react";

// A field of dots that swell and light up around the cursor.
// Colours come from the CSS theme tokens, so it follows light/dark.
export default function DotGrid({ gap = 30, radius = 180, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    let w = 0;
    let h = 0;
    let dots = [];
    let raf = 0;
    let visible = true;
    let colors = {};
    const p = { x: -1e4, y: -1e4, tx: -1e4, ty: -1e4 };

    const readColors = () => {
      const s = getComputedStyle(document.documentElement);
      colors = {
        base: s.getPropertyValue("--faint").trim() || "#5d5b57",
        hot: s.getPropertyValue("--accent").trim() || "#d7ff3c",
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        const dx = d.x - p.x;
        const dy = d.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const t = Math.max(0, 1 - dist / radius);
        const e = t * t * (3 - 2 * t);
        const push = (e * 10) / (dist || 1);
        ctx.globalAlpha = 0.35 + e * 0.65;
        ctx.fillStyle = e > 0.08 ? colors.hot : colors.base;
        ctx.beginPath();
        ctx.arc(
          d.x + dx * push,
          d.y + dy * push,
          1.1 + e * 2.8,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      for (let y = gap / 2; y < h; y += gap)
        for (let x = gap / 2; x < w; x += gap) dots.push({ x, y });
      draw();
    };

    const tick = () => {
      p.x += (p.tx - p.x) * 0.16;
      p.y += (p.ty - p.y) * 0.16;
      draw();
      raf =
        Math.abs(p.tx - p.x) > 0.4 || Math.abs(p.ty - p.y) > 0.4
          ? requestAnimationFrame(tick)
          : 0;
    };

    const onMove = (e) => {
      if (reduce || !visible) return;
      const rect = canvas.getBoundingClientRect();
      p.tx = e.clientX - rect.left;
      p.ty = e.clientY - rect.top;
      if (p.x < -1000) {
        p.x = p.tx;
        p.y = p.ty;
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onTheme = () => {
      readColors();
      draw();
    };

    readColors();
    const io = new IntersectionObserver(
      ([en]) => (visible = en.isIntersecting)
    );
    io.observe(canvas);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("themechange", onTheme);
    resize();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("themechange", onTheme);
    };
  }, [gap, radius]);

  return (
    <canvas ref={ref} className={`dot-grid ${className}`} aria-hidden="true" />
  );
}
