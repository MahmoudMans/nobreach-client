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
  "company editorial narrative V15",
  () => {

    it(
      "keeps capabilities as full-width rows",
      () => {

        expect(
          page
        ).toContain(
          'data-company-ui="capability-grid"'
        );


        expect(
          css
        ).toContain(
          ".capabilityRow"
        );

      }
    );


    it(
      "keeps principles as manifesto rows",
      () => {

        expect(
          page
        ).toContain(
          'data-company-ui="principle-grid"'
        );


        expect(
          css
        ).toContain(
          ".principleRow"
        );

      }
    );


    it(
      "keeps the alternating chronology",
      () => {

        expect(
          css
        ).toContain(
          ".timeline::before"
        );


        expect(
          css
        ).toContain(
          ".timelineItem:nth-child("
        );

      }
    );


    it(
      "keeps people as directory rows",
      () => {

        expect(
          page
        ).toContain(
          'data-company-ui="people-grid"'
        );


        expect(
          css
        ).toContain(
          ".peopleRow"
        );

      }
    );


    it(
      "removes redundant standalone narrative sections",
      () => {

        expect(
          page
        ).not.toContain(
          'data-company-section="story"'
        );


        expect(
          page
        ).not.toContain(
          'data-company-section="ecosystem"'
        );

      }
    );

  }
);
