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
  "homepage attack path hero v13",
  () => {

    it(
      "uses one V13 homepage hero",
      () => {

        expect(
          page
        ).toContain(
          'data-home-hero-spec="attack-path-v13"'
        );


        expect(
          page.match(
            /<h1(?:\s|>)/g
          )
          ??
          []
        ).toHaveLength(
          1
        );

      }
    );


    it(
      "preserves the established positioning and actions",
      () => {

        for (
          const token
          of [
            "Offensive security built around",
            "how real systems fail.",
            "Explore services",
            "About No Breach"
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
      "uses the linear attack path assessment",
      () => {

        for (
          const token
          of [
            "NB / ATTACK PATH",
            "LIVE ASSESSMENT",
            "EDGE",
            "APP",
            "AUTH",
            "ACCESS",
            "DATA",
            "DISCOVER",
            "TEST",
            "VALIDATE"
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
      "implements the prescribed split geometry",
      () => {

        expect(
          css
        ).toContain(
          "NB_HOME_HERO_ATTACK_PATH_V13"
        );


        expect(
          css
        ).toContain(
          "650px"
        );


        expect(
          css
        ).toContain(
          "580px"
        );


        expect(
          css
        ).toContain(
          "56px"
        );


        expect(
          css
        ).toContain(
          "72px"
        );

      }
    );


    it(
      "recomposes the assessment vertically on mobile",
      () => {

        expect(
          css
        ).toContain(
          "NB_HOME_HERO_ATTACK_PATH_RESPONSIVE_V13_BEGIN"
        );


        expect(
          css
        ).toContain(
          ".attackPath"
        );


        expect(
          css
        ).toContain(
          "prefers-reduced-motion"
        );

      }
    );

  }
);
