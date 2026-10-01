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
    "src/app/careers/page.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/careers/careers.module.css",
    "utf8"
  );


describe(
  "Careers V22 compatibility + audit V23 consolidation",
  () => {

    it(
      "keeps V22 compatibility and activates the consolidated audit",
      () => {

        expect(
          page
        ).toContain(
          'data-careers-design="v22"'
        );

        expect(
          page
        ).toContain(
          'data-careers-audit="v23"'
        );

        expect(
          css
        ).toContain(
          "NB_CAREERS_DESIGN_V22"
        );

        expect(
          css
        ).toContain(
          "NB_CAREERS_AUDIT_V23"
        );

      }
    );


    it(
      "uses one task-focused careers opening",
      () => {

        expect(
          page
        ).toContain(
          "Careers at No Breach"
        );

        expect(
          page
        ).toContain(
          "Explore employment, internship and freelance collaboration opportunities."
        );

        expect(
          page
        ).toContain(
          "There are currently no published openings."
        );

        expect(
          page
        ).toContain(
          "New opportunities will appear here when they are formally published."
        );

        for (
          const retired
          of
          [
            "Opportunity Index",
            "Three paths. One truthful public status.",
            "View opportunity status",
            "UPDATED PUBLIC INDEX",
            "Updated public index",
            "Follow No Breach for future opportunities.",
            "Follow on LinkedIn"
          ]
        ) {

          expect(
            page
          ).not.toContain(
            retired
          );

        }

      }
    );


    it(
      "preserves all three opportunity categories once through one scope model",
      () => {

        for (
          const category
          of
          [
            "Employment",
            "Internships",
            "Freelance collaboration"
          ]
        ) {

          expect(
            page
          ).toContain(
            `"${category}"`
          );

        }


        expect(
          page
        ).toContain(
          "opportunityCategories.map"
        );

      }
    );


    it(
      "distinguishes empty and unavailable source states without fabricated vacancies",
      () => {

        expect(
          page
        ).toContain(
          '"ready"'
        );

        expect(
          page
        ).toContain(
          '"unavailable"'
        );

        expect(
          page
        ).toContain(
          "Opportunity information is temporarily unavailable."
        );

        expect(
          page
        ).not.toMatch(
          /\bWe are not hiring\b/i
        );

        expect(
          page
        ).not.toContain(
          "<form"
        );

        expect(
          page
        ).not.toContain(
          "Apply now"
        );

      }
    );


    it(
      "keeps the three useful work destinations and stable interaction geometry",
      () => {

        for (
          const token
          of
          [
            "Internship Projects",
            "Training",
            "Technical Insights",
            '"/company/internships"',
            '"/training"',
            '"/insights"',
            "View No Breach on LinkedIn"
          ]
        ) {

          expect(
            page
          ).toContain(
            token
          );

        }


        expect(
          css
        ).toContain(
          ".resourceRow:hover"
        );

        expect(
          css
        ).toContain(
          ".resourceRow:focus-visible"
        );


        const hoverStart =
          css.indexOf(
            ".resourceRow:hover"
          );

        const focusStart =
          css.indexOf(
            ".resourceRow:focus-visible"
          );


        const hoverBlock =
          css.slice(
            hoverStart,
            focusStart
          );


        expect(
          hoverBlock
        ).not.toContain(
          "transform:"
        );

        expect(
          hoverBlock
        ).not.toContain(
          "padding:"
        );

      }
    );

  }
);
