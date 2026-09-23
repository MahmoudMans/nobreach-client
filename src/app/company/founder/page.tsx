import Image from "next/image";
import Link from "next/link";

import type {
  Metadata
} from "next";

import {
  Breadcrumbs
} from "@/components/navigation/breadcrumbs";

import {
  Container
} from "@/components/layout/container";

import family from "../company-family.module.css";
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
      aria-hidden="true"
    >
      ↗
    </span>
  );

}


function SectionHeader({
  index,
  eyebrow,
  title,
  description
}: {
  index:
    string;

  eyebrow:
    string;

  title:
    string;

  description?:
    string;
}) {

  return (
    <div
      className={
        family.sectionHeader
      }
    >
      <div>
        <span
          className={
            family.sectionIndex
          }
        >
          {
            index
          }
        </span>

        <p
          className={
            family.sectionEyebrow
          }
        >
          {
            eyebrow
          }
        </p>
      </div>

      <div
        className={
          family.sectionHeaderCopy
        }
      >
        <h2
          className={
            family.sectionTitle
          }
        >
          {
            title
          }
        </h2>

        {
          description
            ? (
              <p
                className={
                  family.sectionDescription
                }
              >
                {
                  description
                }
              </p>
            )
            : null
        }
      </div>
    </div>
  );

}


