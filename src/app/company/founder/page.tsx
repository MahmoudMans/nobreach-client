import Image from "next/image";
import Link from "next/link";

import type {
  Metadata
} from "next";

import {
  Container
} from "@/components/layout/container";

import {
  Breadcrumbs
} from "@/components/navigation/breadcrumbs";

import styles from "./founder.module.css";


export const metadata:
  Metadata = {

  title:
    "Nouha Ben Brahim | Founder of No Breach",

  description:
    "Nouha Ben Brahim is the founder of No Breach, with a professional focus on offensive security, cybersecurity training and community development."
};


const journey = [
  {
    number:
      "01",

    title:
      "Development",

    description:
      "Programming formed the technical foundation for understanding software behavior, structure and implementation."
  },
  {
    number:
      "02",

    title:
      "Cybersecurity",

    description:
      "The focus shifted from building systems toward understanding assumptions, weaknesses and attack surfaces."
  },
  {
    number:
      "03",

    title:
      "Bug bounty / security research",

    description:
      "Legal web-security and bug-bounty research reinforced the importance of understanding application behavior before attempting exploitation."
  },
  {
    number:
      "04",

    title:
      "Offensive security",

    description:
      "Technical reasoning, experimentation, validation and communication became part of a repeatable method."
  },
  {
    number:
      "05",

    title:
      "No Breach",

    description:
      "Professional security practice, technical learning and community activity come together through No Breach."
  }
] as const;


const expertise = [
  {
    number:
      "01",

    title:
      "Web Security",

    description:
      "Application behavior, attack surfaces, trust boundaries and practical security testing."
  },
  {
    number:
      "02",

    title:
      "API Security",

    description:
      "Authentication, authorization, object-level access and application logic."
  },
  {
    number:
      "03",

    title:
      "Offensive Security",

    description:
      "Attacker-oriented reasoning, validation and technical security assessment."
  },
  {
    number:
      "04",

    title:
      "Security Training",

    description:
      "Hands-on learning, mentorship and practical technical skill development."
  }
] as const;


const engagements = [
  {
    type:
      "Workshop",

    name:
      "CyberSummit 4.0",

    role:
      "Workshop trainer",

    organization:
      "Cyber Trace / ESPITA",

    detail:
      "Public event material lists Nouha among CyberSummit 4.0 workshop trainers."
  },
  {
    type:
      "Mentorship",

    name:
      "CyberCamp 5.0",

    role:
      "OSINT mentor",

    organization:
      "Securinets",

    detail:
      "Introduced publicly as the OSINT mentor for CyberCamp 5.0."
  },
  {
    type:
      "Podcast",

    name:
      "The Hackers Line",

    role:
      "Podcast host",

    organization:
      null,

    detail:
      "A cybersecurity podcast hosted by Nouha featuring conversations with practitioners from the hacking and security community."
  }
] as const;


const destinations = [
  {
    label:
      "Activities",

    title:
      "Public activity",

    description:
      "Workshops, events, training and cybersecurity community activity.",

    href:
      "/activities"
  },
  {
    label:
      "Knowledge",

    title:
      "Security insights",

    description:
      "Technical writing and practical security thinking published by No Breach.",

    href:
      "/insights"
  },
  {
    label:
      "Community",

    title:
      "CR4CKOUT",

    description:
      "Technical challenge, experimentation and cybersecurity community.",

    href:
      "/cr4ckout"
  }
] as const;


const founderStructuredData = {
  "@context":
    "https://schema.org",

  "@type":
    "Person",

  name:
    "Nouha Ben Brahim",

  jobTitle:
    "Founder of No Breach",

  description:
    "Cybersecurity professional focused on offensive security, practical training and community development.",

  worksFor: {
    "@type":
      "Organization",

    name:
      "No Breach"
  },

  knowsAbout: [
    "Offensive Security",
    "Web Security",
    "API Security",
    "Cybersecurity Training",
    "Security Research"
  ]
};


function Arrow() {

  return (
    <span
      aria-hidden="true"
    >
      →
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

  description?:
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

      {
        description
          ? (
            <p
              className={
                styles.sectionDescription
              }
            >
              {
                description
              }
            </p>
          )
          : null
      }
    </header>
  );

}


