import type {
  Metadata
} from "next";

import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import {
  team
} from "@/content/team";

import {
  trainingPrograms
} from "@/content/training";

import styles from "./home.module.css";


export const metadata:
  Metadata = {

  title:
    "No Breach | Offensive Security, Training & Cybersecurity Community",

  description:
    "No Breach combines offensive security services, hands-on cybersecurity education, technical research and community initiatives."
};


const companyFacts = [
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
] as const;


const services = [
  {
    index:
      "01",

    code:
      "WEB",

    title:
      "Web Application Security",

    description:
      "Security testing focused on application behavior, access control, business logic and real attack surfaces.",

    capabilities: [
      "Authentication & sessions",
      "Authorization & access control",
      "Business logic"
    ],

    href:
      "/services/web-application-pentesting"
  },
  {
    index:
      "02",

    code:
      "API",

    title:
      "API Security",

    description:
      "Assessment of exposed application interfaces, authorization boundaries and API behavior.",

    capabilities: [
      "Authentication",
      "Object-level access",
      "Business logic"
    ],

    href:
      "/services/api-security"
  },
  {
    index:
      "03",

    code:
      "INFRA",

    title:
      "Infrastructure Security",

    description:
      "Security assessment of infrastructure exposure, configuration and supporting technical systems.",

    capabilities: [
      "External exposure",
      "Privilege paths",
      "Configuration review"
    ],

    href:
      "/services/infrastructure-security"
  },
  {
    index:
      "04",

    code:
      "EDU",

    title:
      "Security Training",

    description:
      "Practical cybersecurity training for organizations, universities, communities and technical teams.",

    capabilities: [
      "Hands-on learning",
      "Technical workshops",
      "Applied security"
    ],

    href:
      "/services/security-training"
  }
] as const;


const capabilityAreas = [
  "Authentication and session behavior",
  "Authorization and access boundaries",
  "Business-logic weaknesses",
  "Application and API attack surfaces"
] as const;


const whyNoBreach = [
  {
    index:
      "01",

    title:
      "Real-world practice",

    description:
      "Security work and technical learning are grounded in how real systems behave and fail."
  },
  {
    index:
      "02",

    title:
      "Technical credibility",

    description:
      "Testing, research and training share the same attacker-oriented technical mindset."
  },
  {
    index:
      "03",

    title:
      "Industry relevance",

    description:
      "Programs and services stay connected to practical application, API and infrastructure security."
  },
  {
    index:
      "04",

    title:
      "One connected ecosystem",

    description:
      "Security, education and community reinforce each other instead of operating as isolated activities."
  }
] as const;


const process = [
  {
    index:
      "01",

    title:
      "Scope"
  },
  {
    index:
      "02",

    title:
      "Reconnaissance"
  },
  {
    index:
      "03",

    title:
      "Attack Surface Mapping"
  },
  {
    index:
      "04",

    title:
      "Testing"
  },
  {
    index:
      "05",

    title:
      "Exploitation Validation"
  },
  {
    index:
      "06",

    title:
      "Reporting"
  },
  {
    index:
      "07",

    title:
      "Remediation Guidance"
  }
] as const;


const proofLinks = [
  {
    index:
      "02",

    label:
      "ACADEMY",

    title:
      "Training Hub",

    description:
      "Published hands-on cybersecurity learning paths.",

    href:
      "/training"
  },
  {
    index:
      "03",

    label:
      "ACTIVITY",

    title:
      "Technical Activities",

    description:
      "Published workshops, training and community activity.",

    href:
      "/activities"
  },
  {
    index:
      "04",

    label:
      "ARCHIVE",

    title:
      "Events",

    description:
      "Public NoBreach event history and CR4CKOUT activity.",

    href:
      "/events"
  },
  {
    index:
      "05",

    label:
      "RESEARCH",

    title:
      "Insights",

    description:
      "Technical security writing and published research.",

    href:
      "/insights"
  }
] as const;


