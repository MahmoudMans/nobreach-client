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
      "Infrastructure security assessment covering external exposure, internal attack surface, network services, configuration, privilege paths, segmentation, credentials and reporting.",

    path:
      "/services/infrastructure-security"
  });


const externalSurface = [
  {
    number:
      "01",

    code:
      "EXT",

    title:
      "External exposure",

    description:
      "Review the infrastructure and services reachable from outside the intended trust boundary."
  },
  {
    number:
      "02",

    code:
      "NET",

    title:
      "Network services",

    description:
      "Examine exposed network services and the infrastructure context around those services."
  },
  {
    number:
      "03",

    code:
      "CFG",

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

    code:
      "INT",

    title:
      "Internal attack surface",

    description:
      "Understand reachable systems and infrastructure relationships inside the authorized assessment scope."
  },
  {
    number:
      "02",

    code:
      "PRIV",

    title:
      "Privilege paths",

    description:
      "Review paths where infrastructure relationships or access could lead toward higher privilege."
  },
  {
    number:
      "03",

    code:
      "SEG",

    title:
      "Segmentation",

    description:
      "Review whether network and infrastructure boundaries separate systems as intended."
  },
  {
    number:
      "04",

    code:
      "CREDS",

    title:
      "Credentials",

    description:
      "Review credential-related exposure and the infrastructure boundaries connected to authenticated access."
  }
] as const;


