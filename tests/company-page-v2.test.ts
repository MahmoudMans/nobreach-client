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
    "src/app/company/page.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/company/company.module.css",
    "utf8"
  );


describe(
  "company family V14 — company page",
  () => {

    it(
      "preserves verified Company content",
      () => {

        for (
          const token
          of [
            "2023",
            "Tunis, Tunisia",
            "Offensive Security",
            "Services · Education · Community",
            "Think offensively",
            "Build through practice",
            "Share knowledge",
            "Nouha Ben Brahim"
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
      "keeps the established runtime selectors",
      () => {

        for (
          const token
          of [
            'data-company-page="v4"',
            'data-company-design="v9"',
            'data-company-hero="v6"',
            'data-company-ui="profile-card"',
            'data-company-card="capability"',
            'data-company-card="principle"',
            'data-company-card="timeline"',
            'data-company-card="people"'
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
      "uses four capabilities and three principles",
      () => {

        const capabilityBlock =
          page.slice(
            page.indexOf(
              "const capabilities ="
            ),
            page.indexOf(
              "const principles ="
            )
          );


        expect(
          capabilityBlock.match(
            /index:/g
          )
        ).toHaveLength(
          4
        );


        const principleBlock =
          page.slice(
            page.indexOf(
              "const principles ="
            ),
            page.indexOf(
              "const ecosystem ="
            )
          );


        expect(
          principleBlock.match(
            /title:/g
          )
        ).toHaveLength(
          3
        );

      }
    );


    it(
      "removes the embedded Company navigation bar",
      () => {

        expect(
          page
        ).not.toContain(
          'aria-label="Company sections"'
        );

        expect(
          page
        ).not.toContain(
          "styles.pageNav"
        );

      }
    );


    it(
      "uses the consolidated V14 company design",
      () => {

        expect(
          css
        ).toContain(
          "NB_COMPANY_FAMILY_V14"
        );


        for (
          const token
          of [
            ".capabilityRows",
            ".principleRows",
            ".ecosystemGrid",
            ".timeline",
            ".founderPreview",
            ".peopleRows"
          ]
        ) {

          expect(
            css
          ).toContain(
            token
          );

        }

      }
    );


    it(
      "preserves the real founder portrait preview",
      () => {

        expect(
          page
        ).toContain(
          'src="/people/ceo.png"'
        );

        expect(
          page
        ).toContain(
          'data-founder-photo-image="company"'
        );

      }
    );

  }
);
