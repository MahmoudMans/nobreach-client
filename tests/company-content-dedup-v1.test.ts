import {
  readFileSync,
} from "node:fs";

import {
  describe,
  expect,
  it,
} from "vitest";


const page =
  readFileSync(
    "src/app/company/page.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/company/company.module.css",
    "utf8"
  );


describe(
  "company content deduplication",
  () => {

    it(
      "removes repeated hero footer content",
      () => {

        expect(
          page
        ).not.toContain(
          "styles.profileFooter"
        );

      }
    );


    it(
      "removes the redundant mindset card but keeps the approach",
      () => {

        expect(
          page
        ).not.toContain(
          "styles.mindsetCard"
        );


        expect(
          page
        ).toContain(
          'data-company-ui="approach-flow"'
        );


        for (
          const step
          of [
            "Test",
            "Learn",
            "Share",
          ]
        ) {

          expect(
            page
          ).toMatch(
            new RegExp(
              `<strong>\\s*${step}\\s*</strong>`
            )
          );

        }

      }
    );


    it(
      "removes repeated founder focus tags",
      () => {

        expect(
          page
        ).not.toContain(
          "styles.focusTags"
        );


        expect(
          page
        ).toContain(
          "Nouha Ben Brahim"
        );

      }
    );


    it(
      "keeps the unique company sections",
      () => {

        const required = [
          'data-company-ui="facts"',
          'data-company-ui="capability-grid"',
          'data-company-ui="principle-grid"',
          'data-company-ui="ecosystem-grid"',
          'data-company-ui="timeline-grid"',
          'data-company-ui="people-grid"',
        ];


        for (
          const marker
          of required
        ) {

          expect(
            page
          ).toContain(
            marker
          );

        }

      }
    );


    it(
      "uses the simplified company introduction layout",
      () => {

        expect(
          css
        ).toContain(
          "NB_COMPANY_CONTENT_DEDUP_V1"
        );


        expect(
          css
        ).toContain(
          "max-width:\n    900px;"
        );

      }
    );

  }
);
