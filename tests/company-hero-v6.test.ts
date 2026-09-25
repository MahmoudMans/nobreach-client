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


describe(
  "company intro compatibility",
  () => {

    it(
      "uses PageIntro instead of another homepage hero",
      () => {

        expect(
          page
        ).toContain(
          'data-company-section="intro"'
        );


        expect(
          page
        ).not.toContain(
          "data-company-hero="
        );


        expect(
          page
        ).not.toContain(
          "pageNav"
        );

      }
    );


    it(
      "keeps established positioning",
      () => {

        expect(
          page
        ).toContain(
          "Offensive security"
        );


        expect(
          page
        ).toContain(
          "beyond the assessment."
        );

      }
    );

  }
);
