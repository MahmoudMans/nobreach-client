import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { ArticleStructuredData } from "@/components/insights/article-structured-data";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import {
  getInsight,
  getRelatedInsights,
  insights
} from "@/content/insights";
import {
  getService
} from "@/content/services";
import {
  getTrainingProgram
} from "@/content/training";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";
import styles from "./article.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map(
    (insight) => ({
      slug:
        insight.slug
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

  const insight =
    getInsight(slug);

  if (!insight) {
    return createMetadata({
      title:
        "Cybersecurity Insight",
      description:
        "Technical cybersecurity writing from No Breach.",
      path:
        "/insights"
    });
  }

  return createMetadata({
    title:
      insight.title,
    description:
      insight.summary,
    path:
      `/insights/${insight.slug}`
  });
}

export default async function InsightPage({
  params
}: {
  params:
    Promise<{
      slug: string;
    }>;
}) {
  const { slug } =
    await params;

  const insight =
    getInsight(slug);

  if (!insight) {
    notFound();
  }

  const related =
    getRelatedInsights(
      insight
    );

  const services =
    insight
      .relatedServiceSlugs
      .map(
        (serviceSlug) =>
          getService(
            serviceSlug
          )
      )
      .filter(
        (
          service
        ): service is NonNullable<
          ReturnType<
            typeof getService
          >
        > =>
          Boolean(
            service
          )
      );

  const training =
    insight
      .relatedTrainingSlugs
      .map(
        (programSlug) =>
          getTrainingProgram(
            programSlug
          )
      )
      .filter(
        (
          program
        ): program is NonNullable<
          ReturnType<
            typeof getTrainingProgram
          >
        > =>
          Boolean(
            program
          )
      );

  return (
    <>
      <ArticleStructuredData
        insight={
          insight
        }
      />

      <Breadcrumbs
        items={[
          {
            label:
              "Insights",
            href:
              "/insights"
          },
          {
            label:
              insight.title
          }
        ]}
      />

      <PageHero
        eyebrow={
          insight.category
        }
        title={
          insight.title
        }
        description={
          insight.summary
        }
        meta={[
          insight.author,
          insight.publishedAt,
          insight.readingTime
        ]}
      />

      <article
        className={
          styles.article
        }
      >
        <Container size="wide">
          <div
            className={
              styles.layout
            }
          >
            <nav
              className={
                styles.toc
              }
              aria-label="Article contents"
            >
              <p
                className={
                  styles.tocLabel
                }
              >
                Contents
              </p>

              <ol
                className={
                  styles.tocList
                }
              >
                {insight.sections.map(
                  (section) => (
                    <li
                      key={
                        section.id
                      }
                    >
                      <a
                        className={
                          styles.tocLink
                        }
                        href={`#${section.id}`}
                      >
                        {
                          section.heading
                        }
                      </a>
                    </li>
                  )
                )}
              </ol>
            </nav>

            <div
              className={
                styles.content
              }
            >
              <p
                className={
                  styles.intro
                }
              >
                {
                  insight.summary
                }
              </p>

              {insight.sections.map(
                (section) => (
                  <section
                    className={
                      styles.section
                    }
                    id={
                      section.id
                    }
                    key={
                      section.id
                    }
                  >
                    <h2
                      className={
                        styles.sectionTitle
                      }
                    >
                      {
                        section.heading
                      }
                    </h2>

                    {section.paragraphs.map(
                      (
                        paragraph
                      ) => (
                        <p
                          className={
                            styles.paragraph
                          }
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

                    {section.bullets ? (
                      <ul
                        className={
                          styles.bullets
                        }
                      >
                        {section.bullets.map(
                          (
                            item,
                            index
                          ) => (
                            <li
                              className={
                                styles.bullet
                              }
                              key={
                                item
                              }
                            >
                              <span
                                className={
                                  styles.bulletMarker
                                }
                              >
                                {String(
                                  index +
                                    1
                                ).padStart(
                                  2,
                                  "0"
                                )}
                              </span>

                              <span>
                                {
                                  item
                                }
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    ) : null}
                  </section>
                )
              )}

              {services.length >
                0 ||
              training.length >
                0 ? (
                <div
                  className={
                    styles.contextGrid
                  }
                >
                  {services.map(
                    (service) => (
                      <Link
                        className={
                          styles.contextCard
                        }
                        href={`/services/${service.slug}`}
                        key={
                          service.slug
                        }
                      >
                        <p
                          className={
                            styles.contextLabel
                          }
                        >
                          Related
                          service
                        </p>

                        <h3
                          className={
                            styles.contextTitle
                          }
                        >
                          {
                            service.shortTitle
                          }
                        </h3>

                        <span
                          className={
                            styles.contextAction
                          }
                        >
                          Explore
                          service →
                        </span>
                      </Link>
                    )
                  )}

                  {training.map(
                    (program) => (
                      <Link
                        className={
                          styles.contextCard
                        }
                        href={`/training/${program.slug}`}
                        key={
                          program.slug
                        }
                      >
                        <p
                          className={
                            styles.contextLabel
                          }
                        >
                          Related
                          program
                        </p>

                        <h3
                          className={
                            styles.contextTitle
                          }
                        >
                          {
                            program.title
                          }
                        </h3>

                        <span
                          className={
                            styles.contextAction
                          }
                        >
                          Explore
                          program →
                        </span>
                      </Link>
                    )
                  )}
                </div>
              ) : null}
            </div>

            <aside
              className={
                styles.metaSide
              }
            >
              <p
                className={
                  styles.metaLabel
                }
              >
                Article
              </p>

              <div
                className={
                  styles.metaGroup
                }
              >
                <div
                  className={
                    styles.metaRow
                  }
                >
                  <p
                    className={
                      styles.metaKey
                    }
                  >
                    Author
                  </p>

                  <p
                    className={
                      styles.metaValue
                    }
                  >
                    {
                      insight.author
                    }
                  </p>
                </div>

                <div
                  className={
                    styles.metaRow
                  }
                >
                  <p
                    className={
                      styles.metaKey
                    }
                  >
                    Published
                  </p>

                  <p
                    className={
                      styles.metaValue
                    }
                  >
                    <time
                      dateTime={
                        insight.publishedAt
                      }
                    >
                      {
                        insight.publishedAt
                      }
                    </time>
                  </p>
                </div>

                <div
                  className={
                    styles.metaRow
                  }
                >
                  <p
                    className={
                      styles.metaKey
                    }
                  >
                    Reading time
                  </p>

                  <p
                    className={
                      styles.metaValue
                    }
                  >
                    {
                      insight.readingTime
                    }
                  </p>
                </div>
              </div>

              <div
                className={
                  styles.tags
                }
              >
                {insight.tags.map(
                  (tag) => (
                    <span
                      className={
                        styles.tag
                      }
                      key={
                        tag
                      }
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </aside>
          </div>
        </Container>
      </article>

      {related.length > 0 ? (
        <section
          className={
            styles.relatedSection
          }
        >
          <Container>
            <p
              className={
                pages.sideLabel
              }
            >
              Related insights
            </p>

            <div
              className={
                styles.relatedGrid
              }
              style={{
                marginTop:
                  "1.5rem"
              }}
            >
              {related.map(
                (item) => (
                  <Link
                    className={
                      styles.relatedCard
                    }
                    href={`/insights/${item.slug}`}
                    key={
                      item.slug
                    }
                  >
                    <p
                      className={
                        styles.relatedCategory
                      }
                    >
                      {
                        item.category
                      }
                    </p>

                    <h2
                      className={
                        styles.relatedTitle
                      }
                    >
                      {
                        item.title
                      }
                    </h2>

                    <p
                      className={
                        styles.relatedSummary
                      }
                    >
                      {
                        item.summary
                      }
                    </p>
                  </Link>
                )
              )}
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
              Knowledge
            </p>

            <h2
              className={
                pages.ctaTitle
              }
            >
              Continue exploring
              security thinking from
              No Breach.
            </h2>

            <div
              className={
                pages.ctaActions
              }
            >
              <ButtonLink href="/insights">
                All insights
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
