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
  "company strict about page",
  () => {

    it(
      "uses the audited Company flow",
      () => {

        const sections =
          [
            ...page.matchAll(
              /data-company-section="([^"]+)"/g
            )
          ].map(
            (
              match
            ) =>
              match[1]
          );

        expect(
          sections
        ).toEqual([
          "intro",
          "mission-vision",
          "timeline",
          "founder",
          "approach-expertise",
          "cta"
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
          of
          [
            "2023",
            "Tunis, Tunisia",
            "Offensive Security",
            "Services · Education · Community",
            "Activities"
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
          of
          [
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
      "keeps the strict-v20 compatibility marker and v21 audit marker",
      () => {

        expect(
          page
        ).toContain(
          'data-company-about="strict-v20"'
        );

        expect(
          page
        ).toContain(
          'data-company-audit="v21"'
        );

        expect(
          css
        ).toContain(
          "NB_COMPANY_ABOUT_STRICT_V20"
        );

        expect(
          css
        ).toContain(
          "NB_COMPANY_AUDIT_V21"
        );

      }
    );

  }
);
