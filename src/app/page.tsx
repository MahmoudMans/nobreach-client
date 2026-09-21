import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import styles from "./home.module.css";

const services = [
  {
    number:
      "01",

    title:
      "Web Application Security",

    description:
      "Security testing focused on authentication, authorization, business logic and real application attack surfaces.",

    href:
      "/services/web-application-pentesting"
  },
  {
    number:
      "02",

    title:
      "API Security",

    description:
      "Assessment of REST and GraphQL APIs, object-level access, tokens, authorization and data exposure.",

    href:
      "/services/api-security"
  },
  {
    number:
      "03",

    title:
      "Infrastructure Security",

    description:
      "Review of exposed services, network configuration, credentials, privilege paths and segmentation.",

    href:
      "/services/infrastructure-security"
  },
  {
    number:
      "04",

    title:
      "Security Training",

    description:
      "Practical cybersecurity education for teams, universities, communities and technical learners.",

    href:
      "/services/security-training"
  }
] as const;

const destinations = [
  {
    index:
      "01",

    eyebrow:
      "Company",

    title:
      "About No Breach",

    description:
      "Company story, operating principles, ecosystem and milestones.",

    href:
      "/company"
  },
  {
    index:
      "02",

    eyebrow:
      "Founder",

    title:
      "Nouha Ben Brahim",

    description:
      "Founder profile, journey, security work, speaking, writing and public record.",

    href:
      "/company/founder"
  },
  {
    index:
      "03",

    eyebrow:
      "Training",

    title:
      "Training Hub",

    description:
      "Hands-on cybersecurity programs built around practical technical work.",

    href:
      "/training"
  },
  {
    index:
      "04",

    eyebrow:
      "Community",

    title:
      "CR4CKOUT",

    description:
      "No Breach's community security initiative, workshops, CTF activity and events.",

    href:
      "/cr4ckout"
  },
  {
    index:
      "05",

    eyebrow:
      "Applied work",

    title:
      "Internship Projects",

    description:
      "Technical projects developed through No Breach internship programs.",

    href:
      "/company/internships"
  },
  {
    index:
      "06",

    eyebrow:
      "Public record",

    title:
      "Activities & LinkedIn",

    description:
      "Events, workshops, community activity and verified public LinkedIn posts.",

    href:
      "/activities"
  },
  {
    index:
      "07",

    eyebrow:
      "Knowledge",

    title:
      "Technical Insights",

    description:
      "Original writing on application security, offensive security and AI security.",

    href:
      "/insights"
  },
  {
    index:
      "08",

    eyebrow:
      "Events",

    title:
      "Events Archive",

    description:
      "Published No Breach events and previous community activity.",

    href:
      "/events"
  }
] as const;

