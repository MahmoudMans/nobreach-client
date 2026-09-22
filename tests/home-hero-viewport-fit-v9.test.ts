import {
  readFileSync,
} from "node:fs";

import {
  describe,
  expect,
  it,
} from "vitest";


const css =
  readFileSync(
    "src/app/home.module.css",
    "utf8"
  );


const page =
  readFileSync(
    "src/app/page.tsx",
    "utf8"
  );


describe(
  "homepage hero viewport fit v9",
  () => {

    it(
      "keeps V8 as the homepage hero",
      () => {

        expect(
          page
        ).toContain(
          'data-home-hero="v8"'
        );

        expect(
          page
        ).toContain(
          "how real systems fail."
        );
      }
    );


    it(
      "applies the V9 viewport system once",
      () => {

        expect(
          (
            css.match(
              /NB_HOME_HERO_VIEWPORT_FIT_V9/g
            )
            ?? []
          )
        ).toHaveLength(
          1
        );
      }
    );


    it(
      "uses viewport-relative hero geometry",
      () => {

        expect(
          css
        ).toContain(
          "100svh - 82px"
        );

        expect(
          css
        ).toContain(
          "box-sizing:"
        );

        expect(
          css
        ).toContain(
          "border-box"
        );
      }
    );


    it(
      "removes unnecessary top spacing",
      () => {

        expect(
          css
        ).toContain(
          "margin-top:"
        );

        expect(
          css
        ).toContain(
          "scroll-margin-top:"
        );
      }
    );


    it(
      "compacts tablet and mobile hero presentations",
      () => {

        expect(
          css
        ).toContain(
          "max-width: 980px"
        );

        expect(
          css
        ).toContain(
          "max-width: 680px"
        );

        expect(
          css
        ).toContain(
          ".heroV8Visual"
        );

        expect(
          css
        ).toContain(
          "display:"
        );
      }
    );

  }
);
