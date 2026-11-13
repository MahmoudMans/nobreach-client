// NB_CR4CKOUT_3_TEASER_V1 + NB_CR4CKOUT_3_REGISTRATION_V1
// Dedicated page for /events/cr4ckout-3-0.
// Event structured data is only emitted once a real startDate is set.
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/ui/json-ld";
import { siteConfig } from "@/content/site";
import { Cr4ckoutNextEditionTeaser } from "@/components/cr4ckout/next-edition-teaser";
import { getActivity } from "@/content/activities";
import { getEvent } from "@/content/events";
import styles from "./cr4ckout-3-teaser.module.css";

const edition = getEvent("cr4ckout-3-0");
const previousEdition = getEvent("cr4ckout-2-0");
const launch = getActivity("cr4ckout-launched");

const declassifiedFiles = [
  previousEdition
    ? {
        file: "FILE 02",
        title: previousEdition.title,
        meta: `${previousEdition.year} · ${previousEdition.location}`,
        href: `/events/${previousEdition.slug}`
      }
    : null,
  launch
    ? {
        file: "FILE 01",
        title: launch.title,
        meta: launch.location
          ? `${launch.year} · ${launch.location}`
          : launch.year,
        href: `/activities/${launch.slug}`
      }
    : null
].filter(
  (item): item is NonNullable<typeof item> =>
    item !== null
);

export function Cr4ckout3Teaser() {
  return (
    <div
      className={styles.page}
      data-event-detail="cr4ckout-3-teaser"
    >
      {edition?.startDate ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Event",
            name: edition.title,
            description: edition.summary,
            startDate: edition.startDate,
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode:
              "https://schema.org/OfflineEventAttendanceMode",
            location: {
              "@type": "Place",
              name: edition.location,
              address: edition.location
            },
            organizer: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url
            },
            url: new URL(
              `/events/${edition.slug}`,
              siteConfig.url
            ).toString(),
            ...(edition.registrationUrl
              ? {
                  offers: {
                    "@type": "Offer",
                    url: edition.registrationUrl,
                    availability: "https://schema.org/InStock"
                  }
                }
              : {})
          }}
        />
      ) : null}

      <section className={styles.hero}>
        <Container>
          <Link
            href="/events"
            className={styles.back}
          >
            <span aria-hidden="true">←</span>
            All events
          </Link>

          <Cr4ckoutNextEditionTeaser variant="page" />
        </Container>
      </section>

      {declassifiedFiles.length > 0 ? (
        <section
          className={styles.archive}
          aria-labelledby="cr4ckout-declassified-title"
        >
          <Container>
            <div className={styles.archiveLayout}>
              <div>
                <p className={styles.archiveEyebrow}>
                  DECLASSIFIED FILES
                </p>

                <h2 id="cr4ckout-declassified-title">
                  While you wait, revisit the
                  previous chapters.
                </h2>
              </div>

              <ul className={styles.fileList}>
                {declassifiedFiles.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <span className={styles.fileCode}>
                        {item.file}
                      </span>

                      <span className={styles.fileBody}>
                        <strong>{item.title}</strong>
                        <small>{item.meta}</small>
                      </span>

                      <span
                        className={styles.fileArrow}
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      ) : null}
    </div>
  );
}
