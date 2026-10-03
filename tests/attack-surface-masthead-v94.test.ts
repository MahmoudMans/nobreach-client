import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const css =
  readFileSync(
    "src/app/insights/[slug]/attack-surface-insight-v53.module.css",
    "utf8"
  );

const component =
  readFileSync(
    "src/app/insights/[slug]/attack-surface-insight-v53.tsx",
    "utf8"
  );


describe(
  "Attack Surface masthead composition V94",
  () => {

    it(
      "adds route-local masthead rhythm ownership",
      () => {

        expect(
          css
        ).toContain(
          "NB_ATTACK_SURFACE_V94_MASTHEAD_COMPOSITION"
        );

        for (
          const selector
          of [
            ".masthead",
            ".container",
            ".topline",
            ".mastheadBody",
            ".kicker",
            ".introLower"
          ]
        ) {

          expect(
            css
          ).toContain(
            selector
          );

        }

      }
    );


    it(
      "preserves the accepted dossier content structure",
      () => {

        for (
          const value
          of [
            "Research dossier",
            "NBR / RECON / 01",
            "Reconnaissance dossier",
            "article.title",
            "article.summary",
            "article.publishedAt",
            "article.readingTime",
            "article.author"
          ]
        ) {

          expect(
            component
          ).toContain(
            value
          );

        }

      }
    );


    it(
      "keeps previous accepted redesign authorities",
      () => {

        for (
          const value
          of [
            'data-attack-surface-insight-redesign="v84"',
            'data-attack-surface-workflow="v84"',
            'data-attack-surface-continuation-group="v89"'
          ]
        ) {

          expect(
            component
          ).toContain(
            value
          );

        }


        for (
          const value
          of [
            "NB_ATTACK_SURFACE_V92_FINAL_RHYTHM",
            "NB_ATTACK_SURFACE_V94_MASTHEAD_COMPOSITION"
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

  }
);
