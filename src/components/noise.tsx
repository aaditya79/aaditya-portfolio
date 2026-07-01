import * as React from "react";

/**
 * Barely-there film grain over the whole page. Fixed, pointer-inert, and blended
 * so it adds texture without shifting color. Purely decorative.
 */
const NOISE_SVG =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='140'%20height='140'%3E%3Cfilter%20id='n'%3E%3CfeTurbulence%20type='fractalNoise'%20baseFrequency='0.85'%20numOctaves='3'%20stitchTiles='stitch'/%3E%3C/filter%3E%3Crect%20width='100%25'%20height='100%25'%20filter='url(%23n)'/%3E%3C/svg%3E";

export function Noise() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-overlay dark:opacity-[0.04]"
      style={{
        backgroundImage: `url("${NOISE_SVG}")`,
        backgroundSize: "140px 140px",
      }}
    />
  );
}