const resources = [
  {
    category:
      "Application Security",

    title:
      "Authorization is a system, not a checkbox",

    href:
      "/insights/authorization-is-a-system-not-a-checkbox"
  },
  {
    category:
      "Offensive Security",

    title:
      "Attack surface mapping before exploitation",

    href:
      "/insights/attack-surface-mapping-before-exploitation"
  },
  {
    category:
      "AI Security",

    title:
      "Prompt injection matters most when AI can act",

    href:
      "/insights/prompt-injection-matters-when-ai-can-act"
  }
] as const;


const faqItems = [
  {
    question:
      "What does NoBreach provide?",

    answer:
      "NoBreach brings together cybersecurity services, practical training, technical research and community initiatives."
  },
  {
    question:
      "Where should individual learners start?",

    answer:
      "The Academy presents the currently published NoBreach training programs, including their level, format, curriculum and expected outcomes."
  },
  {
    question:
      "Where should organizations start?",

    answer:
      "Organizations can explore the security services portfolio or contact NoBreach to discuss the context and type of security work required."
  },
  {
    question:
      "Where can I follow technical NoBreach work?",

    answer:
      "Published research is available through Insights, while Activities and Events provide public records of training, workshops and community initiatives."
  }
] as const;


const currentTeam =
  team
    .filter(
      (
        member
      ) =>
        member.status
        ===
        "current"
    )
    .slice(
      0,
      4
    );


const featuredPractice =
  trainingPrograms[0];


const supportingPractice =
  trainingPrograms.slice(
    1,
    3
  );


const statusLabels = {
  available:
    "Available",

  upcoming:
    "Upcoming",

  archived:
    "Archived"
} as const;


