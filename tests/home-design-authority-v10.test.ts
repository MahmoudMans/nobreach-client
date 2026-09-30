import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const page =
  readFileSync(
    "src/app/page.tsx",
    "utf8"
  );


describe(
  "homepage editorial authority",
  () => {

    it(
      "uses canonical content sources",
      () => {

        expect(
          page
        ).toContain(
          '@/content/services'
        );

        expect(
          page
        ).toContain(
          '@/content/training'
        );

        expect(
          page
        ).toContain(
          '@/content/site'
        );

        expect(
          page
        ).toContain(
          '@/content/team'
        );

        expect(
          page
        ).toContain(
          '@/content/insights'
        );

      }
    );


    it(
      "exposes the editorial redesign authority",
      () => {

        expect(
          page
        ).toContain(
          'data-home-redesign="editorial-v12"'
        );

      }
    );


    it(
      "keeps canonical organization naming in public copy",
      () => {

        expect(
          page
        ).toContain(
          "Contact No Breach"
        );

        expect(
          page
        ).toContain(
          "NO BREACH ACADEMY"
        );

      }
    );


    it(
      "does not present the hero visual as live operational data",
      () => {

        expect(
          page
        ).not.toContain(
          "LIVE ASSESSMENT"
        );

        expect(
          page
        ).not.toContain(
          "STATUS / ACTIVE"
        );

        expect(
          page
        ).toContain(
          "Illustrative attack path — not a live assessment."
        );

      }
    );

  }
);
