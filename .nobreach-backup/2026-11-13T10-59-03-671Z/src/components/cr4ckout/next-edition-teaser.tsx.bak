// NB_CR4CKOUT_3_TEASER_V1
// Teaser for the next CR4CKOUT edition. Date, location and story are
// deliberately withheld. Update this file (and the "cr4ckout-3-0" record in
// src/content/events.ts) when the edition is announced.
import Link from "next/link";
import { siteConfig } from "@/content/site";
import styles from "./next-edition-teaser.module.css";

export const NEXT_EDITION_SLUG = "cr4ckout-3-0";

const caseFile = [
  { label: "Date", state: "Classified" },
  { label: "Location", state: "Classified" },
  { label: "Story", state: "Encrypted" },
  { label: "Challenges", state: "Sealed" }
] as const;

// base64 — decodes to a short message for the curious.
const interceptedFragment =
  "Q1I0Q0tPVVQgMy4wIDo6IFRIRSBTVE9SWSBDT05USU5VRVM=";

export function Cr4ckoutTeaserSignal() {
  return (
    <a
      href="#next-edition"
      className={styles.signal}
      data-cr4ckout-ui="next-edition-signal"
    >
      <span
        className={styles.signalDot}
        aria-hidden="true"
      />
      Transmission incoming: CR4CKOUT 3.0
      <span aria-hidden="true">↓</span>
    </a>
  );
}

export function Cr4ckoutNextEditionTeaser({
  variant
}: {
  variant: "section" | "page";
}) {
  const Heading =
    variant === "page" ? "h1" : "h2";

  return (
    <div
      className={`${styles.teaser} ${
        variant === "page"
          ? styles.pageVariant
          : styles.sectionVariant
      }`}
      data-cr4ckout-teaser={variant}
    >
      <div className={styles.copy}>
        <p className={styles.eyebrow}>
          <span
            className={styles.eyebrowDot}
            aria-hidden="true"
          />
          CR4CKOUT / FILE 03 / CLASSIFIED
        </p>

        <Heading className={styles.title}>
          CR4CKOUT{" "}
          <span className={styles.glitch}>
            3.0
            <span
              className={styles.glitchLayer}
              aria-hidden="true"
            >
              3.0
            </span>
            <span
              className={styles.glitchLayer}
              aria-hidden="true"
            >
              3.0
            </span>
          </span>
        </Heading>

        <p className={styles.tagline}>
          The next chapter is loading
          <span
            className={styles.cursor}
            aria-hidden="true"
          />
        </p>

        <p className={styles.lead}>
          A new edition of the story-driven hacking
          challenge is being prepared. The story, the
          challenges and everything else stay encrypted
          for now.
        </p>

        <div className={styles.actions}>
          <a
            className={styles.primaryAction}
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Follow for the reveal
            <span aria-hidden="true">↗</span>
          </a>

          {variant === "section" ? (
            <Link
              className={styles.secondaryAction}
              href={`/events/${NEXT_EDITION_SLUG}`}
            >
              Open the file
              <span aria-hidden="true">→</span>
            </Link>
          ) : (
            <Link
              className={styles.secondaryAction}
              href="/cr4ckout"
            >
              Explore CR4CKOUT
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>

      <aside
        className={styles.file}
        aria-label="CR4CKOUT 3.0 file"
      >
        <div className={styles.fileTop}>
          <span>FILE 03</span>
          <span className={styles.restricted}>
            ACCESS RESTRICTED
          </span>
        </div>

        <dl className={styles.fileRows}>
          {caseFile.map((row) => (
            <div key={row.label}>
              <dt>{row.label}</dt>
              <dd>
                <span
                  className={styles.bar}
                  aria-hidden="true"
                />
                <span className={styles.state}>
                  {row.state}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <figure className={styles.fragment}>
          <figcaption>Intercepted fragment</figcaption>
          <code>{interceptedFragment}</code>
        </figure>
      </aside>
    </div>
  );
}
