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
    "src/app/page.tsx",
    "utf8"
  );

const css =
  readFileSync(
    "src/app/home.module.css",
    "utf8"
  );

const header =
  readFileSync(
    "src/components/layout/site-header.module.css",
    "utf8"
  );

const footer =
  readFileSync(
    "src/components/layout/site-footer.tsx",
    "utf8"
  );

const footerCss =
  readFileSync(
    "src/components/layout/site-footer.module.css",
    "utf8"
  );


describe(
  "homepage second-iteration audit v13",
  () => {

    it(
      "preserves V12 architecture",
      () => {

        expect(
          page
        ).toContain(
          'data-home-redesign="editorial-v12"'
        );

        expect(
          page
        ).toContain(
          'data-home-correction="audit-v13"'
        );

        expect(
          page.match(
            /data-home-chapter="/g
          )
          ??
          []
        ).toHaveLength(
          8
        );

      }
    );


    it(
      "uses visitor-facing public copy",
      () => {

        for (
          const token
          of
          [
            "Build practical cybersecurity skills.",
            "Security assessments and practical training.",
            "Remediation guidance",
            "Compare cybersecurity programs by level, format and curriculum.",
            "See how Red Team Foundations progresses from reconnaissance",
            "Explore CR4CKOUT, technical activities and past events",
            "Meet the founder.",
            "Practical security insights."
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
      "removes design commentary",
      () => {

        expect(
          page
        ).not.toContain(
          "Instead of repeating another course card"
        );

        expect(
          page
        ).not.toContain(
          "The layout reflects the amount of approved public profile data available today"
        );

      }
    );


    it(
      "keeps missing duration truthful",
      () => {

        expect(
          page
        ).toContain(
          'program.duration ?? "Not specified"'
        );

        expect(
          page
        ).toContain(
          'data-home-curriculum-preview="true"'
        );

      }
    );


    it(
      "targets the actual current component system",
      () => {

        expect(
          css
        ).toContain(
          "NB_HOME_AUDIT_CORRECTION_V13"
        );

        for (
          const selector
          of
          [
            ".serviceCard",
            ".decisionGrid",
            ".courseGrid",
            ".courseMeta",
            ".curriculumPreview",
            ".heroPrinciples",
            ".specialtyList"
          ]
        ) {

          expect(
            css
          ).toContain(
            selector
          );

        }

      }
    );


    it(
      "aligns navigation to page geometry",
      () => {

        expect(
          header
        ).toContain(
          "NB_HOME_AUDIT_FRAME_V13"
        );

        expect(
          header
        ).toContain(
          "calc(100% - 64px)"
        );

        expect(
          header
        ).toContain(
          "var(--container-default)"
        );

      }
    );


    it(
      "normalizes footer terminology and rhythm",
      () => {

        expect(
          footer
        ).toContain(
          '["/training", "Training"]'
        );

        expect(
          footer
        ).not.toContain(
          '["/training", "Training Hub"]'
        );

        expect(
          footerCss
        ).toContain(
          "NB_HOME_AUDIT_FOOTER_V13"
        );

      }
    );

  }
);
