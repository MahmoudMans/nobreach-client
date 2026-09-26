import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const layout =
  readFileSync(
    "src/app/events/[slug]/layout.tsx",
    "utf8"
  );


const component =
  readFileSync(
    "src/app/events/[slug]/cr4ckout-event-v43.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/events/[slug]/cr4ckout-event-v43.module.css",
    "utf8"
  );


describe(
  "CR4CKOUT 2.0 event detail V43",
  () => {

    it(
      "uses an exclusive route-level event presentation",
      () => {

        expect(
          layout
        ).toContain(
          '"cr4ckout-2-0"'
        );


        expect(
          layout
        ).toContain(
          "<Cr4ckoutEventV43 />"
        );

      }
    );


    it(
      "implements one PageIntro and purposeful event flow",
      () => {

        for (
          const marker
          of [
            'data-event-section="intro"',
            'data-event-section="cr4ckout"',
            'data-event-section="final-cta"'
          ]
        ) {

          expect(
            component
          ).toContain(
            marker
          );

        }

      }
    );


    it(
      "uses canonical event content dynamically",
      () => {

        expect(
          component
        ).toContain(
          'data-event-detail-design="v43"'
        );


        const eventPropertyAccesses =
          component.match(
            /\bevent\.[A-Za-z_$][A-Za-z0-9_$]*/g
          )
          ??
          [];


        expect(
          eventPropertyAccesses.length
        ).toBeGreaterThanOrEqual(
          1
        );


        expect(
          component
        ).not.toContain(
          "event.sections"
        );

      }
    );


    it(
      "uses the strict NoBreach visual system",
      () => {

        for (
          const token
          of [
            "#07090d",
            "#0b0f16",
            "#101620",
            "#151d29",
            "#a1e2f0",
            "96px",
            "80px",
            "64px"
          ]
        ) {

          expect(
            css
          ).toContain(
            token
          );

        }

      }
    );


    it(
      "uses no absolute positioning for primary event content",
      () => {

        expect(
          component
        ).not.toContain(
          'style={{ position: "absolute"'
        );

      }
    );

  }
);
