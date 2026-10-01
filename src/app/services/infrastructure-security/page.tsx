import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import {
  createMetadata
} from "@/lib/seo";

import styles from "./infrastructure-security.module.css";


export const metadata =
  createMetadata({

    title:
      "Infrastructure Security | No Breach",

    description:
      "Infrastructure security assessment covering external exposure, internal attack surface, network services, configuration, privilege paths, segmentation, credentials and contextual technical reporting.",

    path:
      "/services/infrastructure-security"
  });


const exposurePath = [
  "Internet",
  "Edge",
  "Services",
  "Internal",
  "Privilege"
] as const;


const externalSurface = [
  {
    number:
      "01",

    title:
      "External exposure",

    description:
      "Review the infrastructure and services reachable from outside the intended trust boundary."
  },
  {
    number:
      "02",

    title:
      "Network services",

    description:
      "Examine exposed network services and the infrastructure context around those services."
  },
  {
    number:
      "03",

    title:
      "Configuration review",

    description:
      "Review relevant security configuration and how it shapes the infrastructure attack surface."
  }
] as const;


const internalPaths = [
  {
    number:
      "01",

    title:
      "Internal attack surface",

    description:
      "Understand reachable systems and infrastructure relationships inside the authorized assessment scope."
  },
  {
    number:
      "02",

    title:
      "Privilege paths",

    description:
      "Review paths where infrastructure relationships or access could lead toward higher privilege."
  },
  {
    number:
      "03",

    title:
      "Segmentation",

    description:
      "Review whether network and infrastructure boundaries separate systems as intended."
  },
  {
    number:
      "04",

    title:
      "Credentials",

    description:
      "Review credential-related exposure and the infrastructure boundaries connected to authenticated access."
  }
] as const;


const technicalRecord = [
  {
    title:
      "Assessed surface",

    description:
      "The infrastructure and network services reviewed within the assessment scope."
  },
  {
    title:
      "System context",

    description:
      "Relevant configuration, boundaries and access relationships."
  },
  {
    title:
      "Technical observations",

    description:
      "Findings presented alongside the infrastructure context to which they relate."
  }
] as const;


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


