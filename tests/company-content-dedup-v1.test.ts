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
      "removes the redundant mindset card but preserves the three-step approach",
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
            "Share"
          ]
        ) {

          /*
           * V14 stores these as data and renders semantic H3 headings.
           * The deduplication contract is about the information and single
           * approach structure, not a historical <strong> implementation.
           */
          expect(
            page
          ).toMatch(
            new RegExp(
              `title:\\s*"${step}"`
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
      "keeps the unique company information sections",
      () => {

        const required = [
          'data-company-ui="facts"',
          'data-company-ui="capability-grid"',
          'data-company-ui="principle-grid"',
          'data-company-ui="ecosystem-grid"',
          'data-company-ui="timeline-grid"',
          'data-company-ui="people-grid"'
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
      "uses the V14 simplified editorial introduction without restoring a duplicate card",
      () => {

        expect(
          css
        ).toContain(
          "NB_COMPANY_FAMILY_V14"
        );


        expect(
          page
        ).toContain(
          "styles.companyStatement"
        );


        expect(
          page
        ).toContain(
          "styles.statementLead"
        );


        expect(
          css
        ).toContain(
          ".companyStatement {"
        );


        expect(
          css
        ).toContain(
          ".statementLead {"
        );


        expect(
          page
        ).not.toContain(
          "styles.mindsetCard"
        );

      }
    );

  }
);
