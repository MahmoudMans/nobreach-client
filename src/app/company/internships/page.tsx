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

import family from "../company-family.module.css";
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


export default function InternshipsPage() {

  return (
    <div
      className={
        `${family.page} ${styles.page}`
      }
      data-company-family="v14"
      data-company-density="v15"
      data-company-family-page="internships"
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
          `${family.pageIntro} ${family.compactPageIntro}`
        }
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
            >
              <p
                className={
                  family.eyebrow
                }
              >
                No Breach / Internships
              </p>

              <h1
                className={
                  family.title
                }
              >
                Security work built through practice.
              </h1>

              <p
                className={
                  family.lead
                }
              >
                Selected technical work from No Breach internship programs, where interns build labs, investigate security behavior, automate validation, create detections, document findings and verify remediation.
              </p>
            </div>

            <aside
              className={
                family.technicalPanel
              }
              aria-label="Internship program overview"
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
                  Applied learning
                </span>

                <span
                  className={
                    family.technicalPanelCode
                  }
                >
                  NB / LAB
                </span>
              </div>

              <dl
                className={
                  family.metaRail
                }
              >
                {
                  [
                    [
                      "Environment",
                      "Isolated labs"
                    ],
                    [
                      "Data",
                      "Synthetic"
                    ],
                    [
                      "Focus",
                      "Hands-on security"
                    ],
                    [
                      "Output",
                      "Evidence & reports"
                    ]
                  ].map(
                    (
                      [
                        label,
                        value
                      ]
                    ) => (
                      <div
                        className={
                          family.metaItem
                        }
                        key={
                          label
                        }
                      >
                        <dt
                          className={
                            family.metaLabel
                          }
                        >
                          {
                            label
                          }
                        </dt>

                        <dd
                          className={
                            family.metaValue
                          }
                        >
                          {
                            value
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


      <section
        className={
          family.section
        }
      >
        <Container
          size="wide"
          className={
            family.container
          }
        >
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
                01
              </span>

              <p
                className={
                  family.sectionEyebrow
                }
              >
                Selected work
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
                Projects developed inside the internship program.
              </h2>

              <p
                className={
                  family.sectionDescription
                }
              >
                The portfolio spans application security, purple teaming, AI security, DevSecOps, vulnerability management, OT/IoT security and network monitoring.
              </p>
            </div>
          </div>

          <div
            className={
              styles.projects
            }
          >
            {
              internshipProjects.map(
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
                        styles.projectIdentity
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

                    <div
                      className={
                        styles.projectSummary
                      }
                    >
                      <h3>
                        {
                          project.title
                        }
                      </h3>

                      <p>
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
                        {
                          project.technologies.map(
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
                          )
                        }
                      </div>
                    </div>

                    <div
                      className={
                        styles.projectEvidence
                      }
                    >
                      <div>
                        <p
                          className={
                            styles.columnTitle
                          }
                        >
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

                      <div>
                        <p
                          className={
                            styles.columnTitle
                          }
                        >
                          Outputs
                        </p>

                        <ul>
                          {
                            project.outputs.map(
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
                    </div>
                  </article>
                )
              )
            }
          </div>
        </Container>
      </section>


      <section
        className={
          `${family.section} ${family.sectionAlt}`
        }
      >
        <Container
          size="wide"
          className={
            family.container
          }
        >
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
                02
              </span>

              <p
                className={
                  family.sectionEyebrow
                }
              >
                Approach
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
                Internships structured around doing the work.
              </h2>

              <p
                className={
                  family.sectionDescription
                }
              >
                Projects are designed around building, understanding, validating and documenting technical systems rather than completing passive exercises.
              </p>
            </div>
          </div>

          <div
            className={
              styles.methodList
            }
          >
            {
              internshipMethod.map(
                (
                  item
                ) => (
                  <article
                    className={
                      styles.methodItem
                    }
                    key={
                      item.number
                    }
                  >
                    <span>
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
                  </article>
                )
              )
            }
          </div>
        </Container>
      </section>


      <section
        className={
          styles.safetySection
        }
      >
        <Container
          size="wide"
          className={
            family.container
          }
        >
          <div
            className={
              styles.safety
            }
          >
            <div>
              <p
                className={
                  family.sectionEyebrow
                }
              >
                Public showcase
              </p>

              <h2>
                Reproducible work without exposing confidential assessment material.
              </h2>
            </div>

            <div
              className={
                styles.safetyCopy
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
          </div>
        </Container>
      </section>


      <section
        className={
          family.finalCta
        }
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
                Build with No Breach
              </p>

              <h2
                className={
                  family.ctaTitle
                }
              >
                Learn security by building, breaking, detecting and documenting.
              </h2>

              <p
                className={
                  family.ctaText
                }
              >
                Explore career opportunities and practical security training inside the No Breach ecosystem.
              </p>

              <div
                className={
                  family.actions
                }
              >
                <Link
                  href="/careers"
                  className={
                    family.primaryAction
                  }
                >
                  Careers

                  <Arrow />
                </Link>

                <Link
                  href="/training"
                  className={
                    family.secondaryAction
                  }
                >
                  Training

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
