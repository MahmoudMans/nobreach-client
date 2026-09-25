import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import * as activityContent from "@/content/activities";

import styles from "./cr4ckout-2-v48.module.css";


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
    const valueSection
    of value
  ) {

    if (
      !isRecord(
        valueSection
      )
    ) {

      continue;

    }


    const title =
      firstText(
        valueSection,
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
        valueSection.paragraphs
      );


    if (
      paragraphs.length
      ===
      0
    ) {

      const fallback =
        firstText(
          valueSection,
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
            "cr4ckout-2"
        );


    if (
      !found
    ) {

      throw new Error(
        "CR4CKOUT 2 activity data is missing."
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


export function Cr4ckout2V48() {

  return (
    <article
      className={
        styles.page
      }
      data-cr4ckout-2-design="v48"
      data-activity-detail-slug="cr4ckout-2"
    >

      {/* ================================================================
          PAGE INTRO
         ================================================================ */}

      <section
        className={
          styles.intro
        }
        data-cr4ckout-2-section="intro"
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
                {
                  activity.relatedEventSlug
                    ? (
                        <Link
                          className={
                            styles.primaryAction
                          }
                          href={
                            `/events/${activity.relatedEventSlug}`
                          }
                        >
                          View event record

                          <Arrow />
                        </Link>
                      )
                    : (
                        <Link
                          className={
                            styles.primaryAction
                          }
                          href="/cr4ckout"
                        >
                          Explore CR4CKOUT

                          <Arrow />
                        </Link>
                      )
                }


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
                styles.editionSignal
              }
              aria-label="CR4CKOUT 2 activity signal"
            >

              <div
                className={
                  styles.signalHeader
                }
              >
                <span>
                  CR4CKOUT
                </span>

                <span>
                  EDITION / 02
                </span>
              </div>


              <div
                className={
                  styles.editionNumber
                }
                aria-hidden="true"
              >
                <span>
                  02
                </span>
              </div>


              <div
                className={
                  styles.signalTrack
                }
                aria-hidden="true"
              >
                <span>
                  HACK
                </span>

                <i />

                <span>
                  LEARN
                </span>

                <i />

                <span>
                  BREAK
                </span>

                <i />

                <span>
                  BUILD
                </span>
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
        data-cr4ckout-2-section="facts"
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
                Ecosystem
              </dt>

              <dd>
                CR4CKOUT
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
        data-cr4ckout-2-section="overview"
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
                The published CR4CKOUT 2 activity record.
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
          CANONICAL NARRATIVE
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
              data-cr4ckout-2-section="narrative"
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
          EVENT / CR4CKOUT CONTEXT
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.contextSection}`
        }
        data-cr4ckout-2-section="context"
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
                  02
                </span>

                CR4CKOUT
              </p>


              <h2>
                Continue through the CR4CKOUT record.
              </h2>
            </div>


            <div
              className={
                styles.contextBody
              }
            >
              <p>
                Explore the dedicated CR4CKOUT experience and the
                associated event record when one is published.
              </p>


              <div
                className={
                  styles.contextActions
                }
              >
                {
                  activity.relatedEventSlug
                    ? (
                        <Link
                          className={
                            styles.primaryAction
                          }
                          href={
                            `/events/${activity.relatedEventSlug}`
                          }
                        >
                          Open related event

                          <Arrow />
                        </Link>
                      )
                    : (
                        <Link
                          className={
                            styles.primaryAction
                          }
                          href="/events"
                        >
                          Explore events

                          <Arrow />
                        </Link>
                      )
                }


                <Link
                  className={
                    styles.secondaryAction
                  }
                  href="/cr4ckout"
                >
                  CR4CKOUT

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


      {/* ================================================================
          FINAL CTA
         ================================================================ */}

      <section
        className={
          styles.finalCta
        }
        data-cr4ckout-2-section="final-cta"
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
                Explore more published No Breach activity.
              </h2>
            </div>


            <div
              className={
                styles.finalBody
              }
            >
              <p>
                Return to the activity archive or browse other published
                No Breach events.
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
                  href="/events"
                >
                  Explore events

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
