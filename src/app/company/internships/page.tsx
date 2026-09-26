import Link from "next/link";

import {
  Breadcrumbs
} from "@/components/navigation/breadcrumbs";

import {
  Container
} from "@/components/layout/container";

import {
  internshipContributorNote,
  internshipMethod,
  internshipProjects,
  internshipPublicNote
} from "@/content/internships";

import {
  createMetadata
} from "@/lib/seo";

import styles from "./internships.module.css";


export const metadata =
  createMetadata({

    title:
      "Internship Projects | No Breach",

    description:
      "Explore selected cybersecurity projects developed through No Breach internships across offensive security, AI security, AppSec, DevSecOps, detection engineering and OT/IoT security.",

    path:
      "/company/internships"
  });


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


export default function InternshipsPage() {

  return (
    <div
      className={
        styles.page
      }
      data-internship-design="v21"
      data-company-architecture="v18"
    >
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
              "Internship Projects"
          }
        ]}
      />


      {/* ================================================================
          HERO
          Not counted as a content section.
         ================================================================ */}

      <section
        className={
          styles.hero
        }
        data-internship-section="hero"
      >
        <Container
          size="wide"
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
            >
              <p
                className={
                  styles.heroEyebrow
                }
              >
                Build · Test · Detect · Fix · Document
              </p>

              <h1>
                Security work
                <span>
                  built through practice.
                </span>
              </h1>

              <p
                className={
                  styles.heroLead
                }
              >
                Selected technical work from No Breach internship programs, where interns build labs, investigate system behavior, validate security hypotheses, create detections, document findings and verify remediation.
              </p>

              <div
                className={
                  styles.heroActions
                }
              >
                <a
                  href="#projects"
                  className={
                    styles.primaryAction
                  }
                >
                  Explore the projects

                  <span
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </a>

                <Link
                  href="/careers"
                  className={
                    styles.textAction
                  }
                >
                  Careers

                  <Arrow />
                </Link>
              </div>
            </div>

            <div
              className={
                styles.heroSystem
              }
              aria-label="Internship working method"
            >
              <div
                className={
                  styles.heroSystemHeader
                }
              >
                <span>
                  Method
                </span>

                <span>
                  {
                    String(
                      internshipMethod.length
                    ).padStart(
                      2,
                      "0"
                    )
                  }
                  {" "}
                  stages
                </span>
              </div>

              <ol>
                {
                  internshipMethod.map(
                    (
                      item
                    ) => (
                      <li
                        key={
                          item.number
                        }
                      >
                        <span>
                          {
                            item.number
                          }
                        </span>

                        <strong>
                          {
                            item.title
                          }
                        </strong>

                        <i
                          aria-hidden="true"
                        />
                      </li>
                    )
                  )
                }
              </ol>
            </div>
          </div>

          <dl
            className={
              styles.heroMetrics
            }
          >
            <div>
              <dt>
                Projects
              </dt>

              <dd>
                {
                  String(
                    internshipProjects.length
                  ).padStart(
                    2,
                    "0"
                  )
                }
              </dd>
            </div>

            <div>
              <dt>
                Method
              </dt>

              <dd>
                06 stages
              </dd>
            </div>

            <div>
              <dt>
                Environment
              </dt>

              <dd>
                Isolated labs
              </dd>
            </div>

            <div>
              <dt>
                Evidence
              </dt>

              <dd>
                Reproducible
              </dd>
            </div>
          </dl>
        </Container>
      </section>


      {/* ================================================================
          01 — PROJECT INDEX
         ================================================================ */}

      <section
        id="projects"
        className={
          styles.section
        }
        data-company-content-section="projects"
        data-internship-section="projects"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="01"
            eyebrow="Project index"
            title="Technical work, presented as evidence rather than decoration."
            description="Each project represents a controlled security problem with an environment to understand, work to perform and outputs that make the result reproducible."
          />

          <div
            className={
              styles.projectIndex
            }
            data-internship-ui="project-index"
          >
            {
              internshipProjects.map(
                (
                  project
                ) => (
                  <details
                    className={
                      styles.projectRow
                    }
                    data-internship-project
                    key={
                      project.slug
                    }
                  >
                    <summary
                      className={
                        styles.projectSummary
                      }
                    >
                      <span
                        className={
                          styles.projectNumber
                        }
                      >
                        {
                          project.number
                        }
                      </span>

                      <span
                        className={
                          styles.projectIdentity
                        }
                      >
                        <small>
                          {
                            project.track
                          }
                        </small>

                        <span
                          className={
                            styles.projectTitle
                          }
                          role="heading"
                          aria-level={3}
                        >
                          {
                            project.title
                          }
                        </span>
                      </span>

                      <span
                        className={
                          styles.projectSummaryText
                        }
                      >
                        {
                          project.summary
                        }
                      </span>

                      <span
                        className={
                          styles.projectTechnology
                        }
                      >
                        {
                          project.technologies
                            .slice(
                              0,
                              3
                            )
                            .join(
                              " / "
                            )
                        }
                      </span>

                      <span
                        className={
                          styles.projectToggle
                        }
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>

                    <div
                      className={
                        styles.projectDetails
                      }
                    >
                      <div
                        className={
                          styles.detailGroup
                        }
                      >
                        <p>
                          Technologies
                        </p>

                        <ul>
                          {
                            project.technologies.map(
                              (
                                technology
                              ) => (
                                <li
                                  key={
                                    technology
                                  }
                                >
                                  {
                                    technology
                                  }
                                </li>
                              )
                            )
                          }
                        </ul>
                      </div>

                      <div
                        className={
                          styles.detailGroup
                        }
                      >
                        <p>
                          Work
                        </p>

                        <ul>
                          {
                            project.work.map(
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
                      </div>

                      <div
                        className={
                          styles.detailGroup
                        }
                      >
                        <p>
                          Outputs
                        </p>

                        <ul>
                          {
                            project.outputs.map(
                              (
                                output
                              ) => (
                                <li
                                  key={
                                    output
                                  }
                                >
                                  {
                                    output
                                  }
                                </li>
                              )
                            )
                          }
                        </ul>
                      </div>
                    </div>
                  </details>
                )
              )
            }
          </div>

          <p
            className={
              styles.projectHint
            }
          >
            Select a project row to inspect technologies, work performed and technical outputs.
          </p>
        </Container>
      </section>


      {/* ================================================================
          02 — WORKING METHOD
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.sectionAlt}`
        }
        data-company-content-section="method"
        data-internship-section="method"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="02"
            eyebrow="Working method"
            title="Internships structured around doing the work."
            description="The program moves from building a controlled environment to understanding it, validating security behavior, detecting what happened, improving controls and documenting the evidence."
          />

          <div
            className={
              styles.methodIntro
            }
          >
            <p>
              One continuous technical loop.
            </p>

            <div
              className={
                styles.methodSequence
              }
              aria-hidden="true"
            >
              <span>
                BUILD
              </span>

              <i />

              <span>
                UNDERSTAND
              </span>

              <i />

              <span>
                VALIDATE
              </span>

              <i />

              <span>
                DETECT
              </span>

              <i />

              <span>
                FIX
              </span>

              <i />

              <span>
                DOCUMENT
              </span>
            </div>
          </div>

          <ol
            className={
              styles.methodRail
            }
            data-internship-ui="method-rail"
          >
            {
              internshipMethod.map(
                (
                  item
                ) => (
                  <li
                    className={
                      styles.methodStep
                    }
                    key={
                      item.number
                    }
                  >
                    <div
                      className={
                        styles.methodMeta
                      }
                    >
                      <span>
                        {
                          item.number
                        }
                      </span>

                      <i
                        aria-hidden="true"
                      />
                    </div>

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


      {/* ================================================================
          03 — PUBLIC SHOWCASE & SAFETY
         ================================================================ */}

      <section
        className={
          styles.section
        }
        data-company-content-section="public-showcase"
        data-internship-section="public-showcase"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="03"
            eyebrow="Public showcase"
            title="Public by design. Controlled by default."
            description="The showcase explains learning outcomes and technical process without publishing confidential assessment material or private contributor information."
          />

          <div
            className={
              styles.safetyLayout
            }
            data-internship-ui="safety-boundaries"
          >
            <div
              className={
                styles.safetyCopy
              }
            >
              <p
                className={
                  styles.safetyLabel
                }
              >
                Publication boundary
              </p>

              <p
                className={
                  styles.safetyLead
                }
              >
                {
                  internshipPublicNote
                }
              </p>

              <p
                className={
                  styles.contributorNote
                }
              >
                {
                  internshipContributorNote
                }
              </p>
            </div>

            <dl
              className={
                styles.safetyTerms
              }
            >
              <div>
                <dt>
                  01 / Authorized
                </dt>

                <dd>
                  Security testing takes place only where the work is permitted.
                </dd>
              </div>

              <div>
                <dt>
                  02 / Isolated
                </dt>

                <dd>
                  Exercises are separated from confidential client and production environments.
                </dd>
              </div>

              <div>
                <dt>
                  03 / Synthetic
                </dt>

                <dd>
                  Public exercises use synthetic or intentionally vulnerable systems.
                </dd>
              </div>
            </dl>
          </div>

          <div
            className={
              styles.destinationRail
            }
          >
            <p>
              Continue
            </p>

            <nav
              aria-label="Continue exploring No Breach"
            >
              <Link
                href="/careers"
              >
                <span>
                  Careers
                </span>

                <Arrow />
              </Link>

              <Link
                href="/training"
              >
                <span>
                  Training
                </span>

                <Arrow />
              </Link>

              <Link
                href="/contact"
              >
                <span>
                  Contact
                </span>

                <Arrow />
              </Link>
            </nav>
          </div>
        </Container>
      </section>


      {/* ================================================================
          CTA — not part of the three-section budget
         ================================================================ */}

      <section
        className={
          styles.cta
        }
        data-internship-section="cta"
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
                  NB
                </span>

                Applied learning
              </p>

              <h2>
                Build, break, detect, fix and document.
              </h2>
            </div>

            <div
              className={
                styles.ctaCopy
              }
            >
              <p>
                Explore opportunities to learn security through complete technical work rather than isolated exercises.
              </p>

              <div
                className={
                  styles.ctaActions
                }
              >
                <Link
                  href="/careers"
                  className={
                    styles.primaryAction
                  }
                >
                  Explore careers

                  <Arrow />
                </Link>

                <Link
                  href="/training"
                  className={
                    styles.textAction
                  }
                >
                  Training Hub

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
