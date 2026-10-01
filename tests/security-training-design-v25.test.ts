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


const normalizedPage =
  page.replace(
    /\s+/g,
    " "
  );


describe(
  "Security Training V25 compatibility + V26 audit",
  () => {

    it(
      "keeps V25 authority while activating V26",
      () => {

        expect(
          page
        ).toContain(
          'data-security-training-design="v25"'
        );

        expect(
          page
        ).toContain(
          'data-security-training-audit="v26"'
        );

        expect(
          css
        ).toContain(
          "NB_SECURITY_TRAINING_CAPABILITY_STUDIO_V25"
        );

        expect(
          css
        ).toContain(
          "NB_SECURITY_TRAINING_AUDIT_V26"
        );

      }
    );


    it(
      "makes the organization-facing service explicit in the opening",
      () => {

        expect(
          normalizedPage
        ).toContain(
          "Practical cybersecurity training for companies, universities, communities and teams, designed to build skills participants can connect to real technical work."
        );

        expect(
          page
        ).not.toContain(
          "for both teams and individuals"
        );

      }
    );


    it(
      "moves the public Training Hub alternative into the opening",
      () => {

        expect(
          page
        ).toContain(
          'data-security-training-ui="training-hub-aside"'
        );

        expect(
          page
        ).toContain(
          "Individual programs"
        );

        expect(
          page
        ).toContain(
          "Looking for a public learner program?"
        );

        expect(
          page
        ).toContain(
          'href="/training"'
        );

      }
    );


    it(
      "preserves all four organization contexts without acronym metadata",
      () => {

        for (
          const title
          of
          [
            "Companies",
            "Universities",
            "Communities",
            "Teams"
          ]
        ) {

          expect(
            page
          ).toContain(
            title
          );

        }


        for (
          const retired
          of
          [
            '"ORG"',
            '"UNI"',
            '"COM"',
            '"TEAM"'
          ]
        ) {

          expect(
            page
          ).not.toContain(
            retired
          );

        }

      }
    );


    it(
      "preserves one four-stage learning sequence without abbreviations",
      () => {

        for (
          const title
          of
          [
            "Context",
            "Design",
            "Practice",
            "Review"
          ]
        ) {

          expect(
            page
          ).toContain(
            title
          );

        }


        for (
          const retired
          of
          [
            '"CTX"',
            '"DSN"',
            '"LAB"',
            '"REV"'
          ]
        ) {

          expect(
            page
          ).not.toContain(
            retired
          );

        }


        expect(
          page
        ).toContain(
          'data-security-training-ui="learning-system"'
        );

      }
    );


    it(
      "removes redundant audience, positioning and journey presentations",
      () => {

        for (
          const retired
          of
          [
            'data-security-training-ui="capability-map"',
            'data-security-training-ui="journey-system"',
            'data-security-training-section="journeys"',
            "Organization-facing training and public programs are different paths.",
            "PRACTICAL · MODERN · APPLICABLE"
          ]
        ) {

          expect(
            page
          ).not.toContain(
            retired
          );

        }

      }
    );


    it(
      "does not invent a concrete training example before approval",
      () => {

        expect(
          page
        ).not.toContain(
          "data-security-training-example"
        );

        expect(
          page
        ).not.toContain(
          "Representative training example"
        );

        expect(
          page
        ).not.toContain(
          "certificate"
        );

      }
    );


    it(
      "keeps honest inquiry and Training Hub destinations",
      () => {

        expect(
          page
        ).toContain(
          "Discuss training"
        );

        expect(
          page
        ).toContain(
          "Start a conversation"
        );

        expect(
          page
        ).toContain(
          'href="/contact"'
        );

        expect(
          page
        ).toContain(
          "Explore Training Hub"
        );

        expect(
          page
        ).toContain(
          'href="/training"'
        );

      }
    );

  }
);
