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
    "src/app/services/infrastructure-security/page.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/services/infrastructure-security/infrastructure-security.module.css",
    "utf8"
  );


describe(
  "Infrastructure Security V24 compatibility + V25 audit",
  () => {

    it(
      "keeps V24 route authority while activating V25",
      () => {

        expect(
          page
        ).toContain(
          'data-infrastructure-design="v24"'
        );

        expect(
          page
        ).toContain(
          'data-infrastructure-audit="v25"'
        );

        expect(
          css
        ).toContain(
          "NB_INFRASTRUCTURE_SECURITY_DESIGN_V24"
        );

        expect(
          css
        ).toContain(
          "NB_INFRASTRUCTURE_SECURITY_AUDIT_V25"
        );

      }
    );


    it(
      "preserves all seven distinct assessment subjects",
      () => {

        for (
          const token
          of
          [
            "External exposure",
            "Network services",
            "Configuration review",
            "Internal attack surface",
            "Privilege paths",
            "Segmentation",
            "Credentials"
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
      "preserves the authorized internal-scope qualification",
      () => {

        expect(
          page
        ).toContain(
          "Inside the authorized scope"
        );

        expect(
          page
        ).toContain(
          "inside the authorized assessment scope"
        );

        expect(
          page
        ).toContain(
          "could lead toward higher privilege"
        );

      }
    );


    it(
      "keeps one clarified exposure-path illustration",
      () => {

        expect(
          page
        ).toContain(
          'data-infrastructure-ui="exposure-path"'
        );

        for (
          const node
          of
          [
            "Internet",
            "Edge",
            "Services",
            "Internal",
            "Privilege"
          ]
        ) {

          expect(
            page
          ).toContain(
            node
          );

        }


        expect(
          page.replace(
            /\s+/g,
            " "
          )
        ).toContain(
          "Illustrative path. Actual relationships and assessment coverage depend on the authorized scope."
        );

      }
    );


    it(
      "removes the radar and redundant framing treatments",
      () => {

        for (
          const retired
          of
          [
            "03 LAYERS",
            "Reachability",
            'data-infrastructure-ui="reporting-register"',
            "From exposure to a report engineering teams can reason about.",
            "Access · Movement · Boundary · Privilege"
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
      "turns reporting into a focused technical record",
      () => {

        expect(
          page
        ).toContain(
          "Inside the technical record"
        );

        for (
          const token
          of
          [
            "Assessed surface",
            "System context",
            "Technical observations"
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
      "uses the shared five-region flow",
      () => {

        for (
          const section
          of
          [
            "hero",
            "external-surface",
            "internal-paths",
            "reporting",
            "cta"
          ]
        ) {

          expect(
            page
          ).toContain(
            `data-infrastructure-section="${section}"`
          );

        }

      }
    );


    it(
      "keeps honest discussion actions",
      () => {

        expect(
          page
        ).toContain(
          "Discuss an assessment"
        );

        expect(
          page
        ).toContain(
          'href="/contact"'
        );

        expect(
          page
        ).toContain(
          "View all services"
        );

        expect(
          page
        ).toContain(
          'href="/services"'
        );

      }
    );

  }
);
