import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
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
      "uses Next Image on the dedicated founder profile",
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
      "uses the approved portrait in the audited Company founder feature",
      () => {

        expect(
          companyPage
        ).toContain(
          'import Image from "next/image";'
        );

        expect(
          companyPage
        ).toContain(
          'data-company-audit="v21"'
        );

        expect(
          companyPage
        ).toContain(
          'data-company-section="founder"'
        );

        expect(
          companyPage
        ).toContain(
          'src="/people/ceo.png"'
        );

        expect(
          companyPage
        ).toContain(
          'alt="Nouha Ben Brahim, founder of No Breach"'
        );

        expect(
          companyPage
        ).toContain(
          "founderProfile.name"
        );

        expect(
          companyPage
        ).toContain(
          "founderProfile.summary"
        );

      }
    );


    it(
      "keeps the Company portrait attached to the founder profile journey",
      () => {

        expect(
          companyPage
        ).toContain(
          "Meet the founder"
        );

        expect(
          companyPage
        ).toContain(
          'href="/company/founder"'
        );

        expect(
          companyPage
        ).toContain(
          "Explore founder profile"
        );

      }
    );


    it(
      "preserves the defensible founder role contract",
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

        expect(
          companyPage
        ).not.toContain(
          ">CEO<"
        );

      }
    );


    it(
      "preserves founder portrait styling on both routes",
      () => {

        expect(
          founderCss.match(
            /NB_FOUNDER_REAL_PHOTO_V1/g
          )
          ??
          []
        ).toHaveLength(
          1
        );

        expect(
          companyCss
        ).toContain(
          ".founderPortrait"
        );

        expect(
          companyCss
        ).toContain(
          ".founderImage"
        );

      }
    );

  }
);
