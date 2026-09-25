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
    "src/app/activities/[slug]/red-team-foundations-2026-v49.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/activities/[slug]/red-team-foundations-2026-v49.module.css",
    "utf8"
  );


describe(
  "Red Team Foundations activity V49",
  () => {

    it(
      "has an exclusive route gate",
      () => {

        expect(
          layout
        ).toContain(
          '"red-team-foundations-2026"'
        );


        expect(
          layout
        ).toContain(
          "<RedTeamFoundationsActivityV49 />"
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
      "does not duplicate the course-detail UI",
      () => {

        expect(
          component
        ).not.toContain(
          "Course sections"
        );


        expect(
          component
        ).not.toContain(
          "enrollment"
        );


        expect(
          component
        ).not.toContain(
          "Curriculum"
        );

      }
    );


    it(
      "uses one H1",
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
      "uses the NoBreach visual system",
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
