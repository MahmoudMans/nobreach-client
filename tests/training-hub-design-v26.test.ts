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


describe(
  "Training Hub V26 cybersecurity learning range",
  () => {

    it(
      "activates the V26 training authority",
      () => {

        expect(
          page
        ).toContain(
          'data-training-hub-design="v26"'
        );


        expect(
          css
        ).toContain(
          "NB_TRAINING_LEARNING_RANGE_V26"
        );

      }
    );


    it(
      "keeps the approved Training Hub identity",
      () => {

        expect(
          page
        ).toContain(
          "NO BREACH"
        );


        expect(
          page
        ).toContain(
          "TRAINING HUB"
        );


        expect(
          page
        ).toContain(
          "Learn cybersecurity"
        );


        expect(
          page
        ).toContain(
          "by doing cybersecurity."
        );

      }
    );


    it(
      "uses the canonical training program data source",
      () => {

        expect(
          page
        ).toContain(
          '@/content/training'
        );


        expect(
          page
        ).toContain(
          'trainingPrograms as programs'
        );


        expect(
          page
        ).toContain(
          "programs.filter"
        );


        expect(
          page
        ).toContain(
          "program.audience"
        );

      }
    );


    it(
      "supports only the approved program statuses",
      () => {

        for (
          const status
          of [
            "AVAILABLE",
            "UPCOMING",
            "ARCHIVED"
          ]
        ) {

          expect(
            page
          ).toContain(
            status
          );

        }

      }
    );


    it(
      "uses three primary content chapters",
      () => {

        for (
          const section
          of [
            "programs",
            "learning-model",
            "learner-context"
          ]
        ) {

          expect(
            page
          ).toContain(
            `data-training-section="${section}"`
          );

        }

      }
    );


    it(
      "keeps public and organization training separate",
      () => {

        expect(
          page
        ).toContain(
          'href="/services/security-training"'
        );


        expect(
          page
        ).toContain(
          "Organization training"
        );

      }
    );


    it(
      "does not use a course card wall",
      () => {

        expect(
          page
        ).toContain(
          "styles.programRow"
        );


        expect(
          page
        ).not.toContain(
          "styles.programCard"
        );


        expect(
          page
        ).not.toContain(
          "styles.courseCard"
        );

      }
    );


    it(
      "keeps exactly one primary heading",
      () => {

        expect(
          (
            page.match(
              /<h1>/g
            )
            ??
            []
          ).length
        ).toBe(
          1
        );

      }
    );

  }
);