export default function InfrastructureSecurityPage() {

  return (
    <div
      className={
        styles.page
      }
      data-infrastructure-design="v24"
      data-infrastructure-audit="v25"
    >
      {/* ================================================================
          INTRODUCTION
         ================================================================ */}

      <section
        className={
          styles.hero
        }
        data-infrastructure-section="hero"
      >
        <Container>
          <div
            className={
              styles.frame
            }
            data-infrastructure-frame="hero"
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
                  Infrastructure Security
                </p>


                <h1>
                  Infrastructure risk starts with what is reachable.
                </h1>


                <p
                  className={
                    styles.heroLead
                  }
                >
                  Security assessment and guidance focused on infrastructure
                  exposure, configuration and the systems supporting business
                  operations.
                </p>


                <div
                  className={
                    styles.heroActions
                  }
                >
                  <Link
                    href="/contact"
                    className={
                      styles.primaryAction
                    }
                  >
                    Discuss an assessment

                    <Arrow />
                  </Link>


                  <a
                    href="#external-surface"
                    className={
                      styles.secondaryAction
                    }
                  >
                    Explore the surface

                    <span
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  </a>
                </div>
              </div>


              <figure
                className={
                  styles.exposureFigure
                }
                data-infrastructure-ui="exposure-path"
                aria-labelledby="exposure-path-title"
              >
                <figcaption
                  id="exposure-path-title"
                  className={
                    styles.figureHeading
                  }
                >
                  Illustrative exposure path
                </figcaption>


                <ol
                  className={
                    styles.exposureNodes
                  }
                >
                  {
                    exposurePath.map(
                      (
                        label,
                        index
                      ) => (
                        <li
                          key={
                            label
                          }
                        >
                          <span
                            className={
                              styles.nodeIndex
                            }
                            aria-hidden="true"
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
                              styles.nodeLabel
                            }
                          >
                            {
                              label
                            }
                          </span>
                        </li>
                      )
                    )
                  }
                </ol>


                <p
                  className={
                    styles.figureCaption
                  }
                >
                  Illustrative path. Actual relationships and assessment
                  coverage depend on the authorized scope.
                </p>
              </figure>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          EXTERNAL SURFACE
         ================================================================ */}

      <section
        id="external-surface"
        className={
          styles.section
        }
        data-infrastructure-section="external-surface"
      >
        <Container>
          <div
            className={
              `${styles.frame} ${styles.externalLayout}`
            }
            data-infrastructure-frame="external-surface"
          >
            <SectionHeading
              eyebrow="01 · External Surface"
              title="Start with the infrastructure an attacker can reach."
              description="The first view focuses on external exposure, reachable network services and the configuration that shapes that visible surface."
            />


            <div
              className={
                styles.externalList
              }
              data-infrastructure-ui="external-list"
            >
              {
                externalSurface.map(
                  (
                    item
                  ) => (
                    <article
                      className={
                        styles.externalRow
                      }
                      data-infrastructure-external
                      key={
                        item.number
                      }
                    >
                      <span
                        className={
                          styles.rowNumber
                        }
                        aria-hidden="true"
                      >
                        {
                          item.number
                        }
                      </span>


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
          </div>
        </Container>
      </section>


      {/* ================================================================
          INTERNAL PATHS
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.internalSection}`
        }
        data-infrastructure-section="internal-paths"
      >
        <Container>
          <div
            className={
              styles.frame
            }
            data-infrastructure-frame="internal-paths"
          >
            <SectionHeading
              eyebrow="02 · Internal Paths"
              title="Exposure matters more when it creates a path."
              description="Inside the authorized scope, the review considers internal attack surface, privilege relationships, segmentation and credential-related boundaries. Exposure, access and segmentation are considered together."
            />


            <div
              className={
                styles.internalList
              }
              data-infrastructure-ui="internal-list"
            >
              {
                internalPaths.map(
                  (
                    item
                  ) => (
                    <article
                      className={
                        styles.internalRow
                      }
                      data-infrastructure-internal
                      key={
                        item.number
                      }
                    >
                      <span
                        className={
                          styles.rowNumber
                        }
                        aria-hidden="true"
                      >
                        {
                          item.number
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
          REPORTING
         ================================================================ */}

      <section
        className={
          styles.section
        }
        data-infrastructure-section="reporting"
      >
        <Container>
          <div
            className={
              `${styles.frame} ${styles.reportingLayout}`
            }
            data-infrastructure-frame="reporting"
          >
            <SectionHeading
              eyebrow="03 · Reporting"
              title="Keep infrastructure findings connected to their system context."
              description="Reporting brings the reviewed infrastructure areas together into one technical record rather than presenting disconnected observations."
            />


            <div
              className={
                styles.record
              }
              data-infrastructure-ui="technical-record"
            >
              <h3>
                Inside the technical record
              </h3>


              <dl
                className={
                  styles.recordList
                }
              >
                {
                  technicalRecord.map(
                    (
                      item
                    ) => (
                      <div
                        data-infrastructure-record
                        key={
                          item.title
                        }
                      >
                        <dt>
                          {
                            item.title
                          }
                        </dt>


                        <dd>
                          {
                            item.description
                          }
                        </dd>
                      </div>
                    )
                  )
                }
              </dl>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          ASSESSMENT DISCUSSION
         ================================================================ */}

      <section
        className={
          styles.cta
        }
        data-infrastructure-section="cta"
      >
        <Container>
          <div
            className={
              `${styles.frame} ${styles.ctaLayout}`
            }
            data-infrastructure-frame="cta"
          >
            <div>
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                Infrastructure assessment
              </p>


              <h2>
                Understand what is exposed and where it can lead.
              </h2>
            </div>


            <div
              className={
                styles.ctaCopy
              }
            >
              <p>
                Discuss the infrastructure scope, exposed services and
                security boundaries you want to review.
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
                  Discuss an assessment

                  <Arrow />
                </Link>


                <Link
                  href="/services"
                  className={
                    styles.textAction
                  }
                >
                  View all services

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
