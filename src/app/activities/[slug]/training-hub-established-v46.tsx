import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import * as activityContent from "@/content/activities";

import styles from "./training-hub-established-v46.module.css";


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


  return value.flatMap(
    section => {

      if (
        !isRecord(
          section
        )
      ) {

        return [];

      }


      const title =
        firstText(
          section,
          [
            "title",
            "heading",
            "name"
          ]
        );


      if (
        !title
      ) {

        return [];

      }


      let paragraphs =
        stringList(
          section.paragraphs
        );


      if (
        paragraphs.length
        ===
        0
      ) {

        const paragraph =
          firstText(
            section,
            [
              "description",
              "summary",
              "content"
            ]
          );


        if (
          paragraph
        ) {

          paragraphs = [
            paragraph
          ];

        }

      }


      if (
        paragraphs.length
        ===
        0
      ) {

        return [];

      }


      return [
        {
          title,
          paragraphs
        }
      ];

    }
  );

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
            "training-hub-established"
        );


    if (
      !found
    ) {

      throw new Error(
        "Training Hub established activity data is missing."
      );

    }


    return found;

  })();


const showDescription =
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


export function TrainingHubEstablishedV46() {

  return (
    <article
      className={
        styles.page
      }
      data-training-hub-activity-design="v46"
      data-training-hub-audit-redesign="v59"
      data-activity-detail-slug="training-hub-established"
    >

      {/* ================================================================
          HERO / HISTORICAL ACTIVITY IDENTITY
         ================================================================ */}

      <section
        className={
          styles.intro
        }
        data-activity-detail-section="intro"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
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
                TRAINING HUB / ACTIVITY RECORD
              </p>


              <h1>
                {
                  activity.title
                }
              </h1>


              <p
                className={
                  styles.summary
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
                <Link
                  className={
                    styles.primaryAction
                  }
                  href="/training"
                >
                  Explore current Training Hub

                  <Arrow />
                </Link>


                <Link
                  className={
                    styles.secondaryAction
                  }
                  href="/activities"
                >
                  Back to activities

                  <span
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>

            </div>


            <div
              className={
                styles.trainingSignal
              }
              aria-label="Training Hub activity signal"
            >

              <div
                className={
                  styles.signalHeader
                }
              >
                <span>
                  TRAINING HUB
                </span>

                <span>
                  NB / ACADEMY
                </span>
              </div>


              <div
                className={
                  styles.signalTrack
                }
                aria-hidden="true"
              >
                <div>
                  <span>
                    01
                  </span>

                  <strong>
                    LEARN
                  </strong>
                </div>

                <i />

                <div>
                  <span>
                    02
                  </span>

                  <strong>
                    PRACTICE
                  </strong>
                </div>

                <i />

                <div>
                  <span>
                    03
                  </span>

                  <strong>
                    BUILD
                  </strong>
                </div>
              </div>


              <div
                className={
                  styles.signalFooter
                }
              >
                <span>
                  ESTABLISHED
                </span>

                <span>
                  {
                    activity.year
                  }
                </span>
              </div>

            </div>

          </div>

        </Container>
      </section>


      {/* ================================================================
          FACTS
         ================================================================ */}

      <section
        className={
          styles.facts
        }
        data-activity-detail-section="facts"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <dl
            className={
              styles.factList
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

              <dd
                className={
                  styles.capitalizeValue
                }
              >
                {
                  activity.category
                }
              </dd>
            </div>


            {
              activity.location
                ? (
                    <div>
                      <dt>
                        Location
                      </dt>

                      <dd>
                        {
                          activity.location
                        }
                      </dd>
                    </div>
                  )
                : null
            }


            <div>
              <dt>
                Record
              </dt>

              <dd>
                Published activity
              </dd>
            </div>

          </dl>
        </Container>
      </section>


      {/* ================================================================
          01 — ACTIVITY OVERVIEW
         ================================================================ */}

      <section
        className={
          styles.contentSection
        }
        data-activity-detail-section="overview"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >

          <div
            className={
              styles.editorialGrid
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
                <span>
                  01
                </span>

                Activity overview
              </p>


              <h2>
                A dedicated learning layer for practical cybersecurity.
              </h2>
            </header>


            <div
              className={
                styles.overviewContent
              }
            >

              <p
                className={
                  styles.largeCopy
                }
              >
                {
                  showDescription
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
                      >
                        <p
                          className={
                            styles.subsectionLabel
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
                                  className={
                                    styles.highlightRow
                                  }
                                  key={
                                    highlight
                                  }
                                >
                                  <span>
                                    {
                                      String(
                                        index
                                        +
                                        1
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

        </Container>
      </section>


      {/* ================================================================
          02 — LEARNING MODEL

          Canonical narrative records remain separate data-bound units,
          but they now belong to one visual chapter.
         ================================================================ */}

      <section
        className={
          `${styles.contentSection} ${styles.learningSection}`
        }
        data-training-hub-consolidated-section="learning-model"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >

          <div
            className={
              styles.editorialGrid
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
                <span>
                  02
                </span>

                Learning model
              </p>


              <h2>
                Education built around practice.
              </h2>
            </header>


            <div
              className={
                styles.narrativeGrid
              }
            >
              {
                activity.sections.map(
                  (
                    section,
                    index
                  ) => (
                    <article
                      className={
                        styles.narrativeCard
                      }
                      data-activity-detail-section="narrative"
                      key={
                        `${section.title}-${index}`
                      }
                    >

                      <span
                        className={
                          styles.narrativeIndex
                        }
                        aria-hidden="true"
                      >
                        {
                          String(
                            index
                            +
                            1
                          ).padStart(
                            2,
                            "0"
                          )
                        }
                      </span>


                      <h3>
                        {
                          section.title
                        }
                      </h3>


                      <div
                        className={
                          styles.prose
                        }
                      >
                        {
                          section.paragraphs.map(
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
          03 — CONTINUE LEARNING

          V46 context and final-cta markers remain for compatibility,
          but both now belong to one compact visual ending.
         ================================================================ */}

      <section
        className={
          styles.continueSection
        }
        data-training-hub-consolidated-section="continue-learning"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >

          <div
            className={
              styles.continueGrid
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
                <span>
                  03
                </span>

                Continue learning
              </p>


              <h2>
                Continue with the current Training Hub.
              </h2>
            </header>


            <div
              className={
                styles.continueBody
              }
            >

              <section
                className={
                  styles.continuePrimary
                }
                data-activity-detail-section="context"
              >
                <p
                  className={
                    styles.continueLead
                  }
                >
                  Explore the current No Breach training catalogue or return
                  to the wider activity archive.
                </p>


                <div
                  className={
                    styles.continueActions
                  }
                >
                  <Link
                    className={
                      styles.primaryAction
                    }
                    href="/training"
                  >
                    Explore Training Hub

                    <Arrow />
                  </Link>


                  <Link
                    className={
                      styles.secondaryAction
                    }
                    href="/activities"
                  >
                    All activities

                    <span
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </section>


              <section
                className={
                  styles.archiveNavigation
                }
                data-activity-detail-section="final-cta"
                aria-label="Training Hub record navigation"
              >
                <div>
                  <span
                    className={
                      styles.archiveLabel
                    }
                  >
                    Historical record
                  </span>

                  <p>
                    Established {
                      activity.year
                    }
                    {
                      activity.location
                        ? ` · ${activity.location}`
                        : ""
                    }
                  </p>
                </div>


                <div
                  className={
                    styles.archiveLinks
                  }
                >
                  <Link
                    href="/training"
                  >
                    Current Training Hub

                    <span
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </Link>

                  <Link
                    href="/activities"
                  >
                    Activity archive

                    <span
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </section>

            </div>

          </div>

        </Container>
      </section>

    </article>
  );

}
