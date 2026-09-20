import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { EventStructuredData } from "@/components/content/event-structured-data";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import {
  events,
  getEvent
} from "@/content/events";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return events.map(
    (event) => ({
      slug:
        event.slug
    })
  );
}

export async function generateMetadata({
  params
}: {
  params:
    Promise<{
      slug: string;
    }>;
}) {
  const { slug } =
    await params;

  const event =
    getEvent(slug);

  if (!event) {
    return createMetadata({
      title:
        "Event",
      description:
        "No Breach cybersecurity event.",
      path:
        "/events"
    });
  }

  return createMetadata({
    title:
      event.title,
    description:
      event.summary,
    path:
      `/events/${event.slug}`
  });
}

export default async function EventPage({
  params
}: {
  params:
    Promise<{
      slug: string;
    }>;
}) {
  const { slug } =
    await params;

  const event =
    getEvent(slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <EventStructuredData
        event={event}
      />

      <Breadcrumbs
        items={[
          {
            label:
              "Events",
            href:
              "/events"
          },
          {
            label:
              event.title
          }
        ]}
      />

      <PageHero
        eyebrow={`${event.status} event`}
        title={
          event.title
        }
        description={
          event.summary
        }
        meta={[
          event.year,
          event.location
        ]}
      />

      <section
        className={
          pages.section
        }
      >
        <Container>
          <div
            className={
              pages.split
            }
          >
            <p
              className={
                pages.sideLabel
              }
            >
              About the event
            </p>

            <div
              className={
                pages.prose
              }
            >
              {event.description.map(
                (
                  paragraph
                ) => (
                  <p
                    key={
                      paragraph
                    }
                  >
                    {
                      paragraph
                    }
                  </p>
                )
              )}
            </div>
          </div>
        </Container>
      </section>

      <section
        className={
          pages.section
        }
      >
        <Container>
          <SectionHeader
            eyebrow="Format"
            title="A hands-on community experience."
          />

          <div
            className={
              pages.grid2
            }
          >
            {event.format.map(
              (
                item,
                index
              ) => (
                <div
                  className={
                    pages.card
                  }
                  key={item}
                >
                  <p
                    className={
                      pages.cardNumber
                    }
                  >
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </p>

                  <h3
                    className={
                      pages.cardTitle
                    }
                  >
                    {item}
                  </h3>
                </div>
              )
            )}
          </div>
        </Container>
      </section>

      <section
        className={
          pages.section
        }
      >
        <Container>
          <div
            className={
              pages.cta
            }
          >
            <p
              className={
                pages.ctaEyebrow
              }
            >
              Community
            </p>

            <h2
              className={
                pages.ctaTitle
              }
            >
              Explore the wider
              CR4CKOUT initiative.
            </h2>

            <div
              className={
                pages.ctaActions
              }
            >
              <ButtonLink href="/cr4ckout">
                CR4CKOUT
              </ButtonLink>

              <ButtonLink
                href="/events"
                variant="secondary"
              >
                Event archive
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
