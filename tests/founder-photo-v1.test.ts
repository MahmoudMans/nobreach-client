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
      "uses the portrait in the company founder visual",
      () => {

        expect(
          companyPage
        ).toContain(
          'import Image from "next/image";'
        );

        expect(
          companyPage
        ).toContain(
          'src="/people/ceo.png"'
        );

        expect(
          companyPage
        ).toContain(
          'data-founder-photo-image="company"'
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
      "applies the photo visual layers once",
      () => {

        expect(
          founderCss.match(
            /NB_FOUNDER_REAL_PHOTO_V1/g
          )
        ).toHaveLength(
          1
        );

        expect(
          companyCss.match(
            /NB_COMPANY_FOUNDER_REAL_PHOTO_V1/g
          )
        ).toHaveLength(
          1
        );
      }
    );

  }
);
