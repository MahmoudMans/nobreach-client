import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import { events } from "@/content/events";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";

export const metadata = createMetadata({
  title: "Events",
  description: "Published No Breach and CR4CKOUT cybersecurity events.",
  path: "/events"
});

export default function EventsPage() {
  const upcoming = events.filter((event) => event.status === "upcoming");
  const past = events.filter((event) => event.status === "past");

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Technical participation over passive attendance."
        description="Published cybersecurity events connected to No Breach and the CR4CKOUT community initiative."
      />

      <section className={pages.section}>
        <Container>
          <div className={pages.empty}>
            <p className={pages.emptyEyebrow}>Upcoming</p>
            {upcoming.length === 0 ? (
              <>
                <h2 className={pages.emptyTitle}>
                  No upcoming event has been announced.
                </h2>
                <p className={pages.emptyText}>
                  Published future events will appear here when dates and
                  details are confirmed.
                </p>
              </>
            ) : null}
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <div className={pages.grid2}>
            {past.map((event) => (
              <Link
                className={`${pages.card} ${pages.linkCard}`}
                href={`/events/${event.slug}`}
                key={event.slug}
              >
                <p className={pages.cardNumber}>
                  {event.year} / PAST EVENT
                </p>
                <h2 className={pages.cardTitle}>{event.title}</h2>
                <p className={pages.cardDescription}>{event.summary}</p>
                <p className={pages.cardMeta}>{event.location}</p>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: "2rem" }}>
            <ButtonLink href="/cr4ckout" variant="secondary">
              Explore CR4CKOUT
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
