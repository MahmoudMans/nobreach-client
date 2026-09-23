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
  "company V15 content deduplication",
  () => {

    it(
      "does not restore retired duplicate components",
      () => {

        expect(
          page
        ).not.toContain(
          "styles.profileFooter"
        );


        expect(
          page
        ).not.toContain(
          "styles.mindsetCard"
        );


        expect(
          page
        ).not.toContain(
          "styles.focusTags"
        );

      }
    );


    it(
      "removes the separate Approach section",
      () => {

        expect(
          page
        ).not.toContain(
          'data-company-section="story"'
        );


        expect(
          page
        ).not.toContain(
          'data-company-ui="approach-flow"'
        );

      }
    );


    it(
      "removes the duplicate Ecosystem destination section",
      () => {

        expect(
          page
        ).not.toContain(
          'data-company-section="ecosystem"'
        );


        expect(
          page
        ).not.toContain(
          'data-company-card="ecosystem"'
        );

      }
    );


    it(
      "retains unique factual and editorial sections",
      () => {

        for (
          const marker
          of [
            'data-company-ui="facts"',
            'data-company-ui="capability-grid"',
            'data-company-ui="principle-grid"',
            'data-company-ui="timeline-grid"',
            'data-company-ui="people-grid"'
          ]
        ) {

          expect(
            page
          ).toContain(
            marker
          );

        }

      }
    );


    it(
      "retains the founder preview and timeline",
      () => {

        expect(
          page
        ).toContain(
          "Nouha Ben Brahim"
        );


        expect(
          page
        ).toContain(
          "timeline.map"
        );

      }
    );

  }
);
