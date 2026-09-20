"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section
      style={{
        minHeight: "70vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem"
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          padding: "2rem",
          border: "1px solid rgba(161, 226, 240, 0.18)",
          borderRadius: "14px",
          background: "#0d0f14"
        }}
      >
        <p
          style={{
            color: "#83b3d7",
            fontFamily: "monospace",
            fontSize: "0.75rem"
          }}
        >
          APPLICATION ERROR
        </p>
        <h1 style={{ marginTop: "1rem", fontSize: "2rem" }}>
          Something went wrong.
        </h1>
        <p style={{ marginTop: "1rem", color: "#b4b8c3" }}>
          The page could not be rendered correctly.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: "1.5rem",
            minHeight: "44px",
            padding: "0 1rem",
            borderRadius: "8px",
            background: "#a1e2f0",
            color: "#050506",
            cursor: "pointer",
            fontWeight: 650
          }}
        >
          Try again
        </button>
      </div>
    </section>
  );
}
