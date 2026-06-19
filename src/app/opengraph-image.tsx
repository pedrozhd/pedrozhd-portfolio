import { ImageResponse } from "next/og";

export const alt = "Pedro França · Business Intelligence · RevOps · Martech";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#f4f1ea",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "24px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#c2603e",
            marginBottom: "28px",
          }}
        >
          Business Intelligence · RevOps · Martech
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: "104px",
            fontWeight: 800,
            color: "#1f1d1a",
            lineHeight: 1.0,
            letterSpacing: "-3px",
          }}
        >
          Onde dados viram&nbsp;
          <span style={{ color: "#c2603e" }}>decisão.</span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "30px",
            color: "#7a7164",
            marginTop: "32px",
          }}
        >
          Pedro França · StartSe
        </div>

        <div style={{ display: "flex", gap: "14px", marginTop: "48px" }}>
          {["#c2603e", "#2f8f86", "#6b5bd1"].map((c) => (
            <div
              key={c}
              style={{
                display: "flex",
                width: "64px",
                height: "14px",
                borderRadius: "999px",
                background: c,
              }}
            />
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
