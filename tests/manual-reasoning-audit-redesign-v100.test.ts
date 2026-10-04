import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const component =
  readFileSync(
    "src/app/insights/[slug]/manual-reasoning-insight-v55.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/insights/[slug]/manual-reasoning-insight-v55.module.css",
    "utf8"
  );


describe(
  "Manual Reasoning V100 notebook refinement",
  () => {

    it(
      "preserves V55 and adds V100 authority",
      () => {

        expect(
          component
        ).toContain(
          'data-manual-reasoning-insight-design="v55"'
        );


        expect(
          component
        ).toContain(
          'data-manual-reasoning-insight-redesign="v100"'
        );

      }
    );


    it(
      "exposes the manual testing loop semantically",
      () => {

        for (
          const marker
          of [
            'data-reasoning-loop-redesign="v100"',
            'role="list"',
            'role="listitem"',
            'aria-label="Manual testing loop"'
          ]
        ) {

          expect(
            component
          ).toContain(
            marker
          );

        }


        expect(
          component
        ).not.toContain(
          `data-reasoning-loop="v55"
            aria-hidden="true"`
        );

      }
    );


    it(
      "preserves all five manual reasoning stages",
      () => {

        for (
          const stage
          of [
            "OBSERVE",
            "HYPOTHESIZE",
            "PROBE",
            "INTERPRET",
            "ITERATE"
          ]
        ) {

          expect(
            component
          ).toContain(
            `"${stage}"`
          );

        }

      }
    );


    it(
      "preserves canonical reading-system rendering",
      () => {

        for (
          const marker
          of [
            'data-article-reading-grid="true"',
            'data-article-research="true"',
            'aria-label="Article contents"',
            'aria-label="Article information"',
            "article.sections.map"
          ]
        ) {

          expect(
            component
          ).toContain(
            marker
          );

        }

      }
    );


    it(
      "creates one related-research continuation chapter",
      () => {

        for (
          const marker
          of [
            'data-manual-reasoning-related="v100"',
            'data-manual-reasoning-continuation="research"',
            'data-manual-reasoning-continuation="actions"',
            'data-manual-reasoning-continuation-group="v100"'
          ]
        ) {

          expect(
            component
          ).toContain(
            marker
          );

        }

      }
    );


    it(
      "keeps one All insights action",
      () => {

        const count =
          component
            .split(
              "All insights"
            )
            .length
          -
          1;


        expect(
          count
        ).toBe(
          1
        );


        expect(
          component
        ).not.toContain(
          "More research"
        );

      }
    );


    it(
      "adds the V100 route-local visual refinement",
      () => {

        for (
          const marker
          of [
            "NB_MANUAL_REASONING_REDESIGN_V100",
            ".intro",
            ".reasoning",
            ".indexColumn",
            ".contextColumn",
            ".relatedRows",
            ".continuationGroupV100",
            ".finalCta"
          ]
        ) {

          expect(
            css
          ).toContain(
            marker
          );

        }

      }
    );

  }
);
