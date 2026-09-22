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
  "company page v4",
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
      "uses the V4 company experience",
      () => {
        expect(
          page
        ).toContain(
          'data-company-page="v4"'
        );

        expect(
          css.match(
            /NB_COMPANY_PAGE_V4/g
          )?.length
        ).toBe(
          1
        );

        expect(
          css
        ).not.toContain(
          "NB_COMPANY_PAGE_V3"
        );
      }
    );


    it(
      "balances text with visual card architecture",
      () => {

        for (
          const token
          of [
            "styles.introGrid",
            "styles.statementCard",
            'data-company-card="statement"',
            'data-company-ui="approach-flow"',
            "styles.flow",
            "styles.profileCard",
          ]
        ) {

          expect(
            page
          ).toContain(
            token
          );

        }


        expect(
          page
        ).not.toContain(
          "styles.mindsetCard"
        );

      }
    );



    it(
      "keeps four capability cards",
      () => {
        const block =
          page.slice(
            page.indexOf(
              "const capabilities ="
            ),
            page.indexOf(
              "const principles ="
            )
          );


        expect(
          (
            block.match(
              /index:/g
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
      "keeps exactly three principles",
      () => {
        const block =
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
            block.match(
              /title:/g
            )
            ??
            []
          ).length
        ).toBe(
          3
        );


        expect(
          page
        ).toContain(
          "Think offensively"
        );

        expect(
          page
        ).toContain(
          "Build through practice"
        );

        expect(
          page
        ).toContain(
          "Share knowledge"
        );
      }
    );


    it(
      "keeps verified company facts and no ownership claim",
      () => {
        for (
          const text
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
            text
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
      "implements cards with restrained visual styling",
      () => {
        for (
          const token
          of [
            ".profileCard",
            ".statementCard",
            ".mindsetCard",
            ".capabilityCard",
            ".principleCard",
            ".ecosystemCard",
            ".timelineCard",
            ".founderCard",
            ".peopleCard",
            ".ctaCard",
            "border-radius:",
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
