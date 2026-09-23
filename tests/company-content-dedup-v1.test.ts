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
  "Company V19 content discipline",
  () => {

    it(
      "does not recreate old standalone Company sections",
      () => {

        for (
          const rejected
          of [
            'data-company-section="story"',
            'data-company-section="ecosystem"',
            'data-company-section="timeline"',
            'data-company-section="founder"',
            'data-company-section="team"'
          ]
        ) {

          expect(
            page
          ).not.toContain(
            rejected
          );

        }

      }
    );


    it(
      "keeps capabilities and principles in one content chapter",
      () => {

        expect(
          page
        ).toContain(
          'data-company-content-section="capabilities"'
        );


        expect(
          page
        ).toContain(
          'data-company-ui="capability-grid"'
        );


        expect(
          page
        ).toContain(
          'data-company-ui="principle-grid"'
        );

      }
    );


    it(
      "keeps timeline founder and people in the final chapter",
      () => {

        expect(
          page
        ).toContain(
          'data-company-content-section="people"'
        );


        expect(
          page
        ).toContain(
          'data-company-ui="timeline-grid"'
        );


        expect(
          page
        ).toContain(
          'data-company-card="founder"'
        );


        expect(
          page
        ).toContain(
          'data-company-ui="people-grid"'
        );

      }
    );

  }
);
