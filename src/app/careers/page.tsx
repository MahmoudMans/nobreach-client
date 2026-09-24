import Link from "next/link";

import {
  Breadcrumbs
} from "@/components/navigation/breadcrumbs";

import {
  Container
} from "@/components/layout/container";

import {
  siteConfig
} from "@/content/site";

import {
  createMetadata
} from "@/lib/seo";

import styles from "./careers.module.css";


export const metadata =
  createMetadata({

    title:
      "Careers | No Breach",

    description:
      "Employment, internship and freelance collaboration opportunities published by No Breach.",

    path:
      "/careers"
  });


const opportunityCategories = [
  {
    number:
      "01",

    code:
      "EMP",

    title:
      "Employment",

    description:
      "Employment opportunities will appear here when a position is formally published."
  },
  {
    number:
      "02",

    code:
      "INT",

    title:
      "Internships",

    description:
      "Internship opportunities will appear here when a program or placement is formally published."
  },
  {
    number:
      "03",

    code:
      "COL",

    title:
      "Freelance collaboration",

    description:
      "Freelance collaboration opportunities will appear here when a defined need is formally published."
  }
] as const;


const publishedOpenings:
  readonly never[] = [];


const workDestinations = [
  {
    number:
      "01",

    code:
      "LAB",

    title:
      "Internship Projects",

    description:
      "See selected applied-security projects developed through No Breach internships.",

    href:
      "/company/internships"
  },
  {
    number:
      "02",

    code:
      "EDU",

    title:
      "Training Hub",

    description:
      "Explore practical cybersecurity learning and technical training.",

    href:
      "/training"
  },
  {
    number:
      "03",

    code:
      "R&D",

    title:
      "Technical Insights",

    description:
      "Read the technical thinking and security research published by No Breach.",

    href:
      "/insights"
  }
] as const;


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


