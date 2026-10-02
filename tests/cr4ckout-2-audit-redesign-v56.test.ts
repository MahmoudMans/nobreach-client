import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const PAGE =
  "src/app/activities/[slug]/cr4ckout-2-v48.tsx";

const CSS =
  "src/app/activities/[slug]/cr4ckout-2-v48.module.css";


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
  "CR4CKOUT 2 audit redesign V56",
  () => {

    it(
      "preserves V48 route authority while adding V56 redesign authority",
      () => {

        expect(
          page
        ).toContain(
          'data-cr4ckout-2-design="v48"'
        );

        expect(
          page
        ).toContain(
          'data-cr4ckout-2-audit-redesign="v56"'
        );

        expect(
          page
        ).toContain(
          'data-activity-detail-slug="cr4ckout-2"'
        );

      }
    );


    it(
      "keeps the canonical activity data bindings",
      () => {

        expect(
          page
        ).toContain(
          "activity.summary"
        );

        expect(
          page
        ).toContain(
          "activity.description"
        );

        expect(
          page
        ).toContain(
          "activity.highlights.map"
        );

        expect(
          page
        ).toContain(
          "activity.sections.map"
        );

        expect(
          page
        ).toContain(
          "activity.relatedEventSlug"
        );

      }
    );


    it(
      "uses the three-part audit architecture",
      () => {

        expect(
          page
        ).toContain(
          "Practical challenges, workshops and shared learning."
        );

        expect(
          page
        ).toContain(
          "Security practice, education and community in one format."
        );

        expect(
          page
        ).toContain(
          "Continue from CR4CKOUT 2.0."
        );

        expect(
          page
        ).toContain(
          'data-cr4ckout-2-consolidated-section="participation"'
        );

        expect(
          page
        ).toContain(
          'data-cr4ckout-2-consolidated-section="related-records"'
        );

      }
    );


    it(
      "removes the three redundant large-section headings",
      () => {

        expect(
          page
        ).not.toContain(
          "The published CR4CKOUT 2 activity record."
        );

        expect(
          page
        ).not.toContain(
          "Continue through the CR4CKOUT record."
        );

        expect(
          page
        ).not.toContain(
          "Explore more published No Breach activity."
        );

      }
    );


    it(
      "preserves the established edition identity",
      () => {

        for (
          const marker
          of [
            "EDITION / 02",
            "HACK",
            "LEARN",
            "BREAK",
            "BUILD",
            "PUBLISHED ACTIVITY"
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
      "preserves all required next destinations",
      () => {

        for (
          const destination
          of [
            'href="/activities"',
            'href="/cr4ckout"',
            'href="/events"'
          ]
        ) {

          expect(
            page
          ).toContain(
            destination
          );

        }

        expect(
          page
        ).toContain(
          "`/events/${activity.relatedEventSlug}`"
        );

      }
    );


    it(
      "uses content-driven sections rather than viewport-sized panels",
      () => {

        expect(
          css
        ).toContain(
          "NB_CR4CKOUT_2_AUDIT_REDESIGN_V56"
        );

        expect(
          css
        ).not.toMatch(
          /min-height\s*:/
        );

        expect(
          css
        ).toContain(
          ".editorialGrid"
        );

        expect(
          css
        ).toContain(
          ".narrativeGrid"
        );

        expect(
          css
        ).toContain(
          ".archiveNavigation"
        );

      }
    );


    it(
      "defines mobile reflow and keyboard focus treatment",
      () => {

        expect(
          css
        ).toContain(
          "@media (max-width: 620px)"
        );

        expect(
          css
        ).toContain(
          "@media (max-width: 390px)"
        );

        expect(
          css
        ).toContain(
          ":focus-visible"
        );

        expect(
          css
        ).toContain(
          "prefers-reduced-motion"
        );

      }
    );

  }
);
