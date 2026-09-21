import {
  Breadcrumbs
} from "@/components/navigation/breadcrumbs";
import {
  Container
} from "@/components/layout/container";
import {
  ButtonLink
} from "@/components/ui/button-link";
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

export default function InternshipsPage() {
  return (
    <div
      className={
        styles.page
      }
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

      <section
        className={
          styles.hero
        }
      >
        <Container size="wide">
          <div
            className={
              styles.heroGrid
            }
          >
            <div>
              <p
                className={
                  styles.eyebrow
                }
              >
                No Breach / Internships
              </p>

              <h1
                className={
                  styles.heroTitle
                }
              >
                Security work built through practice.
              </h1>

              <p
                className={
                  styles.heroText
                }
              >
                Selected technical work from No Breach internship programs, where interns build labs, investigate security behavior, automate validation, create detections, document findings and verify remediation.
              </p>
            </div>

            <aside
              className={
                styles.heroPanel
              }
              aria-label="Internship program overview"
            >
              <p
                className={
                  styles.metaLabel
                }
              >
                Applied learning
              </p>

              <h2
                className={
                  styles.heroPanelTitle
                }
              >
                From concept to reproducible security evidence.
              </h2>

              <p
                className={
                  styles.heroPanelText
                }
              >
                The public showcase focuses on technical work and learning outcomes rather than confidential assessment material.
              </p>

              <dl
                className={
                  styles.heroStats
                }
              >
                <div
                  className={
                    styles.heroStat
                  }
                >
                  <dt>
                    Environment
                  </dt>

                  <dd>
                    Isolated labs
                  </dd>
                </div>

                <div
                  className={
                    styles.heroStat
                  }
                >
                  <dt>
                    Data
                  </dt>

                  <dd>
                    Synthetic
                  </dd>
                </div>

                <div
                  className={
                    styles.heroStat
                  }
                >
                  <dt>
                    Focus
                  </dt>

                  <dd>
                    Hands-on security
                  </dd>
                </div>

                <div
                  className={
                    styles.heroStat
                  }
                >
                  <dt>
                    Output
                  </dt>

                  <dd>
                    Evidence & reports
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </Container>
      </section>

      <section
        className={
          styles.section
        }
      >
        <Container size="wide">
          <div
            className={
              styles.sectionHeader
            }
          >
            <p
              className={
                styles.sectionEyebrow
              }
            >
              Selected work
            </p>

            <div>
              <h2
                className={
                  styles.sectionTitle
                }
              >
                Projects developed inside the internship program.
              </h2>

              <p
                className={
                  styles.sectionIntro
                }
              >
                These examples show the breadth of work interns have explored across application security, purple teaming, AI security, DevSecOps, vulnerability management and network monitoring.
              </p>
            </div>
          </div>

          <div
            className={
              styles.projects
            }
          >
            {internshipProjects.map(
              (
                project
              ) => (
                <article
                  className={
                    styles.project
                  }
                  id={
                    project.slug
                  }
                  key={
                    project.slug
                  }
                >
                  <div
                    className={
                      styles.projectTop
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
                        styles.projectTrack
                      }
                    >
                      {
                        project.track
                      }
                    </span>
                  </div>

                  <h3
                    className={
                      styles.projectTitle
                    }
                  >
                    {
                      project.title
                    }
                  </h3>

                  <p
                    className={
                      styles.projectSummary
                    }
                  >
                    {
                      project.summary
                    }
                  </p>

                  <div
                    className={
                      styles.technologyList
                    }
                    aria-label={`${project.title} technologies`}
                  >
                    {project
                      .technologies
                      .map(
                        (
                          technology
                        ) => (
                          <span
                            className={
                              styles.technology
                            }
                            key={
                              technology
                            }
                          >
                            {
                              technology
                            }
                          </span>
                        )
                      )}
                  </div>

                  <div
                    className={
                      styles.projectColumns
                    }
                  >
                    <div
                      className={
                        styles.projectColumn
                      }
                    >
                      <p
                        className={
                          styles.columnTitle
                        }
                      >
                        Work
                      </p>

                      <ul
                        className={
                          styles.list
                        }
                      >
                        {project
                          .work
                          .map(
                            (
                              item
                            ) => (
                              <li
                                className={
                                  styles.listItem
                                }
                                key={
                                  item
                                }
                              >
                                {
                                  item
                                }
                              </li>
                            )
                          )}
                      </ul>
                    </div>

                    <div
                      className={
                        styles.projectColumn
                      }
                    >
                      <p
                        className={
                          styles.columnTitle
                        }
                      >
                        Outputs
                      </p>

                      <ul
                        className={
                          styles.list
                        }
                      >
                        {project
                          .outputs
                          .map(
                            (
                              item
                            ) => (
                              <li
                                className={
                                  styles.listItem
                                }
                                key={
                                  item
                                }
                              >
                                {
                                  item
                                }
                              </li>
                            )
                          )}
                      </ul>
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
        </Container>
      </section>

      <section
        className={
          styles.section
        }
      >
        <Container>
          <div
            className={
              styles.sectionHeader
            }
          >
            <p
              className={
                styles.sectionEyebrow
              }
            >
              Approach
            </p>

            <div>
              <h2
                className={
                  styles.sectionTitle
                }
              >
                Internships structured around doing the work.
              </h2>

              <p
                className={
                  styles.sectionIntro
                }
              >
                Projects are designed around building, understanding, validating and documenting technical systems rather than completing passive exercises.
              </p>
            </div>
          </div>

          <div
            className={
              styles.methodGrid
            }
          >
            {internshipMethod.map(
              (
                item
              ) => (
                <article
                  className={
                    styles.methodCard
                  }
                  key={
                    item.number
                  }
                >
                  <p
                    className={
                      styles.methodNumber
                    }
                  >
                    {
                      item.number
                    }
                  </p>

                  <h3
                    className={
                      styles.methodTitle
                    }
                  >
                    {
                      item.title
                    }
                  </h3>

                  <p
                    className={
                      styles.methodDescription
                    }
                  >
                    {
                      item.description
                    }
                  </p>
                </article>
              )
            )}
          </div>
        </Container>
      </section>

      <section
        className={
          styles.section
        }
      >
        <Container>
          <div
            className={
              styles.safetyBox
            }
          >
            <p
              className={
                styles.safetyLabel
              }
            >
              Public showcase
            </p>

            <div
              className={
                styles.safetyContent
              }
            >
              <p
                className={
                  styles.safetyText
                }
              >
                {
                  internshipPublicNote
                }
              </p>

              <p
                className={
                  styles.safetyText
                }
              >
                {
                  internshipContributorNote
                }
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        className={
          styles.cta
        }
      >
        <Container>
          <div
            className={
              styles.ctaBox
            }
          >
            <p
              className={
                styles.sectionEyebrow
              }
            >
              Build with No Breach
            </p>

            <h2
              className={
                styles.ctaTitle
              }
            >
              Learn security by building, breaking, detecting and documenting.
            </h2>

            <p
              className={
                styles.ctaText
              }
            >
              Explore No Breach training, career opportunities and the technical work developed through its applied-security ecosystem.
            </p>

            <div
              className={
                styles.ctaActions
              }
            >
              <ButtonLink href="/careers">
                Careers
              </ButtonLink>

              <ButtonLink
                href="/training"
                variant="secondary"
              >
                Training
              </ButtonLink>

              <ButtonLink
                href="/contact"
                variant="secondary"
              >
                Contact No Breach
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
