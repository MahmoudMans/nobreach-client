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
    "src/app/company/internships/page.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/company/internships/internships.module.css",
    "utf8"
  );


describe(
  "Internships V21 applied security workbench",
  () => {

    it(
      "activates the V21 visual authority",
      () => {

        expect(
          page
        ).toContain(
          'data-internship-design="v21"'
        );


        expect(
          css
        ).toContain(
          "NB_INTERNSHIP_APPLIED_SECURITY_WORKBENCH_V21"
        );

      }
    );


    it(
      "uses exactly three real content sections",
      () => {

        expect(
          (
            page.match(
              /data-company-content-section=/g
            )
            ??
            []
          ).length
        ).toBe(
          3
        );


        for (
          const name
          of [
            "projects",
            "method",
            "public-showcase"
          ]
        ) {

          expect(
            page
          ).toContain(
            `data-company-content-section="${name}"`
          );

        }

      }
    );


    it(
      "uses a technical project ledger instead of a project card wall",
      () => {

        expect(
          page
        ).toContain(
          'data-internship-ui="project-index"'
        );


        expect(
          page
        ).toContain(
          "<details"
        );


        expect(
          page
        ).toContain(
          "styles.projectRow"
        );


        expect(
          page
        ).not.toContain(
          "styles.projectCard"
        );

      }
    );


    it(
      "renders methodology from the canonical six-stage source",
      () => {

        expect(
          page
        ).toContain(
          "internshipMethod.map"
        );


        expect(
          page
        ).toContain(
          'data-internship-ui="method-rail"'
        );

      }
    );


    it(
      "preserves public safety and contributor notes",
      () => {

        expect(
          page
        ).toContain(
          "internshipPublicNote"
        );


        expect(
          page
        ).toContain(
          "internshipContributorNote"
        );


        expect(
          page
        ).toContain(
          'data-internship-ui="safety-boundaries"'
        );

      }
    );


    it(
      "preserves global compatibility markers exactly once",
      () => {

        for (
          const marker
          of [
            "NB_MINIMALIST_SYSTEM_V1",
            "NB_MINIMALIST_POLISH_V4",
            "NB_PREMIUM_HERO_SYSTEM_V6",
            "NB_NAV_HERO_RHYTHM_V1",
            "NB_INTERNSHIP_THREE_SECTION_ARCHITECTURE_V18"
          ]
        ) {

          expect(
            (
              css.match(
                new RegExp(
                  marker,
                  "g"
                )
              )
              ??
              []
            ).length,
            marker
          ).toBe(
            1
          );

        }

      }
    );

  }
);
