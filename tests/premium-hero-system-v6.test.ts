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
  "premium hero compatibility on attack path hero v13",
  () => {

    it(
      "retains premium system lineage",
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
              /NB_HOME_HERO_ATTACK_PATH_V13/g
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
      "uses one assessment canvas instead of floating UI",
      () => {

        expect(
          home
        ).toContain(
          ".heroAssessment"
        );


        expect(
          home
        ).toContain(
          ".attackPath"
        );


        expect(
          home
        ).toContain(
          ".assessmentEvidence"
        );

      }
    );


    it(
      "contains the attack path",
      () => {

        for (
          const token
          of [
            "EDGE",
            "APP",
            "AUTH",
            "ACCESS",
            "DATA"
          ]
        ) {

          expect(
            page
          ).toContain(
            token
          );

        }

      }
    );


    it(
      "keeps technical content inside its visual",
      () => {

        expect(
          page
        ).toContain(
          'data-home-hero-visual="attack-surface"'
        );


        expect(
          page
        ).toContain(
          "NB / ATTACK PATH"
        );

      }
    );


    it(
      "supports reduced motion",
      () => {

        expect(
          home
        ).toContain(
          "prefers-reduced-motion"
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
