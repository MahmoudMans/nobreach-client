import fs from "node:fs";
import path from "node:path";

import {
  describe,
  expect,
  it
} from "vitest";


const root =
  process.cwd();


function read(
  relativePath: string
) {
  return fs.readFileSync(
    path.join(
      root,
      relativePath
    ),
    "utf8"
  );
}


describe(
  "company page v2",
  () => {
    const page =
      read(
        "src/app/company/page.tsx"
      );

    const css =
      read(
        "src/app/company/company.module.css"
      );


    it(
      "contains the complete company information architecture",
      () => {
        for (
          const section
          of [
            "hero",
            "who-we-are",
            "story",
            "what-we-do",
            "principles",
            "ecosystem",
            "timeline",
            "founder",
            "team",
            "cta"
          ]
        ) {
          expect(
            page
          ).toContain(
            `data-company-section="${section}"`
          );
        }
      }
    );


    it(
      "uses exactly the intended three company principles",
      () => {
        for (
          const principle
          of [
            "Think offensively",
            "Build through practice",
            "Share knowledge"
          ]
        ) {
          expect(
            page
          ).toContain(
            principle
          );
        }


        const principlesBlock =
          page.slice(
            page.indexOf(
              "const principles ="
            ),
            page.indexOf(
              "const ecosystem ="
            )
          );


        expect(
          (
            principlesBlock.match(
              /title:/g
            )
            ??
            []
          ).length
        ).toBe(
          3
        );
      }
    );


    it(
      "uses verified company facts without invented metrics",
      () => {
        expect(
          page
        ).toContain(
          '"2023"'
        );

        expect(
          page
        ).toContain(
          '"Tunis, Tunisia"'
        );

        expect(
          page
        ).toContain(
          '"Offensive Security"'
        );

        expect(
          page
        ).toContain(
          '"Services · Education · Community"'
        );

        expect(
          page
        ).not.toMatch(
          /\b\d+[,+]?\s*(clients|customers|employees|projects|countries)\b/i
        );
      }
    );


    it(
      "defines the company ecosystem destinations in the data model",
      () => {
        for (
          const route
          of [
            "/services",
            "/training",
            "/cr4ckout",
            "/activities",
            "/insights"
          ]
        ) {
          expect(
            page
          ).toContain(
            `href:\n      "${route}"`
          );
        }


        expect(
          page
        ).toContain(
          "href={\n                        discipline.href"
        );

        expect(
          page
        ).toContain(
          "href={\n                        item.href"
        );
      }
    );


    it(
      "links directly to founder team internships and contact",
      () => {
        for (
          const route
          of [
            "/company/founder",
            "/company/team",
            "/company/internships",
            "/contact"
          ]
        ) {
          expect(
            page
          ).toContain(
            `href="${route}"`
          );
        }
      }
    );


    it(
      "does not make unsupported ownership claims",
      () => {
        expect(
          page
        ).not.toMatch(
          /\bowner\b/i
        );

        expect(
          page
        ).toContain(
          "Founder of No Breach"
        );
      }
    );


    it(
      "implements the full premium company visual system",
      () => {
        for (
          const token
          of [
            "NB_COMPANY_PAGE_V2",
            ".heroVisual",
            ".systemCanvas",
            ".sectionFrame",
            ".disciplineList",
            ".principlesGrid",
            ".ecosystemMap",
            ".timeline",
            ".founderPanel",
            ".teamPanel",
            ".ctaSection",
            "prefers-reduced-motion"
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
