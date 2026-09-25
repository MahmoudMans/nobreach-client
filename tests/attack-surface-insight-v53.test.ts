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
    "src/app/insights/[slug]/attack-surface-insight-v53.tsx",
    "utf8"
  );


const css =
  fs.readFileSync(
    "src/app/insights/[slug]/attack-surface-insight-v53.module.css",
    "utf8"
  );


describe(
  "Attack Surface recon dossier V53",
  () => {

    it(
      "uses V53 instead of V52",
      () => {

        expect(
          layout
        ).toContain(
          "AttackSurfaceInsightV53"
        );


        expect(
          layout
        ).not.toContain(
          "AttackSurfaceInsightV52"
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
      "defines the reconnaissance dossier identity",
      () => {

        expect(
          component
        ).toContain(
          'data-attack-surface-insight-design="v53"'
        );


        expect(
          component
        ).toContain(
          "Reconnaissance dossier"
        );


        expect(
          component
        ).toContain(
          "Research dispatches"
        );

      }
    );


    it(
      "keeps shared article architecture",
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
      "uses semantic editorial markers",
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
      "renders one primary heading",
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
      "uses the strict NoBreach dossier palette",
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
          '[data-attack-surface-insight-design="v53"]'
        );

      }
    );

  }
);