export default function FounderPage() {

  return (
    <div
      className={
        `${family.page} ${styles.founderPage}`
      }
      data-founder-page="v2"
      data-company-family="v14"
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

      <Breadcrumbs
        items={[
          {
            label:
              "Company",

            href:
              "/company"
          },
          {
            label:
              "Founder"
          }
        ]}
      />


      <section
        className={
          `${family.pageIntro} ${family.compactPageIntro} ${styles.founderHero}`
        }
        data-founder-section="hero"
      >
        <Container
          size="wide"
          className={
            family.container
          }
        >
          <div
            className={
              `${family.pageIntroGrid} ${styles.founderHeroInner}`
            }
          >
            <div
              className={
                family.introCopy
              }
              data-founder-ui="hero-copy"
            >
              <p
                className={
                  family.eyebrow
                }
              >
                Founder / No Breach
              </p>

              <h1
                className={
                  family.title
                }
              >
                Nouha Ben Brahim
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
                  family.lead
                }
              >
                Cybersecurity professional focused on offensive security, practical training and community development.
              </p>

              <div
                className={
                  family.tags
                }
              >
                {
                  focus.map(
                    (
                      item
                    ) => (
                      <span
                        className={
                          family.tag
                        }
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
                  family.actions
                }
              >
                <Link
                  href="/company"
                  className={
                    family.primaryAction
                  }
                >
                  About No Breach

                  <Arrow />
                </Link>

                <Link
                  href="/activities"
                  className={
                    family.secondaryAction
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
              aria-label="Founder portrait"
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
                  sizes="(max-width: 768px) calc(100vw - 40px), 460px"
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
              </div>

              <dl
                className={
                  styles.founderPortraitFooter
                }
              >
                <div>
                  <dt>
                    Role
                  </dt>

                  <dd>
                    Founder
                  </dd>
                </div>

                <div>
                  <dt>
                    Focus
                  </dt>

                  <dd>
                    Offensive Security
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>


      <section
        id="overview"
        className={
          family.section
        }
        data-founder-section="overview"
      >
        <Container
          size="wide"
          className={
            family.container
          }
        >
          <SectionHeader
            index="01"
            eyebrow="Overview"
            title="From programming to offensive security."
            description="The progression starts with understanding how systems are built, then moves toward understanding how they fail and how those lessons can be taught."
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
              <p
                className={
                  styles.overviewStatement
                }
              >
                Practical security work becomes stronger when technical reasoning, experimentation and teaching reinforce each other.
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
                  APPROACH
                </span>

                <strong>
                  Attacker-oriented reasoning
                </strong>

                <p>
                  Understand behavior before relying on automation.
                </p>
              </article>

              <article
                className={
                  styles.founderMiniCard
                }
                data-founder-card="overview"
              >
                <span>
                  DIRECTION
                </span>

                <strong>
                  Security through practice
                </strong>

                <p>
                  Build, validate, document and teach repeatable methods.
                </p>
              </article>
            </div>
          </div>
        </Container>
      </section>


      <section
        id="journey"
        className={
          `${family.section} ${family.sectionAlt}`
        }
        data-founder-section="journey"
      >
        <Container
          size="wide"
          className={
            family.container
          }
        >
          <SectionHeader
            index="02"
            eyebrow="Journey"
            title="A technical path built in layers."
          />

          <div
            className={
              styles.founderJourney
            }
            data-founder-ui="journey"
          >
            {
              journey.map(
                (
                  item
                ) => (
                  <article
                    className={
                      styles.founderJourneyItem
                    }
                    data-founder-card="journey"
                    key={
                      item.index
                    }
                  >
                    <span
                      className={
                        styles.journeyIndex
                      }
                    >
                      {
                        item.index
                      }
                    </span>

                    <div
                      className={
                        styles.journeyLabel
                      }
                    >
                      {
                        item.code
                      }
                    </div>

                    <div>
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
                  </article>
                )
              )
            }
          </div>
        </Container>
      </section>


      <section
        id="expertise"
        className={
          family.section
        }
        data-founder-section="expertise"
      >
        <Container
          size="wide"
          className={
            family.container
          }
        >
          <SectionHeader
            index="03"
            eyebrow="Expertise"
            title="Areas of technical focus."
          />

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
                        styles.expertiseMeta
                      }
                    >
                      <span>
                        {
                          item.index
                        }
                      </span>

                      <small>
                        {
                          item.code
                        }
                      </small>
                    </div>

                    <div>
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
                  </article>
                )
              )
            }
          </div>
        </Container>
      </section>


      <section
        id="education"
        className={
          `${family.section} ${family.sectionAlt}`
        }
        data-founder-section="education"
      >
        <Container
          size="wide"
          className={
            family.container
          }
        >
          <SectionHeader
            index="04"
            eyebrow="Education"
            title="Learning as part of the security practice."
          />

          <article
            className={
              styles.founderEducationCard
            }
            data-founder-card="education"
          >
            <div
              className={
                styles.educationVisual
              }
              aria-hidden="true"
            >
              <span>
                BUILD
              </span>

              <i />

              <span>
                TEST
              </span>

              <i />

              <span>
                EXPLAIN
              </span>
            </div>

            <div
              className={
                styles.educationCopy
              }
            >
              <p
                className={
                  family.eyebrow
                }
              >
                Hands-on methodology
              </p>

              <h2>
                Learn security by doing security.
              </h2>

              <p>
                Training and mentorship focus on practical technical work, experimentation and repeatable reasoning.
              </p>

              <Link
                href="/training"
                className={
                  family.textAction
                }
              >
                Explore Training Hub

                <Arrow />
              </Link>
            </div>
          </article>
        </Container>
      </section>


      <section
        id="public-work"
        className={
          family.section
        }
        data-founder-section="public-work"
      >
        <Container
          size="wide"
          className={
            family.container
          }
        >
          <SectionHeader
            index="05"
            eyebrow="Public work"
            title="Selected public engagements."
            description="Training, community participation and technical knowledge sharing remain visible parts of the work."
          />

          <div
            className={
              styles.founderEngagementStrip
            }
            data-founder-ui="engagement-evidence"
          >
            {
              [
                "CyberSummit 4.0",
                "CyberCamp 5.0",
                "The Hackers Line"
              ].map(
                (
                  item,
                  index
                ) => (
                  <div
                    className={
                      styles.founderEngagementItem
                    }
                    key={
                      item
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
                        item
                      }
                    </strong>
                  </div>
                )
              )
            }
          </div>

          <div
            className={
              styles.founderPublicGrid
            }
          >
            {
              [
                {
                  code:
                    "ACT",

                  label:
                    "Activities",

                  title:
                    "Public activity",

                  description:
                    "Workshops, training, community and technical activity.",

                  href:
                    "/activities"
                },
                {
                  code:
                    "R&D",

                  label:
                    "Knowledge",

                  title:
                    "Security insights",

                  description:
                    "Practical technical thinking published by No Breach.",

                  href:
                    "/insights"
                },
                {
                  code:
                    "CTF",

                  label:
                    "Community",

                  title:
                    "CR4CKOUT",

                  description:
                    "Technical challenge, experimentation and community.",

                  href:
                    "/cr4ckout"
                }
              ].map(
                (
                  item
                ) => (
                  <Link
                    href={
                      item.href
                    }
                    className={
                      styles.founderPublicCard
                    }
                    data-founder-card="public"
                    key={
                      item.code
                    }
                  >
                    <span
                      className={
                        styles.publicCode
                      }
                    >
                      {
                        item.code
                      }
                    </span>

                    <small>
                      {
                        item.label
                      }
                    </small>

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

                    <Arrow />
                  </Link>
                )
              )
            }
          </div>
        </Container>
      </section>


      <section
        className={
          `${family.finalCta} ${styles.founderCta}`
        }
        data-founder-section="cta"
      >
        <Container
          size="wide"
          className={
            family.container
          }
        >
          <div
            className={
              `${family.finalCtaInner} ${styles.founderCtaCard}`
            }
            data-founder-card="cta"
          >
            <div
              className={
                family.finalCtaContent
              }
            >
              <p
                className={
                  family.sectionEyebrow
                }
              >
                Connect
              </p>

              <h2
                className={
                  family.ctaTitle
                }
              >
                Explore the work behind No Breach.
              </h2>

              <p
                className={
                  family.ctaText
                }
              >
                Learn more about the company, its technical activity and the practical security work built around it.
              </p>

              <div
                className={
                  family.actions
                }
              >
                <Link
                  href="/company"
                  className={
                    family.primaryAction
                  }
                >
                  About No Breach

                  <Arrow />
                </Link>

                <Link
                  href="/contact"
                  className={
                    family.secondaryAction
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
