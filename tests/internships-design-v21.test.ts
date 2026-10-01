import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";

import {
  internshipMethod,
  internshipProjects
} from "@/content/internships";


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
  "Internships V21 compatibility under audit V22",
  () => {

    it(
      "keeps the established route authority",
      () => {

        expect(
          page
        ).toContain(
          'data-internship-design="v21"'
        );

        expect(
          page
        ).toContain(
          'data-company-architecture="v18"'
        );

      }
    );


    it(
      "keeps the project catalogue data-driven",
      () => {

        expect(
          internshipProjects
        ).toHaveLength(
          8
        );

        expect(
          page
        ).toContain(
          "internshipProjects.map"
        );

      }
    );


    it(
      "keeps project details expandable",
      () => {

        expect(
          page
        ).toContain(
          "InternshipProjectDisclosure"
        );

      }
    );


    it(
      "keeps the complete methodology",
      () => {

        expect(
          internshipMethod
        ).toHaveLength(
          6
        );

        expect(
          page
        ).toContain(
          "internshipMethod.map"
        );

      }
    );


    it(
      "keeps publication boundaries visible",
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

      }
    );


    it(
      "keeps the Company-family compatibility marker",
      () => {

        expect(
          css.match(
            /NB_COMPANY_INTERNSHIPS_DESIGN_V14/g
          )
          ??
          []
        ).toHaveLength(
          1
        );

      }
    );

  }
);
