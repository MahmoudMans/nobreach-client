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


const home =
  readFileSync(
    "src/app/home.module.css",
    "utf8"
  );


describe(
  "premium hero system v6 compatibility on homepage v11",
  () => {

    it(
      "retains the premium hero lineage exactly once",
      () => {

        expect(
          (
            home.match(
              /NB_PREMIUM_HERO_SYSTEM_V6/g
            )
            ??
            []
          ).length
        ).toBe(
          1
        );


        expect(
          (
            home.match(
              /NB_HOME_MASTER_CONTINUOUS_V11/g
            )
            ??
            []
          ).length
        ).toBe(
          1
        );

      }
    );


    it(
      "uses restrained technical grids",
      () => {

        expect(
          home
        ).toContain(
          ".heroV8Ambient"
        );


        expect(
          home
        ).toContain(
          "background-image:"
        );


        expect(
          home
        ).toContain(
          "linear-gradient("
        );

      }
    );


    it(
      "uses the current architectural attack-surface primitives",
      () => {

        for (
          const selector
          of [
            ".heroV8Visual",
            ".heroV8Surface",
            ".heroV8Node",
            ".heroV8Line"
          ]
        ) {

          expect(
            home
          ).toContain(
            selector
          );

        }


        expect(
          home
        ).not.toContain(
          ".compactSignal"
        );


        expect(
          home
        ).not.toContain(
          ".signalNode"
        );

      }
    );


    it(
      "enhances the homepage with the six-node attack surface",
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


        for (
          const label
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
            label
          );

        }

      }
    );


    it(
      "honors reduced motion",
      () => {

        expect(
          home
        ).toContain(
          "prefers-reduced-motion"
        );


        expect(
          home
        ).toContain(
          ".heroV8Visual *"
        );


        expect(
          home
        ).toContain(
          "animation:"
        );


        expect(
          home
        ).toContain(
          "none !important"
        );

      }
    );

  }
);
