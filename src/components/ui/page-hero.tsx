import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import styles from "./page-hero.module.css";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  meta?: string[];
  actions?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  meta,
  actions
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            {eyebrow}
          </p>

          <h1 className={styles.title}>
            {title}
          </h1>

          <p className={styles.description}>
            {description}
          </p>

          {meta && meta.length > 0 ? (
            <div className={styles.meta}>
              {meta.map((item) => (
                <span key={item}>
                  {item}
                </span>
              ))}
            </div>
          ) : null}

          {actions ? (
            <div className={styles.actions}>
              {actions}
            </div>
          ) : null}

          <p
            className={styles.coordinate}
            aria-hidden="true"
          >
            NB / PUBLIC INTERFACE / 2026
          </p>
        </div>
      </Container>
    </section>
  );
}
