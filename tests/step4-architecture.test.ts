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
  "Step 4 knowledge publishing architecture",
  () => {
    it(
      "contains article structured data",
      () => {
        expect(
          read(
            "src/components/insights/article-structured-data.tsx"
          )
        ).toContain(
          '"Article"'
        );
      }
    );

    it(
      "contains an RSS route",
      () => {
        expect(
          fs.existsSync(
            path.join(
              root,
              "src/app/feed.xml/route.ts"
            )
          )
        ).toBe(
          true
        );
      }
    );

    it(
      "contains article table of contents",
      () => {
        expect(
          read(
            "src/app/insights/[slug]/page.tsx"
          )
        ).toContain(
          'aria-label="Article contents"'
        );
      }
    );

    it(
      "contains insight search",
      () => {
        expect(
          read(
            "src/components/insights/insights-browser.tsx"
          )
        ).toContain(
          'type="search"'
        );
      }
    );

    it(
      "adds insight routes to sitemap",
      () => {
        expect(
          read(
            "src/app/sitemap.ts"
          )
        ).toContain(
          "/insights/${insight.slug}"
        );
      }
    );

    it(
      "keeps the approved palette",
      () => {
        const tokens =
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
            tokens
          ).toContain(
            color
          );
        }
      }
    );
  }
);
