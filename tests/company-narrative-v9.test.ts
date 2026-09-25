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
      "contains story mission vision values timeline and expertise",
      () => {

        for (
          const token
          of [
            'data-company-section="story"',
            'data-company-section="mission-vision"',
            'data-company-section="values"',
            'data-company-section="timeline"',
            'data-company-section="expertise"'
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
      "uses established timeline milestones",
      () => {

        for (
          const token
          of [
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

      }
    );


    it(
      "uses editorial expertise rows instead of another card wall",
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
