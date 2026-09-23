import {
  existsSync,
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const read = (
  file:
    string
) =>
  readFileSync(
    file,
    "utf8"
  );


describe(
  "No Breach company family V14",
  () => {

    const familyCss =
      read(
        "src/app/company/company-family.module.css"
      );


    it(
      "defines the shared Company-family design system",
      () => {

        expect(
          familyCss
        ).toContain(
          "NB_COMPANY_FAMILY_DESIGN_V14"
        );


        for (
          const token
          of [
            "#07090d",
            "#0b0f16",
            "#101620",
            "#a1e2f0",
            "#83b3d7",
            "#7e60b9",
            "#6333c6",
            "1280px",
            "96px",
            "64px"
          ]
        ) {

          expect(
            familyCss
          ).toContain(
            token
          );

        }

      }
    );


    it(
      "loads the requested company typography family",
      () => {

        const layout =
          read(
            "src/app/company/layout.tsx"
          );


        expect(
          layout
        ).toContain(
          "Space_Grotesk"
        );

        expect(
          layout
        ).toContain(
          "Inter"
        );

        expect(
          layout
        ).toContain(
          "IBM_Plex_Mono"
        );

      }
    );


    it(
      "has dedicated styling for all Company routes",
      () => {

        expect(
          existsSync(
            "src/app/company/team/team.module.css"
          )
        ).toBe(
          true
        );


        expect(
          read(
            "src/app/company/team/team.module.css"
          )
        ).toContain(
          "NB_COMPANY_TEAM_DESIGN_V14"
        );


        expect(
          read(
            "src/app/company/internships/internships.module.css"
          )
        ).toContain(
          "NB_COMPANY_INTERNSHIPS_DESIGN_V14"
        );

      }
    );


    it(
      "removes Company-family secondary navigation bars",
      () => {

        expect(
          read(
            "src/app/company/page.tsx"
          )
        ).not.toContain(
          'aria-label="Company sections"'
        );


        expect(
          read(
            "src/app/company/founder/page.tsx"
          )
        ).not.toContain(
          'aria-label="Founder page sections"'
        );

      }
    );


    it(
      "preserves the real founder portrait",
      () => {

        const founder =
          read(
            "src/app/company/founder/page.tsx"
          );


        expect(
          founder
        ).toContain(
          'src="/people/ceo.png"'
        );

        expect(
          founder
        ).toContain(
          'data-founder-photo-image="profile"'
        );

      }
    );


    it(
      "keeps Team data sourced from the confirmed Team content model",
      () => {

        expect(
          read(
            "src/app/company/team/page.tsx"
          )
        ).toContain(
          'member.status ==='
        );

        expect(
          read(
            "src/app/company/team/page.tsx"
          )
        ).toContain(
          '"current"'
        );

      }
    );


    it(
      "keeps internship content data-driven",
      () => {

        const internships =
          read(
            "src/app/company/internships/page.tsx"
          );


        expect(
          internships
        ).toContain(
          "internshipProjects.map"
        );

        expect(
          internships
        ).toContain(
          "internshipMethod.map"
        );

        expect(
          internships
        ).toContain(
          "internshipPublicNote"
        );

      }
    );

  }
);
