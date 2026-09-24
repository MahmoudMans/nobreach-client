import type {
  Metadata
} from "next";

import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import {
  trainingPrograms
} from "@/content/training";

import styles from "./training.module.css";


export const metadata:
  Metadata = {

  title:
    "Training | No Breach",

  description:
    "Practical No Breach cybersecurity training across offensive security, web exploitation and AI security."
};


const statusLabels = {
  available:
    "Available",

  upcoming:
    "Upcoming",

  archived:
    "Archived"
} as const;


const method = [
  {
    index:
      "01",

    title:
      "Understand",

    description:
      "Build a clear model of the system, security problem and relevant trust boundaries."
  },
  {
    index:
      "02",

    title:
      "Practice",

    description:
      "Work through focused technical modules instead of learning only through explanation."
  },
  {
    index:
      "03",

    title:
      "Investigate",

    description:
      "Reason through practical security problems and connect individual weaknesses to the wider system."
  },
  {
    index:
      "04",

    title:
      "Apply",

    description:
      "Translate the work into explicit technical outcomes that can be reused beyond the program."
  }
] as const;


const faqItems = [
  {
    question:
      "How do I choose the right program?",

    answer:
      "Each program publishes its category, level, format, duration and current status. Open the program detail to compare objectives, curriculum, prerequisites and expected outcomes."
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
      "No. This Academy page focuses on public learner programs. Organization and team training is presented separately through the Security Training service."
  }
] as const;


const primaryProgram =
  trainingPrograms.find(
    (
      program
    ) =>
      program.status
      ===
      "available"
  )
  ??
  trainingPrograms[0];


const featuredPractice =
  trainingPrograms[0];


const supportingPractice =
  trainingPrograms.slice(
    1,
    3
  );


