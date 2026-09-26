import type {
  Metadata
} from "next";

import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import * as eventContent from "@/content/events";

import styles from "./events-index-v44.module.css";


export const metadata:
  Metadata = {

  title:
    "Events | No Breach",

  description:
    "Published No Breach cybersecurity events, upcoming announcements and previous editions."
};


type UnknownRecord =
  Record<
    string,
    unknown
  >;


type EventStatus =
  | "upcoming"
  | "ongoing"
  | "past";


type NormalizedEvent = {
  slug:
    string;

  title:
    string;

  year?:
    string;

  status:
    EventStatus;

  location?:
    string;

  summary:
    string;

  format:
    string[];
};


const statuses:
  {
    key:
      EventStatus;

    label:
      string;

    number:
      string;

    heading:
      string;

    description:
      string;
  }[] =
    [
      {
        key:
          "upcoming",

        label:
          "Upcoming",

        number:
          "01",

        heading:
          "What is coming next.",

        description:
          "Published upcoming No Breach events appear here as soon as they are announced."
      },
      {
        key:
          "ongoing",

        label:
          "Ongoing",

        number:
          "02",

        heading:
          "Happening now.",

        description:
          "Current published No Breach events remain visible while they are active."
      },
      {
        key:
          "past",

        label:
          "Past",

        number:
          "03",

        heading:
          "Previous editions and published activity.",

        description:
          "Browse previous No Breach events and revisit their published event records."
      }
    ];


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


