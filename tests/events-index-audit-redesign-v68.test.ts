import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const PAGE =
  "src/app/events/page.tsx";

const CSS =
  "src/app/events/events-index-v44.module.css";


const page =
  readFileSync(
    PAGE,
    "utf8"
  );

const css =
  readFileSync(
    CSS,
    "utf8"
  );


describe(
  "Events audit redesign V68",
  () => {

    it(
      "preserves V44 authority and adds V68 authority",
      () => {

        expect(
          page
        ).toContain(
          'data-events-index-design="v44"'
        );

        expect(
          page
        ).toContain(
          'data-events-audit-redesign="v68"'
        );

      }
    );


    it(
      "preserves the canonical event model",
      () => {

        for (
          const marker
          of [
            "@/content/events",
            "upcomingEvents",
            "ongoingEvents",
            "pastEvents",
            "event.title",
            "event.status",
            "event.year",
            "event.location",
            "event.summary",
            "event.format",
            "`/events/${event.slug}`"
          ]
        ) {

          expect(
            page
          ).toContain(
            marker
          );

        }

      }
    );


    it(
      "separates stable page chapters from event statuses",
      () => {

        expect(
          page
        ).toContain(
          'data-events-section="current"'
        );

        expect(
          page
        ).toContain(
          'data-events-section="archive"'
        );

        expect(
          page
        ).toContain(
          'data-events-section="final-cta"'
        );

        expect(
          page
        ).toContain(
          "Current and upcoming No Breach events."
        );

        expect(
          page
        ).toContain(
          "Previous events and published records."
        );

        expect(
          page
        ).toContain(
          "Continue through the No Breach ecosystem."
        );

      }
    );


    it(
      "keeps Upcoming truthful and always representable",
      () => {

        expect(
          page
        ).toContain(
          'status="upcoming"'
        );

        expect(
          page
        ).toContain(
          'data-events-empty="upcoming"'
        );

        expect(
          page
        ).toContain(
          "No upcoming event has been announced."
        );

      }
    );


    it(
      "uses data-backed hero publication counts",
      () => {

        expect(
          page
        ).toContain(
          'data-event-status-count="upcoming"'
        );

        expect(
          page
        ).toContain(
          'data-event-status-count="ongoing"'
        );

        expect(
          page
        ).toContain(
          'data-event-status-count="past"'
        );

        expect(
          page
        ).toContain(
          "upcomingEvents.length"
        );

        expect(
          page
        ).toContain(
          "ongoingEvents.length"
        );

        expect(
          page
        ).toContain(
          "pastEvents.length"
        );

      }
    );


    it(
      "uses a state-aware hero destination label",
      () => {

        expect(
          page
        ).toContain(
          "View current events"
        );

        expect(
          page
        ).toContain(
          "View upcoming events"
        );

        expect(
          page
        ).toContain(
          "Browse event archive"
        );

        expect(
          page
        ).toContain(
          "Explore activities"
        );

      }
    );


    it(
      "preserves downstream ecosystem navigation",
      () => {

        expect(
          page
        ).toContain(
          'href="/cr4ckout"'
        );

        expect(
          page
        ).toContain(
          'href="/activities"'
        );

      }
    );


    it(
      "adds the compact responsive V68 visual layer",
      () => {

        for (
          const marker
          of [
            "NB_EVENTS_AUDIT_REDESIGN_V68",
            ".currentGroups",
            ".statusGroup",
            ".statusHeader",
            ".statusCount",
            ".archiveSection",
            ".archiveEmpty",
            ".compactFinal",
            ":focus-visible",
            "@media (max-width: 680px)",
            "prefers-reduced-motion"
          ]
        ) {

          expect(
            css
          ).toContain(
            marker
          );

        }

      }
    );

  }
);
