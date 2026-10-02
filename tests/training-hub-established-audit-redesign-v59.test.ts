import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const PAGE =
  "src/app/activities/[slug]/training-hub-established-v46.tsx";

const CSS =
  "src/app/activities/[slug]/training-hub-established-v46.module.css";


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
  "Training Hub established activity audit redesign V59",
  () => {

    it(
      "preserves V46 route authority and adds V59 redesign authority",
      () => {

        expect(
          page
        ).toContain(
          'data-training-hub-activity-design="v46"'
        );

        expect(
          page
        ).toContain(
          'data-training-hub-audit-redesign="v59"'
        );

        expect(
          page
        ).toContain(
          'data-activity-detail-slug="training-hub-established"'
        );

      }
    );


    it(
      "continues to consume canonical activity data",
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
            "activity.sections.map"
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
      "preserves Training Hub identity",
      () => {

        for (
          const marker
          of [
            "TRAINING HUB",
            "NB / ACADEMY",
            "LEARN",
            "PRACTICE",
            "BUILD",
            "ESTABLISHED"
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
      "uses the approved three-part content architecture",
      () => {

        expect(
          page
        ).toContain(
          "A dedicated learning layer for practical cybersecurity."
        );

        expect(
          page
        ).toContain(
          "Education built around practice."
        );

        expect(
          page
        ).toContain(
          "Continue with the current Training Hub."
        );

        expect(
          page
        ).toContain(
          'data-training-hub-consolidated-section="learning-model"'
        );

        expect(
          page
        ).toContain(
          'data-training-hub-consolidated-section="continue-learning"'
        );

      }
    );


    it(
      "removes the redundant old large-section headings",
      () => {

        expect(
          page
        ).not.toContain(
          "The published Training Hub activity record."
        );

        expect(
          page
        ).not.toContain(
          "Continue into the No Breach learning ecosystem."
        );

        expect(
          page
        ).not.toContain(
          "Explore more published No Breach work."
        );

      }
    );


    it(
      "preserves Academy and activity archive journeys",
      () => {

        expect(
          page
        ).toContain(
          'href="/training"'
        );

        expect(
          page
        ).toContain(
          'href="/activities"'
        );

        expect(
          page
        ).toContain(
          "Explore current Training Hub"
        );

        expect(
          page
        ).toContain(
          "Back to activities"
        );

      }
    );


    it(
      "uses content-driven visual sections",
      () => {

        expect(
          css
        ).toContain(
          "NB_TRAINING_HUB_ACTIVITY_AUDIT_REDESIGN_V59"
        );

        expect(
          css
        ).not.toMatch(
          /min-height\s*:/
        );

        for (
          const marker
          of [
            ".editorialGrid",
            ".highlightRow",
            ".narrativeGrid",
            ".continueGrid",
            ".archiveNavigation"
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


    it(
      "defines focus responsive and reduced-motion behavior",
      () => {

        expect(
          css
        ).toContain(
          ":focus-visible"
        );

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
          "prefers-reduced-motion"
        );

      }
    );

  }
);
