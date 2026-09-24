import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const page =
  readFileSync(
    "src/app/insights/page.tsx",
    "utf8"
  );


const pageCss =
  readFileSync(
    "src/app/insights/insights-index.module.css",
    "utf8"
  );


const browser =
  readFileSync(
    "src/components/insights/insights-browser.tsx",
    "utf8"
  );


const browserCss =
  readFileSync(
    "src/components/insights/insights-browser.module.css",
    "utf8"
  );


describe(
  "Insights resource index",
  () => {

    it(
      "uses exactly one accessible page title",
      () => {

        expect(
          page.match(
            /<h1(?:\s|>)/g
          )
          ??
          []
        ).toHaveLength(
          1
        );


        expect(
          page
        ).toContain(
          "Security thinking worth publishing."
        );


        expect(
          page
        ).toContain(
          "NOBREACH / RESEARCH"
        );

      }
    );


    it(
      "uses the canonical internal resource flow",
      () => {

        const sections =
          page.match(
            /data-insights-index-section="[^"]+"/g
          )
          ??
          [];


        expect(
          sections
        ).toEqual([
          'data-insights-index-section="intro"',
          'data-insights-index-section="resources"',
          'data-insights-index-section="follow"'
        ]);

      }
    );


    it(
      "preserves the functional InsightsBrowser",
      () => {

        expect(
          page
        ).toContain(
          "InsightsBrowser"
        );


        expect(
          browser
        ).toContain(
          'data-insights-browser-system="resources"'
        );


        expect(
          browser
        ).toContain(
          "styles.resourceSystem"
        );

      }
    );


    it(
      "uses the common NoBreach surface language",
      () => {

        for (
          const token
          of [
            "#07090d",
            "#0b0f16",
            "#101620",
            "#151d29",
            "#a1e2f0",
            "#83b3d7",
            "#7e60b9"
          ]
        ) {

          expect(
            `${pageCss}\n${browserCss}`
          ).toContain(
            token
          );

        }

      }
    );


    it(
      "keeps featured-first editorial research styling",
      () => {

        expect(
          browserCss
        ).toContain(
          "NB_INSIGHTS_RESOURCE_BROWSER_V1"
        );


        expect(
          browserCss
        ).toContain(
          "article:first-of-type"
        );


        expect(
          browserCss
        ).toContain(
          "article:not(:first-of-type)"
        );

      }
    );


    it(
      "uses a compact research-feed continuation",
      () => {

        expect(
          page
        ).toContain(
          "Follow the research."
        );


        expect(
          page
        ).toContain(
          'href="/feed.xml"'
        );

      }
    );


    it(
      "supports focus responsive recomposition and reduced motion",
      () => {

        expect(
          pageCss
        ).toContain(
          ":focus-visible"
        );


        expect(
          browserCss
        ).toContain(
          ":focus-visible"
        );


        expect(
          pageCss
        ).toContain(
          "prefers-reduced-motion"
        );


        expect(
          pageCss
        ).toContain(
          "max-width:\n    640px"
        );

      }
    );

  }
);
