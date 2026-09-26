import fs from "node:fs";
import path from "node:path";

import {
  describe,
  expect,
  it
} from "vitest";


const root =
  process.cwd();


const page =
  fs.readFileSync(
    path.join(
      root,
      "src/app/contact/page.tsx"
    ),
    "utf8"
  );


const css =
  fs.readFileSync(
    path.join(
      root,
      "src/app/contact/contact.module.css"
    ),
    "utf8"
  );


describe(
  "Contact simple V12",
  () => {

    it(
      "uses the simple Contact V12 authority",
      () => {

        expect(
          page
        ).toContain(
          'data-contact-design="v12-simple"'
        );


        expect(
          page
        ).toContain(
          "Get in touch."
        );


        expect(
          page
        ).toContain(
          "You can contact us directly by email or connect with us on"
        );

      }
    );


    it(
      "publishes the requested email address",
      () => {

        expect(
          page
        ).toContain(
          "nhbenbrahim@gmail.com"
        );


        expect(
          page
        ).toContain(
          "`mailto:${emailAddress}`"
        );


        expect(
          page
        ).toContain(
          'data-contact-channel="email"'
        );

      }
    );


    it(
      "publishes a LinkedIn contact channel",
      () => {

        expect(
          page
        ).toContain(
          'data-contact-channel="linkedin"'
        );


        expect(
          page
        ).toContain(
          '"www.linkedin.com"'
        );


        expect(
          page
        ).toContain(
          '"no-breach"'
        );

      }
    );


    it(
      "contains no consultation form",
      () => {

        expect(
          page
        ).not.toContain(
          "ConsultationIntakeForm"
        );


        expect(
          page
        ).not.toContain(
          "<form"
        );


        expect(
          page
        ).not.toContain(
          "<input"
        );


        expect(
          page
        ).not.toContain(
          "<textarea"
        );


        expect(
          page
        ).not.toContain(
          "<fieldset"
        );

      }
    );


    it(
      "uses exactly one H1 and no breadcrumb",
      () => {

        expect(
          page.match(
            /<h1/g
          )?.length
        ).toBe(
          1
        );


        expect(
          page
        ).not.toContain(
          "breadcrumb"
        );

      }
    );


    it(
      "uses the restrained NoBreach visual language",
      () => {

        expect(
          css
        ).toContain(
          "NB_CONTACT_SIMPLE_V12"
        );


        expect(
          css
        ).toContain(
          "#07090d"
        );


        expect(
          css
        ).toContain(
          "#a1e2f0"
        );


        expect(
          css
        ).toContain(
          "max-width:"
        );


        expect(
          css
        ).toContain(
          "@media ("
        );

      }
    );

  }
);
