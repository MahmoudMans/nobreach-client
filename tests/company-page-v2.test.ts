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
  "company page v3",
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
      "uses the V3 minimalist company architecture",
      () => {
        expect(
          page
        ).toContain(
          'data-company-page="v3"'
        );

        expect(
          css.match(
            /NB_COMPANY_PAGE_V3/g
          )?.length
        ).toBe(
          1
        );

        expect(
          css
        ).not.toContain(
          "NB_COMPANY_PAGE_V2"
        );
      }
    );


    it(
      "removes the large technical company diagrams",
      () => {
        expect(
          page
        ).not.toContain(
          'data-ui="company-system-map"'
        );

        expect(
          page
        ).not.toContain(
          'data-ui="company-ecosystem-map"'
        );

        expect(
          css
        ).not.toContain(
          ".systemCanvas"
        );

        expect(
          css
        ).not.toContain(
          ".ecosystemCore"
        );
      }
    );


    it(
      "keeps the company page concise",
      () => {
        expect(
          page
        ).toContain(
          "One offensive mindset."
        );

        expect(
          page
        ).toContain(
          "Test."
        );

        expect(
          page
        ).toContain(
          "Learn."
        );

        expect(
          page
        ).toContain(
          "Share."
        );


        const sourceWords =
          page
            .replace(
              /[{}()[\]"'`<>/=;:,.]/g,
              " "
            )
            .split(
              /\s+/
            )
            .filter(
              Boolean
            )
            .length;


        expect(
          sourceWords
        ).toBeLessThan(
          1900
        );
      }
    );


    it(
      "keeps the three company principles",
      () => {
        for (
          const title
          of [
            "Think offensively",
            "Build through practice",
            "Share knowledge"
          ]
        ) {
          expect(
            page
          ).toContain(
            title
          );
        }
      }
    );


    it(
      "preserves verified company facts",
      () => {
        for (
          const value
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
            value
          );
        }


        expect(
          page
        ).not.toMatch(
          /\bowner\b/i
        );
      }
    );


    it(
      "uses tighter editorial spacing",
      () => {
        expect(
          css
        ).toContain(
          "1180px"
        );

        expect(
          css
        ).toContain(
          "min-height:\n    560px"
        );

        expect(
          css
        ).toContain(
          ".container"
        );

        expect(
          css
        ).toContain(
          "max-width: 620px"
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
