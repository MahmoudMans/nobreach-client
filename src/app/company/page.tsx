import Image from "next/image";

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
    "No Breach brings together offensive security, hands-on cybersecurity education and community initiatives."
};


const facts = [
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
      "Model",

    value:
      "Services · Education · Community"
  }
];


const capabilities = [
  {
    index:
      "01",

    code:
      "SEC",

    title:
      "Security Services",

    description:
      "Web, API and infrastructure security testing.",

    href:
      "/services"
  },

  {
    index:
      "02",

    code:
      "LAB",

    title:
      "Training Hub",

    description:
      "Practical cybersecurity learning through hands-on work.",

    href:
      "/training"
  },

  {
    index:
      "03",

    code:
      "CTF",

    title:
      "CR4CKOUT",

    description:
      "Challenge, experimentation and community.",

    href:
      "/cr4ckout"
  },

  {
    index:
      "04",

    code:
      "R&D",

    title:
      "Knowledge",

    description:
      "Technical insights and shared security experience.",

    href:
      "/insights"
  }
];


const principles = [
  {
    index:
      "01",

    code:
      "ATTACK",

    title:
      "Think offensively",

    description:
      "Understand systems from an attacker’s perspective."
  },

  {
    index:
      "02",

    code:
      "BUILD",

    title:
      "Build through practice",

    description:
      "Exercise security knowledge rather than keeping it theoretical."
  },

  {
    index:
      "03",

    code:
      "SHARE",

    title:
      "Share knowledge",

    description:
      "Education and community strengthen security capability."
  }
];


const ecosystem = [
  {
    index:
      "01",

    label:
      "Services",

    code:
      "SEC",

    href:
      "/services"
  },

  {
    index:
      "02",

    label:
      "Training",

    code:
      "LAB",

    href:
      "/training"
  },

  {
    index:
      "03",

    label:
      "CR4CKOUT",

    code:
      "CTF",

    href:
      "/cr4ckout"
  },

  {
    index:
      "04",

    label:
      "Insights",

    code:
      "R&D",

    href:
      "/insights"
  }
];


