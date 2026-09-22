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
    "src/app/page.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/home.module.css",
    "utf8"
  );


describe(
  "No Breach home design authority v10",
  () => {

    it(
      "applies the authority to all five homepage sections",
      () => {

        expect(
          (
            page.match(
              /data-home-design="authority-v10"/g
            )
            ?? []
          )
        ).toHaveLength(
          5
        );


        for (
          const section
          of [
            "hero",
            "company",
            "services",
            "explore",
            "contact",
          ]
        ) {

          expect(
            page
          ).toContain(
            `data-home-section="${section}"`
          );

        }

      }
    );


    it(
      "uses the exact No Breach palette",
      () => {

        for (
          const color
          of [
            "#83b3d7",
            "#a1e2f0",
            "#7e60b9",
            "#6333c6",
          ]
        ) {

          expect(
            css
          ).toContain(
            color
          );

        }

      }
    );


    it(
      "uses editorial service rows",
      () => {

        expect(
          css
        ).toContain(
          '.serviceRow'
        );


        expect(
          css
        ).toContain(
          'grid-template-columns:\n    60px'
        );


        expect(
          css
        ).toContain(
          'border-radius:\n    0;'
        );

      }
    );


    it(
      "turns the ecosystem into a directory instead of a card grid",
      () => {

        expect(
          css
        ).toContain(
          '.ecosystemGrid {\n  display:\n    block;'
        );


        expect(
          css
        ).toContain(
          '.ecosystemCard,'
        );


        expect(
          css
        ).toContain(
          'grid-template-columns:\n    180px'
        );

      }
    );


    it(
      "supports responsive and reduced-motion experiences",
      () => {

        expect(
          css
        ).toContain(
          'max-width:\n    1024px'
        );


        expect(
          css
        ).toContain(
          'max-width:\n    768px'
        );


        expect(
          css
        ).toContain(
          'max-width:\n    480px'
        );


        expect(
          css
        ).toContain(
          'prefers-reduced-motion:'
        );

      }
    );

  }
);
