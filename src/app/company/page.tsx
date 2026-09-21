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
    "No Breach is a Tunisia-based cybersecurity company focused on offensive security, hands-on education and community."
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
      "Ecosystem",

    value:
      "Services · Education · Community"
  }
];


const work = [
  {
    index:
      "01",

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

    title:
      "Training Hub",

    description:
      "Hands-on cybersecurity learning through practice.",

    href:
      "/training"
  },

  {
    index:
      "03",

    title:
      "CR4CKOUT",

    description:
      "Technical challenge, experimentation and community.",

    href:
      "/cr4ckout"
  },

  {
    index:
      "04",

    title:
      "Knowledge",

    description:
      "Security insights, activities and shared experience.",

    href:
      "/insights"
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
      "Exercise security knowledge rather than keeping it theoretical."
  },

  {
    index:
      "03",

    title:
      "Share knowledge",

    description:
      "Education and community strengthen security capability."
  }
];


const ecosystem = [
  {
    label:
      "Services",

    href:
      "/services"
  },

  {
    label:
      "Training",

    href:
      "/training"
  },

  {
    label:
      "CR4CKOUT",

    href:
      "/cr4ckout"
  },

  {
    label:
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

      <span>
        /
      </span>

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
      data-company-page="v3"
    >
      <section
        className={
          styles.hero
        }
        data-company-section="hero"
      >
        <div
          className={
            styles.heroInner
          }
        >
          <div
            className={
              styles.heroMain
            }
            data-company-ui="hero-main"
          >
            <div
              className={
                styles.kicker
              }
            >
              NO BREACH / TUNISIA
            </div>

            <h1>
              Security, education
              <span>
                and community.
              </span>

              <em>
                One offensive mindset.
              </em>
            </h1>

            <p
              className={
                styles.heroIntro
              }
            >
              A cybersecurity organization built from offensive security,
              connecting practical services, training and community.
            </p>

            <div
              className={
                styles.heroActions
              }
            >
              <Link
                href="/services"
                className={
                  styles.primaryLink
                }
              >
                Explore services

                <Arrow />
              </Link>

              <Link
                href="/company/founder"
                className={
                  styles.secondaryLink
                }
              >
                Founder

                <Arrow />
              </Link>
            </div>
          </div>

          <aside
            className={
              styles.identity
            }
            data-company-ui="identity"
          >
            <div
              className={
                styles.identityTop
              }
            >
              <span>
                NB
              </span>

              <small>
                COMPANY
              </small>
            </div>

            <div
              className={
                styles.factList
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
                        styles.fact
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
          </aside>
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
            href="#work"
          >
            Work
          </a>

          <a
            href="#principles"
          >
            Principles
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
              styles.companyIntro
            }
          >
            <h2>
              A cybersecurity organization
              built from offensive security.
            </h2>

            <p>
              No Breach combines security services,
              hands-on education and community initiatives
              around practical attack thinking.
            </p>
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
              styles.storyGrid
            }
          >
            <h2>
              Test.
              <br />
              Learn.
              <br />
              Share.
            </h2>

            <p>
              The same offensive-security foundation connects
              client work, technical learning and community activity.
            </p>
          </div>
        </div>
      </section>


      <section
        id="work"
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
          <SectionLabel
            index="03"
            label="What we do"
          />

          <div
            className={
              styles.sectionHeading
            }
          >
            <h2>
              Four expressions
              of one security mindset.
            </h2>
          </div>

          <div
            className={
              styles.workList
            }
            data-company-ui="work-list"
          >
            {
              work.map(
                (
                  item
                ) => (
                  <Link
                    href={
                      item.href
                    }
                    className={
                      styles.workRow
                    }
                    key={
                      item.index
                    }
                  >
                    <span
                      className={
                        styles.workIndex
                      }
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

                    <Arrow />
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
          styles.section
        }
        data-company-section="principles"
      >
        <div
          className={
            styles.container
          }
        >
          <SectionLabel
            index="04"
            label="Principles"
          />

          <div
            className={
              styles.principles
            }
            data-company-ui="principles"
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
                    <span>
                      {
                        principle.index
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
      </section>


      <section
        className={
          `${styles.section} ${styles.ecosystemSection}`
        }
        data-company-section="ecosystem"
      >
        <div
          className={
            styles.container
          }
        >
          <SectionLabel
            index="05"
            label="Ecosystem"
          />

          <div
            className={
              styles.ecosystemHeader
            }
          >
            <h2>
              Connected by one
              technical foundation.
            </h2>
          </div>

          <div
            className={
              styles.ecosystemLinks
            }
            data-company-ui="ecosystem-links"
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
                    key={
                      item.label
                    }
                  >
                    <span>
                      {
                        item.label
                      }
                    </span>

                    <Arrow />
                  </Link>
                )
              )
            }
          </div>
        </div>
      </section>


      <section
        id="timeline"
        className={
          styles.section
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

          <ol
            className={
              styles.timeline
            }
            data-company-ui="timeline"
          >
            {
              timeline.map(
                (
                  item,
                  index
                ) => (
                  <li
                    key={
                      `${item.year}-${item.title}`
                    }
                  >
                    <span
                      className={
                        styles.timelineIndex
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
                  </li>
                )
              )
            }
          </ol>
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
              styles.founder
            }
          >
            <div
              className={
                styles.monogram
              }
              aria-hidden="true"
            >
              NB
            </div>

            <div
              className={
                styles.founderCopy
              }
            >
              <span>
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
                  styles.inlineLink
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
            label="People"
          />

          <div
            className={
              styles.peopleRow
            }
          >
            <div>
              <h2>
                People and projects
                behind the work.
              </h2>
            </div>

            <div
              className={
                styles.peopleLinks
              }
            >
              <Link
                href="/company/team"
              >
                Team

                <Arrow />
              </Link>

              <Link
                href="/company/internships"
              >
                Internship projects

                <Arrow />
              </Link>
            </div>
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
            styles.ctaInner
          }
        >
          <SectionLabel
            index="09"
            label="Connect"
          />

          <div
            className={
              styles.ctaContent
            }
          >
            <h2>
              Work with No Breach.
            </h2>

            <p>
              Examine your systems from an attacker’s perspective.
            </p>

            <div
              className={
                styles.ctaActions
              }
            >
              <Link
                href="/services"
                className={
                  styles.primaryLink
                }
              >
                Explore services

                <Arrow />
              </Link>

              <Link
                href="/contact"
                className={
                  styles.secondaryLink
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
