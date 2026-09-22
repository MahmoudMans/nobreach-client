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
  "condensed homepage",
  () => {
    const homepage =
      read(
        "src/app/page.tsx"
      );

    it(
      "contains exactly five intentional homepage sections",
      () => {
        const sections =
          homepage.match(
            /data-home-section=/g
          ) ?? [];

        expect(
          sections.length
        ).toBe(
          5
        );
      }
    );

    it(
      "preserves the primary No Breach positioning",
      () => {
        expect(
          homepage
        ).toContain(
          "Offensive security built around"
        );

        expect(
          homepage
        ).toContain(
          "Offensive Security / Tunisia"
        );
      }
    );

    it(
      "moves detailed content to dedicated routes",
      () => {
        for (
          const route
          of [
            "/company",
            "/company/founder",
            "/company/internships",
            "/services",
            "/training",
            "/cr4ckout",
            "/activities",
            "/events",
            "/insights"
          ]
        ) {
          expect(
            homepage
          ).toContain(
            route
          );
        }
      }
    );

    it(
      "does not recreate the former long-form homepage sections",
      () => {
        expect(
          homepage
        ).not.toContain(
          "Security methodology"
        );

        expect(
          homepage
        ).not.toContain(
          "Featured programs"
        );

        expect(
          homepage
        ).not.toContain(
          "Company timeline"
        );
      }
    );

    it(
      "applies condensed homepage CSS once",
      () => {
        const css =
          read(
            "src/app/home.module.css"
          );

        expect(
          (
            css.match(
              /NB_HOME_CONDENSED_V1/g
            ) ?? []
          ).length
        ).toBe(
          1
        );
      }
    );
  }
);
