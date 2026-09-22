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
  "company narrative v9",
  () => {

    it(
      "activates V9 and retires V8",
      () => {

        expect(
          page
        ).toContain(
          'data-company-design="v9"'
        );


        expect(
          page
        ).not.toContain(
          'data-company-design="v8"'
        );


        expect(
          css
        ).toContain(
          "NB_COMPANY_NARRATIVE_V9"
        );


        expect(
          css
        ).not.toContain(
          "NB_COMPANY_EDITORIAL_V8"
        );

      }
    );


    it(
      "turns capabilities into full-width rows",
      () => {

        expect(
          css
        ).toContain(
          ".capabilityGrid"
        );


        expect(
          css
        ).toContain(
          "display:\n    block;"
        );


        expect(
          css
        ).toContain(
          "grid-template-columns:\n    110px"
        );

      }
    );


    it(
      "turns principles into manifesto rows",
      () => {

        expect(
          css
        ).toContain(
          ".principleGrid"
        );


        expect(
          css
        ).toContain(
          ".principleVisual {\n  display:"
        );

      }
    );


    it(
      "uses an alternating chronology",
      () => {

        expect(
          css
        ).toContain(
          ".timelineGrid::before"
        );


        expect(
          css
        ).toContain(
          ".timelineCard:nth-child(odd)"
        );


        expect(
          css
        ).toContain(
          ".timelineCard:nth-child(even)"
        );

      }
    );


    it(
      "turns people into directory rows",
      () => {

        expect(
          css
        ).toContain(
          ".peopleGrid {\n  display:\n    block;"
        );


        expect(
          css
        ).toContain(
          "grid-template-columns:\n    130px"
        );

      }
    );

  }
);
