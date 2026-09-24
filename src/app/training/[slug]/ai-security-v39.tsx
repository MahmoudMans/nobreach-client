import Link from "next/link";

import {
  trainingPrograms
} from "@/content/training";

import styles from "./ai-security-v39.module.css";


const program =
  trainingPrograms.find(
    (
      item
    ) =>
      item.slug
      ===
      "ai-security-foundations"
  );


const trustSurface = [
  {
    number:
      "01",

    title:
      "Instructions",

    description:
      "Model instructions shape behavior, but instructions are not an authorization boundary."
  },
  {
    number:
      "02",

    title:
      "Context",

    description:
      "Retrieved data and conversation state change what the application can expose and influence."
  },
  {
    number:
      "03",

    title:
      "Tools",

    description:
      "Tool calls move the system from language generation into real application capability."
  },
  {
    number:
      "04",

    title:
      "Actions",

    description:
      "Agentic workflows turn model decisions into operations with real security consequences."
  }
] as const;


export function AISecurityV39() {

  if (!program) {

    return null;

  }


  return (
    <>
      <section
        className={
          styles.hero
        }
        data-ai-v39-section="hero"
      >
        <div
          className={
            styles.shell
          }
        >
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
                  styles.eyebrow
                }
              >
                AI SECURITY / FOUNDATIONS
              </p>

              <h1>
                {program.title}
              </h1>

              <p
                className={
                  styles.heroStatement
                }
              >
                Secure the system
                around the model.
              </p>

              <p
                className={
                  styles.summary
                }
              >
                {program.summary}
              </p>

              <div
                className={
                  styles.actions
                }
              >
                <Link
                  href="/contact"
                  className={
                    styles.primaryAction
                  }
                >
                  Ask about this program
                </Link>

                <Link
                  href="/training"
                  className={
                    styles.secondaryAction
                  }
                >
                  All programs
                </Link>
              </div>
            </div>


            <aside
              className={
                styles.heroRail
              }
              aria-label="Program information"
            >
              <p
                className={
                  styles.railCode
                }
              >
                MODEL ≠ SYSTEM
              </p>

              <div
                className={
                  styles.metaRow
                }
              >
                <span>
                  LEVEL
                </span>

                <strong>
                  {program.level}
                </strong>
              </div>

              <div
                className={
                  styles.metaRow
                }
              >
                <span>
                  FORMAT
                </span>

                <strong>
                  {program.format}
                </strong>
              </div>

              {
                program.duration
                ?
                (
                  <div
                    className={
                      styles.metaRow
                    }
                  >
                    <span>
                      DURATION
                    </span>

                    <strong>
                      {program.duration}
                    </strong>
                  </div>
                )
                :
                null
              }

              <div
                className={
                  styles.metaRow
                }
              >
                <span>
                  STATUS
                </span>

                <strong>
                  {
                    program
                      .status
                      .toUpperCase()
                  }
                </strong>
              </div>

              <p
                className={
                  styles.railFoot
                }
              >
                No Breach /
                AI Security /
                Public Training
              </p>
            </aside>
          </div>
        </div>
      </section>


      <section
        className={
          styles.surface
        }
        data-ai-v39-section="surface"
      >
        <div
          className={
            styles.shell
          }
        >
          <header
            className={
              styles.sectionHeader
            }
          >
            <p
              className={
                styles.sectionCode
              }
            >
              02 / TRUST SURFACE
            </p>

            <h2>
              Designed for learners
              building practical security
              capability.
            </h2>

            <p>
              AI application security is
              not only about model output.
              It is about the boundaries
              between instructions, data,
              tools, permissions and
              actions.
            </p>
          </header>


          <div
            className={
              styles.trustRows
            }
          >
            {
              trustSurface.map(
                (
                  item
                ) => (
                  <div
                    className={
                      styles.trustRow
                    }
                    key={
                      item.number
                    }
                  >
                    <span
                      className={
                        styles.trustNumber
                      }
                    >
                      {item.number}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>
                  </div>
                )
                )
            }
          </div>


          <div
            className={
              styles.surfaceFooter
            }
          >
            <div>
              <p
                className={
                  styles.smallLabel
                }
              >
                WHO THIS IS FOR
              </p>

              <div
                className={
                  styles.audience
                }
              >
                {
                  program
                    .audience
                    .map(
                      (
                        item,
                        index
                      ) => (
                        <p
                          key={
                            item
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

                          {item}
                        </p>
                      )
                    )
                }
              </div>
            </div>


            <div>
              <p
                className={
                  styles.smallLabel
                }
              >
                SECURITY QUESTIONS
              </p>

              <div
                className={
                  styles.objectives
                }
              >
                {
                  program
                    .objectives
                    .map(
                      (
                        item,
                        index
                      ) => (
                        <p
                          key={
                            item
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

                          {item}
                        </p>
                      )
                    )
                }
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
        className={
          styles.program
        }
        data-ai-v39-section="program"
      >
        <div
          className={
            styles.shell
          }
        >
          <header
            className={
              styles.programHeader
            }
          >
            <p
              className={
                styles.sectionCode
              }
            >
              03 / SECURITY PROGRAM
            </p>

            <h2>
              Three boundaries
              to understand before
              testing AI systems.
            </h2>
          </header>


          <div
            className={
              styles.moduleRail
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
                        styles.module
                      }
                      key={
                        module.number
                      }
                    >
                      <div
                        className={
                          styles.moduleTop
                        }
                      >
                        <span>
                          {module.number}
                        </span>

                        <i
                          aria-hidden="true"
                        />
                      </div>

                      <h3>
                        {module.title}
                      </h3>

                      <p>
                        {
                          module.description
                        }
                      </p>
                    </article>
                  )
                )
            }
          </div>


          <div
            className={
              styles.programFooter
            }
          >
            <div>
              <p
                className={
                  styles.smallLabel
                }
              >
                EXPECTED OUTCOMES
              </p>

              <div
                className={
                  styles.outcomes
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
                        <div
                          className={
                            styles.outcome
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


            <aside
              className={
                styles.prerequisites
              }
            >
              <p
                className={
                  styles.smallLabel
                }
              >
                ENTRY POINT
              </p>

              {
                program
                  .prerequisites
                  .map(
                    (
                      item
                    ) => (
                      <p
                        className={
                          styles.prerequisite
                        }
                        key={
                          item
                        }
                      >
                        {item}
                      </p>
                    )
                  )
              }
            </aside>
          </div>
        </div>
      </section>


      <section
        className={
          styles.note
        }
        data-ai-v39-section="note"
      >
        <div
          className={
            styles.shell
          }
        >
          <div
            className={
              styles.noteGrid
            }
          >
            <div
              className={
                styles.noteIntro
              }
            >
              <p
                className={
                  styles.sectionCode
                }
              >
                04 / SECURITY NOTE
              </p>

              <h2>
                The risk changes
                when AI can act.
              </h2>

              <p>
                Keep the system model
                close to the testing:
                model behavior matters,
                but permissions, tools
                and actions define the
                real security boundary.
              </p>
            </div>


            <Link
              href="/insights/prompt-injection-matters-when-ai-can-act"
              className={
                styles.researchLink
              }
            >
              <span
                className={
                  styles.researchType
                }
              >
                AI SECURITY / RESEARCH
              </span>

              <h3>
                Prompt injection matters
                most when AI can act
              </h3>

              <p>
                A security model for
                understanding prompt
                injection when AI
                applications can retrieve
                data, invoke tools and
                perform actions.
              </p>

              <span
                className={
                  styles.researchArrow
                }
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          </div>


          <div
            className={
              styles.finalBar
            }
          >
            <p>
              Build practical
              security capability.
            </p>

            <div
              className={
                styles.finalActions
              }
            >
              <Link
                href="/contact"
              >
                Training enquiry
              </Link>

              <Link
                href="/training"
              >
                All programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
