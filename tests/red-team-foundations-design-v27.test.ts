import {
  existsSync,
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const layout =
  readFileSync(
    "src/app/training/[slug]/layout.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/training/[slug]/training-program-shell.module.css",
    "utf8"
  );


const data =
  readFileSync(
    "src/content/training.ts",
    "utf8"
  );


describe(
  "Red Team Foundations V27 field guide",
  () => {

    it(
      "adds a dedicated red-team route gate",
      () => {

        expect(
          layout
        ).toContain(
          "NB_RED_TEAM_V27_GATE"
        );


        expect(
          layout
        ).toContain(
          '"red-team-foundations"'
        );


        expect(
          layout
        ).toContain(
          'data-red-team-design="v27"'
        );


        expect(
          layout
        ).toContain(
          "styles.redTeam"
        );

      }
    );


    it(
      "adds the adversary operations field-guide design",
      () => {

        expect(
          css
        ).toContain(
          "NB_RED_TEAM_OPERATIONS_FIELD_GUIDE_V27"
        );


        expect(
          css
        ).toContain(
          ".redTeam {"
        );


        expect(
          css
        ).toContain(
          ".redTeamVisual {"
        );

      }
    );


    it(
      "adds a route-specific adversary path visual",
      () => {

        for (
          const token
          of [
            "ADVERSARY PATH",
            "RECON",
            "MAP",
            "TEST",
            "REPORT"
          ]
        ) {

          expect(
            layout
          ).toContain(
            token
          );

        }

      }
    );


    it(
      "preserves canonical Red Team Foundations content",
      () => {

        expect(
          data
        ).toContain(
          "Red Team Foundations"
        );


        expect(
          data
        ).toContain(
          "red-team-foundations"
        );


        expect(
          data
        ).toContain(
          "Reconnaissance"
        );

      }
    );


    it(
      "does not replace the dynamic route with a custom static page",
      () => {

        expect(
          existsSync(
            "src/app/training/red-team-foundations/page.tsx"
          )
        ).toBe(
          false
        );

      }
    );


    it(
      "keeps the AI-specific presentation",
      () => {

        expect(
          layout
        ).toContain(
          "ai-security-foundations"
        );


        expect(
          css
        ).toContain(
          "aiSecurity"
        );

      }
    );

  }
);
