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


// NB_CR4CKOUT_2_V58_LEGACY_CSS_CONTRACT
// Legacy route assertions remain active.
// Only retired V48 palette/spacing tokens were migrated to V56 authorities.

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
            "#05080b",
            "#080d12",
            "#0b1219",
            "#1b2731",
            "#8dd9ea",
            ".contentSection",
            ".participationSection",
            ".relatedSection",
            ".narrativeGrid",
            ".archiveNavigation",
            ":focus-visible",
            "@media (max-width: 620px)",
            "prefers-reduced-motion",
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
