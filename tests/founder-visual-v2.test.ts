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
    "src/app/company/founder/page.tsx",
    "utf8"
  );

const css =
  readFileSync(
    "src/app/company/founder/founder.module.css",
    "utf8"
  );


describe(
  "founder visual compatibility after audit v21",
  () => {

    it(
      "preserves the canonical founder section contracts",
      () => {

        for (
          const token
          of
          [
            'data-founder-section="hero"',
            'data-founder-section="overview"',
            'data-founder-section="journey"',
            'data-founder-section="expertise"',
            'data-founder-section="education"',
            'data-founder-section="public-work"',
            'data-founder-section="cta"'
          ]
        ) {

          expect(
            page
          ).toContain(
            token
          );

        }

      }
    );


    it(
      "preserves exactly three real content chapters",
      () => {

        expect(
          page.match(
            /data-company-content-section=/g
          )
          ??
          []
        ).toHaveLength(
          3
        );

      }
    );


    it(
      "preserves the founder identity without unsupported ownership claims",
      () => {

        expect(
          page
        ).toContain(
          "Nouha"
        );

        expect(
          page
        ).toContain(
          "Ben Brahim"
        );

        expect(
          page
        ).toContain(
          "Founder of No Breach"
        );

        expect(
          page
        ).not.toMatch(
          /\bowner\b/i
        );

        expect(
          page
        ).not.toMatch(
          /\bCEO\b/
        );

      }
    );


    it(
      "preserves portrait journey expertise method public work and CTA structures",
      () => {

        for (
          const token
          of
          [
            'data-founder-ui="portrait-editorial"',
            'data-founder-ui="journey"',
            'data-founder-ui="expertise-index"',
            'data-founder-ui="method"',
            'data-founder-ui="engagement-evidence"',
            'data-founder-card="public"'
          ]
        ) {

          expect(
            page
          ).toContain(
            token
          );

        }

      }
    );


    it(
      "applies the audit design layer exactly once",
      () => {

        expect(
          css.match(
            /NB_FOUNDER_AUDIT_V21/g
          )
          ??
          []
        ).toHaveLength(
          1
        );

        for (
          const selector
          of
          [
            ".heroGrid",
            ".heroFacts",
            ".trajectoryLayout",
            ".journeyRow",
            ".expertiseRow",
            ".methodFlow",
            ".engagements",
            ".publicDirectory",
            ".ctaLayout"
          ]
        ) {

          expect(
            css
          ).toContain(
            selector
          );

        }

      }
    );

  }
);
