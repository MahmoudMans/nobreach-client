import Link from "next/link";

import {
  Breadcrumbs
} from "@/components/navigation/breadcrumbs";

import {
  Container
} from "@/components/layout/container";

import {
  trainingPrograms as programs
} from "@/content/training";

import {
  createMetadata
} from "@/lib/seo";

import styles from "./training.module.css";


export const metadata =
  createMetadata({

    title:
      "Training Hub | No Breach",

    description:
      "Hands-on No Breach cybersecurity training programs focused on practical technical learning.",

    path:
      "/training"
  });


const learningPrinciples = [
  {
    number:
      "01",

    code:
      "DO",

    title:
      "Learn by doing",

    description:
      "Security knowledge becomes more useful when it is exercised through practical technical work."
  },
  {
    number:
      "02",

    code:
      "SYS",

    title:
      "Understand the system",

    description:
      "Move beyond isolated techniques by understanding the behavior and boundaries of the system being studied."
  },
  {
    number:
      "03",

    code:
      "WHY",

    title:
      "Review the reasoning",

    description:
      "Connect the practical result back to why the technique, control or security boundary behaves the way it does."
  }
] as const;


const faq = [
  {
    question:
      "Where can I explore the available programs?",

    answer:
      "Published learner programs are listed directly on this Training Hub and each program has its own detail page."
  },
  {
    question:
      "What do the program statuses mean?",

    answer:
      "Programs use the public statuses Available, Upcoming or Archived."
  },
  {
    question:
      "What if I need training for a company, university, community or team?",

    answer:
      "Organization-facing training is handled separately through the No Breach Security Training service."
  }
] as const;


function Arrow() {

  return (
    <span
      aria-hidden="true"
    >
      ↗
    </span>
  );

}


function statusLabel(
  status:
    string
) {

  switch (
    status
  ) {

    case "available":
      return "AVAILABLE";

    case "upcoming":
      return "UPCOMING";

    case "archived":
      return "ARCHIVED";

    default:
      return status.toUpperCase();

  }

}


function statusClassName(
  status:
    string
) {

  switch (
    status
  ) {

    case "available":
      return styles.statusAvailable;

    case "upcoming":
      return styles.statusUpcoming;

    case "archived":
      return styles.statusArchived;

    default:
      return styles.statusDefault;

  }

}


function SectionHeading({
  number,
  eyebrow,
  title,
  description
}: {
  number:
    string;

  eyebrow:
    string;

  title:
    string;

  description:
    string;
}) {

  return (
    <header
      className={
        styles.sectionHeading
      }
    >
      <p
        className={
          styles.sectionEyebrow
        }
      >
        <span>
          {
            number
          }
        </span>

        {
          eyebrow
        }
      </p>

      <h2>
        {
          title
        }
      </h2>

      <p
        className={
          styles.sectionDescription
        }
      >
        {
          description
        }
      </p>
    </header>
  );

}