const reportingAreas = [
  {
    number:
      "01",

    label:
      "External",

    value:
      "External exposure"
  },
  {
    number:
      "02",

    label:
      "Internal",

    value:
      "Internal attack surface"
  },
  {
    number:
      "03",

    label:
      "Services",

    value:
      "Network services"
  },
  {
    number:
      "04",

    label:
      "Configuration",

    value:
      "Configuration review"
  },
  {
    number:
      "05",

    label:
      "Privilege",

    value:
      "Privilege paths"
  },
  {
    number:
      "06",

    label:
      "Boundaries",

    value:
      "Segmentation"
  },
  {
    number:
      "07",

    label:
      "Access",

    value:
      "Credentials"
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


export default function InfrastructureSecurityPage() {

  return (
    <div
      className={
        styles.page
      }
      data-infrastructure-design="v24"
    >



      {/* ================================================================
          HERO
         ================================================================ */}

      <section
        className={
          styles.hero
        }
        data-infrastructure-section="hero"
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
              No Breach / Infrastructure Security
            </span>

            <span>
              Exposure Graph
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
                Exposure · Services · Paths · Boundaries
              </p>

              <h1>
                Infrastructure risk starts with
                <span>
                  what is reachable.
                </span>
              </h1>

              <p
                className={
                  styles.heroLead
                }
              >
                Security assessment and guidance focused on infrastructure exposure, configuration and the systems supporting business operations.
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
                    styles.textAction
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

            <div
              className={
                styles.exposureGraph
              }
              data-infrastructure-ui="exposure-graph"
              aria-label="Infrastructure exposure model"
            >
              <div
                className={
                  styles.graphHeader
                }
              >
                <span>
                  Exposure path
                </span>

                <span>
                  NB / INFRA
                </span>
              </div>

              <div
                className={
                  styles.graphBody
                }
              >
                <div
                  className={
                    `${styles.graphNode} ${styles.graphNodeExternal}`
                  }
                >
                  <span>
                    01
                  </span>

                  <strong>
                    INTERNET
                  </strong>
                </div>

                <div
                  className={
                    styles.graphConnector
                  }
                  aria-hidden="true"
                >
                  <i />

                  <span>
                    ↓
                  </span>
                </div>

                <div
                  className={
                    styles.graphNode
                  }
                >
                  <span>
                    02
                  </span>

                  <strong>
                    EDGE
                  </strong>
                </div>

                <div
                  className={
                    styles.graphConnector
                  }
                  aria-hidden="true"
                >
                  <i />

                  <span>
                    ↓
                  </span>
                </div>

                <div
                  className={
                    styles.graphNode
                  }
                >
                  <span>
                    03
                  </span>

                  <strong>
                    SERVICES
                  </strong>
                </div>

                <div
                  className={
                    styles.graphConnector
                  }
                  aria-hidden="true"
                >
                  <i />

                  <span>
                    ↓
                  </span>
                </div>

                <div
                  className={
                    styles.graphNode
                  }
                >
                  <span>
                    04
                  </span>

                  <strong>
                    INTERNAL
                  </strong>
                </div>

                <div
                  className={
                    styles.graphConnector
                  }
                  aria-hidden="true"
                >
                  <i />

                  <span>
                    ↓
                  </span>
                </div>

                <div
                  className={
                    `${styles.graphNode} ${styles.graphNodePrivilege}`
                  }
                >
                  <span>
                    05
                  </span>

                  <strong>
                    PRIVILEGE
                  </strong>
                </div>
              </div>

              <div
                className={
                  styles.graphLegend
                }
              >
                <div>
                  <span>
                    Surface
                  </span>

                  <strong>
                    Exposure
                  </strong>
                </div>

                <div>
                  <span>
                    Control
                  </span>

                  <strong>
                    Segmentation
                  </strong>
                </div>

                <div>
                  <span>
                    Access
                  </span>

                  <strong>
                    Credentials
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              styles.heroFooter
            }
          >
            <span>
              EXTERNAL
            </span>

            <i />

            <span>
              SERVICES
            </span>

            <i />

            <span>
              INTERNAL
            </span>

            <i />

            <span>
              PRIVILEGE
            </span>

            <i />

            <span>
              REPORTING
            </span>
          </div>
        </Container>
      </section>


      {/* ================================================================
          01 — EXTERNAL SURFACE
         ================================================================ */}

      <section
        id="external-surface"
        className={
          styles.section
        }
        data-infrastructure-section="external-surface"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="01"
            eyebrow="External surface"
            title="Start with the infrastructure an attacker can reach."
            description="The first view focuses on external exposure, reachable network services and the configuration that shapes that visible surface."
          />

          <div
            className={
              styles.externalLayout
            }
          >
            <div
              className={
                styles.surfaceSignal
              }
              aria-hidden="true"
            >
              <div
                className={
                  styles.signalHeader
                }
              >
                <span>
                  EXTERNAL / SURFACE
                </span>

                <span>
                  03 LAYERS
                </span>
              </div>

              <div
                className={
                  styles.radar
                }
              >
                <span />

                <span />

                <span />

                <i />

                <strong>
                  NB
                </strong>
              </div>

              <div
                className={
                  styles.signalFooter
                }
              >
                <span>
                  Reachability
                </span>

                <span>
                  Configuration
                </span>
              </div>
            </div>

            <div
              className={
                styles.externalIndex
              }
              data-infrastructure-ui="external-index"
            >
              {
                externalSurface.map(
                  (
                    item
                  ) => (
                    <div
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
                      >
                        {
                          item.number
                        }
                      </span>

                      <span
                        className={
                          styles.rowCode
                        }
                      >
                        {
                          item.code
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
                    </div>
                  )
                )
              }
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          02 — INTERNAL PATHS
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.sectionAlt}`
        }
        data-infrastructure-section="internal-paths"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="02"
            eyebrow="Internal paths"
            title="Exposure matters more when it creates a path."
            description="Inside the authorized scope, the review considers internal attack surface, privilege relationships, segmentation and credential-related boundaries."
          />

          <div
            className={
              styles.pathSystem
            }
            data-infrastructure-ui="path-system"
          >
            <div
              className={
                styles.pathAxis
              }
              aria-hidden="true"
            >
              <span>
                ACCESS
              </span>

              <i />

              <span>
                MOVEMENT
              </span>

              <i />

              <span>
                BOUNDARY
              </span>

              <i />

              <span>
                PRIVILEGE
              </span>
            </div>

            <div
              className={
                styles.pathRows
              }
            >
              {
                internalPaths.map(
                  (
                    item
                  ) => (
                    <div
                      className={
                        styles.pathRow
                      }
                      data-infrastructure-path
                      key={
                        item.number
                      }
                    >
                      <span
                        className={
                          styles.pathNumber
                        }
                      >
                        {
                          item.number
                        }
                      </span>

                      <span
                        className={
                          styles.pathCode
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

                      <span
                        className={
                          styles.pathMarker
                        }
                        aria-hidden="true"
                      >
                        ●
                      </span>
                    </div>
                  )
                )
              }
            </div>
          </div>

          <div
            className={
              styles.boundaryStatement
            }
          >
            <span>
              BOUNDARY
            </span>

            <p>
              The infrastructure view connects exposure, access and segmentation rather than treating each system as an isolated finding.
            </p>
          </div>
        </Container>
      </section>


      {/* ================================================================
          03 — REPORTING
         ================================================================ */}

      <section
        className={
          styles.section
        }
        data-infrastructure-section="reporting"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="03"
            eyebrow="Reporting"
            title="Keep infrastructure findings connected to their system context."
            description="Reporting brings the reviewed infrastructure areas together into one technical record rather than presenting disconnected observations."
          />

          <div
            className={
              styles.reportingLayout
            }
          >
            <div
              className={
                styles.reportingIntro
              }
            >
              <p
                className={
                  styles.reportingLabel
                }
              >
                Infrastructure record
              </p>

              <h3>
                From exposure to a report engineering teams can reason about.
              </h3>

              <p>
                The reporting layer keeps the assessed surface, network context, boundaries and access relationships visible alongside the technical observations.
              </p>
            </div>

            <div
              className={
                styles.reportingRegister
              }
              data-infrastructure-ui="reporting-register"
            >
              {
                reportingAreas.map(
                  (
                    area
                  ) => (
                    <div
                      className={
                        styles.reportingRow
                      }
                      key={
                        area.number
                      }
                    >
                      <span>
                        {
                          area.number
                        }
                      </span>

                      <small>
                        {
                          area.label
                        }
                      </small>

                      <strong>
                        {
                          area.value
                        }
                      </strong>

                      <i
                        aria-hidden="true"
                      />
                    </div>
                  )
                )
              }

              <div
                className={
                  `${styles.reportingRow} ${styles.reportingFinal}`
                }
              >
                <span>
                  08
                </span>

                <small>
                  Output
                </small>

                <strong>
                  Reporting
                </strong>

                <i
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div
            className={
              styles.reportingFooter
            }
          >
            <div>
              <span>
                01
              </span>

              <strong>
                Surface
              </strong>
            </div>

            <i />

            <div>
              <span>
                02
              </span>

              <strong>
                Context
              </strong>
            </div>

            <i />

            <div>
              <span>
                03
              </span>

              <strong>
                Paths
              </strong>
            </div>

            <i />

            <div>
              <span>
                04
              </span>

              <strong>
                Boundaries
              </strong>
            </div>

            <i />

            <div>
              <span>
                05
              </span>

              <strong>
                Report
              </strong>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          CTA
         ================================================================ */}

      <section
        className={
          styles.cta
        }
        data-infrastructure-section="cta"
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
                  INFRA
                </span>

                Assessment
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
                Discuss the infrastructure scope, exposed services and security boundaries you want to review.
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
                  All services

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
