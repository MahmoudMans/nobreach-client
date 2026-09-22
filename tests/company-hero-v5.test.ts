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
  "company hero v5",
  () => {

    it(
      "adds a dedicated V5 company hero marker",
      () => {

        expect(
          page
        ).toContain(
          'data-company-hero="v5"'
        );


        expect(
          (
            page.match(
              /data-company-hero="v5"/g
            )
            ?? []
          )
        ).toHaveLength(
          1
        );
      }
    );


    it(
      "adds only decorative security signal artwork",
      () => {

        expect(
          page
        ).toContain(
          'data-company-hero-decoration="signal-grid"'
        );

        expect(
          page
        ).toContain(
          'aria-hidden="true"'
        );

        expect(
          page
        ).toContain(
          "styles.companyHeroV5Orbit"
        );
      }
    );


    it(
      "preserves the established V4 company page",
      () => {

        expect(
          page
        ).toContain(
          'data-company-page="v4"'
        );

        expect(
          page
        ).toContain(
          "<h1"
        );
      }
    );


    it(
      "applies the premium hero system once",
      () => {

        expect(
          (
            css.match(
              /^[ \t]*NB_COMPANY_HERO_V5[ \t]*$/gm
            )
            ?? []
          )
        ).toHaveLength(
          1
        );

        expect(
          css
        ).toContain(
          ':global([data-company-hero="v5"])'
        );

        expect(
          css
        ).toContain(
          ".companyHeroV5Backdrop"
        );

        expect(
          css
        ).toContain(
          ".companyHeroV5Orbit"
        );
      }
    );


    it(
      "supports responsive and reduced-motion presentation",
      () => {

        expect(
          css
        ).toContain(
          "max-width: 1024px"
        );

        expect(
          css
        ).toContain(
          "max-width: 768px"
        );

        expect(
          css
        ).toContain(
          "max-width: 480px"
        );

        expect(
          css
        ).toContain(
          "prefers-reduced-motion: reduce"
        );
      }
    );


    it(
      "keeps decorative hero layers out of document flow",
      () => {

        expect(
          css
        ).not.toMatch(
          /data-company-hero="v5"[^}]*>\s*:not\(\.companyHeroV5Backdrop\)/
        );


        expect(
          css
        ).toMatch(
          /data-company-hero="v5"[^}]*>\s*\.heroInner\s*\{/
        );


        expect(
          css
        ).toContain(
          "NB_COMPANY_HERO_V5_FLOW_RECOVERY_V2"
        );
      }
    );


  }
);
