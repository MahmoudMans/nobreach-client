import fs from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const layout =
  fs.readFileSync(
    "src/app/insights/[slug]/layout.tsx",
    "utf8"
  );


const component =
  fs.readFileSync(
    "src/app/insights/[slug]/manual-reasoning-insight-v55.tsx",
    "utf8"
  );


const css =
  fs.readFileSync(
    "src/app/insights/[slug]/manual-reasoning-insight-v55.module.css",
    "utf8"
  );


describe(
  "Manual Reasoning testing notebook V55",
  () => {

    it(
      "uses a dedicated manual reasoning route",
      () => {

        expect(
          layout
        ).toContain(
          "ManualReasoningInsightV55"
        );


        expect(
          layout
        ).toContain(
          "manual-reasoning-in-web-security-testing"
        );

      }
    );


    it(
      "uses canonical Insight fields",
      () => {

        expect(
          component
        ).toContain(
          "value.heading"
        );


        expect(
          component
        ).toContain(
          "value.paragraphs"
        );


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
      "uses the manual testing notebook identity",
      () => {

        expect(
          component
        ).toContain(
          'data-manual-reasoning-insight-design="v55"'
        );


        expect(
          component
        ).toContain(
          'data-reasoning-loop="v55"'
        );


        expect(
          component
        ).toContain(
          "Notebook index"
        );

      }
    );


    it(
      "retains shared editorial architecture",
      () => {

        expect(
          component
        ).toContain(
          "sharedArticleStyles.layout"
        );


        expect(
          component
        ).toContain(
          "sharedArticleStyles.toc"
        );


        expect(
          component
        ).toContain(
          "sharedArticleStyles.content"
        );


        expect(
          component
        ).toContain(
          "sharedArticleStyles.metaSide"
        );

      }
    );


    it(
      "uses semantic reading regions",
      () => {

        expect(
          component
        ).toContain(
          'data-article-reading-grid="true"'
        );


        expect(
          component
        ).toContain(
          'data-article-research="true"'
        );


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

      }
    );


    it(
      "uses exactly one H1",
      () => {

        expect(
          component.match(
            /<h1>/g
          )?.length
        ).toBe(
          1
        );

      }
    );


    it(
      "uses the strict NoBreach visual system",
      () => {

        expect(
          css
        ).toContain(
          "#07090d"
        );


        expect(
          css
        ).toContain(
          "#a1e2f0"
        );


        expect(
          css
        ).toContain(
          '[data-manual-reasoning-insight-design="v55"]'
        );

      }
    );

  }
);
