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
    "src/app/activities/[slug]/layout.tsx",
    "utf8"
  );


const component =
  readFileSync(
    "src/app/activities/[slug]/ai-security-foundations-2026-v50.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/activities/[slug]/ai-security-foundations-2026-v50.module.css",
    "utf8"
  );


describe(
  "AI Security Foundations activity V50",
  () => {

    it(
      "uses an exclusive activity-detail route",
      () => {

        expect(
          layout
        ).toContain(
          '"ai-security-foundations-2026"'
        );


        expect(
          layout
        ).toContain(
          "<AISecurityFoundationsActivityV50 />"
        );


        expect(
          layout
        ).toContain(
          "return children"
        );

      }
    );


    it(
      "uses canonical activity content",
      () => {

        expect(
          component
        ).toContain(
          "@/content/activities"
        );


        for (
          const token
          of [
            "activity.title",
            "activity.year",
            "activity.category",
            "activity.summary",
            "activity.description",
            "activity.location",
            "activity.highlights",
            "activity.sections",
            "activity.relatedTrainingSlug"
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
      "uses a controlled AI system visual",
      () => {

        for (
          const token
          of [
            "PROMPT",
            "MODEL",
            "TOOL",
            "ACTION"
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
      "does not duplicate course-detail architecture",
      () => {

        expect(
          component
        ).not.toContain(
          "Course sections"
        );


        expect(
          component
        ).not.toContain(
          "View curriculum"
        );


        expect(
          component
        ).not.toContain(
          "enrollment"
        );

      }
    );


    it(
      "has one H1",
      () => {

        expect(
          component.match(
            /<h1>/g
          )
          ??
          []
        ).toHaveLength(
          1
        );

      }
    );


    it(
      "uses NoBreach visual tokens",
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
