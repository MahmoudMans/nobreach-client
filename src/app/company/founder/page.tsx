import Image from "next/image";
import Link from "next/link";

import type {
  Metadata
} from "next";

import {
  Container
} from "@/components/layout/container";

import {
  Breadcrumbs
} from "@/components/navigation/breadcrumbs";

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
    number:
      "01",

    code:
      "DEV",

    title:
      "Development",

    headline:
      "Understanding how systems are built.",

    description:
      "Programming formed the technical foundation for understanding software behavior, structure and implementation."
  },
  {
    number:
      "02",

    code:
      "SEC",

    title:
      "Cybersecurity",

    headline:
      "Moving from construction to failure analysis.",

    description:
      "Security shifted the focus from building systems toward understanding assumptions, weaknesses and attack surfaces."
  },
  {
    number:
      "03",

    code:
      "RES",

    title:
      "Bug bounty / security research",

    headline:
      "Learning through real application behavior.",

    description:
      "Legal web-security and bug-bounty research reinforced the importance of understanding systems before attempting exploitation."
  },
  {
    number:
      "04",

    code:
      "OFF",

    title:
      "Offensive security",

    headline:
      "Turning attacker thinking into a repeatable method.",

    description:
      "Offensive-security work connects technical reasoning, experimentation, validation and practical communication."
  },
  {
    number:
      "05",

    code:
      "NB",

    title:
      "No Breach",

    headline:
      "Connecting practice, education and community.",

    description:
      "No Breach brings professional security work together with technical learning and cybersecurity community activity."
  }
];


const expertise = [
  {
    number:
      "01",

    code:
      "WEB",

    title:
      "Web Security",

    description:
      "Application behavior, attack surfaces, trust boundaries and practical security testing."
  },
  {
    number:
      "02",

    code:
      "API",

    title:
      "API Security",

    description:
      "Authentication, authorization, object-level access and application logic."
  },
  {
    number:
      "03",

    code:
      "OFF",

    title:
      "Offensive Security",

    description:
      "Attacker-oriented reasoning, validation and technical security assessment."
  },
  {
    number:
      "04",

    code:
      "EDU",

    title:
      "Security Training",

    description:
      "Hands-on learning, mentorship and practical technical skill development."
  }
];


const engagements = [
  {
    number:
      "01",

    type:
      "Workshop",

    name:
      "CyberSummit 4.0",

    role:
      "Workshop trainer"
  },
  {
    number:
      "02",

    type:
      "Mentorship",

    name:
      "CyberCamp 5.0",

    role:
      "OSINT mentor"
  },
  {
    number:
      "03",

    type:
      "Media",

    name:
      "The Hackers Line",

    role:
      "Cybersecurity podcast"
  }
];


