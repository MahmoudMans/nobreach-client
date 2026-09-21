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
          styles.modernHero
        }
        data-home-section="hero"
      >
        <div
          className={
            styles.heroAtmosphere
          }
          aria-hidden="true"
        />

        <Container size="wide">
          <div
            className={
              styles.modernHeroGrid
            }
          >
            <div
              className={
                styles.modernHeroCopy
              }
            >
              <div
                className={
                  styles.heroStatus
                }
              >
                <span
                  className={
                    styles.heroStatusSignal
                  }
                  aria-hidden="true"
                />

                Offensive Security / Tunisia
              </div>

              <h1
                className={
                  styles.modernHeroTitle
                }
              >
                Offensive security built around real-world attack thinking.
              </h1>

              <p
                className={
                  styles.modernHeroLead
                }
              >
                No Breach combines offensive security services, practical education and community work to help people understand systems from the perspective that matters most: how they can actually fail.
              </p>

              <div
                className={
                  styles.heroActions
                }
              >
                <Link
                  className={
                    styles.heroPrimaryAction
                  }
                  href="/services"
                >
                  <span>
                    Explore services
                  </span>

                  <span
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </Link>

                <Link
                  className={
                    styles.heroTextAction
                  }
                  href="/company"
                >
                  About No Breach

                  <span
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>

              <div
                className={
                  styles.heroPrinciples
                }
                aria-label="No Breach approach"
              >
                <span>
                  Offensive
                </span>

                <span>
                  Evidence-led
                </span>

                <span>
                  Practical
                </span>
              </div>
            </div>

            <div
              className={
                styles.constellationShell
              }
              aria-label="No Breach attack surface model"
            >
              <div
                className={
                  styles.constellationHeader
                }
              >
                <div>
                  <span
                    className={
                      styles.constellationDot
                    }
                    aria-hidden="true"
                  />

                  <span>
                    NB / ATTACK SURFACE
                  </span>
                </div>

                <span>
                  MODEL / 01
                </span>
              </div>

              <div
                className={
                  styles.constellationStage
                }
              >
                <div
                  className={
                    styles.radarGlow
                  }
                  aria-hidden="true"
                />

                <div
                  className={
                    styles.orbitOuter
                  }
                  aria-hidden="true"
                />

                <div
                  className={
                    styles.orbitMiddle
                  }
                  aria-hidden="true"
                />

                <div
                  className={
                    styles.orbitInner
                  }
                  aria-hidden="true"
                />

                <div
                  className={
                    styles.scanBeam
                  }
                  aria-hidden="true"
                />

                <svg
                  className={
                    styles.constellationLines
                  }
                  viewBox="0 0 600 440"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M300 218 L170 92"
                  />

                  <path
                    d="M300 218 L435 105"
                  />

                  <path
                    d="M300 218 L500 254"
                  />

                  <path
                    d="M300 218 L388 365"
                  />

                  <path
                    d="M300 218 L118 334"
                  />

                  <path
                    d="M170 92 L435 105"
                    className={
                      styles.constellationSecondaryLine
                    }
                  />

                  <path
                    d="M118 334 L388 365"
                    className={
                      styles.constellationSecondaryLine
                    }
                  />
                </svg>

                <div
                  className={
                    styles.constellationCore
                  }
                >
                  <span>
                    NB
                  </span>

                  <small>
                    CORE
                  </small>
                </div>

                <div
                  className={`${styles.constellationNode} ${styles.nodeApp}`}
                >
                  <span
                    className={
                      styles.nodePulse
                    }
                    aria-hidden="true"
                  />

                  <strong>
                    APP
                  </strong>

                  <small>
                    surface
                  </small>
                </div>

                <div
                  className={`${styles.constellationNode} ${styles.nodeApi}`}
                >
                  <span
                    className={
                      styles.nodePulse
                    }
                    aria-hidden="true"
                  />

                  <strong>
                    API
                  </strong>

                  <small>
                    objects
                  </small>
                </div>

                <div
                  className={`${styles.constellationNode} ${styles.nodeAuth}`}
                >
                  <span
                    className={
                      styles.nodePulse
                    }
                    aria-hidden="true"
                  />

                  <strong>
                    AUTH
                  </strong>

                  <small>
                    trust
                  </small>
                </div>

                <div
                  className={`${styles.constellationNode} ${styles.nodeUser}`}
                >
                  <span
                    className={
                      styles.nodePulse
                    }
                    aria-hidden="true"
                  />

                  <strong>
                    USER
                  </strong>

                  <small>
                    identity
                  </small>
                </div>

                <div
                  className={`${styles.constellationNode} ${styles.nodeData}`}
                >
                  <span
                    className={
                      styles.nodePulse
                    }
                    aria-hidden="true"
                  />

                  <strong>
                    DATA
                  </strong>

                  <small>
                    impact
                  </small>
                </div>

                <div
                  className={
                    styles.constellationCoordinate
                  }
                  aria-hidden="true"
                >
                  <span>
                    36.8065 N
                  </span>

                  <span>
                    10.1815 E
                  </span>
                </div>
              </div>

              <div
                className={
                  styles.constellationFooter
                }
              >
                <span>
                  Attack surface
                </span>

                <span>
                  Authorization
                </span>

                <span>
                  Evidence
                </span>
              </div>
            </div>
          </div>
        </Container>

        <div
          className={
            styles.heroTicker
          }
          aria-hidden="true"
        >
          <div
            className={
              styles.heroTickerTrack
            }
          >
            <span>
              WEB APPLICATION SECURITY
            </span>

            <i />

            <span>
              API SECURITY
            </span>

            <i />

            <span>
              INFRASTRUCTURE SECURITY
            </span>

            <i />

            <span>
              SECURITY TRAINING
            </span>

            <i />

            <span>
              OFFENSIVE THINKING
            </span>

            <i />

            <span>
              WEB APPLICATION SECURITY
            </span>

            <i />

            <span>
              API SECURITY
            </span>

            <i />

            <span>
              INFRASTRUCTURE SECURITY
            </span>
          </div>
        </div>
      </section>


      <section
        className={
          styles.identitySection
        }
        data-home-section="company"
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
