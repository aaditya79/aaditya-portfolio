"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

/**
 * A cursor-following radial glow that reveals on hover. Drop it as the first
 * child of any `position: relative; overflow: hidden` card; it attaches pointer
 * listeners to its parent and tracks the cursor via CSS variables (no re-render
 * on move). Give sibling content `relative z-10` so it paints above the glow.
 * Inert under prefers-reduced-motion and for touch pointers.
 */
export function Spotlight({
  size = 320,
  className,
}: {
  size?: number;
  className?: string;
}) {
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
        el.style.setProperty("--sx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--sy", `${e.clientY - rect.top}px`);
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
      className={cn(
        "pointer-events-none absolute inset-0 transition-opacity duration-300",
        className,
      )}
      style={{
        opacity: active ? 1 : 0,
        background: `radial-gradient(circle ${size}px at var(--sx, 50%) var(--sy, 50%), hsl(var(--accent) / 0.10), transparent 65%)`,
      }}
    />
  );
}
