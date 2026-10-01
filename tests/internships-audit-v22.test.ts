import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";

import {
  internshipContributorNote,
  internshipMethod,
  internshipProjects,
  internshipPublicNote
} from "@/content/internships";


const page =
  readFileSync(
    "src/app/company/internships/page.tsx",
    "utf8"
  );


const disclosure =
  readFileSync(
    "src/app/company/internships/project-disclosure.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/company/internships/internships.module.css",
    "utf8"
  );


describe(
  "internships V22 + focused V23 refinement",
  () => {

    it(
      "preserves V21 and V22 while activating the focused refinement",
      () => {

        expect(
          page
        ).toContain(
          'data-internship-design="v21"'
        );

        expect(
          page
        ).toContain(
          'data-internship-audit="v22"'
        );

        expect(
          page
        ).toContain(
          'data-internship-refinement="v23"'
        );

      }
    );


    it(
      "preserves all eight approved project records",
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
      "publishes visitor-facing method copy rather than implementation commentary",
      () => {

        expect(
          page
        ).toContain(
          "The internship approach connects lab setup, system understanding, security validation, improvements and documentation."
        );

        expect(
          page
        ).toContain(
          "Detection work is included where relevant to the project."
        );

        expect(
          page
        ).not.toContain(
          "preserving project-specific differences"
        );

        expect(
          page
        ).not.toContain(
          "existing detection qualification"
        );

      }
    );


    it(
      "keeps the complete publication safeguards in compact copy",
      () => {

        expect(
          internshipPublicNote
        ).toContain(
          "authorized, isolated environments"
        );

        expect(
          internshipPublicNote
        ).toContain(
          "synthetic or deliberately vulnerable systems"
        );

        expect(
          internshipPublicNote
        ).toContain(
          "separate from confidential client and production environments"
        );

        expect(
          internshipPublicNote
        ).toContain(
          "No confidential client systems, credentials or private assessment data are published."
        );

        expect(
          internshipContributorNote
        ).toBe(
          "Contributor names are published only with permission."
        );

        expect(
          page
        ).toContain(
          "Publication scope"
        );

        expect(
          page
        ).not.toContain(
          "About this showcase"
        );

      }
    );


    it(
      "makes project title and detail action one disclosure control",
      () => {

        expect(
          disclosure
        ).toContain(
          "<h3"
        );

        expect(
          disclosure
        ).toContain(
          "<button"
        );

        expect(
          disclosure
        ).toContain(
          "projectToggleTitle"
        );

        expect(
          disclosure
        ).toContain(
          "projectToggleAction"
        );

        expect(
          disclosure
        ).toContain(
          "aria-expanded"
        );

        expect(
          disclosure
        ).toContain(
          "aria-controls"
        );

        expect(
          disclosure.match(
            /role="region"/g
          )
          ??
          []
        ).toHaveLength(
          1
        );

      }
    );


    it(
      "keeps summary and metadata outside the disclosure button",
      () => {

        const buttonEnd =
          disclosure.indexOf(
            "</button>"
          );

        const summary =
          disclosure.indexOf(
            "styles.projectSummary"
          );

        const metadata =
          disclosure.indexOf(
            "styles.projectTechnologies"
          );


        expect(
          buttonEnd
        ).toBeGreaterThan(
          0
        );

        expect(
          summary
        ).toBeGreaterThan(
          buttonEnd
        );

        expect(
          metadata
        ).toBeGreaterThan(
          summary
        );

        expect(
          disclosure
        ).toContain(
          'data-project-summary="true"'
        );

        expect(
          disclosure
        ).toContain(
          'data-project-metadata="true"'
        );

      }
    );


    it(
      "keeps the six-stage method and its detection qualification",
      () => {

        expect(
          internshipMethod.map(
            item =>
              item.title
          )
        ).toEqual([
          "Build",
          "Understand",
          "Validate",
          "Detect",
          "Fix",
          "Document"
        ]);

        expect(
          internshipMethod[3]
            .description
        ).toContain(
          "Where relevant"
        );

      }
    );


    it(
      "adds local rules for aligned metadata and continuous method geometry",
      () => {

        for (
          const selector
          of
          [
            ".projectTechnologies",
            ".projectToggleTitle",
            ".projectToggleAction",
            ".methodGrid",
            ".methodStep",
            ".projectsSection",
            ".methodSection"
          ]
        ) {

          expect(
            css
          ).toContain(
            selector
          );

        }

      }
    );


    it(
      "keeps all compatibility markers and adds the refinement marker once",
      () => {

        for (
          const marker
          of
          [
            "NB_MINIMALIST_SYSTEM_V1",
            "NB_MINIMALIST_POLISH_V4",
            "NB_CONTENT_DENSITY_V5",
            "NB_PREMIUM_HERO_SYSTEM_V6",
            "NB_NAV_HERO_RHYTHM_V1",
            "NB_COMPANY_INTERNSHIPS_DESIGN_V14",
            "NB_INTERNSHIPS_DESIGN_V21",
            "NB_INTERNSHIPS_AUDIT_V22",
            "NB_INTERNSHIPS_REFINEMENT_V23"
          ]
        ) {

          expect(
            css.match(
              new RegExp(
                marker,
                "g"
              )
            )
            ??
            []
          ).toHaveLength(
            1
          );

        }

      }
    );

  }
);
