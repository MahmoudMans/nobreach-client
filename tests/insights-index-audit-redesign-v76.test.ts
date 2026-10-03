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

const content =
  readFileSync(
    "src/content/insights.ts",
    "utf8"
  );


describe(
  "Insights audit redesign V76",
  () => {

    it(
      "preserves the published page identity",
      () => {

        expect(
          page
        ).toContain(
          'data-insights-index="resource-system"'
        );

        expect(
          page
        ).toContain(
          'data-insights-index-redesign="v76"'
        );

        expect(
          page
        ).toContain(
          "Security thinking worth publishing."
        );

        expect(
          page
        ).not.toContain(
          'data-insights-index-section="follow"'
        );

      }
    );


    it(
      "adds one visible research-library chapter",
      () => {

        expect(
          page
        ).toContain(
          "01"
        );

        expect(
          page
        ).toContain(
          "Research library"
        );

        expect(
          page
        ).toContain(
          "Published technical research."
        );

        expect(
          page
        ).toContain(
          "Browse No Breach writing by security topic"
        );

      }
    );


    it(
      "preserves search and category interaction",
      () => {

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
          "initialCategory"
        );

        expect(
          browser
        ).toContain(
          "insightCategories"
        );

      }
    );


    it(
      "uses canonical article metadata in the featured composition",
      () => {

        for (
          const marker
          of [
            "featured.category",
            "featured.publishedAt",
            "featured.readingTime",
            "featured.title",
            "featured.summary",
            "featured.author"
          ]
        ) {

          expect(
            browser
          ).toContain(
            marker
          );

        }

      }
    );


    it(
      "provides a truthful zero-result state",
      () => {

        expect(
          browser
        ).toContain(
          "NO MATCHING RESEARCH"
        );

        expect(
          browser
        ).toContain(
          "No published insight matches this search and category."
        );

        expect(
          browser
        ).toContain(
          "Clear filters"
        );

      }
    );


    it(
      "keeps all canonical research categories",
      () => {

        for (
          const category
          of [
            "Web Security",
            "API Security",
            "Offensive Security",
            "AI Security",
            "Research",
            "Community"
          ]
        ) {

          expect(
            content
          ).toContain(
            `"${category}"`
          );

        }

      }
    );


    it(
      "adds the V76 editorial visual layer",
      () => {

        expect(
          pageCss
        ).toContain(
          "NB_INSIGHTS_AUDIT_REDESIGN_V76"
        );

        expect(
          browserCss
        ).toContain(
          "NB_INSIGHTS_BROWSER_REDESIGN_V76"
        );

        for (
          const marker
          of [
            ".featuredV76",
            ".featuredIdentityV76",
            ".featuredBodyV76",
            ".gridV76",
            ".emptyV76",
            "@media (max-width: 720px)",
            "prefers-reduced-motion"
          ]
        ) {

          expect(
            browserCss
          ).toContain(
            marker
          );

        }

      }
    );

  }
);
