// NB_TRAINING_RATINGS_V1
import type { TrainingRating } from "@/types/content";
import styles from "./star-rating.module.css";

const STAR_PATH =
  "M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55L2.48 9.42l6.58-.96L12 2.5z";

function Stars() {
  return (
    <>
      {[0, 1, 2, 3, 4].map((index) => (
        <svg key={index} viewBox="0 0 24 24" focusable="false">
          <path d={STAR_PATH} />
        </svg>
      ))}
    </>
  );
}

export function StarRating({
  rating,
  size = "md",
  placement = "inline",
  className
}: {
  rating: TrainingRating;
  size?: "sm" | "md";
  placement?: "inline" | "hero";
  className?: string;
}) {
  const average = Math.min(5, Math.max(0, rating.average));
  const display = average.toFixed(1);
  const fill = `${(average / 5) * 100}%`;
  const count = rating.count;
  const label = count
    ? `Rated ${display} out of 5 by ${count} participant${count === 1 ? "" : "s"}`
    : `Rated ${display} out of 5 by participants`;

  return (
    <p
      className={[
        styles.rating,
        size === "sm" ? styles.small : "",
        placement === "hero" ? styles.hero : "",
        className ?? ""
      ]
        .filter(Boolean)
        .join(" ")}
      data-training-rating={display}
    >
      <span className={styles.visuallyHidden}>{label}</span>

      <span className={styles.stars} aria-hidden="true">
        <span className={styles.base}>
          <Stars />
        </span>
        <span className={styles.fill} style={{ width: fill }}>
          <Stars />
        </span>
      </span>

      <span className={styles.value} aria-hidden="true">
        {display}
        <span className={styles.outOf}>/5</span>
      </span>

      <span className={styles.count} aria-hidden="true">
        {count
          ? `${count} participant rating${count === 1 ? "" : "s"}`
          : "Participant rating"}
      </span>
    </p>
  );
}
