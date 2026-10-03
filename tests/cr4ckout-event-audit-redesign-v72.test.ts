import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const PAGE =
  "src/app/events/[slug]/cr4ckout-event-v43.tsx";

const CSS =
  "src/app/events/[slug]/cr4ckout-event-v43.module.css";

const DATA =
  "src/content/events.ts";


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

const data =
  readFileSync(
    DATA,
    "utf8"
  );


describe(
  "CR4CKOUT event audit redesign V72",
  () => {

    it(
      "preserves V43 route authority while adding V72",
      () => {

        expect(
          page
        ).toContain(
          'data-event-detail-design="v43"'
        );

        expect(
          page
        ).toContain(
          'data-event-detail-redesign="v72"'
        );

        expect(
          page
        ).toContain(
          'data-event-slug="cr4ckout-2-0"'
        );

      }
    );


    it(
      "binds canonical description and format arrays",
      () => {

        expect(
          page
        ).toMatch(
          /stringList\(\s*event\.description\s*\)/
        );

        expect(
          page
        ).toMatch(
          /stringList\(\s*event\.format\s*\)/
        );

        expect(
          page
        ).toContain(
          "descriptionParagraphs.map"
        );

        expect(
          page
        ).toContain(
          "formatItems.map"
        );

      }
    );


    it(
      "restores year location and normalized status facts",
      () => {

        expect(
          page
        ).toContain(
          '"Year"'
        );

        expect(
          page
        ).toContain(
          '"Location"'
        );

        expect(
          page
        ).toContain(
          '"Status"'
        );

        expect(
          page
        ).toContain(
          "statusLabel"
        );

      }
    );


    it(
      "uses one event overview chapter",
      () => {

        expect(
          page
        ).toContain(
          'data-event-consolidated-section="record"'
        );

        expect(
          page
        ).toContain(
          "A hands-on cybersecurity community experience."
        );

        expect(
          page
        ).toContain(
          "Published format"
        );

      }
    );


    it(
      "consolidates the two old ending chapters",
      () => {

        expect(
          page
        ).toContain(
          'data-event-consolidated-section="related-records"'
        );

        expect(
          page
        ).toContain(
          "Continue from CR4CKOUT 2.0."
        );

        expect(
          page
        ).toContain(
          "Explore current CR4CKOUT"
        );

        expect(
          page
        ).toContain(
          "Activity archive"
        );

      }
    );


    it(
      "does not invent a related activity",
      () => {

        expect(
          page
        ).toContain(
          "relatedActivitySlug"
        );

        expect(
          page
        ).toContain(
          "relatedActivitySlug"
          +
          "\n"
        );

        expect(
          data
        ).not.toContain(
          "relatedActivitySlug:"
        );

      }
    );


    it(
      "preserves the V43 runtime marker progression",
      () => {

        for (
          const marker
          of [
            'data-event-section="intro"',
            'data-event-section="facts"',
            'data-event-section="overview"',
            'data-event-section="event-content"',
            'data-event-section="cr4ckout"',
            'data-event-section="final-cta"'
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
      "adds responsive compact V72 styling",
      () => {

        for (
          const marker
          of [
            "NB_CR4CKOUT_EVENT_AUDIT_REDESIGN_V72",
            ".overviewGrid",
            ".formatGrid",
            ".relatedGrid",
            ".relatedLinks",
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
