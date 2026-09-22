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
  "company editorial v8",
  () => {

    it(
      "uses only the V8 design layer",
      () => {

        expect(
          page
        ).toContain(
          'data-company-design="v8"'
        );


        expect(
          page
        ).not.toContain(
          'data-company-design="v7"'
        );


        expect(
          css
        ).toContain(
          "NB_COMPANY_EDITORIAL_V8"
        );


        expect(
          css
        ).not.toContain(
          "NB_COMPANY_CREATIVE_V7"
        );

      }
    );


    it(
      "uses a balanced capability grid instead of bento",
      () => {

        expect(
          css
        ).toContain(
          ".capabilityGrid"
        );


        expect(
          css
        ).toContain(
          "repeat(\n      2,"
        );


        expect(
          css
        ).toContain(
          ".capabilityCard:nth-child(n)"
        );


        expect(
          css
        ).toContain(
          "grid-column:\n    auto;"
        );

      }
    );


    it(
      "keeps principles aligned rather than staggered",
      () => {

        expect(
          css
        ).toContain(
          ".principleCard:nth-child(n)"
        );


        expect(
          css
        ).toContain(
          "margin-top:\n    0;"
        );

      }
    );


    it(
      "uses flat architectural sections",
      () => {

        expect(
          css
        ).toContain(
          "border-radius:\n    0;"
        );


        expect(
          css
        ).toContain(
          "background:\n    transparent;"
        );

      }
    );


    it(
      "preserves responsive behavior",
      () => {

        expect(
          css
        ).toContain(
          "max-width:\n    768px"
        );


        expect(
          css
        ).toContain(
          "prefers-reduced-motion:"
        );

      }
    );

  }
);
