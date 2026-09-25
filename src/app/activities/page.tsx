import type {
  Metadata
} from "next";

import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import {
  LinkedInActivitySection
} from "@/components/activities/linkedin-activity-section";

import * as activityContent from "@/content/activities";

import styles from "./activities-index-v45.module.css";


export const metadata:
  Metadata = {

  title:
    "Activities | No Breach",

  description:
    "Published No Breach training, workshops, CTFs, university engagements, community activity and media records."
};


type ActivityCategory =
  | "conference"
  | "training"
  | "workshop"
  | "ctf"
  | "university"
  | "community"
  | "media";


type UnknownRecord =
  Record<
    string,
    unknown
  >;


type NormalizedActivity = {
  slug:
    string;

  title:
    string;

  year:
    string;

  category:
    ActivityCategory;

  location?:
    string;

  summary:
    string;

  highlights:
    string[];
};


const categoryOptions:
  {
    key:
      "all"
      |
      ActivityCategory;

    label:
      string;
  }[] =
    [
      {
        key:
          "all",

        label:
          "All"
      },
      {
        key:
          "conference",

        label:
          "Conference"
      },
      {
        key:
          "training",

        label:
          "Training"
      },
      {
        key:
          "workshop",

        label:
          "Workshop"
      },
      {
        key:
          "ctf",

        label:
          "CTF"
      },
      {
        key:
          "university",

        label:
          "University"
      },
      {
        key:
          "community",

        label:
          "Community"
      },
      {
        key:
          "media",

        label:
          "Media"
      }
    ];


const validCategories =
  new Set<
    ActivityCategory
  >([
    "conference",
    "training",
    "workshop",
    "ctf",
    "university",
    "community",
    "media"
  ]);


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


function normalizeActivity(
  value:
    UnknownRecord
):
  NormalizedActivity
  |
  null {

  const slug =
    firstText(
      value,
      [
        "slug"
      ]
    );


  const title =
    firstText(
      value,
      [
        "title"
      ]
    );


  const year =
    firstText(
      value,
      [
        "year"
      ]
    );


  const category =
    firstText(
      value,
      [
        "category"
      ]
    );


  const summary =
    firstText(
      value,
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
    ||
    !validCategories.has(
      category as
        ActivityCategory
    )
  ) {

    return null;

  }


  return {
    slug,

    title,

    year,

    category:
      category as
        ActivityCategory,

    location:
      firstText(
        value,
        [
          "location"
        ]
      ),

    summary,

    highlights:
      stringList(
        value.highlights
      )
  };

}


const activityContentValues:
  unknown[] =
    Object.values(
      activityContent
    );


const activityRecords:
  UnknownRecord[] =
    [];


for (
  const value
  of activityContentValues
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

        activityRecords.push(
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

    activityRecords.push(
      value
    );

  }

}


const discovered =
  activityRecords
    .map(
      normalizeActivity
    )
    .filter(
      (
        activity
      ): activity is NormalizedActivity =>
        activity
        !==
        null
    );


const activityMap =
  new Map<
    string,
    NormalizedActivity
  >();


for (
  const activity
  of discovered
) {

  if (
    !activityMap.has(
      activity.slug
    )
  ) {

    activityMap.set(
      activity.slug,
      activity
    );

  }

}


const activities =
  Array.from(
    activityMap.values()
  )
    .sort(
      (
        a,
        b
      ) =>
        b.year.localeCompare(
          a.year,
          undefined,
          {
            numeric:
              true
          }
        )
    );


function resolveFilter(
  value:
    string
    |
    string[]
    |
    undefined
):
  "all"
  |
  ActivityCategory {

  const candidate =
    Array.isArray(
      value
    )
      ? value[
          0
        ]
      : value;


  if (
    candidate
    &&
    validCategories.has(
      candidate as
        ActivityCategory
    )
  ) {

    return candidate as
      ActivityCategory;

  }


  return "all";

}


