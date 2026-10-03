import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const component =
  readFileSync(
    "src/app/insights/[slug]/attack-surface-insight-v53.tsx",
    "utf8"
  );

const css =
  readFileSync(
    "src/app/insights/[slug]/attack-surface-insight-v53.module.css",
    "utf8"
  );


describe(
  "Attack Surface final rhythm V92",
  () => {

    it(
      "preserves the accepted dossier identity",
      () => {

        for (
          const marker
          of [
            'data-attack-surface-insight-design="v53"',
            'data-attack-surface-insight-redesign="v84"',
            'data-attack-surface-workflow="v84"',
            'data-attack-surface-continuation-group="v89"'
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
      "owns the final workflow and rail corrections",
      () => {

        expect(
          css
        ).toContain(
          "NB_ATTACK_SURFACE_V92_FINAL_RHYTHM"
        );

        expect(
          css
        ).toContain(
          "repeat("
        );

        expect(
          css
        ).toContain(
          ".indexRail"
        );

        expect(
          css
        ).toContain(
          ".metaSticky"
        );

      }
    );


    it(
      "preserves all five workflow stages",
      () => {

        for (
          const stage
          of [
            "OBSERVE",
            "ENUMERATE",
            "RELATE",
            "VERIFY",
            "PRIORITIZE"
          ]
        ) {

          expect(
            component
          ).toContain(
            `"${stage}"`
          );

        }

      }
    );

  }
);
