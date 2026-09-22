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
    "src/app/contact/page.tsx",
    "utf8"
  );


const form =
  readFileSync(
    "src/app/contact/consultation-intake-form.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/contact/contact.module.css",
    "utf8"
  );


const source =
  `${page}\n${form}`;


describe(
  "contact design authority v10",
  () => {

    it(
      "uses the contact V10 authority",
      () => {

        expect(
          page
        ).toContain(
          'data-contact-design="authority-v10"'
        );


        expect(
          css
        ).toContain(
          "NB_CONTACT_DESIGN_AUTHORITY_V10"
        );


        expect(
          page.match(
            /<h1>/g
          )
        ).toHaveLength(
          1
        );


        expect(
          page
        ).toContain(
          "<h1>\n                Contact\n              </h1>"
        );

      }
    );


    it(
      "contains the approved consultation context",
      () => {

        expect(
          source
        ).toContain(
          "Getting to know our clients."
        );


        expect(
          source
        ).toContain(
          "What we ask before the meeting"
        );


        expect(
          source
        ).toContain(
          "When a client clicks to book a consultation"
        );


        expect(
          source
        ).toContain(
          "understand your context, goals, and"
        );


        expect(
          source
        ).toContain(
          "personalized, relevant service from the start"
        );

      }
    );


    it(
      "contains every supplied client profile option",
      () => {

        for (
          const option
          of [
            "Startup",
            "Mid-size company",
            "Large company / Enterprise",
            "Educational institution",
            "Individual / Independent professional",
            "Industry / Sector",
            "1–10",
            "11–50",
            "51–200",
            "201+",
          ]
        ) {

          expect(
            source
          ).toContain(
            option
          );

        }

      }
    );


    it(
      "contains every supplied service and format option",
      () => {

        for (
          const option
          of [
            "Security Consulting",
            "Zerodays",
            "Web Application Pentesting",
            "Cybersecurity Training",
            "Combination of the above",
            "Not sure yet — need guidance",
            "One-time consultation",
            "Ongoing support",
            "Short-term project",
            "Training session(s) only",
          ]
        ) {

          expect(
            source
          ).toContain(
            option
          );

        }

      }
    );


    it(
      "contains the supplied technical maturity questions",
      () => {

        expect(
          form
        ).toContain(
          "Do you already have a cybersecurity strategy in place?"
        );


        expect(
          form
        ).toContain(
          "Do you have an in-house dev or security team?"
        );


        expect(
          form
        ).toContain(
          '"Partially"'
        );


        expect(
          form
        ).toContain(
          '"Not yet"'
        );

      }
    );


    it(
      "uses semantic form grouping and does not invent a submission endpoint",
      () => {

        expect(
          form
        ).toContain(
          "<form"
        );


        expect(
          form
        ).toContain(
          "<fieldset"
        );


        expect(
          form
        ).toContain(
          "<legend>"
        );


        expect(
          form
        ).toContain(
          'type="radio"'
        );


        expect(
          form
        ).toContain(
          'type="checkbox"'
        );


        expect(
          form
        ).toContain(
          "event.preventDefault()"
        );


        expect(
          form
        ).not.toContain(
          'action="/api/'
        );


        expect(
          form
        ).toContain(
          "Nothing has been sent from this page."
        );

      }
    );


    it(
      "uses the No Breach palette and responsive contracts",
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
