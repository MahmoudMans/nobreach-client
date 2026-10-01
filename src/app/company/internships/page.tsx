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

import {
  InternshipProjectDisclosure
} from "./project-disclosure";

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
      data-internship-audit="v22"
      data-internship-refinement="v23"
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
          INTRODUCTION
         ================================================================ */}

      <section
        className={
          styles.hero
        }
        data-internship-section="hero"
      >
        <Container
          className={
            styles.container
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
              Internship projects
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
              Selected technical work from No Breach internship programs.
              Interns build labs, investigate system behavior, validate
              security hypotheses, create detections where relevant, verify
              remediation and document findings.
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
                View careers

                <Arrow />
              </Link>
            </div>

            <p
              className={
                styles.heroMeta
              }
            >
              <strong>
                {
                  internshipProjects.length
                }
                {" "}
                showcased projects
              </strong>

              <span
                aria-hidden="true"
              >
                ·
              </span>

              <span>
                Isolated lab work
              </span>
            </p>
          </div>
        </Container>
      </section>


      {/* ================================================================
          01 — PROJECT CATALOGUE
         ================================================================ */}

      <section
        id="projects"
        className={
          `${styles.section} ${styles.projectsSection}`
        }
        data-company-content-section="projects"
        data-internship-section="projects"
      >
        <Container
          className={
            styles.container
          }
        >
          <SectionHeading
            number="01"
            eyebrow="Project catalogue"
            title="Internship projects"
            description="Explore the technologies, work performed and technical outputs behind each project."
          />

          <aside
            className={
              styles.showcaseNotice
            }
            aria-labelledby="showcase-notice-title"
          >
            <h3
              id="showcase-notice-title"
              className={
                styles.noticeTitle
              }
            >
              Publication scope
            </h3>

            <div
              className={
                styles.noticeCopy
              }
            >
              <p>
                {
                  internshipPublicNote
                }
              </p>

              <p>
                {
                  internshipContributorNote
                }
              </p>
            </div>
          </aside>

          <p
            className={
              styles.projectInstruction
            }
          >
            Open a project to view its work and technical outputs.
          </p>

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
                  <InternshipProjectDisclosure
                    key={
                      project.slug
                    }
                    number={
                      project.number
                    }
                    slug={
                      project.slug
                    }
                    title={
                      project.title
                    }
                    track={
                      project.track
                    }
                    summary={
                      project.summary
                    }
                    technologies={
                      project.technologies
                    }
                    work={
                      project.work
                    }
                    outputs={
                      project.outputs
                    }
                  />
                )
              )
            }
          </div>
        </Container>
      </section>


      {/* ================================================================
          02 — WORKING METHOD
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.sectionAlt} ${styles.methodSection}`
        }
        data-company-content-section="method"
        data-internship-section="method"
      >
        <Container
          className={
            styles.container
          }
        >
          <SectionHeading
            number="02"
            eyebrow="Working method"
            title="How the work progresses."
            description="The internship approach connects lab setup, system understanding, security validation, improvements and documentation. Detection work is included where relevant to the project."
          />

          <ol
            className={
              styles.methodGrid
            }
            data-internship-ui="method-grid"
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
                    <span
                      className={
                        styles.methodNumber
                      }
                    >
                      {
                        item.number
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
                  </li>
                )
              )
            }
          </ol>
        </Container>
      </section>


      {/* ================================================================
          CLOSING ACTION
         ================================================================ */}

      <section
        className={
          styles.cta
        }
        data-internship-section="cta"
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

                Next steps
              </p>

              <h2>
                Explore careers and training.
              </h2>
            </div>

            <div
              className={
                styles.ctaCopy
              }
            >
              <p>
                Visit Careers for role information, explore Training, or
                contact No Breach with a question.
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
                  View careers

                  <Arrow />
                </Link>

                <Link
                  href="/training"
                  className={
                    styles.secondaryAction
                  }
                >
                  View training

                  <Arrow />
                </Link>

                <Link
                  href="/contact"
                  className={
                    styles.textAction
                  }
                >
                  Contact No Breach

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
