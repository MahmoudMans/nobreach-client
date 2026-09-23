import Image from "next/image";
import Link from "next/link";

import type {
  Metadata
} from "next";

import {
  Container
} from "@/components/layout/container";

import styles from "./company.module.css";


export const metadata:
  Metadata = {

  title:
    "Company | No Breach",

  description:
    "No Breach connects offensive security, practical cybersecurity education and technical community activity from Tunis, Tunisia."
};


const capabilityItems = [
  {
    number:
      "01",

    code:
      "SEC",

    title:
      "Security Services",

    description:
      "Web, API and infrastructure security testing.",

    href:
      "/services",

    progress:
      "88%"
  },
  {
    number:
      "02",

    code:
      "LAB",

    title:
      "Training Hub",

    description:
      "Practical cybersecurity education built around technical work.",

    href:
      "/training",

    progress:
      "72%"
  },
  {
    number:
      "03",

    code:
      "CTF",

    title:
      "CR4CKOUT",

    description:
      "Technical challenge, experimentation and community.",

    href:
      "/cr4ckout",

    progress:
      "94%"
  },
  {
    number:
      "04",

    code:
      "R&D",

    title:
      "Knowledge",

    description:
      "Security research, technical insight and shared experience.",

    href:
      "/insights",

    progress:
      "78%"
  }
];


const principles = [
  {
    number:
      "01",

    title:
      "Think offensively",

    description:
      "Understand systems from the attacker's point of view."
  },
  {
    number:
      "02",

    title:
      "Build through practice",

    description:
      "Security knowledge becomes useful when it is exercised."
  },
  {
    number:
      "03",

    title:
      "Share knowledge",

    description:
      "Education and community strengthen technical capability."
  }
];


const milestones = [
  {
    year:
      "2023",

    title:
      "Founded"
  },
  {
    year:
      "2024",

    title:
      "Training Hub"
  },
  {
    year:
      "2024",

    title:
      "CR4CKOUT"
  },
  {
    year:
      "2025+",

    title:
      "Community"
  },
  {
    year:
      "Now",

    title:
      "Building"
  }
];


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


