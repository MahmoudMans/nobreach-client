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
  "attack surface article UI",
  () => {
    const layout =
      read(
        "src/app/insights/[slug]/layout.tsx"
      );

    const css =
      read(
        "src/app/insights/[slug]/attack-surface-shell.module.css"
      );


    it(
      "scopes the presentation to the intended insight",
      () => {
        expect(
          layout
        ).toContain(
          '"attack-surface-mapping-before-exploitation"'
        );

        expect(
          layout
        ).toContain(
          "styles.attackSurfaceArticle"
        );

        expect(
          layout
        ).toContain(
          "styles.articleShell"
        );
      }
    );


    it(
      "adds the topology visualization",
      () => {
        expect(
          layout
        ).toContain(
          'data-ui="attack-surface-topology"'
        );

        for (
          const node
          of [
            "DNS",
            "EDGE",
            "AUTH",
            "API",
            "APP",
            "DATA"
          ]
        ) {
          expect(
            layout
          ).toContain(
            node
          );
        }
      }
    );


    it(
      "upgrades article reading presentation",
      () => {
        expect(
          css
        ).toContain(
          ":global(article p)"
        );

        expect(
          css
        ).toContain(
          ":global(article h2)"
        );

        expect(
          css
        ).toContain(
          ":global(article pre)"
        );

        expect(
          css
        ).toContain(
          ":global(blockquote)"
        );
      }
    );


    it(
      "upgrades TOC and related content",
      () => {
        expect(
          css
        ).toContain(
          'class*="toc"'
        );

        expect(
          css
        ).toContain(
          'class*="relatedCard"'
        );

        expect(
          css
        ).toContain(
          "position:"
        );

        expect(
          css
        ).toContain(
          "sticky"
        );
      }
    );


    it(
      "supports responsive and reduced motion",
      () => {
        expect(
          css
        ).toContain(
          "max-width: 640px"
        );

        expect(
          css
        ).toContain(
          "prefers-reduced-motion"
        );
      }
    );
  }
);
