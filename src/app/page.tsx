import type {
  Metadata
} from "next";

import Image from "next/image";
import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import {
  activities
} from "@/content/activities";

import {
  events
} from "@/content/events";

import {
  insights
} from "@/content/insights";

import {
  services
} from "@/content/services";

import {
  methodology,
  siteConfig
} from "@/content/site";

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


const currentFounder =
  team.find(
    (
      member
    ) =>
      member.status
      ===
      "current"
  )
  ??
  team[0];


const featuredService =
  services.find(
    (
      service
    ) =>
      service.slug
      ===
      "web-application-pentesting"
  );


const featuredProgram =
  trainingPrograms.find(
    (
      program
    ) =>
      program.slug
      ===
      "red-team-foundations"
  )
  ??
  trainingPrograms[0];


const featuredInsight =
  insights.find(
    (
      insight
    ) =>
      insight.featured
  )
  ??
  insights[0];


const supportingInsights =
  insights
    .filter(
      (
        insight
      ) =>
        insight.slug
        !==
        featuredInsight?.slug
    )
    .slice(
      0,
      3
    );


const latestPublishedEvent =
  events[0];


const companyFacts = [
  {
    label:
      "Founded",

    value:
      siteConfig.founded
  },
  {
    label:
      "Based",

    value:
      siteConfig.location
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


const journeys = [
  {
    index:
      "01",

    label:
      "For learners",

    title:
      "Build practical security skill.",

    description:
      "Use the No Breach Academy to compare published programs, prerequisites, curriculum and learning outcomes.",

    href:
      "/training",

    action:
      "View training"
  },
  {
    index:
      "02",

    label:
      "For organizations",

    title:
      "Understand and test your exposure.",

    description:
      "Explore security assessments or organization-facing training built around your systems, audience and context.",

    href:
      "/services",

    action:
      "View services"
  }
] as const;


const publicDestinations = [
  {
    index:
      "01",

    label:
      "ACTIVITY",

    title:
      "Technical activities",

    description:
      `${activities.length} published records across training, community work and practical cybersecurity activity.`,

    href:
      "/activities",

    action:
      "View activities"
  },
  {
    index:
      "02",

    label:
      "EVENTS",

    title:
      "Event archive",

    description:
      latestPublishedEvent
        ? `${latestPublishedEvent.title} is preserved as a ${latestPublishedEvent.status} event record.`
        : "Browse published No Breach event records.",

    href:
      "/events",

    action:
      "View events"
  }
] as const;


function formatPublishedDate(
  value: string
) {

  return new Intl.DateTimeFormat(
    "en",
    {
      day:
        "numeric",

      month:
        "short",

      year:
        "numeric"
    }
  ).format(
    new Date(
      `${value}T00:00:00`
    )
  );

}


export default function HomePage() {

  return (
    <div
      className={
        styles.page
      }
      data-home-design="authority-v10"
      data-home-master="continuous-v11"
      data-home-redesign="editorial-v12"
    >

      {/* ================================================================ */}
      {/* 01 — CLEAR PROPOSITION                                            */}
      {/* ================================================================ */}

      <section
        className={
          styles.hero
        }
        data-home-section="hero"
        data-home-chapter="hero"
        data-home-hero="v8"
        data-home-hero-spec="attack-path-v13"
        aria-labelledby="home-hero-title"
      >
        <Container
          size="wide"
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
                  styles.eyebrow
                }
              >
                OFFENSIVE SECURITY / TUNISIA
              </p>

              <h1
                className={
                  styles.heroTitle
                }
                id="home-hero-title"
              >
                Offensive security built around
                {" "}
                <span>
                  how real systems fail.
                </span>
              </h1>

              <p
                className={
                  styles.heroLead
                }
              >
                No Breach helps organizations understand exposure,
                validate meaningful weaknesses and turn technical
                findings into practical security decisions.
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
                    styles.secondaryAction
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
              </div>

              <ul
                className={
                  styles.heroPrinciples
                }
                aria-label="No Breach security approach"
              >
                <li>
                  Manual reasoning
                </li>

                <li>
                  Attack-path validation
                </li>

                <li>
                  Actionable guidance
                </li>
              </ul>
            </div>


            <div
              className={
                styles.attackPanel
              }
              data-home-hero-visual="attack-surface"
              data-hero-art="attack-surface"
              data-attack-surface="true"
              aria-label="Illustrative application-security attack path"
            >
              <div
                className={
                  styles.attackPanelHeader
                }
              >
                <div>
                  <span>
                    NB / ATTACK SURFACE
                  </span>

                  <strong>
                    ILLUSTRATIVE MODEL
                  </strong>
                </div>

                <span
                  className={
                    styles.modelId
                  }
                >
                  MODEL / 01
                </span>
              </div>


              <p
                className={
                  styles.attackPanelNote
                }
              >
                Illustrative attack path — not a live assessment.
              </p>


              <div
                className={
                  styles.attackAxis
                }
                aria-hidden="true"
              >
                <span>
                  ENTRY
                </span>

                <span>
                  TRUST BOUNDARY
                </span>

                <span>
                  IMPACT
                </span>
              </div>


              <div
                className={
                  styles.attackPath
                }
              >
                <div
                  className={
                    styles.attackStage
                  }
                  data-stage="edge"
                >
                  <span>
                    01
                  </span>

                  <div>
                    <small>
                      EXTERNAL
                    </small>

                    <strong>
                      EDGE
                    </strong>
                  </div>
                </div>


                <div
                  className={
                    styles.attackConnector
                  }
                  aria-hidden="true"
                >
                  →
                </div>


                <div
                  className={
                    styles.attackStage
                  }
                  data-stage="application"
                >
                  <span>
                    02
                  </span>

                  <div>
                    <small>
                      SURFACE
                    </small>

                    <strong>
                      APP
                    </strong>
                  </div>
                </div>


                <div
                  className={
                    styles.attackConnector
                  }
                  aria-hidden="true"
                >
                  →
                </div>


                <div
                  className={
                    styles.attackStage
                  }
                  data-stage="identity"
                >
                  <span>
                    03
                  </span>

                  <div>
                    <small>
                      IDENTITY
                    </small>

                    <strong>
                      AUTH
                    </strong>
                  </div>
                </div>


                <div
                  className={
                    styles.attackConnector
                  }
                  aria-hidden="true"
                >
                  →
                </div>


                <div
                  className={
                    styles.attackStage
                  }
                  data-stage="access"
                >
                  <span>
                    04
                  </span>

                  <div>
                    <small>
                      BOUNDARY
                    </small>

                    <strong>
                      ACCESS
                    </strong>
                  </div>
                </div>


                <div
                  className={
                    styles.attackConnector
                  }
                  aria-hidden="true"
                >
                  →
                </div>


                <div
                  className={
                    styles.attackStage
                  }
                  data-stage="data"
                >
                  <span>
                    05
                  </span>

                  <div>
                    <small>
                      IMPACT
                    </small>

                    <strong>
                      DATA
                    </strong>
                  </div>
                </div>
              </div>


              <div
                className={
                  styles.attackReasoning
                }
              >
                <div>
                  <span>
                    01
                  </span>

                  <p>
                    Map the exposed surface.
                  </p>

                  <strong>
                    DISCOVER
                  </strong>
                </div>

                <div>
                  <span>
                    02
                  </span>

                  <p>
                    Challenge identity and access boundaries.
                  </p>

                  <strong>
                    TEST
                  </strong>
                </div>

                <div>
                  <span>
                    03
                  </span>

                  <p>
                    Confirm meaningful impact.
                  </p>

                  <strong>
                    VALIDATE
                  </strong>
                </div>
              </div>


              <div
                className={
                  styles.attackFooter
                }
              >
                <span>
                  MANUAL REASONING
                </span>

                <span>
                  ATTACKER PERSPECTIVE
                </span>

                <span>
                  ACTIONABLE OUTPUT
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================ */}
      {/* 02 — CHOOSE YOUR ROUTE                                           */}
      {/* ================================================================ */}

      <section
        className={
          styles.orientation
        }
        data-home-section="company"
        data-home-chapter="orientation"
        aria-labelledby="orientation-title"
      >
        <Container
          size="wide"
        >
          <div
            className={
              styles.orientationIntro
            }
          >
            <div>
              <p
                className={
                  styles.eyebrow
                }
              >
                NO BREACH
              </p>

              <h2
                id="orientation-title"
              >
                One security practice.
                <br />
                Two clear ways in.
              </h2>
            </div>

            <p
              className={
                styles.sectionLead
              }
            >
              {siteConfig.description}
              {" "}
              Start from the path that matches what you need today.
            </p>
          </div>


          <dl
            className={
              styles.factGrid
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
                      {fact.label}
                    </dt>

                    <dd>
                      {fact.value}
                    </dd>
                  </div>
                )
              )
            }
          </dl>


          <div
            className={
              styles.journeyGrid
            }
          >
            {
              journeys.map(
                (
                  journey
                ) => (
                  <article
                    className={
                      styles.journeyCard
                    }
                    key={
                      journey.index
                    }
                    data-home-journey={
                      journey.index
                    }
                  >
                    <div
                      className={
                        styles.journeyTopline
                      }
                    >
                      <span>
                        {journey.index}
                      </span>

                      <p>
                        {journey.label}
                      </p>
                    </div>

                    <h3>
                      {journey.title}
                    </h3>

                    <p>
                      {journey.description}
                    </p>

                    <Link
                      href={
                        journey.href
                      }
                      className={
                        styles.textAction
                      }
                    >
                      {journey.action}

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


      {/* ================================================================ */}
      {/* 03 — SECURITY SERVICES                                           */}
      {/* ================================================================ */}

      <section
        className={
          styles.servicesSection
        }
        data-home-section="services"
        data-home-chapter="services"
        aria-labelledby="services-title"
      >
        <Container
          size="wide"
        >
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
                SECURITY SERVICES
              </p>

              <h2
                id="services-title"
              >
                Choose the assessment
                that matches the system.
              </h2>
            </div>

            <div
              className={
                styles.sectionHeaderSide
              }
            >
              <p>
                Each service keeps a distinct scope while sharing the
                same emphasis on context, manual reasoning, validation
                and useful remediation.
              </p>

              <Link
                className={
                  styles.textAction
                }
                href="/services"
              >
                View all services

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
                    key={
                      service.slug
                    }
                    data-home-service={
                      service.slug
                    }
                  >
                    <div
                      className={
                        styles.serviceTopline
                      }
                    >
                      <span>
                        {service.number}
                      </span>

                      <span>
                        {service.eyebrow}
                      </span>
                    </div>

                    <h3>
                      {service.shortTitle}
                    </h3>

                    <p
                      className={
                        styles.cardSummary
                      }
                    >
                      {service.summary}
                    </p>

                    <div
                      className={
                        styles.decisionGrid
                      }
                    >
                      <div>
                        <span>
                          Good fit
                        </span>

                        <strong>
                          {
                            service.suitableFor[0]
                            ??
                            "Defined security scope"
                          }
                        </strong>
                      </div>

                      <div>
                        <span>
                          Typical output
                        </span>

                        <strong>
                          {
                            service.deliverables[0]
                            ??
                            "Technical security guidance"
                          }
                        </strong>
                      </div>
                    </div>

                    <Link
                      href={
                        `/services/${service.slug}`
                      }
                      className={
                        styles.textAction
                      }
                    >
                      View service

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


      {/* ================================================================ */}
      {/* 04 — HOW THE WORK IS APPROACHED                                  */}
      {/* ================================================================ */}

      <section
        className={
          styles.approachSection
        }
        data-home-chapter="approach"
        aria-labelledby="approach-title"
      >
        <Container
          size="wide"
        >
          <div
            className={
              styles.approachGrid
            }
          >
            <div
              className={
                styles.approachIntro
              }
            >
              <p
                className={
                  styles.eyebrow
                }
              >
                SECURITY METHODOLOGY
              </p>

              <h2
                id="approach-title"
              >
                From scope to
                remediation guidance.
              </h2>

              <p
                className={
                  styles.sectionLead
                }
              >
                Security work is treated as a sequence:
                understand the environment, map the attack surface,
                test meaningful assumptions, validate impact and
                communicate what should happen next.
              </p>


              {
                featuredService
                  ? (
                    <aside
                      className={
                        styles.capabilityNote
                      }
                      aria-label="Featured application security capability"
                    >
                      <span>
                        FEATURED CAPABILITY
                      </span>

                      <h3>
                        {featuredService.shortTitle}
                      </h3>

                      <p>
                        {featuredService.description}
                      </p>

                      <ul>
                        {
                          featuredService.scope
                            .slice(
                              0,
                              4
                            )
                            .map(
                              (
                                scopeItem
                              ) => (
                                <li
                                  key={
                                    scopeItem
                                  }
                                >
                                  {scopeItem}
                                </li>
                              )
                            )
                        }
                      </ul>

                      <Link
                        className={
                          styles.textAction
                        }
                        href={
                          `/services/${featuredService.slug}`
                        }
                      >
                        View application-security scope

                        <span
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    </aside>
                  )
                  :
                  null
              }
            </div>


            <ol
              className={
                styles.methodList
              }
            >
              {
                methodology.map(
                  (
                    step
                  ) => (
                    <li
                      key={
                        step.number
                      }
                    >
                      <span
                        className={
                          styles.methodNumber
                        }
                      >
                        {step.number}
                      </span>

                      <div>
                        <h3>
                          {step.title}
                        </h3>

                        <p>
                          {step.description}
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


      {/* ================================================================ */}
      {/* 05 — TRAINING AND PRACTICAL LEARNING                             */}
      {/* ================================================================ */}

      <section
        className={
          styles.trainingSection
        }
        data-home-chapter="training"
        aria-labelledby="training-title"
      >
        <Container
          size="wide"
        >
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
                NO BREACH ACADEMY
              </p>

              <h2
                id="training-title"
              >
                Learn cybersecurity
                by doing cybersecurity.
              </h2>
            </div>

            <div
              className={
                styles.sectionHeaderSide
              }
            >
              <p>
                Training is the public learner route. Organization
                and team engagements remain separate through the
                Security Training service.
              </p>

              <Link
                className={
                  styles.textAction
                }
                href="/training"
              >
                View training

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
                    data-home-program={
                      program.slug
                    }
                  >
                    <div
                      className={
                        styles.courseTopline
                      }
                    >
                      <span>
                        {program.category}
                      </span>

                      <span
                        className={
                          styles.publishedStatus
                        }
                      >
                        Program published
                      </span>
                    </div>

                    <div
                      className={
                        styles.courseMain
                      }
                    >
                      <h3>
                        {program.title}
                      </h3>

                      <p>
                        {program.summary}
                      </p>
                    </div>

                    <dl
                      className={
                        styles.courseMeta
                      }
                    >
                      <div>
                        <dt>
                          Level
                        </dt>

                        <dd>
                          {program.level}
                        </dd>
                      </div>

                      <div>
                        <dt>
                          Format
                        </dt>

                        <dd>
                          {program.format}
                        </dd>
                      </div>

                      {
                        program.duration
                          ? (
                            <div>
                              <dt>
                                Duration
                              </dt>

                              <dd>
                                {program.duration}
                              </dd>
                            </div>
                          )
                          :
                          null
                      }
                    </dl>

                    <Link
                      className={
                        styles.textAction
                      }
                      href={
                        `/training/${program.slug}`
                      }
                    >
                      View course

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


          {
            featuredProgram
              ? (
                <div
                  className={
                    styles.curriculumPreview
                  }
                >
                  <div
                    className={
                      styles.curriculumIntro
                    }
                  >
                    <p
                      className={
                        styles.eyebrow
                      }
                    >
                      CURRICULUM PREVIEW
                    </p>

                    <h3>
                      {featuredProgram.title}
                    </h3>

                    <p>
                      Instead of repeating another course card,
                      this preview exposes the actual progression
                      learners move through.
                    </p>

                    <Link
                      className={
                        styles.textAction
                      }
                      href={
                        `/training/${featuredProgram.slug}`
                      }
                    >
                      View complete curriculum

                      <span
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </div>


                  <ol
                    className={
                      styles.curriculumList
                    }
                  >
                    {
                      featuredProgram.modules
                        .slice(
                          0,
                          5
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
                                {module.number}
                              </span>

                              <div>
                                <strong>
                                  {module.title}
                                </strong>

                                <p>
                                  {module.description}
                                </p>
                              </div>
                            </li>
                          )
                        )
                    }
                  </ol>
                </div>
              )
              :
              null
          }
        </Container>
      </section>


      {/* ================================================================ */}
      {/* 06 — PUBLIC WORK AND COMMUNITY                                   */}
      {/* ================================================================ */}

      <section
        className={
          styles.publicWorkSection
        }
        data-home-section="explore"
        data-home-chapter="public-work"
        aria-labelledby="public-work-title"
      >
        <Container
          size="wide"
        >
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

              <h2
                id="public-work-title"
              >
                Security practice
                beyond client work.
              </h2>
            </div>

            <p
              className={
                styles.sectionLead
              }
            >
              Public activities, events and CR4CKOUT show how
              technical learning and community participation fit
              into the wider No Breach ecosystem.
            </p>
          </header>


          <div
            className={
              styles.publicWorkGrid
            }
          >
            <article
              className={
                styles.cr4ckoutFeature
              }
            >
              <div
                className={
                  styles.featureTopline
                }
              >
                <span>
                  SIGNATURE CHALLENGE
                </span>

                <span>
                  CR4CKOUT
                </span>
              </div>

              <h3>
                A story-driven cybersecurity challenge built
                for active participation.
              </h3>

              <p>
                CR4CKOUT combines technical challenge solving,
                practical cybersecurity activity and shared
                learning in a dedicated community experience.
              </p>

              {
                latestPublishedEvent
                  ? (
                    <div
                      className={
                        styles.eventContext
                      }
                    >
                      <span>
                        EVENT RECORD
                      </span>

                      <strong>
                        {latestPublishedEvent.title}
                      </strong>

                      <small>
                        {
                          latestPublishedEvent.status
                            .toUpperCase()
                        }
                        {" · "}
                        {latestPublishedEvent.year}
                        {" · "}
                        {latestPublishedEvent.location}
                      </small>
                    </div>
                  )
                  :
                  null
              }

              <Link
                className={
                  styles.primaryAction
                }
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
                styles.publicDirectory
              }
            >
              {
                publicDestinations.map(
                  (
                    destination
                  ) => (
                    <Link
                      className={
                        styles.directoryRow
                      }
                      href={
                        destination.href
                      }
                      key={
                        destination.href
                      }
                    >
                      <span
                        className={
                          styles.directoryIndex
                        }
                      >
                        {destination.index}
                      </span>

                      <div>
                        <small>
                          {destination.label}
                        </small>

                        <strong>
                          {destination.title}
                        </strong>

                        <p>
                          {destination.description}
                        </p>
                      </div>

                      <span
                        className={
                          styles.directoryAction
                        }
                      >
                        {destination.action}
                        {" "}
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


      {/* ================================================================ */}
      {/* 07 — PEOPLE BEHIND THE WORK                                      */}
      {/* ================================================================ */}

      <section
        className={
          styles.peopleSection
        }
        data-home-chapter="people"
        aria-labelledby="people-title"
      >
        <Container
          size="wide"
        >
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

              <h2
                id="people-title"
              >
                The person behind
                the current public profile.
              </h2>
            </div>

            <p
              className={
                styles.sectionLead
              }
            >
              The layout reflects the amount of approved public
              profile data available today rather than forcing one
              person into an empty multi-column team grid.
            </p>
          </header>


          {
            currentFounder
              ? (
                <article
                  className={
                    styles.founderRow
                  }
                  data-home-founder={
                    currentFounder.name
                  }
                >
                  <div
                    className={
                      styles.founderPortrait
                    }
                  >
                    <Image
                      src="/people/ceo.png"
                      alt={`${currentFounder.name}, ${currentFounder.role} of No Breach`}
                      fill
                      sizes="(max-width: 800px) 100vw, 420px"
                    />
                  </div>


                  <div
                    className={
                      styles.founderContent
                    }
                  >
                    <div
                      className={
                        styles.founderIdentity
                      }
                    >
                      <span>
                        {currentFounder.role}
                      </span>

                      <h3>
                        {currentFounder.name}
                      </h3>

                      <p>
                        {currentFounder.bio}
                      </p>
                    </div>


                    <ul
                      className={
                        styles.specialtyList
                      }
                      aria-label={`${currentFounder.name} specialties`}
                    >
                      {
                        currentFounder.specialties.map(
                          (
                            specialty
                          ) => (
                            <li
                              key={
                                specialty
                              }
                            >
                              {specialty}
                            </li>
                          )
                        )
                      }
                    </ul>


                    <div
                      className={
                        styles.founderActions
                      }
                    >
                      <Link
                        className={
                          styles.primaryAction
                        }
                        href="/company/founder"
                      >
                        View founder profile

                        <span
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>

                      {
                        currentFounder.linkedin
                          ? (
                            <a
                              className={
                                styles.secondaryAction
                              }
                              href={
                                currentFounder.linkedin
                              }
                              target="_blank"
                              rel="noreferrer"
                            >
                              LinkedIn

                              <span
                                aria-hidden="true"
                              >
                                ↗
                              </span>
                            </a>
                          )
                          :
                          null
                      }
                    </div>
                  </div>
                </article>
              )
              :
              null
          }
        </Container>
      </section>


      {/* ================================================================ */}
      {/* 08 — TECHNICAL INSIGHTS                                          */}
      {/* ================================================================ */}

      <section
        className={
          styles.insightsSection
        }
        data-home-chapter="insights"
        aria-labelledby="insights-title"
      >
        <Container
          size="wide"
        >
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
                TECHNICAL INSIGHTS
              </p>

              <h2
                id="insights-title"
              >
                Published thinking
                with context.
              </h2>
            </div>

            <div
              className={
                styles.sectionHeaderSide
              }
            >
              <p>
                Article previews expose the real summary,
                publication date, reading time and author before
                asking visitors to open the full piece.
              </p>

              <Link
                className={
                  styles.textAction
                }
                href="/insights"
              >
                View all insights

                <span
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </header>


          {
            featuredInsight
              ? (
                <div
                  className={
                    styles.insightGrid
                  }
                >
                  <article
                    className={
                      styles.featuredInsight
                    }
                  >
                    <div
                      className={
                        styles.insightMeta
                      }
                    >
                      <span>
                        {featuredInsight.category}
                      </span>

                      <time
                        dateTime={
                          featuredInsight.publishedAt
                        }
                      >
                        {
                          formatPublishedDate(
                            featuredInsight.publishedAt
                          )
                        }
                      </time>

                      <span>
                        {featuredInsight.readingTime}
                      </span>
                    </div>

                    <h3>
                      {featuredInsight.title}
                    </h3>

                    <p>
                      {featuredInsight.summary}
                    </p>

                    <div
                      className={
                        styles.insightByline
                      }
                    >
                      Published by
                      {" "}
                      <strong>
                        {featuredInsight.author}
                      </strong>
                    </div>

                    <Link
                      className={
                        styles.primaryAction
                      }
                      href={
                        `/insights/${featuredInsight.slug}`
                      }
                    >
                      Read article

                      <span
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </article>


                  <div
                    className={
                      styles.insightList
                    }
                  >
                    {
                      supportingInsights.map(
                        (
                          insight
                        ) => (
                          <Link
                            href={
                              `/insights/${insight.slug}`
                            }
                            className={
                              styles.insightRow
                            }
                            key={
                              insight.slug
                            }
                          >
                            <div
                              className={
                                styles.insightRowMeta
                              }
                            >
                              <span>
                                {insight.category}
                              </span>

                              <time
                                dateTime={
                                  insight.publishedAt
                                }
                              >
                                {
                                  formatPublishedDate(
                                    insight.publishedAt
                                  )
                                }
                              </time>
                            </div>

                            <strong>
                              {insight.title}
                            </strong>

                            <p>
                              {insight.summary}
                            </p>

                            <span
                              className={
                                styles.directoryAction
                              }
                            >
                              Read article →
                            </span>
                          </Link>
                        )
                      )
                    }
                  </div>
                </div>
              )
              :
              null
          }
        </Container>
      </section>


      {/* ================================================================ */}
      {/* EXISTING CONVERSION ENDING                                       */}
      {/* ================================================================ */}

      <section
        className={
          styles.finalCta
        }
        data-home-section="contact"
        data-home-ending="cta"
        aria-labelledby="home-contact-title"
      >
        <Container
          size="wide"
        >
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
                WORK WITH NO BREACH
              </p>

              <h2
                id="home-contact-title"
              >
                Understand the system.
                <br />
                Test the assumptions.
              </h2>
            </div>

            <div
              className={
                styles.finalCtaCopy
              }
            >
              <p>
                Discuss the application, API, infrastructure
                or training context you want to examine.
              </p>

              <div
                className={
                  styles.finalActions
                }
              >
                <Link
                  className={
                    styles.primaryAction
                  }
                  href="/contact"
                >
                  Contact No Breach

                  <span
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>

                <Link
                  className={
                    styles.secondaryAction
                  }
                  href="/services"
                >
                  View services

                  <span
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );

}
