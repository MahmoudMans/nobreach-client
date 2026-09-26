import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import {
  trainingPrograms
} from "@/content/training";

import styles from "./red-team-v40.module.css";


const program =
  (() => {

    const found =
      trainingPrograms.find(
        candidate =>
          candidate.slug ===
          "red-team-foundations"
      );


    if (
      !found
    ) {

      throw new Error(
        "Red Team Foundations training data is missing."
      );

    }


    return found;

  })();


const relatedPrograms =
  trainingPrograms
    .filter(
      candidate =>
        candidate.slug !==
        program.slug
    )
    .slice(
      0,
      2
    );


const statusLabels = {
  available:
    "Available",

  upcoming:
    "Upcoming",

  archived:
    "Archived"
} as const;


const inquiryLabel =
  program.status ===
  "archived"
    ? "Ask about future editions"
    : program.status ===
        "upcoming"
      ? "Ask about the next cohort"
      : "Ask about enrollment";


function Arrow() {

  return (
    <span
      aria-hidden="true"
    >
      ↗
    </span>
  );

}


export function RedTeamV40() {

  return (
    <article
      className={
        styles.page
      }
      data-red-team-design="v40-course-detail"
      data-training-course-detail="true"
    >

      {/* ================================================================
          COURSE INTRO
         ================================================================ */}

      <section
        className={
          styles.courseIntro
        }
        data-red-team-section="course-intro"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >

          <nav
            className={
              styles.breadcrumb
            }
            aria-label="Breadcrumb"
          >
            <Link
              href="/training"
            >
              Academy
            </Link>

            <span
              aria-hidden="true"
            >
              /
            </span>

            <span>
              {
                program.title
              }
            </span>
          </nav>


          <div
            className={
              styles.introGrid
            }
          >

            <div
              className={
                styles.courseSummary
              }
            >

              <p
                className={
                  styles.eyebrow
                }
              >
                {
                  program.category
                }
                {" "}
                / RED TEAM
              </p>


              <h1>
                {
                  program.title
                }
              </h1>


              <p
                className={
                  styles.summary
                }
              >
                {
                  program.summary
                }
              </p>


              <dl
                className={
                  styles.metaGrid
                }
                aria-label="Course information"
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

                <div>
                  <dt>
                    Duration
                  </dt>

                  <dd>
                    {
                      program.duration
                      ??
                      "Flexible"
                    }
                  </dd>
                </div>

                <div>
                  <dt>
                    Status
                  </dt>

                  <dd>
                    {
                      statusLabels[
                        program.status
                      ]
                    }
                  </dd>
                </div>
              </dl>


              <div
                className={
                  styles.outcomePreview
                }
              >
                <p>
                  What you&apos;ll leave with
                </p>

                <ul>
                  {
                    program.outcomes
                      .slice(
                        0,
                        3
                      )
                      .map(
                        outcome => (
                          <li
                            key={
                              outcome
                            }
                          >
                            {
                              outcome
                            }
                          </li>
                        )
                      )
                  }
                </ul>
              </div>

            </div>


            <aside
              className={
                styles.enrollmentCard
              }
              aria-label="Red Team Foundations enrollment"
            >

              <div
                className={
                  styles.enrollmentTop
                }
              >
                <span>
                  COURSE ACCESS
                </span>

                <span>
                  RT / 01
                </span>
              </div>


              <div
                className={
                  styles.statusRow
                }
              >
                <span
                  className={
                    styles.statusDot
                  }
                  aria-hidden="true"
                />

                <strong>
                  {
                    statusLabels[
                      program.status
                    ]
                  }
                </strong>
              </div>


              <dl
                className={
                  styles.enrollmentMeta
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

                <div>
                  <dt>
                    Duration
                  </dt>

                  <dd>
                    {
                      program.duration
                      ??
                      "Flexible"
                    }
                  </dd>
                </div>
              </dl>


              <Link
                className={
                  styles.primaryAction
                }
                href="/contact"
              >
                {
                  inquiryLabel
                }

                <Arrow />
              </Link>


              <a
                className={
                  styles.secondaryAction
                }
                href="#curriculum"
              >
                View curriculum

                <span
                  aria-hidden="true"
                >
                  ↓
                </span>
              </a>


              <div
                className={
                  styles.attackPath
                }
                aria-label="Red Team learning sequence"
              >
                <span>
                  RECON
                </span>

                <i />

                <span>
                  MAP
                </span>

                <i />

                <span>
                  TEST
                </span>

                <i />

                <span>
                  REPORT
                </span>
              </div>

            </aside>

          </div>

        </Container>
      </section>


      {/* ================================================================
          CONTEXTUAL COURSE NAVIGATION
         ================================================================ */}

      <div
        className={
          styles.courseNavigation
        }
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <nav
            className={
              styles.tabs
            }
            aria-label="Course sections"
          >
            <a
              href="#overview"
            >
              Overview
            </a>

            <a
              href="#curriculum"
            >
              Curriculum
            </a>

            <a
              href="#requirements"
            >
              Requirements
            </a>
          </nav>
        </Container>
      </div>


      {/* ================================================================
          OVERVIEW
         ================================================================ */}

      <section
        id="overview"
        className={
          styles.section
        }
        data-red-team-section="overview"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >

          <div
            className={
              styles.sectionGrid
            }
          >
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
                  01
                </span>

                Overview
              </p>

              <h2>
                Learn to think through an adversary&apos;s path.
              </h2>
            </header>


            <div
              className={
                styles.overviewContent
              }
            >
              <p
                className={
                  styles.largeCopy
                }
              >
                {
                  program.description
                }
              </p>


              <div
                className={
                  styles.objectives
                }
              >
                <p
                  className={
                    styles.subsectionLabel
                  }
                >
                  Learning objectives
                </p>

                <ol>
                  {
                    program.objectives.map(
                      (
                        objective,
                        index
                      ) => (
                        <li
                          key={
                            objective
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

                          <p>
                            {
                              objective
                            }
                          </p>
                        </li>
                      )
                    )
                  }
                </ol>
              </div>
            </div>
          </div>

        </Container>
      </section>


      {/* ================================================================
          CURRICULUM
         ================================================================ */}

      <section
        id="curriculum"
        className={
          `${styles.section} ${styles.sectionAlt}`
        }
        data-red-team-section="curriculum"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >

          <header
            className={
              styles.wideHeading
            }
          >
            <div>
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                <span>
                  02
                </span>

                Curriculum
              </p>

              <h2>
                A practical sequence from reconnaissance to reporting.
              </h2>
            </div>

            <p>
              Each module advances the same adversary-thinking model instead
              of treating techniques as disconnected exercises.
            </p>
          </header>


          <ol
            className={
              styles.curriculum
            }
            aria-label="Red Team Foundations curriculum"
          >
            {
              program.modules.map(
                module => (
                  <li
                    key={
                      module.number
                    }
                  >
                    <div
                      className={
                        styles.moduleNumber
                      }
                    >
                      {
                        module.number
                      }
                    </div>

                    <div
                      className={
                        styles.moduleContent
                      }
                    >
                      <h3>
                        {
                          module.title
                        }
                      </h3>

                      <p>
                        {
                          module.description
                        }
                      </p>
                    </div>

                    <span
                      className={
                        styles.moduleSignal
                      }
                      aria-hidden="true"
                    />
                  </li>
                )
              )
            }
          </ol>

        </Container>
      </section>


      {/* ================================================================
          REQUIREMENTS / AUDIENCE
         ================================================================ */}

      <section
        id="requirements"
        className={
          styles.section
        }
        data-red-team-section="requirements"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >

          <header
            className={
              styles.wideHeading
            }
          >
            <div>
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                <span>
                  03
                </span>

                Before you start
              </p>

              <h2>
                Know the expected foundation and who the program serves.
              </h2>
            </div>
          </header>


          <div
            className={
              styles.requirementsGrid
            }
          >

            <section
              className={
                styles.infoPanel
              }
            >
              <p
                className={
                  styles.subsectionLabel
                }
              >
                Prerequisites
              </p>

              <ul>
                {
                  program.prerequisites.map(
                    prerequisite => (
                      <li
                        key={
                          prerequisite
                        }
                      >
                        {
                          prerequisite
                        }
                      </li>
                    )
                  )
                }
              </ul>
            </section>


            <section
              className={
                styles.infoPanel
              }
            >
              <p
                className={
                  styles.subsectionLabel
                }
              >
                Designed for
              </p>

              <ul>
                {
                  program.audience.map(
                    audience => (
                      <li
                        key={
                          audience
                        }
                      >
                        {
                          audience
                        }
                      </li>
                    )
                  )
                }
              </ul>
            </section>

          </div>

        </Container>
      </section>


      {/* ================================================================
          OUTCOMES
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.outcomesSection}`
        }
        data-red-team-section="outcomes"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >

          <div
            className={
              styles.sectionGrid
            }
          >
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
                  04
                </span>

                Outcomes
              </p>

              <h2>
                Build a repeatable offensive-security method.
              </h2>
            </header>


            <ol
              className={
                styles.outcomeList
              }
            >
              {
                program.outcomes.map(
                  (
                    outcome,
                    index
                  ) => (
                    <li
                      key={
                        outcome
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
                          outcome
                        }
                      </strong>
                    </li>
                  )
                )
              }
            </ol>
          </div>

        </Container>
      </section>


      {/* ================================================================
          RELATED COURSES
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.sectionAlt}`
        }
        data-red-team-section="related"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >

          <header
            className={
              styles.relatedHeading
            }
          >
            <div>
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                <span>
                  05
                </span>

                Continue learning
              </p>

              <h2>
                Related No Breach programs.
              </h2>
            </div>

            <Link
              className={
                styles.textAction
              }
              href="/training"
            >
              All programs

              <Arrow />
            </Link>
          </header>


          <div
            className={
              styles.relatedGrid
            }
          >
            {
              relatedPrograms.map(
                related => (
                  <Link
                    className={
                      styles.relatedCourse
                    }
                    href={
                      `/training/${related.slug}`
                    }
                    key={
                      related.slug
                    }
                  >
                    <div
                      className={
                        styles.relatedTop
                      }
                    >
                      <span>
                        {
                          related.category
                        }
                      </span>

                      <span>
                        {
                          related.level
                        }
                      </span>
                    </div>

                    <h3>
                      {
                        related.title
                      }
                    </h3>

                    <p>
                      {
                        related.summary
                      }
                    </p>

                    <div
                      className={
                        styles.relatedFooter
                      }
                    >
                      <span>
                        {
                          related.format
                        }
                      </span>

                      <Arrow />
                    </div>
                  </Link>
                )
              )
            }
          </div>

        </Container>
      </section>


      {/* ================================================================
          ACADEMY CTA
         ================================================================ */}

      <section
        className={
          styles.academyCta
        }
        data-red-team-section="academy-cta"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
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
                  NB
                </span>

                Academy
              </p>

              <h2>
                Continue building practical security depth.
              </h2>
            </div>


            <div
              className={
                styles.ctaBody
              }
            >
              <p>
                Explore the complete No Breach training range or discuss the
                next Red Team Foundations opportunity.
              </p>

              <div
                className={
                  styles.ctaActions
                }
              >
                <Link
                  className={
                    styles.primaryAction
                  }
                  href="/training"
                >
                  Explore Academy

                  <Arrow />
                </Link>

                <Link
                  className={
                    styles.secondaryAction
                  }
                  href="/contact"
                >
                  Contact No Breach
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </article>
  );

}
