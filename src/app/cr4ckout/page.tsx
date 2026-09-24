import type {
  Metadata
} from "next";

import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import styles from "./cr4ckout.module.css";


export const metadata:
  Metadata = {

  title:
    "CR4CKOUT | No Breach",

  description:
    "CR4CKOUT is the signature No Breach story-driven cybersecurity challenge combining technical skill, creative thinking and specialized security challenges."
};


const eventProfile = [
  {
    label:
      "FORMAT",

    value:
      "Story-driven challenge"
  },
  {
    label:
      "FOCUS",

    value:
      "Specialized security"
  },
  {
    label:
      "SETTING",

    value:
      "Universities + tech events"
  },
  {
    label:
      "ORIGIN",

    value:
      "Tunisia"
  }
] as const;


const challengeAreas = [
  {
    index:
      "01",

    code:
      "CRYPT",

    title:
      "Cryptography",

    description:
      "Technical challenges built around reasoning, patterns and cryptographic problem solving."
  },
  {
    index:
      "02",

    code:
      "STEGO",

    title:
      "Steganography",

    description:
      "Hidden information, visual clues and unconventional paths that reward careful observation."
  },
  {
    index:
      "03",

    code:
      "ACCESS",

    title:
      "System access challenges",

    description:
      "Hands-on security scenarios focused on investigation, technical thinking and controlled system access."
  }
] as const;


const experience = [
  {
    index:
      "01",

    label:
      "HACK",

    copy:
      "Enter the challenge and investigate the environment."
  },
  {
    index:
      "02",

    label:
      "LEARN",

    copy:
      "Adapt, research and build understanding as the story evolves."
  },
  {
    index:
      "03",

    label:
      "BREAK",

    copy:
      "Solve technical obstacles through practical security thinking."
  },
  {
    index:
      "04",

    label:
      "BUILD",

    copy:
      "Turn what you discover into stronger technical intuition."
  }
] as const;


