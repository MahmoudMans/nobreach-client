"use client";

export default function GlobalError({
  reset
}: {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          margin: 0,
          background: "#050506",
          color: "#f7f8fb",
          fontFamily:
            "Arial, sans-serif"
        }}
      >
        <main
          style={{
            display: "grid",
            minHeight: "100vh",
            placeItems: "center",
            padding: "24px"
          }}
        >
          <section
            style={{
              width:
                "min(680px, 100%)",
              padding: "32px",
              border:
                "1px solid rgba(161,226,240,.2)",
              borderRadius: "14px",
              background: "#0d0f14"
            }}
          >
            <div
              style={{
                color: "#a1e2f0",
                fontFamily:
                  "monospace",
                fontSize: "12px",
                letterSpacing:
                  ".12em"
              }}
            >
              NO BREACH /
              APPLICATION FAILURE
            </div>

            <h1
              style={{
                margin:
                  "18px 0 0",
                fontSize:
                  "clamp(36px, 8vw, 72px)",
                lineHeight: 0.95,
                letterSpacing:
                  "-.05em"
              }}
            >
              The interface could not
              recover automatically.
            </h1>

            <p
              style={{
                margin:
                  "20px 0 0",
                color: "#b4b8c3",
                lineHeight: 1.7
              }}
            >
              Retry the request. No
              sensitive information
              should be submitted while
              the interface is in an
              error state.
            </p>

            <button
              type="button"
              onClick={reset}
              style={{
                minHeight: "46px",
                marginTop: "24px",
                padding: "0 18px",
                border: 0,
                borderRadius: "8px",
                background: "#a1e2f0",
                color: "#050506",
                cursor: "pointer",
                fontWeight: 700
              }}
            >
              Try again
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
