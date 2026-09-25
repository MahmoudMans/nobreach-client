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
    "src/app/activities/[slug]/training-hub-established-v46.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/activities/[slug]/training-hub-established-v46.module.css",
    "utf8"
  );


describe(
  "Training Hub established V46 activity detail",
  () => {

    it(
      "uses an exclusive route gate",
      () => {

        expect(
          layout
        ).toContain(
          '"training-hub-established"'
        );


        expect(
          layout
        ).toContain(
          "<TrainingHubEstablishedV46 />"
        );


        expect(
          layout
        ).toContain(
          "return children"
        );

      }
    );


    it(
      "uses canonical activity content",
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
            "activity.relatedEventSlug",
            "activity.relatedTrainingSlug"
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
      "implements one strict activity-detail flow",
      () => {

        for (
          const token
          of [
            'data-activity-detail-section="intro"',
            'data-activity-detail-section="facts"',
            'data-activity-detail-section="overview"',
            'data-activity-detail-section="context"',
            'data-activity-detail-section="final-cta"'
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
      "uses strict NoBreach visual tokens",
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
