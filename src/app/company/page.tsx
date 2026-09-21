import type {
  Metadata
} from "next";

import Link from "next/link";

import styles from "./company.module.css";


export const metadata:
  Metadata = {

  title:
    "Company | No Breach",

  description:
    "Learn about No Breach, its offensive-security foundations, practical cybersecurity work, training ecosystem and community initiatives."
};


const companyFacts = [
  {
    label:
      "Founded",

    value:
      "2023"
  },

  {
    label:
      "Based",

    value:
      "Tunis, Tunisia"
  },

  {
    label:
      "Focus",

    value:
      "Offensive Security"
  },

  {
    label:
      "Ecosystem",

    value:
      "Services · Education · Community"
  }
];


const disciplines = [
  {
    index:
      "01",

    eyebrow:
      "Security Services",

    title:
      "Examine systems from an attacker’s perspective.",

    description:
      "Security work centered on identifying weaknesses across applications, APIs and infrastructure before those weaknesses become operational risk.",

    href:
      "/services",

    action:
      "Explore services"
  },

  {
    index:
      "02",

    eyebrow:
      "Training Hub",

    title:
      "Build security capability through practice.",

    description:
      "Hands-on cybersecurity education designed around applied technical work rather than passive theory.",

    href:
      "/training",

    action:
      "Explore training"
  },

  {
    index:
      "03",

    eyebrow:
      "CR4CKOUT",

    title:
      "Create a place to hack, learn, break and build.",

    description:
      "A distinct cybersecurity initiative connecting technical challenge, experimentation and community participation.",

    href:
      "/cr4ckout",

    action:
      "Explore CR4CKOUT"
  },

  {
    index:
      "04",

    eyebrow:
      "Knowledge & Community",

    title:
      "Turn practical experience into shared knowledge.",

    description:
      "Technical activities, educational initiatives and public knowledge that contribute to the broader cybersecurity ecosystem.",

    href:
      "/activities",

    action:
      "Explore activities"
  }
];


const principles = [
  {
    index:
      "01",

    title:
      "Think offensively",

    description:
      "Understand systems from an attacker’s perspective."
  },

  {
    index:
      "02",

    title:
      "Build through practice",

    description:
      "Security knowledge should be exercised, tested and demonstrated."
  },

  {
    index:
      "03",

    title:
      "Share knowledge",

    description:
      "Education and community strengthen the security ecosystem."
  }
];


const ecosystem = [
  {
    index:
      "01",

    label:
      "Services",

    title:
      "Offensive Security",

    href:
      "/services"
  },

  {
    index:
      "02",

    label:
      "Education",

    title:
      "Training Hub",

    href:
      "/training"
  },

  {
    index:
      "03",

    label:
      "Community",

    title:
      "CR4CKOUT",

    href:
      "/cr4ckout"
  },

  {
    index:
      "04",

    label:
      "Knowledge",

    title:
      "Insights",

    href:
      "/insights"
  }
];


const timeline = [
  {
    year:
      "2023",

    title:
      "No Breach founded",

    description:
      "The company begins with an offensive-security foundation."
  },

  {
    year:
      "2024",

    title:
      "Training Hub established",

    description:
      "Hands-on cybersecurity education becomes a dedicated part of the ecosystem."
  },

  {
    year:
      "2024",

    title:
      "CR4CKOUT launched",

    description:
      "A separate initiative expands the company’s technical and community activity."
  },

  {
    year:
      "2025+",

    title:
      "Community and training activities",

    description:
      "Practical learning, technical activity and knowledge sharing continue to expand."
  },

  {
    year:
      "Today",

    title:
      "Continuing to build",

    description:
      "No Breach continues developing security, education and community initiatives."
  }
];


function Arrow() {

  return (
    <span
      className={
        styles.arrow
      }
      aria-hidden="true"
    >
      ↗
    </span>
  );
}


