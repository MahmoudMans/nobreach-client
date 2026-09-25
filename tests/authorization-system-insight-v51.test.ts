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
    "src/app/insights/[slug]/layout.tsx",
    "utf8"
  );


const component =
  readFileSync(
    "src/app/insights/[slug]/authorization-system-v51.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/insights/[slug]/authorization-system-v51.module.css",
    "utf8"
  );


describe(
  "Authorization research article V51",
  () => {

    it(
      "uses the dedicated authorization route",
      () => {

        expect(
          layout
        ).toContain(
          '"authorization-is-a-system-not-a-checkbox"'
        );


        expect(
          layout
        ).toContain(
          "<AuthorizationSystemInsightV51 />"
        );


        expect(
          layout.match(
            /data-insight-article/g
          )
          ??
          []
        ).toHaveLength(
          2
        );

      }
    );


    it(
      "retains the generic Insight child renderer",
      () => {

        expect(
          layout
        ).toMatch(
          /\{\s*children\s*\}/
        );

      }
    );


    it(
      "preserves the editorial article semantics",
      () => {

        expect(
          component
        ).toContain(
          'aria-label="Article contents"'
        );


        expect(
          component
        ).toContain(
          'aria-label="Article information"'
        );


        expect(
          component
        ).toContain(
          'data-article-research="true"'
        );


        expect(
          component
        ).toContain(
          'data-article-section="true"'
        );

      }
    );


    it(
      "supports the canonical plural relation schema",
      () => {

        expect(
          component
        ).toContain(
          "value.relatedServiceSlugs"
        );


        expect(
          component
        ).toContain(
          "value.relatedTrainingSlugs"
        );

      }
    );


    it(
      "keeps API Security contextual navigation",
      () => {

        expect(
          component
        ).toContain(
          'href="/services/api-security"'
        );


        expect(
          component
        ).toContain(
          "API Security"
        );

      }
    );


    it(
      "has exactly one H1",
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
      "uses the strict NoBreach editorial system",
      () => {

        for (
          const token
          of [
            "#07090d",
            "#0b0f16",
            "#101620",
            "#151d29",
            "#a1e2f0",
            "800px",
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
