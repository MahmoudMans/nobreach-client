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
  "modern homepage v7",
  () => {
    const page =
      read(
        "src/app/page.tsx"
      );

    const css =
      read(
        "src/app/home.module.css"
      );


    it(
      "preserves the five-section information architecture",
      () => {
        expect(
          (
            page.match(
              /data-home-section=/g
            ) ?? []
          ).length
        ).toBe(
          5
        );

        for (
          const section
          of [
            "hero",
            "company",
            "services",
            "explore",
            "contact"
          ]
        ) {
          expect(
            page
          ).toContain(
            `data-home-section="${section}"`
          );
        }
      }
    );


    it(
      "uses the dynamic attack surface constellation",
      () => {
        expect(
          page
        ).toContain(
          "NB / ATTACK SURFACE"
        );

        for (
          const node
          of [
            "APP",
            "API",
            "AUTH",
            "USER",
            "DATA"
          ]
        ) {
          expect(
            page
          ).toContain(
            node
          );
        }

        expect(
          css
        ).toContain(
          ".constellationShell"
        );

        expect(
          css
        ).toContain(
          ".scanBeam"
        );

        expect(
          css
        ).toContain(
          "nbModernScan"
        );
      }
    );


    it(
      "preserves all detailed content destinations",
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
            "/insights",
            "/contact"
          ]
        ) {
          expect(
            page
          ).toContain(
            route
          );
        }
      }
    );


    it(
      "uses modern service rows rather than the old service-card layout",
      () => {
        expect(
          page
        ).toContain(
          "serviceRows"
        );

        expect(
          page
        ).toContain(
          "serviceRow"
        );

        expect(
          css
        ).toContain(
          ".serviceRow"
        );
      }
    );


    it(
      "uses asymmetric ecosystem composition",
      () => {
        expect(
          page
        ).toContain(
          "ecosystemLarge"
        );

        expect(
          page
        ).toContain(
          "ecosystemWide"
        );

        expect(
          css
        ).toContain(
          ".ecosystemLarge"
        );
      }
    );


    it(
      "supports reduced motion",
      () => {
        expect(
          css
        ).toContain(
          "prefers-reduced-motion"
        );

        expect(
          css
        ).toContain(
          "animation:"
        );
      }
    );


    it(
      "applies V7 once",
      () => {
        expect(
          (
            css.match(
              /NB_MODERN_HOME_V7/g
            ) ?? []
          ).length
        ).toBe(
          1
        );
      }
    );
  }
);
