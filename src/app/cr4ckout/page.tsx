import type {
  Metadata,
} from "next";

import Link from "next/link";

import {
  Container,
} from "@/components/layout/container";

import styles from "./cr4ckout.module.css";


export const metadata:
  Metadata = {

  title:
    "CR4CKOUT | No Breach",

  description:
    "CR4CKOUT is No Breach's story-driven cybersecurity challenge experience built around technical skill, creative thinking and high-skill security challenges.",
};


const challengeAreas = [
  {
    index:
      "01",

    code:
      "CRYPT",

    title:
      "Cryptography",

    description:
      "Challenges built around reasoning, patterns, encoded information and cryptographic thinking.",
  },
  {
    index:
      "02",

    code:
      "STEGO",

    title:
      "Steganography",

    description:
      "Hidden information and layered clues that reward observation, investigation and creative thinking.",
  },
  {
    index:
      "03",

    code:
      "ACCESS",

    title:
      "System access challenges",

    description:
      "Technical scenarios designed around system access, problem solving and hands-on security reasoning.",
  },
] as const;


const experienceSteps = [
  {
    index:
      "01",

    title:
      "Enter the story",

    description:
      "The challenge begins as an experience, not a list of disconnected technical tasks.",
  },
  {
    index:
      "02",

    title:
      "Read the signals",

    description:
      "Participants investigate clues, context and technical details before deciding what to try next.",
  },
  {
    index:
      "03",

    title:
      "Break the problem",

    description:
      "Progress depends on technical skill, experimentation and creative thinking.",
  },
  {
    index:
      "04",

    title:
      "Build the solution",

    description:
      "The experience rewards understanding, persistence and a clear path from problem to answer.",
  },
] as const;


