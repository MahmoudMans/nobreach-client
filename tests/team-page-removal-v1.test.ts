import {
  existsSync,
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


describe(
  "standalone Team route removal",
  () => {

    it(
      "deletes the Team route directory",
      () => {

        expect(
          existsSync(
            "src/app/company/team"
          )
        ).toBe(
          false
        );

      }
    );


    it(
      "removes Team from the global Company navigation",
      () => {

        const header =
          readFileSync(
            "src/components/layout/site-header.tsx",
            "utf8"
          );


        expect(
          header
        ).not.toContain(
          '"/company/team"'
        );


        expect(
          header
        ).not.toContain(
          '"People behind the ecosystem."'
        );

      }
    );


    it(
      "removes Team from the global footer",
      () => {

        const footer =
          readFileSync(
            "src/components/layout/site-footer.tsx",
            "utf8"
          );


        expect(
          footer
        ).not.toContain(
          '"/company/team"'
        );

      }
    );


    it(
      "removes Team from the sitemap",
      () => {

        const sitemap =
          readFileSync(
            "src/app/sitemap.ts",
            "utf8"
          );


        expect(
          sitemap
        ).not.toContain(
          '"/company/team"'
        );

      }
    );


    it(
      "keeps the surviving Company destinations",
      () => {

        const header =
          readFileSync(
            "src/components/layout/site-header.tsx",
            "utf8"
          );


        for (
          const route
          of [
            '"/company"',
            '"/company/founder"',
            '"/company/internships"'
          ]
        ) {

          expect(
            header
          ).toContain(
            route
          );

        }

      }
    );

  }
);
