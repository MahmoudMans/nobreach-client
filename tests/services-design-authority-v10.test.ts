import {
  readFileSync,
} from "node:fs";

import {
  describe,
  expect,
  it,
} from "vitest";


const page =
  readFileSync(
    "src/app/services/page.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/services/services.module.css",
    "utf8"
  );


describe(
  "services design authority v10",
  () => {

    it(
      "uses the No Breach V10 services authority",
      () => {

        expect(
          page
        ).toContain(
          'data-services-design="authority-v10"'
        );


        expect(
          css
        ).toContain(
          "NB_SERVICES_DESIGN_AUTHORITY_V10"
        );

      }
    );


    it(
      "includes the approved Security Consulting content",
      () => {

        expect(
          page
        ).toContain(
          "Security Consulting"
        );


        expect(
          page
        ).toContain(
          "Helping companies understand how to protect themselves"
        );


        expect(
          page
        ).toContain(
          "Security architecture reviews"
        );


        expect(
          page
        ).toContain(
          "Secure workflows and infrastructure guidance"
        );


        expect(
          page
        ).toContain(
          "Internal process hardening"
        );

      }
    );


    it(
      "includes the approved Web Penetration Testing content",
      () => {

        expect(
          page
        ).toContain(
          "Web Penetration Testing"
        );


        expect(
          page
        ).toContain(
          "A thorough, methodical assessment of your web"
        );


        expect(
          page
        ).toContain(
          "In-depth testing of web applications and APIs"
        );


        expect(
          page
        ).toContain(
          "Business logic and authentication flaw identification"
        );


        expect(
          page
        ).toContain(
          "Manual verification of critical vulnerabilities"
        );


        expect(
          page
        ).toContain(
          "Clear reporting with technical and executive summaries"
        );

      }
    );


    it(
      "keeps all four service destinations",
      () => {

        for (
          const href
          of [
            "/services/web-application-pentesting",
            "/services/api-security",
            "/services/infrastructure-security",
            "/services/security-training",
          ]
        ) {

          expect(
            page
          ).toContain(
            href
          );

        }

      }
    );


    it(
      "uses the exact No Breach palette and responsive contracts",
      () => {

        for (
          const color
          of [
            "#83b3d7",
            "#a1e2f0",
            "#7e60b9",
            "#6333c6",
          ]
        ) {

          expect(
            css
          ).toContain(
            color
          );

        }


        expect(
          css
        ).toContain(
          "max-width:\n    1024px"
        );


        expect(
          css
        ).toContain(
          "max-width:\n    768px"
        );


        expect(
          css
        ).toContain(
          "max-width:\n    480px"
        );


        expect(
          css
        ).toContain(
          "prefers-reduced-motion:"
        );

      }
    );

  }
);
