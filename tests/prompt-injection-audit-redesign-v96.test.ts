import fs from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const component =
  fs.readFileSync(
    "src/app/insights/[slug]/prompt-injection-insight-v54.tsx",
    "utf8"
  );


const css =
  fs.readFileSync(
    "src/app/insights/[slug]/prompt-injection-insight-v54.module.css",
    "utf8"
  );


describe(
  "Prompt Injection V96 reading refinement",
  () => {

    it(
      "preserves V54 and adds V96 authority",
      () => {

        expect(
          component
        ).toContain(
          'data-prompt-injection-insight-design="v54"'
        );


        expect(
          component
        ).toContain(
          'data-prompt-injection-insight-redesign="v96"'
        );

      }
    );


    it(
      "exposes the AI action path semantically",
      () => {

        for (
          const marker
          of [
            'data-ai-action-boundary-redesign="v96"',
            'role="list"',
            'role="listitem"',
            'aria-label="AI action path"'
          ]
        ) {

          expect(
            component
          ).toContain(
            marker
          );

        }


        expect(
          component
        ).not.toContain(
          `data-ai-action-boundary="v54"
            aria-hidden="true"`
        );

      }
    );


    it(
      "preserves all four action stages",
      () => {

        for (
          const stage
          of [
            "PROMPT",
            "MODEL",
            "TOOL",
            "ACTION"
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


    it(
      "preserves the reading-system contract",
      () => {

        for (
          const marker
          of [
            'data-article-reading-grid="true"',
            'data-article-research="true"',
            'aria-label="Article contents"',
            'aria-label="Article information"',
            "article.sections.map"
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
      "creates one related-research continuation",
      () => {

        for (
          const marker
          of [
            'data-prompt-injection-related="v96"',
            'data-prompt-injection-continuation="research"',
            'data-prompt-injection-continuation="actions"',
            'data-prompt-injection-continuation-group="v96"'
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
      "uses one All insights action",
      () => {

        const count =
          component
            .split(
              "All insights"
            )
            .length
          -
          1;


        expect(
          count
        ).toBe(
          1
        );

      }
    );


    it(
      "adds the V96 visual system",
      () => {

        for (
          const marker
          of [
            "NB_PROMPT_INJECTION_REDESIGN_V96",
            ".intro",
            ".boundary",
            ".indexColumn",
            ".factsColumn",
            ".relatedList",
            ".continuationGroupV96",
            "@media (max-width: 760px)"
          ]
        ) {

          expect(
            css
          ).toContain(
            marker
          );

        }

      }
    );

  }
);
