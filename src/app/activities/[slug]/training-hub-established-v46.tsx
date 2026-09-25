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
      data-activity-detail-slug="training-hub-established"
    >

      {/* ================================================================
          PAGE INTRO
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
                {
                  activity.category
                }
                {" "}
                / {
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
                  Explore Training Hub

                  <Arrow />
                </Link>


                <Link
                  className={
                    styles.secondaryAction
                  }
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
                  ACTIVITY RECORD
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

              <dd>
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
          OVERVIEW
         ================================================================ */}

      <section
        className={
          styles.section
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
                The published Training Hub activity record.
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
          CANONICAL NARRATIVE SECTIONS
         ================================================================ */}

      {
        activity.sections.map(
          (
            section,
            index
          ) => (
            <section
              className={
                index
                %
                2
                ===
                0
                  ? `${styles.section} ${styles.sectionAlt}`
                  : styles.section
              }
              data-activity-detail-section="narrative"
              key={
                `${section.title}-${index}`
              }
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
                        {
                          String(
                            index
                            +
                            2
                          ).padStart(
                            2,
                            "0"
                          )
                        }
                      </span>

                      Activity record
                    </p>


                    <h2>
                      {
                        section.title
                      }
                    </h2>
                  </header>


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
                </div>
              </Container>
            </section>
          )
        )
      }


      {/* ================================================================
          ECOSYSTEM CONTEXT
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.contextSection}`
        }
        data-activity-detail-section="context"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >

          <div
            className={
              styles.contextGrid
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

                Training Hub
              </p>


              <h2>
                Continue into the No Breach learning ecosystem.
              </h2>
            </div>


            <div
              className={
                styles.contextBody
              }
            >
              <p>
                Explore the current No Breach training catalogue and
                related published activity through the dedicated Academy
                and archive routes.
              </p>


              <div
                className={
                  styles.contextActions
                }
              >
                <Link
                  className={
                    styles.primaryAction
                  }
                  href={
                    activity.relatedTrainingSlug
                      ? `/training/${activity.relatedTrainingSlug}`
                      : "/training"
                  }
                >
                  {
                    activity.relatedTrainingSlug
                      ? "Related training"
                      : "Explore Training Hub"
                  }

                  <Arrow />
                </Link>


                {
                  activity.relatedEventSlug
                    ? (
                        <Link
                          className={
                            styles.secondaryAction
                          }
                          href={
                            `/events/${activity.relatedEventSlug}`
                          }
                        >
                          Related event

                          <Arrow />
                        </Link>
                      )
                    : (
                        <Link
                          className={
                            styles.secondaryAction
                          }
                          href="/activities"
                        >
                          Activity archive

                          <span
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </Link>
                      )
                }
              </div>
            </div>

          </div>

        </Container>
      </section>


      {/* ================================================================
          FINAL CTA
         ================================================================ */}

      <section
        className={
          styles.finalCta
        }
        data-activity-detail-section="final-cta"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >

          <div
            className={
              styles.finalLayout
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

                Activities
              </p>


              <h2>
                Explore more published No Breach work.
              </h2>
            </div>


            <div
              className={
                styles.finalBody
              }
            >
              <p>
                Continue through the activity archive or explore the
                current Academy programme catalogue.
              </p>


              <div
                className={
                  styles.finalActions
                }
              >
                <Link
                  className={
                    styles.primaryAction
                  }
                  href="/activities"
                >
                  Browse activities

                  <Arrow />
                </Link>


                <Link
                  className={
                    styles.secondaryAction
                  }
                  href="/training"
                >
                  Explore Academy

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
