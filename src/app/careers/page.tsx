import Link from "next/link";

import {
  Breadcrumbs
} from "@/components/navigation/breadcrumbs";

import {
  Container
} from "@/components/layout/container";

import {
  siteConfig
} from "@/content/site";

import {
  createMetadata
} from "@/lib/seo";

import styles from "./careers.module.css";


export const metadata =
  createMetadata({

    title:
      "Careers | No Breach",

    description:
      "Employment, internship and freelance collaboration opportunities published by No Breach.",

    path:
      "/careers"

  });


type Opportunity = {
  title:
    string;

  type:
    "Employment"
    |
    "Internship"
    |
    "Freelance collaboration";

  summary:
    string;

  href:
    string;
};


type OpportunitySourceState =
  |
  {
    kind:
      "ready";

    opportunities:
      readonly Opportunity[];
  }
  |
  {
    kind:
      "unavailable";
  };


const publishedOpenings:
  readonly Opportunity[] =
  [];


const opportunityState:
  OpportunitySourceState =
  {
    kind:
      "ready",

    opportunities:
      publishedOpenings
  };


const opportunityCategories = [
  "Employment",
  "Internships",
  "Freelance collaboration"
] as const;


const workResources = [
  {
    number:
      "01",

    key:
      "internships",

    title:
      "Internship Projects",

    description:
      "See selected applied-security projects developed through No Breach internships.",

    href:
      "/company/internships"
  },
  {
    number:
      "02",

    key:
      "training",

    title:
      "Training",

    description:
      "Explore practical cybersecurity learning and technical training.",

    href:
      "/training"
  },
  {
    number:
      "03",

    key:
      "insights",

    title:
      "Technical Insights",

    description:
      "Read technical writing and security research published by No Breach.",

    href:
      "/insights"
  }
] as const;


function InternalArrow() {

  return (
    <span
      aria-hidden="true"
    >
      →
    </span>
  );

}


function ExternalArrow() {

  return (
    <span
      aria-hidden="true"
    >
      ↗
    </span>
  );

}


export default function CareersPage() {

  const sourceUnavailable =
    opportunityState.kind
    ===
    "unavailable";


  const currentOpenings =
    opportunityState.kind
    ===
    "ready"
      ? opportunityState.opportunities
      : [];


  const hasPublishedOpenings =
    currentOpenings.length
    >
    0;


  const displayedState =
    sourceUnavailable
      ? "unavailable"
      : hasPublishedOpenings
        ? "populated"
        : "empty";


  return (
    <div
      className={
        styles.page
      }
      data-careers-design="v22"
      data-careers-audit="v23"
      data-careers-state={
        displayedState
      }
      data-careers-opening-count={
        currentOpenings.length
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
              "Careers"
          }
        ]}
      />


      <section
        className={
          styles.opening
        }
        data-careers-section="opening"
      >
        <Container>
          <div
            className={
              styles.frame
            }
            data-careers-frame="opening"
          >
            <header
              className={
                styles.intro
              }
            >
              <h1
                className={
                  styles.title
                }
              >
                Careers at No Breach
              </h1>


              <p
                className={
                  styles.introText
                }
              >
                Explore employment, internship and freelance collaboration opportunities.
              </p>
            </header>


            <div
              className={
                styles.scope
              }
              aria-labelledby="careers-scope-title"
            >
              <p
                id="careers-scope-title"
                className={
                  styles.scopeLabel
                }
              >
                Opportunity scope
              </p>


              <ul
                className={
                  styles.scopeList
                }
                aria-label="Opportunity categories"
              >
                {
                  opportunityCategories.map(
                    (
                      category
                    ) => (
                      <li
                        key={
                          category
                        }
                        data-careers-category
                      >
                        {
                          category
                        }
                      </li>
                    )
                  )
                }
              </ul>
            </div>


            <section
              className={
                styles.statusCard
              }
              aria-labelledby="careers-status-heading"
              data-careers-status={
                displayedState
              }
            >
              {
                sourceUnavailable
                  ? (
                    <>
                      <h2
                        id="careers-status-heading"
                        className={
                          styles.statusTitle
                        }
                      >
                        Opportunity information is temporarily unavailable.
                      </h2>


                      <p
                        className={
                          styles.statusText
                        }
                      >
                        The current publication state cannot be confirmed from the available source.
                      </p>
                    </>
                  )
                  : hasPublishedOpenings
                    ? (
                      <>
                        <h2
                          id="careers-status-heading"
                          className={
                            styles.statusTitle
                          }
                        >
                          Published opportunities
                        </h2>


                        <div
                          className={
                            styles.openingList
                          }
                        >
                          {
                            currentOpenings.map(
                              (
                                opportunity
                              ) => (
                                <article
                                  key={
                                    opportunity.href
                                  }
                                  className={
                                    styles.openingItem
                                  }
                                  data-careers-opportunity
                                >
                                  <p
                                    className={
                                      styles.openingType
                                    }
                                  >
                                    {
                                      opportunity.type
                                    }
                                  </p>


                                  <h3>
                                    {
                                      opportunity.title
                                    }
                                  </h3>


                                  <p>
                                    {
                                      opportunity.summary
                                    }
                                  </p>


                                  <Link
                                    href={
                                      opportunity.href
                                    }
                                  >
                                    View opportunity

                                    <InternalArrow />
                                  </Link>
                                </article>
                              )
                            )
                          }
                        </div>
                      </>
                    )
                    : (
                      <>
                        <h2
                          id="careers-status-heading"
                          className={
                            styles.statusTitle
                          }
                        >
                          There are currently no published openings.
                        </h2>


                        <p
                          className={
                            styles.statusText
                          }
                        >
                          New opportunities will appear here when they are formally published.
                        </p>
                      </>
                    )
              }


              <a
                className={
                  styles.linkedinAction
                }
                href={
                  siteConfig.linkedin
                }
                target="_blank"
                rel="noreferrer"
                data-careers-linkedin
              >
                View No Breach on LinkedIn

                <ExternalArrow />
              </a>
            </section>
          </div>
        </Container>
      </section>


      <section
        className={
          styles.work
        }
        data-careers-section="work"
      >
        <Container>
          <div
            className={
              styles.frame
            }
            data-careers-frame="work"
          >
            <header
              className={
                styles.workHeader
              }
            >
              <h2
                className={
                  styles.workTitle
                }
              >
                Explore No Breach’s work
              </h2>


              <p
                className={
                  styles.workIntro
                }
              >
                See internship projects, practical training and technical insights.
              </p>
            </header>


            <nav
              className={
                styles.resourceList
              }
              aria-label="Explore No Breach work"
            >
              {
                workResources.map(
                  (
                    resource
                  ) => (
                    <Link
                      key={
                        resource.key
                      }
                      href={
                        resource.href
                      }
                      className={
                        styles.resourceRow
                      }
                      data-careers-resource={
                        resource.key
                      }
                    >
                      <span
                        className={
                          styles.resourceNumber
                        }
                        aria-hidden="true"
                      >
                        {
                          resource.number
                        }
                      </span>


                      <span
                        className={
                          styles.resourceCopy
                        }
                      >
                        <span
                          className={
                            styles.resourceTitle
                          }
                        >
                          {
                            resource.title
                          }
                        </span>


                        <span
                          className={
                            styles.resourceDescription
                          }
                        >
                          {
                            resource.description
                          }
                        </span>
                      </span>


                      <span
                        className={
                          styles.resourceAction
                        }
                      >
                        Explore

                        <InternalArrow />
                      </span>
                    </Link>
                  )
                )
              }
            </nav>
          </div>
        </Container>
      </section>
    </div>
  );

}
