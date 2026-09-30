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
  "premium homepage hero compatibility",
  () => {

    it(
      "retains the attack-surface authority hooks",
      () => {

        expect(
          page
        ).toContain(
          'data-home-hero-visual="attack-surface"'
        );

        expect(
          page
        ).toContain(
          'data-hero-art="attack-surface"'
        );

        expect(
          page
        ).toContain(
          'data-attack-surface="true"'
        );

      }
    );


    it(
      "retains five meaningful attack-path stages",
      () => {

        for (
          const stage
          of
          [
            "edge",
            "application",
            "identity",
            "access",
            "data"
          ]
        ) {

          expect(
            page
          ).toContain(
            `data-stage="${stage}"`
          );

        }

      }
    );


    it(
      "does not require hero entrance animation",
      () => {

        expect(
          css
        ).not.toMatch(
          /\.hero[^{]*\{[^}]*animation\s*:/
        );

      }
    );


    it(
      "contains explicit reduced-motion protection",
      () => {

        expect(
          css
        ).toContain(
          "@media (prefers-reduced-motion: reduce)"
        );

      }
    );


    it(
      "uses readable metadata rather than decorative microtext only",
      () => {

        expect(
          css
        ).toContain(
          "0.8125rem"
        );

      }
    );

  }
);
