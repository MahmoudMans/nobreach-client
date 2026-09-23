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
  "Company V19 first-screen hero",
  () => {

    it(
      "retains one Company hero",
      () => {

        expect(
          (
            page.match(
              /data-company-section="hero"/g
            )
            ??
            []
          ).length
        ).toBe(
          1
        );

      }
    );


    it(
      "uses editorial copy instead of a hero profile card",
      () => {

        expect(
          page
        ).toContain(
          "Offensive security"
        );


        expect(
          page
        ).toContain(
          "built to move beyond"
        );


        expect(
          page
        ).toContain(
          "the assessment."
        );


        expect(
          page
        ).toContain(
          'data-company-ui="signal-system"'
        );


        expect(
          page
        ).not.toContain(
          'data-company-ui="profile-card"'
        );

      }
    );


    it(
      "uses a viewport-aware desktop hero",
      () => {

        expect(
          css
        ).toContain(
          "100svh"
        );


        expect(
          css
        ).toContain(
          ".heroMain"
        );


        expect(
          css
        ).toContain(
          ".signalSystem"
        );

      }
    );

  }
);
