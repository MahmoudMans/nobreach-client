import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import * as activityContent from "@/content/activities";

import styles from "./cr4ckout-launched-v47.module.css";


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


  const normalized:
    ActivitySection[] =
      [];


  for (
    const section
    of value
  ) {

    if (
      !isRecord(
        section
      )
    ) {

      continue;

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

      continue;

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

      const fallback =
        firstText(
          section,
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


    normalized.push({
      title,
      paragraphs
    });

  }


  return normalized;

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
            "cr4ckout-launched"
        );


    if (
      !found
    ) {

      throw new Error(
        "CR4CKOUT launched activity data is missing."
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


export function Cr4ckoutLaunchedV47() {

  const eventHref =
    activity.relatedEventSlug
      ? `/events/${activity.relatedEventSlug}`
      : "/events";


  const eventLabel =
    activity.relatedEventSlug
      ? "Related event"
      : "Events";


  return (
    <article
      className={
        styles.page
      }
      data-cr4ckout-launched-design="v47"
      data-cr4ckout-launched-audit-redesign="v64"
      data-activity-detail-slug="cr4ckout-launched"
      data-related-event-slug={
        activity.relatedEventSlug
        ??
        undefined
      }
      data-related-training-slug={
        activity.relatedTrainingSlug
        ??
        undefined
      }
    >

      {/* ================================================================
          HERO / LAUNCH RECORD
         ================================================================ */}

      <section
        className={
          styles.intro
        }
        data-cr4ckout-activity-section="intro"
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
                CR4CKOUT / LAUNCH RECORD
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
                  href="/cr4ckout"
                >
                  Explore current CR4CKOUT

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
                styles.cr4ckoutSignal
              }
              aria-label="CR4CKOUT activity signal"
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
                  NB / COMMUNITY
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
                    HACK
                  </strong>
                </div>

                <i />

                <div>
                  <span>
                    02
                  </span>

                  <strong>
                    LEARN
                  </strong>
                </div>

                <i />

                <div>
                  <span>
                    03
                  </span>

                  <strong>
                    BREAK
                  </strong>
                </div>

                <i />

                <div>
                  <span>
                    04
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
                  LAUNCHED
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
        data-cr4ckout-activity-section="facts"
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
          01 — LAUNCH OVERVIEW
         ================================================================ */}

      <section
        className={
          styles.section
        }
        data-cr4ckout-activity-section="overview"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
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
                <span>
                  01
                </span>

                Launch overview
              </p>


              <h2>
                A cybersecurity community built around participation.
              </h2>
            </header>


            <div
              className={
                styles.sectionBody
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


                        <ol
                          className={
                            styles.highlightGrid
                          }
                        >
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
          02 — COMMUNITY MODEL
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.sectionAlt}`
        }
        data-cr4ckout-launched-consolidated-section="community-model"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
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
                <span>
                  02
                </span>

                Community model
              </p>


              <h2>
                Security knowledge grows through shared practice.
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
                      data-cr4ckout-activity-section="narrative"
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
          03 — RELATED RECORDS

          Legacy V47 context + final-cta markers remain in one visual chapter.
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.contextSection}`
        }
        data-cr4ckout-launched-consolidated-section="related-records"
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

                Related records
              </p>


              <h2>
                Continue with CR4CKOUT.
              </h2>
            </header>


            <div
              className={
                styles.contextBody
              }
            >

              <section
                data-cr4ckout-activity-section="context"
              >
                <p
                  className={
                    styles.contextLead
                  }
                >
                  Explore the current CR4CKOUT experience, browse published
                  event records, or return to the wider No Breach activity
                  archive.
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
                    href="/cr4ckout"
                  >
                    Explore CR4CKOUT

                    <Arrow />
                  </Link>


                  <Link
                    className={
                      styles.secondaryAction
                    }
                    href={
                      eventHref
                    }
                  >
                    {
                      eventLabel
                    }

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
                  styles.finalCta
                }
                data-cr4ckout-activity-section="final-cta"
              >
                <div
                  className={
                    styles.finalLayout
                  }
                >
                  <div
                    className={
                      styles.finalBody
                    }
                  >
                    <span
                      className={
                        styles.archiveLabel
                      }
                    >
                      Historical record
                    </span>

                    <p>
                      Launched {
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
                      styles.finalActions
                    }
                  >
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


                    <Link
                      href="/events"
                    >
                      Events

                      <span
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </section>

            </div>

          </div>

        </Container>
      </section>

    </article>
  );

}
