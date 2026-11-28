import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1];

// Motion only hands `transform` (not the `y` shorthand) to the browser's
// compositor, so these keep gliding even while the page is busy loading.
// Clearing it afterwards keeps the element from becoming a containing block.
export const rise = (offset) => `translateY(${offset})`;
export const RISEN = {
  transform: "translateY(0px)",
  transitionEnd: { transform: "none" },
};

// Fade + rise into view, once.
export function Reveal({
  children,
  delay = 0,
  y = 28,
  as = "div",
  className,
  style,
  amount = 0.2,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;
  if (reduce) {
    const Plain = as;
    return (
      <Plain className={className} style={style} {...rest}>
        {children}
      </Plain>
    );
  }
  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, transform: rise(`${y}px`) }}
      whileInView={{ opacity: 1, ...RISEN }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Splits a line into words that slide up from behind a mask.
// `parts` lets you mix plain and serif-italic words:
//   [{ text: "turning data into" }, { text: "clear stories", serif: true }]
export function SplitWords({
  parts,
  className,
  delay = 0,
  as = "h1",
  animateOnMount,
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  // Watch the whole heading: the words themselves start hidden under a mask,
  // so observing them directly would never report them as visible.
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const show = animateOnMount || inView;
  const Tag = as;
  let index = 0;
  const words = [];
  parts.forEach((part, p) => {
    part.text.split(" ").forEach((word, w) => {
      if (!word) return;
      const i = index++;
      // the space sits outside the inline-block mask, or it collapses
      words.push(
        <React.Fragment key={`${p}-${w}`}>
          <span className="split-word">
            <motion.span
              className={part.serif ? "serif" : undefined}
              style={{ display: "inline-block" }}
              initial={reduce ? false : { transform: rise("110%") }}
              animate={show || reduce ? RISEN : { transform: rise("110%") }}
              transition={{
                duration: 0.9,
                delay: delay + i * 0.045,
                ease: EASE,
              }}
            >
              {word}
            </motion.span>
          </span>{" "}
        </React.Fragment>
      );
    });
  });
  return (
    <Tag
      ref={ref}
      className={className}
      aria-label={parts.map((p) => p.text).join(" ")}
    >
      <span aria-hidden="true">{words}</span>
    </Tag>
  );
}
