import styles from "./signal-strip.module.css";

const signals = [
  "Offensive Security",
  "Web Application Security",
  "API Security",
  "Infrastructure Security",
  "Training Hub",
  "CR4CKOUT",
  "AI Security",
  "Cybersecurity Community"
];

function SignalGroup({
  hidden = false
}: {
  hidden?: boolean;
}) {
  return (
    <div
      className={styles.group}
      aria-hidden={hidden}
    >
      {signals.map((signal) => (
        <span
          className={styles.item}
          key={`${hidden ? "copy-" : ""}${signal}`}
        >
          <span
            className={styles.dot}
            aria-hidden="true"
          />
          {signal}
        </span>
      ))}
    </div>
  );
}

export function SignalStrip() {
  return (
    <div
      className={styles.shell}
      aria-label="No Breach focus areas"
    >
      <div className={styles.viewport}>
        <div className={styles.track}>
          <SignalGroup />
          <SignalGroup hidden />
        </div>
      </div>
    </div>
  );
}