export default function TrainingPage() {

  return (
    <div
      className={
        styles.page
      }
      data-training-academy="continuous-v1"
    >
      <section
        className={
          styles.pageIntro
        }
        data-training-section="intro"
      >
        <div
          className={
            styles.introDecoration
          }
          aria-hidden="true"
        />


        <Container size="wide">
          <div
            className={
              styles.introGrid
            }
          >
            <div
              className={
                styles.introCopy
              }
            >
              <p
                className={
                  styles.eyebrow
                }
              >
                NOBREACH / ACADEMY
              </p>


              <h1>
                Learn cybersecurity
                by doing cybersecurity.
              </h1>


              <p
                className={
                  styles.introLead
                }
              >
                Practical learning paths built around real security
                concepts, focused technical modules and explicit
                outcomes.
              </p>


              <div
                className={
                  styles.introActions
                }
              >
                <a
                  className={
                    styles.primaryButton
                  }
                  href="#programs"
                >
                  Explore programs

                  <span
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </a>


                <Link
                  className={
                    styles.secondaryButton
                  }
                  href="/contact"
                >
                  Ask about training

                  <span
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </Link>
              </div>


              <p
                className={
                  styles.introMeta
                }
              >
                {
                  trainingPrograms.length
                } public learning paths / hands-on security
              </p>
            </div>


            <aside
              className={
                styles.learningSignal
              }
              aria-label="Academy learning model"
            >
              <div
                className={
                  styles.signalHeader
                }
              >
                <span>
                  NB / ACADEMY
                </span>

                <span>
                  PRACTICE MODE
                </span>
              </div>


              <div
                className={
                  styles.signalCore
                }
              >
                <span>
                  LEARN
                </span>

                <strong>
                  DO
                </strong>

                <span>
                  APPLY
                </span>
              </div>


              <div
                className={
                  styles.signalFlow
                }
              >
                <span>
                  SYSTEM
                </span>

                <i />

                <span>
                  PROBLEM
                </span>

                <i />

                <span>
                  PRACTICE
                </span>

                <i />

                <span>
                  OUTCOME
                </span>
              </div>
            </aside>
          </div>
        </Container>
      </section>


      <section
        className={
          styles.paths
        }
        data-training-section="paths"
      >
        <Container size="wide">
          <header
            className={
              styles.sectionHeader
            }
          >
            <div>
              <p
                className={
                  styles.eyebrow
                }
              >
                01 / LEARNING PATHS
              </p>

              <h2>
                Choose the security
                capability you want to build.
              </h2>
            </div>


            <p>
              Each path is connected to a real published NoBreach
              program rather than a separate navigation system.
            </p>
          </header>


          <div
            className={
              styles.pathRows
            }
          >
            {
              trainingPrograms.map(
                (
                  program,
                  index
                ) => (
                  <Link
                    className={
                      styles.pathRow
                    }
                    href={
                      `/training/${program.slug}`
                    }
                    key={
                      program.slug
                    }
                  >
                    <span
                      className={
                        styles.pathIndex
                      }
                    >
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


                    <span
                      className={
                        styles.pathCategory
                      }
                    >
                      {
                        program.category
                      }
                    </span>


                    <div>
                      <strong>
                        {
                          program.title
                        }
                      </strong>

                      <span>
                        {
                          program.level
                        }
                      </span>
                    </div>


                    <span
                      className={
                        styles.pathArrow
                      }
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                )
              )
            }
          </div>
        </Container>
      </section>


      <section
        id="programs"
        className={
          styles.programs
        }
        data-training-section="courses"
      >
        <Container size="wide">
          <header
            className={
              styles.courseHeader
            }
          >
            <div>
              <p
                className={
                  styles.eyebrow
                }
              >
                02 / FEATURED COURSES
              </p>

              <h2>
                Current cybersecurity
                learning range.
              </h2>
            </div>


            <p>
              Three public programs. One consistent course system.
              Different domains, difficulty and technical focus.
            </p>
          </header>


          <div
            className={
              styles.programGrid
            }
          >
            {
              trainingPrograms.map(
                (
                  program,
                  index
                ) => (
                  <article
                    className={
                      styles.programCard
                    }
                    data-training-program
                    key={
                      program.slug
                    }
                  >
                    <div
                      className={
                        styles.programTop
                      }
                    >
                      <span
                        className={
                          styles.programNumber
                        }
                      >
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


                      <span
                        className={
                          styles.status
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


                    <p
                      className={
                        styles.programCategory
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
                        styles.programMeta
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
                        ?
                          (
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
                        :
                          null
                      }
                    </dl>


                    <div
                      className={
                        styles.programFooter
                      }
                    >
                      <span>
                        {
                          program.modules.length
                        } modules
                      </span>


                      <Link
                        href={
                          `/training/${program.slug}`
                        }
                      >
                        Explore program

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
        </Container>
      </section>


      <section
        className={
          styles.practice
        }
        data-training-section="practice"
      >
        <Container size="wide">
          <header
            className={
              styles.sectionHeader
            }
          >
            <div>
              <p
                className={
                  styles.eyebrow
                }
              >
                03 / HANDS-ON PRACTICE
              </p>

              <h2>
                Practice sits inside
                the learning path.
              </h2>
            </div>


            <p>
              Program modules provide the concrete technical sequence.
              The visual hierarchy here reflects the published
              curriculum rather than inventing separate labs.
            </p>
          </header>


          <div
            className={
              styles.practiceLayout
            }
          >
            <article
              className={
                styles.featuredPractice
              }
            >
              <div
                className={
                  styles.practiceTopline
                }
              >
                <span>
                  FEATURED PRACTICE
                </span>

                <span>
                  {
                    featuredPractice.category
                  }
                </span>
              </div>


              <h3>
                {
                  featuredPractice.title
                }
              </h3>


              <p>
                {
                  featuredPractice.summary
                }
              </p>


              <ol
                className={
                  styles.moduleList
                }
              >
                {
                  featuredPractice.modules
                    .slice(
                      0,
                      3
                    )
                    .map(
                      (
                        module
                      ) => (
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
                            <strong>
                              {
                                module.title
                              }
                            </strong>

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
                className={
                  styles.practiceAction
                }
                href={
                  `/training/${featuredPractice.slug}`
                }
              >
                View complete curriculum

                <span
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </article>


            <div
              className={
                styles.supportingPractice
              }
            >
              {
                supportingPractice.map(
                  (
                    program
                  ) => (
                    <article
                      key={
                        program.slug
                      }
                    >
                      <div
                        className={
                          styles.supportingHeader
                        }
                      >
                        <span>
                          {
                            program.category
                          }
                        </span>

                        <span>
                          {
                            program.modules.length
                          } modules
                        </span>
                      </div>


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
                        href={
                          `/training/${program.slug}`
                        }
                      >
                        Explore practice

                        <span
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    </article>
                  )
                )
              }
            </div>
          </div>
        </Container>
      </section>


      <section
        className={
          styles.method
        }
        data-training-section="method"
      >
        <Container size="wide">
          <div
            className={
              styles.methodIntro
            }
          >
            <p
              className={
                styles.eyebrow
              }
            >
              04 / LEARNING METHOD
            </p>

            <h2>
              Learn through a connected
              technical sequence.
            </h2>

            <p>
              Meaning comes first. Practice follows. Each stage should
              help the learner understand what they are doing and why.
            </p>
          </div>


          <ol
            className={
              styles.methodTrack
            }
          >
            {
              method.map(
                (
                  step
                ) => (
                  <li
                    key={
                      step.index
                    }
                  >
                    <span>
                      {
                        step.index
                      }
                    </span>

                    <strong>
                      {
                        step.title
                      }
                    </strong>

                    <p>
                      {
                        step.description
                      }
                    </p>
                  </li>
                )
              )
            }
          </ol>
        </Container>
      </section>


      <section
        className={
          styles.outcomes
        }
        data-training-section="outcomes"
      >
        <Container size="wide">
          <header
            className={
              styles.sectionHeader
            }
          >
            <div>
              <p
                className={
                  styles.eyebrow
                }
              >
                05 / STUDENT OUTCOMES
              </p>

              <h2>
                Know what the program
                is designed to build.
              </h2>
            </div>


            <p>
              Outcomes shown below come directly from the canonical
              course data.
            </p>
          </header>


          <div
            className={
              styles.outcomeColumns
            }
          >
            {
              trainingPrograms.map(
                (
                  program,
                  index
                ) => (
                  <article
                    key={
                      program.slug
                    }
                  >
                    <span
                      className={
                        styles.outcomeNumber
                      }
                    >
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


                    <p
                      className={
                        styles.outcomeCategory
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


                    <ul>
                      {
                        program.outcomes
                          .slice(
                            0,
                            3
                          )
                          .map(
                            (
                              outcome
                            ) => (
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


                    <Link
                      href={
                        `/training/${program.slug}`
                      }
                    >
                      Review outcomes

                      <span
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </article>
                )
              )
            }
          </div>
        </Container>
      </section>


      <section
        className={
          styles.faq
        }
        data-training-section="faq"
      >
        <Container size="wide">
          <div
            className={
              styles.faqLayout
            }
          >
            <header
              className={
                styles.faqIntro
              }
            >
              <p
                className={
                  styles.eyebrow
                }
              >
                06 / FAQ
              </p>

              <h2>
                Before choosing
                a program.
              </h2>

              <p>
                A short orientation to the public Academy experience.
              </p>
            </header>


            <div
              className={
                styles.faqList
              }
            >
              {
                faqItems.map(
                  (
                    item
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
                            item.question
                          }
                        </span>

                        <span
                          aria-hidden="true"
                        >
                          +
                        </span>
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
        </Container>
      </section>


      <section
        className={
          styles.cta
        }
        data-training-section="cta"
      >
        <Container size="wide">
          <div
            className={
              styles.ctaInner
            }
          >
            <div
              className={
                styles.ctaCopy
              }
            >
              <p
                className={
                  styles.eyebrow
                }
              >
                NOBREACH ACADEMY
              </p>

              <h2>
                Build your next
                security capability.
              </h2>

              <p>
                Start with a published program or talk to NoBreach
                about the learning path that fits your current level.
              </p>
            </div>


            <div
              className={
                styles.ctaActions
              }
            >
              <Link
                className={
                  styles.primaryButton
                }
                href={
                  `/training/${primaryProgram.slug}`
                }
              >
                Explore available program

                <span
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>


              <Link
                className={
                  styles.secondaryButton
                }
                href="/contact"
              >
                Contact NoBreach

                <span
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
