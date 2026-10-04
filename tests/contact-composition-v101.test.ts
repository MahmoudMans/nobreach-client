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
    "src/app/contact/page.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/contact/contact.module.css",
    "utf8"
  );


describe(
  "Contact composition V101",
  () => {

    it(
      "preserves V12 and adds V101 authority",
      () => {

        expect(
          page
        ).toContain(
          'data-contact-design="v12-simple"'
        );


        expect(
          page
        ).toContain(
          'data-contact-redesign="v101"'
        );

      }
    );


    it(
      "keeps the existing contact copy",
      () => {

        for (
          const value
          of [
            "Contact",
            "Get in touch.",
            "You can contact us directly by email or connect with us on",
            "LinkedIn."
          ]
        ) {

          expect(
            page
          ).toContain(
            value
          );

        }

      }
    );


    it(
      "preserves both functional contact channels",
      () => {

        for (
          const marker
          of [
            'data-contact-channel="email"',
            'data-contact-channel="linkedin"',
            'mailto:${emailAddress}',
            'target="_blank"',
            'rel="noreferrer"'
          ]
        ) {

          expect(
            page
          ).toContain(
            marker
          );

        }

      }
    );


    it(
      "uses one direct-contact stage",
      () => {

        expect(
          page
        ).toContain(
          'data-contact-section="direct-contact"'
        );


        expect(
          page
        ).toContain(
          "styles.contactGrid"
        );


        expect(
          page
        ).toContain(
          "Direct contact"
        );

      }
    );


    it(
      "assigns restrained channel priority",
      () => {

        expect(
          page
        ).toContain(
          'data-contact-priority="primary"'
        );


        expect(
          page
        ).toContain(
          'data-contact-priority="secondary"'
        );

      }
    );


    it(
      "adds route-local V101 responsive styling",
      () => {

        for (
          const marker
          of [
            "NB_CONTACT_COMPOSITION_V101",
            ".contactStage",
            ".contactGrid",
            ".channelList",
            '[data-contact-priority="primary"]',
            "@media (max-width: 1000px)",
            "@media (max-width: 640px)"
          ]
        ) {

          expect(
            css
          ).toContain(
            marker
          );

        }

      }
    );

  }
);
