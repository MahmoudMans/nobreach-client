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

const files = [
  "src/styles/tokens.css",
  "src/styles/globals.css",
  "src/styles/pages.module.css",
  "src/components/ui/page-hero.module.css",
  "src/components/ui/section-header.module.css",
  "src/components/ui/button-link.module.css",
  "src/components/layout/site-header.module.css",
  "src/components/layout/site-footer.module.css",
  "src/app/home.module.css",
  "src/app/company/founder/founder.module.css",
  "src/app/company/internships/internships.module.css",
  "src/components/activities/linkedin-activity-section.module.css",
  "src/components/insights/insights-browser.module.css",
  "src/app/insights/[slug]/article.module.css"
];

describe(
  "minimalist polish v4",
  () => {
    it(
      "applies V4 exactly once to every intended surface",
      () => {
        for (
          const file
          of files
        ) {
          const source =
            read(
              file
            );

          expect(
            (
              source.match(
                /NB_MINIMALIST_POLISH_V4/g
              ) ?? []
            ).length,
            file
          ).toBe(
            1
          );
        }
      }
    );

    it(
      "defines final polish tokens",
      () => {
        const source =
          read(
            "src/styles/tokens.css"
          );

        expect(
          source
        ).toContain(
          "--nb-polish-section"
        );

        expect(
          source
        ).toContain(
          "--nb-polish-hairline"
        );

        expect(
          source
        ).toContain(
          "--nb-polish-radius"
        );
      }
    );

    it(
      "keeps cards flat and restrained",
      () => {
        const source =
          read(
            "src/styles/pages.module.css"
          );

        expect(
          source
        ).toContain(
          "box-shadow:"
        );

        expect(
          source
        ).toContain(
          "none"
        );

        expect(
          source
        ).toContain(
          "var(--nb-polish-radius)"
        );
      }
    );

    it(
      "keeps navigation compact",
      () => {
        const source =
          read(
            "src/components/layout/site-header.module.css"
          );

        expect(
          source
        ).toContain(
          "min-height:"
        );

        expect(
          source
        ).toContain(
          "62px"
        );
      }
    );

    it(
      "keeps the footer compact",
      () => {
        const source =
          read(
            "src/components/layout/site-footer.module.css"
          );

        expect(
          source
        ).toContain(
          "NB_MINIMALIST_POLISH_V4"
        );
      }
    );
  }
);
