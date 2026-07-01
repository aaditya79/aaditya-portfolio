"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";

const GRID_SIZE = "64px 64px";

const baseGrid =
  "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)";

const accentGrid =
  "linear-gradient(to right, hsl(var(--accent)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--accent)) 1px, transparent 1px)";

/**
 * Layered background grid that reacts to the pointer: an accent-colored grid
 * and a soft glow are revealed in a radius around the cursor, tracked through
 * CSS variables (no React re-render on move). Falls back to a static grid when
 * prefers-reduced-motion is set or on touch devices (no pointer hover).
 */
export function InteractiveGrid() {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    if (reduceMotion) return;
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = parent.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
      });
    };
    const onEnter = (e: PointerEvent) => {
      if (e.pointerType !== "touch") setActive(true);
    };
    const onLeave = () => setActive(false);

    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerenter", onEnter);
    parent.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerenter", onEnter);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, [reduceMotion]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
      style={
        {
          "--mx": "50%",
          "--my": "-240px",
        } as React.CSSProperties
      }
    >
      {/* Base dim grid, faded toward the edges */}
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-25"
        style={{
          backgroundImage: baseGrid,
          backgroundSize: GRID_SIZE,
          maskImage:
            "radial-gradient(75% 65% at 50% 30%, black 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(75% 65% at 50% 30%, black 0%, transparent 80%)",
        }}
      />

      {/* Accent grid revealed in a circle around the cursor */}
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-out"
        style={{
          backgroundImage: accentGrid,
          backgroundSize: GRID_SIZE,
          opacity: active ? 0.6 : 0,
          maskImage:
            "radial-gradient(circle 190px at var(--mx) var(--my), black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle 190px at var(--mx) var(--my), black 0%, transparent 72%)",
        }}
      />

      {/* Soft accent spotlight that trails the cursor */}
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-out"
        style={{
          opacity: active ? 1 : 0,
          background:
            "radial-gradient(circle 260px at var(--mx) var(--my), hsl(var(--accent) / 0.13), transparent 70%)",
        }}
      />
    </div>
  );
}
