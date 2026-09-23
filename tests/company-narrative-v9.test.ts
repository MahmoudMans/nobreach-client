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
  "company editorial narrative V14",
  () => {

    it(
      "keeps full-width capability rows",
      () => {

        expect(
          page
        ).toContain(
          'data-company-ui="capability-grid"'
        );

        expect(
          css
        ).toContain(
          ".capabilityRows"
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
          css
        ).toContain(
          ".principleRows"
        );

        expect(
          css
        ).toContain(
          ".principleRow"
        );

      }
    );


    it(
      "keeps an alternating desktop timeline",
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
          css
        ).toContain(
          ".peopleRows"
        );

        expect(
          css
        ).toContain(
          ".peopleRow"
        );

      }
    );


    it(
      "does not use a repeated card grid for every Company section",
      () => {

        expect(
          page
        ).toContain(
          "styles.companyStatement"
        );

        expect(
          page
        ).toContain(
          "styles.approach"
        );

        expect(
          page
        ).toContain(
          "styles.timeline"
        );

      }
    );

  }
);
