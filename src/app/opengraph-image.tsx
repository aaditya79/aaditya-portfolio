import { ImageResponse } from "next/og";

import { identity } from "@/data/content";

export const alt = `${identity.name}, ${identity.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Site theme tokens (dark mode), mirrored from globals.css.
const BG = "#121110"; // hsl(28 9% 7%)
const INK = "#f1ede4"; // hsl(40 18% 92%)
const MUTED = "#a49c92"; // hsl(34 9% 63%)
const ACCENT = "#8b84e6"; // hsl(245 66% 71%)
const ACCENT_SOFT = "#b8b2f6";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          padding: "80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid backdrop, tiled from two 1px gradients */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            backgroundImage:
              "linear-gradient(to right, rgba(139,132,230,0.11) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,132,230,0.11) 1px, transparent 1px)",
            backgroundSize: "96px 96px",
          }}
        />
        {/* Accent glow, top-center */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            backgroundImage:
              "radial-gradient(circle at 50% -18%, rgba(139,132,230,0.58), rgba(139,132,230,0) 38%)",
          }}
        />
        {/* Eyebrow */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "18px",
            color: ACCENT_SOFT,
            fontSize: "24px",
            fontWeight: 600,
            letterSpacing: "0.16em",
          }}
        >
          <div style={{ width: "48px", height: "2px", background: ACCENT }} />
          LLM AGENT SECURITY
        </div>

        {/* Name + subtitle */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              color: INK,
              fontSize: "132px",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            {identity.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "26px",
              color: MUTED,
              fontSize: "42px",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            {identity.title}
          </div>
        </div>

        {/* Footer tagline */}
        <div
          style={{
            position: "relative",
            display: "flex",
            color: MUTED,
            fontSize: "25px",
          }}
        >
          {identity.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
