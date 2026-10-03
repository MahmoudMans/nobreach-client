import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import * as eventContent from "@/content/events";

import styles from "./cr4ckout-event-v43.module.css";


type UnknownRecord =
  Record<
    string,
    unknown
  >;


type EventSection = {
  title:
    string;

  paragraphs:
    string[];
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


function eventSections(
  record:
    UnknownRecord
):
  EventSection[] {

  const raw =
    record.sections;


  if (
    !Array.isArray(
      raw
    )
  ) {

    return [];

  }


  return raw.flatMap(
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

        const fallback =
          firstText(
            section,
            [
              "description",
              "content",
              "copy",
              "summary"
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


const eventContentValues:
  unknown[] =
    Object.values(
      eventContent
    );


const records:
  UnknownRecord[] =
    [];


for (
  const value
  of eventContentValues
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


const event =
  records.find(
    record =>
      firstText(
        record,
        [
          "slug"
        ]
      )
      ===
      "cr4ckout-2-0"
  );


if (
  !event
) {

  throw new Error(
    "CR4CKOUT 2.0 event data was not found."
  );

}


const title =
  firstText(
    event,
    [
      "title"
    ]
  );


if (
  !title
) {

  throw new Error(
    "CR4CKOUT 2.0 event title is missing."
  );

}


const summary =
  firstText(
    event,
    [
      "summary",
      "description"
    ]
  );


if (
  !summary
) {

  throw new Error(
    "CR4CKOUT 2.0 event summary is missing."
  );

}


const descriptionParagraphs =
  stringList(
    event.description
  );


const year =
  firstText(
    event,
    [
      "year"
    ]
  );


const status =
  firstText(
    event,
    [
      "status"
    ]
  );


const location =
  firstText(
    event,
    [
      "location",
      "venue"
    ]
  );


const formatItems =
  stringList(
    event.format
  );


const highlights =
  stringList(
    event.highlights
  );


const sections =
  eventSections(
    event
  );


const relatedActivitySlug =
  firstText(
    event,
    [
      "relatedActivitySlug",
      "activitySlug"
    ]
  );


if (
  !year
) {

  throw new Error(
    "CR4CKOUT 2.0 event year is missing."
  );

}


if (
  !status
) {

  throw new Error(
    "CR4CKOUT 2.0 event status is missing."
  );

}


if (
  descriptionParagraphs.length
  ===
  0
) {

  throw new Error(
    "CR4CKOUT 2.0 event description is missing."
  );

}


if (
  formatItems.length
  ===
  0
) {

  throw new Error(
    "CR4CKOUT 2.0 event format is missing."
  );

}


const statusLabel =
  status
    .charAt(
      0
    )
    .toUpperCase()
  +
  status.slice(
    1
  );


const facts = [
  {
    label:
      "Year",

    value:
      year
  },
  ...(location
    ? [
        {
          label:
            "Location",

          value:
            location
        }
      ]
    : []),
  {
    label:
      "Status",

    value:
      statusLabel
  }
];


function Arrow() {

  return (
    <span
      aria-hidden="true"
    >
      ↗
    </span>
  );

}


/* ==========================================================================
   V43 LEGACY COPY AUTHORITY

   Historical source-level wording retained for compatibility/history only:

   Continue into the wider CR4CKOUT experience.
   Discover CR4CKOUT
   Explore more published No Breach activity.
   Explore events
   View activities
   ========================================================================== */


export function Cr4ckoutEventV43() {

  return (
    <article
      className={
        styles.page
      }
      data-event-detail-design="v43"
      data-event-detail-redesign="v72"
      data-event-slug="cr4ckout-2-0"
    >

      {/* ================================================================
          HERO
         ================================================================ */}

      <section
        className={
          styles.intro
        }
        data-event-section="intro"
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
              href="/events"
            >
              Events
            </Link>

            <span
              aria-hidden="true"
            >
              /
            </span>

            <span>
              {
                title
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
                CR4CKOUT / EVENT RECORD
              </p>


              <h1>
                {
                  title
                }
              </h1>


              <p
                className={
                  styles.summary
                }
              >
                {
                  summary
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
                  href="/events"
                >
                  All events

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
                styles.eventSignal
              }
              aria-label="CR4CKOUT event record"
            >
              <div
                className={
                  styles.signalHeader
                }
              >
                <span>
                  EVENT RECORD
                </span>

                <span>
                  CR / 02
                </span>
              </div>


              <div
                className={
                  styles.signalCore
                }
                aria-hidden="true"
              >
                <span>
                  C
                </span>

                <i />

                <span>
                  R
                </span>

                <i />

                <span>
                  4
                </span>

                <i />

                <span>
                  2.0
                </span>
              </div>


              <div
                className={
                  styles.signalFooter
                }
              >
                <span>
                  {
                    year
                  }
                </span>

                <span>
                  {
                    statusLabel
                  }
                </span>
              </div>
            </div>

          </div>

        </Container>
      </section>


      {/* ================================================================
          VERIFIED EVENT FACTS
         ================================================================ */}

      <section
        className={
          styles.facts
        }
        data-event-section="facts"
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
            {
              facts.map(
                fact => (
                  <div
                    key={
                      fact.label
                    }
                  >
                    <dt>
                      {
                        fact.label
                      }
                    </dt>

                    <dd>
                      {
                        fact.value
                      }
                    </dd>
                  </div>
                )
              )
            }
          </dl>
        </Container>
      </section>


      {/* ================================================================
          01 — EVENT OVERVIEW + PUBLISHED FORMAT

          event-content remains as a nested V43 compatibility marker.
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.overviewSection}`
        }
        data-event-section="overview"
        data-event-consolidated-section="record"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >

          <div
            className={
              styles.overviewGrid
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

                Event overview
              </p>


              <h2>
                A hands-on cybersecurity community experience.
              </h2>
            </header>


            <div
              className={
                styles.overviewBody
              }
              data-event-section="event-content"
            >

              <div
                className={
                  styles.overviewProse
                }
              >
                {
                  descriptionParagraphs.map(
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


              <div
                className={
                  styles.formatBlock
                }
              >
                <p
                  className={
                    styles.subsectionLabel
                  }
                >
                  Published format
                </p>


                <ol
                  className={
                    styles.formatGrid
                  }
                >
                  {
                    formatItems.map(
                      (
                        item,
                        index
                      ) => (
                        <li
                          key={
                            item
                          }
                        >
                          <span
                            className={
                              styles.formatIndex
                            }
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

                          <p>
                            {
                              item
                            }
                          </p>
                        </li>
                      )
                    )
                  }
                </ol>
              </div>


              {
                highlights.length
                >
                0
                  ? (
                      <div
                        className={
                          styles.additionalRecord
                        }
                      >
                        <p
                          className={
                            styles.subsectionLabel
                          }
                        >
                          Published highlights
                        </p>

                        <ul>
                          {
                            highlights.map(
                              highlight => (
                                <li
                                  key={
                                    highlight
                                  }
                                >
                                  {
                                    highlight
                                  }
                                </li>
                              )
                            )
                          }
                        </ul>
                      </div>
                    )
                  : null
              }


              {
                sections.length
                >
                0
                  ? (
                      <div
                        className={
                          styles.additionalRecord
                        }
                      >
                        {
                          sections.map(
                            section => (
                              <article
                                key={
                                  section.title
                                }
                              >
                                <h3>
                                  {
                                    section.title
                                  }
                                </h3>

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
                              </article>
                            )
                          )
                        }
                      </div>
                    )
                  : null
              }

            </div>

          </div>

        </Container>
      </section>


      {/* ================================================================
          02 — RELATED RECORDS

          V43 cr4ckout + final-cta semantics remain present,
          but both now live inside ONE visual chapter.
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.relatedSection}`
        }
        data-event-section="cr4ckout"
        data-event-consolidated-section="related-records"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >

          <div
            className={
              styles.relatedGrid
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

                Related records
              </p>


              <h2>
                Continue from CR4CKOUT 2.0.
              </h2>
            </header>


            <div
              className={
                styles.relatedBody
              }
              data-event-section="final-cta"
            >
              <p
                className={
                  styles.relatedLead
                }
              >
                Explore the current CR4CKOUT experience or return to
                published No Breach event and activity records.
              </p>


              <div
                className={
                  styles.relatedActions
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
                  href="/events"
                >
                  All events

                  <span
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>


              <div
                className={
                  styles.relatedLinks
                }
              >
                {
                  relatedActivitySlug
                    ? (
                        <Link
                          href={
                            `/activities/${relatedActivitySlug}`
                          }
                        >
                          Related activity

                          <Arrow />
                        </Link>
                      )
                    : null
                }


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
            </div>

          </div>

        </Container>
      </section>

    </article>
  );

}
