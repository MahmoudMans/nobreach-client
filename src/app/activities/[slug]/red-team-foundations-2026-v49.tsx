import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import * as activityContent from "@/content/activities";

import styles from "./red-team-foundations-2026-v49.module.css";


type UnknownRecord =
  Record<
    string,
    unknown
  >;


type ActivitySection = {
  title:
    string;

  paragraphs:
    string[];
};


type ActivityRecord = {
  slug:
    string;

  title:
    string;

  year:
    string;

  category:
    string;

  location?:
    string;

  summary:
    string;

  description?:
    string;

  highlights:
    string[];

  sections:
    ActivitySection[];

  relatedEventSlug?:
    string;

  relatedTrainingSlug?:
    string;
};


function isRecord(
  value:
    unknown
): value is UnknownRecord {

  return (
    typeof value
    ===
    "object"
    &&
    value
    !==
    null
    &&
    !Array.isArray(
      value
    )
  );

}


function firstText(
  record:
    UnknownRecord,
  keys:
    string[]
) {

  for (
    const key
    of keys
  ) {

    const value =
      record[
        key
      ];


    if (
      typeof value
      ===
      "string"
      &&
      value.trim()
    ) {

      return value.trim();

    }

  }


  return undefined;

}


function stringList(
  value:
    unknown
) {

  if (
    !Array.isArray(
      value
    )
  ) {

    return [];

  }


  return value.filter(
    (
      item
    ): item is string =>
      typeof item
      ===
      "string"
      &&
      Boolean(
        item.trim()
      )
  );

}


function normalizeSections(
  value:
    unknown
):
  ActivitySection[] {

  if (
    !Array.isArray(
      value
    )
  ) {

    return [];

  }


  const sections:
    ActivitySection[] =
      [];


  for (
    const candidate
    of value
  ) {

    if (
      !isRecord(
        candidate
      )
    ) {

      continue;

    }


    const title =
      firstText(
        candidate,
        [
          "title",
          "heading",
          "name"
        ]
      );


    if (
      !title
    ) {

      continue;

    }


    let paragraphs =
      stringList(
        candidate.paragraphs
      );


    if (
      paragraphs.length
      ===
      0
    ) {

      const fallback =
        firstText(
          candidate,
          [
            "description",
            "summary",
            "content"
          ]
        );


      if (
        fallback
      ) {

        paragraphs = [
          fallback
        ];

      }

    }


    if (
      paragraphs.length
      ===
      0
    ) {

      continue;

    }


    sections.push({
      title,
      paragraphs
    });

  }


  return sections;

}


function normalizeActivity(
  record:
    UnknownRecord
):
  ActivityRecord
  |
  null {

  const slug =
    firstText(
      record,
      [
        "slug"
      ]
    );


  const title =
    firstText(
      record,
      [
        "title"
      ]
    );


  const year =
    firstText(
      record,
      [
        "year"
      ]
    );


  const category =
    firstText(
      record,
      [
        "category"
      ]
    );


  const summary =
    firstText(
      record,
      [
        "summary"
      ]
    );


  if (
    !slug
    ||
    !title
    ||
    !year
    ||
    !category
    ||
    !summary
  ) {

    return null;

  }


  return {
    slug,

    title,

    year,

    category,

    location:
      firstText(
        record,
        [
          "location"
        ]
      ),

    summary,

    description:
      firstText(
        record,
        [
          "description"
        ]
      ),

    highlights:
      stringList(
        record.highlights
      ),

    sections:
      normalizeSections(
        record.sections
      ),

    relatedEventSlug:
      firstText(
        record,
        [
          "relatedEventSlug"
        ]
      ),

    relatedTrainingSlug:
      firstText(
        record,
        [
          "relatedTrainingSlug"
        ]
      )
  };

}


const contentValues:
  unknown[] =
    Object.values(
      activityContent
    );


const records:
  UnknownRecord[] =
    [];


for (
  const value
  of contentValues
) {

  if (
    Array.isArray(
      value
    )
  ) {

    for (
      const item
      of value
    ) {

      if (
        isRecord(
          item
        )
      ) {

        records.push(
          item
        );

      }

    }


    continue;

  }


  if (
    isRecord(
      value
    )
  ) {

    records.push(
      value
    );

  }

}


const activity =
  (() => {

    const found =
      records
        .map(
          normalizeActivity
        )
        .find(
          candidate =>
            candidate?.slug
            ===
            "red-team-foundations-2026"
        );


    if (
      !found
    ) {

      throw new Error(
        "Red Team Foundations 2026 activity data is missing."
      );

    }


    return found;

  })();


const useDescription =
  Boolean(
    activity.description
    &&
    activity.description
    !==
    activity.summary
  );


function Arrow() {

  return (
    <span
      aria-hidden="true"
    >
      ↗
    </span>
  );

}


