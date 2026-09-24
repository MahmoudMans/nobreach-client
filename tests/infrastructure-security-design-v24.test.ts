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
  "Infrastructure Security V24 exposure graph",
  () => {

    it(
      "activates the dedicated V24 design",
      () => {

        expect(
          page
        ).toContain(
          'data-infrastructure-design="v24"'
        );


        expect(
          css
        ).toContain(
          "NB_INFRASTRUCTURE_EXPOSURE_GRAPH_V24"
        );

      }
    );


    it(
      "preserves every approved infrastructure section",
      () => {

        for (
          const area
          of [
            "External exposure",
            "Internal attack surface",
            "Network services",
            "Configuration review",
            "Privilege paths",
            "Segmentation",
            "Credentials",
            "Reporting"
          ]
        ) {

          expect(
            page
          ).toContain(
            area
          );

        }

      }
    );


    it(
      "uses the infrastructure exposure graph",
      () => {

        expect(
          page
        ).toContain(
          'data-infrastructure-ui="exposure-graph"'
        );


        for (
          const label
          of [
            "INTERNET",
            "EDGE",
            "SERVICES",
            "INTERNAL",
            "PRIVILEGE"
          ]
        ) {

          expect(
            page
          ).toContain(
            label
          );

        }

      }
    );


    it(
      "uses three primary infrastructure chapters",
      () => {

        for (
          const section
          of [
            "external-surface",
            "internal-paths",
            "reporting"
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
      "does not fall back to generic service-detail styling",
      () => {

        expect(
          page
        ).not.toContain(
          "pages.module.css"
        );


        expect(
          page
        ).not.toContain(
          "ServiceDetail"
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
