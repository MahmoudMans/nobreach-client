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
  "company creative v7",
  () => {

    it(
      "activates V7 once",
      () => {

        expect(
          (
            page.match(
              /data-company-design="v7"/g
            )
            ?? []
          )
        ).toHaveLength(
          1
        );


        expect(
          (
            css.match(
              /NB_COMPANY_CREATIVE_V7/g
            )
            ?? []
          )
        ).toHaveLength(
          1
        );

      }
    );


    it(
      "uses asymmetric capability bento architecture",
      () => {

        expect(
          css
        ).toContain(
          "repeat(\n      12,"
        );


        expect(
          css
        ).toContain(
          ".capabilityCard:nth-child(1)"
        );


        expect(
          css
        ).toContain(
          "span\n    7"
        );


        expect(
          css
        ).toContain(
          "span\n    5"
        );

      }
    );


    it(
      "creates staggered principles and a timeline trace",
      () => {

        expect(
          css
        ).toContain(
          ".principleCard:nth-child(2)"
        );


        expect(
          css
        ).toContain(
          ".timelineGrid::before"
        );

      }
    );


    it(
      "creates the ecosystem and founder editorial systems",
      () => {

        expect(
          css
        ).toContain(
          ".ecosystemLine"
        );


        expect(
          css
        ).toContain(
          ".founderCard"
        );


        expect(
          css
        ).toContain(
          "min-height:\n    520px;"
        );

      }
    );


    it(
      "supports mobile and reduced motion",
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
