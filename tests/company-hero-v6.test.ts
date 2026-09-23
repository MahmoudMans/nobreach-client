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
  "company V14 PageIntro compatibility",
  () => {

    it(
      "keeps one established V6 runtime hero selector",
      () => {

        expect(
          page.match(
            /data-company-hero="v6"/g
          )
        ).toHaveLength(
          1
        );

      }
    );


    it(
      "preserves the approved company message",
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

        expect(
          page
        ).toContain(
          'href="/services"'
        );

        expect(
          page
        ).toContain(
          'href="/company/founder"'
        );

      }
    );


    it(
      "uses a clean content surface with pseudo-decoration",
      () => {

        expect(
          css
        ).toContain(
          ".hero"
        );

        expect(
          css
        ).toContain(
          "background-image:"
        );

        expect(
          css
        ).toContain(
          "none !important"
        );

        expect(
          css
        ).toContain(
          "box-shadow:"
        );

      }
    );


    it(
      "does not include the rejected hero artwork contract",
      () => {

        for (
          const rejected
          of [
            "companyHeroV5Backdrop",
            "companyHeroV5Glow",
            "companyHeroV5Grid",
            "companyHeroV5Orbit"
          ]
        ) {

          expect(
            page
          ).not.toContain(
            rejected
          );

        }

      }
    );


    it(
      "does not recreate another navigation bar beneath the intro",
      () => {

        expect(
          page
        ).not.toContain(
          'aria-label="Company sections"'
        );

      }
    );

  }
);
