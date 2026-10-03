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

const content =
  readFileSync(
    "src/content/insights.ts",
    "utf8"
  );


describe(
  "Attack Surface dossier refinement V84",
  () => {

    it(
      "preserves V53 and adds V84 authority",
      () => {

        expect(
          component
        ).toContain(
          'data-attack-surface-insight-design="v53"'
        );

        expect(
          component
        ).toContain(
          'data-attack-surface-insight-redesign="v84"'
        );

        expect(
          component
        ).toContain(
          'data-insight-slug="attack-surface-mapping-before-exploitation"'
        );

      }
    );


    it(
      "makes the recon workflow semantic instead of entirely hidden",
      () => {

        expect(
          component
        ).toContain(
          'data-attack-surface-workflow="v84"'
        );

        expect(
          component
        ).toContain(
          'role="list"'
        );

        expect(
          component
        ).toContain(
          'role="listitem"'
        );

        expect(
          component
        ).toContain(
          'aria-label="Reconnaissance workflow"'
        );

        expect(
          component
        ).toContain(
          'data-attack-surface-axis="decorative"'
        );

      }
    );


    it(
      "preserves all five reconnaissance stages",
      () => {

        for (
          const value
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
            `"${value}"`
          );

        }

      }
    );


    it(
      "preserves the canonical research dossier architecture",
      () => {

        for (
          const value
          of [
            'data-insight-section="reading"',
            'data-article-reading-grid="true"',
            'aria-label="Article contents"',
            'data-article-research="true"',
            'aria-label="Article information"',
            "article.sections.map"
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
      "preserves four canonical research chapters",
      () => {

        for (
          const heading
          of [
            "Map before you test deeply",
            "Attack surfaces are relationships",
            "Mapping improves prioritization",
            "Treat the map as a living model"
          ]
        ) {

          expect(
            content
          ).toContain(
            `"${heading}"`
          );

        }

      }
    );


    it(
      "uses one research-index action across the continuation",
      () => {

        const count =
          component
            .split(
              "Research index"
            )
            .length
          -
          1;


        expect(
          count
        ).toBe(
          1
        );


        expect(
          component
        ).toContain(
          'data-attack-surface-continuation="dispatches"'
        );

        expect(
          component
        ).toContain(
          'data-attack-surface-continuation="actions"'
        );

      }
    );


    it(
      "adds the V84 reading-first visual system",
      () => {

        for (
          const value
          of [
            "NB_ATTACK_SURFACE_REDESIGN_V84",
            ".masthead",
            ".exposureAxis",
            ".fieldIndex",
            ".dossierMeta",
            ".chapterHeader h2",
            ".dispatchRows",
            ".dispatchRow",
            ".closingGrid",
            "@media (max-width: 760px)",
            "prefers-reduced-motion"
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
