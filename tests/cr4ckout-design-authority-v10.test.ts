import {
  readFileSync,
} from "node:fs";

import {
  describe,
  expect,
  it,
} from "vitest";


const page =
  readFileSync(
    "src/app/cr4ckout/page.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/cr4ckout/cr4ckout.module.css",
    "utf8"
  );


describe(
  "CR4CKOUT design authority v10",
  () => {

    it(
      "uses the No Breach event authority",
      () => {

        expect(
          page
        ).toContain(
          'data-cr4ckout-design="authority-v10"'
        );


        expect(
          css
        ).toContain(
          "NB_CR4CKOUT_DESIGN_AUTHORITY_V10"
        );

      }
    );


    it(
      "contains the approved CR4CKOUT positioning",
      () => {

        expect(
          page
        ).toContain(
          "A hacking experience like no other."
        );


        expect(
          page
        ).toContain(
          "game-like,"
        );


        expect(
          page
        ).toContain(
          "story-driven hackathon"
        );


        expect(
          page
        ).toContain(
          "blends technical skill"
        );


        expect(
          page
        ).toContain(
          "with creative thinking"
        );

      }
    );


    it(
      "contains the approved challenge focus areas",
      () => {

        expect(
          page
        ).toContain(
          "Cryptography"
        );


        expect(
          page
        ).toContain(
          "Steganography"
        );


        expect(
          page
        ).toContain(
          "System access challenges"
        );

      }
    );


    it(
      "contains the approved hosting call to action",
      () => {

        expect(
          page
        ).toContain(
          "Want to host CR4CKOUT at your university or tech event?"
        );


        expect(
          page
        ).toContain(
          "Contact us — and let&apos;s bring the experience"
        );


        expect(
          page
        ).toContain(
          'href="/contact"'
        );


        expect(
          page
        ).toContain(
          'href="/events"'
        );

      }
    );


    it(
      "uses the No Breach palette and responsive system",
      () => {

        for (
          const color
          of [
            "#83b3d7",
            "#a1e2f0",
            "#7e60b9",
            "#6333c6",
          ]
        ) {

          expect(
            css
          ).toContain(
            color
          );

        }


        expect(
          css
        ).toContain(
          "max-width:\n    1024px"
        );


        expect(
          css
        ).toContain(
          "max-width:\n    768px"
        );


        expect(
          css
        ).toContain(
          "max-width:\n    480px"
        );


        expect(
          css
        ).toContain(
          "prefers-reduced-motion:"
        );

      }
    );

  }
);
