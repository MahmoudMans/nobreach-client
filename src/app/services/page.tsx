import type {
  Metadata,
} from "next";

import Link from "next/link";

import {
  Container,
} from "@/components/layout/container";

import styles from "./services.module.css";


export const metadata:
  Metadata = {

  title:
    "Cybersecurity Services | No Breach",

  description:
    "Security consulting, web penetration testing, API security, infrastructure security and cybersecurity training from No Breach.",
};


const services = [
  {
    index:
      "01",

    label:
      "Application Security",

    title:
      "Web Penetration Testing",

    description:
      "A thorough, methodical assessment of web applications to identify and validate security weaknesses before they can be exploited.",

    href:
      "/services/web-application-pentesting",
  },
  {
    index:
      "02",

    label:
      "Application Security",

    title:
      "API Security",

    description:
      "Security testing focused on application interfaces, access boundaries and the behavior exposed through APIs.",

    href:
      "/services/api-security",
  },
  {
    index:
      "03",

    label:
      "Infrastructure",

    title:
      "Infrastructure Security",

    description:
      "Security assessment and guidance for infrastructure exposure, configuration and the systems supporting business operations.",

    href:
      "/services/infrastructure-security",
  },
  {
    index:
      "04",

    label:
      "Education",

    title:
      "Cybersecurity Training",

    description:
      "Practical, modern training designed to build real, applicable skills for both teams and individuals.",

    href:
      "/services/security-training",
  },
] as const;


const consultingFocus = [
  "Security architecture reviews",
  "Secure workflows and infrastructure guidance",
  "Internal process hardening (access control, data handling, etc.)",
] as const;


const pentestFocus = [
  "In-depth testing of web applications and APIs",
  "Business logic and authentication flaw identification",
  "Manual verification of critical vulnerabilities",
  "Clear reporting with technical and executive summaries",
] as const;


