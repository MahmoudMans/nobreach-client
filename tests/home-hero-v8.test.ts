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
    "src/app/page.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/home.module.css",
    "utf8"
  );


describe(
  "homepage hero v8 compatibility",
  () => {

    it(
      "keeps the established hero identity",
      () => {

        expect(
          page
        ).toContain(
          'data-home-hero="v8"'
        );


        expect(
          page
        ).toContain(
          "OFFENSIVE SECURITY / TUNISIA"
        );

      }
    );


    it(
      "keeps the signature attack-surface visual",
      () => {

        expect(
          page
        ).toContain(
          'data-hero-art="attack-surface"'
        );


        for (
          const node
          of [
            "APP",
            "API",
            "AUTH",
            "USER",
            "DB",
            "DATA"
          ]
        ) {

          expect(
            page
          ).toContain(
            node
          );

        }

      }
    );


    it(
      "keeps reduced-motion support",
      () => {

        expect(
          css
        ).toContain(
          "prefers-reduced-motion"
        );


        expect(
          css
        ).toContain(
          "animation:"
        );


        expect(
          css
        ).toContain(
          "none !important"
        );

      }
    );

  }
);
