
"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

const CURSOR_SIZE = 220;

const springConfig = {
    stiffness: 300,
    damping: 25,
    mass: 0.35,
  };

export default function CursorSpotlight() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotation = useMotionValue(0);

  const smoothRotation = useSpring(rotation, {
    stiffness: 180,
    damping: 24,
    mass: 0.35,
  });
  const stretchX = useMotionValue(1);
  const stretchY = useMotionValue(1);

  const smoothStretchX = useSpring(stretchX, {
    stiffness: 180,
    damping: 16,
    mass: 0.4,
  });

  const smoothStretchY = useSpring(stretchY, {
    stiffness: 180,
    damping: 16,
    mass: 0.4,
  });

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const pointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (!pointer.matches || reducedMotion.matches) return;

    let previousX = 0;
    let previousY = 0;
    let initialized = false;

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      const x = event.clientX;
      const y = event.clientY;

      if (!initialized) {
        previousX = x;
        previousY = y;
        initialized = true;
      }

      const velocityX = x - previousX;
      const velocityY = y - previousY;

      const speed = Math.min(
        Math.hypot(velocityX, velocityY),
        40
      );

      const angle =
        Math.atan2(velocityY, velocityX) * (180 / Math.PI);

      if (speed > 0.5) {
        rotation.set(angle);
      }

      // Liquid Physics
      const stretch = 1 + speed * 0.014;

      stretchX.set(stretch);
      stretchY.set(1 / Math.sqrt(stretch));

      // Smooth Position
      mouseX.set(x - CURSOR_SIZE / 2);
      mouseY.set(y - CURSOR_SIZE / 2);

      // Activate Cursor
      cursor.dataset.active = "true";

      previousX = x;
      previousY = y;
    };

    const hide = () => {
      cursor.dataset.active = "false";

      initialized = false;

      stretchX.set(1);
      stretchY.set(1);
    };

    const handleLeave = (event: PointerEvent) => {
      if (!event.relatedTarget) {
        hide();
      }
    };

    const handleVisibility = () => {
      if (document.hidden) {
        hide();
      }
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerout", handleLeave);
    window.addEventListener("blur", hide);

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerout", handleLeave);
      window.removeEventListener("blur", hide);

      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
    };
  }, [
    mouseX,
    mouseY,
    rotation,
    stretchX,
    stretchY,
  ]);

  return (
    <motion.div
      ref={cursorRef}
      aria-hidden="true"
      className="fluid-cursor"
      data-active="false"
      style={{
        x: springX,
        y: springY,
        rotate: smoothRotation,
      }}
    >
      <motion.div
        className="fluid-cursor-core"
        style={{
          scaleX: smoothStretchX,
          scaleY: smoothStretchY,
        }}
      />

      <div className="fluid-cursor-center">
        <span className="fluid-cursor-dot" />
      </div>
    </motion.div>
  );
}
