import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Tooltip.css";

const Tooltip = ({ content, children, placement = "top", style = {} }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);

  const updatePosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;

      let top = 0;
      let left = 0;

      if (placement === "top") {
        top = rect.top + scrollY - 8;
        left = rect.left + scrollX + rect.width / 2;
      } else if (placement === "bottom") {
        top = rect.bottom + scrollY + 8;
        left = rect.left + scrollX + rect.width / 2;
      }

      setCoords({ top, left });
    }
  };

  useEffect(() => {
    if (visible) {
      updatePosition();
      window.addEventListener("resize", updatePosition);
      window.addEventListener("scroll", updatePosition, true); // capture phase to handle nested scroll
    }
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [visible]);

  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        style={{ display: "inline-block", ...style }}
      >
        {children}
      </span>
      {visible &&
        createPortal(
          <div
            className={`custom-tooltip-bubble custom-tooltip-${placement}`}
            style={{
              position: "absolute",
              top: `${coords.top}px`,
              left: `${coords.left}px`,
              zIndex: 999999,
            }}
          >
            {content}
          </div>,
          document.body
        )}
    </>
  );
};

export default Tooltip;