const destinations = [
  {
    code:
      "ACT",

    label:
      "Activities",

    title:
      "Public activity",

    description:
      "Workshops, events, training and cybersecurity community activity.",

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
      "Technical writing and practical security thinking published by No Breach.",

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
      "Technical challenge, experimentation and cybersecurity community.",

    href:
      "/cr4ckout"
  }
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
    "Web Security",
    "API Security",
    "Cybersecurity Training",
    "Security Research"
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


function SectionHeading({
  number,
  eyebrow,
  title,
  description
}: {
  number:
    string;

  eyebrow:
    string;

  title:
    string;

  description?:
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
        <span>
          {
            number
          }
        </span>

        {
          eyebrow
        }
      </p>

      <h2>
        {
          title
        }
      </h2>

      {
        description
          ? (
            <p
              className={
                styles.sectionDescription
              }
            >
              {
                description
              }
            </p>
          )
          : null
      }
    </header>
  );

}


export default function FounderPage() {

  return (
    <div
      className={
        styles.page
      }
      data-founder-page="v20"
      data-company-family="v14"
      data-company-density="v15"
      data-company-architecture="v18"
      data-founder-design-system="v20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              founderStructuredData
            )
        }}
      />

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


      {/* ================================================================
          HERO
          Not counted as one of the three content sections.
         ================================================================ */}

      <section
        className={
          styles.hero
        }
        data-founder-section="hero"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <div
            className={
              styles.heroGrid
            }
          >
            <div
              className={
                styles.heroPortrait
              }
              data-founder-ui="portrait-editorial"
            >
              <div
                className={
                  styles.heroImage
                }
              >
                <Image
                  src="/people/ceo.png"
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) 42vw, 430px"
                  className={
                    styles.heroPhoto
                  }
                  data-founder-photo-image="profile"
                />

                <div
                  className={
                    styles.heroImageShade
                  }
                  aria-hidden="true"
                />

                <div
                  className={
                    styles.heroImageCorner
                  }
                  aria-hidden="true"
                />

                <div
                  className={
                    styles.heroImageMeta
                  }
                  aria-hidden="true"
                >
                  <span>
                    NB / Founder
                  </span>

                  <span>
                    Tunis
                  </span>
                </div>
              </div>
            </div>

            <div
              className={
                styles.heroCopy
              }
              data-founder-ui="hero-copy"
            >
              <div
                className={
                  styles.heroTopline
                }
              >
                <span>
                  Founder profile
                </span>

                <span>
                  No Breach / Tunisia
                </span>
              </div>

              <p
                className={
                  styles.heroEyebrow
                }
              >
                Offensive security · Education · Community
              </p>

              <h1>
                Nouha
                <span>
                  Ben Brahim
                </span>
              </h1>

              <p
                className={
                  styles.heroRole
                }
              >
                Founder of No Breach
              </p>

              <p
                className={
                  styles.heroLead
                }
              >
                Cybersecurity professional connecting offensive-security practice with technical education, mentorship and community development.
              </p>

              <div
                className={
                  styles.heroMeta
                }
              >
                <div>
                  <span>
                    Focus
                  </span>

                  <strong>
                    Offensive Security
                  </strong>
                </div>

                <div>
                  <span>
                    Base
                  </span>

                  <strong>
                    Tunis, Tunisia
                  </strong>
                </div>

                <div>
                  <span>
                    Practice
                  </span>

                  <strong>
                    Security · Training · Research
                  </strong>
                </div>
              </div>

              <div
                className={
                  styles.heroActions
                }
              >
                <a
                  href="#trajectory"
                  className={
                    styles.primaryAction
                  }
                >
                  Explore the profile

                  <span
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </a>

                <Link
                  href="/company"
                  className={
                    styles.textAction
                  }
                >
                  About No Breach

                  <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          01 — TRAJECTORY
         ================================================================ */}

      <section
        id="trajectory"
        className={
          styles.section
        }
        data-company-content-section="journey"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="01"
            eyebrow="Trajectory"
            title="From programming to offensive security."
            description="A technical path built by moving from how software is created toward how systems behave, fail and can be understood from an attacker’s perspective."
          />

          <div
            className={
              styles.trajectoryLayout
            }
          >
            <div
              className={
                styles.trajectoryStatement
              }
              data-founder-section="overview"
            >
              <p
                className={
                  styles.statementLabel
                }
              >
                Working perspective
              </p>

              <blockquote>
                At some point, you stop hunting vulnerabilities. You start understanding systems.
              </blockquote>

              <p>
                Practical security work becomes stronger when technical reasoning, experimentation and teaching reinforce each other.
              </p>
            </div>

            <div
              className={
                styles.journey
              }
              data-founder-section="journey"
              data-founder-ui="journey"
            >
              {
                journey.map(
                  (
                    item
                  ) => (
                    <article
                      className={
                        styles.journeyRow
                      }
                      data-founder-card="journey"
                      key={
                        item.number
                      }
                    >
                      <div
                        className={
                          styles.journeyMeta
                        }
                      >
                        <span>
                          {
                            item.number
                          }
                        </span>

                        <small>
                          {
                            item.code
                          }
                        </small>
                      </div>

                      <div
                        className={
                          styles.journeyTitle
                        }
                      >
                        <h3>
                          {
                            item.title
                          }
                        </h3>

                        <strong>
                          {
                            item.headline
                          }
                        </strong>
                      </div>

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
          02 — PRACTICE
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.sectionAlt}`
        }
        data-company-content-section="expertise-education"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="02"
            eyebrow="Practice"
            title="Technical depth supported by hands-on learning."
            description="The same reasoning is applied across application security, offensive testing, research and practical cybersecurity education."
          />

          <div
            className={
              styles.expertise
            }
            data-founder-section="expertise"
            data-founder-ui="expertise-index"
          >
            {
              expertise.map(
                (
                  item
                ) => (
                  <article
                    className={
                      styles.expertiseRow
                    }
                    data-founder-card="expertise"
                    key={
                      item.number
                    }
                  >
                    <span
                      className={
                        styles.expertiseNumber
                      }
                    >
                      {
                        item.number
                      }
                    </span>

                    <span
                      className={
                        styles.expertiseCode
                      }
                    >
                      {
                        item.code
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

          <div
            className={
              styles.method
            }
            data-founder-section="education"
            data-founder-ui="method"
          >
            <div
              className={
                styles.methodIntro
              }
            >
              <p
                className={
                  styles.methodLabel
                }
              >
                Hands-on methodology
              </p>

              <h3>
                Learn security by doing security.
              </h3>

              <p>
                Training and mentorship focus on complete technical problems rather than passive consumption.
              </p>

              <Link
                href="/training"
                className={
                  styles.textAction
                }
              >
                Explore Training Hub

                <Arrow />
              </Link>
            </div>

            <ol
              className={
                styles.methodFlow
              }
            >
              <li>
                <span>
                  01
                </span>

                <strong>
                  Understand
                </strong>
              </li>

              <li>
                <span>
                  02
                </span>

                <strong>
                  Build
                </strong>
              </li>

              <li>
                <span>
                  03
                </span>

                <strong>
                  Test
                </strong>
              </li>

              <li>
                <span>
                  04
                </span>

                <strong>
                  Explain
                </strong>
              </li>
            </ol>
          </div>
        </Container>
      </section>


      {/* ================================================================
          03 — PUBLIC WORK
         ================================================================ */}

      <section
        className={
          styles.section
        }
        data-company-content-section="public-work"
        data-founder-section="public-work"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="03"
            eyebrow="Public work"
            title="Selected public engagements."
            description="Technical teaching, community participation and security knowledge sharing form a visible part of the professional profile."
          />

          <div
            className={
              styles.engagements
            }
            data-founder-ui="engagement-evidence"
          >
            {
              engagements.map(
                (
                  engagement
                ) => (
                  <article
                    className={
                      styles.engagement
                    }
                    key={
                      engagement.number
                    }
                  >
                    <div>
                      <span>
                        {
                          engagement.number
                        }
                      </span>

                      <small>
                        {
                          engagement.type
                        }
                      </small>
                    </div>

                    <h3>
                      {
                        engagement.name
                      }
                    </h3>

                    <p>
                      {
                        engagement.role
                      }
                    </p>
                  </article>
                )
              )
            }
          </div>

          <div
            className={
              styles.publicDirectory
            }
          >
            <p
              className={
                styles.directoryLabel
              }
            >
              Explore the work
            </p>

            <div
              className={
                styles.publicRows
              }
            >
              {
                destinations.map(
                  (
                    destination,
                    index
                  ) => (
                    <Link
                      href={
                        destination.href
                      }
                      className={
                        styles.publicRow
                      }
                      data-founder-card="public"
                      key={
                        destination.code
                      }
                    >
                      <span
                        className={
                          styles.publicNumber
                        }
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
                          styles.publicCode
                        }
                      >
                        {
                          destination.code
                        }
                      </span>

                      <div>
                        <small>
                          {
                            destination.label
                          }
                        </small>

                        <h3>
                          {
                            destination.title
                          }
                        </h3>

                        <p>
                          {
                            destination.description
                          }
                        </p>
                      </div>

                      <Arrow />
                    </Link>
                  )
                )
              }
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          CTA
          Does not count as one of the three content sections.
         ================================================================ */}

      <section
        className={
          styles.cta
        }
        data-founder-section="cta"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <div
            className={
              styles.ctaRule
            }
          />

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

                No Breach
              </p>

              <h2>
                Explore the company behind the work.
              </h2>
            </div>

            <div
              className={
                styles.ctaCopy
              }
            >
              <p>
                Discover No Breach security services, training and technical community activity.
              </p>

              <div
                className={
                  styles.ctaActions
                }
              >
                <Link
                  href="/company"
                  className={
                    styles.primaryAction
                  }
                >
                  About No Breach

                  <Arrow />
                </Link>

                <Link
                  href="/contact"
                  className={
                    styles.textAction
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
