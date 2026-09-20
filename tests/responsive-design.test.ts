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
  "responsive design system",
  () => {
    it(
      "applies responsive refinement markers exactly once",
      () => {
        const files = [
          "src/styles/globals.css",
          "src/styles/pages.module.css",
          "src/app/home.module.css",
          "src/components/ui/page-hero.module.css",
          "src/components/ui/section-header.module.css",
          "src/components/layout/site-header.module.css",
          "src/components/layout/site-footer.module.css",
          "src/components/ui/button-link.module.css",
          "src/components/insights/insights-browser.module.css",
          "src/app/insights/[slug]/article.module.css"
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
                /NB_RESPONSIVE_SYSTEM_V1/g
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
      "contains compact desktop breakpoint",
      () => {
        expect(
          read(
            "src/styles/pages.module.css"
          )
        ).toContain(
          "@media (max-width: 1240px)"
        );
      }
    );

    it(
      "contains tablet breakpoint",
      () => {
        expect(
          read(
            "src/app/home.module.css"
          )
        ).toContain(
          "@media (max-width: 1024px)"
        );
      }
    );

    it(
      "contains tablet portrait breakpoint",
      () => {
        expect(
          read(
            "src/app/home.module.css"
          )
        ).toContain(
          "@media (max-width: 820px)"
        );
      }
    );

    it(
      "contains narrow mobile breakpoint",
      () => {
        expect(
          read(
            "src/app/home.module.css"
          )
        ).toContain(
          "@media (max-width: 390px)"
        );
      }
    );

    it(
      "preserves approved brand palette",
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
