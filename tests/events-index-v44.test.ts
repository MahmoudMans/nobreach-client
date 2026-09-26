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
    "src/app/events/page.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/events/events-index-v44.module.css",
    "utf8"
  );


describe(
  "Events index V44",
  () => {

    it(
      "uses one strict PageIntro",
      () => {

        expect(
          page
        ).toContain(
          'data-events-section="intro"'
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
      "uses canonical status ordering",
      () => {

        const upcoming =
          page.indexOf(
            'key:\n          "upcoming"'
          );


        const ongoing =
          page.indexOf(
            'key:\n          "ongoing"'
          );


        const past =
          page.indexOf(
            'key:\n          "past"'
          );


        expect(
          upcoming
        ).toBeGreaterThanOrEqual(
          0
        );


        expect(
          ongoing
        ).toBeGreaterThan(
          upcoming
        );


        expect(
          past
        ).toBeGreaterThan(
          ongoing
        );

      }
    );


    it(
      "uses an explicit Upcoming empty state",
      () => {

        expect(
          page
        ).toContain(
          "No upcoming event has been announced."
        );


        expect(
          page
        ).toContain(
          'data-events-empty="upcoming"'
        );

      }
    );


    it(
      "renders editorial event rows rather than a generic card wall",
      () => {

        expect(
          page
        ).toContain(
          "styles.eventRow"
        );


        expect(
          page
        ).not.toContain(
          "styles.eventGrid"
        );

      }
    );


    it(
      "uses the strict NoBreach surface and spacing system",
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
