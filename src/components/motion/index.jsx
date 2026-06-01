import { motion } from "motion/react";
import React from "react";

const parseDistance = (distance) => {
  if (typeof distance === "number") {
    return `${distance}px`;
  }
  return distance || "20px";
};

const getFadeInitial = ({ top, bottom, left, right, distance }) => {
  const parsedDistance = parseDistance(distance);
  const initial = { opacity: 0 };

  if (top) {
    initial.y = `-${parsedDistance}`;
  }
  if (bottom) {
    initial.y = parsedDistance;
  }
  if (left) {
    initial.x = `-${parsedDistance}`;
  }
  if (right) {
    initial.x = parsedDistance;
  }

  return initial;
};

export function Fade({
  children,
  bottom,
  top,
  left,
  right,
  duration = 2000,
  distance = "20px",
  style,
  ...rest
}) {
  const initial = getFadeInitial({ top, bottom, left, right, distance });

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: duration / 1000, ease: "easeOut" }}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function Flip({
  children,
  left,
  right,
  duration = 2000,
  style,
  ...rest
}) {
  const initial = {
    opacity: 0,
    scale: 0.9,
    rotateY: left ? "-90deg" : right ? "90deg" : "90deg",
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, scale: 1, rotateY: "0deg" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: duration / 1000, ease: "easeOut" }}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
