import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import {
  TrainingRegistrationAction
} from "./course-registration-links";

import {
  trainingPrograms
} from "@/content/training";

import {
  createMetadata
} from "@/lib/seo";

import styles from "./training.module.css";


export const metadata =
  createMetadata({

    title:
      "Training | No Breach",

    description:
      "Compare public No Breach cybersecurity learning programs across offensive security, web security and AI security.",

    path:
      "/training"
  });


const statusLabels = {
  available:
    "Available",

  upcoming:
    "Upcoming",

  archived:
    "Archived"
} as const;


const learningFlow = [
  {
    number:
      "01",

    title:
      "Understand",

    description:
      "Build a clear model of the system, security problem and relevant trust boundaries."
  },
  {
    number:
      "02",

    title:
      "Practice",

    description:
      "Work through focused technical modules instead of learning only through explanation."
  },
  {
    number:
      "03",

    title:
      "Investigate",

    description:
      "Reason through practical security problems and connect individual weaknesses to the wider system."
  },
  {
    number:
      "04",

    title:
      "Apply",

    description:
      "Translate the work into explicit technical outcomes that can be reused beyond the program."
  }
] as const;


const faqs = [
  {
    question:
      "How do I choose the right program?",

    answer:
      "Compare each program's category, stated level, learning format, session information, curriculum, prerequisites and intended outcomes. Open the program detail before choosing, and contact No Breach if information you need is unclear."
  },
  {
    question:
      "Who are the Academy programs for?",

    answer:
      "The public Academy is designed around individual learner programs. Each course publishes its own intended audience so you can check the fit before choosing a path."
  },
  {
    question:
      "What does an archived program mean?",

    answer:
      "Archived identifies a program that is not currently presented as an active public edition. You can still review the program and contact NoBreach about future availability."
  },
  {
    question:
      "Is this the same as training for organizations?",

    answer:
      "No. This page presents public learner programs. Organization and team training is presented separately through the Security Training service."
  }
] as const;


const featuredProgram =
  trainingPrograms[0];


const supportingPrograms =
  trainingPrograms.slice(
    1
  );


function Arrow() {

  return (
    <span
      aria-hidden="true"
    >
      →
    </span>
  );

}


