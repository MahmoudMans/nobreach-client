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
  file: string
) {
  return fs.readFileSync(
    path.join(
      root,
      file
    ),
    "utf8"
  );
}

describe(
  "No Breach visual refinement",
  () => {
    it(
      "applies the visual refinement exactly once",
      () => {
        const files = [
          "src/styles/globals.css",
          "src/styles/pages.module.css",
          "src/app/home.module.css",
          "src/components/ui/page-hero.module.css",
          "src/components/ui/section-header.module.css"
        ];

        for (
          const file
          of files
        ) {
          const source =
            read(file);

          expect(
            (
              source.match(
                /NB_VISUAL_REFINEMENT_V1/g
              ) ?? []
            ).length
          ).toBe(
            1
          );
        }
      }
    );

    it(
      "reduces the page hero maximum display size",
      () => {
        const source =
          read(
            "src/components/ui/page-hero.module.css"
          );

        expect(
          source
        ).toContain(
          "5.35rem"
        );
      }
    );

    it(
      "reduces generic CTA typography",
      () => {
        const source =
          read(
            "src/styles/pages.module.css"
          );

        expect(
          source
        ).toContain(
          "3.45rem"
        );
      }
    );

    it(
      "retains the approved palette",
      () => {
        const source =
          read(
            "src/styles/tokens.css"
          );

        for (
          const color
          of [
            "#83b3d7",
            "#a1e2f0",
            "#6333c6",
            "#7e60b9"
          ]
        ) {
          expect(
            source
          ).toContain(
            color
          );
        }
      }
    );
  }
);
