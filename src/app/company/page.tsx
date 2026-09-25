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

import styles from "./company.module.css";


export const metadata:
  Metadata = {

  title:
    "Company | No Breach",

  description:
    "No Breach brings together offensive security, practical cybersecurity education and community initiatives."
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
      "Model",

    value:
      "Services · Education · Community"
  }
] as const;


const principles = [
  {
    index:
      "01",

    title:
      "Think offensively",

    description:
      "Understand systems from an attacker’s perspective."
  },
  {
    index:
      "02",

    title:
      "Build through practice",

    description:
      "Security knowledge should be exercised, tested and demonstrated."
  },
  {
    index:
      "03",

    title:
      "Share knowledge",

    description:
      "Education and community strengthen the security ecosystem."
  }
] as const;


const timeline = [
  {
    year:
      "2023",

    title:
      "No Breach founded",

    description:
      "The company begins in Tunis around an offensive-security mindset."
  },
  {
    year:
      "2024",

    title:
      "Training Hub established",

    description:
      "Practical cybersecurity learning becomes a public part of the ecosystem."
  },
  {
    year:
      "2024",

    title:
      "CR4CKOUT launched",

    description:
      "Technical challenge and experimentation become part of the public community experience."
  },
  {
    year:
      "2025+",

    title:
      "Community and training activities",

    description:
      "No Breach continues connecting security practice with learning and public technical activity."
  },
  {
    year:
      "Today",

    title:
      "Continuing to build",

    description:
      "Services, Academy, research and community work continue as one connected system."
  }
] as const;


