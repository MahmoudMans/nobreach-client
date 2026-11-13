import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";

import {
  trainingPrograms
} from "@/content/training";


// NB_TRAINING_RATINGS_V1

const detailPages = [
  "src/app/training/[slug]/red-team-v40.tsx",
  "src/app/training/[slug]/web-exploitation-v41.tsx",
  "src/app/training/[slug]/ai-security-course-detail.tsx",
  "src/app/training/[slug]/grc-enterprise-course-detail.tsx",
  "src/app/training/[slug]/mcp-security-course-detail.tsx"
];


describe(
  "Training ratings V1",
  () => {

    it(
      "only uses valid participant ratings",
      () => {

        for (
          const program
          of trainingPrograms
        ) {

          if (
            !program.rating
          ) {
            continue;
          }

          expect(
            program.rating.average
          ).toBeGreaterThanOrEqual(
            1
          );

          expect(
            program.rating.average
          ).toBeLessThanOrEqual(
            5
          );

          if (
            program.rating.count !== undefined
          ) {

            expect(
              Number.isInteger(
                program.rating.count
              )
            ).toBe(
              true
            );

            expect(
              program.rating.count
            ).toBeGreaterThan(
              0
            );

          }

        }

      }
    );


    it(
      "shows the rating on every training page and card",
      () => {

        for (
          const file
          of [
            ...detailPages,
            "src/app/training/page.tsx",
            "src/app/page.tsx"
          ]
        ) {

          const source =
            readFileSync(
              file,
              "utf8"
            );

          expect(
            source
          ).toContain(
            "<StarRating"
          );

          expect(
            source
          ).toContain(
            ".rating ? ("
          );

        }

      }
    );


    it(
      "gives screen readers a full sentence",
      () => {

        const component =
          readFileSync(
            "src/components/training/star-rating.tsx",
            "utf8"
          );

        expect(
          component
        ).toContain(
          "Rated ${display} out of 5 by"
        );

        expect(
          component
        ).toContain(
          'aria-hidden="true"'
        );

      }
    );

  }
);
