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
  "minimalist interactions v3",
  () => {
    it(
      "defines global form control authority",
      () => {
        const css =
          read(
            "src/styles/globals.css"
          );

        expect(
          css
        ).toContain(
          "NB_MINIMALIST_INTERACTIONS_V3"
        );

        expect(
          css
        ).toContain(
          "input,"
        );

        expect(
          css
        ).toContain(
          "textarea"
        );

        expect(
          css
        ).toContain(
          "min-height:"
        );
      }
    );

    it(
      "defines a consistent visible focus state",
      () => {
        const css =
          read(
            "src/styles/globals.css"
          );

        expect(
          css
        ).toContain(
          ":focus-visible"
        );

        expect(
          css
        ).toContain(
          "var(--brand-cyan)"
        );
      }
    );

    it(
      "keeps FAQ surfaces flat",
      () => {
        const css =
          read(
            "src/styles/pages.module.css"
          );

        expect(
          css
        ).toContain(
          ".faqItem"
        );

        expect(
          css
        ).toContain(
          "background:"
        );

        expect(
          css
        ).toContain(
          "transparent"
        );
      }
    );

    it(
      "keeps filter controls compact",
      () => {
        const css =
          read(
            "src/styles/pages.module.css"
          );

        expect(
          css
        ).toContain(
          ".filterButton"
        );

        expect(
          css
        ).toContain(
          "min-height:"
        );
      }
    );
  }
);
