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
    "src/app/company/page.tsx",
    "utf8"
  );


describe(
  "company editorial narrative",
  () => {

    it(
      "progresses from purpose to history founder approach and action",
      () => {

        for (
          const token
          of
          [
            'data-company-section="mission-vision"',
            'data-company-section="timeline"',
            'data-company-section="founder"',
            'data-company-section="approach-expertise"',
            'data-company-section="cta"'
          ]
        ) {

          expect(
            page
          ).toContain(
            token
          );

        }

        expect(
          page
        ).not.toContain(
          'data-company-section="story"'
        );

      }
    );


    it(
      "keeps established historical content while separating ongoing work",
      () => {

        for (
          const token
          of
          [
            "No Breach founded",
            "Training Hub established",
            "CR4CKOUT launched",
            "Community and training activities",
            "Continuing to build"
          ]
        ) {

          expect(
            page
          ).toContain(
            token
          );

        }

        expect(
          page
        ).toContain(
          "Ongoing activity"
        );

      }
    );


    it(
      "keeps expertise editorial rather than rebuilding a card wall",
      () => {

        expect(
          page
        ).toContain(
          "expertiseRows"
        );

        expect(
          page
        ).not.toContain(
          "capabilityGrid"
        );

      }
    );

  }
);
