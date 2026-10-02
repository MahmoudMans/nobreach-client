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
    "src/app/activities/[slug]/ai-security-foundations-2026-v50.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/activities/[slug]/ai-security-foundations-2026-v50.module.css",
    "utf8"
  );


describe(
  "AI Security Foundations activity V50 compatibility + V51 audit",
  () => {

    it(
      "keeps V50 route authority while activating V51",
      () => {

        expect(
          page
        ).toContain(
          'data-ai-security-activity-design="v50"'
        );

        expect(
          page
        ).toContain(
          'data-ai-security-activity-audit="v51"'
        );

        expect(
          page
        ).toContain(
          'data-activity-detail-slug="ai-security-foundations-2026"'
        );

        expect(
          css
        ).toContain(
          "NB_AI_SECURITY_FOUNDATIONS_ACTIVITY_V50"
        );

        expect(
          css
        ).toContain(
          "NB_AI_SECURITY_ACTIVITY_AUDIT_V51"
        );

      }
    );


    it(
      "continues to bind the canonical activity source",
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
      "replaces the decorative system signal with useful record context",
      () => {

        expect(
          page
        ).not.toContain(
          'aria-label="AI Security activity signal"'
        );

        expect(
          page
        ).not.toContain(
          'data-ai-activity-section="facts"'
        );

        expect(
          page
        ).toContain(
          'data-ai-activity-ui="record-context"'
        );

        expect(
          page
        ).toContain(
          "Record context"
        );

        expect(
          page
        ).toContain(
          "Published activity"
        );

      }
    );


    it(
      "keeps one overview with all published highlights",
      () => {

        expect(
          page
        ).toContain(
          'data-ai-activity-section="overview"'
        );

        expect(
          page
        ).toContain(
          "What this activity covered."
        );

        expect(
          page
        ).toContain(
          'data-ai-activity-ui="published-highlights"'
        );

        expect(
          page
        ).toContain(
          "activity.highlights.map"
        );

      }
    );


    it(
      "merges the canonical narrative into one record region",
      () => {

        expect(
          page
        ).toContain(
          'data-ai-activity-section="record"'
        );

        expect(
          page
        ).toContain(
          'data-ai-activity-ui="record-sections"'
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

        expect(
          page
        ).toContain(
          "The security perspective behind the activity."
        );

      }
    );


    it(
      "uses one final programme handoff instead of two repeated CTA sections",
      () => {

        expect(
          page
        ).toContain(
          'data-ai-activity-section="context"'
        );

        expect(
          page
        ).not.toContain(
          'data-ai-activity-section="final-cta"'
        );

        expect(
          page
        ).toContain(
          "Continue into the current AI Security programme."
        );

        expect(
          page
        ).toContain(
          "View related course"
        );

        expect(
          page
        ).toContain(
          "Explore Training Hub"
        );

      }
    );


    it(
      "uses one four-section sequence",
      () => {

        expect(
          (
            page.match(
              /data-ai-activity-section=/g
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
            `data-ai-activity-section="${section}"`
          );

        }

      }
    );


    it(
      "keeps the restrained No Breach visual vocabulary",
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
          "max-width:"
        );

        expect(
          css
        ).toContain(
          "@media"
        );

      }
    );

  }
);
