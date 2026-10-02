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
    "src/app/activities/page.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/activities/activities-index-v45.module.css",
    "utf8"
  );


describe(
  "Activities index V45 compatibility + V46 refinement",
  () => {

    it(
      "keeps V45 authority while activating V46",
      () => {

        expect(
          page
        ).toContain(
          'data-activities-index-design="v45"'
        );

        expect(
          page
        ).toContain(
          'data-activities-audit="v46"'
        );

        expect(
          css
        ).toContain(
          "NB_ACTIVITIES_INDEX_V45"
        );

        expect(
          css
        ).toContain(
          "NB_ACTIVITIES_ARCHIVE_REFINEMENT_V46"
        );

      }
    );


    it(
      "replaces the decorative field log with useful archive context",
      () => {

        expect(
          page
        ).not.toContain(
          "FIELD LOG"
        );

        expect(
          page
        ).not.toContain(
          "NB / PUBLIC"
        );

        expect(
          page
        ).not.toContain(
          "PRACTICE"
        );

        expect(
          page
        ).toContain(
          'data-activities-ui="archive-overview"'
        );

        expect(
          page
        ).toContain(
          "Published records"
        );

        expect(
          page
        ).toContain(
          "Represented types"
        );

        expect(
          page
        ).toContain(
          "Verified LinkedIn posts"
        );

      }
    );


    it(
      "preserves all canonical URL-backed filters and adds counts",
      () => {

        for (
          const category
          of
          [
            "all",
            "conference",
            "training",
            "workshop",
            "ctf",
            "university",
            "community",
            "media"
          ]
        ) {

          expect(
            page
          ).toContain(
            `"${category}"`
          );

        }


        expect(
          page
        ).toContain(
          "`/activities?type=${option.key}`"
        );

        expect(
          page
        ).toContain(
          "categoryCounts"
        );

        expect(
          page
        ).toContain(
          "styles.filterCount"
        );

      }
    );


    it(
      "keeps editorial activity rows and dedicated detail routes",
      () => {

        expect(
          page
        ).toContain(
          'data-activity-list="true"'
        );

        expect(
          page
        ).toContain(
          'data-activity-row="true"'
        );

        expect(
          page
        ).toContain(
          "`/activities/${activity.slug}`"
        );

        expect(
          page
        ).toContain(
          "View activity"
        );

        expect(
          page
        ).not.toContain(
          "activityCard"
        );

      }
    );


    it(
      "keeps source-backed record context grouped together",
      () => {

        for (
          const token
          of
          [
            "activity.year",
            "activity.category",
            "activity.summary",
            "activity.location",
            "activity.highlights"
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
      "preserves the verified LinkedIn archive without rewriting it",
      () => {

        expect(
          page
        ).toContain(
          "LinkedInActivitySection"
        );

        expect(
          page
        ).toContain(
          'data-activities-section="linkedin"'
        );

        expect(
          css
        ).toContain(
          ":global([data-linkedin-activity-section])"
        );

      }
    );


    it(
      "retains the ecosystem handoff with distinct destinations",
      () => {

        expect(
          page
        ).toContain(
          "Continue through the No Breach ecosystem."
        );

        expect(
          page
        ).toContain(
          'href="/events"'
        );

        expect(
          page
        ).toContain(
          'href="/cr4ckout"'
        );

      }
    );


    it(
      "uses the restrained No Breach palette and responsive reflow",
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

        expect(
          css
        ).toContain(
          "max-width:"
        );

      }
    );

  }
);
