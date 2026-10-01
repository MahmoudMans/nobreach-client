import type {
  Metadata
} from "next";

import Image from "next/image";
import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import {
  founderProfile
} from "@/content/founder";

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
      "Activities",

    value:
      "Services · Education · Community"
  }
] as const;


const missionVision = [
  {
    label:
      "Mission",

    title:
      "Turn offensive security into practical decisions.",

    description:
      "Help organizations understand exposure and validate meaningful weaknesses, while building practical security capability through education."
  },
  {
    label:
      "Vision",

    title:
      "Connect security practice, learning and knowledge-sharing.",

    description:
      "Testing, education and community should reinforce one another and make security practice more useful to organizations and learners."
  }
] as const;


const milestones = [
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
  }
] as const;


const ongoingActivity = [
  {
    period:
      "2025 onward",

    title:
      "Community and training activities",

    description:
      "No Breach continues connecting security practice with learning and public technical activity."
  },
  {
    period:
      "Ongoing",

    title:
      "Continuing to build",

    description:
      "Services, Academy, research and community work continue as one connected system."
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
      "Exercise, test and demonstrate security knowledge."
  },
  {
    index:
      "03",

    title:
      "Share knowledge",

    description:
      "Connect education and community with security practice."
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


export default function CompanyPage() {

  return (
    <div
      className={
        styles.page
      }
      data-company-about="strict-v20"
      data-company-audit="v21"
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
                No Breach is a Tunisia-based cybersecurity organization
                working across security services, practical education and
                community initiatives.
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
                  href="/company/founder"
                >
                  Founder profile

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
          styles.missionVision
        }
        data-company-section="mission-vision"
      >
        <Container size="wide">
          <header
            className={
              styles.compactHeader
            }
          >
            <p
              className={
                styles.eyebrow
              }
            >
              01 / PURPOSE
            </p>

            <h2>
              Mission and vision
            </h2>
          </header>

          <div
            className={
              styles.directionGrid
            }
          >
            {
              missionVision.map(
                (
                  item
                ) => (
                  <article
                    key={
                      item.label
                    }
                  >
                    <span
                      className={
                        styles.informationLabel
                      }
                    >
                      {
                        item.label
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
                02 / HISTORY
              </p>

              <h2>
                Selected milestones
              </h2>
            </div>

            <p>
              Three published moments establish the company’s early
              development. Continuing activity is shown separately below.
            </p>
          </header>

          <ol
            className={
              styles.milestoneList
            }
          >
            {
              milestones.map(
                (
                  item
                ) => (
                  <li
                    data-company-milestone="true"
                    key={
                      `${item.year}-${item.title}`
                    }
                  >
                    <span
                      className={
                        styles.milestoneDate
                      }
                    >
                      {
                        item.year
                      }
                    </span>

                    <div
                      className={
                        styles.milestoneCopy
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
                  </li>
                )
              )
            }
          </ol>

          <div
            className={
              styles.ongoingActivity
            }
          >
            <div
              className={
                styles.ongoingHeading
              }
            >
              <p
                className={
                  styles.informationLabel
                }
              >
                CONTINUING WORK
              </p>

              <h3>
                Ongoing activity
              </h3>
            </div>

            <div
              className={
                styles.ongoingGrid
              }
            >
              {
                ongoingActivity.map(
                  (
                    item
                  ) => (
                    <article
                      data-company-ongoing="true"
                      key={
                        item.title
                      }
                    >
                      <span>
                        {
                          item.period
                        }
                      </span>

                      <h4>
                        {
                          item.title
                        }
                      </h4>

                      <p>
                        {
                          item.description
                        }
                      </p>
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
          styles.founder
        }
        data-company-section="founder"
      >
        <Container size="wide">
          <div
            className={
              styles.founderLayout
            }
          >
            <figure
              className={
                styles.founderPortrait
              }
            >
              <Image
                className={
                  styles.founderImage
                }
                src="/people/ceo.png"
                alt="Nouha Ben Brahim, founder of No Breach"
                width={
                  720
                }
                height={
                  720
                }
                sizes="(max-width: 820px) 100vw, 38vw"
              />

              <figcaption>
                No Breach founder
              </figcaption>
            </figure>

            <div
              className={
                styles.founderCopy
              }
            >
              <p
                className={
                  styles.eyebrow
                }
              >
                03 / FOUNDER
              </p>

              <h2>
                Meet the founder
              </h2>

              <p
                className={
                  styles.founderRole
                }
              >
                {
                  founderProfile.title
                }
              </p>

              <h3
                className={
                  styles.founderName
                }
              >
                {
                  founderProfile.name
                }
              </h3>

              <p
                className={
                  styles.founderBio
                }
              >
                {
                  founderProfile.summary
                }
              </p>

              <ul
                className={
                  styles.founderDescriptors
                }
                aria-label="Founder profile descriptors"
              >
                {
                  founderProfile.descriptors
                    .slice(
                      0,
                      4
                    )
                    .map(
                      (
                        descriptor
                      ) => (
                        <li
                          key={
                            descriptor
                          }
                        >
                          {
                            descriptor
                          }
                        </li>
                      )
                    )
                }
              </ul>

              <Link
                className={
                  styles.textAction
                }
                href="/company/founder"
              >
                Explore founder profile

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
          styles.approachExpertise
        }
        data-company-section="approach-expertise"
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
                04 / APPROACH & EXPERTISE
              </p>

              <h2>
                How we approach the work
              </h2>
            </div>

            <p>
              Three working principles connect the way No Breach thinks
              about security with the capabilities offered through its
              service portfolio.
            </p>
          </header>

          <div
            className={
              styles.principleGrid
            }
          >
            {
              principles.map(
                (
                  principle
                ) => (
                  <article
                    data-company-principle="true"
                    key={
                      principle.index
                    }
                  >
                    <span
                      className={
                        styles.principleIndex
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

          <div
            className={
              styles.expertiseBlock
            }
          >
            <header
              className={
                styles.expertiseHeader
              }
            >
              <div>
                <p
                  className={
                    styles.informationLabel
                  }
                >
                  SERVICE DIRECTORY
                </p>

                <h3>
                  Areas of expertise
                </h3>
              </div>

              <p>
                Application, API and infrastructure security remain the
                technical core, supported by practical cybersecurity
                training.
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
                      data-company-expertise="true"
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
                  →
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
