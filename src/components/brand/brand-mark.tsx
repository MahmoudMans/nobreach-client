import Link from "next/link";
import styles from "./brand-mark.module.css";

export function BrandMark() {
  return (
    <Link className={styles.brand} href="/" aria-label="No Breach home">
      <span className={styles.mark} aria-hidden="true">
        NB
      </span>
      <span className={styles.text}>NO BREACH</span>
    </Link>
  );
}
