import {
  readFileSync,
} from "node:fs";

import {
  describe,
  expect,
  it,
} from "vitest";


const page =
  readFileSync(
    "src/app/page.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/home.module.css",
    "utf8"
  );


describe(
  "homepage hero v8",
  () => {

    it(
      "uses the new elegant hero architecture",
      () => {

        expect(
          page
        ).toContain(
          'data-home-hero="v8"'
        );

        expect(
          page
        ).toContain(
          "Offensive security built around"
        );

        expect(
          page
        ).toContain(
          "how real systems fail."
        );
      }
    );


    it(
      "preserves the homepage action hierarchy",
      () => {

        expect(
          page
        ).toContain(
          'href="/services"'
        );

        expect(
          page
        ).toContain(
          "Explore services"
        );

        expect(
          page
        ).toContain(
          'href="/company"'
        );

        expect(
          page
        ).toContain(
          "About No Breach"
        );
      }
    );


    it(
      "keeps the connected No Breach positioning",
      () => {

        expect(
          page
        ).toContain(
          "Security, education and community are one connected system."
        );
      }
    );


    it(
      "uses a restrained attack-surface visual",
      () => {

        expect(
          page
        ).toContain(
          'data-home-hero-visual="attack-surface"'
        );

        for (
          const node
          of [
            "APP",
            "API",
            "AUTH",
            "USER",
            "DB",
            "DATA",
          ]
        ) {

          expect(
            page
          ).toContain(
            node
          );

        }
      }
    );


    it(
      "preserves exactly five homepage primary sections",
      () => {

        const sections =
          page.match(
            /data-home-section="/g
          )
          ?? [];


        expect(
          sections
        ).toHaveLength(
          5
        );


        for (
          const section
          of [
            "hero",
            "company",
            "services",
            "explore",
            "contact",
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
      "applies the V8 visual layer once with responsive motion policy",
      () => {

        expect(
          (
            css.match(
              /NB_HOME_HERO_V8/g
            )
            ?? []
          )
        ).toHaveLength(
          1
        );

        expect(
          css
        ).toContain(
          "@media (\n  max-width: 980px"
        );

        expect(
          css
        ).toContain(
          "@media (\n  max-width: 680px"
        );

        expect(
          css
        ).toContain(
          "prefers-reduced-motion: reduce"
        );
      }
    );

  }
);