export default function HomePage() {
  return (
    <>
      <section
        className={
          styles.compactHero
        }
        data-home-section="hero"
      >
        <Container size="wide">
          <div
            className={
              styles.compactHeroGrid
            }
          >
            <div
              className={
                styles.compactHeroCopy
              }
            >
              <p
                className={
                  styles.compactEyebrow
                }
              >
                Offensive Security / Tunisia
              </p>

              <h1
                className={
                  styles.compactHeroTitle
                }
              >
                Offensive security built around real-world attack thinking.
              </h1>

              <p
                className={
                  styles.compactHeroText
                }
              >
                No Breach helps organizations uncover security weaknesses while building practical cybersecurity capability through services, education and community work.
              </p>

              <div
                className={
                  styles.compactActions
                }
              >
                <Link
                  className={
                    styles.compactPrimaryButton
                  }
                  href="/services"
                >
                  Explore services
                  <span
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </Link>

                <Link
                  className={
                    styles.compactSecondaryButton
                  }
                  href="/company"
                >
                  About No Breach
                </Link>
              </div>
            </div>

            <div
              className={
                styles.compactSignal
              }
              aria-hidden="true"
            >
              <div
                className={
                  styles.signalTop
                }
              >
                <span>
                  NB / ATTACK SURFACE
                </span>

                <span>
                  ACTIVE
                </span>
              </div>

              <div
                className={
                  styles.signalGraph
                }
              >
                <span
                  className={`${styles.signalNode} ${styles.signalNodeApp}`}
                >
                  APP
                </span>

                <span
                  className={`${styles.signalNode} ${styles.signalNodeApi}`}
                >
                  API
                </span>

                <span
                  className={`${styles.signalNode} ${styles.signalNodeAuth}`}
                >
                  AUTH
                </span>

                <span
                  className={`${styles.signalNode} ${styles.signalNodeUser}`}
                >
                  USER
                </span>

                <span
                  className={`${styles.signalNode} ${styles.signalNodeData}`}
                >
                  DATA
                </span>

                <svg
                  className={
                    styles.signalLines
                  }
                  viewBox="0 0 500 300"
                  preserveAspectRatio="none"
                >
                  <path d="M250 40 L120 125" />
                  <path d="M250 40 L380 125" />
                  <path d="M120 125 L250 205" />
                  <path d="M380 125 L250 205" />
                  <path d="M250 205 L250 270" />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        className={
          styles.compactFacts
        }
        data-home-section="company"
      >
        <Container size="wide">
          <div
            className={
              styles.compactFactGrid
            }
          >
            <div
              className={
                styles.compactCompanyIntro
              }
            >
              <p
                className={
                  styles.compactEyebrow
                }
              >
                No Breach
              </p>

              <h2
                className={
                  styles.compactSectionTitle
                }
              >
                A cybersecurity organization built from offensive security.
              </h2>

              <Link
                className={
                  styles.compactTextLink
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
                styles.compactFactList
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
          styles.compactSection
        }
        data-home-section="services"
      >
        <Container size="wide">
          <div
            className={
              styles.compactSectionHeader
            }
          >
            <div>
              <p
                className={
                  styles.compactEyebrow
                }
              >
                Security services
              </p>

              <h2
                className={
                  styles.compactSectionTitle
                }
              >
                Examine systems from an attacker&apos;s perspective.
              </h2>
            </div>

            <Link
              className={
                styles.compactTextLink
              }
              href="/services"
            >
              Full methodology & services
              <span
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>

          <div
            className={
              styles.compactServiceGrid
            }
          >
            {services.map(
              (
                service
              ) => (
                <Link
                  className={
                    styles.compactServiceCard
                  }
                  href={
                    service.href
                  }
                  key={
                    service.number
                  }
                >
                  <span
                    className={
                      styles.compactCardNumber
                    }
                  >
                    {
                      service.number
                    }
                  </span>

                  <h3>
                    {
                      service.title
                    }
                  </h3>

                  <p>
                    {
                      service.description
                    }
                  </p>

                  <span
                    className={
                      styles.compactCardArrow
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
          styles.compactSection
        }
        data-home-section="explore"
      >
        <Container size="wide">
          <div
            className={
              styles.compactSectionHeader
            }
          >
            <div>
              <p
                className={
                  styles.compactEyebrow
                }
              >
                Explore No Breach
              </p>

              <h2
                className={
                  styles.compactSectionTitle
                }
              >
                Detailed content now lives where it belongs.
              </h2>
            </div>

            <p
              className={
                styles.compactSectionIntro
              }
            >
              Go deeper into the company, founder, training, technical work, events, public activity and security research without making the homepage carry every detail.
            </p>
          </div>

          <div
            className={
              styles.compactDestinationGrid
            }
          >
            {destinations.map(
              (
                destination
              ) => (
                <Link
                  className={
                    styles.compactDestination
                  }
                  href={
                    destination.href
                  }
                  key={
                    destination.index
                  }
                >
                  <div
                    className={
                      styles.compactDestinationTop
                    }
                  >
                    <span>
                      {
                        destination.index
                      }
                    </span>

                    <span>
                      {
                        destination.eyebrow
                      }
                    </span>
                  </div>

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

                  <span
                    className={
                      styles.compactDestinationArrow
                    }
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              )
            )}
          </div>
        </Container>
      </section>

      <section
        className={
          styles.compactCta
        }
        data-home-section="contact"
      >
        <Container>
          <div
            className={
              styles.compactCtaBox
            }
          >
            <p
              className={
                styles.compactEyebrow
              }
            >
              Start a conversation
            </p>

            <h2
              className={
                styles.compactCtaTitle
              }
            >
              Need a security assessment, training program or collaboration?
            </h2>

            <p
              className={
                styles.compactCtaText
              }
            >
              Tell No Breach what you are trying to secure, teach or build.
            </p>

            <div
              className={
                styles.compactActions
              }
            >
              <Link
                className={
                  styles.compactPrimaryButton
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
                  styles.compactSecondaryButton
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
