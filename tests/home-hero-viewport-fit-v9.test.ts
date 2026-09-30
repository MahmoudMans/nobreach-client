import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const css =
  readFileSync(
    "src/app/home.module.css",
    "utf8"
  );


describe(
  "homepage responsive hero contract",
  () => {

    it(
      "avoids forcing the hero to a full viewport height",
      () => {

        expect(
          css
        ).not.toMatch(
          /\.hero\s*\{[^}]*min-height\s*:\s*100vh/
        );

      }
    );


    it(
      "contains intermediate and compact recomposition",
      () => {

        expect(
          css
        ).toContain(
          "@media (max-width: 1100px)"
        );

        expect(
          css
        ).toContain(
          "@media (max-width: 720px)"
        );

      }
    );


    it(
      "recomposes the attack path vertically on compact layouts",
      () => {

        expect(
          css
        ).toMatch(
          /@media \(max-width: 720px\)[\s\S]*\.attackPath[\s\S]*grid-template-columns:\s*1fr/
        );

      }
    );


    it(
      "protects the page from accidental horizontal overflow",
      () => {

        expect(
          css
        ).toMatch(
          /\.page\s*\{[\s\S]*overflow-x:\s*clip/
        );

      }
    );

  }
);