export default function ServicesPage() {

  return (
    <div
      className={
        styles.page
      }
      data-services-design="authority-v10"
    >

      <section
        className={
          styles.hero
        }
      >
        <Container size="wide">

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
                  styles.eyebrow
                }
              >
                SERVICES / NO BREACH
              </p>


              <h1>
                See the system from the attacker.
              </h1>


              <p
                className={
                  styles.heroLead
                }
              >
                Securing your company shouldn&apos;t be complicated —
                we&apos;re here to make it straightforward, effective,
                and stress-free.
              </p>


              <div
                className={
                  styles.heroActions
                }
              >

                <Link
                  className={
                    styles.primaryAction
                  }
                  href="/contact"
                >
                  Book a consultation

                  <span
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </Link>


                <a
                  className={
                    styles.secondaryAction
                  }
                  href="#services"
                >
                  Explore services

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
                styles.heroAside
              }
              aria-label="No Breach service approach"
            >

              <div
                className={
                  styles.heroAsideHeader
                }
              >
                <span>
                  APPROACH
                </span>

                <span>
                  NB / 01
                </span>
              </div>


              <p>
                Whether you already have a strategy in place or are
                starting from scratch, we&apos;re ready to help.
              </p>


              <div
                className={
                  styles.signalRail
                }
                aria-hidden="true"
              >
                <span />

                <span />

                <span />
              </div>


              <dl
                className={
                  styles.heroMeta
                }
              >
                <div>
                  <dt>
                    Focus
                  </dt>

                  <dd>
                    Security Consulting
                  </dd>
                </div>

                <div>
                  <dt>
                    Method
                  </dt>

                  <dd>
                    Manual + practical
                  </dd>
                </div>

                <div>
                  <dt>
                    Outcome
                  </dt>

                  <dd>
                    Clear, actionable guidance
                  </dd>
                </div>
              </dl>

            </div>

          </div>

        </Container>
      </section>


      <section
        className={
          styles.consulting
        }
        data-services-section="consulting"
      >
        <Container size="wide">

          <div
            className={
              styles.sectionRule
            }
          />


          <div
            className={
              styles.consultingLayout
            }
          >

            <div
              className={
                styles.sectionIntro
              }
            >

              <p
                className={
                  styles.eyebrow
                }
              >
                01 / SECURITY CONSULTING
              </p>


              <h2>
                Helping companies understand how to protect themselves.
              </h2>

            </div>


            <div
              className={
                styles.consultingBody
              }
            >

              <p
                className={
                  styles.largeCopy
                }
              >
                Helping companies understand how to protect themselves —
                from internal practices to external exposure.
              </p>


              <div
                className={
                  styles.focusList
                }
              >

                <p
                  className={
                    styles.focusLabel
                  }
                >
                  Our focus areas
                </p>


                <ol>
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
                        </li>
                      )
                    )
                  }
                </ol>

              </div>

            </div>

          </div>

        </Container>
      </section>


      <section
        id="services"
        className={
          styles.portfolio
        }
        data-services-section="portfolio"
      >
        <Container size="wide">

          <header
            className={
              styles.sectionHeader
            }
          >

            <div>

              <p
                className={
                  styles.eyebrow
                }
              >
                02 / WHAT WE OFFER
              </p>


              <h2>
                Security work built around real systems and real needs.
              </h2>

            </div>


            <p>
              No one-size-fits-all solution. Choose the service area
              that matches the problem you need to understand.
            </p>

          </header>


          <div
            className={
              styles.serviceRows
            }
          >
            {
              services.map(
                (
                  service
                ) => (
                  <Link
                    className={
                      styles.serviceRow
                    }
                    data-service-row
                    href={
                      service.href
                    }
                    key={
                      service.index
                    }
                  >

                    <span
                      className={
                        styles.serviceIndex
                      }
                    >
                      {
                        service.index
                      }
                    </span>


                    <span
                      className={
                        styles.serviceLabel
                      }
                    >
                      {
                        service.label
                      }
                    </span>


                    <strong>
                      {
                        service.title
                      }
                    </strong>


                    <p>
                      {
                        service.description
                      }
                    </p>


                    <span
                      className={
                        styles.serviceArrow
                      }
                      aria-hidden="true"
                    >
                      ↗
                    </span>

                  </Link>
                )
              )
            }
          </div>

        </Container>
      </section>


      <section
        className={
          styles.pentest
        }
        data-services-section="web-penetration-testing"
      >
        <Container size="wide">

          <div
            className={
              styles.sectionRule
            }
          />


          <div
            className={
              styles.pentestLayout
            }
          >

            <div
              className={
                styles.pentestHeading
              }
            >

              <p
                className={
                  styles.eyebrow
                }
              >
                03 / WEB PENETRATION TESTING
              </p>


              <h2>
                Validate weaknesses before they can be exploited.
              </h2>


              <Link
                className={
                  styles.inlineLink
                }
                href="/services/web-application-pentesting"
              >
                Explore web penetration testing

                <span
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

            </div>


            <div
              className={
                styles.pentestContent
              }
            >

              <p
                className={
                  styles.largeCopy
                }
              >
                A thorough, methodical assessment of your web
                applications to identify and validate security
                weaknesses before they can be exploited. We go beyond
                automated scans to simulate real-world attack scenarios
                and deliver detailed, actionable results.
              </p>


              <div
                className={
                  styles.methodRail
                }
                aria-hidden="true"
              >
                <span>
                  MANUAL
                </span>

                <i />

                <span>
                  VALIDATE
                </span>

                <i />

                <span>
                  REPORT
                </span>
              </div>


              <div
                className={
                  styles.focusList
                }
              >

                <p
                  className={
                    styles.focusLabel
                  }
                >
                  Our focus areas
                </p>


                <ol>
                  {
                    pentestFocus.map(
                      (
                        item,
                        index
                      ) => (
                        <li
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
                        </li>
                      )
                    )
                  }
                </ol>

              </div>

            </div>

          </div>

        </Container>
      </section>


      <section
        className={
          styles.training
        }
        data-services-section="training"
      >
        <Container size="wide">

          <div
            className={
              styles.trainingLayout
            }
          >

            <div
              className={
                styles.trainingIndex
              }
              aria-hidden="true"
            >
              04
            </div>


            <div
              className={
                styles.trainingCopy
              }
            >

              <p
                className={
                  styles.eyebrow
                }
              >
                CYBERSECURITY TRAINING
              </p>


              <h2>
                Practical skills for teams and individuals.
              </h2>


              <p>
                Practical, modern training designed to build real,
                applicable skills for both teams and individuals.
              </p>

            </div>


            <div
              className={
                styles.trainingActions
              }
            >

              <Link
                className={
                  styles.inlineLink
                }
                href="/training"
              >
                Explore training

                <span
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>


              <Link
                className={
                  styles.inlineLink
                }
                href="/services/security-training"
              >
                Security training service

                <span
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

            </div>

          </div>

        </Container>
      </section>


      <section
        className={
          styles.consultation
        }
        data-services-section="consultation"
      >
        <Container size="wide">

          <div
            className={
              styles.consultationLayout
            }
          >

            <p
              className={
                styles.eyebrow
              }
            >
              START A CONVERSATION
            </p>


            <h2>
              Unsure how it works?
            </h2>


            <p>
              Book a consultation today and let us guide you.
            </p>


            <Link
              className={
                styles.consultationAction
              }
              href="/contact"
            >
              Book a consultation

              <span
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>

          </div>

        </Container>
      </section>

    </div>
  );
}
