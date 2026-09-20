export default function Loading() {
  return (
    <div
      aria-label="Loading page"
      role="status"
      style={{
        display: "grid",
        minHeight: "50vh",
        placeItems: "center"
      }}
    >
      <div
        style={{
          display: "grid",
          gap: "12px",
          width: "min(320px, 70vw)"
        }}
      >
        <div
          style={{
            width: "64px",
            height: "1px",
            background: "#a1e2f0"
          }}
        />

        <div
          style={{
            color: "#7f8490",
            fontFamily: "monospace",
            fontSize: "12px",
            letterSpacing: "0.14em",
            textTransform: "uppercase"
          }}
        >
          Loading No Breach
        </div>
      </div>
    </div>
  );
}
