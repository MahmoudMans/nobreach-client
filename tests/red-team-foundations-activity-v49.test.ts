import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const page =
  readFileSync(
    "src/app/activities/[slug]/red-team-foundations-2026-v49.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/activities/[slug]/red-team-foundations-2026-v49.module.css",
    "utf8"
  );


describe(
  "Red Team Foundations activity V49 compatibility + V52 audit",
  () => {

    it(
      "keeps V49 route authority while activating V52",
      () => {

        expect(
          page
        ).toContain(
          'data-red-team-activity-design="v49"'
        );

        expect(
          page
        ).toContain(
          'data-red-team-activity-audit="v52"'
        );

        expect(
          page
        ).toContain(
          'data-activity-detail-slug="red-team-foundations-2026"'
        );

        expect(
          css
        ).toContain(
          "NB_RED_TEAM_FOUNDATIONS_ACTIVITY_V49"
        );

        expect(
          css
        ).toContain(
          "NB_RED_TEAM_ACTIVITY_AUDIT_V52"
        );

      }
    );


    it(
      "continues to bind every relevant canonical activity field",
      () => {

        expect(
          page
        ).toContain(
          'from "@/content/activities"'
        );


        for (
          const token
          of
          [
            "activity.title",
            "activity.year",
            "activity.category",
            "activity.location",
            "activity.summary",
            "activity.description",
            "activity.highlights",
            "activity.sections",
            "activity.relatedTrainingSlug"
          ]
        ) {

          expect(
            page
          ).toContain(
            token
          );

        }

      }
    );


    it(
      "replaces the decorative training signal with useful record context",
      () => {

        expect(
          page
        ).not.toContain(
          'aria-label="Red Team training activity signal"'
        );

        expect(
          page
        ).not.toContain(
          'data-red-team-activity-section="facts"'
        );

        expect(
          page
        ).toContain(
          'data-red-team-activity-ui="record-context"'
        );

        expect(
          page
        ).toContain(
          "Record context"
        );

      }
    );


    it(
      "keeps the canonical overview and every published highlight",
      () => {

        expect(
          page
        ).toContain(
          'data-red-team-activity-section="overview"'
        );

        expect(
          page
        ).toContain(
          "What this activity covered."
        );

        expect(
          page
        ).toContain(
          "activity.highlights.map"
        );

        expect(
          page
        ).toContain(
          'data-red-team-activity-ui="published-highlights"'
        );

      }
    );


    it(
      "consolidates canonical narrative sections into one record region",
      () => {

        expect(
          page
        ).toContain(
          'data-red-team-activity-section="record"'
        );

        expect(
          page
        ).toContain(
          'data-red-team-activity-ui="record-sections"'
        );

        expect(
          page
        ).toContain(
          "activity.sections.map"
        );

        expect(
          page
        ).toContain(
          "item.paragraphs.map"
        );

      }
    );


    it(
      "uses one current-programme handoff rather than repeated CTA sections",
      () => {

        expect(
          page
        ).toContain(
          'data-red-team-activity-section="context"'
        );

        expect(
          page
        ).not.toContain(
          'data-red-team-activity-section="final-cta"'
        );

        expect(
          page
        ).toContain(
          "Continue into the current Red Team Foundations programme."
        );

        expect(
          page
        ).toContain(
          "View related course"
        );

        expect(
          page
        ).toContain(
          "Activity archive"
        );

      }
    );


    it(
      "uses one four-section page sequence",
      () => {

        expect(
          (
            page.match(
              /data-red-team-activity-section=/g
            )
            ??
            []
          ).length
        ).toBe(
          4
        );


        for (
          const section
          of
          [
            "intro",
            "overview",
            "record",
            "context"
          ]
        ) {

          expect(
            page
          ).toContain(
            `data-red-team-activity-section="${section}"`
          );

        }

      }
    );


    it(
      "retains the restrained No Breach visual vocabulary",
      () => {

        for (
          const token
          of
          [
            "#080b10",
            "#0c121b",
            "#111b28",
            "#f3f6fb",
            "#b7c2d0",
            "#94a3b8",
            "#a5e8f3",
            "#b69ae8",
            "#273446"
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
        ).toContain(
          "@media"
        );

      }
    );

  }
);
