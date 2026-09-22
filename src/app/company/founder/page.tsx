import Image from "next/image";

import type {
  Metadata
} from "next";

import Link from "next/link";

import styles from "./founder.module.css";


export const metadata:
  Metadata = {

  title:
    "Nouha Ben Brahim | Founder of No Breach",

  description:
    "Nouha Ben Brahim is the founder of No Breach, with a professional focus on offensive security, cybersecurity training and community development."
};


const journey = [
  {
    index:
      "01",

    code:
      "DEV",

    title:
      "Development",

    description:
      "Technical foundations and understanding how systems are built."
  },

  {
    index:
      "02",

    code:
      "SEC",

    title:
      "Cybersecurity",

    description:
      "Moving from building systems toward understanding how they fail."
  },

  {
    index:
      "03",

    code:
      "RES",

    title:
      "Bug bounty / security research",

    description:
      "Developing practical vulnerability research and security-testing thinking."
  },

  {
    index:
      "04",

    code:
      "OFF",

    title:
      "Offensive security",

    description:
      "Applying attacker-oriented reasoning to security work and technical education."
  },

  {
    index:
      "05",

    code:
      "NB",

    title:
      "No Breach",

    description:
      "Bringing security services, education and community into one ecosystem."
  }
];


const expertise = [
  {
    index:
      "01",

    code:
      "WEB",

    title:
      "Web Security",

    description:
      "Application behavior, attack surfaces and security testing."
  },

  {
    index:
      "02",

    code:
      "API",

    title:
      "API Security",

    description:
      "Authentication, authorization and object-level access."
  },

  {
    index:
      "03",

    code:
      "OFF",

    title:
      "Offensive Security",

    description:
      "Attacker-oriented analysis and validation."
  },

  {
    index:
      "04",

    code:
      "EDU",

    title:
      "Security Training",

    description:
      "Hands-on technical learning and mentorship."
  }
];


const focus = [
  "Offensive Security",
  "Security Research",
  "Training",
  "Mentorship",
  "Community"
];


const founderStructuredData = {
  "@context":
    "https://schema.org",

  "@type":
    "Person",

  name:
    "Nouha Ben Brahim",

  jobTitle:
    "Founder of No Breach",

  description:
    "Cybersecurity professional focused on offensive security, practical training and community development.",

  worksFor: {
    "@type":
      "Organization",

    name:
      "No Breach"
  },

  knowsAbout: [
    "Offensive Security",
    "Security Research",
    "Cybersecurity Training",
    "Mentorship"
  ]
};


function Arrow() {

  return (
    <span
      className={
        styles.founderArrow
      }
      aria-hidden="true"
    >
      ↗
    </span>
  );
}


function SectionLabel({
  index,
  label
}: {
  index:
    string;

  label:
    string;
}) {

  return (
    <div
      className={
        styles.founderSectionLabel
      }
    >
      <span>
        {
          index
        }
      </span>

      <i>
        /
      </i>

      <strong>
        {
          label
        }
      </strong>
    </div>
  );
}


