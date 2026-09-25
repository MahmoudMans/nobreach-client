import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const company =
  readFileSync(
    "src/app/company/page.tsx",
    "utf8"
  );


describe(
  "company information architecture",
  () => {

    it(
      "expands the main About page to the canonical eight-section flow",
      () => {

        expect(
          (
            company.match(
              /data-company-section=/g
            )
            ??
            []
          ).length
        ).toBe(
          8
        );

      }
    );


    it(
      "does not apply the old three-section budget to the main About page",
      () => {

        expect(
          company
        ).toContain(
          'data-company-section="mission-vision"'
        );


        expect(
          company
        ).toContain(
          'data-company-section="team"'
        );

      }
    );

  }
);
