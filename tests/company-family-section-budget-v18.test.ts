import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const company =
  readFileSync(
    "src/app/company/page.tsx",
    "utf8"
  );


describe(
  "company information architecture",
  () => {

    it(
      "uses the consolidated six-section Company flow",
      () => {

        const sections =
          [
            ...company.matchAll(
              /data-company-section="([^"]+)"/g
            )
          ].map(
            (
              match
            ) =>
              match[1]
          );

        expect(
          sections
        ).toEqual([
          "intro",
          "mission-vision",
          "timeline",
          "founder",
          "approach-expertise",
          "cta"
        ]);

      }
    );


    it(
      "keeps founder and expertise as deliberate Company content",
      () => {

        expect(
          company
        ).toContain(
          'data-company-section="founder"'
        );

        expect(
          company
        ).toContain(
          'data-company-section="approach-expertise"'
        );

      }
    );

  }
);
