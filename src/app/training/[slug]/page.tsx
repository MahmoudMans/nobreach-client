import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { TrainingStructuredData } from "@/components/training/training-structured-data";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import {
  getTrainingProgram,
  trainingPrograms
} from "@/content/training";
import { insights } from "@/content/insights";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return trainingPrograms.map(
    (program) => ({
      slug:
        program.slug
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

  const program =
    getTrainingProgram(slug);

  if (!program) {
    return createMetadata({
      title:
        "Training",
      description:
        "No Breach cybersecurity training.",
      path:
        "/training"
    });
  }

  return createMetadata({
    title:
      program.title,
    description:
      program.summary,
    path:
      `/training/${program.slug}`
  });
}

export default async function TrainingProgramPage({
  params
}: {
  params:
    Promise<{
      slug: string;
    }>;
}) {
  const { slug } =
    await params;

  const program =
    getTrainingProgram(slug);

  if (!program) {
    notFound();
  }

  const relatedInsights =
    insights
      .filter((insight) =>
        insight.relatedTrainingSlugs.includes(
          program.slug
        )
      )
      .slice(0, 3);

  return (
    <>
      <TrainingStructuredData
        program={program}
      />

      <Breadcrumbs
        items={[
          {
            label:
              "Training",
            href:
              "/training"
          },
          {
            label:
              program.title
          }
        ]}
      />

      <PageHero
        eyebrow={
          program.category
        }
        title={
          program.title
        }
        description={
          program.description
        }
        meta={[
          program.level,
          program.format,
          program.duration ??
            "Flexible duration",
          program.status.toUpperCase()
        ]}
        actions={
          <ButtonLink href="/contact">
            {program.status ===
            "archived"
              ? "Ask about future editions"
              : "Ask about this program"}
          </ButtonLink>
        }
      />

      <section
        className={
          pages.section
        }
      >
        <Container>
          <SectionHeader
            eyebrow="Who it is for"
            title="Designed for learners building practical security capability."
          />

          <div
            className={
              pages.grid2
            }
          >
            {program.audience.map(
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

                  <h2
                    className={
                      pages.cardTitle
                    }
                  >
                    {item}
                  </h2>
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
              pages.split
            }
          >
            <p
              className={
                pages.sideLabel
              }
            >
              Learning objectives
            </p>

            <ul
              className={
                pages.list
              }
            >
              {program.objectives.map(
                (
                  objective,
                  index
                ) => (
                  <li
                    className={
                      pages.listItem
                    }
                    key={
                      objective
                    }
                  >
                    <span
                      className={
                        pages.listDot
                      }
                    >
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span>
                      {
                        objective
                      }
                    </span>
                  </li>
                )
              )}
            </ul>
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
            eyebrow="Curriculum"
            title="A structured path through the subject."
          />

          <div
            className={
              pages.grid2
            }
          >
            {program.modules.map(
              (module) => (
                <div
                  className={
                    pages.card
                  }
                  key={
                    module.number
                  }
                >
                  <p
                    className={
                      pages.cardNumber
                    }
                  >
                    {
                      module.number
                    }
                  </p>

                  <h3
                    className={
                      pages.cardTitle
                    }
                  >
                    {
                      module.title
                    }
                  </h3>

                  <p
                    className={
                      pages.cardDescription
                    }
                  >
                    {
                      module.description
                    }
                  </p>
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
              pages.split
            }
          >
            <p
              className={
                pages.sideLabel
              }
            >
              Expected outcomes
            </p>

            <ul
              className={
                pages.list
              }
            >
              {program.outcomes.map(
                (
                  outcome,
                  index
                ) => (
                  <li
                    className={
                      pages.listItem
                    }
                    key={
                      outcome
                    }
                  >
                    <span
                      className={
                        pages.listDot
                      }
                    >
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span>
                      {
                        outcome
                      }
                    </span>
                  </li>
                )
              )}
            </ul>
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
              pages.split
            }
          >
            <p
              className={
                pages.sideLabel
              }
            >
              Prerequisites
            </p>

            <ul
              className={
                pages.list
              }
            >
              {program.prerequisites.map(
                (
                  prerequisite,
                  index
                ) => (
                  <li
                    className={
                      pages.listItem
                    }
                    key={
                      prerequisite
                    }
                  >
                    <span
                      className={
                        pages.listDot
                      }
                    >
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span>
                      {
                        prerequisite
                      }
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </Container>
      </section>

      {relatedInsights.length > 0 ? (
        <section
          className={pages.section}
        >
          <Container>
            <SectionHeader
              eyebrow="Related insights"
              title="Read the security thinking behind the program."
            />

            <div className={pages.grid3}>
              {relatedInsights.map((insight) => (
                <Link
                  className={`${pages.card} ${pages.linkCard}`}
                  href={`/insights/${insight.slug}`}
                  key={insight.slug}
                >
                  <p className={pages.cardNumber}>
                    {insight.category.toUpperCase()}
                  </p>

                  <h3 className={pages.cardTitle}>
                    {insight.title}
                  </h3>

                  <p className={pages.cardDescription}>
                    {insight.summary}
                  </p>
                </Link>
              ))}
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
              Training Hub
            </p>

            <h2
              className={
                pages.ctaTitle
              }
            >
              Build practical
              security capability.
            </h2>

            <div
              className={
                pages.ctaActions
              }
            >
              <ButtonLink href="/contact">
                Training enquiry
              </ButtonLink>

              <ButtonLink
                href="/training"
                variant="secondary"
              >
                All programs
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