function text(
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


function strings(
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


function normalizeEvent(
  value:
    UnknownRecord
):
  NormalizedEvent
  |
  null {

  const slug =
    text(
      value,
      [
        "slug"
      ]
    );


  const title =
    text(
      value,
      [
        "title"
      ]
    );


  const status =
    text(
      value,
      [
        "status"
      ]
    );


  const summary =
    text(
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
    !summary
    ||
    (
      status
      !==
      "upcoming"
      &&
      status
      !==
      "ongoing"
      &&
      status
      !==
      "past"
    )
  ) {

    return null;

  }


  return {
    slug,

    title,

    year:
      text(
        value,
        [
          "year"
        ]
      ),

    status,

    location:
      text(
        value,
        [
          "location"
        ]
      ),

    summary,

    format:
      strings(
        value.format
      )
  };

}


const eventContentValues:
  unknown[] =
    Object.values(
      eventContent
    );


const eventRecords:
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

        eventRecords.push(
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

    eventRecords.push(
      value
    );

  }

}


const discovered =
  eventRecords
    .map(
      normalizeEvent
    )
    .filter(
      (
        event
      ): event is NormalizedEvent =>
        event
        !==
        null
    );


const eventMap =
  new Map<
    string,
    NormalizedEvent
  >();


for (
  const event
  of discovered
) {

  if (
    !eventMap.has(
      event.slug
    )
  ) {

    eventMap.set(
      event.slug,
      event
    );

  }

}


const events =
  Array.from(
    eventMap.values()
  );


function eventsFor(
  status:
    EventStatus
) {

  return events
    .filter(
      event =>
        event.status
        ===
        status
    )
    .sort(
      (
        a,
        b
      ) => {

        const aYear =
          a.year
          ??
          "";

        const bYear =
          b.year
          ??
          "";


        if (
          status
          ===
          "past"
        ) {

          return bYear.localeCompare(
            aYear,
            undefined,
            {
              numeric:
                true
            }
          );

        }


        return aYear.localeCompare(
          bYear,
          undefined,
          {
            numeric:
              true
          }
        );

      }
    );

}


const upcomingEvents =
  eventsFor(
    "upcoming"
  );


const ongoingEvents =
  eventsFor(
    "ongoing"
  );


const pastEvents =
  eventsFor(
    "past"
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


function EventRows({
  events:
    rows
}: {
  events:
    NormalizedEvent[];
}) {

  return (
    <div
      className={
        styles.eventList
      }
    >
      {
        rows.map(
          (
            event,
            index
          ) => (
            <article
              className={
                styles.eventRow
              }
              data-event-row={
                event.status
              }
              key={
                event.slug
              }
            >

              <div
                className={
                  styles.eventIndex
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
                  styles.eventRecord
                }
              >
                <div
                  className={
                    styles.eventTopline
                  }
                >
                  <span>
                    {
                      event.status
                    }
                  </span>

                  {
                    event.year
                      ? (
                          <span>
                            {
                              event.year
                            }
                          </span>
                        )
                      : null
                  }
                </div>


                <h3>
                  {
                    event.title
                  }
                </h3>


                <p
                  className={
                    styles.eventSummary
                  }
                >
                  {
                    event.summary
                  }
                </p>


                {
                  (
                    event.location
                    ||
                    event.format.length
                    >
                    0
                  )
                    ? (
                        <div
                          className={
                            styles.eventMeta
                          }
                        >
                          {
                            event.location
                              ? (
                                  <span>
                                    {
                                      event.location
                                    }
                                  </span>
                                )
                              : null
                          }

                          {
                            event.format.length
                            >
                            0
                              ? (
                                  <span>
                                    {
                                      event.format.join(
                                        " · "
                                      )
                                    }
                                  </span>
                                )
                              : null
                          }
                        </div>
                      )
                    : null
                }
              </div>


              <Link
                className={
                  styles.eventAction
                }
                href={
                  `/events/${event.slug}`
                }
              >
                View event

                <Arrow />
              </Link>

            </article>
          )
        )
      }
    </div>
  );

}


function EventSection({
  status,
  rows
}: {
  status:
    EventStatus;

  rows:
    NormalizedEvent[];
}) {

  const config =
    statuses.find(
      item =>
        item.key
        ===
        status
    );


  if (
    !config
  ) {

    return null;

  }


  const isUpcoming =
    status
    ===
    "upcoming";


  if (
    rows.length
    ===
    0
    &&
    !isUpcoming
  ) {

    return null;

  }


  return (
    <section
      className={
        status
        ===
        "past"
          ? `${styles.section} ${styles.sectionAlt}`
          : styles.section
      }
      data-event-state={
        status
      }
      id={
        status
      }
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
                {
                  config.number
                }
              </span>

              {
                config.label
              }
            </p>


            <h2>
              {
                config.heading
              }
            </h2>
          </div>


          <p>
            {
              config.description
            }
          </p>
        </header>


        {
          rows.length
          >
          0
            ? (
                <EventRows
                  events={
                    rows
                  }
                />
              )
            : (
                <div
                  className={
                    styles.emptyState
                  }
                  data-events-empty="upcoming"
                >
                  <div>
                    <p
                      className={
                        styles.emptyLabel
                      }
                    >
                      STATUS / WAITING
                    </p>

                    <h3>
                      No upcoming event has been announced.
                    </h3>

                    <p>
                      Previous published events remain available in the
                      event archive.
                    </p>
                  </div>


                  {
                    pastEvents.length
                    >
                    0
                      ? (
                          <a
                            className={
                              styles.textAction
                            }
                            href="#past"
                          >
                            Explore previous events

                            <span
                              aria-hidden="true"
                            >
                              ↓
                            </span>
                          </a>
                        )
                      : (
                          <Link
                            className={
                              styles.textAction
                            }
                            href="/activities"
                          >
                            Explore activities

                            <Arrow />
                          </Link>
                        )
                  }
                </div>
              )
        }

      </Container>
    </section>
  );

}


export default function EventsPage() {

  const firstTarget =
    upcomingEvents.length
    >
    0
      ? "#upcoming"
      : pastEvents.length
        >
        0
        ? "#past"
        : "#upcoming";


  return (
    <div
      className={
        styles.page
      }
      data-events-index-design="v44"
    >

      {/* ================================================================
          PAGE INTRO
         ================================================================ */}

      <section
        className={
          styles.intro
        }
        data-events-section="intro"
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
                NOBREACH / EVENTS
              </p>


              <h1>
                Events.
              </h1>


              <p
                className={
                  styles.introLead
                }
              >
                Explore published No Breach events — from upcoming
                announcements to previous editions and community
                activity.
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
                  href={
                    firstTarget
                  }
                >
                  Explore events

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
                  href="/activities"
                >
                  View activities

                  <Arrow />
                </Link>
              </div>
            </div>


            <div
              className={
                styles.eventStream
              }
              aria-label="Event publication states"
            >
              <div
                className={
                  styles.streamHeader
                }
              >
                <span>
                  EVENT STREAM
                </span>

                <span>
                  NB / PUBLIC
                </span>
              </div>


              <div
                className={
                  styles.streamStates
                }
              >
                <div>
                  <span>
                    01
                  </span>

                  <strong>
                    UPCOMING
                  </strong>
                </div>

                <i />

                <div>
                  <span>
                    02
                  </span>

                  <strong>
                    ONGOING
                  </strong>
                </div>

                <i />

                <div>
                  <span>
                    03
                  </span>

                  <strong>
                    PAST
                  </strong>
                </div>
              </div>


              <div
                className={
                  styles.streamFooter
                }
              >
                <span>
                  PUBLISHED EVENTS
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
          EVENT STATES
         ================================================================ */}

      <EventSection
        status="upcoming"
        rows={
          upcomingEvents
        }
      />


      {
        ongoingEvents.length
        >
        0
          ? (
              <EventSection
                status="ongoing"
                rows={
                  ongoingEvents
                }
              />
            )
          : null
      }


      {
        pastEvents.length
        >
        0
          ? (
              <EventSection
                status="past"
                rows={
                  pastEvents
                }
              />
            )
          : null
      }


      {/* ================================================================
          ECOSYSTEM CTA
         ================================================================ */}

      <section
        className={
          styles.finalCta
        }
        data-events-section="final-cta"
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
                Go deeper into No Breach activity.
              </h2>
            </div>


            <div
              className={
                styles.finalBody
              }
            >
              <p>
                Explore CR4CKOUT and the wider archive of published
                training, community and cybersecurity activity.
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
                  href="/cr4ckout"
                >
                  Explore CR4CKOUT

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
          </div>
        </Container>
      </section>

    </div>
  );

}
