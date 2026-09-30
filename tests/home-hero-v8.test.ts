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


describe(
  "homepage security hero",
  () => {

    it(
      "preserves the established hero authority",
      () => {

        expect(
          page
        ).toContain(
          'data-home-hero="v8"'
        );

        expect(
          page
        ).toContain(
          'data-home-hero-spec="attack-path-v13"'
        );

      }
    );


    it(
      "keeps the established proposition",
      () => {

        expect(
          page
        ).toContain(
          "Offensive security built around"
        );

        expect(
          page
        ).toContain(
          "how real systems fail."
        );

      }
    );


    it(
      "retains the recognizable attack-surface vocabulary",
      () => {

        for (
          const value
          of
          [
            "NB / ATTACK SURFACE",
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
            value
          );

        }

      }
    );


    it(
      "labels the technical visual truthfully",
      () => {

        expect(
          page
        ).toContain(
          "ILLUSTRATIVE MODEL"
        );

        expect(
          page
        ).toContain(
          "not a live assessment"
        );

      }
    );

  }
);
