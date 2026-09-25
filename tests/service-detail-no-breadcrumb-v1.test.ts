import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const pages = [
  "src/app/services/api-security/page.tsx",
  "src/app/services/infrastructure-security/page.tsx",
  "src/app/services/security-training/page.tsx"
] as const;


describe(
  "selected service detail pages have no breadcrumb sub-header",
  () => {

    for (
      const file
      of pages
    ) {

      it(
        `${file} does not render Breadcrumbs`,
        () => {

          const source =
            readFileSync(
              file,
              "utf8"
            );


          expect(
            source
          ).not.toContain(
            "Breadcrumbs"
          );


          expect(
            source
          ).not.toContain(
            "@/components/navigation/breadcrumbs"
          );

        }
      );

    }


    it(
      "does not include web application pentesting in this removal scope",
      () => {

        expect(
          pages
        ).not.toContain(
          "src/app/services/web-application-pentesting/page.tsx"
        );

      }
    );

  }
);
