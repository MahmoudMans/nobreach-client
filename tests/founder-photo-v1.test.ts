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
      "uses an informative portrait alternative in the refined profile",
      () => {

        expect(
          founderPage
        ).toContain(
          'alt="Portrait of Nouha Ben Brahim"'
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

      }
    );


    it(
      "keeps the founder photo compatibility marker",
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

      }
    );

  }
);
