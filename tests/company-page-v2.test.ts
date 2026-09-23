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
  "company V18 three-section architecture",
  () => {

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
      "groups Company and the operating model together",
      () => {

        expect(
          page
        ).toContain(
          'data-company-content-section="company"'
        );


        expect(
          page
        ).toContain(
          "Operating model"
        );


        expect(
          page
        ).toContain(
          "Security services"
        );


        expect(
          page
        ).toContain(
          "Practical education"
        );

      }
    );


    it(
      "groups capabilities and principles in one chapter",
      () => {

        expect(
          page
        ).toContain(
          'data-company-content-section="capabilities"'
        );


        expect(
          page
        ).toContain(
          'data-company-ui="capability-grid"'
        );


        expect(
          page
        ).toContain(
          'data-company-ui="principle-grid"'
        );

      }
    );


    it(
      "groups journey founder and people in one chapter",
      () => {

        expect(
          page
        ).toContain(
          'data-company-content-section="people-journey"'
        );


        expect(
          page
        ).toContain(
          'data-company-ui="timeline-grid"'
        );


        expect(
          page
        ).toContain(
          'data-company-card="founder"'
        );


        expect(
          page
        ).toContain(
          'data-company-ui="people-grid"'
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


        expect(
          page
        ).not.toMatch(
          /data-company-section="hero"[^]*data-company-content-section="hero"/
        );

      }
    );


    it(
      "uses the V18 grouped layout styling",
      () => {

        expect(
          css
        ).toContain(
          "NB_COMPANY_THREE_SECTION_ARCHITECTURE_V18"
        );


        expect(
          css
        ).toContain(
          ".peopleFounderGrid"
        );

      }
    );

  }
);
