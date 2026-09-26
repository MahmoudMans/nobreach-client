import fs from "node:fs";
import path from "node:path";

import {
  describe,
  expect,
  it
} from "vitest";


const root =
  process.cwd();


const component =
  fs.readFileSync(
    path.join(
      root,
      "src/app/training/course-registration-links.tsx"
    ),
    "utf8"
  );


const template =
  fs.readFileSync(
    path.join(
      root,
      "src/app/training/template.tsx"
    ),
    "utf8"
  );


describe(
  "training mentorship registration links V1",
  () => {

    it(
      "maps Red Team Foundations to the supplied form",
      () => {

        expect(
          component
        ).toContain(
          '"red-team-foundations"'
        );


        expect(
          component
        ).toContain(
          "https://forms.gle/xfTXg2r1xVfECvCM8"
        );

      }
    );


    it(
      "maps AI Security Foundations to the supplied form",
      () => {

        expect(
          component
        ).toContain(
          '"ai-security-foundations"'
        );


        expect(
          component
        ).toContain(
          "https://forms.gle/G5VhyDZ8i5EpWYuA6"
        );

      }
    );


    it(
      "maps Web Exploitation Techniques to the supplied form",
      () => {

        expect(
          component
        ).toContain(
          '"web-exploitation-techniques"'
        );


        expect(
          component
        ).toContain(
          "https://forms.gle/32b6mUKhYWbpz6NF6"
        );

      }
    );


    it(
      "renders links as external registration actions",
      () => {

        expect(
          component
        ).toContain(
          'target="_blank"'
        );


        expect(
          component
        ).toContain(
          'rel="noreferrer"'
        );


        expect(
          component
        ).toContain(
          "Register"
        );

      }
    );


    it(
      "is injected without modifying individual course implementations",
      () => {

        expect(
          template
        ).toContain(
          "<CourseRegistrationLinks />"
        );


        expect(
          template
        ).toContain(
          "{children}"
        );

      }
    );

  }
);
