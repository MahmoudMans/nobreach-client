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
    "src/app/services/api-security/page.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/services/api-security/api-security.module.css",
    "utf8"
  );


describe(
  "API Security V23 compatibility + V24 audit",
  () => {

    it(
      "keeps V23 authority while activating V24",
      () => {

        expect(
          page
        ).toContain(
          'data-api-security-design="v23"'
        );

        expect(
          page
        ).toContain(
          'data-api-security-audit="v24"'
        );

        expect(
          css
        ).toContain(
          "NB_API_SECURITY_TRUST_BOUNDARY_SYSTEM_V23"
        );

        expect(
          css
        ).toContain(
          "NB_API_SECURITY_AUDIT_V24"
        );

      }
    );


    it(
      "consolidates REST and GraphQL into interface panels",
      () => {

        expect(
          page
        ).toContain(
          "Interfaces assessed"
        );

        expect(
          page
        ).toContain(
          "REST APIs"
        );

        expect(
          page
        ).toContain(
          "GraphQL"
        );

        expect(
          page
        ).not.toContain(
          "Protocol"
        );

        expect(
          page
        ).not.toContain(
          'data-api-ui="focus-index"'
        );

      }
    );


    it(
      "preserves identity object and function boundaries",
      () => {

        for (
          const token
          of
          [
            "Identity boundary",
            "Object boundary",
            "Function boundary",
            "Object-level access · BOLA / IDOR"
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
      "keeps the four additional assessment areas",
      () => {

        for (
          const token
          of
          [
            "Token security",
            "Rate limiting",
            "Business logic",
            "Data exposure"
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
      "preserves the five-stage workflow and identity qualification",
      () => {

        for (
          const token
          of
          [
            "Context",
            "Surface map",
            "Identity matrix",
            "Validation",
            "Reporting",
            "where supplied for the assessment"
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
      "preserves all four assessment outputs",
      () => {

        for (
          const token
          of
          [
            "API surface map",
            "Access-control evidence",
            "Validated findings",
            "Remediation guidance"
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
      "keeps the three FAQ questions with native disclosures",
      () => {

        for (
          const question
          of
          [
            "Does API testing include authorization?",
            "Can the assessment cover REST and GraphQL?",
            "Does the assessment look beyond authentication?"
          ]
        ) {

          expect(
            page
          ).toContain(
            question
          );

        }


        expect(
          page
        ).toContain(
          "<details"
        );

        expect(
          page
        ).toContain(
          "<summary>"
        );

        expect(
          page
        ).toContain(
          "styles.faqTrigger"
        );

      }
    );


    it(
      "uses qualified discussion wording",
      () => {

        expect(
          page
        ).toContain(
          "Understand your API&apos;s access boundaries."
        );

        expect(
          page
        ).toContain(
          "Discuss an API assessment"
        );

        expect(
          page
        ).toContain(
          'href="/contact"'
        );

        expect(
          page
        ).not.toContain(
          "Know what every identity can really do."
        );

      }
    );

  }
);
