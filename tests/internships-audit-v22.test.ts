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
  "internships audit v22",
  () => {

    it(
      "preserves V21 compatibility and activates V22 audit authority",
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

      }
    );


    it(
      "preserves all eight data-driven project records",
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

        expect(
          page
        ).toContain(
          "InternshipProjectDisclosure"
        );

      }
    );


    it(
      "removes repeated hero and method representations",
      () => {

        for (
          const retired
          of
          [
            "heroSystem",
            "heroMetrics",
            "methodSequence",
            "One continuous technical loop."
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
      "moves the publication boundary beside the project catalogue",
      () => {

        expect(
          page
        ).toContain(
          "About this showcase"
        );

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
        ).not.toContain(
          'data-company-content-section="public-showcase"'
        );

      }
    );


    it(
      "uses an explicit accessible disclosure contract",
      () => {

        for (
          const token
          of
          [
            '"use client"',
            "aria-expanded",
            "aria-controls",
            "View details",
            "Hide details",
            'role="region"',
            "Work performed",
            "Technical outputs"
          ]
        ) {

          expect(
            disclosure
          ).toContain(
            token
          );

        }

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
      "keeps the authoritative six-stage method",
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
      "uses one consolidated ending",
      () => {

        for (
          const token
          of
          [
            "Explore careers and training.",
            "View careers",
            "View training",
            "Contact No Breach"
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
          "destinationRail"
        );

        expect(
          page
        ).not.toContain(
          "Training Hub"
        );

      }
    );


    it(
      "retains compatibility markers and V22 styling authority",
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
            "NB_INTERNSHIPS_AUDIT_V22"
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
