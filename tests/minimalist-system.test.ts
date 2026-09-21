import fs from "node:fs";
import path from "node:path";

import {
  describe,
  expect,
  it
} from "vitest";

const root =
  process.cwd();

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
  "minimalist visual system",
  () => {
    it(
      "applies the minimalist marker exactly once to every target stylesheet",
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
                /NB_MINIMALIST_SYSTEM_V1/g
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
      "defines restrained shared surface tokens",
      () => {
        const tokens =
          read(
            "src/styles/tokens.css"
          );

        expect(
          tokens
        ).toContain(
          "--minimal-section-space"
        );

        expect(
          tokens
        ).toContain(
          "--minimal-surface"
        );

        expect(
          tokens
        ).toContain(
          "--minimal-radius"
        );
      }
    );

    it(
      "reduces global heading scale",
      () => {
        const globals =
          read(
            "src/styles/globals.css"
          );

        expect(
          globals
        ).toContain(
          "#main-content h1"
        );

        expect(
          globals
        ).toContain(
          "#main-content h2"
        );
      }
    );

    it(
      "removes card shadow emphasis",
      () => {
        const pages =
          read(
            "src/styles/pages.module.css"
          );

        expect(
          pages
        ).toContain(
          "box-shadow:"
        );

        expect(
          pages
        ).toContain(
          "none"
        );
      }
    );

    it(
      "preserves responsive treatment",
      () => {
        const home =
          read(
            "src/app/home.module.css"
          );

        expect(
          home
        ).toContain(
          "@media (max-width: 640px)"
        );
      }
    );
  }
);
