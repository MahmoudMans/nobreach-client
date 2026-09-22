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
  "company hero v6",
  () => {

    it(
      "uses exactly one clean V6 hero",
      () => {

        expect(
          (
            page.match(
              /data-company-hero="v6"/g
            )
            ?? []
          )
        ).toHaveLength(
          1
        );


        expect(
          page
        ).not.toContain(
          'data-company-hero="v5"'
        );


        expect(
          css
        ).not.toContain(
          "NB_COMPANY_HERO_V5"
        );
      }
    );


    it(
      "removes the rejected V5 decorative artwork",
      () => {

        for (
          const rejected
          of [
            "companyHeroV5Backdrop",
            "companyHeroV5Glow",
            "companyHeroV5Grid",
            "companyHeroV5Orbit",
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
      "preserves the useful company hero content",
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

        expect(
          page
        ).toContain(
          'data-company-ui="profile-card"'
        );
      }
    );


    it(
      "uses a flat restrained background",
      () => {

        expect(
          css
        ).toContain(
          "NB_COMPANY_HERO_V6_CLEAN_EDITORIAL"
        );

        expect(
          css
        ).toContain(
          'background:\n    #08090c;'
        );

        expect(
          css
        ).toContain(
          "box-shadow:\n    none;"
        );

        expect(
          css
        ).toContain(
          "backdrop-filter:\n    none;"
        );
      }
    );


    it(
      "does not force an oversized hero height",
      () => {

        expect(
          css
        ).toContain(
          "min-height:\n    0;"
        );
      }
    );

  }
);
