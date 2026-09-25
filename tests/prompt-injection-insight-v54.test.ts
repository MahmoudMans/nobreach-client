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
    "src/app/insights/[slug]/prompt-injection-insight-v54.tsx",
    "utf8"
  );


const css =
  fs.readFileSync(
    "src/app/insights/[slug]/prompt-injection-insight-v54.module.css",
    "utf8"
  );


describe(
  "Prompt Injection action-boundary Insight V54",
  () => {

    it(
      "uses a dedicated prompt injection route",
      () => {

        expect(
          layout
        ).toContain(
          "PromptInjectionInsightV54"
        );


        expect(
          layout
        ).toContain(
          "prompt-injection-matters-when-ai-can-act"
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
      "uses the V54 AI Action Boundary identity",
      () => {

        expect(
          component
        ).toContain(
          'data-prompt-injection-insight-design="v54"'
        );


        expect(
          component
        ).toContain(
          'data-ai-action-boundary="v54"'
        );

      }
    );


    it(
      "retains the shared article structure",
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
      "renders exactly one H1",
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
      "uses the strict NoBreach visual language",
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
          '[data-prompt-injection-insight-design="v54"]'
        );

      }
    );

  }
);
