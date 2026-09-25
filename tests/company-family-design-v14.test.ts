import {
  existsSync,
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


describe(
  "company family design compatibility",
  () => {

    it(
      "keeps all company family routes",
      () => {

        for (
          const file
          of [
            "src/app/company/page.tsx",
            "src/app/company/founder/page.tsx",
            "src/app/company/team/page.tsx",
            "src/app/company/internships/page.tsx"
          ]
        ) {

          expect(
            existsSync(
              file
            )
          ).toBe(
            true
          );

        }

      }
    );


    it(
      "applies the strict About design only to the top-level company page",
      () => {

        const company =
          readFileSync(
            "src/app/company/page.tsx",
            "utf8"
          );


        expect(
          company
        ).toContain(
          'data-company-about="strict-v20"'
        );

      }
    );

  }
);
