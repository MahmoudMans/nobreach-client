import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import {
  createMetadata
} from "@/lib/seo";

import styles from "./services.module.css";


export const metadata =
  createMetadata({

    title:
      "Cybersecurity Services | No Breach",

    description:
      "Security consulting, web penetration testing, API security, infrastructure security and cybersecurity training from No Breach.",

    path:
      "/services"

  });


const serviceAreas = [
  {
    number:
      "01",

    category:
      "Application security",

    title:
      "Web Penetration Testing",

    description:
      "Assess web applications to identify and validate security weaknesses.",

    href:
      "/services/web-application-pentesting",

    action:
      "View web testing service"
  },
  {
    number:
      "02",

    category:
      "Interface security",

    title:
      "API Security",

    description:
      "Test application interfaces, access boundaries and behavior exposed through APIs.",

    href:
      "/services/api-security",

    action:
      "View API security service"
  },
  {
    number:
      "03",

    category:
      "Infrastructure",

    title:
      "Infrastructure Security",

    description:
      "Assess infrastructure exposure, configuration and the systems supporting business operations.",

    href:
      "/services/infrastructure-security",

    action:
      "View infrastructure service"
  },
  {
    number:
      "04",

    category:
      "Training",

    title:
      "Cybersecurity Training",

    description:
      "Practical cybersecurity training designed to build applicable skills for teams and individuals.",

    href:
      "/services/security-training",

    action:
      "View training service",

    secondaryAction:
      {
        href:
          "/training",

        label:
          "Explore training programs"
      }
  }
] as const;


const consultingFocus = [
  "Security architecture reviews",
  "Secure workflows and infrastructure guidance",
  "Internal process hardening, including access control and data handling"
] as const;


