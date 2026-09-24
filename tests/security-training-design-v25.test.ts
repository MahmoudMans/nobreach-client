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
    "src/app/services/security-training/page.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/services/security-training/security-training.module.css",
    "utf8"
  );


describe(
  "Security Training V25 capability studio",
  () => {

    it(
      "activates the dedicated security-training authority",
      () => {

        expect(
          page
        ).toContain(
          'data-security-training-design="v25"'
        );


        expect(
          css
        ).toContain(
          "NB_SECURITY_TRAINING_CAPABILITY_STUDIO_V25"
        );

      }
    );


    it(
      "preserves the approved organization audiences",
      () => {

        for (
          const audience
          of [
            "Companies",
            "Universities",
            "Communities",
            "Teams"
          ]
        ) {

          expect(
            page
          ).toContain(
            audience
          );

        }

      }
    );


    it(
      "preserves approved practical training positioning",
      () => {

        expect(
          page
        ).toContain(
          "Practical, modern training designed to build real, applicable skills for both teams and individuals."
        );


        expect(
          page
        ).toContain(
          "Practical"
        );


        expect(
          page
        ).toContain(
          "Modern"
        );


        expect(
          page
        ).toContain(
          "Applicable"
        );

      }
    );


    it(
      "separates organization-facing training from public programs",
      () => {

        expect(
          page
        ).toContain(
          "/services/security-training"
        );


        expect(
          page
        ).toContain(
          'href="/training"'
        );


        expect(
          page
        ).toContain(
          "Training Hub"
        );


        expect(
          page
        ).toContain(
          "Public learner programs"
        );

      }
    );


    it(
      "uses four audience rows and four learning steps",
      () => {

        expect(
          page
        ).toContain(
          "audiences.map"
        );


        expect(
          page
        ).toContain(
          "learningArchitecture.map"
        );


        expect(
          page
        ).toContain(
          'data-security-training-ui="audience-index"'
        );


        expect(
          page
        ).toContain(
          'data-security-training-ui="learning-system"'
        );

      }
    );


    it(
      "does not invent certification duration or generic detail styling",
      () => {

        const lower =
          page.toLowerCase();


        for (
          const unsupported
          of [
            "certified course",
            "official certification",
            "guaranteed certification",
            "2-day training",
            "3-day training",
            "5-day training"
          ]
        ) {

          expect(
            lower
          ).not.toContain(
            unsupported
          );

        }


        expect(
          page
        ).not.toContain(
          "pages.module.css"
        );

      }
    );


    it(
      "keeps one primary heading",
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
