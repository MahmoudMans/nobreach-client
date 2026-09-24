import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
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
  "CR4CKOUT continuous NoBreach design system",
  () => {

    it(
      "uses one event landing-page architecture",
      () => {

        expect(
          page
        ).toContain(
          'data-cr4ckout-design="continuous-system"'
        );


        expect(
          page.match(
            /<h1>/g
          )
          ??
          []
        ).toHaveLength(
          1
        );


        expect(
          page
        ).not.toContain(
          "<nav"
        );

      }
    );


    it(
      "uses the exact seven-section event flow",
      () => {

        const sections =
          page.match(
            /data-cr4ckout-section="[^"]+"/g
          )
          ??
          [];


        expect(
          sections
        ).toEqual([
          'data-cr4ckout-section="hero"',
          'data-cr4ckout-section="profile"',
          'data-cr4ckout-section="story"',
          'data-cr4ckout-section="challenges"',
          'data-cr4ckout-section="experience"',
          'data-cr4ckout-section="archive"',
          'data-cr4ckout-section="host"'
        ]);

      }
    );


    it(
      "preserves the approved CR4CKOUT event content",
      () => {

        for (
          const value
          of [
            "CR4CKOUT",
            "A hacking experience",
            "like no other.",
            "CR4CK0UT is our signature challenge",
            "game-like",
            "story-driven hackathon",
            "It’s the only event of its kind in Tunisia",
            "Cryptography",
            "Steganography",
            "System access challenges",
            "Want to host CR4CK0UT at your university or tech event?",
            "Contact us — and let’s bring the experience to your"
          ]
        ) {

          expect(
            page
          ).toContain(
            value
          );

        }

      }
    );


    it(
      "preserves event routes",
      () => {

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


        expect(
          page
        ).toContain(
          'href="/events/cr4ckout-2-0"'
        );

      }
    );


    it(
      "uses the four-step challenge progression",
      () => {

        for (
          const value
          of [
            '"HACK"',
            '"LEARN"',
            '"BREAK"',
            '"BUILD"'
          ]
        ) {

          expect(
            page
          ).toContain(
            value
          );

        }

      }
    );


    it(
      "uses the final NoBreach visual tokens",
      () => {

        for (
          const value
          of [
            "#07090d",
            "#0b0f16",
            "#101620",
            "#151d29",
            "#a1e2f0",
            "#83b3d7",
            "#7e60b9",
            '"Space Grotesk"',
            '"Inter"',
            '"IBM Plex Mono"'
          ]
        ) {

          expect(
            css
          ).toContain(
            value
          );

        }

      }
    );


    it(
      "contains accessibility and responsive contracts",
      () => {

        expect(
          css
        ).toContain(
          ":focus-visible"
        );


        expect(
          css
        ).toContain(
          "outline:\n    2px"
        );


        expect(
          css
        ).toContain(
          "min-height:\n    48px;"
        );


        expect(
          css
        ).toContain(
          "max-width:\n    640px"
        );


        expect(
          css
        ).toContain(
          "prefers-reduced-motion"
        );

      }
    );

  }
);
