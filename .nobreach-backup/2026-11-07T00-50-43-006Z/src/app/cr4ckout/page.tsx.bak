import type {
  Metadata
} from "next";

import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import {
  getEvent
} from "@/content/events";

import styles from "./cr4ckout.module.css";


export const metadata:
  Metadata = {

  title:
    "CR4CKOUT | No Breach",

  description:
    "CR4CKOUT is the No Breach story-driven cybersecurity challenge built around technical investigation, creative thinking and hands-on security problems."
};


const eventProfile = [
  {
    label:
      "Format",

    value:
      "Story-driven challenge"
  },
  {
    label:
      "Setting",

    value:
      "Universities and tech events"
  },
  {
    label:
      "Origin",

    value:
      "Tunisia"
  }
] as const;


const experienceFlow = [
  {
    index:
      "01",

    title:
      "Hack",

    description:
      "Enter the challenge and investigate the environment."
  },
  {
    index:
      "02",

    title:
      "Learn",

    description:
      "Adapt, research and build understanding as the story evolves."
  },
  {
    index:
      "03",

    title:
      "Break",

    description:
      "Solve technical obstacles through practical security thinking and reasoning."
  },
  {
    index:
      "04",

    title:
      "Build",

    description:
      "Turn what you discover into stronger technical intuition."
  }
] as const;


const challengeAreas = [
  {
    index:
      "01",

    title:
      "Cryptography",

    description:
      "Technical challenges built around reasoning, patterns and cryptographic problem-solving."
  },
  {
    index:
      "02",

    title:
      "Steganography",

    description:
      "Hidden information, visual clues and unconventional paths that reward careful observation."
  },
  {
    index:
      "03",

    title:
      "System access challenges",

    description:
      "Hands-on security scenarios focused on investigation, technical thinking and controlled system access."
  }
] as const;


const featuredEvent =
  (() => {

    const event =
      getEvent(
        "cr4ckout-2-0"
      );


    if (
      !event
    ) {

      throw new Error(
        "CR4CKOUT 2.0 event data is missing."
      );

    }


    return event;

  })();


const eventStatusLabels = {
  upcoming:
    "Upcoming event",

  ongoing:
    "Ongoing event",

  past:
    "Past event"
} as const;


function Arrow() {

  return (
    <span
      aria-hidden="true"
    >
      →
    </span>
  );

}


