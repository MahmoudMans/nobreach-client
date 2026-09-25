import fs from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const page =
  fs.readFileSync(
    "src/app/contact/page.tsx",
    "utf8"
  );


const css =
  fs.readFileSync(
    "src/app/contact/contact.module.css",
    "utf8"
  );


const form =
  fs.readFileSync(
    "src/app/contact/consultation-intake-form.tsx",
    "utf8"
  );


describe(
  "Contact strict architecture V11",
  () => {

    it(
      "uses one compact PageIntro without a breadcrumb",
      () => {

        expect(
          page
        ).toContain(
          'data-contact-section="intro"'
        );


        expect(
          page
        ).not.toContain(
          "Breadcrumb"
        );


        expect(
          page
        ).not.toContain(
          "<nav"
        );

      }
    );


    it(
      "renders exactly one H1",
      () => {

        expect(
          page.match(
            /<h1>/g
          )?.length
        ).toBe(
          1
        );

      }
    );


    it(
      "uses a single ContactMain with information before form",
      () => {

        expect(
          page
        ).toContain(
          'data-contact-main'
        );


        expect(
          page.indexOf(
            "data-contact-information"
          )
        ).toBeLessThan(
          page.indexOf(
            "data-contact-form-column"
          )
        );

      }
    );


    it(
      "preserves the consultation intake component",
      () => {

        expect(
          page
        ).toContain(
          "<ConsultationIntakeForm />"
        );


        expect(
          form
        ).toContain(
          "data-consultation-form"
        );

      }
    );


    it(
      "implements the prescribed five seven desktop composition",
      () => {

        expect(
          css
        ).toContain(
          "NB_CONTACT_STRICT_ARCHITECTURE_V11"
        );


        expect(
          css
        ).toContain(
          "5fr"
        );


        expect(
          css
        ).toContain(
          "7fr"
        );


        expect(
          css
        ).toContain(
          "72px"
        );

      }
    );


    it(
      "recomposes information before form on mobile",
      () => {

        expect(
          css
        ).toContain(
          "@media (max-width: 760px)"
        );


        expect(
          css
        ).toContain(
          "flex-direction:"
        );


        expect(
          css
        ).toContain(
          "column"
        );

      }
    );


    it(
      "uses the strict NoBreach input and focus language",
      () => {

        expect(
          css
        ).toContain(
          "#07090d"
        );


        expect(
          css
        ).toContain(
          "#0b0f16"
        );


        expect(
          css
        ).toContain(
          "#0b111a"
        );


        expect(
          css
        ).toContain(
          "#a1e2f0"
        );


        expect(
          css
        ).toContain(
          "outline-offset:"
        );

      }
    );

  }
);