export default function FounderPage() {

  return (
    <div
      className={
        styles.page
      }
      data-founder-page="v20"
      data-founder-audit="v21"
      data-company-family="v14"
      data-company-density="v15"
      data-company-architecture="v18"
      data-founder-design-system="v20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              founderStructuredData
            )
        }}
      />


      <Breadcrumbs
        items={[
          {
            label:
              "Company",

            href:
              "/company"
          },
          {
            label:
              "Founder"
          }
        ]}
      />


      {/* ================================================================
          PROFILE
         ================================================================ */}

      <section
        className={
          styles.hero
        }
        data-founder-section="hero"
      >
        <Container
          className={
            styles.container
          }
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
              data-founder-ui="hero-copy"
            >
              <h1>
                Nouha
                <span>
                  Ben Brahim
                </span>
              </h1>

              <p
                className={
                  styles.heroRole
                }
              >
                Founder of No Breach
              </p>

              <p
                className={
                  styles.heroLead
                }
              >
                Cybersecurity professional connecting offensive-security
                practice with technical education, mentorship and community
                development.
              </p>

              <dl
                className={
                  styles.heroFacts
                }
                aria-label="Founder facts"
              >
                <div>
                  <dt>
                    Base
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
              </dl>

              <div
                className={
                  styles.heroActions
                }
              >
                <a
                  href="#public-work"
                  className={
                    styles.primaryAction
                  }
                >
                  View public work

                  <span
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </a>

                <Link
                  href="/company"
                  className={
                    styles.textAction
                  }
                >
                  About No Breach

                  <Arrow />
                </Link>
              </div>
            </div>


            <div
              className={
                styles.heroPortrait
              }
              data-founder-ui="portrait-editorial"
            >
              <div
                className={
                  styles.heroImage
                }
              >
                <Image
                  src="/people/ceo.png"
                  alt="Portrait of Nouha Ben Brahim"
                  fill
                  priority
                  sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) 40vw, 430px"
                  className={
                    styles.heroPhoto
                  }
                  data-founder-photo-image="profile"
                />

                <div
                  className={
                    styles.heroImageShade
                  }
                  aria-hidden="true"
                />

                <div
                  className={
                    styles.heroImageCorner
                  }
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          01 — BACKGROUND
         ================================================================ */}

      <section
        id="trajectory"
        className={
          styles.section
        }
        data-company-content-section="journey"
      >
        <Container
          className={
            styles.container
          }
        >
          <SectionHeading
            number="01"
            eyebrow="Background"
            title="From programming to offensive security."
            description="Five stages summarize the technical progression without assigning unsupported dates or employment milestones."
          />

          <div
            className={
              styles.trajectoryLayout
            }
          >
            <aside
              className={
                styles.trajectoryStatement
              }
              data-founder-section="overview"
            >
              <p
                className={
                  styles.statementLabel
                }
              >
                Working perspective
              </p>

              <p
                className={
                  styles.statementText
                }
              >
                The emphasis is on understanding how systems behave, not
                only on identifying individual vulnerabilities.
              </p>
            </aside>

            <div
              className={
                styles.journey
              }
              data-founder-section="journey"
              data-founder-ui="journey"
            >
              {
                journey.map(
                  (
                    item
                  ) => (
                    <article
                      className={
                        styles.journeyRow
                      }
                      data-founder-card="journey"
                      key={
                        item.number
                      }
                    >
                      <span
                        className={
                          styles.journeyNumber
                        }
                      >
                        {
                          item.number
                        }
                      </span>

                      <div
                        className={
                          styles.journeyContent
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
                    </article>
                  )
                )
              }
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          02 — PRACTICE + TEACHING
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.sectionAlt}`
        }
        data-company-content-section="expertise-education"
      >
        <Container
          className={
            styles.container
          }
        >
          <SectionHeading
            number="02"
            eyebrow="Practice"
            title="Technical practice and learning."
            description="Application security, offensive reasoning and practical learning remain distinct areas while sharing the same systems-oriented approach."
          />

          <div
            className={
              styles.expertise
            }
            data-founder-section="expertise"
            data-founder-ui="expertise-index"
          >
            {
              expertise.map(
                (
                  item
                ) => (
                  <article
                    className={
                      styles.expertiseRow
                    }
                    data-founder-card="expertise"
                    key={
                      item.number
                    }
                  >
                    <span
                      className={
                        styles.expertiseNumber
                      }
                    >
                      {
                        item.number
                      }
                    </span>

                    <div
                      className={
                        styles.expertiseContent
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
                  </article>
                )
              )
            }
          </div>


          <div
            className={
              styles.method
            }
            data-founder-section="education"
            data-founder-ui="method"
          >
            <div
              className={
                styles.methodIntro
              }
            >
              <p
                className={
                  styles.methodLabel
                }
              >
                Hands-on methodology
              </p>

              <h3>
                Learn security by doing security.
              </h3>

              <p>
                Training and mentorship focus on complete technical
                problems, experimentation and repeatable reasoning.
              </p>

              <Link
                href="/training"
                className={
                  styles.textAction
                }
              >
                View training

                <Arrow />
              </Link>
            </div>

            <ol
              className={
                styles.methodFlow
              }
              aria-label="Teaching methodology"
            >
              <li>
                <span>
                  01
                </span>

                <strong>
                  Understand
                </strong>
              </li>

              <li>
                <span>
                  02
                </span>

                <strong>
                  Build
                </strong>
              </li>

              <li>
                <span>
                  03
                </span>

                <strong>
                  Test
                </strong>
              </li>

              <li>
                <span>
                  04
                </span>

                <strong>
                  Explain
                </strong>
              </li>
            </ol>
          </div>
        </Container>
      </section>


      {/* ================================================================
          03 — PUBLIC WORK
         ================================================================ */}

      <section
        id="public-work"
        className={
          styles.section
        }
        data-company-content-section="public-work"
        data-founder-section="public-work"
      >
        <Container
          className={
            styles.container
          }
        >
          <SectionHeading
            number="03"
            eyebrow="Public work"
            title="Selected public engagements."
            description="Publicly documented teaching, mentoring and media work is presented separately from No Breach’s organizational destinations."
          />

          <div
            className={
              styles.engagements
            }
            data-founder-ui="engagement-evidence"
          >
            {
              engagements.map(
                (
                  engagement
                ) => (
                  <article
                    className={
                      styles.engagement
                    }
                    data-founder-engagement="true"
                    key={
                      engagement.name
                    }
                  >
                    <p
                      className={
                        styles.engagementType
                      }
                    >
                      {
                        engagement.type
                      }
                    </p>

                    <h3>
                      {
                        engagement.name
                      }
                    </h3>

                    <p
                      className={
                        styles.engagementRole
                      }
                    >
                      {
                        engagement.role
                      }
                    </p>

                    {
                      engagement.organization
                        ? (
                          <p
                            className={
                              styles.engagementOrganization
                            }
                          >
                            {
                              engagement.organization
                            }
                          </p>
                        )
                        : null
                    }

                    <p
                      className={
                        styles.engagementDetail
                      }
                    >
                      {
                        engagement.detail
                      }
                    </p>
                  </article>
                )
              )
            }
          </div>


          <div
            className={
              styles.publicDirectory
            }
          >
            <header
              className={
                styles.directoryHeading
              }
            >
              <p
                className={
                  styles.directoryLabel
                }
              >
                Organizational destinations
              </p>

              <h3>
                More from No Breach
              </h3>

              <p>
                Continue into No Breach activity, technical writing and
                community work without implying personal authorship of
                every linked resource.
              </p>
            </header>

            <div
              className={
                styles.publicRows
              }
            >
              {
                destinations.map(
                  (
                    destination
                  ) => (
                    <Link
                      href={
                        destination.href
                      }
                      className={
                        styles.publicRow
                      }
                      data-founder-card="public"
                      key={
                        destination.href
                      }
                    >
                      <div>
                        <small>
                          {
                            destination.label
                          }
                        </small>

                        <h4>
                          {
                            destination.title
                          }
                        </h4>

                        <p>
                          {
                            destination.description
                          }
                        </p>
                      </div>

                      <Arrow />
                    </Link>
                  )
                )
              }
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          CLOSING ACTION
         ================================================================ */}

      <section
        className={
          styles.cta
        }
        data-founder-section="cta"
      >
        <Container
          className={
            styles.container
          }
        >
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
                  NB
                </span>

                No Breach
              </p>

              <h2>
                Explore the company behind the work.
              </h2>
            </div>

            <div
              className={
                styles.ctaCopy
              }
            >
              <p>
                Discover No Breach security services, training and
                technical community activity.
              </p>

              <div
                className={
                  styles.ctaActions
                }
              >
                <Link
                  href="/company"
                  className={
                    styles.primaryAction
                  }
                >
                  About No Breach

                  <Arrow />
                </Link>

                <Link
                  href="/contact"
                  className={
                    styles.textAction
                  }
                >
                  Contact

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
