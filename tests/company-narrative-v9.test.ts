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
    "src/app/company/page.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/company/company.module.css",
    "utf8"
  );


describe(
  "Company V19 editorial narrative",
  () => {

    it(
      "uses one operating model composition",
      () => {

        expect(
          page
        ).toContain(
          'data-company-ui="operating-model"'
        );


        for (
          const label
          of [
            "Security services",
            "Practical education",
            "Community"
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
      "uses four capability index rows",
      () => {

        expect(
          (
            page.match(
              /data-company-card="capability"/g
            )
            ??
            []
          ).length
        ).toBe(
          1
        );


        expect(
          page
        ).toContain(
          "capabilityItems.map"
        );

      }
    );


    it(
      "uses three principles",
      () => {

        const block =
          page.slice(
            page.indexOf(
              "const principles ="
            ),
            page.indexOf(
              "const milestones ="
            )
          );


        expect(
          (
            block.match(
              /number:/g
            )
            ??
            []
          ).length
        ).toBe(
          3
        );

      }
    );


    it(
      "uses a single connected timeline",
      () => {

        expect(
          css
        ).toContain(
          ".timeline::before"
        );


        expect(
          page
        ).toContain(
          "milestones.map"
        );

      }
    );


    it(
      "uses the real founder image",
      () => {

        expect(
          page
        ).toContain(
          'src="/people/ceo.png"'
        );


        expect(
          page
        ).toContain(
          'data-founder-photo-image="company"'
        );

      }
    );

  }
);