const webAssessmentFocus = [
  {
    number:
      "01",

    label:
      "Coverage",

    text:
      "In-depth testing of web applications and APIs."
  },
  {
    number:
      "02",

    label:
      "Application behavior",

    text:
      "Business logic and authentication flaw identification."
  },
  {
    number:
      "03",

    label:
      "Verification",

    text:
      "Manual verification of critical vulnerabilities."
  },
  {
    number:
      "04",

    label:
      "Reporting",

    text:
      "Clear reporting with technical and executive summaries."
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


export default function ServicesPage() {

  return (
    <div
      className={
        styles.page
      }
      data-services-design="authority-v10"
      data-services-audit="v11"
    >
      <section
        className={
          styles.hero
        }
        data-services-section="introduction"
      >
        <Container
          size="wide"
        >
          <div
            className={
              styles.heroInner
            }
          >
            <p
              className={
                styles.eyebrow
              }
            >
              Services / No Breach
            </p>


            <h1
              className={
                styles.heroTitle
              }
            >
              See the system from an attacker’s perspective.
            </h1>


            <p
              className={
                styles.heroLead
              }
            >
              Security consulting, web and API testing, infrastructure assessment, and practical cybersecurity training—with an emphasis on manual investigation and actionable guidance.
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
                Discuss your needs

                <Arrow />
              </Link>


              <Link
                href="#services"
                className={
                  styles.secondaryAction
                }
              >
                Explore services

                <span
                  aria-hidden="true"
                >
                  ↓
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>


      <section
        id="services"
        className={
          styles.directory
        }
        data-services-section="directory"
      >
        <Container
          size="wide"
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
              Service directory
            </p>


            <h2>
              Choose a service area.
            </h2>


            <p>
              Explore web, API and infrastructure assessments, or cybersecurity training.
            </p>
          </div>


          <ol
            className={
              styles.serviceList
            }
            aria-label="No Breach service areas"
          >
            {
              serviceAreas.map(
                (
                  service
                ) => (
                  <li
                    key={
                      service.href
                    }
                    className={
                      styles.serviceRow
                    }
                    data-service-row
                    data-service-title={
                      service.title
                    }
                  >
                    <span
                      className={
                        styles.serviceNumber
                      }
                      aria-hidden="true"
                    >
                      {
                        service.number
                      }
                    </span>


                    <div
                      className={
                        styles.serviceBody
                      }
                    >
                      <div
                        className={
                          styles.serviceIdentity
                        }
                      >
                        <p
                          className={
                            styles.serviceCategory
                          }
                        >
                          {
                            service.category
                          }
                        </p>


                        <h3>
                          {
                            service.title
                          }
                        </h3>
                      </div>


                      <div
                        className={
                          styles.serviceDetail
                        }
                      >
                        <p
                          className={
                            styles.serviceDescription
                          }
                        >
                          {
                            service.description
                          }
                        </p>


                        <div
                          className={
                            styles.serviceActions
                          }
                        >
                          <Link
                            href={
                              service.href
                            }
                            className={
                              styles.serviceAction
                            }
                          >
                            {
                              service.action
                            }

                            <Arrow />
                          </Link>


                          {
                            "secondaryAction"
                            in
                            service
                              ? (
                                <Link
                                  href={
                                    service
                                      .secondaryAction
                                      .href
                                  }
                                  className={
                                    styles.serviceSecondaryAction
                                  }
                                >
                                  {
                                    service
                                      .secondaryAction
                                      .label
                                  }

                                  <Arrow />
                                </Link>
                              )
                              : null
                          }
                        </div>
                      </div>
                    </div>
                  </li>
                )
              )
            }
          </ol>


          <Link
            href="#consulting"
            className={
              styles.consultingJump
            }
          >
            Need broader guidance? Explore security consulting

            <span
              aria-hidden="true"
            >
              ↓
            </span>
          </Link>
        </Container>
      </section>


      <section
        id="consulting"
        className={
          `${styles.supportingSection} ${styles.consulting}`
        }
        data-services-section="consulting"
      >
        <Container
          size="wide"
        >
          <div
            className={
              styles.splitSection
            }
          >
            <div
              className={
                styles.splitIntro
              }
            >
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                Security consulting
              </p>


              <h2>
                Security consulting for architecture, workflows and internal practices.
              </h2>


              <p>
                Review an existing security approach or develop one, with guidance that connects internal practices and external exposure.
              </p>
            </div>


            <ul
              className={
                styles.focusList
              }
              aria-label="Security consulting focus areas"
            >
              {
                consultingFocus.map(
                  (
                    item,
                    index
                  ) => (
                    <li
                      key={
                        item
                      }
                    >
                      <span
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

                      <p>
                        {
                          item
                        }
                      </p>
                    </li>
                  )
                )
              }
            </ul>
          </div>
        </Container>
      </section>


      <section
        className={
          `${styles.supportingSection} ${styles.featured}`
        }
        data-services-section="featured-web"
      >
        <Container
          size="wide"
        >
          <div
            className={
              styles.featuredLayout
            }
          >
            <div
              className={
                styles.featuredIntro
              }
            >
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                Featured assessment
              </p>


              <h2>
                Web application testing in practice.
              </h2>


              <p>
                Manual investigation of realistic attack scenarios.
              </p>


              <Link
                href="/services/web-application-pentesting"
                className={
                  styles.inlineAction
                }
              >
                Explore web penetration testing

                <Arrow />
              </Link>
            </div>


            <ol
              className={
                styles.assessmentList
              }
              aria-label="Featured web assessment focus"
            >
              {
                webAssessmentFocus.map(
                  (
                    item
                  ) => (
                    <li
                      key={
                        item.number
                      }
                    >
                      <span
                        className={
                          styles.assessmentNumber
                        }
                        aria-hidden="true"
                      >
                        {
                          item.number
                        }
                      </span>


                      <div>
                        <p
                          className={
                            styles.assessmentLabel
                          }
                        >
                          {
                            item.label
                          }
                        </p>


                        <p
                          className={
                            styles.assessmentText
                          }
                        >
                          {
                            item.text
                          }
                        </p>
                      </div>
                    </li>
                  )
                )
              }
            </ol>
          </div>
        </Container>
      </section>


      <section
        className={
          styles.consultation
        }
        data-services-section="consultation"
      >
        <Container
          size="wide"
        >
          <div
            className={
              styles.consultationInner
            }
          >
            <p
              className={
                styles.sectionEyebrow
              }
            >
              Start a conversation
            </p>


            <h2>
              Discuss your security needs.
            </h2>


            <p>
              Discuss the application, API, infrastructure or training requirement you want to explore.
            </p>


            <Link
              href="/contact"
              className={
                styles.primaryAction
              }
            >
              Discuss your needs

              <Arrow />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );

}
