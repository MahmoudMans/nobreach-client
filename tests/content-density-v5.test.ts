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
  "content density v5",
  () => {
    it(
      "applies the shared density system",
      () => {
        for (
          const file
          of [
            "src/styles/pages.module.css",
            "src/components/ui/page-hero.module.css",
            "src/components/ui/section-header.module.css"
          ]
        ) {
          expect(
            (
              read(
                file
              ).match(
                /NB_CONTENT_DENSITY_V5/g
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
      "removes artificial card minimum height",
      () => {
        const source =
          read(
            "src/styles/pages.module.css"
          );

        expect(
          source
        ).toContain(
          "min-height:"
        );

        expect(
          source
        ).toContain(
          "auto"
        );
      }
    );

    it(
      "uses tighter section spacing",
      () => {
        const source =
          read(
            "src/styles/pages.module.css"
          );

        expect(
          source
        ).toContain(
          "2.8rem"
        );

        expect(
          source
        ).toContain(
          "3.8rem"
        );
      }
    );

    it(
      "keeps reading widths controlled",
      () => {
        const source =
          read(
            "src/styles/pages.module.css"
          );

        expect(
          source
        ).toContain(
          "800px"
        );
      }
    );
  }
);
