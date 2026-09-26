import {
  readFileSync,
} from "node:fs";

import {
  describe,
  expect,
  it,
} from "vitest";


const founderPage =
  readFileSync(
    "src/app/company/founder/page.tsx",
    "utf8"
  );


const founderCss =
  readFileSync(
    "src/app/company/founder/founder.module.css",
    "utf8"
  );


const companyPage =
  readFileSync(
    "src/app/company/page.tsx",
    "utf8"
  );


const companyCss =
  readFileSync(
    "src/app/company/company.module.css",
    "utf8"
  );


describe(
  "founder real photo",
  () => {

    it(
      "uses Next Image on the founder profile",
      () => {

        expect(
          founderPage
        ).toContain(
          'import Image from "next/image";'
        );

        expect(
          founderPage
        ).toContain(
          'src="/people/ceo.png"'
        );

        expect(
          founderPage
        ).toContain(
          'data-founder-photo-image="profile"'
        );
      }
    );


    it(
      "keeps the company page linked to the dedicated founder profile",
      () => {

        expect(
          companyPage
        ).toContain(
          'href="/company/founder"'
        );


        expect(
          companyPage
        ).not.toContain(
          'data-founder-photo-image="company"'
        );


        expect(
          companyPage
        ).not.toContain(
          'src="/people/ceo.png"'
        );

      }
    );


    it(
      "preserves the existing founder role contract",
      () => {

        expect(
          founderPage
        ).toContain(
          "Founder of No Breach"
        );

        expect(
          founderPage
        ).not.toContain(
          ">CEO<"
        );
      }
    );


    it(
      "applies the founder photo visual layer once",
      () => {

        expect(
          founderCss.match(
            /NB_FOUNDER_REAL_PHOTO_V1/g
          )
        ).toHaveLength(
          1
        );


        expect(
          companyCss
        ).not.toContain(
          "NB_COMPANY_FOUNDER_REAL_PHOTO_V1"
        );

      }
    );

  }
);
