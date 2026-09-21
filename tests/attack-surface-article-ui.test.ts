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
  "attack surface source-class editorial experience",
  () => {
    const page =
      read(
        "src/app/insights/[slug]/page.tsx"
      );

    const baseCss =
      read(
        "src/app/insights/[slug]/article.module.css"
      );

    const shellCss =
      read(
        "src/app/insights/[slug]/attack-surface-shell.module.css"
      );

    const layout =
      read(
        "src/app/insights/[slug]/layout.tsx"
      );


    it(
      "uses the real article source structure",
      () => {
        for (
          const token
          of [
            "styles.layout",
            "styles.toc",
            "styles.content",
            "styles.metaSide",
            "styles.section",
            "styles.paragraph"
          ]
        ) {
          expect(
            page
          ).toContain(
            token
          );
        }
      }
    );


    it(
      "scopes the redesign to attack surface mapping",
      () => {
        expect(
          layout
        ).toContain(
          '"attack-surface-mapping-before-exploitation"'
        );

        expect(
          layout
        ).toContain(
          'data-insight-article='
        );
      }
    );


    it(
      "defines the source-class V5 layout once",
      () => {
        expect(
          baseCss.match(
            /NB_ATTACK_SURFACE_SOURCE_LAYOUT_V5/g
          )?.length
        ).toBe(
          1
        );

        expect(
          baseCss
        ).toContain(
          ".layout"
        );

        expect(
          baseCss
        ).toContain(
          ".content"
        );

        expect(
          baseCss
        ).toContain(
          ".toc"
        );

        expect(
          baseCss
        ).toContain(
          ".metaSide"
        );
      }
    );


    it(
      "gives the research body a real editorial measure",
      () => {
        expect(
          baseCss
        ).toContain(
          "760px"
        );

        expect(
          baseCss
        ).toContain(
          "720px"
        );

        expect(
          baseCss
        ).toContain(
          '"meta toc"'
        );

        expect(
          baseCss
        ).toContain(
          '"content content"'
        );
      }
    );


    it(
      "uses flat editorial cards and numbered sections",
      () => {
        expect(
          baseCss
        ).toContain(
          "counter-reset:"
        );

        expect(
          baseCss
        ).toContain(
          "counter-increment:"
        );

        expect(
          baseCss
        ).toContain(
          "decimal-leading-zero"
        );

        expect(
          baseCss
        ).toContain(
          "background:"
        );
      }
    );


    it(
      "keeps the route visual restrained",
      () => {
        expect(
          shellCss
        ).toContain(
          "NB_ATTACK_SURFACE_EDITORIAL_SHELL_V5"
        );

        expect(
          shellCss
        ).toContain(
          ".editorialAmbient"
        );

        expect(
          shellCss
        ).not.toContain(
          ".surfaceNode"
        );

        expect(
          shellCss
        ).not.toContain(
          ".attackSurfaceVisual"
        );
      }
    );


    it(
      "supports responsive and reduced-motion presentation",
      () => {
        expect(
          baseCss
        ).toContain(
          "max-width: 620px"
        );

        expect(
          shellCss
        ).toContain(
          "prefers-reduced-motion"
        );
      }
    );
  }
);
