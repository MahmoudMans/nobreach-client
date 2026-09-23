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


const familyCss =
  readFileSync(
    "src/app/company/company-family.module.css",
    "utf8"
  );


describe(
  "company V15 compact architecture",
  () => {

    it(
      "keeps the meaningful Company information",
      () => {

        for (
          const token
          of [
            "Tunis, Tunisia",
            "Offensive Security",
            "Think offensively",
            "Build through practice",
            "Share knowledge",
            "Nouha Ben Brahim"
          ]
        ) {

          expect(
            page
          ).toContain(
            token
          );

        }

      }
    );


    it(
      "removes duplicate standalone sections",
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


        expect(
          page
        ).not.toContain(
          'data-company-ui="ecosystem-grid"'
        );

      }
    );


    it(
      "keeps the concise primary architecture",
      () => {

        for (
          const marker
          of [
            'data-company-section="hero"',
            'data-company-section="who-we-are"',
            'data-company-section="what-we-do"',
            'data-company-section="principles"',
            'data-company-section="timeline"',
            'data-company-section="founder"',
            'data-company-section="team"',
            'data-company-section="cta"'
          ]
        ) {

          expect(
            page
          ).toContain(
            marker
          );

        }

      }
    );


    it(
      "keeps four capabilities and three operating principles",
      () => {

        expect(
          (
            page.match(
              /data-company-card="capability"/g
            )
            ??
            []
          ).length
        ).toBe(
          1
        );


        expect(
          page
        ).toContain(
          "capabilities.map"
        );


        expect(
          page
        ).toContain(
          "principles.map"
        );

      }
    );


    it(
      "activates V15 density",
      () => {

        expect(
          page
        ).toContain(
          'data-company-density="v15"'
        );


        expect(
          familyCss
        ).toContain(
          "NB_COMPANY_FAMILY_DENSITY_V15"
        );


        expect(
          css
        ).toContain(
          "NB_COMPANY_PAGE_DENSITY_V15"
        );

      }
    );


    it(
      "uses compact editorial capability rows",
      () => {

        expect(
          css
        ).toContain(
          "min-height:\n    180px;"
        );


        expect(
          css
        ).toContain(
          "min-height:\n    116px;"
        );

      }
    );

  }
);
