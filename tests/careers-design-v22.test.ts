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
  "Careers V22 opportunity index",
  () => {

    it(
      "activates V22",
      () => {

        expect(
          page
        ).toContain(
          'data-careers-design="v22"'
        );


        expect(
          css
        ).toContain(
          "NB_CAREERS_OPPORTUNITY_INDEX_V22"
        );

      }
    );


    it(
      "preserves the three authorized career categories",
      () => {

        for (
          const category
          of [
            "Employment",
            "Internships",
            "Freelance collaboration"
          ]
        ) {

          expect(
            page
          ).toContain(
            category
          );

        }

      }
    );


    it(
      "publishes no fabricated openings",
      () => {

        expect(
          page
        ).toContain(
          "const publishedOpenings:"
        );


        expect(
          page
        ).toContain(
          "readonly never[] = []"
        );


        expect(
          page
        ).toContain(
          "There are currently no published openings."
        );

      }
    );


    it(
      "uses the required future opportunities CTA",
      () => {

        expect(
          page
        ).toContain(
          "Follow No Breach for future opportunities."
        );


        expect(
          page
        ).toContain(
          "siteConfig.linkedin"
        );

      }
    );


    it(
      "uses editorial rows rather than fake vacancy cards",
      () => {

        expect(
          page
        ).toContain(
          "styles.opportunityRow"
        );


        expect(
          page
        ).toContain(
          "styles.workRow"
        );


        expect(
          page
        ).not.toContain(
          "jobCard"
        );


        expect(
          page
        ).not.toContain(
          "vacancyCard"
        );

      }
    );

  }
);
