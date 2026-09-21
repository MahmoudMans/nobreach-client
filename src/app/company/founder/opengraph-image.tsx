import {
  ImageResponse
} from "next/og";

export const alt =
  "Nouha Ben Brahim — Founder of No Breach";

export const size = {
  width: 1200,
  height: 630
};

export const contentType =
  "image/png";

export default function FounderOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 72px",
          background: "#08090b",
          color: "#eef2f6",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <div
              style={{
                display: "flex",
                width: "36px",
                height: "36px",
                alignItems: "center",
                justifyContent: "center",
                border:
                  "1px solid rgba(161,226,240,0.34)",
                borderRadius: "8px",
                background:
                  "rgba(99,51,198,0.20)",
                color: "#a1e2f0",
                fontSize: "13px",
                fontWeight: 700
              }}
            >
              NB
            </div>

            <div
              style={{
                display: "flex",
                marginLeft: "15px",
                color: "#eef2f6",
                fontSize: "21px",
                fontWeight: 700,
                letterSpacing: "5px"
              }}
            >
              NO BREACH
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#83b3d7",
              fontSize: "17px",
              letterSpacing: "3px"
            }}
          >
            <div
              style={{
                display: "flex",
                width: "7px",
                height: "7px",
                marginRight: "10px",
                borderRadius: "999px",
                background: "#a1e2f0"
              }}
            />

            <span>
              FOUNDER
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#83b3d7",
              fontSize: "17px",
              letterSpacing: "3px"
            }}
          >
            CYBERSECURITY · TUNISIA
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "25px",
              color: "#eef2f6",
              fontSize: "100px",
              fontWeight: 600,
              lineHeight: 0.9,
              letterSpacing: "-6px"
            }}
          >
            <span>
              Nouha
            </span>

            <span>
              Ben Brahim
            </span>
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: "930px",
              marginTop: "33px",
              color: "#b8c0ca",
              fontSize: "24px",
              lineHeight: 1.4
            }}
          >
            Founder of No Breach · Offensive security · Mentorship · Security education
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "7px",
              borderRadius: "999px",
              background:
                "linear-gradient(90deg, #6333c6, #7e60b9, #83b3d7, #a1e2f0)"
            }}
          />

          <div
            style={{
              display: "flex",
              width: "100%",
              marginTop: "18px",
              alignItems: "center",
              justifyContent: "space-between",
              color: "#737b86",
              fontSize: "14px",
              letterSpacing: "2px"
            }}
          >
            <span>
              OFFENSIVE SECURITY
            </span>

            <span>
              FOUNDER PROFILE
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