const expertise = [
  {
    index:
      "01",

    code:
      "WEB",

    title:
      "Web Application Security",

    description:
      "Application behavior, authorization, authentication and business-logic security.",

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
      "Identity, object-level access and exposed application interfaces.",

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
      "External exposure, configuration and infrastructure attack paths.",

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
      "Hands-on technical learning for people, teams and communities.",

    href:
      "/services/security-training"
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


export default function CompanyPage() {

  return (
    <div
      className={
        styles.page
      }
      data-company-about="strict-v20"
    >
      <section
        className={
          styles.pageIntro
        }
        data-company-section="intro"
      >
        <div
          className={
            styles.introDecoration
          }
          aria-hidden="true"
        />


        <Container size="wide">
          <div
            className={
              styles.introGrid
            }
          >
            <div
              className={
                styles.introCopy
              }
            >
              <p
                className={
                  styles.eyebrow
                }
              >
                NOBREACH / COMPANY
              </p>


              <h1>
                Offensive security
                <span>
                  beyond the assessment.
                </span>
              </h1>


              <p
                className={
                  styles.introLead
                }
              >
                Security services, practical education and
                community — connected by one offensive mindset.
              </p>


              <div
                className={
                  styles.introActions
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
                  href="/company/team"
                >
                  Meet the team

                  <span
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>


            <dl
              className={
                styles.companyFacts
              }
              aria-label="No Breach company profile"
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
          </div>
        </Container>
      </section>


      <section
        className={
          styles.story
        }
        data-company-section="story"
      >
        <Container size="wide">
          <div
            className={
              styles.storyGrid
            }
          >
            <header
              className={
                styles.storyHeading
              }
            >
              <p
                className={
                  styles.eyebrow
                }
              >
                01 / STORY
              </p>

              <h2>
                Built from
                offensive security.
              </h2>
            </header>


            <div
              className={
                styles.storyCopy
              }
            >
              <p
                className={
                  styles.storyLead
                }
              >
                Founded in Tunis in 2023, No Breach brings
                security services, practical cybersecurity
                education and community initiatives together
                inside one connected organization.
              </p>


              <p>
                The operating idea is simple: technical testing,
                hands-on learning and shared security knowledge
                should reinforce each other rather than exist as
                separate activities.
              </p>


              <div
                className={
                  styles.storySequence
                }
                aria-label="No Breach operating sequence"
              >
                <span>
                  TEST
                </span>

                <i
                  aria-hidden="true"
                />

                <span>
                  LEARN
                </span>

                <i
                  aria-hidden="true"
                />

                <span>
                  SHARE
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>


      <section
        className={
          styles.missionVision
        }
        data-company-section="mission-vision"
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
                02 / DIRECTION
              </p>

              <h2>
                One operating mindset.
                Two clear directions.
              </h2>
            </div>


            <p>
              The company connects practical security work with
              capability-building rather than treating them as
              unrelated disciplines.
            </p>
          </header>


          <div
            className={
              styles.directionGrid
            }
          >
            <article>
              <span>
                MISSION
              </span>

              <h3>
                Turn offensive security into practical decisions.
              </h3>

              <p>
                Help organizations understand exposure and validate
                meaningful weaknesses while building practical
                security capability through education.
              </p>
            </article>


            <article>
              <span>
                VISION
              </span>

              <h3>
                A connected security ecosystem.
              </h3>

              <p>
                Testing, learning and knowledge-sharing should
                reinforce one another and make security practice
                more useful to organizations and learners.
              </p>
            </article>
          </div>
        </Container>
      </section>


      <section
        className={
          styles.values
        }
        data-company-section="values"
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
                03 / PRINCIPLES
              </p>

              <h2>
                How No Breach
                approaches the work.
              </h2>
            </div>


            <p>
              Three established principles guide the relationship
              between security practice, learning and community.
            </p>
          </header>


          <div
            className={
              styles.valueGrid
            }
          >
            {
              principles.map(
                (
                  principle
                ) => (
                  <article
                    key={
                      principle.index
                    }
                  >
                    <span
                      className={
                        styles.valueIndex
                      }
                    >
                      {
                        principle.index
                      }
                    </span>

                    <h3>
                      {
                        principle.title
                      }
                    </h3>

                    <p>
                      {
                        principle.description
                      }
                    </p>
                  </article>
                )
              )
            }
          </div>
        </Container>
      </section>


      <section
        className={
          styles.timeline
        }
        data-company-section="timeline"
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
                04 / TIMELINE
              </p>

              <h2>
                A company still
                being built.
              </h2>
            </div>


            <p>
              Only established public milestones are shown.
            </p>
          </header>


          <ol
            className={
              styles.timelineTrack
            }
          >
            {
              timeline.map(
                (
                  item,
                  index
                ) => (
                  <li
                    key={
                      `${item.year}-${item.title}`
                    }
                  >
                    <span
                      className={
                        styles.timelineIndex
                      }
                    >
                      {
                        String(
                          index
                          +
                          1
                        ).padStart(
                          2,
                          "0"
                        )
                      }
                    </span>

                    <strong>
                      {
                        item.year
                      }
                    </strong>

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
                  </li>
                )
              )
            }
          </ol>
        </Container>
      </section>


      <section
        className={
          styles.expertise
        }
        data-company-section="expertise"
      >
        <Container size="wide">
          <div
            className={
              styles.expertiseLayout
            }
          >
            <header
              className={
                styles.expertiseIntro
              }
            >
              <p
                className={
                  styles.eyebrow
                }
              >
                05 / EXPERTISE
              </p>

              <h2>
                Technical security
                remains the foundation.
              </h2>

              <p>
                The public service portfolio stays centered on
                application, API, infrastructure and practical
                security training.
              </p>
            </header>


            <div
              className={
                styles.expertiseRows
              }
            >
              {
                expertise.map(
                  (
                    item
                  ) => (
                    <Link
                      href={
                        item.href
                      }
                      key={
                        item.index
                      }
                    >
                      <span
                        className={
                          styles.expertiseIndex
                        }
                      >
                        {
                          item.index
                        }
                      </span>

                      <span
                        className={
                          styles.expertiseCode
                        }
                      >
                        {
                          item.code
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
          styles.team
        }
        data-company-section="team"
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
                06 / PEOPLE
              </p>

              <h2>
                People behind
                the work.
              </h2>
            </div>


            <div
              className={
                styles.sectionAction
              }
            >
              <p>
                The preview uses only current published team profiles.
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
                      aria-hidden="true"
                    >
                      {
                        member.initials
                      }
                    </div>

                    <p
                      className={
                        styles.teamRole
                      }
                    >
                      {
                        member.role
                      }
                    </p>

                    <h3>
                      {
                        member.name
                      }
                    </h3>

                    <p
                      className={
                        styles.teamBio
                      }
                    >
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


      <section
        className={
          styles.cta
        }
        data-company-section="cta"
      >
        <Container size="wide">
          <div
            className={
              styles.ctaInner
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
                Examine systems from
                an attacker’s perspective.
              </h2>

              <p>
                Explore the security portfolio or contact No Breach
                about the context you need to examine.
              </p>
            </div>


            <div
              className={
                styles.ctaActions
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
                Contact No Breach

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
