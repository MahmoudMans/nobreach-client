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
    "src/app/company/founder/page.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/company/founder/founder.module.css",
    "utf8"
  );


describe(
  "Founder V20 editorial profile",
  () => {

    it(
      "activates the V20 founder design",
      () => {

        expect(
          page
        ).toContain(
          'data-founder-page="v20"'
        );


        expect(
          page
        ).toContain(
          'data-founder-design-system="v20"'
        );


        expect(
          css
        ).toContain(
          "NB_FOUNDER_EDITORIAL_PROFILE_V20"
        );

      }
    );


    it(
      "uses exactly three real content sections",
      () => {

        expect(
          (
            page.match(
              /data-company-content-section=/g
            )
            ??
            []
          ).length
        ).toBe(
          3
        );


        for (
          const section
          of [
            "journey",
            "expertise-education",
            "public-work"
          ]
        ) {

          expect(
            page
          ).toContain(
            `data-company-content-section="${section}"`
          );

        }

      }
    );


    it(
      "uses an editorial portrait rather than the old profile card",
      () => {

        expect(
          page
        ).toContain(
          'data-founder-ui="portrait-editorial"'
        );


        expect(
          page
        ).not.toContain(
          'data-founder-ui="portrait-card"'
        );


        expect(
          page
        ).not.toContain(
          "founderPortraitCard"
        );

      }
    );


    it(
      "preserves founder identity without unsupported ownership claims",
      () => {

        expect(
          page
        ).toContain(
          "Nouha"
        );


        expect(
          page
        ).toContain(
          "Ben Brahim"
        );


        expect(
          page
        ).toContain(
          "Founder of No Breach"
        );


        expect(
          page
        ).not.toMatch(
          /\bowner\b/i
        );


        expect(
          page
        ).not.toMatch(
          /\bCEO\b/
        );

      }
    );


    it(
      "keeps five journey stages and four expertise areas",
      () => {

        const journeyBlock =
          page.slice(
            page.indexOf(
              "const journey ="
            ),
            page.indexOf(
              "const expertise ="
            )
          );


        expect(
          (
            journeyBlock.match(
              /number:/g
            )
            ??
            []
          ).length
        ).toBe(
          5
        );


        const expertiseBlock =
          page.slice(
            page.indexOf(
              "const expertise ="
            ),
            page.indexOf(
              "const engagements ="
            )
          );


        expect(
          (
            expertiseBlock.match(
              /number:/g
            )
            ??
            []
          ).length
        ).toBe(
          4
        );

      }
    );


    it(
      "preserves historical compatibility markers exactly once",
      () => {

        for (
          const marker
          of [
            "NB_FOUNDER_VISUAL_V2",
            "NB_FOUNDER_REAL_PHOTO_V1",
            "NB_MINIMALIST_SYSTEM_V1",
            "NB_MINIMALIST_POLISH_V4",
            "NB_PREMIUM_HERO_SYSTEM_V6",
            "NB_NAV_HERO_RHYTHM_V1"
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