export default function CompanyPage() {

  return (
    <div
      className={
        styles.page
      }
      data-company-page="v2"
    >
      <section
        className={
          styles.hero
        }
        data-company-section="hero"
      >
        <div
          className={
            styles.heroAmbient
          }
          aria-hidden="true"
        />

        <div
          className={
            styles.heroInner
          }
        >
          <div
            className={
              styles.heroCopy
            }
          >
            <div
              className={
                styles.eyebrow
              }
            >
              <span
                className={
                  styles.eyebrowDot
                }
              />

              Company / No Breach
            </div>

            <h1
              className={
                styles.heroTitle
              }
            >
              Offensive security
              <span>
                at the center of a wider
                cybersecurity ecosystem.
              </span>
            </h1>

            <p
              className={
                styles.heroLead
              }
            >
              Founded in Tunisia, No Breach brings together
              security services, hands-on education and
              cybersecurity community initiatives around
              one practical security mindset.
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
                Explore services

                <Arrow />
              </Link>

              <Link
                href="/company/founder"
                className={
                  styles.secondaryAction
                }
              >
                Meet the founder

                <Arrow />
              </Link>
            </div>
          </div>

          <div
            className={
              styles.heroVisual
            }
            data-ui="company-system-map"
            aria-hidden="true"
          >
            <div
              className={
                styles.visualHeader
              }
            >
              <span>
                NB / COMPANY SYSTEM
              </span>

              <span>
                TUNIS / 2023
              </span>
            </div>

            <div
              className={
                styles.systemCanvas
              }
            >
              <svg
                className={
                  styles.systemConnections
                }
                viewBox="0 0 600 500"
                preserveAspectRatio="none"
              >
                <path
                  d="M300 250 L140 120"
                />

                <path
                  d="M300 250 L460 120"
                />

                <path
                  d="M300 250 L140 380"
                />

                <path
                  d="M300 250 L460 380"
                />

                <circle
                  cx="300"
                  cy="250"
                  r="112"
                />
              </svg>

              <div
                className={
                  `${styles.systemNode} ${styles.nodeServices}`
                }
              >
                <span>
                  01
                </span>

                <strong>
                  Services
                </strong>
              </div>

              <div
                className={
                  `${styles.systemNode} ${styles.nodeTraining}`
                }
              >
                <span>
                  02
                </span>

                <strong>
                  Training
                </strong>
              </div>

              <div
                className={
                  `${styles.systemNode} ${styles.nodeCommunity}`
                }
              >
                <span>
                  03
                </span>

                <strong>
                  Community
                </strong>
              </div>

              <div
                className={
                  `${styles.systemNode} ${styles.nodeKnowledge}`
                }
              >
                <span>
                  04
                </span>

                <strong>
                  Knowledge
                </strong>
              </div>

              <div
                className={
                  styles.systemCore
                }
              >
                <span>
                  NO
                </span>

                <strong>
                  BREACH
                </strong>

                <small>
                  OFFENSIVE
                  <br />
                  SECURITY
                </small>
              </div>
            </div>

            <div
              className={
                styles.visualFooter
              }
            >
              <span>
                SERVICES
              </span>

              <span>
                EDUCATION
              </span>

              <span>
                COMMUNITY
              </span>
            </div>
          </div>
        </div>

        <div
          className={
            styles.heroFacts
          }
        >
          {
            companyFacts.map(
              (
                fact
              ) => (
                <div
                  className={
                    styles.heroFact
                  }
                  key={
                    fact.label
                  }
                >
                  <span>
                    {
                      fact.label
                    }
                  </span>

                  <strong>
                    {
                      fact.value
                    }
                  </strong>
                </div>
              )
            )
          }
        </div>
      </section>


      <nav
        className={
          styles.sectionNavigation
        }
        aria-label="Company page sections"
      >
        <div
          className={
            styles.sectionNavigationInner
          }
        >
          <span
            className={
              styles.sectionNavigationLabel
            }
          >
            COMPANY
          </span>

          <div
            className={
              styles.sectionNavigationLinks
            }
          >
            <a
              href="#who-we-are"
            >
              Who we are
            </a>

            <a
              href="#what-we-do"
            >
              What we do
            </a>

            <a
              href="#principles"
            >
              Principles
            </a>

            <a
              href="#ecosystem"
            >
              Ecosystem
            </a>

            <a
              href="#timeline"
            >
              Timeline
            </a>
          </div>
        </div>
      </nav>


      <section
        id="who-we-are"
        className={
          `${styles.section} ${styles.whoSection}`
        }
        data-company-section="who-we-are"
      >
        <div
          className={
            styles.sectionFrame
          }
        >
          <div
            className={
              styles.sectionRail
            }
          >
            <span>
              01
            </span>

            <p>
              Who we are
            </p>
          </div>

          <div
            className={
              styles.whoContent
            }
          >
            <p
              className={
                styles.sectionEyebrow
              }
            >
              NO BREACH / COMPANY
            </p>

            <h2
              className={
                styles.displayHeading
              }
            >
              A cybersecurity organization
              built from offensive security.
            </h2>

            <div
              className={
                styles.whoCopyGrid
              }
            >
              <p
                className={
                  styles.leadCopy
                }
              >
                The common thread across No Breach is practical
                security: understand how systems can fail,
                exercise that knowledge and use it to improve
                security capability.
              </p>

              <p
                className={
                  styles.bodyCopy
                }
              >
                The organization connects security services,
                hands-on education, technical knowledge and
                community initiatives without treating them as
                isolated activities. Each part strengthens the
                others.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section
        className={
          `${styles.section} ${styles.storySection}`
        }
        data-company-section="story"
      >
        <div
          className={
            styles.sectionFrame
          }
        >
          <div
            className={
              styles.sectionRail
            }
          >
            <span>
              02
            </span>

            <p>
              Story
            </p>
          </div>

          <div
            className={
              styles.storyContent
            }
          >
            <div
              className={
                styles.storyStatement
              }
            >
              <span>
                FROM PRACTICE
              </span>

              <strong>
                Security becomes more useful
                when testing, learning and
                sharing reinforce each other.
              </strong>
            </div>

            <div
              className={
                styles.storyNarrative
              }
            >
              <p>
                No Breach began with an offensive-security
                foundation and expanded into a broader
                cybersecurity ecosystem.
              </p>

              <p>
                Security services apply attack thinking to real
                systems. Training turns that thinking into
                repeatable technical capability. Community and
                knowledge initiatives create space for the same
                mindset to be exercised and shared.
              </p>

              <div
                className={
                  styles.storySignal
                }
              >
                <span>
                  CORE IDEA
                </span>

                <p>
                  Understand the system.
                  Test the assumptions.
                  Share what improves it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
        id="what-we-do"
        className={
          `${styles.section} ${styles.workSection}`
        }
        data-company-section="what-we-do"
      >
        <div
          className={
            styles.sectionFrame
          }
        >
          <div
            className={
              styles.sectionRail
            }
          >
            <span>
              03
            </span>

            <p>
              What we do
            </p>
          </div>

          <div
            className={
              styles.workContent
            }
          >
            <div
              className={
                styles.sectionHeader
              }
            >
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                OPERATING AREAS
              </p>

              <h2>
                One security mindset,
                expressed through different forms of work.
              </h2>
            </div>

            <div
              className={
                styles.disciplineList
              }
            >
              {
                disciplines.map(
                  (
                    discipline
                  ) => (
                    <Link
                      href={
                        discipline.href
                      }
                      className={
                        styles.discipline
                      }
                      key={
                        discipline.index
                      }
                    >
                      <div
                        className={
                          styles.disciplineIndex
                        }
                      >
                        {
                          discipline.index
                        }
                      </div>

                      <div
                        className={
                          styles.disciplineTitle
                        }
                      >
                        <span>
                          {
                            discipline.eyebrow
                          }
                        </span>

                        <h3>
                          {
                            discipline.title
                          }
                        </h3>
                      </div>

                      <p
                        className={
                          styles.disciplineDescription
                        }
                      >
                        {
                          discipline.description
                        }
                      </p>

                      <div
                        className={
                          styles.disciplineAction
                        }
                      >
                        {
                          discipline.action
                        }

                        <Arrow />
                      </div>
                    </Link>
                  )
                )
              }
            </div>
          </div>
        </div>
      </section>


      <section
        id="principles"
        className={
          `${styles.section} ${styles.principlesSection}`
        }
        data-company-section="principles"
      >
        <div
          className={
            styles.sectionFrame
          }
        >
          <div
            className={
              styles.sectionRail
            }
          >
            <span>
              04
            </span>

            <p>
              Principles
            </p>
          </div>

          <div
            className={
              styles.principlesContent
            }
          >
            <div
              className={
                styles.sectionHeader
              }
            >
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                HOW WE THINK
              </p>

              <h2>
                Three principles shape the ecosystem.
              </h2>
            </div>

            <div
              className={
                styles.principlesGrid
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
                      key={
                        principle.index
                      }
                    >
                      <div
                        className={
                          styles.principleTop
                        }
                      >
                        <span>
                          {
                            principle.index
                          }
                        </span>

                        <span
                          className={
                            styles.principleMark
                          }
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </div>

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
        </div>
      </section>


      <section
        id="ecosystem"
        className={
          `${styles.section} ${styles.ecosystemSection}`
        }
        data-company-section="ecosystem"
      >
        <div
          className={
            styles.sectionFrame
          }
        >
          <div
            className={
              styles.sectionRail
            }
          >
            <span>
              05
            </span>

            <p>
              Ecosystem
            </p>
          </div>

          <div
            className={
              styles.ecosystemContent
            }
          >
            <div
              className={
                styles.sectionHeader
              }
            >
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                COMPANY ECOSYSTEM
              </p>

              <h2>
                Separate initiatives.
                Connected by one technical foundation.
              </h2>
            </div>

            <div
              className={
                styles.ecosystemMap
              }
              data-ui="company-ecosystem-map"
            >
              <div
                className={
                  styles.ecosystemLines
                }
                aria-hidden="true"
              />

              {
                ecosystem.map(
                  (
                    item,
                    index
                  ) => (
                    <Link
                      href={
                        item.href
                      }
                      className={
                        `${styles.ecosystemNode} ${styles[`ecosystemNode${index + 1}`]}`
                      }
                      key={
                        item.index
                      }
                    >
                      <span>
                        {
                          item.index
                        }
                      </span>

                      <small>
                        {
                          item.label
                        }
                      </small>

                      <strong>
                        {
                          item.title
                        }
                      </strong>

                      <Arrow />
                    </Link>
                  )
                )
              }

              <div
                className={
                  styles.ecosystemCore
                }
              >
                <span>
                  NO BREACH
                </span>

                <strong>
                  Offensive
                  <br />
                  Security
                </strong>

                <small>
                  CORE
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
        id="timeline"
        className={
          `${styles.section} ${styles.timelineSection}`
        }
        data-company-section="timeline"
      >
        <div
          className={
            styles.sectionFrame
          }
        >
          <div
            className={
              styles.sectionRail
            }
          >
            <span>
              06
            </span>

            <p>
              Timeline
            </p>
          </div>

          <div
            className={
              styles.timelineContent
            }
          >
            <div
              className={
                styles.sectionHeader
              }
            >
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                COMPANY DEVELOPMENT
              </p>

              <h2>
                Building the ecosystem over time.
              </h2>
            </div>

            <ol
              className={
                styles.timeline
              }
            >
              {
                timeline.map(
                  (
                    milestone,
                    index
                  ) => (
                    <li
                      className={
                        styles.timelineItem
                      }
                      key={
                        `${milestone.year}-${milestone.title}`
                      }
                    >
                      <div
                        className={
                          styles.timelineMarker
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
                      </div>

                      <div
                        className={
                          styles.timelineYear
                        }
                      >
                        {
                          milestone.year
                        }
                      </div>

                      <h3>
                        {
                          milestone.title
                        }
                      </h3>

                      <p>
                        {
                          milestone.description
                        }
                      </p>
                    </li>
                  )
                )
              }
            </ol>
          </div>
        </div>
      </section>


      <section
        className={
          `${styles.section} ${styles.founderSection}`
        }
        data-company-section="founder"
      >
        <div
          className={
            styles.sectionFrame
          }
        >
          <div
            className={
              styles.sectionRail
            }
          >
            <span>
              07
            </span>

            <p>
              Founder
            </p>
          </div>

          <div
            className={
              styles.founderPanel
            }
          >
            <div
              className={
                styles.founderVisual
              }
              aria-hidden="true"
            >
              <div
                className={
                  styles.founderVisualMeta
                }
              >
                <span>
                  NB
                </span>

                <span>
                  FOUNDER
                </span>
              </div>

              <div
                className={
                  styles.founderMonogram
                }
              >
                NB
              </div>

              <div
                className={
                  styles.founderVisualFooter
                }
              >
                OFFENSIVE SECURITY
                <br />
                TRAINING / COMMUNITY
              </div>
            </div>

            <div
              className={
                styles.founderCopy
              }
            >
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                FOUNDER
              </p>

              <h2>
                Nouha Ben Brahim
              </h2>

              <p
                className={
                  styles.founderLead
                }
              >
                Founder of No Breach and cybersecurity
                professional focused on offensive security,
                training and community development.
              </p>

              <p
                className={
                  styles.bodyCopy
                }
              >
                The founder profile brings together the
                professional journey, security focus, teaching,
                mentorship and selected public activity behind
                No Breach.
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
          </div>
        </div>
      </section>


      <section
        className={
          `${styles.section} ${styles.teamSection}`
        }
        data-company-section="team"
      >
        <div
          className={
            styles.sectionFrame
          }
        >
          <div
            className={
              styles.sectionRail
            }
          >
            <span>
              08
            </span>

            <p>
              Team
            </p>
          </div>

          <div
            className={
              styles.teamPanel
            }
          >
            <div
              className={
                styles.teamHeading
              }
            >
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                PEOPLE / PROJECTS
              </p>

              <h2>
                The people behind the work.
              </h2>
            </div>

            <div
              className={
                styles.teamCopy
              }
            >
              <p>
                Explore the current team and the people represented
                through No Breach’s public company profiles.
              </p>

              <div
                className={
                  styles.teamActions
                }
              >
                <Link
                  href="/company/team"
                  className={
                    styles.textAction
                  }
                >
                  Meet the team

                  <Arrow />
                </Link>

                <Link
                  href="/company/internships"
                  className={
                    styles.textAction
                  }
                >
                  Explore internship projects

                  <Arrow />
                </Link>
              </div>
            </div>

            <div
              className={
                styles.teamGraphic
              }
              aria-hidden="true"
            >
              <span>
                NB
              </span>

              <span>
                SECURITY
              </span>

              <span>
                TRAINING
              </span>

              <span>
                COMMUNITY
              </span>
            </div>
          </div>
        </div>
      </section>


      <section
        className={
          styles.ctaSection
        }
        data-company-section="cta"
      >
        <div
          className={
            styles.ctaInner
          }
        >
          <div
            className={
              styles.ctaMeta
            }
          >
            <span>
              NEXT
            </span>

            <span>
              09 / CONNECT
            </span>
          </div>

          <h2>
            Need to examine a system
            from the perspective of an attacker?
          </h2>

          <div
            className={
              styles.ctaBottom
            }
          >
            <p>
              Explore No Breach security services or start
              a conversation about your security needs.
            </p>

            <div
              className={
                styles.ctaActions
              }
            >
              <Link
                href="/services"
                className={
                  styles.primaryAction
                }
              >
                Explore services

                <Arrow />
              </Link>

              <Link
                href="/contact"
                className={
                  styles.secondaryAction
                }
              >
                Contact No Breach

                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
