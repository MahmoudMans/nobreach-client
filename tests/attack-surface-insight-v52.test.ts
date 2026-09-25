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
    "src/app/insights/[slug]/attack-surface-insight-v52.tsx",
    "utf8"
  );


const css =
  fs.readFileSync(
    "src/app/insights/[slug]/attack-surface-insight-v52.module.css",
    "utf8"
  );


describe(
  "Attack Surface research article V52",
  () => {

    it(
      "uses the dedicated attack surface route",
      () => {

        expect(
          layout
        ).toContain(
          "AttackSurfaceInsightV52"
        );


        expect(
          layout
        ).toContain(
          '"attack-surface-mapping-before-exploitation"'
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
          "value.bullets"
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
      "retains shared editorial structure",
      () => {

        expect(
          component
        ).toContain(
          'sharedArticleStyles.layout'
        );


        expect(
          component
        ).toContain(
          'sharedArticleStyles.toc'
        );


        expect(
          component
        ).toContain(
          'sharedArticleStyles.content'
        );


        expect(
          component
        ).toContain(
          'sharedArticleStyles.metaSide'
        );


        expect(
          component
        ).toContain(
          'sharedArticleStyles.section'
        );

      }
    );


    it(
      "adds semantic V52 article markers",
      () => {

        expect(
          component
        ).toContain(
          'data-attack-surface-insight-design="v52"'
        );


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
          "#0b0f16"
        );


        expect(
          css
        ).toContain(
          "#101620"
        );


        expect(
          css
        ).toContain(
          "#a1e2f0"
        );


        expect(
          css
        ).toContain(
          "96px"
        );


        expect(
          css
        ).toContain(
          "80px"
        );


        expect(
          css
        ).toContain(
          "64px"
        );

      }
    );


    it(
      "does not create another public shell",
      () => {

        expect(
          component
        ).not.toContain(
          "SiteHeader"
        );


        expect(
          component
        ).not.toContain(
          "SiteFooter"
        );

      }
    );

  }
);