export function RedTeamFoundationsActivityV49() {

  return (
    <article
      className={
        styles.page
      }
      data-red-team-activity-design="v49"
      data-red-team-activity-audit="v52"
      data-activity-detail-slug="red-team-foundations-2026"
    >
      {/* ================================================================
          PUBLISHED RECORD INTRODUCTION
         ================================================================ */}

      <section
        className={
          styles.intro
        }
        data-red-team-activity-section="intro"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <div
            className={
              styles.frame
            }
            data-red-team-activity-frame="intro"
          >
            <nav
              className={
                styles.breadcrumb
              }
              aria-label="Breadcrumb"
            >
              <Link
                href="/activities"
              >
                Activities
              </Link>


              <span
                aria-hidden="true"
              >
                /
              </span>


              <span>
                {
                  activity.title
                }
              </span>
            </nav>


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
                  {
                    activity.category
                  }
                  {" / "}
                  {
                    activity.year
                  }
                </p>


                <h1>
                  {
                    activity.title
                  }
                </h1>


                <p
                  className={
                    styles.introLead
                  }
                >
                  {
                    activity.summary
                  }
                </p>


                <div
                  className={
                    styles.introActions
                  }
                >
                  <a
                    href="#overview"
                    className={
                      styles.primaryAction
                    }
                  >
                    Read activity record

                    <span
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  </a>


                  <Link
                    href="/activities"
                    className={
                      styles.secondaryAction
                    }
                  >
                    Activity archive

                    <span
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>


              <aside
                className={
                  styles.recordContext
                }
                data-red-team-activity-ui="record-context"
                aria-labelledby="red-team-record-context"
              >
                <p
                  className={
                    styles.panelEyebrow
                  }
                >
                  Published activity
                </p>


                <h2
                  id="red-team-record-context"
                >
                  Record context
                </h2>


                <dl
                  className={
                    styles.recordFacts
                  }
                >
                  <div>
                    <dt>
                      Year
                    </dt>

                    <dd>
                      {
                        activity.year
                      }
                    </dd>
                  </div>


                  <div>
                    <dt>
                      Category
                    </dt>

                    <dd>
                      {
                        activity.category
                      }
                    </dd>
                  </div>


                  <div>
                    <dt>
                      Location
                    </dt>

                    <dd>
                      {
                        activity.location
                        ??
                        "Not specified"
                      }
                    </dd>
                  </div>


                  <div>
                    <dt>
                      Record
                    </dt>

                    <dd>
                      Published activity
                    </dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          ACTIVITY OVERVIEW
         ================================================================ */}

      <section
        id="overview"
        className={
          styles.section
        }
        data-red-team-activity-section="overview"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <div
            className={
              styles.frame
            }
            data-red-team-activity-frame="overview"
          >
            <div
              className={
                styles.sectionGrid
              }
            >
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
                  01 / Activity overview
                </p>


                <h2>
                  What this activity covered.
                </h2>
              </header>


              <div
                className={
                  styles.sectionBody
                }
              >
                <p
                  className={
                    styles.overviewIntroduction
                  }
                >
                  {
                    useDescription
                      ? activity.description
                      : activity.summary
                  }
                </p>


                {
                  activity.highlights.length
                  >
                  0
                    ? (
                        <div
                          className={
                            styles.highlights
                          }
                          data-red-team-activity-ui="published-highlights"
                        >
                          <p
                            className={
                              styles.contentLabel
                            }
                          >
                            Published highlights
                          </p>


                          <ol>
                            {
                              activity.highlights.map(
                                (
                                  highlight,
                                  index
                                ) => (
                                  <li
                                    key={
                                      highlight
                                    }
                                  >
                                    <span
                                      aria-hidden="true"
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


                                    <p>
                                      {
                                        highlight
                                      }
                                    </p>
                                  </li>
                                )
                              )
                            }
                          </ol>
                        </div>
                      )
                    : null
                }
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          CONSOLIDATED PUBLISHED RECORD
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.recordSection}`
        }
        data-red-team-activity-section="record"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <div
            className={
              styles.frame
            }
            data-red-team-activity-frame="record"
          >
            <header
              className={
                styles.recordHeading
              }
            >
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                02 / Published record
              </p>


              <h2>
                The methodology behind the activity.
              </h2>
            </header>


            <div
              className={
                styles.recordRows
              }
              data-red-team-activity-ui="record-sections"
            >
              {
                activity.sections.map(
                  (
                    item,
                    index
                  ) => (
                    <article
                      className={
                        styles.recordRow
                      }
                      data-red-team-activity-record-section
                      key={
                        item.title
                      }
                    >
                      <span
                        className={
                          styles.recordIndex
                        }
                        aria-hidden="true"
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


                      <h3>
                        {
                          item.title
                        }
                      </h3>


                      <div
                        className={
                          styles.recordCopy
                        }
                      >
                        {
                          item.paragraphs.map(
                            paragraph => (
                              <p
                                key={
                                  paragraph
                                }
                              >
                                {
                                  paragraph
                                }
                              </p>
                            )
                          )
                        }
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
          CURRENT PROGRAMME HANDOFF
         ================================================================ */}

      <section
        id="current-programme"
        className={
          styles.context
        }
        data-red-team-activity-section="context"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <div
            className={
              `${styles.frame} ${styles.contextLayout}`
            }
            data-red-team-activity-frame="context"
          >
            <div>
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                03 / Training context
              </p>


              <h2>
                Continue into the current Red Team Foundations programme.
              </h2>
            </div>


            <div
              className={
                styles.contextBody
              }
            >
              <p>
                This page documents published Red Team training activity.
                The Training Hub contains the current programme structure,
                learning objectives and course information.
              </p>


              <div
                className={
                  styles.contextActions
                }
              >
                {
                  activity.relatedTrainingSlug
                    ? (
                        <Link
                          href={
                            `/training/${activity.relatedTrainingSlug}`
                          }
                          className={
                            styles.primaryAction
                          }
                        >
                          View related course

                          <Arrow />
                        </Link>
                      )
                    : (
                        <Link
                          href="/training"
                          className={
                            styles.primaryAction
                          }
                        >
                          Explore Training Hub

                          <Arrow />
                        </Link>
                      )
                }


                <Link
                  href="/activities"
                  className={
                    styles.secondaryAction
                  }
                >
                  Activity archive

                  <span
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );

}
