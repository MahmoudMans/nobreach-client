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
  "homepage design authority v10 / master v11",
  () => {

    it(
      "applies the continuous master design",
      () => {

        expect(
          page
        ).toContain(
          'data-home-design="authority-v10"'
        );


        expect(
          page
        ).toContain(
          'data-home-master="continuous-v11"'
        );

      }
    );


    it(
      "keeps exactly one H1",
      () => {

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
      "keeps the public NoBreach positioning",
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


        expect(
          page
        ).toContain(
          "A cybersecurity organization built from offensive security."
        );

      }
    );


    it(
      "renders the four data-driven commercial service areas",
      () => {

        expect(
          page
        ).toContain(
          "const services = ["
        );


        expect(
          page
        ).toContain(
          "services.map"
        );


        expect(
          page
        ).toContain(
          "data-home-service"
        );


        for (
          const href
          of [
            "/services/web-application-pentesting",
            "/services/api-security",
            "/services/infrastructure-security",
            "/services/security-training"
          ]
        ) {

          expect(
            page
          ).toContain(
            href
          );

        }

      }
    );


    it(
      "keeps the global visual-system compatibility markers",
      () => {

        for (
          const marker
          of [
            "NB_VISUAL_REFINEMENT_V1",
            "NB_RESPONSIVE_SYSTEM_V1",
            "NB_MINIMALIST_SYSTEM_V1",
            "NB_MINIMALIST_POLISH_V4",
            "NB_PREMIUM_HERO_SYSTEM_V6",
            "NB_HOME_HERO_V8",
            "NB_HOME_HERO_VIEWPORT_FIT_V9",
            "NB_HOME_DESIGN_AUTHORITY_V10",
            "NB_HOME_MASTER_CONTINUOUS_V11"
          ]
        ) {

          expect(
            (
              css.match(
                new RegExp(
                  marker,
                  "g"
                )
              )
              ??
              []
            ).length,
            marker
          ).toBe(
            1
          );

        }

      }
    );

  }
);
