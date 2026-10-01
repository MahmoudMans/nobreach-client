import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const component =
  readFileSync(
    "src/app/training/course-registration-links.tsx",
    "utf8"
  );


const page =
  readFileSync(
    "src/app/training/page.tsx",
    "utf8"
  );


const template =
  readFileSync(
    "src/app/training/template.tsx",
    "utf8"
  );


describe(
  "training registration links V3",
  () => {

    it(
      "keeps registration mounted before route children",
      () => {

        expect(
          template.indexOf(
            "<CourseRegistrationLinks"
          )
        ).toBeGreaterThanOrEqual(
          0
        );

        expect(
          template.indexOf(
            "<CourseRegistrationLinks"
          )
        ).toBeLessThan(
          template.indexOf(
            "{children}"
          )
        );

      }
    );


    it(
      "does not render the top strip on the Training index",
      () => {

        expect(
          component
        ).toContain(
          'pathname\n    ===\n    "/training"'
        );

        expect(
          component
        ).toContain(
          "return null"
        );

      }
    );


    it(
      "exports a card-level registration action",
      () => {

        expect(
          component
        ).toContain(
          "export function TrainingRegistrationAction"
        );

        expect(
          page
        ).toContain(
          "<TrainingRegistrationAction"
        );

      }
    );


    it(
      "preserves Red Team registration",
      () => {

        expect(
          component
        ).toContain(
          "https://forms.gle/xfTXg2r1xVfECvCM8"
        );

      }
    );


    it(
      "preserves AI Security registration",
      () => {

        expect(
          component
        ).toContain(
          "https://forms.gle/G5VhyDZ8i5EpWYuA6"
        );

      }
    );


    it(
      "preserves Web Exploitation registration",
      () => {

        expect(
          component
        ).toContain(
          "https://forms.gle/32b6mUKhYWbpz6NF6"
        );

      }
    );


    it(
      "keeps top placement on individual detail routes",
      () => {

        expect(
          component
        ).toContain(
          'data-registration-placement="top"'
        );

        expect(
          component
        ).toContain(
          "selectedProgram"
        );

      }
    );

  }
);
