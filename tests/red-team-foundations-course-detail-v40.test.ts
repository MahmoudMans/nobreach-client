import {
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


const component =
  readFileSync(
    "src/app/training/[slug]/red-team-v40.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/training/[slug]/red-team-v40.module.css",
    "utf8"
  );


describe(
  "Red Team Foundations V40 strict course detail",
  () => {

    it(
      "routes only Red Team through its dedicated component",
      () => {

        expect(
          layout
        ).toContain(
          'import { RedTeamV40 } from "./red-team-v40"'
        );


        expect(
          layout
        ).toContain(
          "<RedTeamV40 />"
        );


        expect(
          layout
        ).toContain(
          '"red-team-foundations"'
        );

      }
    );


    it(
      "uses canonical training data rather than duplicated syllabus copy",
      () => {

        expect(
          component
        ).toContain(
          "@/content/training"
        );


        for (
          const token
          of [
            "program.title",
            "program.summary",
            "program.description",
            "program.level",
            "program.format",
            "program.duration",
            "program.objectives",
            "program.modules",
            "program.prerequisites",
            "program.audience",
            "program.outcomes"
          ]
        ) {

          expect(
            component
          ).toContain(
            token
          );

        }

      }
    );


    it(
      "implements the strict course detail sequence",
      () => {

        for (
          const marker
          of [
            'data-red-team-section="course-intro"',
            'data-red-team-section="overview"',
            'data-red-team-section="curriculum"',
            'data-red-team-section="requirements"',
            'data-red-team-section="outcomes"',
            'data-red-team-section="related"',
            'data-red-team-section="academy-cta"'
          ]
        ) {

          expect(
            component
          ).toContain(
            marker
          );

        }

      }
    );


    it(
      "uses one course intro with sticky enrollment card",
      () => {

        expect(
          component
        ).toContain(
          'aria-label="Red Team Foundations enrollment"'
        );


        expect(
          css
        ).toContain(
          "top:\n    104px"
        );


        expect(
          css
        ).toContain(
          "position:\n    sticky"
        );

      }
    );


    it(
      "moves enrollment inline on smaller screens",
      () => {

        expect(
          css
        ).toContain(
          "max-width:\n    900px"
        );


        expect(
          css
        ).toContain(
          "position:\n      static"
        );

      }
    );


    it(
      "uses NoBreach strict palette and spacing",
      () => {

        for (
          const token
          of [
            "#07090d",
            "#0b0f16",
            "#101620",
            "#151d29",
            "#a1e2f0",
            "96px",
            "80px",
            "64px"
          ]
        ) {

          expect(
            css
          ).toContain(
            token
          );

        }

      }
    );

  }
);