function SectionHeading({
  eyebrow,
  title,
  description
}: {
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


export default function Cr4ckoutPage() {

  return (
    <div
      className={
        styles.page
      }
      data-cr4ckout-design="continuous-system"
      data-cr4ckout-audit="v11"
      data-cr4ckout-finish="v12"
    >
      {/* ================================================================
          INTRODUCTION
         ================================================================ */}

      <section
        className={
          styles.hero
        }
        data-cr4ckout-section="hero"
      >
        <Container>
          <div
            className={
              styles.frame
            }
            data-cr4ckout-frame="hero"
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
                    styles.heroEyebrow
                  }
                >
                  No Breach / Signature challenge
                </p>


                <h1>
                  CR4CKOUT
                </h1>


                <p
                  className={
                    styles.heroHeadline
                  }
                >
                  A story-driven hacking challenge.
                </p>


                <p
                  className={
                    styles.heroLead
                  }
                >
                  A game-like hackathon that connects technical skill with
                  creative thinking. Investigate technical problems, follow
                  story cues and work through practical security challenges.
                </p>


                <div
                  className={
                    styles.heroActions
                  }
                >
                  <a
                    href="#experience"
                    className={
                      styles.primaryAction
                    }
                  >
                    Explore the challenge

                    <span
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  </a>


                  <a
                    href="#host"
                    className={
                      styles.secondaryAction
                    }
                  >
                    Host CR4CKOUT

                    <Arrow />
                  </a>
                </div>


                <a
                  href="#events"
                  className={
                    styles.eventShortcut
                  }
                >
                  View event information

                  <span
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </a>
              </div>


              <figure
                className={
                  styles.themeFigure
                }
                data-cr4ckout-ui="theme-illustration"
                aria-labelledby="challenge-theme-title"
              >
                <figcaption
                  id="challenge-theme-title"
                  className={
                    styles.themeCaption
                  }
                >
                  Challenge themes
                </figcaption>


                <div
                  className={
                    styles.themeMap
                  }
                  aria-label="Illustration of CR4CKOUT themes: Cryptography, Steganography and System access"
                >
                  <span
                    className={
                      `${styles.themeLabel} ${styles.themeCryptography}`
                    }
                  >
                    Cryptography
                  </span>


                  <span
                    className={
                      `${styles.themeLabel} ${styles.themeSteganography}`
                    }
                  >
                    Steganography
                  </span>


                  <span
                    className={
                      styles.themeCore
                    }
                    aria-hidden="true"
                  >
                    CR4
                  </span>


                  <span
                    className={
                      `${styles.themeLabel} ${styles.themeAccess}`
                    }
                  >
                    System access
                  </span>
                </div>


              </figure>
            </div>


            <dl
              className={
                styles.heroFacts
              }
              aria-label="CR4CKOUT overview"
            >
              {
                eventProfile.map(
                  item => (
                    <div
                      key={
                        item.label
                      }
                    >
                      <dt>
                        {
                          item.label
                        }
                      </dt>

                      <dd>
                        {
                          item.value
                        }
                      </dd>
                    </div>
                  )
                )
              }
            </dl>
          </div>
        </Container>
      </section>


      {/* ================================================================
          THE EXPERIENCE
         ================================================================ */}

      <section
        id="experience"
        className={
          styles.section
        }
        data-cr4ckout-section="experience"
      >
        <Container>
          <div
            className={
              styles.frame
            }
            data-cr4ckout-frame="experience"
          >
            <SectionHeading
              eyebrow="01 / The experience"
              title="Hack. Learn. Break. Build."
              description="CR4CKOUT connects technical problems and story cues into one experience rather than a conventional conference session. Participants investigate, research and solve practical challenges, drawing on both technical reasoning and creative thinking."
            />


            <ol
              className={
                styles.experienceGrid
              }
              data-cr4ckout-ui="experience-framework"
            >
              {
                experienceFlow.map(
                  item => (
                    <li
                      key={
                        item.index
                      }
                      data-cr4ckout-experience-step
                    >
                      <span
                        className={
                          styles.stepIndex
                        }
                        aria-hidden="true"
                      >
                        {
                          item.index
                        }
                      </span>


                      <h3>
                        {
                          item.title
                        }
                      </h3>


                      <p>
                        {
                          item.description
                        }
                      </p>
                    </li>
                  )
                )
              }
            </ol>
          </div>
        </Container>
      </section>


      {/* ================================================================
          CHALLENGE AREAS
         ================================================================ */}

      <section
        id="challenge-areas"
        className={
          `${styles.section} ${styles.challengeSection}`
        }
        data-cr4ckout-section="challenges"
      >
        <Container>
          <div
            className={
              styles.frame
            }
            data-cr4ckout-frame="challenges"
          >
            <SectionHeading
              eyebrow="02 / Challenge areas"
              title="Explore the technical challenges."
              description="Cryptography, steganography and controlled system access bring different kinds of investigation into the experience."
            />


            <div
              className={
                styles.challengeRows
              }
              data-cr4ckout-ui="challenge-areas"
            >
              {
                challengeAreas.map(
                  item => (
                    <article
                      className={
                        styles.challengeRow
                      }
                      data-cr4ckout-challenge
                      key={
                        item.index
                      }
                    >
                      <span
                        className={
                          styles.challengeIndex
                        }
                        aria-hidden="true"
                      >
                        {
                          item.index
                        }
                      </span>


                      <h3>
                        {
                          item.title
                        }
                      </h3>


                      <p>
                        {
                          item.description
                        }
                      </p>
                    </article>
                  )
                )
              }
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          EVENTS
         ================================================================ */}

      <section
        id="events"
        className={
          styles.section
        }
        data-cr4ckout-section="events"
      >
        <Container>
          <div
            className={
              `${styles.frame} ${styles.eventLayout}`
            }
            data-cr4ckout-frame="events"
          >
            <div
              className={
                styles.eventIntro
              }
            >
              <SectionHeading
                eyebrow="03 / Events"
                title="CR4CKOUT event information."
                description="Explore CR4CKOUT event details and the wider No Breach event programme."
              />


              <Link
                href="/events"
                className={
                  styles.textAction
                }
              >
                Browse all No Breach events

                <Arrow />
              </Link>
            </div>


            <article
              className={
                styles.eventFeature
              }
              data-cr4ckout-ui="event-feature"
            >
              <div
                className={
                  styles.eventTopline
                }
              >
                <span>
                  {
                    eventStatusLabels[
                      featuredEvent.status
                    ]
                  }
                </span>

                <span>
                  Featured event
                </span>
              </div>


              <h3>
                {
                  featuredEvent.title
                }
              </h3>


              <dl
                className={
                  styles.eventMetadata
                }
              >
                <div>
                  <dt>
                    Year
                  </dt>

                  <dd>
                    {
                      featuredEvent.year
                    }
                  </dd>
                </div>


                {
                  featuredEvent.location
                    ? (
                        <div>
                          <dt>
                            Location
                          </dt>

                          <dd>
                            {
                              featuredEvent.location
                            }
                          </dd>
                        </div>
                      )
                    : null
                }
              </dl>


              <p
                className={
                  styles.eventSummary
                }
              >
                {
                  featuredEvent.summary
                }
              </p>


              <Link
                href={`/events/${featuredEvent.slug}`}
                className={
                  styles.eventAction
                }
              >
                View event details

                <Arrow />
              </Link>
            </article>
          </div>
        </Container>
      </section>


      {/* ================================================================
          HOSTING
         ================================================================ */}

      <section
        id="host"
        className={
          styles.host
        }
        data-cr4ckout-section="host"
      >
        <Container>
          <div
            className={
              `${styles.frame} ${styles.hostLayout}`
            }
            data-cr4ckout-frame="host"
          >
            <div>
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                Host CR4CKOUT
              </p>


              <h2>
                Bring CR4CKOUT to your university or tech event.
              </h2>
            </div>


            <div
              className={
                styles.hostCopy
              }
            >
              <p>
                Tell No Breach about your event and audience to discuss
                bringing the challenge to your setting.
              </p>


              <p
                className={
                  styles.hostGuidance
                }
              >
                Share your institution or event, location, preferred timing
                and expected audience.
              </p>


              <Link
                href="/contact"
                className={
                  styles.primaryAction
                }
              >
                Discuss hosting

                <Arrow />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );

}
