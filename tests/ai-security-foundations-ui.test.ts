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


const shell =
  readFileSync(
    "src/app/training/[slug]/training-program-shell.module.css",
    "utf8"
  );


const component =
  readFileSync(
    "src/app/training/[slug]/ai-security-course-detail.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/training/[slug]/ai-security-course-detail.module.css",
    "utf8"
  );


describe(
  "AI Security Foundations course-detail design",
  () => {

    it(
      "binds the new course detail only to the AI route",
      () => {

        expect(
          layout
        ).toContain(
          "AISecurityCourseDetail"
        );


        expect(
          layout
        ).toContain(
          "styles.aiSecurityCourseShell"
        );


        expect(
          layout
        ).toContain(
          'data-ai-security-design={isAiSecurity ? "course-detail" : undefined}'
        );


        expect(
          layout
        ).not.toContain(
          "AISecurityV39"
        );

      }
    );


    it(
      "retires the V39 page implementation",
      () => {

        expect(
          existsSync(
            "src/app/training/[slug]/ai-security-v39.tsx"
          )
        ).toBe(
          false
        );


        expect(
          existsSync(
            "src/app/training/[slug]/ai-security-v39.module.css"
          )
        ).toBe(
          false
        );

      }
    );


    it(
      "uses the canonical course-detail architecture",
      () => {

        for (
          const value
          of [
            'data-ai-course-section="intro"',
            'data-ai-course-section="overview"',
            'data-ai-course-section="curriculum"',
            'data-ai-course-section="requirements"',
            'data-ai-course-section="outcomes"',
            'data-ai-course-section="related"',
            'data-ai-course-section="cta"',
            'aria-label="Course sections"',
            "data-course-enrollment"
          ]
        ) {

          expect(
            component
          ).toContain(
            value
          );

        }

      }
    );


    it(
      "uses the shared NoBreach visual language",
      () => {

        for (
          const value
          of [
            "#07090d",
            "#0b0f16",
            "#101620",
            "#151d29",
            "#a1e2f0",
            '"Space Grotesk"',
            '"Inter"',
            '"IBM Plex Mono"'
          ]
        ) {

          expect(
            css
          ).toContain(
            value
          );

        }

      }
    );


    it(
      "uses the documented sticky enrollment behavior",
      () => {

        expect(
          css
        ).toContain(
          "position:\n    sticky;"
        );


        expect(
          css
        ).toContain(
          "top:\n    104px;"
        );


        expect(
          css
        ).toContain(
          "position:\n      static;"
        );

      }
    );


    it(
      "contains accessibility and mobile contracts",
      () => {

        expect(
          css
        ).toContain(
          ":focus-visible"
        );


        expect(
          css
        ).toContain(
          "outline:\n    2px"
        );


        expect(
          css
        ).toContain(
          "min-height:\n    48px;"
        );


        expect(
          css
        ).toContain(
          "prefers-reduced-motion"
        );

      }
    );


    it(
      "uses one dedicated isolated route shell",
      () => {

        expect(
          shell
        ).toContain(
          "NB_AI_SECURITY_COURSE_DETAIL_SHELL"
        );


        expect(
          shell
        ).toContain(
          ".aiSecurityCourseShell"
        );

      }
    );

  }
);
