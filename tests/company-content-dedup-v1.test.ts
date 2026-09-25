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
  "company content continuity",
  () => {

    it(
      "has no duplicated page navigation",
      () => {

        expect(
          page
        ).not.toContain(
          "<nav"
        );


        expect(
          page
        ).not.toContain(
          "Company sections"
        );

      }
    );


    it(
      "contains no placeholder or empty-card language",
      () => {

        expect(
          page
        ).not.toMatch(
          /placeholder/i
        );


        expect(
          page
        ).not.toMatch(
          /empty card/i
        );

      }
    );


    it(
      "uses one final conversion section",
      () => {

        expect(
          (
            page.match(
              /data-company-section="cta"/g
            )
            ??
            []
          ).length
        ).toBe(
          1
        );

      }
    );

  }
);