export default function CompanyPage() {

  return (
    <div
      className={
        styles.page
      }
      data-company-page="v4"
      data-company-design="v9"
      data-company-family="v14"
      data-company-density="v15"
      data-company-architecture="v18"
      data-company-design-system="v19"
    >
      {/* ================================================================
          HERO — not counted as a content section
         ================================================================ */}

      <section
        className={
          styles.hero
        }
        data-company-section="hero"
        data-company-hero="v6"
        data-company-v19="hero"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <div
            className={
              styles.heroTopline
            }
          >
            <p>
              No Breach
            </p>

            <div>
              <span>
                Tunis / TN
              </span>

              <span>
                Est. 2023
              </span>
            </div>
          </div>

          <div
            className={
              styles.heroMain
            }
          >
            <div
              className={
                styles.heroCopy
              }
              data-company-ui="hero-copy"
            >
              <p
                className={
                  styles.heroEyebrow
                }
              >
                Offensive Security · Education · Community
              </p>

              <h1>
                Offensive security
                <span>
                  built to move beyond
                  the assessment.
                </span>
              </h1>

              <div
                className={
                  styles.heroLower
                }
              >
                <p
                  className={
                    styles.heroLead
                  }
                >
                  Practical security services, education and community connected by one offensive mindset.
                </p>

                <div
                  className={
                    styles.heroActions
                  }
                >
                  <Link
                    href="/services"
                    className={
                      styles.primaryAction
                    }
                  >
                    Explore our work

                    <Arrow />
                  </Link>

                  <Link
                    href="/company/founder"
                    className={
                      styles.textAction
                    }
                  >
                    Meet the founder

                    <Arrow />
                  </Link>
                </div>
              </div>
            </div>

            <aside
              className={
                styles.signalSystem
              }
              data-company-ui="signal-system"
              aria-label="No Breach capability system"
            >
              <div
                className={
                  styles.signalHeader
                }
              >
                <span>
                  System / 01
                </span>

                <span>
                  Active
                </span>
              </div>

              {
                capabilityItems.map(
                  (
                    item
                  ) => (
                    <div
                      className={
                        styles.signalRow
                      }
                      key={
                        item.code
                      }
                    >
                      <span
                        className={
                          styles.signalNumber
                        }
                      >
                        {
                          item.number
                        }
                      </span>

                      <span
                        className={
                          styles.signalCode
                        }
                      >
                        {
                          item.code
                        }
                      </span>

                      <div
                        className={
                          styles.signalTrack
                        }
                        aria-hidden="true"
                      >
                        <i
                          style={{
                            width:
                              item.progress
                          }}
                        />
                      </div>
                    </div>
                  )
                )
              }
            </aside>
          </div>

          <div
            className={
              styles.heroFooter
            }
          >
            <p>
              Services / Education / Community
            </p>

            <a
              href="#identity"
            >
              Scroll to explore

              <span
                aria-hidden="true"
              >
                ↓
              </span>
            </a>
          </div>
        </Container>
      </section>


      {/* ================================================================
          01 — IDENTITY
         ================================================================ */}

      <section
        id="identity"
        className={
          styles.identity
        }
        data-company-content-section="identity"
        data-company-section="company-operating-model"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="01"
            eyebrow="Identity"
            title="A security company where assessment, practice and knowledge reinforce each other."
            description="No Breach works across professional security, technical education and community activity from one shared offensive-security mindset."
          />

          <div
            className={
              styles.operatingModel
            }
            data-company-ui="operating-model"
          >
            <article>
              <div
                className={
                  styles.operatingMeta
                }
              >
                <span>
                  01
                </span>

                <small>
                  SEC
                </small>
              </div>

              <h3>
                Security services
              </h3>

              <p>
                Identify attack surfaces, validate weaknesses and translate findings into practical security improvement.
              </p>
            </article>

            <div
              className={
                styles.operatingConnector
              }
              aria-hidden="true"
            >
              <span />

              <i />
            </div>

            <article>
              <div
                className={
                  styles.operatingMeta
                }
              >
                <span>
                  02
                </span>

                <small>
                  EDU
                </small>
              </div>

              <h3>
                Practical education
              </h3>

              <p>
                Turn security knowledge into repeatable technical skill through hands-on learning and experimentation.
              </p>
            </article>

            <div
              className={
                styles.operatingConnector
              }
              aria-hidden="true"
            >
              <span />

              <i />
            </div>

            <article>
              <div
                className={
                  styles.operatingMeta
                }
              >
                <span>
                  03
                </span>

                <small>
                  COM
                </small>
              </div>

              <h3>
                Community
              </h3>

              <p>
                Exchange technical knowledge, experience and challenge around real cybersecurity practice.
              </p>
            </article>
          </div>

          <dl
            className={
              styles.factRail
            }
            data-company-ui="facts"
          >
            <div>
              <dt>
                Founded
              </dt>

              <dd>
                2023
              </dd>
            </div>

            <div>
              <dt>
                Location
              </dt>

              <dd>
                Tunis, Tunisia
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

            <div>
              <dt>
                Model
              </dt>

              <dd>
                Services · Education · Community
              </dd>
            </div>
          </dl>
        </Container>
      </section>


      {/* ================================================================
          02 — CAPABILITY SYSTEM
         ================================================================ */}

      <section
        className={
          styles.capabilities
        }
        data-company-content-section="capabilities"
        data-company-section="capabilities-principles"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="02"
            eyebrow="Capability system"
            title="Four ways the same security mindset is applied."
            description="Security assessment, education, experimentation and technical knowledge operate as one connected system rather than isolated activities."
          />

          <div
            className={
              styles.capabilityIndex
            }
            data-company-ui="capability-grid"
          >
            {
              capabilityItems.map(
                (
                  capability
                ) => (
                  <Link
                    href={
                      capability.href
                    }
                    className={
                      styles.capabilityRow
                    }
                    data-company-card="capability"
                    key={
                      capability.number
                    }
                  >
                    <span
                      className={
                        styles.capabilityNumber
                      }
                    >
                      {
                        capability.number
                      }
                    </span>

                    <div
                      className={
                        styles.capabilityCopy
                      }
                    >
                      <h3>
                        {
                          capability.title
                        }
                      </h3>

                      <p>
                        {
                          capability.description
                        }
                      </p>
                    </div>

                    <span
                      className={
                        styles.capabilityCode
                      }
                    >
                      {
                        capability.code
                      }
                    </span>

                    <div
                      className={
                        styles.capabilityTrack
                      }
                      aria-hidden="true"
                    >
                      <span
                        style={{
                          width:
                            capability.progress
                        }}
                      />
                    </div>

                    <Arrow />
                  </Link>
                )
              )
            }
          </div>

          <div
            className={
              styles.principles
            }
            data-company-ui="principle-grid"
          >
            <p
              className={
                styles.principlesLabel
              }
            >
              How we work
            </p>

            <div
              className={
                styles.principleGrid
              }
            >
              {
                principles.map(
                  (
                    principle
                  ) => (
                    <article
                      className={
                        styles.principle
                      }
                      data-company-card="principle"
                      key={
                        principle.number
                      }
                    >
                      <span>
                        {
                          principle.number
                        }
                      </span>

                      <h3>
                        {
                          principle.title
                        }
                      </h3>

                      <p>
                        {
                          principle.description
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
          03 — PEOPLE & EVOLUTION
         ================================================================ */}

      <section
        className={
          styles.people
        }
        data-company-content-section="people"
        data-company-section="people-evolution"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="03"
            eyebrow="People & evolution"
            title="Built through practice. Growing through people."
          />

          <div
            className={
              styles.timeline
            }
            data-company-ui="timeline-grid"
          >
            {
              milestones.map(
                (
                  milestone,
                  index
                ) => (
                  <article
                    className={
                      styles.timelineItem
                    }
                    data-company-card="timeline"
                    key={
                      `${milestone.year}-${milestone.title}`
                    }
                  >
                    <span
                      className={
                        styles.timelineNumber
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

                    <div
                      className={
                        styles.timelinePoint
                      }
                      aria-hidden="true"
                    >
                      <i />
                    </div>

                    <strong>
                      {
                        milestone.year
                      }
                    </strong>

                    <p>
                      {
                        milestone.title
                      }
                    </p>
                  </article>
                )
              )
            }
          </div>

          <div
            className={
              styles.peopleComposition
            }
          >
            <div
              className={
                styles.founderVisual
              }
              data-company-card="founder"
            >
              <div
                className={
                  styles.founderImage
                }
              >
                <Image
                  src="/people/ceo.png"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 72vw, 360px"
                  className={
                    styles.founderPhoto
                  }
                  data-founder-photo-image="company"
                />

                <div
                  className={
                    styles.founderImageShade
                  }
                  aria-hidden="true"
                />

                <div
                  className={
                    styles.founderImageMeta
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
                styles.founderCopy
              }
            >
              <p
                className={
                  styles.smallEyebrow
                }
              >
                Founder
              </p>

              <h3>
                Nouha Ben Brahim
              </h3>

              <p>
                Cybersecurity professional focused on offensive security, practical training and technical community development.
              </p>

              <Link
                href="/company/founder"
                className={
                  styles.textAction
                }
              >
                Meet the founder

                <Arrow />
              </Link>
            </div>

            <nav
              className={
                styles.peopleLinks
              }
              aria-label="Explore No Breach people and applied work"
              data-company-ui="people-grid"
            >
              <Link
                href="/company/team"
                className={
                  styles.peopleLink
                }
                data-company-card="people"
              >
                <div>
                  <span>
                    01 / Company
                  </span>

                  <strong>
                    Team
                  </strong>

                  <p>
                    Current public profiles behind the work.
                  </p>
                </div>

                <Arrow />
              </Link>

              <Link
                href="/company/internships"
                className={
                  styles.peopleLink
                }
                data-company-card="people"
              >
                <div>
                  <span>
                    02 / Applied work
                  </span>

                  <strong>
                    Internship projects
                  </strong>

                  <p>
                    Cybersecurity projects developed through hands-on programs.
                  </p>
                </div>

                <Arrow />
              </Link>
            </nav>
          </div>
        </Container>
      </section>


      {/* ================================================================
          CTA — not counted
         ================================================================ */}

      <section
        className={
          styles.cta
        }
        data-company-section="cta"
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
                  styles.smallEyebrow
                }
              >
                Start a conversation
              </p>

              <h2>
                Have a security problem
                worth looking at differently?
              </h2>
            </div>

            <div
              className={
                styles.ctaRight
              }
            >
              <p>
                Tell us what you are trying to understand. We will help define the right security approach.
              </p>

              <div
                className={
                  styles.ctaActions
                }
              >
                <Link
                  href="/contact"
                  className={
                    styles.primaryAction
                  }
                >
                  Start a conversation

                  <Arrow />
                </Link>

                <Link
                  href="/services"
                  className={
                    styles.textAction
                  }
                >
                  Explore services

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
