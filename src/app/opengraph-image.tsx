import { ImageResponse } from "next/og";

export const alt =
  "No Breach — Offensive Security, Cybersecurity Education and Community";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          padding: "64px",
          background: "#050506",
          color: "#ffffff"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-130px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background: "#6333c6",
            filter: "blur(120px)",
            opacity: 0.42
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px"
          }}
        >
          <div
            style={{
              display: "flex",
              width: "54px",
              height: "54px",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #83b3d7",
              borderRadius: "10px",
              color: "#a1e2f0",
              fontSize: "18px",
              fontWeight: 700
            }}
          >
            NB
          </div>

          <div
            style={{
              fontSize: "21px",
              fontWeight: 700,
              letterSpacing: "0.14em"
            }}
          >
            NO BREACH
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              maxWidth: "1000px",
              fontSize: "70px",
              fontWeight: 600,
              lineHeight: 0.96,
              letterSpacing: "-0.05em"
            }}
          >
            Offensive security built around real-world attack thinking.
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "36px",
              color: "#a1e2f0",
              fontSize: "20px"
            }}
          >
            Security · Education · Community
          </div>
        </div>
      </div>
    ),
    size
  );
}