export default function Cr4ckoutPage() {

  return (
    <div
      className={
        styles.page
      }
      data-cr4ckout-design="continuous-system"
    >
      <section
        className={
          styles.hero
        }
        data-cr4ckout-section="hero"
      >
        <div
          className={
            styles.heroDecoration
          }
          aria-hidden="true"
        />


        <Container size="wide">
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
                NOBREACH / SIGNATURE CHALLENGE
              </p>


              <h1>
                CR4CKOUT
              </h1>


              <p
                className={
                  styles.heroStatement
                }
              >
                A hacking experience
                like no other.
              </p>


              <p
                className={
                  styles.heroLead
                }
              >
                CR4CK0UT is our signature challenge — a game-like,
                story-driven hackathon that blends technical skill with
                creative thinking.
              </p>


              <div
                className={
                  styles.heroActions
                }
              >
                <a
                  className={
                    styles.primaryButton
                  }
                  href="#challenge-areas"
                >
                  Explore the challenge

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
                  Host CR4CKOUT

                  <span
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </Link>
              </div>


              <p
                className={
                  styles.heroMicro
                }
              >
                Story / skill / investigation / creative thinking
              </p>
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
                  NB / CR4
                </span>

                <span>
                  SIGNAL ACTIVE
                </span>
              </div>


              <div
                className={
                  styles.visualField
                }
              >
                <div
                  className={
                    styles.visualAxis
                  }
                />


                <div
                  className={
                    styles.visualCore
                  }
                >
                  <span>
                    EVENT
                  </span>

                  <strong>
                    CR4
                  </strong>

                  <span>
                    OUT
                  </span>
                </div>


                <div
                  className={
                    styles.visualSignalOne
                  }
                >
                  <span>
                    01
                  </span>

                  CRYPT
                </div>


                <div
                  className={
                    styles.visualSignalTwo
                  }
                >
                  <span>
                    02
                  </span>

                  STEGO
                </div>


                <div
                  className={
                    styles.visualSignalThree
                  }
                >
                  <span>
                    03
                  </span>

                  ACCESS
                </div>
              </div>


              <div
                className={
                  styles.visualFooter
                }
              >
                <span>
                  OBSERVE
                </span>

                <span>
                  THINK
                </span>

                <span>
                  BREAK
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>


      <section
        className={
          styles.profile
        }
        data-cr4ckout-section="profile"
        aria-label="CR4CKOUT event profile"
      >
        <Container size="wide">
          <dl
            className={
              styles.profileGrid
            }
          >
            {
              eventProfile.map(
                (
                  item
                ) => (
                  <div
                    className={
                      styles.profileItem
                    }
                    key={
                      item.label
                    }
                  >
                    <dt>
                      {item.label}
                    </dt>

                    <dd>
                      {item.value}
                    </dd>
                  </div>
                )
              )
            }
          </dl>
        </Container>
      </section>


      <section
        className={
          styles.story
        }
        data-cr4ckout-section="story"
      >
        <Container size="wide">
          <div
            className={
              styles.storyGrid
            }
          >
            <header
              className={
                styles.storyHeading
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
                  Creative thinking.
                </span>
              </h2>
            </header>


            <div
              className={
                styles.storyBody
              }
            >
              <p
                className={
                  styles.storyLead
                }
              >
                It’s the only event of its kind in Tunisia, focused on
                niche, high-skill areas like cryptography,
                steganography, and system access challenges — all
                wrapped in a clean, fun, high-quality experience.
              </p>


              <p>
                CR4CKOUT is designed as an experience rather than a
                conventional conference session. Participants move
                through technical problems, story cues and practical
                challenges that reward both skill and imagination.
              </p>


              <div
                className={
                  styles.storyPrinciples
                }
              >
                <div>
                  <span>
                    01
                  </span>

                  <p>
                    Technical problems require real reasoning.
                  </p>
                </div>


                <div>
                  <span>
                    02
                  </span>

                  <p>
                    Story progression keeps the challenge connected.
                  </p>
                </div>


                <div>
                  <span>
                    03
                  </span>

                  <p>
                    Creative thinking matters as much as speed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>


      <section
        id="challenge-areas"
        className={
          styles.challenges
        }
        data-cr4ckout-section="challenges"
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
                  Serious technical thinking.
                </span>
              </h2>
            </div>


            <p>
              CR4CKOUT focuses on specialized challenge areas instead
              of generic competition mechanics.
            </p>
          </header>


          <div
            className={
              styles.challengeRows
            }
          >
            {
              challengeAreas.map(
                (
                  challenge
                ) => (
                  <article
                    className={
                      styles.challengeRow
                    }
                    data-cr4ckout-challenge
                    key={
                      challenge.index
                    }
                  >
                    <span
                      className={
                        styles.challengeIndex
                      }
                    >
                      {challenge.index}
                    </span>


                    <span
                      className={
                        styles.challengeCode
                      }
                    >
                      {challenge.code}
                    </span>


                    <h3>
                      {challenge.title}
                    </h3>


                    <p>
                      {challenge.description}
                    </p>
                  </article>
                )
              )
            }
          </div>
        </Container>
      </section>


      <section
        className={
          styles.experience
        }
        data-cr4ckout-section="experience"
      >
        <Container size="wide">
          <header
            className={
              styles.experienceHeader
            }
          >
            <p
              className={
                styles.eyebrow
              }
            >
              03 / EXPERIENCE FLOW
            </p>


            <h2>
              Hack.
              <span>
                Learn.
              </span>
              Break.
              <span>
                Build.
              </span>
            </h2>


            <p>
              The challenge moves as one connected experience rather
              than a collection of unrelated tasks.
            </p>
          </header>


          <ol
            className={
              styles.experienceSteps
            }
          >
            {
              experience.map(
                (
                  step
                ) => (
                  <li
                    key={
                      step.index
                    }
                  >
                    <span
                      className={
                        styles.stepIndex
                      }
                    >
                      {step.index}
                    </span>


                    <strong>
                      {step.label}
                    </strong>


                    <p>
                      {step.copy}
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
          styles.archive
        }
        data-cr4ckout-section="archive"
      >
        <Container size="wide">
          <div
            className={
              styles.archiveGrid
            }
          >
            <header
              className={
                styles.archiveIntro
              }
            >
              <p
                className={
                  styles.eyebrow
                }
              >
                04 / EVENT ARCHIVE
              </p>


              <h2>
                Follow the published
                CR4CKOUT activity.
              </h2>


              <p>
                Explore the event history and continue through the
                wider NoBreach event programme.
              </p>
            </header>


            <div
              className={
                styles.archiveLinks
              }
            >
              <Link
                className={
                  styles.archivePrimary
                }
                href="/events/cr4ckout-2-0"
              >
                <span
                  className={
                    styles.archiveMeta
                  }
                >
                  FEATURED EVENT
                </span>


                <strong>
                  CR4CKOUT 2.0
                </strong>


                <span
                  className={
                    styles.archiveArrow
                  }
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>


              <Link
                className={
                  styles.archiveSecondary
                }
                href="/events"
              >
                <span>
                  Browse all NoBreach events
                </span>

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


      <section
        className={
          styles.host
        }
        data-cr4ckout-section="host"
      >
        <Container size="wide">
          <div
            className={
              styles.hostInner
            }
          >
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
                Want to host CR4CK0UT at your university or tech event?
              </h2>


              <p>
                Contact us — and let’s bring the experience to your
                crowd.
              </p>
            </div>


            <div
              className={
                styles.hostActions
              }
            >
              <Link
                className={
                  styles.primaryButton
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


              <Link
                className={
                  styles.secondaryButton
                }
                href="/events"
              >
                Explore events

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
