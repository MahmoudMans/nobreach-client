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


// NB_INSIGHTS_V78_FUNCTIONAL_BROWSER_CONTRACT
// Functional compatibility is protected by browser behavior and
// semantic authority rather than the retired resourceSystem CSS class.
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
          'data-insights-index-section="resources"'
        ]);

      }
    );


    it(
      "preserves the functional InsightsBrowser",
      () => {

        expect(
          browser
        ).toContain(
          '"use client"'
        );


        expect(
          browser
        ).toContain(
          'data-insights-browser-system="resources"'
        );


        expect(
          browser
        ).toContain(
          'data-insights-browser-redesign="v76"'
        );


        expect(
          browser
        ).toContain(
          "styles.browserV76"
        );


        expect(
          browser
        ).toContain(
          "initialCategory"
        );


        expect(
          browser
        ).toContain(
          "useState<InsightFilter>"
        );


        expect(
          browser
        ).toContain(
          "useMemo"
        );


        expect(
          browser
        ).toContain(
          "insightCategories"
        );


        expect(
          browser
        ).toContain(
          "Search insights"
        );


        expect(
          browser
        ).toContain(
          "aria-pressed"
        );


        expect(
          browser
        ).toContain(
          "visibleInsights"
        );


        expect(
          browser
        ).toContain(
          "`/insights/${insight.slug}`"
        );


        expect(
          browser
        ).toContain(
          "data-insights-empty"
        );


        expect(
          browser
        ).toContain(
          "Clear filters"
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
      "does not append a redundant research-feed continuation",
      () => {

        expect(
          page
        ).toContain(
          'data-insights-index-section="resources"'
        );


        expect(
          page
        ).toContain(
          "<InsightsBrowser"
        );


        expect(
          page
        ).not.toContain(
          'data-insights-index-section="follow"'
        );


        expect(
          page
        ).not.toContain(
          "Follow the research."
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
