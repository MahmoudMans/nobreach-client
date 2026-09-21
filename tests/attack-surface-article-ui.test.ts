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
  "shared insight detail layout v6",
  () => {
    const page =
      read(
        "src/app/insights/[slug]/page.tsx"
      );

    const css =
      read(
        "src/app/insights/[slug]/article.module.css"
      );

    const layout =
      read(
        "src/app/insights/[slug]/layout.tsx"
      );


    it(
      "uses the discovered source structure",
      () => {
        for (
          const token
          of [
            "styles.layout",
            "styles.toc",
            "styles.content",
            "styles.metaSide",
            "styles.section",
            "styles.paragraph",
            "styles.relatedGrid"
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
      "applies V6 once and removes attack surface V5",
      () => {
        expect(
          css.match(
            /NB_INSIGHT_DETAIL_LAYOUT_V6/g
          )?.length
        ).toBe(
          1
        );

        expect(
          css
        ).not.toContain(
          "NB_ATTACK_SURFACE_SOURCE_LAYOUT_V5"
        );
      }
    );


    it(
      "creates the desktop three-column editorial composition",
      () => {
        expect(
          css
        ).toContain(
          '"toc content meta"'
        );

        expect(
          css
        ).toContain(
          "190px"
        );

        expect(
          css
        ).toContain(
          "720px"
        );

        expect(
          css
        ).toContain(
          "sticky"
        );
      }
    );


    it(
      "creates tablet and mobile reorderings",
      () => {
        expect(
          css
        ).toContain(
          '"toc content"'
        );

        expect(
          css
        ).toContain(
          '"toc meta"'
        );

        expect(
          css
        ).toContain(
          '"toc"'
        );

        expect(
          css
        ).toContain(
          '"content"'
        );

        expect(
          css
        ).toContain(
          '"meta"'
        );
      }
    );


    it(
      "keeps sections flat and editorial",
      () => {
        expect(
          css
        ).toContain(
          "counter-reset:"
        );

        expect(
          css
        ).toContain(
          "counter-increment:"
        );

        expect(
          css
        ).toContain(
          "decimal-leading-zero"
        );
      }
    );


    it(
      "uses a generic slug wrapper without route-specific visual code",
      () => {
        expect(
          layout
        ).toContain(
          "data-insight-article"
        );

        expect(
          layout
        ).not.toContain(
          "attackSurfaceArticle"
        );

        expect(
          layout
        ).not.toContain(
          "attack-surface-shell.module.css"
        );
      }
    );
  }
);
