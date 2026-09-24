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
  "Academy continuous design system",
  () => {

    it(
      "uses one Academy PageIntro and no page-level navigation",
      () => {

        expect(
          page
        ).toContain(
          'data-training-academy="continuous-v1"'
        );


        expect(
          page.match(
            /<h1(?:\s|>)/g
          )
          ??
          []
        ).toHaveLength(
          1
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


        expect(
          page
        ).not.toContain(
          "<nav"
        );

      }
    );


    it(
      "uses the canonical Academy section order",
      () => {

        const sections =
          page.match(
            /data-training-section="[^"]+"/g
          )
          ??
          [];


        expect(
          sections
        ).toEqual([
          'data-training-section="intro"',
          'data-training-section="paths"',
          'data-training-section="courses"',
          'data-training-section="practice"',
          'data-training-section="method"',
          'data-training-section="outcomes"',
          'data-training-section="faq"',
          'data-training-section="cta"'
        ]);

      }
    );


    it(
      "remains bound to canonical trainingPrograms",
      () => {

        expect(
          page
        ).toContain(
          'from "@/content/training"'
        );


        expect(
          page
        ).toContain(
          "trainingPrograms.map"
        );


        expect(
          page
        ).toContain(
          "`/training/${program.slug}`"
        );

      }
    );


    it(
      "renders consistent program cards",
      () => {

        expect(
          page
        ).toContain(
          "data-training-program"
        );


        for (
          const token
          of [
            "program.category",
            "program.title",
            "program.summary",
            "program.level",
            "program.format",
            "program.duration",
            "program.status",
            "program.modules.length"
          ]
        ) {

          expect(
            page
          ).toContain(
            token
          );

        }

      }
    );


    it(
      "uses real canonical modules and outcomes",
      () => {

        expect(
          page
        ).toContain(
          "featuredPractice.modules"
        );


        expect(
          page
        ).toContain(
          "program.outcomes"
        );

      }
    );


    it(
      "keeps public learner and organization training separate",
      () => {

        expect(
          page
        ).toContain(
          "public Academy"
        );


        expect(
          page
        ).toContain(
          "Security Training service"
        );

      }
    );


    it(
      "uses the final NoBreach palette and fonts",
      () => {

        for (
          const token
          of [
            "#07090d",
            "#0b0f16",
            "#101620",
            "#151d29",
            "#a1e2f0",
            "#83b3d7",
            "#7e60b9",
            '"Space Grotesk"',
            '"Inter"',
            '"IBM Plex Mono"'
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


    it(
      "supports responsive accessible interaction",
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
          "min-height:\n    48px"
        );


        expect(
          css
        ).toContain(
          "prefers-reduced-motion"
        );

      }
    );

  }
);
