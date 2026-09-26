import fs from "node:fs";
import path from "node:path";

import {
  describe,
  expect,
  it
} from "vitest";


const root =
  process.cwd();


const template =
  fs.readFileSync(
    path.join(
      root,
      "src/app/training/template.tsx"
    ),
    "utf8"
  );


const component =
  fs.readFileSync(
    path.join(
      root,
      "src/app/training/course-registration-links.tsx"
    ),
    "utf8"
  );


describe(
  "training registration links V2",
  () => {

    it(
      "places registration before course content",
      () => {

        const registrationIndex =
          template.indexOf(
            "<CourseRegistrationLinks />"
          );


        const childrenIndex =
          template.indexOf(
            "{children}"
          );


        expect(
          registrationIndex
        ).toBeGreaterThan(
          -1
        );


        expect(
          childrenIndex
        ).toBeGreaterThan(
          registrationIndex
        );

      }
    );


    it(
      "declares top placement",
      () => {

        expect(
          component
        ).toContain(
          'data-registration-placement="top"'
        );

      }
    );


    it(
      "uses the Red Team registration link",
      () => {

        expect(
          component
        ).toContain(
          "https://forms.gle/xfTXg2r1xVfECvCM8"
        );

      }
    );


    it(
      "uses the AI Security registration link",
      () => {

        expect(
          component
        ).toContain(
          "https://forms.gle/G5VhyDZ8i5EpWYuA6"
        );

      }
    );


    it(
      "uses the Web Exploitation registration link",
      () => {

        expect(
          component
        ).toContain(
          "https://forms.gle/32b6mUKhYWbpz6NF6"
        );

      }
    );


    it(
      "uses an immediately visible registration action",
      () => {

        expect(
          component
        ).toContain(
          "Register now"
        );


        expect(
          component
        ).toContain(
          'target="_blank"'
        );

      }
    );

  }
);
