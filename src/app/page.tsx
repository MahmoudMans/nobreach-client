import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import styles from "./home.module.css";


const services = [
  {
    index:
      "01",

    eyebrow:
      "Application",

    title:
      "Web Application Security",

    description:
      "Assess authentication, authorization, business logic and the application attack surface.",

    href:
      "/services/web-application-pentesting"
  },
  {
    index:
      "02",

    eyebrow:
      "Interfaces",

    title:
      "API Security",

    description:
      "Examine object access, tokens, GraphQL, authorization boundaries and exposed data.",

    href:
      "/services/api-security"
  },
  {
    index:
      "03",

    eyebrow:
      "Infrastructure",

    title:
      "Infrastructure Security",

    description:
      "Review exposed services, credentials, privilege paths, network configuration and segmentation.",

    href:
      "/services/infrastructure-security"
  },
  {
    index:
      "04",

    eyebrow:
      "Capability",

    title:
      "Security Training",

    description:
      "Practical security education built around labs, technical reasoning and hands-on exercises.",

    href:
      "/services/security-training"
  }
] as const;


const ecosystem = [
  {
    index:
      "01",

    label:
      "Founder",

    title:
      "Nouha Ben Brahim",

    description:
      "Founder profile, public security work, speaking and writing.",

    href:
      "/company/founder",

    size:
      "large"
  },
  {
    index:
      "02",

    label:
      "Education",

    title:
      "Training Hub",

    description:
      "Hands-on programs for practical cybersecurity development.",

    href:
      "/training",

    size:
      "standard"
  },
  {
    index:
      "03",

    label:
      "Community",

    title:
      "CR4CKOUT",

    description:
      "Security community activity, workshops and CTF culture.",

    href:
      "/cr4ckout",

    size:
      "standard"
  },
  {
    index:
      "04",

    label:
      "Applied work",

    title:
      "Internship Projects",

    description:
      "Technical labs and security projects developed through the internship program.",

    href:
      "/company/internships",

    size:
      "wide"
  },
  {
    index:
      "05",

    label:
      "Public record",

    title:
      "Activities & LinkedIn",

    description:
      "Events, workshops, speaking and verified public LinkedIn activity.",

    href:
      "/activities",

    size:
      "standard"
  },
  {
    index:
      "06",

    label:
      "Research",

    title:
      "Technical Insights",

    description:
      "Original security writing focused on real technical problems.",

    href:
      "/insights",

    size:
      "standard"
  },
  {
    index:
      "07",

    label:
      "Archive",

    title:
      "Events Archive",

    description:
      "Published No Breach events and community activity.",

    href:
      "/events",

    size:
      "standard"
  }
] as const;


