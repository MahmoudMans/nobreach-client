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
  "API Security V23 trust boundary system",
  () => {

    it(
      "activates the dedicated API Security authority",
      () => {

        expect(
          page
        ).toContain(
          'data-api-security-design="v23"'
        );


        expect(
          css
        ).toContain(
          "NB_API_SECURITY_TRUST_BOUNDARY_SYSTEM_V23"
        );

      }
    );


    it(
      "contains every approved API security focus area",
      () => {

        for (
          const focus
          of [
            "REST APIs",
            "GraphQL",
            "Authentication",
            "Authorization",
            "BOLA / IDOR",
            "Object-level access",
            "Function-level authorization",
            "Token security",
            "Rate limiting",
            "Business logic",
            "Data exposure"
          ]
        ) {

          expect(
            page
          ).toContain(
            focus
          );

        }

      }
    );


    it(
      "models identity object and function authorization boundaries",
      () => {

        for (
          const boundary
          of [
            "Identity boundary",
            "Object boundary",
            "Function boundary"
          ]
        ) {

          expect(
            page
          ).toContain(
            boundary
          );

        }


        expect(
          page
        ).toContain(
          'data-api-ui="boundary-system"'
        );

      }
    );


    it(
      "preserves the existing service workflow and FAQ contract",
      () => {

        expect(
          page
        ).toContain(
          "From initial context to actionable reporting."
        );


        expect(
          page
        ).toContain(
          "Does API testing include authorization?"
        );

      }
    );


    it(
      "does not claim formal OWASP certification",
      () => {

        expect(
          page.toLowerCase()
        ).not.toContain(
          "owasp certified"
        );


        expect(
          page.toLowerCase()
        ).not.toContain(
          "owasp certification"
        );

      }
    );


    it(
      "uses three primary service chapters",
      () => {

        for (
          const section
          of [
            "attack-surface",
            "authorization",
            "validation-reporting"
          ]
        ) {

          expect(
            page
          ).toContain(
            `data-api-section="${section}"`
          );

        }

      }
    );

  }
);