export default function FounderPage() {

  return (
    <div
      className={
        styles.founderPage
      }
      data-founder-page="v2"
    >
      <script
        type="application/ld+json"
      >
        {
          JSON.stringify(
            founderStructuredData
          )
        }
      </script>


      <section
        className={
          styles.founderHero
        }
        data-founder-section="hero"
      >
        <div
          className={
            styles.founderHeroGlow
          }
          aria-hidden="true"
        />

        <div
          className={
            styles.founderHeroInner
          }
        >
          <div
            className={
              styles.founderHeroCopy
            }
            data-founder-ui="hero-copy"
          >
            <div
              className={
                styles.founderKicker
              }
            >
              <span />

              FOUNDER / NO BREACH
            </div>

            <h1>
              Nouha
              <span>
                Ben Brahim
              </span>
            </h1>

            <p
              className={
                styles.founderRole
              }
            >
              Founder of No Breach
            </p>

            <p
              className={
                styles.founderIntro
              }
            >
              Cybersecurity professional focused on offensive security,
              practical training and community development.
            </p>

            <div
              className={
                styles.founderFocus
              }
            >
              {
                focus.map(
                  (
                    item
                  ) => (
                    <span
                      key={
                        item
                      }
                    >
                      {
                        item
                      }
                    </span>
                  )
                )
              }
            </div>

            <div
              className={
                styles.founderHeroActions
              }
            >
              <Link
                href="/company"
                className={
                  styles.founderPrimaryAction
                }
              >
                About No Breach

                <Arrow />
              </Link>

              <Link
                href="/activities"
                className={
                  styles.founderSecondaryAction
                }
              >
                Public activity

                <Arrow />
              </Link>
            </div>
          </div>


          <div
            className={
              styles.founderPortraitCard
            }
            data-founder-ui="portrait-card"
            aria-label="Abstract founder profile artwork"
          >
            <div
              className={
                styles.founderPortraitHeader
              }
            >
              <span>
                NB / FOUNDER
              </span>

              <span>
                PROFILE
              </span>
            </div>

            <div
              className={
                styles.founderPortraitStage
              }
              aria-hidden="true"
            >

              <Image
                src="/people/ceo.png"
                alt=""
                fill
                priority
                sizes="(max-width: 680px) calc(100vw - 2rem), (max-width: 1024px) 46vw, 520px"
                className={
                  styles.founderPortraitPhoto
                }
                data-founder-photo-image="profile"
              />

              <div
                className={
                  styles.founderPortraitPhotoShade
                }
                data-founder-photo-shade="profile"
              />

              <div
                className={
                  styles.founderPortraitOrbit
                }
              />

              <div
                className={
                  styles.founderPortraitOrbitSecondary
                }
              />



              <div
                className={
                  styles.founderCrosshair
                }
              />

              <span
                className={
                  styles.founderPortraitSignalOne
                }
              >
                OFFSEC
              </span>

              <span
                className={
                  styles.founderPortraitSignalTwo
                }
              >
                TRAIN
              </span>

              <span
                className={
                  styles.founderPortraitSignalThree
                }
              >
                SHARE
              </span>
            </div>

            <div
              className={
                styles.founderPortraitFooter
              }
            >
              <div>
                <span>
                  ROLE
                </span>

                <strong>
                  Founder
                </strong>
              </div>

              <div>
                <span>
                  FOCUS
                </span>

                <strong>
                  Offensive Security
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>


      <nav
        className={
          styles.founderNav
        }
        aria-label="Founder page sections"
      >
        <div
          className={
            styles.founderNavInner
          }
        >
          <a
            href="#overview"
          >
            Overview
          </a>

          <a
            href="#journey"
          >
            Journey
          </a>

          <a
            href="#expertise"
          >
            Expertise
          </a>

          <a
            href="#education"
          >
            Education
          </a>

          <a
            href="#public-work"
          >
            Public work
          </a>
        </div>
      </nav>


      <section
        id="overview"
        className={
          styles.founderSection
        }
        data-founder-section="overview"
      >
        <div
          className={
            styles.founderContainer
          }
        >
          <SectionLabel
            index="01"
            label="Professional overview"
          />

          <div
            className={
              styles.founderOverviewGrid
            }
          >
            <article
              className={
                styles.founderStatementCard
              }
              data-founder-card="statement"
            >
              <span>
                FOUNDER / SECURITY
              </span>

              <h2>
                Security through
                an attacker’s perspective.
              </h2>

              <p>
                The founder profile connects practical offensive-security
                work with technical education and community development.
              </p>
            </article>

            <div
              className={
                styles.founderOverviewStack
              }
            >
              <article
                className={
                  styles.founderMiniCard
                }
                data-founder-card="overview"
              >
                <span>
                  ROLE
                </span>

                <strong>
                  Founder
                </strong>

                <p>
                  Building the company around practical security.
                </p>
              </article>

              <article
                className={
                  styles.founderMiniCard
                }
                data-founder-card="overview"
              >
                <span>
                  APPROACH
                </span>

                <strong>
                  Practice first
                </strong>

                <p>
                  Test, learn, demonstrate and share.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>


      <section
        id="journey"
        className={
          `${styles.founderSection} ${styles.founderJourneySection}`
        }
        data-founder-section="journey"
      >
        <div
          className={
            styles.founderContainer
          }
        >
          <div
            className={
              styles.founderSectionHeader
            }
          >
            <SectionLabel
              index="02"
              label="Journey"
            />

            <h2>
              From programming to offensive security.
            </h2>
          </div>

          <div
            className={
              styles.founderJourney
            }
            data-founder-ui="journey"
          >
            {
              journey.map(
                (
                  item,
                  index
                ) => (
                  <div
                    className={
                      styles.founderJourneyItem
                    }
                    data-founder-card="journey"
                    key={
                      item.index
                    }
                  >
                    <div
                      className={
                        styles.founderJourneyTop
                      }
                    >
                      <span>
                        {
                          item.index
                        }
                      </span>

                      <strong>
                        {
                          item.code
                        }
                      </strong>
                    </div>

                    <div
                      className={
                        styles.founderJourneyVisual
                      }
                      aria-hidden="true"
                    >
                      <span />

                      {
                        index <
                        journey.length -
                          1
                          ? (
                              <i>
                                →
                              </i>
                            )
                          : null
                      }
                    </div>

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
                  </div>
                )
              )
            }
          </div>
        </div>
      </section>


      <section
        id="expertise"
        className={
          styles.founderSection
        }
        data-founder-section="expertise"
      >
        <div
          className={
            styles.founderContainer
          }
        >
          <div
            className={
              styles.founderSectionHeader
            }
          >
            <SectionLabel
              index="03"
              label="Expertise"
            />

            <h2>
              Technical focus.
            </h2>
          </div>

          <div
            className={
              styles.founderExpertiseGrid
            }
            data-founder-ui="expertise-grid"
          >
            {
              expertise.map(
                (
                  item
                ) => (
                  <article
                    className={
                      styles.founderExpertiseCard
                    }
                    data-founder-card="expertise"
                    key={
                      item.index
                    }
                  >
                    <div
                      className={
                        styles.founderExpertiseTop
                      }
                    >
                      <span>
                        {
                          item.index
                        }
                      </span>

                      <strong>
                        {
                          item.code
                        }
                      </strong>
                    </div>

                    <div
                      className={
                        styles.founderExpertiseVisual
                      }
                      aria-hidden="true"
                    >
                      <span />

                      <span />

                      <i />
                    </div>

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
      </section>


      <section
        id="education"
        className={
          `${styles.founderSection} ${styles.founderEducationSection}`
        }
        data-founder-section="education"
      >
        <div
          className={
            styles.founderContainer
          }
        >
          <SectionLabel
            index="04"
            label="Teaching & mentorship"
          />

          <div
            className={
              styles.founderEducationCard
            }
            data-founder-card="education"
          >
            <div
              className={
                styles.founderEducationVisual
              }
              aria-hidden="true"
            >
              <div
                className={
                  styles.founderLabCore
                }
              >
                LAB
              </div>

              <span>
                LEARN
              </span>

              <span>
                TEST
              </span>

              <span>
                BUILD
              </span>
            </div>

            <div
              className={
                styles.founderEducationCopy
              }
            >
              <span>
                HANDS-ON LEARNING
              </span>

              <h2>
                Learn security
                by doing security.
              </h2>

              <p>
                Training and mentorship focus on practical technical work,
                experimentation and repeatable reasoning.
              </p>

              <Link
                href="/training"
                className={
                  styles.founderInlineAction
                }
              >
                Explore Training Hub

                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section
        id="public-work"
        className={
          styles.founderSection
        }
        data-founder-section="public-work"
      >
        <div
          className={
            styles.founderContainer
          }
        >
          <div
            className={
              styles.founderSectionHeader
            }
          >
            <SectionLabel
              index="05"
              label="Public work"
            />

            <h2>
              Selected public engagements.
            </h2>
          </div>

          <div
            className={
              styles.founderEngagementStrip
            }
            data-founder-ui="engagement-evidence"
          >
            <div
              className={
                styles.founderEngagementItem
              }
            >
              <span>
                01
              </span>

              <strong>
                CyberSummit 4.0
              </strong>
            </div>

            <div
              className={
                styles.founderEngagementItem
              }
            >
              <span>
                02
              </span>

              <strong>
                CyberCamp 5.0
              </strong>
            </div>

            <div
              className={
                styles.founderEngagementItem
              }
            >
              <span>
                03
              </span>

              <strong>
                The Hackers Line
              </strong>
            </div>
          </div>


          <div
            className={
              styles.founderPublicGrid
            }
          >
            <Link
              href="/activities"
              className={
                styles.founderPublicCard
              }
              data-founder-card="public"
            >
              <div
                className={
                  styles.founderPublicVisual
                }
                aria-hidden="true"
              >
                <span>
                  ACT
                </span>

                <i />

                <i />

                <i />
              </div>

              <div
                className={
                  styles.founderPublicCopy
                }
              >
                <span>
                  ACTIVITIES
                </span>

                <h3>
                  Public activity
                </h3>

                <p>
                  Workshops, training, community and technical activity.
                </p>
              </div>

              <Arrow />
            </Link>


            <Link
              href="/insights"
              className={
                styles.founderPublicCard
              }
              data-founder-card="public"
            >
              <div
                className={
                  `${styles.founderPublicVisual} ${styles.founderKnowledgeVisual}`
                }
                aria-hidden="true"
              >
                <span>
                  R&D
                </span>

                <i />

                <i />

                <i />
              </div>

              <div
                className={
                  styles.founderPublicCopy
                }
              >
                <span>
                  KNOWLEDGE
                </span>

                <h3>
                  Security insights
                </h3>

                <p>
                  Practical technical thinking published by No Breach.
                </p>
              </div>

              <Arrow />
            </Link>


            <Link
              href="/cr4ckout"
              className={
                styles.founderPublicCard
              }
              data-founder-card="public"
            >
              <div
                className={
                  `${styles.founderPublicVisual} ${styles.founderCommunityVisual}`
                }
                aria-hidden="true"
              >
                <span>
                  CTF
                </span>

                <i />

                <i />

                <i />
              </div>

              <div
                className={
                  styles.founderPublicCopy
                }
              >
                <span>
                  COMMUNITY
                </span>

                <h3>
                  CR4CKOUT
                </h3>

                <p>
                  Technical challenge, experimentation and community.
                </p>
              </div>

              <Arrow />
            </Link>
          </div>
        </div>
      </section>


      <section
        className={
          styles.founderCta
        }
        data-founder-section="cta"
      >
        <div
          className={
            styles.founderCtaCard
          }
          data-founder-card="cta"
        >
          <div
            className={
              styles.founderCtaGraphic
            }
            aria-hidden="true"
          >
            <span>
              NB
            </span>

            <i />

            <i />

            <i />
          </div>

          <div
            className={
              styles.founderCtaContent
            }
          >
            <SectionLabel
              index="06"
              label="No Breach"
            />

            <h2>
              See the company
              behind the founder.
            </h2>

            <p>
              Explore No Breach services, training and cybersecurity work.
            </p>

            <div
              className={
                styles.founderCtaActions
              }
            >
              <Link
                href="/company"
                className={
                  styles.founderPrimaryAction
                }
              >
                About No Breach

                <Arrow />
              </Link>

              <Link
                href="/contact"
                className={
                  styles.founderSecondaryAction
                }
              >
                Contact

                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
