import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const pages = [
  {
    route:
      "/company",

    file:
      "src/app/company/page.tsx",

    expected:
      3
  },
  {
    route:
      "/company/founder",

    file:
      "src/app/company/founder/page.tsx",

    expected:
      3
  },
  {
    route:
      "/company/team",

    file:
      "src/app/company/team/page.tsx",

    expected:
      1
  },
  {
    route:
      "/company/internships",

    file:
      "src/app/company/internships/page.tsx",

    expected:
      3
  }
];


describe(
  "Company-family V18 section budget",
  () => {

    for (
      const page
      of pages
    ) {

      it(
        `${page.route} has no more than three real content sections`,
        () => {

          const source =
            readFileSync(
              page.file,
              "utf8"
            );


          const count =
            (
              source.match(
                /data-company-content-section=/g
              )
              ??
              []
            ).length;


          expect(
            count
          ).toBe(
            page.expected
          );


          expect(
            count
          ).toBeLessThanOrEqual(
            3
          );

        }
      );

    }


    it(
      "the final CTA does not consume the content-section budget",
      () => {

        for (
          const page
          of pages
        ) {

          const source =
            readFileSync(
              page.file,
              "utf8"
            );


          expect(
            source
          ).not.toMatch(
            /finalCta[^]*data-company-content-section/
          );

        }

      }
    );

  }
);