export default function CareersPage() {

  return (
    <div
      className={
        styles.page
      }
      data-careers-design="v22"
      data-careers-opening-count={
        publishedOpenings.length
      }
    >
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
              "Careers"
          }
        ]}
      />


      {/* ================================================================
          HERO
         ================================================================ */}

      <section
        className={
          styles.hero
        }
        data-careers-section="hero"
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
            <span>
              No Breach / Careers
            </span>

            <span>
              Opportunity index
            </span>
          </div>

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
                Careers · Internships · Collaboration
              </p>

              <h1>
                Opportunities
                <span>
                  published only when they are real.
                </span>
              </h1>

              <p
                className={
                  styles.heroLead
                }
              >
                This page is the public status board for employment, internship and freelance collaboration opportunities at No Breach.
              </p>

              <div
                className={
                  styles.heroActions
                }
              >
                <a
                  href="#opportunities"
                  className={
                    styles.primaryAction
                  }
                >
                  View opportunity status

                  <span
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </a>

                <a
                  href={
                    siteConfig.linkedin
                  }
                  target="_blank"
                  rel="noreferrer"
                  className={
                    styles.textAction
                  }
                >
                  Follow No Breach

                  <Arrow />
                </a>
              </div>
            </div>

            <aside
              className={
                styles.statusSystem
              }
              aria-label="Current opportunity status"
            >
              <div
                className={
                  styles.statusHeader
                }
              >
                <span>
                  Current status
                </span>

                <span>
                  Updated public index
                </span>
              </div>

              <div
                className={
                  styles.statusCount
                }
              >
                <strong>
                  00
                </strong>

                <div>
                  <span>
                    Published
                  </span>

                  <span>
                    openings
                  </span>
                </div>
              </div>

              <div
                className={
                  styles.statusLines
                }
              >
                {
                  opportunityCategories.map(
                    (
                      category
                    ) => (
                      <div
                        key={
                          category.code
                        }
                      >
                        <span>
                          {
                            category.code
                          }
                        </span>

                        <strong>
                          {
                            category.title
                          }
                        </strong>

                        <i
                          aria-hidden="true"
                        />

                        <small>
                          No published opening
                        </small>
                      </div>
                    )
                  )
                }
              </div>
            </aside>
          </div>

          <div
            className={
              styles.heroFooter
            }
          >
            <span>
              Employment
            </span>

            <i
              aria-hidden="true"
            />

            <span>
              Internships
            </span>

            <i
              aria-hidden="true"
            />

            <span>
              Freelance collaboration
            </span>
          </div>
        </Container>
      </section>


      {/* ================================================================
          01 — OPPORTUNITY INDEX
         ================================================================ */}

      <section
        id="opportunities"
        className={
          styles.section
        }
        data-careers-section="opportunities"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="01"
            eyebrow="Opportunity index"
            title="Three paths. One truthful public status."
            description="No role is presented as open unless No Breach has actually published that opportunity."
          />

          <div
            className={
              styles.emptyState
            }
            data-careers-empty-state
          >
            <div
              className={
                styles.emptySignal
              }
              aria-hidden="true"
            >
              <span />

              <span />
            </div>

            <div>
              <p>
                Current availability
              </p>

              <strong>
                There are currently no published openings.
              </strong>
            </div>
          </div>

          <div
            className={
              styles.opportunityIndex
            }
            data-careers-opportunity-index
          >
            {
              opportunityCategories.map(
                (
                  category
                ) => (
                  <div
                    className={
                      styles.opportunityRow
                    }
                    data-careers-category={
                      category.code
                    }
                    key={
                      category.code
                    }
                  >
                    <span
                      className={
                        styles.opportunityNumber
                      }
                    >
                      {
                        category.number
                      }
                    </span>

                    <span
                      className={
                        styles.opportunityCode
                      }
                    >
                      {
                        category.code
                      }
                    </span>

                    <div
                      className={
                        styles.opportunityCopy
                      }
                    >
                      <h3>
                        {
                          category.title
                        }
                      </h3>

                      <p>
                        {
                          category.description
                        }
                      </p>
                    </div>

                    <div
                      className={
                        styles.opportunityStatus
                      }
                    >
                      <i
                        aria-hidden="true"
                      />

                      <span>
                        No published opening
                      </span>
                    </div>
                  </div>
                )
              )
            }
          </div>

          <p
            className={
              styles.statusNote
            }
          >
            Opportunities appear here only after they are formally published.
          </p>
        </Container>
      </section>


      {/* ================================================================
          02 — UNDERSTAND THE WORK
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.sectionAlt}`
        }
        data-careers-section="explore"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="02"
            eyebrow="Understand the work"
            title="Explore the technical ecosystem before the next opportunity appears."
            description="The public site already shows the kind of security work, learning and technical thinking developed across No Breach."
          />

          <nav
            className={
              styles.workIndex
            }
            aria-label="Explore No Breach work"
          >
            {
              workDestinations.map(
                (
                  destination
                ) => (
                  <Link
                    href={
                      destination.href
                    }
                    className={
                      styles.workRow
                    }
                    key={
                      destination.number
                    }
                  >
                    <span
                      className={
                        styles.workNumber
                      }
                    >
                      {
                        destination.number
                      }
                    </span>

                    <span
                      className={
                        styles.workCode
                      }
                    >
                      {
                        destination.code
                      }
                    </span>

                    <div>
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
          </nav>
        </Container>
      </section>


      {/* ================================================================
          FOLLOW CTA
         ================================================================ */}

      <section
        className={
          styles.cta
        }
        data-careers-section="follow"
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

                Future opportunities
              </p>

              <h2>
                Follow No Breach for future opportunities.
              </h2>
            </div>

            <div
              className={
                styles.ctaCopy
              }
            >
              <p>
                New employment, internship and freelance collaboration opportunities will be published through official No Breach channels when available.
              </p>

              <a
                href={
                  siteConfig.linkedin
                }
                target="_blank"
                rel="noreferrer"
                className={
                  styles.primaryAction
                }
              >
                Follow on LinkedIn

                <Arrow />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );

}
