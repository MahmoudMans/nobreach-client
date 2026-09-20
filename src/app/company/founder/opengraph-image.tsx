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
          display:
            "flex",
          width:
            "100%",
          height:
            "100%",
          flexDirection:
            "column",
          justifyContent:
            "space-between",
          padding:
            "68px 72px",
          background:
            "#08090b",
          color:
            "#eef2f6",
          fontFamily:
            "Arial, sans-serif"
        }}
      >
        <div
          style={{
            display:
              "flex",
            width:
              "100%",
            alignItems:
              "center",
            justifyContent:
              "space-between"
          }}
        >
          <div
            style={{
              display:
                "flex",
              alignItems:
                "center",
              gap:
                "14px"
            }}
          >
            <div
              style={{
                display:
                  "flex",
                width:
                  "34px",
                height:
                  "34px",
                alignItems:
                  "center",
                justifyContent:
                  "center",
                border:
                  "1px solid rgba(161,226,240,0.32)",
                borderRadius:
                  "8px",
                background:
                  "rgba(99,51,198,0.18)",
                color:
                  "#a1e2f0",
                fontSize:
                  "14px"
              }}
            >
              NB
            </div>

            <div
              style={{
                display:
                  "flex",
                fontSize:
                  "21px",
                fontWeight:
                  600,
                letterSpacing:
                  "5px"
              }}
            >
              NO BREACH
            </div>
          </div>

          <div
            style={{
              display:
                "flex",
              alignItems:
                "center",
              gap:
                "10px",
              color:
                "#83b3d7",
              fontSize:
                "17px",
              letterSpacing:
                "3px"
            }}
          >
            <div
              style={{
                display:
                  "flex",
                width:
                  "7px",
                height:
                  "7px",
                borderRadius:
                  "999px",
                background:
                  "#a1e2f0"
              }}
            />

            FOUNDER
          </div>
        </div>

        <div
          style={{
            display:
              "flex",
            width:
              "100%",
            flexDirection:
              "column"
          }}
        >
          <div
            style={{
              display:
                "flex",
              color:
                "#83b3d7",
              fontSize:
                "17px",
              letterSpacing:
                "3px",
              textTransform:
                "uppercase"
            }}
          >
            Cybersecurity · Tunisia
          </div>

          <div
            style={{
              display:
                "flex",
              flexDirection:
                "column",
              marginTop:
                "26px",
              fontSize:
                "100px",
              fontWeight:
                600,
              lineHeight:
                0.9,
              letterSpacing:
                "-6px"
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
              display:
                "flex",
              maxWidth:
                "930px",
              marginTop:
                "32px",
              color:
                "#b8c0ca",
              fontSize:
                "24px",
              lineHeight:
                1.4
            }}
          >
            Founder of No Breach · Offensive security · Mentorship · Security education
          </div>
        </div>

        <div
          style={{
            display:
              "flex",
            width:
              "100%",
            flexDirection:
              "column",
            gap:
              "18px"
          }}
        >
          <div
            style={{
              display:
                "flex",
              width:
                "100%",
              height:
                "7px",
              borderRadius:
                "999px",
              background:
                "linear-gradient(90deg, #6333c6, #7e60b9, #83b3d7, #a1e2f0)"
            }}
          />

          <div
            style={{
              display:
                "flex",
              width:
                "100%",
              justifyContent:
                "space-between",
              color:
                "#737b86",
              fontSize:
                "14px",
              letterSpacing:
                "2px"
            }}
          >
            <span>
              OFFENSIVE SECURITY
            </span>

            <span>
              NOBREACH.TN
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
