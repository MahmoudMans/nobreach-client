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
  "homepage responsive viewport system",
  () => {

    it(
      "uses viewport-relative desktop hero geometry",
      () => {

        expect(
          css
        ).toContain(
          "100svh - 76px"
        );

      }
    );


    it(
      "contains all required responsive recomposition points",
      () => {

        for (
          const breakpoint
          of [
            "@media (max-width: 1024px)",
            "@media (max-width: 820px)",
            "@media (max-width: 640px)",
            "@media (max-width: 390px)"
          ]
        ) {

          expect(
            css
          ).toContain(
            breakpoint
          );

        }

      }
    );


    it(
      "recomposes hero on compact screens",
      () => {

        expect(
          css
        ).toContain(
          ".heroV8Frame,"
        );


        expect(
          css
        ).toContain(
          "grid-template-columns:"
        );

      }
    );

  }
);