const timeline = [
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
      "Today",

    title:
      "Building"
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
        styles.sectionLabel
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


export default function CompanyPage() {

  return (
    <div
      className={
        styles.page
      }
      data-company-page="v4"
      data-company-design="v7"
    >
      <section
        className={
          styles.hero
        }
        data-company-section="hero"
        data-company-hero="v6"
      >
        <div
          className={
            styles.heroInner
          }
        >
          <div
            className={
              styles.heroCopy
            }
            data-company-ui="hero-copy"
          >
            <div
              className={
                styles.kicker
              }
            >
              <span />

              NO BREACH / TUNISIA
            </div>

            <h1>
              Offensive security
              <span>
                beyond the assessment.
              </span>
            </h1>

            <p>
              Security services, practical education
              and community — connected by one
              offensive mindset.
            </p>

            <div
              className={
                styles.heroActions
              }
            >
              <Link
                href="/services"
                className={
                  styles.primaryButton
                }
              >
                Explore services

                <Arrow />
              </Link>

              <Link
                href="/company/founder"
                className={
                  styles.secondaryButton
                }
              >
                Founder

                <Arrow />
              </Link>
            </div>
          </div>


          <div
            className={
              styles.profileCard
            }
            data-company-ui="profile-card"
          >
            <div
              className={
                styles.profileHeader
              }
            >
              <div
                className={
                  styles.profileLogo
                }
              >
                NB
              </div>

              <div>
                <span>
                  COMPANY PROFILE
                </span>

                <small>
                  OFFENSIVE SECURITY
                </small>
              </div>
            </div>

            <div
              className={
                styles.profileSignal
              }
              aria-hidden="true"
            >
              <span />

              <span />

              <span />

              <span />

              <span />
            </div>

            <div
              className={
                styles.factGrid
              }
              data-company-ui="facts"
            >
              {
                facts.map(
                  (
                    fact
                  ) => (
                    <div
                      className={
                        styles.factCard
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

          </div>
        </div>
      </section>


      <nav
        className={
          styles.pageNav
        }
        aria-label="Company sections"
      >
        <div
          className={
            styles.pageNavInner
          }
        >
          <a
            href="#company"
          >
            Company
          </a>

          <a
            href="#capabilities"
          >
            Capabilities
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

          <a
            href="#people"
          >
            People
          </a>
        </div>
      </nav>


      <section
        id="company"
        className={
          styles.section
        }
        data-company-section="who-we-are"
      >
        <div
          className={
            styles.container
          }
        >
          <SectionLabel
            index="01"
            label="Company"
          />

          <div
            className={
              styles.introGrid
            }
          >
            <div
              className={
                styles.statementCard
              }
              data-company-card="statement"
            >
              <span
                className={
                  styles.cardCode
                }
              >
                NB / 01
              </span>

              <h2>
                A cybersecurity organization
                built from offensive security.
              </h2>

              <p>
                No Breach connects technical security,
                practical learning and community.
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
            styles.container
          }
        >
          <SectionLabel
            index="02"
            label="Approach"
          />

          <div
            className={
              styles.flow
            }
            data-company-ui="approach-flow"
          >
            <article>
              <span>
                01
              </span>

              <strong>
                Test
              </strong>

              <p>
                Examine real attack surfaces.
              </p>
            </article>

            <div
              className={
                styles.flowArrow
              }
              aria-hidden="true"
            >
              →
            </div>

            <article>
              <span>
                02
              </span>

              <strong>
                Learn
              </strong>

              <p>
                Turn practice into capability.
              </p>
            </article>

            <div
              className={
                styles.flowArrow
              }
              aria-hidden="true"
            >
              →
            </div>

            <article>
              <span>
                03
              </span>

              <strong>
                Share
              </strong>

              <p>
                Strengthen the wider ecosystem.
              </p>
            </article>
          </div>
        </div>
      </section>


      <section
        id="capabilities"
        className={
          styles.section
        }
        data-company-section="what-we-do"
      >
        <div
          className={
            styles.container
          }
        >
          <div
            className={
              styles.sectionHeader
            }
          >
            <SectionLabel
              index="03"
              label="What we do"
            />

            <h2>
              Four parts.
              <span>
                One security foundation.
              </span>
            </h2>
          </div>

          <div
            className={
              styles.capabilityGrid
            }
            data-company-ui="capability-grid"
          >
            {
              capabilities.map(
                (
                  item
                ) => (
                  <Link
                    href={
                      item.href
                    }
                    className={
                      styles.capabilityCard
                    }
                    data-company-card="capability"
                    key={
                      item.index
                    }
                  >
                    <div
                      className={
                        styles.capabilityTop
                      }
                    >
                      <span
                        className={
                          styles.capabilityIndex
                        }
                      >
                        {
                          item.index
                        }
                      </span>

                      <span
                        className={
                          styles.capabilityCode
                        }
                      >
                        {
                          item.code
                        }
                      </span>
                    </div>

                    <div
                      className={
                        styles.capabilityVisual
                      }
                      aria-hidden="true"
                    >
                      <span />

                      <span />

                      <span />

                      <i />
                    </div>

                    <div
                      className={
                        styles.capabilityCopy
                      }
                    >
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

                    <div
                      className={
                        styles.cardArrow
                      }
                    >
                      <Arrow />
                    </div>
                  </Link>
                )
              )
            }
          </div>
        </div>
      </section>


      <section
        id="principles"
        className={
          `${styles.section} ${styles.principleSection}`
        }
        data-company-section="principles"
      >
        <div
          className={
            styles.container
          }
        >
          <div
            className={
              styles.sectionHeader
            }
          >
            <SectionLabel
              index="04"
              label="Principles"
            />

            <h2>
              How we think.
            </h2>
          </div>

          <div
            className={
              styles.principleGrid
            }
            data-company-ui="principle-grid"
          >
            {
              principles.map(
                (
                  principle
                ) => (
                  <article
                    className={
                      styles.principleCard
                    }
                    data-company-card="principle"
                    key={
                      principle.index
                    }
                  >
                    <div
                      className={
                        styles.principleVisual
                      }
                      aria-hidden="true"
                    >
                      <span>
                        {
                          principle.code
                        }
                      </span>

                      <i />

                      <i />
                    </div>

                    <div
                      className={
                        styles.principleNumber
                      }
                    >
                      {
                        principle.index
                      }
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
      </section>


      <section
        id="ecosystem"
        className={
          styles.section
        }
        data-company-section="ecosystem"
      >
        <div
          className={
            styles.container
          }
        >
          <div
            className={
              styles.sectionHeader
            }
          >
            <SectionLabel
              index="05"
              label="Ecosystem"
            />

            <h2>
              Connected.
              <span>
                Not isolated.
              </span>
            </h2>
          </div>

          <div
            className={
              styles.ecosystemGrid
            }
            data-company-ui="ecosystem-grid"
          >
            {
              ecosystem.map(
                (
                  item
                ) => (
                  <Link
                    href={
                      item.href
                    }
                    className={
                      styles.ecosystemCard
                    }
                    data-company-card="ecosystem"
                    key={
                      item.index
                    }
                  >
                    <span
                      className={
                        styles.ecosystemIndex
                      }
                    >
                      {
                        item.index
                      }
                    </span>

                    <div
                      className={
                        styles.ecosystemIcon
                      }
                      aria-hidden="true"
                    >
                      {
                        item.code
                      }
                    </div>

                    <strong>
                      {
                        item.label
                      }
                    </strong>

                    <Arrow />
                  </Link>
                )
                )
              }
          </div>

          <div
            className={
              styles.ecosystemLine
            }
            aria-hidden="true"
          >
            <span />

            <strong>
              NO BREACH
            </strong>

            <span />
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
            styles.container
          }
        >
          <SectionLabel
            index="06"
            label="Timeline"
          />

          <div
            className={
              styles.timelineGrid
            }
            data-company-ui="timeline-grid"
          >
            {
              timeline.map(
                (
                  item,
                  index
                ) => (
                  <article
                    className={
                      styles.timelineCard
                    }
                    data-company-card="timeline"
                    key={
                      `${item.year}-${item.title}`
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
                        styles.timelineDot
                      }
                      aria-hidden="true"
                    />

                    <strong>
                      {
                        item.year
                      }
                    </strong>

                    <p>
                      {
                        item.title
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
        id="people"
        className={
          styles.section
        }
        data-company-section="founder"
      >
        <div
          className={
            styles.container
          }
        >
          <SectionLabel
            index="07"
            label="Founder"
          />

          <div
            className={
              styles.founderCard
            }
            data-company-card="founder"
          >
            <div
              className={
                styles.founderVisual
              }
              aria-hidden="true"
            >

               <Image
                 src="/people/ceo.png"
                 alt=""
                 fill
                 sizes="(max-width: 768px) calc(100vw - 2rem), 420px"
                 className={
                   styles.founderVisualPhoto
                 }
                 data-founder-photo-image="company"
               />

               <div
                 className={
                   styles.founderVisualPhotoShade
                 }
                 data-founder-photo-shade="company"
               />



              <div
                className={
                  styles.founderGrid
                }
              />

              <span>
                FOUNDER
              </span>
            </div>

            <div
              className={
                styles.founderContent
              }
            >
              <span
                className={
                  styles.founderEyebrow
                }
              >
                FOUNDER OF NO BREACH
              </span>

              <h2>
                Nouha Ben Brahim
              </h2>

              <p>
                Cybersecurity professional focused on offensive security,
                training and community development.
              </p>

              <Link
                href="/company/founder"
                className={
                  styles.inlineAction
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
          `${styles.section} ${styles.peopleSection}`
        }
        data-company-section="team"
      >
        <div
          className={
            styles.container
          }
        >
          <SectionLabel
            index="08"
            label="People & projects"
          />

          <div
            className={
              styles.peopleGrid
            }
            data-company-ui="people-grid"
          >
            <Link
              href="/company/team"
              className={
                styles.peopleCard
              }
              data-company-card="people"
            >
              <div
                className={
                  styles.peopleVisual
                }
                aria-hidden="true"
              >
                <span>
                  TEAM
                </span>

                <div />

                <div />

                <div />
              </div>

              <div>
                <span>
                  COMPANY
                </span>

                <h3>
                  Team
                </h3>

                <p>
                  People behind the work.
                </p>
              </div>

              <Arrow />
            </Link>

            <Link
              href="/company/internships"
              className={
                styles.peopleCard
              }
              data-company-card="people"
            >
              <div
                className={
                  `${styles.peopleVisual} ${styles.projectVisual}`
                }
                aria-hidden="true"
              >
                <span>
                  LAB
                </span>

                <div />

                <div />

                <div />
              </div>

              <div>
                <span>
                  PROJECTS
                </span>

                <h3>
                  Internship work
                </h3>

                <p>
                  Applied security projects.
                </p>
              </div>

              <Arrow />
            </Link>
          </div>
        </div>
      </section>


      <section
        className={
          styles.cta
        }
        data-company-section="cta"
      >
        <div
          className={
            styles.ctaCard
          }
          data-company-card="cta"
        >
          <div
            className={
              styles.ctaVisual
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
              styles.ctaContent
            }
          >
            <SectionLabel
              index="09"
              label="Connect"
            />

            <h2>
              Work with
              <span>
                No Breach.
              </span>
            </h2>

            <p>
              Examine systems from an attacker’s perspective.
            </p>

            <div
              className={
                styles.ctaActions
              }
            >
              <Link
                href="/services"
                className={
                  styles.primaryButton
                }
              >
                Explore services

                <Arrow />
              </Link>

              <Link
                href="/contact"
                className={
                  styles.secondaryButton
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
