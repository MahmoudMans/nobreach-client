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

const heroFiles = [
  "src/styles/pages.module.css",
  "src/components/ui/page-hero.module.css",
  "src/app/home.module.css",
  "src/app/company/founder/founder.module.css",
  "src/app/company/internships/internships.module.css",
  "src/app/activities/[slug]/activity.module.css",
  "src/app/insights/[slug]/article.module.css"
];

describe(
  "premium hero system v6",
  () => {
    it(
      "applies hero V6 exactly once to all intended hero surfaces",
      () => {
        for (
          const file
          of heroFiles
        ) {
          const source =
            read(
              file
            );

          expect(
            (
              source.match(
                /NB_PREMIUM_HERO_SYSTEM_V6/g
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
      "uses restrained technical grids",
      () => {
        const source =
          read(
            "src/components/ui/page-hero.module.css"
          );

        expect(
          source
        ).toContain(
          "background-size:"
        );

        expect(
          source
        ).toContain(
          "48px 48px"
        );

        expect(
          source
        ).toContain(
          "mask-image:"
        );
      }
    );

    it(
      "adds architectural hero accents",
      () => {
        const source =
          read(
            "src/components/ui/page-hero.module.css"
          );

        expect(
          source
        ).toContain(
          ".hero::after"
        );

        expect(
          source
        ).toContain(
          "border-top:"
        );

        expect(
          source
        ).toContain(
          "border-right:"
        );
      }
    );

    it(
      "enhances the homepage attack-surface visual",
      () => {
        const source =
          read(
            "src/app/home.module.css"
          );

        expect(
          source
        ).toContain(
          ".compactSignal::before"
        );

        expect(
          source
        ).toContain(
          ".signalNode"
        );

        expect(
          source
        ).toContain(
          "nbHeroNodeBreathe"
        );
      }
    );

    it(
      "honors reduced motion",
      () => {
        const shared =
          read(
            "src/components/ui/page-hero.module.css"
          );

        const home =
          read(
            "src/app/home.module.css"
          );

        expect(
          shared
        ).toContain(
          "prefers-reduced-motion"
        );

        expect(
          home
        ).toContain(
          "prefers-reduced-motion"
        );
      }
    );
  }
);
