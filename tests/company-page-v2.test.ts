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
  "Company V19 editorial system",
  () => {

    it(
      "activates the V19 company design",
      () => {

        expect(
          page
        ).toContain(
          'data-company-design-system="v19"'
        );


        expect(
          css
        ).toContain(
          "NB_COMPANY_EDITORIAL_SYSTEM_V19"
        );

      }
    );


    it(
      "contains exactly three real content sections",
      () => {

        expect(
          (
            page.match(
              /data-company-content-section=/g
            )
            ??
            []
          ).length
        ).toBe(
          3
        );

      }
    );


    it(
      "keeps Hero and CTA outside the section budget",
      () => {

        expect(
          page
        ).toContain(
          'data-company-section="hero"'
        );


        expect(
          page
        ).toContain(
          'data-company-section="cta"'
        );

      }
    );


    it(
      "uses the editorial capability and people systems",
      () => {

        for (
          const token
          of [
            'data-company-ui="signal-system"',
            'data-company-ui="operating-model"',
            'data-company-ui="capability-grid"',
            'data-company-ui="principle-grid"',
            'data-company-ui="timeline-grid"',
            'data-company-ui="people-grid"'
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
      "does not use the rejected hero profile card",
      () => {

        expect(
          page
        ).not.toContain(
          'data-company-ui="profile-card"'
        );


        expect(
          page
        ).not.toContain(
          "technicalPanel"
        );

      }
    );


    it(
      "keeps the verified company facts and founder portrait",
      () => {

        for (
          const value
          of [
            "2023",
            "Tunis, Tunisia",
            "Offensive Security",
            "Services · Education · Community",
            "Nouha Ben Brahim",
            "/people/ceo.png"
          ]
        ) {

          expect(
            page
          ).toContain(
            value
          );

        }

      }
    );

  }
);
