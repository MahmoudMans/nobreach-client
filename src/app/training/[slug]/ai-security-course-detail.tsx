import Link from "next/link";

import {
  trainingPrograms
} from "@/content/training";

import styles from "./ai-security-course-detail.module.css";


const program =
  trainingPrograms.find(
    (
      item
    ) =>
      item.slug
      ===
      "ai-security-foundations"
  );


const courseSections = [
  {
    href:
      "#overview",

    label:
      "Overview"
  },
  {
    href:
      "#curriculum",

    label:
      "Curriculum"
  },
  {
    href:
      "#requirements",

    label:
      "Requirements"
  },
  {
    href:
      "#outcomes",

    label:
      "Outcomes"
  }
] as const;


export function AISecurityCourseDetail() {

  if (!program) {

    return null;

  }


  const relatedPrograms =
    trainingPrograms
      .filter(
        (
          item
        ) =>
          item.slug
          !==
          program.slug
      )
      .slice(
        0,
        2
      );


  return (
    <div
      className={
        styles.page
      }
      data-ai-course-detail="v1"
    >
      <section
        className={
          styles.courseIntro
        }
        data-ai-course-section="intro"
      >
        <div
          className={
            styles.introDecoration
          }
          aria-hidden="true"
        />


        <div
          className={
            styles.container
          }
        >
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
                AI SECURITY / COURSE
              </p>


              <h1>
                {program.title}
              </h1>


              <p
                className={
                  styles.lead
                }
              >
                {program.summary}
              </p>


              <dl
                className={
                  styles.courseMeta
                }
              >
                <div>
                  <dt>
                    Level
                  </dt>

                  <dd>
                    {program.level}
                  </dd>
                </div>


                <div>
                  <dt>
                    Format
                  </dt>

                  <dd>
                    {program.format}
                  </dd>
                </div>


                {
                  program.duration
                    ?
                    (
                      <div>
                        <dt>
                          Duration
                        </dt>

                        <dd>
                          {program.duration}
                        </dd>
                      </div>
                    )
                    :
                    null
                }
              </dl>


              <div
                className={
                  styles.introOutcomes
                }
                aria-label="Outcome summary"
              >
                <p
                  className={
                    styles.smallLabel
                  }
                >
                  WHAT YOU WILL LEAVE WITH
                </p>


                <div
                  className={
                    styles.introOutcomeList
                  }
                >
                  {
                    program
                      .outcomes
                      .slice(
                        0,
                        3
                      )
                      .map(
                        (
                          outcome,
                          index
                        ) => (
                          <div
                            className={
                              styles.introOutcome
                            }
                            key={
                              outcome
                            }
                          >
                            <span>
                              {
                                String(
                                  index
                                  +
                                  1
                                ).padStart(
                                  2,
                                  "0"
                                )
                              }
                            </span>

                            <p>
                              {outcome}
                            </p>
                          </div>
                        )
                      )
                  }
                </div>
              </div>
            </div>


            <aside
              className={
                styles.enrollmentCard
              }
              data-course-enrollment
              aria-label="Program access"
            >
              <div
                className={
                  styles.enrollmentStatus
                }
              >
                <span
                  aria-hidden="true"
                />

                {program.status}
              </div>


              <p
                className={
                  styles.enrollmentLabel
                }
              >
                PROGRAM ACCESS
              </p>


              <h2>
                Build practical
                AI security capability.
              </h2>


              <p
                className={
                  styles.enrollmentDescription
                }
              >
                Speak with NoBreach
                about access,
                delivery format,
                team training,
                or learner
                participation.
              </p>


              <div
                className={
                  styles.enrollmentDetails
                }
              >
                <div>
                  <span>
                    Course
                  </span>

                  <strong>
                    AI Security
                  </strong>
                </div>


                <div>
                  <span>
                    Level
                  </span>

                  <strong>
                    {program.level}
                  </strong>
                </div>


                <div>
                  <span>
                    Format
                  </span>

                  <strong>
                    {program.format}
                  </strong>
                </div>


                {
                  program.duration
                    ?
                    (
                      <div>
                        <span>
                          Duration
                        </span>

                        <strong>
                          {program.duration}
                        </strong>
                      </div>
                    )
                    :
                    null
                }
              </div>


              <div
                className={
                  styles.enrollmentActions
                }
              >
                <Link
                  href="/contact"
                  className={
                    styles.primaryButton
                  }
                >
                  Ask about this program
                </Link>


                <Link
                  href="/training"
                  className={
                    styles.secondaryButton
                  }
                >
                  Explore Academy
                </Link>
              </div>


              <p
                className={
                  styles.enrollmentNote
                }
              >
                NoBreach Academy /
                practical cybersecurity
                education
              </p>
            </aside>
          </div>
        </div>
      </section>


      <div
        className={
          styles.tabsSurface
        }
        data-course-tabs
      >
        <div
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
            <div
              className={
                styles.tabList
              }
            >
              {
                courseSections.map(
                  (
                    item
                  ) => (
                    <Link
                      href={
                        item.href
                      }
                      className={
                        styles.tab
                      }
                      key={
                        item.href
                      }
                    >
                      {item.label}
                    </Link>
                  )
                )
              }
            </div>
          </nav>
        </div>
      </div>


      <section
        id="overview"
        className={
          styles.overview
        }
        data-ai-course-section="overview"
      >
        <div
          className={
            styles.container
          }
        >
          <header
            className={
              styles.sectionHeader
            }
          >
            <p
              className={
                styles.eyebrow
              }
            >
              01 / OVERVIEW
            </p>


            <h2>
              Understand the system
              around the model.
            </h2>


            <p>
              Build a practical
              security mindset for
              AI-enabled applications
              by reasoning about
              trust boundaries,
              data,
              permissions,
              tools,
              and application
              behavior.
            </p>
          </header>


          <div
            className={
              styles.overviewGrid
            }
          >
            <div
              className={
                styles.learningList
              }
            >
              <p
                className={
                  styles.smallLabel
                }
              >
                LEARNING OBJECTIVES
              </p>


              {
                program
                  .objectives
                  .map(
                    (
                      objective,
                      index
                    ) => (
                      <div
                        className={
                          styles.learningItem
                        }
                        key={
                          objective
                        }
                      >
                        <span>
                          {
                            String(
                              index
                              +
                              1
                            ).padStart(
                              2,
                              "0"
                            )
                          }
                        </span>

                        <p>
                          {objective}
                        </p>
                      </div>
                    )
                  )
              }
            </div>


            <aside
              className={
                styles.audiencePanel
              }
            >
              <p
                className={
                  styles.smallLabel
                }
              >
                WHO THIS IS FOR
              </p>


              <h3>
                Built for practical
                security learners.
              </h3>


              <div
                className={
                  styles.audienceList
                }
              >
                {
                  program
                    .audience
                    .map(
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
                                index
                                +
                                1
                              ).padStart(
                                2,
                                "0"
                              )
                            }
                          </span>

                          <p>
                            {audience}
                          </p>
                        </div>
                      )
                    )
                }
              </div>
            </aside>
          </div>
        </div>
      </section>


      <section
        id="curriculum"
        className={
          styles.curriculum
        }
        data-ai-course-section="curriculum"
      >
        <div
          className={
            styles.container
          }
        >
          <header
            className={
              styles.sectionHeader
            }
          >
            <p
              className={
                styles.eyebrow
              }
            >
              02 / CURRICULUM
            </p>


            <h2>
              A focused security
              progression.
            </h2>


            <p>
              Each module develops
              one layer of the
              security model before
              moving to the next.
            </p>
          </header>


          <div
            className={
              styles.moduleList
            }
          >
            {
              program
                .modules
                .map(
                  (
                    module
                  ) => (
                    <article
                      className={
                        styles.moduleRow
                      }
                      key={
                        module.number
                      }
                    >
                      <span
                        className={
                          styles.moduleNumber
                        }
                      >
                        {module.number}
                      </span>


                      <div
                        className={
                          styles.moduleContent
                        }
                      >
                        <h3>
                          {module.title}
                        </h3>

                        <p>
                          {
                            module.description
                          }
                        </p>
                      </div>


                      <span
                        className={
                          styles.moduleMarker
                        }
                        aria-hidden="true"
                      >
                        /
                      </span>
                    </article>
                  )
                )
            }
          </div>
        </div>
      </section>


      <section
        id="requirements"
        className={
          styles.requirements
        }
        data-ai-course-section="requirements"
      >
        <div
          className={
            styles.container
          }
        >
          <div
            className={
              styles.requirementsGrid
            }
          >
            <header
              className={
                styles.requirementsIntro
              }
            >
              <p
                className={
                  styles.eyebrow
                }
              >
                03 / REQUIREMENTS
              </p>


              <h2>
                Start with security
                fundamentals,
                not advanced ML.
              </h2>


              <p>
                The course is
                designed to make
                AI application
                security approachable
                from a practical
                cybersecurity
                perspective.
              </p>
            </header>


            <div
              className={
                styles.requirementsPanel
              }
            >
              <p
                className={
                  styles.smallLabel
                }
              >
                BEFORE YOU START
              </p>


              <div
                className={
                  styles.requirementList
                }
              >
                {
                  program
                    .prerequisites
                    .map(
                      (
                        prerequisite,
                        index
                      ) => (
                        <div
                          className={
                            styles.requirement
                          }
                          key={
                            prerequisite
                          }
                        >
                          <span>
                            {
                              String(
                                index
                                +
                                1
                              ).padStart(
                                2,
                                "0"
                              )
                            }
                          </span>

                          <p>
                            {prerequisite}
                          </p>
                        </div>
                      )
                    )
                }
              </div>


              <dl
                className={
                  styles.requirementMeta
                }
              >
                <div>
                  <dt>
                    Level
                  </dt>

                  <dd>
                    {program.level}
                  </dd>
                </div>


                <div>
                  <dt>
                    Delivery
                  </dt>

                  <dd>
                    {program.format}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>


      <section
        id="outcomes"
        className={
          styles.outcomes
        }
        data-ai-course-section="outcomes"
      >
        <div
          className={
            styles.container
          }
        >
          <header
            className={
              styles.sectionHeader
            }
          >
            <p
              className={
                styles.eyebrow
              }
            >
              04 / OUTCOMES
            </p>


            <h2>
              Leave with a clearer
              security model.
            </h2>


            <p>
              The outcome is not
              memorising prompt
              tricks. It is learning
              how to reason about
              real AI-enabled
              application risk.
            </p>
          </header>


          <div
            className={
              styles.outcomeRows
            }
          >
            {
              program
                .outcomes
                .map(
                  (
                    outcome,
                    index
                  ) => (
                    <article
                      className={
                        styles.outcomeRow
                      }
                      key={
                        outcome
                      }
                    >
                      <span>
                        {
                          String(
                            index
                            +
                            1
                          ).padStart(
                            2,
                            "0"
                          )
                        }
                      </span>

                      <p>
                        {outcome}
                      </p>
                    </article>
                  )
                )
            }
          </div>
        </div>
      </section>


      <section
        className={
          styles.related
        }
        data-ai-course-section="related"
      >
        <div
          className={
            styles.container
          }
        >
          <header
            className={
              styles.sectionHeader
            }
          >
            <p
              className={
                styles.eyebrow
              }
            >
              CONTINUE LEARNING
            </p>


            <h2>
              Related NoBreach
              programs.
            </h2>


            <p>
              Continue building
              offensive and
              application-security
              capability through
              the Academy.
            </p>
          </header>


          <div
            className={
              styles.relatedGrid
            }
          >
            {
              relatedPrograms.map(
                (
                  related
                ) => (
                  <article
                    className={
                      styles.courseCard
                    }
                    key={
                      related.slug
                    }
                  >
                    <div
                      className={
                        styles.courseCardTop
                      }
                    >
                      <span>
                        NOBREACH ACADEMY
                      </span>

                      <span>
                        {related.level}
                      </span>
                    </div>


                    <div
                      className={
                        styles.courseCardBody
                      }
                    >
                      <h3>
                        {related.title}
                      </h3>

                      <p>
                        {related.summary}
                      </p>
                    </div>


                    <div
                      className={
                        styles.courseCardFooter
                      }
                    >
                      <div>
                        <span>
                          {related.format}
                        </span>

                        {
                          related.duration
                            ?
                            (
                              <span>
                                {
                                  related.duration
                                }
                              </span>
                            )
                            :
                            null
                        }
                      </div>


                      <Link
                        href={
                          `/training/${related.slug}`
                        }
                      >
                        Explore course
                        <span
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    </div>
                  </article>
                )
                )
            }
          </div>
        </div>
      </section>


      <section
        className={
          styles.academyCta
        }
        data-ai-course-section="cta"
      >
        <div
          className={
            styles.container
          }
        >
          <div
            className={
              styles.ctaInner
            }
          >
            <div>
              <p
                className={
                  styles.eyebrow
                }
              >
                NOBREACH ACADEMY
              </p>


              <h2>
                Build capability
                through practice.
              </h2>


              <p>
                Explore the full
                training catalogue
                or speak with
                NoBreach about
                a program for
                your team.
              </p>
            </div>


            <div
              className={
                styles.ctaActions
              }
            >
              <Link
                href="/training"
                className={
                  styles.primaryButton
                }
              >
                Explore Academy
              </Link>


              <Link
                href="/contact"
                className={
                  styles.secondaryButton
                }
              >
                Talk to NoBreach
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
