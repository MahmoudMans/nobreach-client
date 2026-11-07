import fs from "node:fs";
import path from "node:path";
import {
  describe,
  expect,
  it
} from "vitest";
import {
  linkedInPosts
} from "@/content/linkedin-posts";

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
  "LinkedIn activity archive",
  () => {
    it(
      "contains verified public post permalinks",
      () => {
        expect(
          linkedInPosts.length
        ).toBe(
          14
        );
      }
    );

    it(
      "uses only LinkedIn post URLs",
      () => {
        for (
          const post
          of linkedInPosts
        ) {
          const url =
            new URL(
              post.href
            );

          expect(
            url.hostname.endsWith(
              "linkedin.com"
            )
          ).toBe(
            true
          );

          expect(
            url.pathname
          ).toContain(
            "/posts/"
          );
        }
      }
    );

    it(
      "does not contain duplicate post URLs",
      () => {
        const urls =
          linkedInPosts.map(
            (
              post
            ) =>
              post.href
          );

        expect(
          new Set(
            urls
          ).size
        ).toBe(
          urls.length
        );
      }
    );

    it(
      "contains No Breach Nouha and Training Hub sources",
      () => {
        const sources =
          new Set(
            linkedInPosts.map(
              (
                post
              ) =>
                post.source
            )
          );

        expect(
          sources
        ).toContain(
          "No Breach"
        );

        expect(
          sources
        ).toContain(
          "Nouha Ben Brahim"
        );

        expect(
          sources
        ).toContain(
          "No Breach Training Hub"
        );
      }
    );

    it(
      "mounts LinkedIn activity on the activities archive",
      () => {
        expect(
          read(
            "src/app/activities/page.tsx"
          )
        ).toContain(
          "<LinkedInActivitySection />"
        );
      }
    );

    it(
      "opens external posts safely",
      () => {
        const source =
          read(
            "src/components/activities/linkedin-activity-section.tsx"
          );

        expect(
          source
        ).toContain(
          'target="_blank"'
        );

        expect(
          source
        ).toContain(
          'rel="noopener noreferrer"'
        );
      }
    );
  }
);
