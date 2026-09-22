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
  "founder visual v2",
  () => {
    const page =
      read(
        "src/app/company/founder/page.tsx"
      );

    const css =
      read(
        "src/app/company/founder/founder.module.css"
      );


    it(
      "uses the V2 founder page architecture",
      () => {
        expect(
          page
        ).toContain(
          'data-founder-page="v2"'
        );

        for (
          const section
          of [
            "hero",
            "overview",
            "journey",
            "expertise",
            "education",
            "public-work",
            "cta"
          ]
        ) {
          expect(
            page
          ).toContain(
            `data-founder-section="${section}"`
          );
        }
      }
    );


    it(
      "preserves the founder identity without ownership claims",
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
      "implements the canonical journey without invented dates",
      () => {
        for (
          const stage
          of [
            "Development",
            "Cybersecurity",
            "Bug bounty / security research",
            "Offensive security",
            "No Breach"
          ]
        ) {
          expect(
            page
          ).toContain(
            stage
          );
        }


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
          journeyBlock
        ).not.toMatch(
          /\b20\d{2}\b/
        );
      }
    );


    it(
      "balances content with visual cards",
      () => {
        for (
          const token
          of [
            'data-founder-ui="portrait-card"',
            'data-founder-card="statement"',
            'data-founder-ui="journey"',
            'data-founder-ui="expertise-grid"',
            'data-founder-card="education"',
            'data-founder-card="public"',
            'data-founder-card="cta"'
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
      "applies the founder visual layer once",
      () => {
        expect(
          css.match(
            /NB_FOUNDER_VISUAL_V2/g
          )?.length
        ).toBe(
          1
        );

        for (
          const token
          of [
            ".founderPortraitCard",
            ".founderOverviewGrid",
            ".founderJourney",
            ".founderExpertiseGrid",
            ".founderEducationCard",
            ".founderPublicGrid",
            ".founderCtaCard"
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