export default function HomePage() {

  return (
    <div
      className={
        styles.page
      }
      data-home-design="authority-v10"
      data-home-master="continuous-v11"
    >
      <section
        className={
          styles.heroV8
        }
        data-home-section="hero"
        data-home-chapter="hero"
        data-home-hero="v8"
      >
        <div
          className={
            styles.heroV8Ambient
          }
          aria-hidden="true"
        />


        <Container size="wide">
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
                  OFFENSIVE SECURITY / TUNISIA
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
                  className={
                    styles.primaryButton
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
                    styles.secondaryButton
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
                  NO BREACH
                </span>

                <span>
                  ATTACK SURFACE / TN
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
              </div>


              <div
                className={
                  styles.heroV8VisualFooter
                }
              >
                <span>
                  MAP
                </span>

                <span>
                  TEST
                </span>

                <span>
                  VALIDATE
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>


      <section
        className={
          styles.trust
        }
        data-home-section="company"
        data-home-chapter="trust"
      >
        <Container size="wide">
          <div
            className={
              styles.trustIntro
            }
          >
            <p
              className={
                styles.eyebrow
              }
            >
              NO BREACH
            </p>

            <h2>
              A cybersecurity organization built from offensive security.
            </h2>

            <p>
              Founded in Tunisia, No Breach brings together
              security services, hands-on education and
              cybersecurity community initiatives.
            </p>
          </div>


          <dl
            className={
              styles.trustStrip
            }
          >
            {
              companyFacts.map(
                (
                  fact
                ) => (
                  <div
                    key={
                      fact.label
                    }
                  >
                    <dt>
                      {
                        fact.label
                      }
                    </dt>

                    <dd>
                      {
                        fact.value
                      }
                    </dd>
                  </div>
                )
              )
            }
          </dl>
        </Container>
      </section>


      <section
        className={
          styles.audience
        }
        data-home-chapter="audience"
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
                START HERE
              </p>

              <h2>
                How can NoBreach
                help you?
              </h2>
            </div>

            <p>
              Two clear journeys. One connected security ecosystem.
            </p>
          </header>


          <div
            className={
              styles.audienceGrid
            }
          >
            <article
              className={
                styles.audiencePanel
              }
            >
              <span
                className={
                  styles.panelLabel
                }
              >
                FOR STUDENTS
              </span>

              <h3>
                Build real cybersecurity capability.
              </h3>

              <p>
                Learn through practical programs, technical
                modules and explicit learning outcomes.
              </p>

              <ul>
                <li>
                  Published learning paths
                </li>

                <li>
                  Hands-on technical practice
                </li>

                <li>
                  Clear levels and outcomes
                </li>
              </ul>

              <Link
                href="/training"
              >
                Explore Academy

                <span
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </article>


            <article
              className={
                styles.audiencePanel
              }
            >
              <span
                className={
                  styles.panelLabel
                }
              >
                FOR ORGANIZATIONS
              </span>

              <h3>
                Understand and reduce meaningful security risk.
              </h3>

              <p>
                Examine systems through attacker-oriented
                testing, technical validation and actionable
                security guidance.
              </p>

              <ul>
                <li>
                  Application and API security
                </li>

                <li>
                  Infrastructure assessment
                </li>

                <li>
                  Security training for teams
                </li>
              </ul>

              <Link
                href="/services"
              >
                Explore services

                <span
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </article>
          </div>
        </Container>
      </section>


      <section
        className={
          styles.services
        }
        data-home-section="services"
        data-home-chapter="services"
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
                SERVICES
              </p>

              <h2>
                Security built around
                real threats.
              </h2>
            </div>

            <p>
              Four core service areas connect technical assessment,
              validation and practical security improvement.
            </p>
          </header>


          <div
            className={
              styles.serviceGrid
            }
          >
            {
              services.map(
                (
                  service
                ) => (
                  <article
                    className={
                      styles.serviceCard
                    }
                    data-home-service
                    key={
                      service.href
                    }
                  >
                    <div
                      className={
                        styles.serviceTop
                      }
                    >
                      <span>
                        {
                          service.index
                        }
                      </span>

                      <span>
                        {
                          service.code
                        }
                      </span>
                    </div>

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

                    <ul>
                      {
                        service.capabilities.map(
                          (
                            capability
                          ) => (
                            <li
                              key={
                                capability
                              }
                            >
                              {
                                capability
                              }
                            </li>
                          )
                        )
                      }
                    </ul>

                    <Link
                      href={
                        service.href
                      }
                    >
                      Explore service

                      <span
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </article>
                )
              )
            }
          </div>
        </Container>
      </section>


      <section
        className={
          styles.capability
        }
        data-home-chapter="capability"
      >
        <Container size="wide">
          <div
            className={
              styles.capabilityGrid
            }
          >
            <div
              className={
                styles.capabilityCopy
              }
            >
              <p
                className={
                  styles.eyebrow
                }
              >
                FEATURED CAPABILITY
              </p>

              <h2>
                Examine applications
                from the attacker’s perspective.
              </h2>

              <p>
                Web application penetration testing combines
                structured assessment with manual reasoning around
                access boundaries, application behavior and
                business logic.
              </p>

              <ul>
                {
                  capabilityAreas.map(
                    (
                      item
                    ) => (
                      <li
                        key={
                          item
                        }
                      >
                        {
                          item
                        }
                      </li>
                    )
                  )
                }
              </ul>

              <Link
                className={
                  styles.textLink
                }
                href="/services/web-application-pentesting"
              >
                Explore web application security

                <span
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>


            <div
              className={
                styles.capabilityVisual
              }
              aria-hidden="true"
            >
              <div>
                <span>
                  REQUEST
                </span>

                <strong>
                  APPLICATION
                </strong>
              </div>

              <div>
                <span>
                  IDENTITY
                </span>

                <strong>
                  AUTH
                </strong>
              </div>

              <div>
                <span>
                  CONTROL
                </span>

                <strong>
                  ACCESS
                </strong>
              </div>

              <div>
                <span>
                  IMPACT
                </span>

                <strong>
                  BUSINESS
                </strong>
              </div>
            </div>
          </div>
        </Container>
      </section>


      <section
        className={
          styles.academy
        }
        data-home-chapter="academy"
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
                NOBREACH ACADEMY
              </p>

              <h2>
                Learn cybersecurity
                by doing cybersecurity.
              </h2>
            </div>

            <div
              className={
                styles.sectionAction
              }
            >
              <p>
                Explore the current public NoBreach learning range.
              </p>

              <Link
                href="/training"
              >
                Explore Academy

                <span
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </header>


          <div
            className={
              styles.courseGrid
            }
          >
            {
              trainingPrograms.map(
                (
                  program
                ) => (
                  <article
                    className={
                      styles.courseCard
                    }
                    key={
                      program.slug
                    }
                  >
                    <div
                      className={
                        styles.courseTop
                      }
                    >
                      <span>
                        {
                          program.category
                        }
                      </span>

                      <span
                        data-status={
                          program.status
                        }
                      >
                        {
                          statusLabels[
                            program.status
                          ]
                        }
                      </span>
                    </div>

                    <h3>
                      {
                        program.title
                      }
                    </h3>

                    <p>
                      {
                        program.summary
                      }
                    </p>

                    <dl>
                      <div>
                        <dt>
                          Level
                        </dt>

                        <dd>
                          {
                            program.level
                          }
                        </dd>
                      </div>

                      <div>
                        <dt>
                          Format
                        </dt>

                        <dd>
                          {
                            program.format
                          }
                        </dd>
                      </div>
                    </dl>

                    <Link
                      href={
                        `/training/${program.slug}`
                      }
                    >
                      Explore course

                      <span
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </article>
                )
              )
            }
          </div>
        </Container>
      </section>


      <section
        className={
          styles.labs
        }
        data-home-chapter="labs"
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
                HANDS-ON PRACTICE
              </p>

              <h2>
                Go deeper than
                course descriptions.
              </h2>
            </div>

            <p>
              Published curriculum modules show how NoBreach
              turns learning into a technical sequence.
            </p>
          </header>


          <div
            className={
              styles.labLayout
            }
          >
            {
              featuredPractice
              ?
                (
                  <article
                    className={
                      styles.featuredLab
                    }
                  >
                    <div
                      className={
                        styles.labTop
                      }
                    >
                      <span>
                        FEATURED PRACTICE
                      </span>

                      <span>
                        {
                          featuredPractice.category
                        }
                      </span>
                    </div>

                    <h3>
                      {
                        featuredPractice.title
                      }
                    </h3>

                    <ol>
                      {
                        featuredPractice.modules
                          .slice(
                            0,
                            3
                          )
                          .map(
                            (
                              module
                            ) => (
                              <li
                                key={
                                  module.number
                                }
                              >
                                <span>
                                  {
                                    module.number
                                  }
                                </span>

                                <div>
                                  <strong>
                                    {
                                      module.title
                                    }
                                  </strong>

                                  <p>
                                    {
                                      module.description
                                    }
                                  </p>
                                </div>
                              </li>
                            )
                          )
                      }
                    </ol>

                    <Link
                      href={
                        `/training/${featuredPractice.slug}`
                      }
                    >
                      View curriculum

                      <span
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </article>
                )
              :
                null
            }


            <div
              className={
                styles.supportingLabs
              }
            >
              {
                supportingPractice.map(
                  (
                    program
                  ) => (
                    <article
                      key={
                        program.slug
                      }
                    >
                      <span>
                        {
                          program.category
                        }
                      </span>

                      <h3>
                        {
                          program.title
                        }
                      </h3>

                      <p>
                        {
                          program.modules[0]
                            ?.description
                          ??
                          program.summary
                        }
                      </p>

                      <Link
                        href={
                          `/training/${program.slug}`
                        }
                      >
                        Explore practice

                        <span
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    </article>
                  )
                )
              }
            </div>
          </div>
        </Container>
      </section>


      <section
        className={
          styles.why
        }
        data-home-chapter="why"
      >
        <Container size="wide">
          <div
            className={
              styles.whyGrid
            }
          >
            <header
              className={
                styles.whyIntro
              }
            >
              <p
                className={
                  styles.eyebrow
                }
              >
                WHY NOBREACH
              </p>

              <h2>
                One security mindset
                across the ecosystem.
              </h2>

              <p>
                Services, learning and technical community work
                reinforce the same practical approach.
              </p>
            </header>


            <div
              className={
                styles.whyRows
              }
            >
              {
                whyNoBreach.map(
                  (
                    item
                  ) => (
                    <article
                      key={
                        item.index
                      }
                    >
                      <span>
                        {
                          item.index
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


      <section
        className={
          styles.process
        }
        data-home-chapter="process"
      >
        <Container size="wide">
          <header
            className={
              styles.processIntro
            }
          >
            <p
              className={
                styles.eyebrow
              }
            >
              SECURITY METHODOLOGY
            </p>

            <h2>
              From scope to
              remediation guidance.
            </h2>

            <p>
              A clear technical sequence keeps assessment work
              connected from initial context through actionable output.
            </p>
          </header>


          <ol
            className={
              styles.processTrack
            }
          >
            {
              process.map(
                (
                  step
                ) => (
                  <li
                    key={
                      step.index
                    }
                  >
                    <span>
                      {
                        step.index
                      }
                    </span>

                    <strong>
                      {
                        step.title
                      }
                    </strong>
                  </li>
                )
              )
            }
          </ol>
        </Container>
      </section>


      <section
        className={
          styles.proof
        }
        data-home-section="explore"
        data-home-chapter="proof"
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
                PUBLIC WORK
              </p>

              <h2>
                Explore the wider
                NoBreach ecosystem.
              </h2>
            </div>

            <p>
              Public challenge, training, event and research
              destinations provide direct evidence of the work.
            </p>
          </header>


          <div
            className={
              styles.proofLayout
            }
          >
            <article
              className={
                styles.proofFeature
              }
            >
              <div
                className={
                  styles.proofFeatureTop
                }
              >
                <span>
                  01
                </span>

                <span>
                  SIGNATURE CHALLENGE
                </span>
              </div>

              <h3>
                CR4CKOUT
              </h3>

              <p>
                A game-like, story-driven cybersecurity challenge
                combining technical skill and creative thinking.
              </p>

              <div
                className={
                  styles.proofWords
                }
              >
                <span>
                  HACK
                </span>

                <span>
                  LEARN
                </span>

                <span>
                  BREAK
                </span>

                <span>
                  BUILD
                </span>
              </div>

              <Link
                href="/cr4ckout"
              >
                Explore CR4CKOUT

                <span
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </article>


            <div
              className={
                styles.proofDirectory
              }
            >
              {
                proofLinks.map(
                  (
                    item
                  ) => (
                    <Link
                      href={
                        item.href
                      }
                      key={
                        item.href
                      }
                    >
                      <span
                        className={
                          styles.proofIndex
                        }
                      >
                        {
                          item.index
                        }
                      </span>

                      <span
                        className={
                          styles.proofLabel
                        }
                      >
                        {
                          item.label
                        }
                      </span>

                      <div>
                        <strong>
                          {
                            item.title
                          }
                        </strong>

                        <p>
                          {
                            item.description
                          }
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  )
                )
              }
            </div>
          </div>
        </Container>
      </section>


      <section
        className={
          styles.metrics
        }
        data-home-chapter="metrics"
      >
        <Container size="wide">
          <div
            className={
              styles.metricGrid
            }
          >
            <div>
              <strong>
                4
              </strong>

              <span>
                Core service areas
              </span>
            </div>

            <div>
              <strong>
                {
                  trainingPrograms.length
                }
              </strong>

              <span>
                Public programs
              </span>
            </div>

            <div>
              <strong>
                1
              </strong>

              <span>
                Signature CR4CKOUT challenge
              </span>
            </div>

            <div>
              <strong>
                2023
              </strong>

              <span>
                Founded
              </span>
            </div>
          </div>
        </Container>
      </section>


      {
        currentTeam.length
        >
        0
          ?
            (
              <section
                className={
                  styles.team
                }
                data-home-chapter="team"
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
                        PEOPLE
                      </p>

                      <h2>
                        Expertise behind
                        the work.
                      </h2>
                    </div>

                    <div
                      className={
                        styles.sectionAction
                      }
                    >
                      <p>
                        Only current confirmed public profiles are shown.
                      </p>

                      <Link
                        href="/company/team"
                      >
                        View team

                        <span
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    </div>
                  </header>


                  <div
                    className={
                      styles.teamGrid
                    }
                  >
                    {
                      currentTeam.map(
                        (
                          member
                        ) => (
                          <article
                            key={
                              member.name
                            }
                          >
                            <div
                              className={
                                styles.teamInitials
                              }
                            >
                              {
                                member.initials
                              }
                            </div>

                            <span>
                              {
                                member.role
                              }
                            </span>

                            <h3>
                              {
                                member.name
                              }
                            </h3>

                            <p>
                              {
                                member.bio
                              }
                            </p>
                          </article>
                        )
                      )
                    }
                  </div>
                </Container>
              </section>
            )
          :
            null
      }


      <section
        className={
          styles.resources
        }
        data-home-chapter="resources"
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
                INSIGHTS
              </p>

              <h2>
                Security thinking
                worth publishing.
              </h2>
            </div>

            <div
              className={
                styles.sectionAction
              }
            >
              <p>
                Technical research focused on practical security problems.
              </p>

              <Link
                href="/insights"
              >
                Browse Insights

                <span
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </header>


          <div
            className={
              styles.resourceLayout
            }
          >
            <Link
              className={
                styles.resourceFeature
              }
              href={
                resources[0].href
              }
            >
              <span>
                {
                  resources[0].category
                }
              </span>

              <h3>
                {
                  resources[0].title
                }
              </h3>

              <strong>
                Read research →
              </strong>
            </Link>


            <div
              className={
                styles.resourceSecondary
              }
            >
              {
                resources
                  .slice(
                    1
                  )
                  .map(
                    (
                      resource
                    ) => (
                      <Link
                        href={
                          resource.href
                        }
                        key={
                          resource.href
                        }
                      >
                        <span>
                          {
                            resource.category
                          }
                        </span>

                        <strong>
                          {
                            resource.title
                          }
                        </strong>

                        <i
                          aria-hidden="true"
                        >
                          →
                        </i>
                      </Link>
                    )
                  )
              }
            </div>
          </div>
        </Container>
      </section>


      <section
        className={
          styles.faq
        }
        data-home-chapter="faq"
      >
        <Container size="wide">
          <div
            className={
              styles.faqLayout
            }
          >
            <header
              className={
                styles.faqIntro
              }
            >
              <p
                className={
                  styles.eyebrow
                }
              >
                FAQ
              </p>

              <h2>
                Find the right
                place to start.
              </h2>

              <p>
                A short orientation across the NoBreach public ecosystem.
              </p>
            </header>


            <div
              className={
                styles.faqList
              }
            >
              {
                faqItems.map(
                  (
                    item
                  ) => (
                    <details
                      className={
                        styles.faqItem
                      }
                      key={
                        item.question
                      }
                    >
                      <summary>
                        <span>
                          {
                            item.question
                          }
                        </span>

                        <span
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </summary>

                      <p>
                        {
                          item.answer
                        }
                      </p>
                    </details>
                  )
                )
              }
            </div>
          </div>
        </Container>
      </section>


      <section
        className={
          styles.feed
        }
        data-home-chapter="feed"
      >
        <Container size="wide">
          <div
            className={
              styles.feedInner
            }
          >
            <div>
              <p
                className={
                  styles.eyebrow
                }
              >
                RESEARCH FEED
              </p>

              <h2>
                Follow published
                technical work.
              </h2>

              <p>
                Use the public feed to follow new NoBreach security research.
              </p>
            </div>

            <Link
              className={
                styles.secondaryButton
              }
              href="/feed.xml"
            >
              Open research feed

              <span
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </Container>
      </section>


      <section
        className={
          styles.finalCta
        }
        data-home-section="contact"
        data-home-chapter="cta"
      >
        <Container size="wide">
          <div
            className={
              styles.finalCtaInner
            }
          >
            <div>
              <p
                className={
                  styles.eyebrow
                }
              >
                WORK WITH NOBREACH
              </p>

              <h2>
                Understand the system.
                Test the assumptions.
              </h2>

              <p>
                Explore the security services portfolio or contact
                NoBreach about the context you need to examine.
              </p>
            </div>

            <div
              className={
                styles.finalCtaActions
              }
            >
              <Link
                className={
                  styles.primaryButton
                }
                href="/services"
              >
                Explore services

                <span
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

              <Link
                className={
                  styles.secondaryButton
                }
                href="/contact"
              >
                Contact NoBreach

                <span
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
