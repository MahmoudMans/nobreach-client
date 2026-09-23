import Image from "next/image";
import Link from "next/link";

import type {
  Metadata
} from "next";

import {
  Container
} from "@/components/layout/container";

import family from "./company-family.module.css";
import styles from "./company.module.css";


export const metadata:
  Metadata = {

  title:
    "Company | No Breach",

  description:
    "No Breach brings together offensive security, hands-on cybersecurity education and community initiatives."
};


const facts = [
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
];


const capabilities = [
  {
    index:
      "01",

    code:
      "SEC",

    title:
      "Security Services",

    description:
      "Web, API and infrastructure security testing.",

    href:
      "/services"
  },
  {
    index:
      "02",

    code:
      "LAB",

    title:
      "Training Hub",

    description:
      "Practical cybersecurity learning through hands-on work.",

    href:
      "/training"
  },
  {
    index:
      "03",

    code:
      "CTF",

    title:
      "CR4CKOUT",

    description:
      "Challenge, experimentation and community.",

    href:
      "/cr4ckout"
  },
  {
    index:
      "04",

    code:
      "R&D",

    title:
      "Knowledge",

    description:
      "Technical insights and shared security experience.",

    href:
      "/insights"
  }
];


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
      "Exercise security knowledge rather than keeping it theoretical."
  },
  {
    index:
      "03",

    title:
      "Share knowledge",

    description:
      "Education and community strengthen security capability."
  }
];


const timeline = [
  {
    year:
      "2023",

    title:
      "Founded"
  },
  {
    year:
      "2024",

    title:
      "Training Hub"
  },
  {
    year:
      "2024",

    title:
      "CR4CKOUT"
  },
  {
    year:
      "2025+",

    title:
      "Community"
  },
  {
    year:
      "Today",

    title:
      "Building"
  }
];


function Arrow() {

  return (
    <span
      aria-hidden="true"
    >
      ↗
    </span>
  );

}


function SectionHeader({
  index,
  eyebrow,
  title,
  description
}: {
  index:
    string;

  eyebrow:
    string;

  title:
    string;

  description?:
    string;
}) {

  return (
    <div
      className={
        family.sectionHeader
      }
    >
      <div>
        <span
          className={
            family.sectionIndex
          }
        >
          {
            index
          }
        </span>

        <p
          className={
            family.sectionEyebrow
          }
        >
          {
            eyebrow
          }
        </p>
      </div>

      <div
        className={
          family.sectionHeaderCopy
        }
      >
        <h2
          className={
            family.sectionTitle
          }
        >
          {
            title
          }
        </h2>

        {
          description
            ? (
              <p
                className={
                  family.sectionDescription
                }
              >
                {
                  description
                }
              </p>
            )
            : null
        }
      </div>
    </div>
  );

}


function SubsectionHeader({
  label,
  title,
  description
}: {
  label:
    string;

  title:
    string;

  description?:
    string;
}) {

  return (
    <div
      className={
        family.subsectionHeader
      }
    >
      <p
        className={
          family.subsectionLabel
        }
      >
        {
          label
        }
      </p>

      <h3
        className={
          family.subsectionTitle
        }
      >
        {
          title
        }
      </h3>

      {
        description
          ? (
            <p
              className={
                family.subsectionDescription
              }
            >
              {
                description
              }
            </p>
          )
          : null
      }
    </div>
  );

}


