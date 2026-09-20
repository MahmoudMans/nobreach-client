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
  "Step 3 corporate content architecture",
  () => {
    it(
      "contains the activity dynamic route",
      () => {
        expect(
          fs.existsSync(
            path.join(
              root,
              "src/app/activities/[slug]/page.tsx"
            )
          )
        ).toBe(
          true
        );
      }
    );

    it(
      "contains breadcrumb structured data",
      () => {
        const source =
          read(
            "src/components/navigation/breadcrumbs.tsx"
          );

        expect(
          source
        ).toContain(
          "BreadcrumbList"
        );
      }
    );

    it(
      "contains service structured data",
      () => {
        expect(
          read(
            "src/components/services/service-structured-data.tsx"
          )
        ).toContain(
          '"Service"'
        );
      }
    );

    it(
      "contains course structured data",
      () => {
        expect(
          read(
            "src/components/training/training-structured-data.tsx"
          )
        ).toContain(
          '"Course"'
        );
      }
    );

    it(
      "includes activity routes in sitemap",
      () => {
        expect(
          read(
            "src/app/sitemap.ts"
          )
        ).toContain(
          "/activities/${activity.slug}"
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