export default function TrainingPage() {

  const activePrograms =
    programs.filter(
      (
        program
      ) =>
        program.status !==
        "archived"
    );


  const archivedPrograms =
    programs.filter(
      (
        program
      ) =>
        program.status ===
        "archived"
    );


  const learnerAudiences =
    Array.from(
      new Set(
        programs.flatMap(
          (
            program
          ) =>
            program.audience
        )
      )
    ).slice(
      0,
      8
    );


  return (
    <div
      className={
        styles.page
      }
      data-training-hub-design="v26"
    >
      <Breadcrumbs
        items={[
          {
            label:
              "Training"
          }
        ]}
      />


      {/* ================================================================
          HERO
         ================================================================ */}

      <section
        className={
          styles.hero
        }
        data-training-section="hero"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <div
            className={
              styles.heroTopline
            }
          >
            <span>
              NO BREACH
            </span>

            <span>
              TRAINING HUB
            </span>
          </div>

          <div
            className={
              styles.heroGrid
            }
          >
            <div
              className={
                styles.heroCopy
              }
            >
              <p
                className={
                  styles.heroEyebrow
                }
              >
                Practical Cybersecurity Learning
              </p>

              <h1>
                Learn cybersecurity
                <span>
                  by doing cybersecurity.
                </span>
              </h1>

              <p
                className={
                  styles.heroLead
                }
              >
                Hands-on learning built around practical security work, technical reasoning and programs that move beyond passive theory.
              </p>

              <div
                className={
                  styles.heroActions
                }
              >
                <a
                  href="#programs"
                  className={
                    styles.primaryAction
                  }
                >
                  Explore programs

                  <span
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </a>

                <Link
                  href="/company/internships"
                  className={
                    styles.textAction
                  }
                >
                  Applied projects

                  <Arrow />
                </Link>
              </div>
            </div>

            <div
              className={
                styles.practiceLoop
              }
              data-training-ui="practice-loop"
              aria-label="No Breach practical learning loop"
            >
              <div
                className={
                  styles.loopHeader
                }
              >
                <span>
                  Learning loop
                </span>

                <span>
                  NB / LAB
                </span>
              </div>

              <div
                className={
                  styles.loopCanvas
                }
              >
                <div
                  className={
                    `${styles.loopNode} ${styles.loopNodeLearn}`
                  }
                >
                  <span>
                    01
                  </span>

                  <strong>
                    LEARN
                  </strong>
                </div>

                <div
                  className={
                    `${styles.loopNode} ${styles.loopNodeBuild}`
                  }
                >
                  <span>
                    02
                  </span>

                  <strong>
                    BUILD
                  </strong>
                </div>

                <div
                  className={
                    styles.loopCore
                  }
                >
                  <span>
                    NB
                  </span>

                  <strong>
                    PRACTICE
                  </strong>
                </div>

                <div
                  className={
                    `${styles.loopNode} ${styles.loopNodeTest}`
                  }
                >
                  <span>
                    03
                  </span>

                  <strong>
                    TEST
                  </strong>
                </div>

                <div
                  className={
                    `${styles.loopNode} ${styles.loopNodeExplain}`
                  }
                >
                  <span>
                    04
                  </span>

                  <strong>
                    EXPLAIN
                  </strong>
                </div>

                <span
                  className={
                    `${styles.loopLine} ${styles.loopLineOne}`
                  }
                  aria-hidden="true"
                />

                <span
                  className={
                    `${styles.loopLine} ${styles.loopLineTwo}`
                  }
                  aria-hidden="true"
                />

                <span
                  className={
                    `${styles.loopLine} ${styles.loopLineThree}`
                  }
                  aria-hidden="true"
                />

                <span
                  className={
                    `${styles.loopLine} ${styles.loopLineFour}`
                  }
                  aria-hidden="true"
                />
              </div>

              <div
                className={
                  styles.loopFooter
                }
              >
                <span>
                  THEORY
                </span>

                <i />

                <strong>
                  PRACTICE
                </strong>

                <i />

                <span>
                  UNDERSTANDING
                </span>
              </div>
            </div>
          </div>

          <dl
            className={
              styles.heroMeta
            }
          >
            <div>
              <dt>
                Catalogue
              </dt>

              <dd>
                {
                  String(
                    programs.length
                  ).padStart(
                    2,
                    "0"
                  )
                }
                {" "}
                programs
              </dd>
            </div>

            <div>
              <dt>
                Active / upcoming
              </dt>

              <dd>
                {
                  String(
                    activePrograms.length
                  ).padStart(
                    2,
                    "0"
                  )
                }
              </dd>
            </div>

            <div>
              <dt>
                Model
              </dt>

              <dd>
                Hands-on learning
              </dd>
            </div>

            <div>
              <dt>
                Route
              </dt>

              <dd>
                Public programs
              </dd>
            </div>
          </dl>
        </Container>
      </section>


      {/* ================================================================
          01 — PROGRAM INDEX
         ================================================================ */}

      <section
        id="programs"
        className={
          styles.section
        }
        data-training-section="programs"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="01"
            eyebrow="Program index"
            title="Choose the technical problem you want to understand."
            description="Published programs expose their category, level, format, description and current public status directly from the No Breach training catalogue."
          />

          <div
            className={
              styles.programIndex
            }
            data-training-ui="program-index"
          >
            {
              activePrograms.length
                ? activePrograms.map(
                  (
                    program,
                    index
                  ) => (
                    <article
                      className={
                        styles.programRow
                      }
                      data-training-program
                      key={
                        program.slug
                      }
                    >
                      <Link
                        href={
                          `/training/${program.slug}`
                        }
                        className={
                          styles.programLink
                        }
                        aria-label={
                          `Explore ${program.title}`
                        }
                      >
                        <span
                          className={
                            styles.programNumber
                          }
                        >
                          {
                            String(
                              index + 1
                            ).padStart(
                              2,
                              "0"
                            )
                          }
                        </span>

                        <div
                          className={
                            styles.programIdentity
                          }
                        >
                          <span>
                            {
                              program.category
                            }
                          </span>

                          <h3>
                            {
                              program.title
                            }
                          </h3>
                        </div>

                        <p
                          className={
                            styles.programSummary
                          }
                        >
                          {
                            program.summary
                          }
                        </p>

                        <dl
                          className={
                            styles.programMetadata
                          }
                        >
                          <div>
                            <dt>
                              Level
                            </dt>

                            <dd>
                              {
                                program.level
                              }
                            </dd>
                          </div>

                          <div>
                            <dt>
                              Format
                            </dt>

                            <dd>
                              {
                                program.format
                              }
                            </dd>
                          </div>

                          {
                            program.duration
                              ? (
                                <div>
                                  <dt>
                                    Duration
                                  </dt>

                                  <dd>
                                    {
                                      program.duration
                                    }
                                  </dd>
                                </div>
                              )
                              : null
                          }
                        </dl>

                        <span
                          className={
                            `${styles.programStatus} ${statusClassName(
                              program.status
                            )}`
                          }
                        >
                          {
                            statusLabel(
                              program.status
                            )
                          }
                        </span>

                        <Arrow />
                      </Link>
                    </article>
                  )
                )
                : (
                  <div
                    className={
                      styles.programEmpty
                    }
                  >
                    <span>
                      STATUS
                    </span>

                    <strong>
                      No active or upcoming public program is currently listed.
                    </strong>
                  </div>
                )
            }
          </div>
        </Container>
      </section>


      {/* ================================================================
          02 — LEARNING MODEL
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.sectionAlt}`
        }
        data-training-section="learning-model"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="02"
            eyebrow="Learning model"
            title="The work comes before the badge."
            description="The Training Hub is designed around hands-on technical learning: understand the subject, perform the work and review the reasoning behind the result."
          />

          <div
            className={
              styles.philosophyLayout
            }
          >
            <div
              className={
                styles.philosophyStatement
              }
              data-training-ui="philosophy"
            >
              <p>
                Training philosophy
              </p>

              <blockquote>
                Security knowledge should be exercised, tested and demonstrated.
              </blockquote>

              <span>
                BUILD THROUGH PRACTICE
              </span>
            </div>

            <div
              className={
                styles.principleIndex
              }
            >
              {
                learningPrinciples.map(
                  (
                    principle
                  ) => (
                    <div
                      className={
                        styles.principleRow
                      }
                      key={
                        principle.number
                      }
                    >
                      <span>
                        {
                          principle.number
                        }
                      </span>

                      <small>
                        {
                          principle.code
                        }
                      </small>

                      <h3>
                        {
                          principle.title
                        }
                      </h3>

                      <p>
                        {
                          principle.description
                        }
                      </p>
                    </div>
                  )
                )
              }
            </div>
          </div>

          <div
            className={
              styles.learningFlow
            }
            data-training-ui="learning-flow"
          >
            <div>
              <span>
                01
              </span>

              <strong>
                Understand
              </strong>
            </div>

            <i />

            <div>
              <span>
                02
              </span>

              <strong>
                Practice
              </strong>
            </div>

            <i />

            <div>
              <span>
                03
              </span>

              <strong>
                Validate
              </strong>
            </div>

            <i />

            <div>
              <span>
                04
              </span>

              <strong>
                Explain
              </strong>
            </div>

            <i />

            <div>
              <span>
                05
              </span>

              <strong>
                Repeat
              </strong>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          03 — LEARNER CONTEXT / MENTORSHIP / ARCHIVE / FAQ
         ================================================================ */}

      <section
        className={
          styles.section
        }
        data-training-section="learner-context"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="03"
            eyebrow="Learner context"
            title="Programs are public. Learning remains guided by context."
            description="Audience information comes directly from the published program catalogue, while mentorship and review keep practical work connected to technical understanding."
          />

          <div
            className={
              styles.contextGrid
            }
          >
            <div
              className={
                styles.audienceArea
              }
              data-training-ui="audiences"
            >
              <p
                className={
                  styles.subsectionLabel
                }
              >
                Who programs are for
              </p>

              <div
                className={
                  styles.audienceIndex
                }
              >
                {
                  learnerAudiences.map(
                    (
                      audience,
                      index
                    ) => (
                      <div
                        key={
                          audience
                        }
                      >
                        <span>
                          {
                            String(
                              index + 1
                            ).padStart(
                              2,
                              "0"
                            )
                          }
                        </span>

                        <strong>
                          {
                            audience
                          }
                        </strong>
                      </div>
                    )
                  )
                }
              </div>
            </div>

            <div
              className={
                styles.mentorshipArea
              }
              data-training-ui="mentorship"
            >
              <p
                className={
                  styles.subsectionLabel
                }
              >
                Mentorship & review
              </p>

              <h3>
                Practical work is stronger when the reasoning is reviewed.
              </h3>

              <p>
                The learning experience keeps space for technical explanation, discussion and review rather than treating completion of an exercise as the end of the learning process.
              </p>

              <Link
                href="/company/founder"
                className={
                  styles.inlineAction
                }
              >
                Training & mentorship context

                <Arrow />
              </Link>
            </div>
          </div>

          <div
            className={
              styles.archiveFaqGrid
            }
          >
            <div
              className={
                styles.archive
              }
              data-training-ui="archive"
            >
              <div
                className={
                  styles.archiveHeader
                }
              >
                <p
                  className={
                    styles.subsectionLabel
                  }
                >
                  Past programs
                </p>

                <span>
                  {
                    String(
                      archivedPrograms.length
                    ).padStart(
                      2,
                      "0"
                    )
                  }
                  {" "}
                  archived
                </span>
              </div>

              {
                archivedPrograms.length
                  ? (
                    <div
                      className={
                        styles.archiveRows
                      }
                    >
                      {
                        archivedPrograms.map(
                          (
                            program,
                            index
                          ) => (
                            <Link
                              href={
                                `/training/${program.slug}`
                              }
                              className={
                                styles.archiveRow
                              }
                              key={
                                program.slug
                              }
                            >
                              <span>
                                {
                                  String(
                                    index + 1
                                  ).padStart(
                                    2,
                                    "0"
                                  )
                                }
                              </span>

                              <div>
                                <small>
                                  {
                                    program.category
                                  }
                                </small>

                                <strong>
                                  {
                                    program.title
                                  }
                                </strong>
                              </div>

                              <span>
                                ARCHIVED
                              </span>

                              <Arrow />
                            </Link>
                          )
                        )
                      }
                    </div>
                  )
                  : (
                    <div
                      className={
                        styles.archiveEmpty
                      }
                    >
                      No archived public program is currently listed.
                    </div>
                  )
              }
            </div>

            <div
              className={
                styles.faq
              }
              data-training-ui="faq"
            >
              <p
                className={
                  styles.subsectionLabel
                }
              >
                Common questions
              </p>

              <div
                className={
                  styles.faqList
                }
              >
                {
                  faq.map(
                    (
                      item,
                      index
                    ) => (
                      <details
                        className={
                          styles.faqItem
                        }
                        key={
                          item.question
                        }
                      >
                        <summary>
                          <span>
                            {
                              String(
                                index + 1
                              ).padStart(
                                2,
                                "0"
                              )
                            }
                          </span>

                          <strong>
                            {
                              item.question
                            }
                          </strong>

                          <i
                            aria-hidden="true"
                          >
                            +
                          </i>
                        </summary>

                        <p>
                          {
                            item.answer
                          }
                        </p>
                      </details>
                    )
                  )
                }
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          CTA
         ================================================================ */}

      <section
        className={
          styles.cta
        }
        data-training-section="cta"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <div
            className={
              styles.ctaRule
            }
          />

          <div
            className={
              styles.ctaLayout
            }
          >
            <div>
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                <span>
                  LAB
                </span>

                Training Hub
              </p>

              <h2>
                Find the program that matches what you want to learn.
              </h2>
            </div>

            <div
              className={
                styles.ctaCopy
              }
            >
              <p>
                Explore public learner programs here, or use the organization-facing Security Training service for company, university, community or team training.
              </p>

              <div
                className={
                  styles.ctaActions
                }
              >
                <a
                  href="#programs"
                  className={
                    styles.primaryAction
                  }
                >
                  Browse programs

                  <span
                    aria-hidden="true"
                  >
                    ↑
                  </span>
                </a>

                <Link
                  href="/services/security-training"
                  className={
                    styles.textAction
                  }
                >
                  Organization training

                  <Arrow />
                </Link>

                <Link
                  href="/contact"
                  className={
                    styles.textAction
                  }
                >
                  Contact

                  <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );

}