export default function HomePage() {
  return (
    <>
      <section
        className={
          styles.heroV8
        }
        data-home-section="hero"
        data-home-design="authority-v10"
        data-home-hero="v8"
      >
        <div
          className={
            styles.heroV8Ambient
          }
          aria-hidden="true"
        />

        <div
          className={
            styles.heroV8Frame
          }
        >
          <div
            className={
              styles.heroV8Copy
            }
          >
            <div
              className={
                styles.heroV8Kicker
              }
            >
              <span
                className={
                  styles.heroV8KickerDot
                }
                aria-hidden="true"
              />

              <span>
                Offensive Security / Tunisia
              </span>
            </div>

            <h1
              className={
                styles.heroV8Title
              }
            >
              Offensive security built around
              <span>
                how real systems fail.
              </span>
            </h1>

            <p
              className={
                styles.heroV8Lead
              }
            >
              No Breach helps organizations understand exposure,
              validate weaknesses and turn security findings into
              practical decisions.
            </p>

            <div
              className={
                styles.heroV8Actions
              }
            >
              <Link
                href="/services"
                className={
                  styles.heroV8Primary
                }
              >
                Explore services

                <span
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>

              <Link
                href="/company"
                className={
                  styles.heroV8Secondary
                }
              >
                About No Breach
              </Link>
            </div>

            <div
              className={
                styles.heroV8Statement
              }
            >
              <span
                aria-hidden="true"
              >
                01
              </span>

              <p>
                Security, education and community are one connected system.
              </p>
            </div>

            <div
              className={
                styles.heroV8Capabilities
              }
              aria-label="No Breach security focus areas"
            >
              <span>
                Web application
              </span>

              <span>
                API
              </span>

              <span>
                Infrastructure
              </span>

              <span>
                Training
              </span>
            </div>
          </div>

          <div
            className={
              styles.heroV8Visual
            }
            data-home-hero-visual="attack-surface"
            data-hero-visual="attack-surface"
            data-hero-art="attack-surface"
            data-ui="attack-surface-visual"
            data-attack-surface="true"
            aria-hidden="true"
          >
            <div
              className={
                styles.heroV8VisualHeader
              }
            >
              <span>
                NB / ATTACK SURFACE
              </span>

              <span>
                TUNIS / TN
              </span>
            </div>

            <div
              className={
                styles.heroV8Surface
              }
            >
              <span
                className={
                  `${styles.heroV8Node} ${styles.heroV8NodeApp}`
                }
              >
                APP
              </span>

              <span
                className={
                  `${styles.heroV8Node} ${styles.heroV8NodeApi}`
                }
              >
                API
              </span>

              <span
                className={
                  `${styles.heroV8Node} ${styles.heroV8NodeAuth}`
                }
              >
                AUTH
              </span>

              <span
                className={
                  `${styles.heroV8Node} ${styles.heroV8NodeUser}`
                }
              >
                USER
              </span>

              <span
                className={
                  `${styles.heroV8Node} ${styles.heroV8NodeDb}`
                }
              >
                DB
              </span>

              <span
                className={
                  `${styles.heroV8Node} ${styles.heroV8NodeData}`
                }
              >
                DATA
              </span>

              <div
                className={
                  styles.heroV8Core
                }
              >
                <small>
                  ATTACK
                </small>

                <strong>
                  SURFACE
                </strong>

                <span>
                  MAP
                </span>
              </div>

              <i
                className={
                  `${styles.heroV8Line} ${styles.heroV8LineOne}`
                }
              />

              <i
                className={
                  `${styles.heroV8Line} ${styles.heroV8LineTwo}`
                }
              />

              <i
                className={
                  `${styles.heroV8Line} ${styles.heroV8LineThree}`
                }
              />

              <i
                className={
                  `${styles.heroV8Line} ${styles.heroV8LineFour}`
                }
              />

              <i
                className={
                  `${styles.heroV8Line} ${styles.heroV8LineFive}`
                }
              />

              <i
                className={
                  `${styles.heroV8Line} ${styles.heroV8LineSix}`
                }
              />

              <div
                className={
                  styles.heroV8Orbit
                }
              />

              <div
                className={
                  styles.heroV8OrbitInner
                }
              />
            </div>

            <div
              className={
                styles.heroV8VisualFooter
              }
            >
              <span>
                Observe
              </span>

              <span>
                Validate
              </span>

              <span>
                Strengthen
              </span>
            </div>
          </div>
        </div>
      </section>


      <section
        className={
          styles.identitySection
        }
        data-home-section="company"
        data-home-design="authority-v10"
      >
        <Container size="wide">
          <div
            className={
              styles.identityLayout
            }
          >
            <div
              className={
                styles.identityCopy
              }
            >
              <p
                className={
                  styles.modernEyebrow
                }
              >
                01 / No Breach
              </p>

              <h2>
                A cybersecurity organization built from offensive security.
              </h2>

              <p>
                Founded in Tunisia, No Breach brings together security services, hands-on education and cybersecurity community initiatives.
              </p>

              <Link
                className={
                  styles.inlineArrowLink
                }
                href="/company"
              >
                Read the company story

                <span
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>

            <dl
              className={
                styles.identityFacts
              }
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
                  Based
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
                  Ecosystem
                </dt>

                <dd>
                  Services · Education · Community
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>


      <section
        className={
          styles.servicesSection
        }
        data-home-section="services"
        data-home-design="authority-v10"
      >
        <Container size="wide">
          <header
            className={
              styles.modernSectionHeader
            }
          >
            <div>
              <p
                className={
                  styles.modernEyebrow
                }
              >
                02 / Capabilities
              </p>

              <h2>
                Security work that starts with how systems break.
              </h2>
            </div>

            <Link
              className={
                styles.inlineArrowLink
              }
              href="/services"
            >
              Full methodology &amp; services

              <span
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </header>

          <div
            className={
              styles.serviceRows
            }
          >
            {services.map(
              (
                service
              ) => (
                <Link
                  className={
                    styles.serviceRow
                  }
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
                      styles.serviceEyebrow
                    }
                  >
                    {
                      service.eyebrow
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
            )}
          </div>
        </Container>
      </section>


      <section
        className={
          styles.ecosystemSection
        }
        data-home-section="explore"
        data-home-design="authority-v10"
      >
        <Container size="wide">
          <header
            className={
              styles.modernSectionHeader
            }
          >
            <div>
              <p
                className={
                  styles.modernEyebrow
                }
              >
                03 / Ecosystem
              </p>

              <h2>
                Services, education and community—connected by practice.
              </h2>
            </div>

            <p
              className={
                styles.sectionHeaderCopy
              }
            >
              Explore the people, programs, technical work and public activity behind No Breach.
            </p>
          </header>

          <div
            className={
              styles.ecosystemGrid
            }
          >
            {ecosystem.map(
              (
                item
              ) => (
                <Link
                  className={`${styles.ecosystemCard} ${
                    item.size ===
                    "large"
                      ? styles.ecosystemLarge
                      : item.size ===
                          "wide"
                        ? styles.ecosystemWide
                        : ""
                  }`}
                  href={
                    item.href
                  }
                  key={
                    item.index
                  }
                >
                  <div
                    className={
                      styles.ecosystemCardTop
                    }
                  >
                    <span>
                      {
                        item.index
                      }
                    </span>

                    <span>
                      {
                        item.label
                      }
                    </span>
                  </div>

                  <div
                    className={
                      styles.ecosystemCardBody
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

                  <span
                    className={
                      styles.ecosystemArrow
                    }
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </Link>
              )
            )}
          </div>
        </Container>
      </section>


      <section
        className={
          styles.modernContact
        }
        data-home-section="contact"
        data-home-design="authority-v10"
      >
        <Container size="wide">
          <div
            className={
              styles.modernContactInner
            }
          >
            <div
              className={
                styles.contactIndex
              }
            >
              04
            </div>

            <div
              className={
                styles.contactCopy
              }
            >
              <p
                className={
                  styles.modernEyebrow
                }
              >
                Start a conversation
              </p>

              <h2>
                Secure it. Test it. Understand it.
              </h2>

              <p>
                Need a security assessment, training program or technical collaboration? Tell No Breach what you are working on.
              </p>
            </div>

            <div
              className={
                styles.contactActions
              }
            >
              <Link
                className={
                  styles.contactPrimary
                }
                href="/contact"
              >
                Contact No Breach

                <span
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>

              <Link
                className={
                  styles.contactSecondary
                }
                href="/company/internships"
              >
                Explore technical work
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
