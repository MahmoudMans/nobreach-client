import Link from "next/link";

import {
  Breadcrumbs
} from "@/components/navigation/breadcrumbs";

import {
  Container
} from "@/components/layout/container";

import {
  team
} from "@/content/team";

import {
  createMetadata
} from "@/lib/seo";

import family from "../company-family.module.css";
import styles from "./team.module.css";


export const metadata =
  createMetadata({
    title:
      "Team",

    description:
      "Published No Breach team profiles and areas of cybersecurity focus.",

    path:
      "/company/team"
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


export default function TeamPage() {

  const currentTeam =
    team.filter(
      (
        member
      ) =>
        member.status ===
        "current"
    );


  return (
    <div
      className={
        `${family.page} ${styles.page}`
      }
      data-company-family="v14"
      data-company-density="v15"
      data-company-architecture="v18"
      data-company-family-page="team"
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
              "Team"
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
                No Breach / Team
              </p>

              <h1
                className={
                  family.title
                }
              >
                People behind the work.
              </h1>

              <p
                className={
                  family.lead
                }
              >
                Only current, confirmed public profiles are shown here. No Breach does not use inferred or outdated employment information for this page.
              </p>
            </div>

            <aside
              className={
                family.technicalPanel
              }
              aria-label="Team publication policy"
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
                  Public directory
                </span>

                <span
                  className={
                    family.technicalPanelCode
                  }
                >
                  NB / PEOPLE
                </span>
              </div>

              <dl
                className={
                  family.metaRail
                }
              >
                <div
                  className={
                    family.metaItem
                  }
                >
                  <dt
                    className={
                      family.metaLabel
                    }
                  >
                    Published profiles
                  </dt>

                  <dd
                    className={
                      family.metaValue
                    }
                  >
                    {
                      currentTeam.length
                    }
                  </dd>
                </div>

                <div
                  className={
                    family.metaItem
                  }
                >
                  <dt
                    className={
                      family.metaLabel
                    }
                  >
                    Policy
                  </dt>

                  <dd
                    className={
                      family.metaValue
                    }
                  >
                    Current & confirmed
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </Container>
      </section>


      <section
        className={
          family.section
        }

        data-company-content-section="team-directory"
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
                Current team
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
                Current public profiles.
              </h2>

              <p
                className={
                  family.sectionDescription
                }
              >
                The directory intentionally reflects only roles that can be represented as current.
              </p>
            </div>
          </div>

          <div
            className={
              styles.teamDirectory
            }
          >
            {
              currentTeam.map(
                (
                  member,
                  index
                ) => (
                  <article
                    className={
                      styles.teamMember
                    }
                    key={
                      member.name
                    }
                  >
                    <div
                      className={
                        styles.memberIdentity
                      }
                    >
                      <span>
                        {
                          String(
                            index + 1
                          ).padStart(
                            2,
                            "0"
                          )
                        }
                      </span>

                      <strong>
                        {
                          member.initials
                        }
                      </strong>
                    </div>

                    <div
                      className={
                        styles.memberCopy
                      }
                    >
                      <p
                        className={
                          family.microLabel
                        }
                      >
                        {
                          member.role
                        }
                      </p>

                      <h2>
                        {
                          member.name
                        }
                      </h2>

                      <p>
                        {
                          member.bio
                        }
                      </p>

                      <div
                        className={
                          family.tags
                        }
                      >
                        {
                          member.specialties.map(
                            (
                              specialty
                            ) => (
                              <span
                                className={
                                  family.tag
                                }
                                key={
                                  specialty
                                }
                              >
                                {
                                  specialty
                                }
                              </span>
                            )
                          )
                        }
                      </div>
                    </div>

                    <Link
                      href="/company/founder"
                      className={
                        styles.memberAction
                      }
                      aria-label={`View ${member.name} profile`}
                    >
                      <Arrow />
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
                Explore
              </p>

              <h2
                className={
                  family.ctaTitle
                }
              >
                Learn more about the people and work behind No Breach.
              </h2>

              <div
                className={
                  family.actions
                }
              >
                <Link
                  href="/company/founder"
                  className={
                    family.primaryAction
                  }
                >
                  Meet the founder

                  <Arrow />
                </Link>

                <Link
                  href="/company/internships"
                  className={
                    family.secondaryAction
                  }
                >
                  Internship projects

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
