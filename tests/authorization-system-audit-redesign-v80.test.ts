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
    "src/app/insights/[slug]/authorization-system-v51.tsx",
    "utf8"
  );

const css =
  readFileSync(
    "src/app/insights/[slug]/authorization-system-v51.module.css",
    "utf8"
  );

const content =
  readFileSync(
    "src/content/insights.ts",
    "utf8"
  );


describe(
  "Authorization Insight editorial refinement V80",
  () => {

    it(
      "preserves V51 authority while adding V80",
      () => {

        expect(
          component
        ).toContain(
          'data-authorization-insight-design="v51"'
        );

        expect(
          component
        ).toContain(
          'data-authorization-insight-redesign="v80"'
        );

        expect(
          component
        ).toContain(
          'data-insight-slug="authorization-is-a-system-not-a-checkbox"'
        );

      }
    );


    it(
      "preserves the three-column reading-system semantics",
      () => {

        for (
          const marker
          of [
            'data-insight-section="intro"',
            'data-insight-section="reading"',
            'data-article-reading-grid="true"',
            'aria-label="Article contents"',
            'data-article-research="true"',
            'aria-label="Article information"'
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
      "preserves every canonical authorization chapter",
      () => {

        for (
          const heading
          of [
            "Authorization begins with a model",
            "A valid request can still be unauthorized",
            "Think in authorization matrices",
            "Business context determines impact"
          ]
        ) {

          expect(
            content
          ).toContain(
            `"${heading}"`
          );

        }

      }
    );


    it(
      "keeps related and final CTA runtime markers while joining their visual purpose",
      () => {

        expect(
          component
        ).toContain(
          'data-insight-section="related"'
        );

        expect(
          component
        ).toContain(
          'data-authorization-continuation="research"'
        );

        expect(
          component
        ).toContain(
          'data-insight-section="final-cta"'
        );

        expect(
          component
        ).toContain(
          'data-authorization-continuation="actions"'
        );

      }
    );


    it(
      "adds a destination-aware related-training treatment",
      () => {

        expect(
          component
        ).toContain(
          "titleFromSlug"
        );

        expect(
          component
        ).toContain(
          "Related training"
        );

        expect(
          component
        ).toContain(
          "contextDestinationV80"
        );

      }
    );


    it(
      "adds compact editorial V80 styling",
      () => {

        for (
          const marker
          of [
            "NB_AUTHORIZATION_INSIGHT_REDESIGN_V80",
            ".readingGrid",
            ".contentsColumn",
            ".infoColumn",
            ".articleSection header h2",
            ".relatedSection",
            ".finalCta",
            ".finalLayout",
            "@media (max-width: 760px)",
            "prefers-reduced-motion"
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
