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
  "company strict about page v20",
  () => {

    it(
      "uses the canonical About-page flow",
      () => {

        const sections =
          page.match(
            /data-company-section="[^"]+"/g
          )
          ??
          [];


        expect(
          sections
        ).toEqual([
          'data-company-section="intro"',
          'data-company-section="story"',
          'data-company-section="mission-vision"',
          'data-company-section="values"',
          'data-company-section="timeline"',
          'data-company-section="expertise"',
          'data-company-section="team"',
          'data-company-section="cta"'
        ]);

      }
    );


    it(
      "uses one H1 and no second navigation",
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


        expect(
          page
        ).not.toContain(
          "<nav"
        );


        expect(
          page
        ).not.toContain(
          "Breadcrumb"
        );

      }
    );


    it(
      "keeps verified company facts",
      () => {

        for (
          const token
          of [
            "2023",
            "Tunis, Tunisia",
            "Offensive Security",
            "Services · Education · Community"
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
      "keeps exactly three established principles",
      () => {

        for (
          const token
          of [
            "Think offensively",
            "Build through practice",
            "Share knowledge"
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
      "uses the NoBreach design tokens",
      () => {

        for (
          const token
          of [
            "#07090d",
            "#0b0f16",
            "#101620",
            "#151d29",
            "#a1e2f0",
            "#83b3d7",
            "#7e60b9",
            "NB_COMPANY_ABOUT_STRICT_V20"
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

  }
);