export default function TrainingPage() {

  return (
    <div
      className={
        styles.page
      }
      data-training-academy="continuous-v1"
      data-training-hub-audit="v27"
    >
      {/* ================================================================
          TRAINING HUB INTRODUCTION
         ================================================================ */}

      <section
        className={
          styles.hero
        }
        data-training-section="intro"
      >
        <Container>
          <div
            className={
              styles.frame
            }
            data-training-frame="intro"
          >
            <p
              className={
                styles.eyebrow
              }
            >
              No Breach Academy · Training Hub
            </p>


            <h1>
              Learn cybersecurity by doing cybersecurity.
            </h1>


            <p
              className={
                styles.heroLead
              }
            >
              Explore public learning programs in offensive security, web
              security and AI security. Compare their technical focus, stated
              level, learning format and intended outcomes.
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
                href="/contact"
                className={
                  styles.secondaryAction
                }
              >
                Ask about a program

                <Arrow />
              </Link>
            </div>


            <p
              className={
                styles.organizationRoute
              }
            >
              Looking for training for your organization?

              {" "}

              <Link
                href="/services/security-training"
              >
                Explore the Security Training Service

                <Arrow />
              </Link>
            </p>
          </div>
        </Container>
      </section>


      {/* ================================================================
          UNIFIED PROGRAM CATALOGUE
         ================================================================ */}

      <section
        id="programs"
        className={
          `${styles.section} ${styles.catalogueSection}`
        }
        data-training-section="programs"
      >
        <Container>
          <div
            className={
              styles.frame
            }
            data-training-frame="programs"
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
                01 · Programs
              </p>


              <div
                className={
                  styles.headingLine
                }
              >
                <h2>
                  Choose the security capability you want to build.
                </h2>


                <span
                  className={
                    styles.programCount
                  }
                >
                  {
                    trainingPrograms.length
                  } public programs
                </span>
              </div>


              <p
                className={
                  styles.sectionDescription
                }
              >
                Compare each program&apos;s focus, level, learning format and
                learning aims. Open a program to explore its curriculum and
                registration information.
              </p>
            </header>


            <div
              className={
                styles.programGrid
              }
              data-training-ui="program-catalogue"
            >
              {
                trainingPrograms.map(
                  (
                    program
                  ) => (
                    <article
                      className={
                        styles.programCard
                      }
                      data-training-program-card={
                        program.slug
                      }
                      key={
                        program.slug
                      }
                    >
                      <div
                        className={
                          styles.programTopline
                        }
                      >
                        <span
                          className={
                            styles.programCategory
                          }
                        >
                          {
                            program.category
                          }
                        </span>


                        <span
                          className={
                            styles.programStatus
                          }
                          data-status={
                            program.status
                          }
                        >
                          {
                            statusLabels[
                              program.status
                            ]
                          }
                        </span>
                      </div>


                      <h3>
                        {
                          program.title
                        }
                      </h3>


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
                        aria-label={`${program.title} program information`}
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
                            Sessions
                          </dt>

                          <dd>
                            {
                              program.duration
                              ??
                              "Not specified"
                            }
                          </dd>
                        </div>


                        <div>
                          <dt>
                            Modules
                          </dt>

                          <dd>
                            {
                              program.modules.length
                            }
                          </dd>
                        </div>
                      </dl>


                      <div
                        className={
                          styles.learningAims
                        }
                      >
                        <h4>
                          Learning aims
                        </h4>


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


                      <div
                        className={
                          styles.programActions
                        }
                      >
                        <Link
                          href={`/training/${program.slug}`}
                          className={
                            styles.cardPrimaryAction
                          }
                        >
                          Explore program

                          <Arrow />
                        </Link>


                        <TrainingRegistrationAction
                          slug={
                            program.slug
                          }
                          className={
                            styles.registrationAction
                          }
                        />
                      </div>
                    </article>
                  )
                )
              }
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          INSIDE THE CURRICULUM + LEARNING METHOD
         ================================================================ */}

      <section
        className={
          styles.section
        }
        data-training-section="curriculum"
      >
        <Container>
          <div
            className={
              styles.frame
            }
            data-training-frame="curriculum"
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
                02 · Inside the curriculum
              </p>


              <h2>
                Preview the technical content.
              </h2>


              <p
                className={
                  styles.sectionDescription
                }
              >
                Explore selected curriculum content before opening the full
                program.
              </p>
            </header>


            {
              featuredProgram
                ? (
                    <div
                      className={
                        styles.curriculumGrid
                      }
                      data-training-ui="curriculum-previews"
                    >
                      <article
                        className={
                          styles.featuredPreview
                        }
                      >
                        <p
                          className={
                            styles.previewMeta
                          }
                        >
                          Selected modules · {
                            Math.min(
                              3,
                              featuredProgram.modules.length
                            )
                          } of {
                            featuredProgram.modules.length
                          } shown
                        </p>


                        <h3>
                          {
                            featuredProgram.title
                          }
                        </h3>


                        <ol
                          className={
                            styles.moduleList
                          }
                        >
                          {
                            featuredProgram.modules
                              .slice(
                                0,
                                3
                              )
                              .map(
                                module => (
                                  <li
                                    key={
                                      module.number
                                    }
                                  >
                                    <span>
                                      {
                                        module.number
                                      }
                                    </span>


                                    <div>
                                      <h4>
                                        {
                                          module.title
                                        }
                                      </h4>


                                      <p>
                                        {
                                          module.description
                                        }
                                      </p>
                                    </div>
                                  </li>
                                )
                              )
                          }
                        </ol>


                        <Link
                          href={`/training/${featuredProgram.slug}`}
                          className={
                            styles.previewAction
                          }
                        >
                          View complete curriculum

                          <Arrow />
                        </Link>
                      </article>


                      <div
                        className={
                          styles.supportingPreviews
                        }
                      >
                        {
                          supportingPrograms.map(
                            program => (
                              <article
                                className={
                                  styles.supportingPreview
                                }
                                key={
                                  program.slug
                                }
                              >
                                <p
                                  className={
                                    styles.previewMeta
                                  }
                                >
                                  {
                                    program.category
                                  }
                                </p>


                                <h3>
                                  {
                                    program.title
                                  }
                                </h3>


                                <p>
                                  {
                                    program.modules[0]
                                      ?.description
                                    ??
                                    program.summary
                                  }
                                </p>


                                <Link
                                  href={`/training/${program.slug}`}
                                  className={
                                    styles.previewAction
                                  }
                                >
                                  View curriculum

                                  <Arrow />
                                </Link>
                              </article>
                            )
                          )
                        }
                      </div>
                    </div>
                  )
                : null
            }


            <div
              className={
                styles.method
              }
              data-training-ui="learning-method"
            >
              <header
                className={
                  styles.methodHeading
                }
              >
                <h3>
                  How learning progresses.
                </h3>


                <p>
                  Work through focused technical modules, investigate security
                  problems and connect what you learn to the wider system.
                </p>
              </header>


              <ol
                className={
                  styles.methodGrid
                }
              >
                {
                  learningFlow.map(
                    stage => (
                      <li
                        key={
                          stage.number
                        }
                      >
                        <span
                          className={
                            styles.methodNumber
                          }
                          aria-hidden="true"
                        >
                          {
                            stage.number
                          }
                        </span>


                        <h4>
                          {
                            stage.title
                          }
                        </h4>


                        <p>
                          {
                            stage.description
                          }
                        </p>
                      </li>
                    )
                  )
                }
              </ol>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          FAQ
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.faqSection}`
        }
        data-training-section="faq"
      >
        <Container>
          <div
            className={
              `${styles.frame} ${styles.faqLayout}`
            }
            data-training-frame="faq"
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
                03 · Before choosing
              </p>


              <h2>
                Before choosing a program.
              </h2>


              <p
                className={
                  styles.sectionDescription
                }
              >
                Guidance on program choice and the public learning experience.
              </p>
            </header>


            <div
              className={
                styles.faqList
              }
            >
              {
                faqs.map(
                  (
                    faq,
                    index
                  ) => (
                    <details
                      className={
                        styles.faqItem
                      }
                      data-training-faq
                      key={
                        faq.question
                      }
                    >
                      <summary>
                        <span
                          className={
                            styles.faqTrigger
                          }
                        >
                          <span
                            className={
                              styles.faqNumber
                            }
                            aria-hidden="true"
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


                          <span
                            className={
                              styles.faqQuestion
                            }
                          >
                            {
                              faq.question
                            }
                          </span>


                          <span
                            className={
                              styles.faqIndicator
                            }
                            aria-hidden="true"
                          />
                        </span>
                      </summary>


                      <div
                        className={
                          styles.faqAnswer
                        }
                      >
                        <p>
                          {
                            faq.answer
                          }
                        </p>


                        {
                          faq.question
                          ===
                          "Is this the same as training for organizations?"
                            ? (
                                <Link
                                  href="/services/security-training"
                                  className={
                                    styles.answerLink
                                  }
                                >
                                  Explore Security Training Service

                                  <Arrow />
                                </Link>
                              )
                            : null
                        }
                      </div>
                    </details>
                  )
                )
              }
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          CLOSING GUIDANCE
         ================================================================ */}

      <section
        className={
          styles.cta
        }
        data-training-section="cta"
      >
        <Container>
          <div
            className={
              `${styles.frame} ${styles.ctaLayout}`
            }
            data-training-frame="cta"
          >
            <div>
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                Training Hub
              </p>


              <h2>
                Build your next security capability.
              </h2>
            </div>


            <div
              className={
                styles.ctaBody
              }
            >
              <p>
                Explore a program that matches your goals and current level,
                or contact No Breach with a question.
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
                  Explore programs

                  <span
                    aria-hidden="true"
                  >
                    ↑
                  </span>
                </a>


                <Link
                  href="/contact"
                  className={
                    styles.textAction
                  }
                >
                  Ask about a program

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
