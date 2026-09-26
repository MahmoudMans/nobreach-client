import fs from "node:fs";
import path from "node:path";

import {
  describe,
  expect,
  it
} from "vitest";


const root =
  process.cwd();


const brand =
  fs.readFileSync(
    path.join(
      root,
      "src/components/brand/brand-logo.tsx"
    ),
    "utf8"
  );


const header =
  fs.readFileSync(
    path.join(
      root,
      "src/components/layout/site-header.tsx"
    ),
    "utf8"
  );


const footer =
  fs.readFileSync(
    path.join(
      root,
      "src/components/layout/site-footer.tsx"
    ),
    "utf8"
  );


describe(
  "global NoBreach logo V1",
  () => {

    it(
      "uses the supplied logo PNG",
      () => {

        expect(
          brand
        ).toContain(
          'src="/brand/nobreachlogo.png"'
        );


        expect(
          brand
        ).toContain(
          'alt="NoBreach"'
        );

      }
    );


    it(
      "uses the PNG logo in the header",
      () => {

        expect(
          header
        ).toContain(
          '<BrandLogo placement="header" />'
        );

      }
    );


    it(
      "uses the PNG logo in the footer",
      () => {

        expect(
          footer
        ).toContain(
          '<BrandLogo placement="footer" />'
        );


        expect(
          footer
        ).not.toContain(
          "<BrandMark />"
        );

      }
    );


    it(
      "provides stable placement markers",
      () => {

        expect(
          brand
        ).toContain(
          "data-brand-logo"
        );

      }
    );

  }
);
