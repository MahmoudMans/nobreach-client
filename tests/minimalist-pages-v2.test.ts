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
  "minimalist pages v2",
  () => {
    it(
      "adds the global V2 design authority",
      () => {
        expect(
          (
            read(
              "src/styles/globals.css"
            ).match(
              /NB_MINIMALIST_PAGES_V2/g
            ) ?? []
          ).length
        ).toBe(
          1
        );

        expect(
          (
            read(
              "src/styles/pages.module.css"
            ).match(
              /NB_MINIMALIST_PAGES_V2/g
            ) ?? []
          ).length
        ).toBe(
          1
        );
      }
    );

    it(
      "keeps the visual language flat",
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
          "border-radius:"
        );
      }
    );

    it(
      "keeps compact page rhythm",
      () => {
        const source =
          read(
            "src/styles/globals.css"
          );

        expect(
          source
        ).toContain(
          "--nb-page-space"
        );

        expect(
          source
        ).toContain(
          "--nb-page-space-compact"
        );
      }
    );

    it(
      "preserves the established V1 system",
      () => {
        for (
          const file
          of [
            "src/styles/tokens.css",
            "src/styles/globals.css",
            "src/styles/pages.module.css"
          ]
        ) {
          expect(
            read(
              file
            )
          ).toContain(
            "NB_MINIMALIST_SYSTEM_V1"
          );
        }
      }
    );
  }
);
