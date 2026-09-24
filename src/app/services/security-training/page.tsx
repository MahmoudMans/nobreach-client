import Link from "next/link";

import {
  Breadcrumbs
} from "@/components/navigation/breadcrumbs";

import {
  Container
} from "@/components/layout/container";

import {
  createMetadata
} from "@/lib/seo";

import styles from "./security-training.module.css";


export const metadata =
  createMetadata({

    title:
      "Security Training | No Breach",

    description:
      "Organization-facing cybersecurity training for companies, universities, communities and teams, built around practical technical skill development.",

    path:
      "/services/security-training"
  });


const audiences = [
  {
    number:
      "01",

    code:
      "ORG",

    title:
      "Companies",

    description:
      "Organization-facing cybersecurity training for companies looking to develop practical security capability."
  },
  {
    number:
      "02",

    code:
      "UNI",

    title:
      "Universities",

    description:
      "Practical cybersecurity training for academic and technical learning environments."
  },
  {
    number:
      "03",

    code:
      "COM",

    title:
      "Communities",

    description:
      "Technical training experiences for cybersecurity communities and organized learning groups."
  },
  {
    number:
      "04",

    code:
      "TEAM",

    title:
      "Teams",

    description:
      "Practical security development for technical teams working together."
  }
] as const;


const learningArchitecture = [
  {
    number:
      "01",

    code:
      "CTX",

    title:
      "Context",

    description:
      "Start from the audience, its technical background and the security capability it wants to develop."
  },
  {
    number:
      "02",

    code:
      "DSN",

    title:
      "Design",

    description:
      "Shape the training around the relevant subject, audience and practical learning context."
  },
  {
    number:
      "03",

    code:
      "LAB",

    title:
      "Practice",

    description:
      "Use hands-on technical work to move beyond passive theory."
  },
  {
    number:
      "04",

    code:
      "REV",

    title:
      "Review",

    description:
      "Connect the practical work back to the security reasoning behind it."
  }
] as const;


