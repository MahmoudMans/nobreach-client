import {
  readFileSync,
} from "node:fs";

import {
  describe,
  expect,
  it,
} from "vitest";


const shared =
  readFileSync(
    "src/components/ui/page-hero.module.css",
    "utf8"
  );


const founder =
  readFileSync(
    "src/app/company/founder/founder.module.css",
    "utf8"
  );


const internships =
  readFileSync(
    "src/app/company/internships/internships.module.css",
    "utf8"
  );


describe(
  "navbar to hero rhythm",
  () => {

    it(
      "tightens the shared PageHero",
      () => {

        expect(
          (
            shared.match(
              /NB_NAV_HERO_RHYTHM_V1/g
            )
            ?? []
          )
        ).toHaveLength(
          1
        );


        expect(
          shared
        ).toContain(
          "padding-top:"
        );
      }
    );


    it(
      "tightens the founder hero",
      () => {

        expect(
          (
            founder.match(
              /NB_NAV_HERO_RHYTHM_V1/g
            )
            ?? []
          )
        ).toHaveLength(
          1
        );
      }
    );


    it(
      "tightens the internship hero",
      () => {

        expect(
          (
            internships.match(
              /NB_NAV_HERO_RHYTHM_V1/g
            )
            ?? []
          )
        ).toHaveLength(
          1
        );
      }
    );

  }
);
