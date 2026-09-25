import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const layout =
  readFileSync(
    "src/app/activities/[slug]/layout.tsx",
    "utf8"
  );


const component =
  readFileSync(
    "src/app/activities/[slug]/cr4ckout-2-v48.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/activities/[slug]/cr4ckout-2-v48.module.css",
    "utf8"
  );


describe(
  "CR4CKOUT 2 activity V48",
  () => {

    it(
      "has an exclusive activity route gate",
      () => {

        expect(
          layout
        ).toContain(
          '"cr4ckout-2"'
        );


        expect(
          layout
        ).toContain(
          "<Cr4ckout2V48 />"
        );


        expect(
          layout
        ).toContain(
          "return children"
        );

      }
    );


    it(
      "uses canonical activity data",
      () => {

        expect(
          component
        ).toContain(
          "@/content/activities"
        );


        for (
          const token
          of [
            "activity.title",
            "activity.year",
            "activity.category",
            "activity.summary",
            "activity.description",
            "activity.location",
            "activity.highlights",
            "activity.sections",
            "activity.relatedEventSlug"
          ]
        ) {

          expect(
            component
          ).toContain(
            token
          );

        }

      }
    );


    it(
      "uses the CR4CKOUT edition signal",
      () => {

        for (
          const token
          of [
            "EDITION / 02",
            "HACK",
            "LEARN",
            "BREAK",
            "BUILD"
          ]
        ) {

          expect(
            component
          ).toContain(
            token
          );

        }

      }
    );


    it(
      "uses exactly one H1",
      () => {

        expect(
          component.match(
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
      "uses NoBreach visual tokens",
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