const principles = [
  {
    code:
      "PRACTICAL",

    title:
      "Practical",

    description:
      "Technical learning centered on doing, testing and understanding."
  },
  {
    code:
      "MODERN",

    title:
      "Modern",

    description:
      "Training positioned around current cybersecurity practice rather than generic awareness material."
  },
  {
    code:
      "APPLICABLE",

    title:
      "Applicable",

    description:
      "A focus on skills participants can connect to real technical work."
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


export default function SecurityTrainingPage() {

  return (
    <div
      className={
        styles.page
      }
      data-security-training-design="v25"
    >
      <Breadcrumbs
        items={[
          {
            label:
              "Services",

            href:
              "/services"
          },
          {
            label:
              "Security Training"
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
        data-security-training-section="hero"
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
              No Breach / Security Training
            </span>

            <span>
              Capability Studio
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
                Practical · Modern · Applicable
              </p>

              <h1>
                Security capability is built
                <span>
                  through practice.
                </span>
              </h1>

              <p
                className={
                  styles.heroLead
                }
              >
                Practical, modern training designed to build real, applicable skills for both teams and individuals.
              </p>

              <p
                className={
                  styles.heroServiceNote
                }
              >
                This service is the organization-facing path for companies, universities, communities and teams.
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
                  Discuss training

                  <Arrow />
                </Link>

                <a
                  href="#audiences"
                  className={
                    styles.textAction
                  }
                >
                  Explore the service

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
                styles.capabilityMap
              }
              data-security-training-ui="capability-map"
              aria-label="Security training audience model"
            >
              <div
                className={
                  styles.mapHeader
                }
              >
                <span>
                  Training interface
                </span>

                <span>
                  NB / EDU
                </span>
              </div>

              <div
                className={
                  styles.mapBody
                }
              >
                <div
                  className={
                    `${styles.mapAudience} ${styles.mapCompany}`
                  }
                >
                  <span>
                    01
                  </span>

                  <strong>
                    COMPANY
                  </strong>
                </div>

                <div
                  className={
                    `${styles.mapAudience} ${styles.mapUniversity}`
                  }
                >
                  <span>
                    02
                  </span>

                  <strong>
                    UNIVERSITY
                  </strong>
                </div>

                <div
                  className={
                    styles.mapCore
                  }
                >
                  <span>
                    NB
                  </span>

                  <strong>
                    PRACTICE
                  </strong>

                  <i
                    aria-hidden="true"
                  />
                </div>

                <div
                  className={
                    `${styles.mapAudience} ${styles.mapCommunity}`
                  }
                >
                  <span>
                    03
                  </span>

                  <strong>
                    COMMUNITY
                  </strong>
                </div>

                <div
                  className={
                    `${styles.mapAudience} ${styles.mapTeam}`
                  }
                >
                  <span>
                    04
                  </span>

                  <strong>
                    TEAM
                  </strong>
                </div>

                <span
                  className={
                    `${styles.mapLine} ${styles.mapLineOne}`
                  }
                  aria-hidden="true"
                />

                <span
                  className={
                    `${styles.mapLine} ${styles.mapLineTwo}`
                  }
                  aria-hidden="true"
                />

                <span
                  className={
                    `${styles.mapLine} ${styles.mapLineThree}`
                  }
                  aria-hidden="true"
                />

                <span
                  className={
                    `${styles.mapLine} ${styles.mapLineFour}`
                  }
                  aria-hidden="true"
                />
              </div>

              <div
                className={
                  styles.mapOutput
                }
              >
                <span>
                  INPUT
                </span>

                <i />

                <strong>
                  TECHNICAL PRACTICE
                </strong>

                <i />

                <span>
                  CAPABILITY
                </span>
              </div>
            </div>
          </div>

          <div
            className={
              styles.heroFooter
            }
          >
            <span>
              COMPANIES
            </span>

            <i />

            <span>
              UNIVERSITIES
            </span>

            <i />

            <span>
              COMMUNITIES
            </span>

            <i />

            <span>
              TEAMS
            </span>
          </div>
        </Container>
      </section>


      {/* ================================================================
          01 — WHO IT IS FOR
         ================================================================ */}

      <section
        id="audiences"
        className={
          styles.section
        }
        data-security-training-section="audiences"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="01"
            eyebrow="Who it is for"
            title="Four organizational contexts. One practical focus."
            description="The security-training service is designed for organizational and group learning contexts rather than functioning as the public course catalogue."
          />

          <div
            className={
              styles.audienceIndex
            }
            data-security-training-ui="audience-index"
          >
            {
              audiences.map(
                (
                  audience
                ) => (
                  <div
                    className={
                      styles.audienceRow
                    }
                    data-security-training-audience
                    key={
                      audience.number
                    }
                  >
                    <span
                      className={
                        styles.audienceNumber
                      }
                    >
                      {
                        audience.number
                      }
                    </span>

                    <span
                      className={
                        styles.audienceCode
                      }
                    >
                      {
                        audience.code
                      }
                    </span>

                    <h3>
                      {
                        audience.title
                      }
                    </h3>

                    <p>
                      {
                        audience.description
                      }
                    </p>

                    <span
                      className={
                        styles.audienceSignal
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

          <div
            className={
              styles.principleRail
            }
          >
            {
              principles.map(
                (
                  principle,
                  index
                ) => (
                  <div
                    key={
                      principle.code
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

                    <small>
                      {
                        principle.code
                      }
                    </small>

                    <strong>
                      {
                        principle.title
                      }
                    </strong>

                    <p>
                      {
                        principle.description
                      }
                    </p>
                  </div>
                )
              )
            }
          </div>
        </Container>
      </section>


      {/* ================================================================
          02 — TRAINING ARCHITECTURE
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.sectionAlt}`
        }
        data-security-training-section="architecture"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="02"
            eyebrow="Training architecture"
            title="Move from audience context into technical practice."
            description="The training experience is organized around understanding the learning context, shaping the session, practicing the technical material and reviewing the reasoning behind the work."
          />

          <div
            className={
              styles.learningSystem
            }
            data-security-training-ui="learning-system"
          >
            <div
              className={
                styles.learningAxis
              }
              aria-hidden="true"
            >
              <span>
                CONTEXT
              </span>

              <i />

              <span>
                DESIGN
              </span>

              <i />

              <span>
                PRACTICE
              </span>

              <i />

              <span>
                REVIEW
              </span>
            </div>

            <ol
              className={
                styles.learningSteps
              }
            >
              {
                learningArchitecture.map(
                  (
                    step
                  ) => (
                    <li
                      className={
                        styles.learningStep
                      }
                      data-security-training-step
                      key={
                        step.number
                      }
                    >
                      <div
                        className={
                          styles.stepMeta
                        }
                      >
                        <span>
                          {
                            step.number
                          }
                        </span>

                        <small>
                          {
                            step.code
                          }
                        </small>
                      </div>

                      <h3>
                        {
                          step.title
                        }
                      </h3>

                      <p>
                        {
                          step.description
                        }
                      </p>

                      <i
                        className={
                          styles.stepNode
                        }
                        aria-hidden="true"
                      />
                    </li>
                  )
                )
              }
            </ol>
          </div>

          <div
            className={
              styles.architectureStatement
            }
          >
            <span>
              PRACTICE
            </span>

            <p>
              The emphasis remains on practical cybersecurity skill development rather than passive attendance.
            </p>
          </div>
        </Container>
      </section>


      {/* ================================================================
          03 — TWO TRAINING JOURNEYS
         ================================================================ */}

      <section
        className={
          styles.section
        }
        data-security-training-section="journeys"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="03"
            eyebrow="Training journeys"
            title="Organization-facing training and public programs are different paths."
            description="No Breach separates the security-training service from the public Training Hub so organizations and individual learners reach the right experience."
          />

          <div
            className={
              styles.journeySystem
            }
            data-security-training-ui="journey-system"
          >
            <div
              className={
                styles.journeyOrigin
              }
              aria-hidden="true"
            >
              <span>
                NO BREACH
              </span>

              <strong>
                TRAINING
              </strong>

              <i />
            </div>

            <div
              className={
                styles.journeyBranch
              }
            >
              <div
                className={
                  styles.journeyLabel
                }
              >
                <span>
                  01
                </span>

                <small>
                  SERVICE
                </small>
              </div>

              <div
                className={
                  styles.journeyCopy
                }
              >
                <p>
                  Organization-facing
                </p>

                <h3>
                  Security Training Service
                </h3>

                <p>
                  For companies, universities, communities and teams looking for an organization-facing cybersecurity training engagement.
                </p>

                <Link
                  href="/contact"
                  className={
                    styles.journeyAction
                  }
                >
                  Discuss training

                  <Arrow />
                </Link>
              </div>
            </div>

            <div
              className={
                styles.journeyBranch
              }
            >
              <div
                className={
                  styles.journeyLabel
                }
              >
                <span>
                  02
                </span>

                <small>
                  PUBLIC
                </small>
              </div>

              <div
                className={
                  styles.journeyCopy
                }
              >
                <p>
                  Individual programs
                </p>

                <h3>
                  Training Hub
                </h3>

                <p>
                  Public learner programs live in the Training Hub rather than inside the commercial security-training service.
                </p>

                <Link
                  href="/training"
                  className={
                    styles.journeyAction
                  }
                >
                  Explore Training Hub

                  <Arrow />
                </Link>
              </div>
            </div>
          </div>

          <div
            className={
              styles.journeyFooter
            }
          >
            <span>
              ORGANIZATION
            </span>

            <i />

            <span>
              /services/security-training
            </span>

            <strong>
              ≠
            </strong>

            <span>
              /training
            </span>

            <i />

            <span>
              PUBLIC PROGRAMS
            </span>
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
        data-security-training-section="cta"
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
                  EDU
                </span>

                Security Training
              </p>

              <h2>
                Build practical security capability with your group.
              </h2>
            </div>

            <div
              className={
                styles.ctaCopy
              }
            >
              <p>
                Tell No Breach about the organization, audience and training context you want to discuss.
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
                  Start a conversation

                  <Arrow />
                </Link>

                <Link
                  href="/training"
                  className={
                    styles.textAction
                  }
                >
                  Public Training Hub

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
