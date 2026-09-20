import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import {
  activities,
  getActivity
} from "@/content/activities";
import {
  getEvent
} from "@/content/events";
import {
  siteConfig
} from "@/content/site";
import {
  getTrainingProgram
} from "@/content/training";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";
import styles from "./activity.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return activities.map(
    (activity) => ({
      slug:
        activity.slug
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

  const activity =
    getActivity(slug);

  if (!activity) {
    return createMetadata({
      title:
        "Activity",
      description:
        "No Breach cybersecurity activity.",
      path:
        "/activities"
    });
  }

  return createMetadata({
    title:
      activity.title,
    description:
      activity.summary,
    path:
      `/activities/${activity.slug}`
  });
}

export default async function ActivityPage({
  params
}: {
  params:
    Promise<{
      slug: string;
    }>;
}) {
  const { slug } =
    await params;

  const activity =
    getActivity(slug);

  if (!activity) {
    notFound();
  }

  const relatedEvent =
    activity.relatedEventSlug
      ? getEvent(
          activity.relatedEventSlug
        )
      : undefined;

  const relatedTraining =
    activity.relatedTrainingSlug
      ? getTrainingProgram(
          activity.relatedTrainingSlug
        )
      : undefined;

  return (
    <>
      <JsonLd
        data={{
          "@context":
            "https://schema.org",
          "@type":
            "CreativeWork",
          name:
            activity.title,
          description:
            activity.summary,
          dateCreated:
            activity.year,
          creator: {
            "@type":
              "Organization",
            name:
              siteConfig.name,
            url:
              siteConfig.url
          },
          url:
            new URL(
              `/activities/${activity.slug}`,
              siteConfig.url
            ).toString()
        }}
      />

      <Breadcrumbs
        items={[
          {
            label:
              "Activities",
            href:
              "/activities"
          },
          {
            label:
              activity.title
          }
        ]}
      />

      <PageHero
        eyebrow={
          activity.category
        }
        title={
          activity.title
        }
        description={
          activity.summary
        }
        meta={[
          activity.year,
          activity.location ??
            "No Breach",
          activity.category
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
              styles.overview
            }
          >
            <aside
              className={
                styles.side
              }
            >
              <p
                className={
                  styles.sideLabel
                }
              >
                Activity profile
              </p>

              <div
                className={
                  styles.meta
                }
              >
                <div
                  className={
                    styles.metaRow
                  }
                >
                  <span
                    className={
                      styles.metaLabel
                    }
                  >
                    Year
                  </span>
                  <span
                    className={
                      styles.metaValue
                    }
                  >
                    {
                      activity.year
                    }
                  </span>
                </div>

                <div
                  className={
                    styles.metaRow
                  }
                >
                  <span
                    className={
                      styles.metaLabel
                    }
                  >
                    Type
                  </span>
                  <span
                    className={
                      styles.metaValue
                    }
                  >
                    {
                      activity.category
                    }
                  </span>
                </div>

                {activity.location ? (
                  <div
                    className={
                      styles.metaRow
                    }
                  >
                    <span
                      className={
                        styles.metaLabel
                      }
                    >
                      Location
                    </span>
                    <span
                      className={
                        styles.metaValue
                      }
                    >
                      {
                        activity.location
                      }
                    </span>
                  </div>
                ) : null}
              </div>
            </aside>

            <div>
              <p
                className={
                  styles.description
                }
              >
                {
                  activity.description
                }
              </p>

              <div
                className={
                  styles.highlightGrid
                }
              >
                {activity.highlights.map(
                  (
                    highlight,
                    index
                  ) => (
                    <div
                      className={
                        styles.highlight
                      }
                      key={
                        highlight
                      }
                    >
                      <p
                        className={
                          styles.highlightIndex
                        }
                      >
                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}
                      </p>

                      <h2
                        className={
                          styles.highlightTitle
                        }
                      >
                        {
                          highlight
                        }
                      </h2>
                    </div>
                  )
                )}
              </div>
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
          <div
            className={
              styles.content
            }
          >
            {activity.sections.map(
              (section) => (
                <section
                  key={
                    section.title
                  }
                >
                  <h2
                    className={
                      styles.sectionTitle
                    }
                  >
                    {
                      section.title
                    }
                  </h2>

                  <div
                    className={
                      styles.paragraphs
                    }
                  >
                    {section.paragraphs.map(
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
                </section>
              )
            )}
          </div>
        </Container>
      </section>

      {relatedEvent ||
      relatedTraining ? (
        <section
          className={
            pages.section
          }
        >
          <Container>
            <div
              className={
                styles.related
              }
            >
              {relatedTraining ? (
                <Link
                  className={
                    styles.relatedCard
                  }
                  href={`/training/${relatedTraining.slug}`}
                >
                  <span
                    className={
                      styles.relatedLabel
                    }
                  >
                    Related program
                  </span>

                  <span
                    className={
                      styles.relatedTitle
                    }
                  >
                    {
                      relatedTraining.title
                    }
                  </span>

                  <span
                    className={
                      styles.relatedAction
                    }
                  >
                    Explore program →
                  </span>
                </Link>
              ) : null}

              {relatedEvent ? (
                <Link
                  className={
                    styles.relatedCard
                  }
                  href={`/events/${relatedEvent.slug}`}
                >
                  <span
                    className={
                      styles.relatedLabel
                    }
                  >
                    Related event
                  </span>

                  <span
                    className={
                      styles.relatedTitle
                    }
                  >
                    {
                      relatedEvent.title
                    }
                  </span>

                  <span
                    className={
                      styles.relatedAction
                    }
                  >
                    Explore event →
                  </span>
                </Link>
              ) : null}
            </div>
          </Container>
        </section>
      ) : null}

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
              No Breach
            </p>

            <h2
              className={
                pages.ctaTitle
              }
            >
              Explore more activity
              across security,
              education and community.
            </h2>

            <div
              className={
                pages.ctaActions
              }
            >
              <ButtonLink href="/activities">
                Activity archive
              </ButtonLink>

              <ButtonLink
                href="/contact"
                variant="secondary"
              >
                Contact No Breach
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
