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
    "src/app/training/page.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/training/training.module.css",
    "utf8"
  );


const normalizedPage =
  page.replace(
    /\s+/g,
    " "
  );


describe(
  "Training Hub V26 compatibility + V27 audit",
  () => {

    it(
      "keeps continuous authority while activating V27",
      () => {

        expect(
          page
        ).toContain(
          'data-training-academy="continuous-v1"'
        );

        expect(
          page
        ).toContain(
          'data-training-hub-audit="v27"'
        );

        expect(
          css
        ).toContain(
          "NB_TRAINING_HUB_AUDIT_V27"
        );

      }
    );


    it(
      "uses one learner-facing introduction",
      () => {

        expect(
          normalizedPage
        ).toContain(
          "Explore public learning programs in offensive security, web security and AI security."
        );

        expect(
          page
        ).toContain(
          "Explore programs"
        );

        expect(
          page
        ).toContain(
          "Ask about a program"
        );

        expect(
          page
        ).toContain(
          "/services/security-training"
        );

      }
    );


    it(
      "uses canonical training data for one catalogue",
      () => {

        expect(
          page
        ).toContain(
          'from "@/content/training"'
        );

        expect(
          page
        ).toContain(
          'data-training-ui="program-catalogue"'
        );

        expect(
          page
        ).toContain(
          "trainingPrograms.map"
        );

      }
    );


    it(
      "places comparison metadata and learning aims together",
      () => {

        for (
          const token
          of
          [
            "Level",
            "Format",
            "Sessions",
            "Modules",
            "Learning aims",
            "program.outcomes",
            "program.modules.length"
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
        ).toContain(
          '"Not specified"'
        );

      }
    );


    it(
      "preserves curriculum previews and one learning sequence",
      () => {

        expect(
          page
        ).toContain(
          "Preview the technical content."
        );

        expect(
          page
        ).toContain(
          "View complete curriculum"
        );

        expect(
          page
        ).toContain(
          "How learning progresses."
        );

        for (
          const stage
          of
          [
            "Understand",
            "Practice",
            "Investigate",
            "Apply"
          ]
        ) {

          expect(
            page
          ).toContain(
            stage
          );

        }

      }
    );


    it(
      "removes the duplicated index outcomes and decorative hero language",
      () => {

        for (
          const retired
          of
          [
            'data-training-section="paths"',
            'data-training-section="courses"',
            'data-training-section="outcomes"',
            "PRACTICE MODE",
            "Each path is connected to a real published NoBreach program rather than a separate navigation system.",
            "canonical course data"
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
      "keeps four FAQ questions and preserves the archive explanation",
      () => {

        expect(
          page
        ).toContain(
          "What does an archived program mean?"
        );

        expect(
          page
        ).toContain(
          "Archived identifies a program that is not currently presented as an active public edition."
        );

        expect(
          page
        ).toContain(
          "Explore Security Training Service"
        );

      }
    );


    it(
      "keeps collection-level closing actions",
      () => {

        expect(
          page
        ).toContain(
          "Build your next security capability."
        );

        expect(
          page
        ).toContain(
          "Explore programs"
        );

        expect(
          page
        ).toContain(
          "Ask about a program"
        );

        expect(
          page
        ).not.toContain(
          "Explore available program"
        );

      }
    );

  }
);
