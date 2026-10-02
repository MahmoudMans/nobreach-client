import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const PAGE =
  "src/app/activities/[slug]/cr4ckout-launched-v47.tsx";

const CSS =
  "src/app/activities/[slug]/cr4ckout-launched-v47.module.css";


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
  "CR4CKOUT launched audit redesign V64",
  () => {

    it(
      "preserves V47 authority while adding V64",
      () => {

        expect(
          page
        ).toContain(
          'data-cr4ckout-launched-design="v47"'
        );

        expect(
          page
        ).toContain(
          'data-cr4ckout-launched-audit-redesign="v64"'
        );

        expect(
          page
        ).toContain(
          'data-activity-detail-slug="cr4ckout-launched"'
        );

      }
    );


    it(
      "preserves canonical activity bindings",
      () => {

        for (
          const marker
          of [
            "activity.title",
            "activity.year",
            "activity.category",
            "activity.summary",
            "activity.description",
            "activity.location",
            "activity.highlights.map",
            "activity.sections.map",
            "activity.relatedEventSlug",
            "activity.relatedTrainingSlug"
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
      "preserves the CR4CKOUT signal",
      () => {

        for (
          const marker
          of [
            "CR4CKOUT",
            "NB / COMMUNITY",
            "HACK",
            "LEARN",
            "BREAK",
            "BUILD",
            "LAUNCHED"
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
      "implements the three-part redesigned architecture",
      () => {

        expect(
          page
        ).toContain(
          "A cybersecurity community built around participation."
        );

        expect(
          page
        ).toContain(
          "Security knowledge grows through shared practice."
        );

        expect(
          page
        ).toContain(
          "Continue with CR4CKOUT."
        );

        expect(
          page
        ).toContain(
          'data-cr4ckout-launched-consolidated-section="community-model"'
        );

        expect(
          page
        ).toContain(
          'data-cr4ckout-launched-consolidated-section="related-records"'
        );

      }
    );


    it(
      "removes the three oversized legacy headings",
      () => {

        expect(
          page
        ).not.toContain(
          "The published CR4CKOUT launch record."
        );

        expect(
          page
        ).not.toContain(
          "Continue into the CR4CKOUT ecosystem."
        );

        expect(
          page
        ).not.toContain(
          "Explore more published No Breach activity."
        );

      }
    );


    it(
      "does not invent a required related event",
      () => {

        expect(
          page
        ).toContain(
          'activity.relatedEventSlug'
        );

        expect(
          page
        ).toContain(
          ': "/events"'
        );

        expect(
          page
        ).toContain(
          'href="/events"'
        );

      }
    );


    it(
      "keeps all three navigation destinations",
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

        expect(
          page
        ).toContain(
          'href="/events"'
        );

      }
    );


    it(
      "uses a compact responsive visual system",
      () => {

        for (
          const token
          of [
            "NB_CR4CKOUT_LAUNCHED_AUDIT_REDESIGN_V64",
            ".highlightGrid",
            ".narrativeGrid",
            ".contextGrid",
            ".finalLayout",
            ":focus-visible",
            "@media (max-width: 620px)",
            "prefers-reduced-motion"
          ]
        ) {

          expect(
            css
          ).toContain(
            token
          );

        }


        expect(
          css
        ).not.toMatch(
          /min-height\s*:\s*(100vh|100svh|100dvh)/
        );

      }
    );

  }
);