export default function CompanyPage() {

  return (
    <div
      className={
        `${family.page} ${styles.page}`
      }
      data-company-page="v4"
      data-company-design="v9"
      data-company-family="v14"
      data-company-density="v15"
      data-company-architecture="v18"
    >
      {/* ================================================================
          HERO — NOT INCLUDED IN THREE-SECTION BUDGET
         ================================================================ */}

      <section
        className={
          `${family.pageIntro} ${styles.hero}`
        }
        data-company-section="hero"
        data-company-hero="v6"
      >
        <Container
          size="wide"
          className={
            family.container
          }
        >
          <div
            className={
              family.pageIntroGrid
            }
          >
            <div
              className={
                family.introCopy
              }
              data-company-ui="hero-copy"
            >
              <p
                className={
                  family.eyebrow
                }
              >
                No Breach / Tunisia
              </p>

              <h1
                className={
                  family.title
                }
              >
                Offensive security

                <span
                  className={
                    family.titleAccent
                  }
                >
                  beyond the assessment.
                </span>
              </h1>

              <p
                className={
                  family.lead
                }
              >
                Security services, practical education and community — connected by one offensive mindset.
              </p>

              <div
                className={
                  family.actions
                }
              >
                <Link
                  href="/services"
                  className={
                    family.primaryAction
                  }
                >
                  Explore services

                  <Arrow />
                </Link>

                <Link
                  href="/company/founder"
                  className={
                    family.secondaryAction
                  }
                >
                  Meet the founder

                  <Arrow />
                </Link>
              </div>
            </div>

            <aside
              className={
                `${family.technicalPanel} ${styles.profilePanel}`
              }
              data-company-ui="profile-card"
              aria-label="No Breach company profile"
            >
              <div
                className={
                  family.technicalPanelHeader
                }
              >
                <span
                  className={
                    family.technicalPanelTitle
                  }
                >
                  Company profile
                </span>

                <span
                  className={
                    family.technicalPanelCode
                  }
                >
                  NB / 2023
                </span>
              </div>

              <div
                className={
                  styles.profileSignal
                }
                aria-hidden="true"
              >
                <span />

                <span />

                <span />
              </div>

              <dl
                className={
                  family.metaRail
                }
                data-company-ui="facts"
              >
                {
                  facts.map(
                    (
                      fact
                    ) => (
                      <div
                        className={
                          family.metaItem
                        }
                        key={
                          fact.label
                        }
                      >
                        <dt
                          className={
                            family.metaLabel
                          }
                        >
                          {
                            fact.label
                          }
                        </dt>

                        <dd
                          className={
                            family.metaValue
                          }
                        >
                          {
                            fact.value
                          }
                        </dd>
                      </div>
                    )
                  )
                }
              </dl>
            </aside>
          </div>
        </Container>
      </section>


      {/* ================================================================
          01 — COMPANY & OPERATING MODEL
         ================================================================ */}

      <section
        className={
          family.section
        }
        data-company-content-section="company"
        data-company-section="company-operating-model"
      >
        <Container
          size="wide"
          className={
            family.container
          }
        >
          <SectionHeader
            index="01"
            eyebrow="Company"
            title="A cybersecurity organization built from offensive security."
            description="No Breach connects technical security, practical learning and community through one consistent security mindset."
          />

          <div
            className={
              styles.companyStatement
            }
          >
            <article
              className={
                styles.statementCopy
              }
              data-company-card="statement"
            >
              <p
                className={
                  styles.statementKicker
                }
              >
                Operating model
              </p>

              <p
                className={
                  styles.statementLead
                }
              >
                Security capability grows when assessment, practice and shared knowledge work together.
              </p>

              <p
                className={
                  styles.statementSupport
                }
              >
                No Breach connects professional security work with practical education and technical community activity.
              </p>
            </article>

            <div
              className={
                styles.statementMeta
              }
              aria-label="No Breach operating model"
            >
              <div
                className={
                  styles.statementMetaItem
                }
              >
                <span>
                  01
                </span>

                <div>
                  <strong>
                    Security services
                  </strong>

                  <p>
                    Identify real attack surfaces, weaknesses and risk.
                  </p>
                </div>
              </div>

              <div
                className={
                  styles.statementMetaItem
                }
              >
                <span>
                  02
                </span>

                <div>
                  <strong>
                    Practical education
                  </strong>

                  <p>
                    Turn security knowledge into repeatable technical skill.
                  </p>
                </div>
              </div>

              <div
                className={
                  styles.statementMetaItem
                }
              >
                <span>
                  03
                </span>

                <div>
                  <strong>
                    Community
                  </strong>

                  <p>
                    Exchange knowledge, experience and technical challenge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          02 — CAPABILITIES + PRINCIPLES
         ================================================================ */}

      <section
        className={
          `${family.section} ${family.sectionAlt}`
        }
        data-company-content-section="capabilities"
        data-company-section="capabilities-principles"
      >
        <Container
          size="wide"
          className={
            family.container
          }
        >
          <SectionHeader
            index="02"
            eyebrow="Capabilities"
            title="What No Breach does — and how the work is approached."
            description="Professional security, hands-on education, challenge and technical knowledge operate as one connected system."
          />

          <div
            className={
              family.subsection
            }
          >
            <SubsectionHeader
              label="Capabilities"
              title="Four connected parts of the No Breach ecosystem."
            />

            <div
              className={
                styles.capabilityRows
              }
              data-company-ui="capability-grid"
            >
              {
                capabilities.map(
                  (
                    item
                  ) => (
                    <Link
                      href={
                        item.href
                      }
                      className={
                        styles.capabilityRow
                      }
                      data-company-card="capability"
                      key={
                        item.index
                      }
                    >
                      <div
                        className={
                          styles.capabilityMeta
                        }
                      >
                        <span>
                          {
                            item.index
                          }
                        </span>

                        <small>
                          {
                            item.code
                          }
                        </small>
                      </div>

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

                      <div
                        className={
                          styles.capabilityVisual
                        }
                        aria-hidden="true"
                      >
                        <span />

                        <span />

                        <i />
                      </div>

                      <Arrow />
                    </Link>
                  )
                )
              }
            </div>
          </div>

          <div
            className={
              family.subsection
            }
          >
            <SubsectionHeader
              label="Principles"
              title="Three principles guide the work."
              description="The same mindset carries across assessments, education and community activity."
            />

            <div
              className={
                styles.principleRows
              }
              data-company-ui="principle-grid"
            >
              {
                principles.map(
                  (
                    item
                  ) => (
                    <article
                      className={
                        styles.principleRow
                      }
                      data-company-card="principle"
                      key={
                        item.index
                      }
                    >
                      <span>
                        {
                          item.index
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
          </div>
        </Container>
      </section>


      {/* ================================================================
          03 — JOURNEY + FOUNDER + PEOPLE
         ================================================================ */}

      <section
        className={
          family.section
        }
        data-company-content-section="people-journey"
        data-company-section="people-journey"
      >
        <Container
          size="wide"
          className={
            family.container
          }
        >
          <SectionHeader
            index="03"
            eyebrow="Journey & people"
            title="How No Breach has grown — and the people behind the work."
          />

          <div
            className={
              family.subsection
            }
          >
            <SubsectionHeader
              label="Journey"
              title="Built through successive layers of activity."
            />

            <div
              className={
                styles.timeline
              }
              data-company-ui="timeline-grid"
            >
              {
                timeline.map(
                  (
                    item,
                    index
                  ) => (
                    <article
                      className={
                        styles.timelineItem
                      }
                      data-company-card="timeline"
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
                            index + 1
                          ).padStart(
                            2,
                            "0"
                          )
                        }
                      </span>

                      <i
                        aria-hidden="true"
                      />

                      <strong>
                        {
                          item.year
                        }
                      </strong>

                      <p>
                        {
                          item.title
                        }
                      </p>
                    </article>
                  )
                )
              }
            </div>
          </div>

          <div
            className={
              `${family.subsection} ${styles.peopleFounderGrid}`
            }
          >
            <div>
              <SubsectionHeader
                label="Founder"
                title="Technical work with a human point of view."
              />

              <div
                className={
                  styles.founderPreview
                }
                data-company-card="founder"
              >
                <div
                  className={
                    styles.founderPortrait
                  }
                  aria-hidden="true"
                >
                  <Image
                    src="/people/ceo.png"
                    alt=""
                    fill
                    sizes="(max-width: 768px) calc(100vw - 40px), 220px"
                    className={
                      styles.founderPhoto
                    }
                    data-founder-photo-image="company"
                  />

                  <div
                    className={
                      styles.founderPhotoShade
                    }
                  />
                </div>

                <div
                  className={
                    styles.founderCopy
                  }
                >
                  <p
                    className={
                      family.eyebrow
                    }
                  >
                    Founder of No Breach
                  </p>

                  <h2>
                    Nouha Ben Brahim
                  </h2>

                  <p>
                    Cybersecurity professional focused on offensive security, training and community development.
                  </p>

                  <Link
                    href="/company/founder"
                    className={
                      family.textAction
                    }
                  >
                    Meet the founder

                    <Arrow />
                  </Link>
                </div>
              </div>
            </div>

            <div
              className={
                styles.peopleColumn
              }
            >
              <SubsectionHeader
                label="Explore"
                title="People and applied work."
              />

              <div
                className={
                  styles.peopleRows
                }
                data-company-ui="people-grid"
              >
                <Link
                  href="/company/team"
                  className={
                    styles.peopleRow
                  }
                  data-company-card="people"
                >
                  <span>
                    01
                  </span>

                  <div>
                    <small>
                      COMPANY
                    </small>

                    <h3>
                      Team
                    </h3>

                    <p>
                      Current public profiles behind the work.
                    </p>
                  </div>

                  <Arrow />
                </Link>

                <Link
                  href="/company/internships"
                  className={
                    styles.peopleRow
                  }
                  data-company-card="people"
                >
                  <span>
                    02
                  </span>

                  <div>
                    <small>
                      APPLIED WORK
                    </small>

                    <h3>
                      Internship projects
                    </h3>

                    <p>
                      Security work developed through hands-on programs.
                    </p>
                  </div>

                  <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          CONTACT CTA — NOT INCLUDED IN THREE-SECTION BUDGET
         ================================================================ */}

      <section
        className={
          family.finalCta
        }
        data-company-section="cta"
      >
        <Container
          size="wide"
          className={
            family.container
          }
        >
          <div
            className={
              family.finalCtaInner
            }
            data-company-card="cta"
          >
            <div
              className={
                family.finalCtaContent
              }
            >
              <p
                className={
                  family.sectionEyebrow
                }
              >
                Connect
              </p>

              <h2
                className={
                  family.ctaTitle
                }
              >
                Work with No Breach.
              </h2>

              <p
                className={
                  family.ctaText
                }
              >
                Examine systems from an attacker’s perspective and turn the findings into practical security improvement.
              </p>

              <div
                className={
                  family.actions
                }
              >
                <Link
                  href="/contact"
                  className={
                    family.primaryAction
                  }
                >
                  Talk to our team

                  <Arrow />
                </Link>

                <Link
                  href="/services"
                  className={
                    family.secondaryAction
                  }
                >
                  Explore services

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
