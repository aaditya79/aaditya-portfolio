import { ImageResponse } from "next/og";

import { identity } from "@/data/content";

export const alt = `${identity.name} — ML Researcher, LLM Agent Security`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#141210",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(124,124,242,0.22) 0%, rgba(20,18,16,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#a6a2f2",
            fontSize: "26px",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: "44px", height: "2px", background: "#a6a2f2" }} />
          LLM Agent Security
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#f2efe9",
              fontSize: "108px",
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            {identity.name}
          </div>
          <div
            style={{
              marginTop: "20px",
              color: "#b8b3ab",
              fontSize: "38px",
              fontFamily: "sans-serif",
            }}
          >
            ML Researcher — LLM Agent Security
          </div>
        </div>

        <div
          style={{
            color: "#8f8a82",
            fontSize: "26px",
            fontFamily: "sans-serif",
          }}
        >
          Columbia MS Data Science · Purdue BS Computer Engineering · New York, NY
        </div>
      </div>
    ),
    { ...size },
  );
}
