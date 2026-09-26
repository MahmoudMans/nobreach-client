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


const description =
  firstText(
    event,
    [
      "description"
    ]
  );


const status =
  firstText(
    event,
    [
      "status"
    ]
  );


const category =
  firstText(
    event,
    [
      "category",
      "type"
    ]
  );


const date =
  firstText(
    event,
    [
      "dateLabel",
      "date",
      "startDate"
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


const format =
  firstText(
    event,
    [
      "format"
    ]
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


const facts:
  {
    label:
      string;

    value:
      string;
  }[] =
    [];


function addFact(
  label:
    string,
  value:
    string
    |
    undefined
) {

  if (
    value
  ) {

    facts.push({
      label,
      value
    });

  }

}


addFact(
  "Date",
  date
);

addFact(
  "Location",
  location
);

addFact(
  "Status",
  status
);

addFact(
  "Format",
  format
);


const hasOverview =
  Boolean(
    (
      description
      &&
      description
      !==
      summary
    )
    ||
    highlights.length
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


export function Cr4ckoutEventV43() {

  return (
    <article
      className={
        styles.page
      }
      data-event-detail-design="v43"
      data-event-slug="cr4ckout-2-0"
    >

      {/* ================================================================
          EVENT PAGE INTRO
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
                {
                  [
                    category,
                    status
                  ]
                    .filter(
                      Boolean
                    )
                    .join(
                      " / "
                    )
                  ||
                  "CR4CKOUT EVENT"
                }
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
                  Explore CR4CKOUT

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
                  NOBREACH
                </span>

                <span>
                  EVENT ARCHIVE
                </span>
              </div>
            </div>

          </div>

        </Container>
      </section>


      {/* ================================================================
          REAL EVENT FACTS ONLY
         ================================================================ */}

      {
        facts.length
        >
        0
          ? (
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
            )
          : null
      }


      {/* ================================================================
          EVENT OVERVIEW
         ================================================================ */}

      {
        hasOverview
          ? (
              <section
                className={
                  styles.section
                }
                data-event-section="overview"
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

                        Event overview
                      </p>

                      <h2>
                        Inside {
                          title
                        }.
                      </h2>
                    </header>


                    <div
                      className={
                        styles.editorialContent
                      }
                    >
                      {
                        description
                        &&
                        description
                        !==
                        summary
                          ? (
                              <p
                                className={
                                  styles.largeCopy
                                }
                              >
                                {
                                  description
                                }
                              </p>
                            )
                          : null
                      }


                      {
                        highlights.length
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
                                    highlights.map(
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
            )
          : null
      }


      {/* ================================================================
          CANONICAL EVENT CONTENT
         ================================================================ */}

      {
        sections.map(
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
              data-event-section="event-content"
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

                      Event record
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
          CR4CKOUT CONTEXT
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.cr4ckoutContext}`
        }
        data-event-section="cr4ckout"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <div
            className={
              styles.contextLayout
            }
          >
            <div>
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                <span>
                  CR
                </span>

                CR4CKOUT
              </p>

              <h2>
                Continue into the wider CR4CKOUT experience.
              </h2>
            </div>


            <div
              className={
                styles.contextBody
              }
            >
              <p>
                Explore the CR4CKOUT experience, its format and the
                published event archive from the dedicated No Breach
                page.
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
                  Discover CR4CKOUT

                  <Arrow />
                </Link>

                {
                  relatedActivitySlug
                    ? (
                        <Link
                          className={
                            styles.secondaryAction
                          }
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
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          FINAL EVENT CTA
         ================================================================ */}

      <section
        className={
          styles.finalCta
        }
        data-event-section="final-cta"
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

                Events
              </p>

              <h2>
                Explore more published No Breach activity.
              </h2>
            </div>


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
                href="/activities"
              >
                View activities

                <span
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </article>
  );

}