function Arrow() {

  return (
    <span
      aria-hidden="true"
    >
      ↗
    </span>
  );

}


export default async function ActivitiesPage({
  searchParams
}: {
  searchParams:
    Promise<{
      type?:
        string
        |
        string[];
    }>;
}) {

  const query =
    await searchParams;


  const activeFilter =
    resolveFilter(
      query.type
    );


  const visibleActivities =
    activeFilter
    ===
    "all"
      ? activities
      : activities.filter(
          activity =>
            activity.category
            ===
            activeFilter
        );


  return (
    <div
      className={
        styles.page
      }
      data-activities-index-design="v45"
    >

      {/* ================================================================
          PAGE INTRO
         ================================================================ */}

      <section
        className={
          styles.intro
        }
        data-activities-section="intro"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >

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
                NOBREACH / ACTIVITIES
              </p>


              <h1>
                Activity archive.
              </h1>


              <p
                className={
                  styles.introLead
                }
              >
                Published training, workshops, CTFs, university
                engagements, community activity and media records from
                across the No Breach ecosystem.
              </p>


              <div
                className={
                  styles.introActions
                }
              >
                <a
                  className={
                    styles.primaryAction
                  }
                  href="#archive"
                >
                  Explore the archive

                  <span
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </a>


                <Link
                  className={
                    styles.secondaryAction
                  }
                  href="/events"
                >
                  Events

                  <Arrow />
                </Link>
              </div>
            </div>


            <div
              className={
                styles.activitySignal
              }
              aria-label="No Breach public activity stream"
            >
              <div
                className={
                  styles.signalHeader
                }
              >
                <span>
                  FIELD LOG
                </span>

                <span>
                  NB / PUBLIC
                </span>
              </div>


              <div
                className={
                  styles.signalTrack
                }
              >
                <div>
                  <span>
                    01
                  </span>

                  <strong>
                    PRACTICE
                  </strong>
                </div>

                <i />

                <div>
                  <span>
                    02
                  </span>

                  <strong>
                    COMMUNITY
                  </strong>
                </div>

                <i />

                <div>
                  <span>
                    03
                  </span>

                  <strong>
                    SHARE
                  </strong>
                </div>
              </div>


              <div
                className={
                  styles.signalFooter
                }
              >
                <span>
                  PUBLISHED RECORD
                </span>

                <span>
                  ACTIVITY ARCHIVE
                </span>
              </div>
            </div>

          </div>

        </Container>
      </section>


      {/* ================================================================
          ARCHIVE
         ================================================================ */}

      <section
        className={
          styles.archive
        }
        id="archive"
        data-activities-section="archive"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >

          <header
            className={
              styles.sectionHeader
            }
          >
            <div>
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                <span>
                  01
                </span>

                Published work
              </p>


              <h2>
                Field activity, documented.
              </h2>
            </div>


            <p>
              Browse the published No Breach activity record by type.
              Each entry opens its dedicated activity detail.
            </p>
          </header>


          <div
            className={
              styles.filterArea
            }
          >
            <div
              className={
                styles.filterLabel
              }
            >
              <span>
                FILTER
              </span>

              <span>
                {
                  visibleActivities.length
                }
                {" "}
                {
                  visibleActivities.length
                  ===
                  1
                    ? "record"
                    : "records"
                }
              </span>
            </div>


            <nav
              className={
                styles.filters
              }
              aria-label="Activity filters"
            >
              {
                categoryOptions.map(
                  option => {

                    const active =
                      activeFilter
                      ===
                      option.key;


                    const href =
                      option.key
                      ===
                      "all"
                        ? "/activities"
                        : `/activities?type=${option.key}`;


                    return (
                      <Link
                        className={
                          active
                            ? `${styles.filterLink} ${styles.filterLinkActive}`
                            : styles.filterLink
                        }
                        data-activity-filter={
                          option.key
                        }
                        data-active={
                          active
                            ? "true"
                            : "false"
                        }
                        href={
                          href
                        }
                        key={
                          option.key
                        }
                        aria-current={
                          active
                            ? "page"
                            : undefined
                        }
                      >
                        {
                          option.label
                        }
                      </Link>
                    );

                  }
                )
              }
            </nav>
          </div>


          {
            visibleActivities.length
            >
            0
              ? (
                  <div
                    className={
                      styles.activityList
                    }
                    data-activity-list="true"
                  >
                    {
                      visibleActivities.map(
                        (
                          activity,
                          index
                        ) => (
                          <article
                            className={
                              styles.activityRow
                            }
                            data-activity-row="true"
                            data-activity-category={
                              activity.category
                            }
                            key={
                              activity.slug
                            }
                          >

                            <div
                              className={
                                styles.activityIndex
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
                            </div>


                            <div
                              className={
                                styles.activityRecord
                              }
                            >
                              <div
                                className={
                                  styles.activityTopline
                                }
                              >
                                <span>
                                  {
                                    activity.year
                                  }
                                </span>

                                <span>
                                  {
                                    activity.category
                                  }
                                </span>
                              </div>


                              <h3>
                                {
                                  activity.title
                                }
                              </h3>


                              <p
                                className={
                                  styles.activitySummary
                                }
                              >
                                {
                                  activity.summary
                                }
                              </p>


                              {
                                activity.location
                                  ? (
                                      <p
                                        className={
                                          styles.activityLocation
                                        }
                                      >
                                        {
                                          activity.location
                                        }
                                      </p>
                                    )
                                  : null
                              }


                              {
                                activity.highlights.length
                                >
                                0
                                  ? (
                                      <div
                                        className={
                                          styles.highlightLine
                                        }
                                        aria-label="Activity highlights"
                                      >
                                        {
                                          activity.highlights
                                            .slice(
                                              0,
                                              2
                                            )
                                            .map(
                                              highlight => (
                                                <span
                                                  key={
                                                    highlight
                                                  }
                                                >
                                                  {
                                                    highlight
                                                  }
                                                </span>
                                              )
                                            )
                                        }
                                      </div>
                                    )
                                  : null
                              }
                            </div>


                            <Link
                              className={
                                styles.activityAction
                              }
                              href={
                                `/activities/${activity.slug}`
                              }
                            >
                              View activity

                              <Arrow />
                            </Link>

                          </article>
                        )
                      )
                    }
                  </div>
                )
              : (
                  <div
                    className={
                      styles.emptyState
                    }
                    data-activities-empty="true"
                  >
                    <div>
                      <p
                        className={
                          styles.emptyLabel
                        }
                      >
                        FILTER / EMPTY
                      </p>

                      <h3>
                        No published activity matches this filter.
                      </h3>

                      <p>
                        Browse all published No Breach activity instead.
                      </p>
                    </div>


                    <Link
                      className={
                        styles.textAction
                      }
                      href="/activities"
                    >
                      Reset filter

                      <span
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                )
          }

        </Container>
      </section>


      {/* ================================================================
          VERIFIED PUBLIC LINKEDIN ACTIVITY
         ================================================================ */}

      <div
        className={
          styles.socialMount
        }
        data-activities-section="linkedin"
      >
        <LinkedInActivitySection />
      </div>


      {/* ================================================================
          FINAL CTA
         ================================================================ */}

      <section
        className={
          styles.finalCta
        }
        data-activities-section="final-cta"
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

                Ecosystem
              </p>


              <h2>
                Continue through the No Breach ecosystem.
              </h2>
            </div>


            <div
              className={
                styles.finalBody
              }
            >
              <p>
                Explore dedicated events and the CR4CKOUT experience for
                more published No Breach activity.
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
                  href="/events"
                >
                  Explore events

                  <Arrow />
                </Link>


                <Link
                  className={
                    styles.secondaryAction
                  }
                  href="/cr4ckout"
                >
                  Discover CR4CKOUT

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

    </div>
  );

}