export default function Cr4ckoutPage() {

  return (
    <div
      className={
        styles.page
      }
      data-cr4ckout-design="authority-v10"
    >

      <section
        className={
          styles.hero
        }
        data-cr4ckout-section="hero"
      >
        <Container size="wide">

          <div
            className={
              styles.heroTop
            }
          >

            <p
              className={
                styles.eyebrow
              }
            >
              EVENTS / CONFERENCE / NO BREACH
            </p>


            <span
              className={
                styles.heroCode
              }
              aria-hidden="true"
            >
              NB / EVENT / 01
            </span>

          </div>


          <div
            className={
              styles.heroLayout
            }
          >

            <div
              className={
                styles.heroCopy
              }
            >

              <h1>
                CR4CKOUT
              </h1>


              <p
                className={
                  styles.heroStatement
                }
              >
                A hacking experience like no other.
              </p>


              <p
                className={
                  styles.heroLead
                }
              >
                CR4CKOUT is our signature challenge — a game-like,
                story-driven hackathon that blends technical skill
                with creative thinking.
              </p>


              <div
                className={
                  styles.heroActions
                }
              >

                <a
                  className={
                    styles.primaryAction
                  }
                  href="#experience"
                >
                  Explore the experience

                  <span
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </a>


                <Link
                  className={
                    styles.secondaryAction
                  }
                  href="/events"
                >
                  Event archive

                  <span
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </Link>

              </div>

            </div>


            <div
              className={
                styles.heroVisual
              }
              aria-hidden="true"
            >

              <div
                className={
                  styles.visualHeader
                }
              >
                <span>
                  CR4CKOUT
                </span>

                <span>
                  CHALLENGE SYSTEM
                </span>
              </div>


              <div
                className={
                  styles.visualSequence
                }
              >

                <span>
                  HACK
                </span>

                <i />

                <span>
                  LEARN
                </span>

                <i />

                <span>
                  BREAK
                </span>

                <i />

                <span>
                  BUILD
                </span>

              </div>


              <div
                className={
                  styles.visualField
                }
              >

                <span
                  className={
                    styles.visualNodeOne
                  }
                >
                  CRYPT
                </span>

                <span
                  className={
                    styles.visualNodeTwo
                  }
                >
                  STEGO
                </span>

                <span
                  className={
                    styles.visualNodeThree
                  }
                >
                  ACCESS
                </span>


                <i
                  className={
                    styles.visualLineOne
                  }
                />

                <i
                  className={
                    styles.visualLineTwo
                  }
                />

                <strong>
                  THINK
                  <small>
                    DIFFERENTLY
                  </small>
                </strong>

              </div>

            </div>

          </div>

        </Container>
      </section>


      <section
        id="experience"
        className={
          styles.identity
        }
        data-cr4ckout-section="experience"
      >
        <Container size="wide">

          <div
            className={
              styles.sectionRule
            }
          />


          <div
            className={
              styles.identityLayout
            }
          >

            <div
              className={
                styles.identityHeading
              }
            >

              <p
                className={
                  styles.eyebrow
                }
              >
                01 / THE EXPERIENCE
              </p>


              <h2>
                Technical depth.
                <span>
                  Built like an experience.
                </span>
              </h2>

            </div>


            <div
              className={
                styles.identityCopy
              }
            >

              <p
                className={
                  styles.largeCopy
                }
              >
                It&apos;s the only event of its kind in Tunisia,
                focused on niche, high-skill areas like cryptography,
                steganography, and system access challenges — all
                wrapped in a clean, fun, high-quality experience.
              </p>


              <div
                className={
                  styles.experiencePrinciples
                }
              >

                <div>
                  <span>
                    01
                  </span>

                  <strong>
                    Game-like
                  </strong>
                </div>


                <div>
                  <span>
                    02
                  </span>

                  <strong>
                    Story-driven
                  </strong>
                </div>


                <div>
                  <span>
                    03
                  </span>

                  <strong>
                    High-skill
                  </strong>
                </div>


                <div>
                  <span>
                    04
                  </span>

                  <strong>
                    Clean experience
                  </strong>
                </div>

              </div>

            </div>

          </div>

        </Container>
      </section>


      <section
        className={
          styles.disciplines
        }
        data-cr4ckout-section="disciplines"
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
                02 / CHALLENGE AREAS
              </p>


              <h2>
                Niche problems.
                <span>
                  Serious thinking.
                </span>
              </h2>

            </div>


            <p>
              The experience concentrates on technical areas that
              reward curiosity, precision and unconventional problem
              solving.
            </p>

          </header>


          <div
            className={
              styles.disciplineRows
            }
          >
            {
              challengeAreas.map(
                (
                  area
                ) => (
                  <article
                    className={
                      styles.disciplineRow
                    }
                    data-cr4ckout-discipline
                    key={
                      area.index
                    }
                  >

                    <span
                      className={
                        styles.disciplineIndex
                      }
                    >
                      {
                        area.index
                      }
                    </span>


                    <span
                      className={
                        styles.disciplineCode
                      }
                    >
                      {
                        area.code
                      }
                    </span>


                    <h3>
                      {
                        area.title
                      }
                    </h3>


                    <p>
                      {
                        area.description
                      }
                    </p>


                    <span
                      className={
                        styles.disciplineSignal
                      }
                      aria-hidden="true"
                    >
                      ●
                    </span>

                  </article>
                )
              )
            }
          </div>

        </Container>
      </section>


      <section
        className={
          styles.flow
        }
        data-cr4ckout-section="flow"
      >
        <Container size="wide">

          <div
            className={
              styles.flowHeader
            }
          >

            <p
              className={
                styles.eyebrow
              }
            >
              03 / HOW IT FEELS
            </p>


            <h2>
              HACK.
              <span>
                LEARN.
              </span>
              BREAK.
              <span>
                BUILD.
              </span>
            </h2>

          </div>


          <div
            className={
              styles.flowRail
            }
          >
            {
              experienceSteps.map(
                (
                  step
                ) => (
                  <div
                    className={
                      styles.flowStep
                    }
                    key={
                      step.index
                    }
                  >

                    <div
                      className={
                        styles.flowStepIndex
                      }
                    >
                      <span>
                        {
                          step.index
                        }
                      </span>

                      <i
                        aria-hidden="true"
                      />
                    </div>


                    <div
                      className={
                        styles.flowStepCopy
                      }
                    >

                      <h3>
                        {
                          step.title
                        }
                      </h3>


                      <p>
                        {
                          step.description
                        }
                      </p>

                    </div>

                  </div>
                )
              )
            }
          </div>

        </Container>
      </section>


      <section
        className={
          styles.host
        }
        data-cr4ckout-section="host"
      >
        <Container size="wide">

          <div
            className={
              styles.hostLayout
            }
          >

            <div
              className={
                styles.hostIndex
              }
              aria-hidden="true"
            >
              04
            </div>


            <div
              className={
                styles.hostCopy
              }
            >

              <p
                className={
                  styles.eyebrow
                }
              >
                HOST CR4CKOUT
              </p>


              <h2>
                Want to host CR4CKOUT at your university or tech event?
              </h2>


              <p>
                Contact us — and let&apos;s bring the experience
                to your crowd.
              </p>

            </div>


            <div
              className={
                styles.hostActions
              }
            >

              <Link
                className={
                  styles.hostPrimary
                }
                href="/contact"
              >
                Contact us

                <span
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>


              <Link
                className={
                  styles.hostSecondary
                }
                href="/events"
              >
                Explore previous events

                <span
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

            </div>

          </div>

        </Container>
      </section>

    </div>
  );
}
