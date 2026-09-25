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
  "Activities index V45",
  () => {

    it(
      "uses exactly one activity archive PageIntro",
      () => {

        expect(
          page
        ).toContain(
          'data-activities-section="intro"'
        );


        expect(
          page.match(
            /<h1>/g
          )
          ??
          []
        ).toHaveLength(
          1
        );

      }
    );


    it(
      "provides the canonical activity filters",
      () => {

        for (
          const category
          of [
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
            `key:\n          "${category}"`
          );

        }

      }
    );


    it(
      "preserves URL-backed activity filtering",
      () => {

        expect(
          page
        ).toContain(
          "/activities?type=${option.key}"
        );


        expect(
          page
        ).toContain(
          "searchParams"
        );

      }
    );


    it(
      "uses editorial rows rather than an activity card wall",
      () => {

        expect(
          page
        ).toContain(
          "styles.activityRow"
        );


        expect(
          page
        ).not.toContain(
          "styles.activityGrid"
        );

      }
    );


    it(
      "preserves verified LinkedIn activity",
      () => {

        expect(
          page
        ).toContain(
          "@/components/activities/linkedin-activity-section"
        );


        expect(
          page
        ).toContain(
          'data-activities-section="linkedin"'
        );

      }
    );


    it(
      "uses the strict NoBreach palette and rhythm",
      () => {

        for (
          const token
          of [
            "#07090d",
            "#0b0f16",
            "#101620",
            "#151d29",
            "#a1e2f0",
            "96px",
            "80px",
            "64px"
          ]
        ) {

          expect(
            css
          ).toContain(
            token
          );

        }

      }
    );

  }
);
