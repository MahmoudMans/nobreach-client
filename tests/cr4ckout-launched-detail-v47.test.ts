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
    "src/app/activities/[slug]/cr4ckout-launched-v47.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/activities/[slug]/cr4ckout-launched-v47.module.css",
    "utf8"
  );


describe(
  "CR4CKOUT launched activity V47",
  () => {

    it(
      "uses a route-isolated V47 renderer",
      () => {

        expect(
          layout
        ).toContain(
          '"cr4ckout-launched"'
        );


        expect(
          layout
        ).toContain(
          "<Cr4ckoutLaunchedV47 />"
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
      "uses the restrained CR4CKOUT identity",
      () => {

        for (
          const token
          of [
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
      "uses one H1",
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
      "uses strict NoBreach colors and spacing",
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
