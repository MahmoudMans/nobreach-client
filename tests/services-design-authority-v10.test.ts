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
    "src/app/services/page.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/services/services.module.css",
    "utf8"
  );


describe(
  "Services V10 compatibility + audit V11",
  () => {

    it(
      "preserves V10 authority and activates V11",
      () => {

        expect(
          page
        ).toContain(
          'data-services-design="authority-v10"'
        );

        expect(
          page
        ).toContain(
          'data-services-audit="v11"'
        );

        expect(
          css
        ).toContain(
          "NB_SERVICES_DESIGN_AUTHORITY_V10"
        );

        expect(
          css
        ).toContain(
          "NB_SERVICES_AUDIT_V11"
        );

      }
    );


    it(
      "puts the four service choices before consulting",
      () => {

        const directory =
          page.indexOf(
            'data-services-section="directory"'
          );

        const consulting =
          page.indexOf(
            'data-services-section="consulting"'
          );


        expect(
          directory
        ).toBeGreaterThan(
          0
        );

        expect(
          consulting
        ).toBeGreaterThan(
          directory
        );


        for (
          const title
          of
          [
            "Web Penetration Testing",
            "API Security",
            "Infrastructure Security",
            "Cybersecurity Training"
          ]
        ) {

          expect(
            page
          ).toContain(
            title
          );

        }

      }
    );


    it(
      "preserves consulting and featured assessment specifics",
      () => {

        for (
          const content
          of
          [
            "Security architecture reviews",
            "Secure workflows and infrastructure guidance",
            "Internal process hardening, including access control and data handling",
            "In-depth testing of web applications and APIs.",
            "Business logic and authentication flaw identification.",
            "Manual verification of critical vulnerabilities.",
            "Clear reporting with technical and executive summaries."
          ]
        ) {

          expect(
            page
          ).toContain(
            content
          );

        }

      }
    );


    it(
      "keeps both actual training destinations inside the directory model",
      () => {

        expect(
          page
        ).toContain(
          '"/services/security-training"'
        );

        expect(
          page
        ).toContain(
          '"/training"'
        );

        expect(
          page
        ).toContain(
          "View training service"
        );

        expect(
          page
        ).toContain(
          "Explore training programs"
        );

        expect(
          page
        ).not.toContain(
          'data-services-section="training"'
        );

      }
    );


    it(
      "uses contact semantics instead of claiming a booking workflow",
      () => {

        expect(
          page
        ).toContain(
          'href="/contact"'
        );

        expect(
          page
        ).toContain(
          "Discuss your needs"
        );

        expect(
          page
        ).toContain(
          "Discuss your security needs."
        );

        expect(
          page
        ).not.toContain(
          "Book a consultation"
        );

        expect(
          page
        ).not.toContain(
          "Unsure how it works?"
        );

      }
    );


    it(
      "keeps service-row state feedback geometry stable",
      () => {

        const hoverStart =
          css.indexOf(
            ".serviceRow:hover"
          );

        const numberStart =
          css.indexOf(
            ".serviceNumber"
          );


        expect(
          hoverStart
        ).toBeGreaterThan(
          0
        );

        expect(
          numberStart
        ).toBeGreaterThan(
          hoverStart
        );


        const hoverBlock =
          css.slice(
            hoverStart,
            numberStart
          );


        expect(
          hoverBlock
        ).not.toContain(
          "transform:"
        );

        expect(
          hoverBlock
        ).not.toContain(
          "padding:"
        );

        expect(
          hoverBlock
        ).not.toContain(
          "margin:"
        );

      }
    );

  }
);
