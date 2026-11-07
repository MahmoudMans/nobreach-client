import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";

import {
  aiInfrastructureArticle
} from "@/content/articles/ai-infrastructure-security";

import {
  getInsight,
  insights
} from "@/content/insights";

import {
  linkedInPosts
} from "@/content/linkedin-posts";


// NB_AI_INFRA_INSIGHT_V1

const SLUG =
  "when-the-model-is-not-the-only-attack-surface";

const layout =
  readFileSync(
    "src/app/insights/[slug]/layout.tsx",
    "utf8"
  );

const component =
  readFileSync(
    "src/app/insights/[slug]/ai-infrastructure-insight.tsx",
    "utf8"
  );


describe(
  "AI infrastructure security insight V1",
  () => {

    it(
      "publishes the article as the featured AI Security insight",
      () => {

        const insight =
          getInsight(
            SLUG
          );

        expect(
          insight
        ).toBeDefined();

        expect(
          insight?.category
        ).toBe(
          "AI Security"
        );

        expect(
          insight?.author
        ).toBe(
          "Nouha Ben Brahim"
        );

        expect(
          insight?.publishedAt
        ).toMatch(
          /^\d{4}-\d{2}-\d{2}$/
        );

        expect(
          insights.find(
            (item) =>
              item.featured
          )?.slug
        ).toBe(
          SLUG
        );

      }
    );


    it(
      "keeps the five numbered sections and six references",
      () => {

        expect(
          aiInfrastructureArticle.sections.map(
            (section) =>
              section.number
          )
        ).toEqual([
          "1",
          "2",
          "3",
          "4",
          "5"
        ]);

        expect(
          aiInfrastructureArticle.references.map(
            (reference) =>
              reference.number
          )
        ).toEqual([
          1,
          2,
          3,
          4,
          5,
          6
        ]);

        for (
          const reference
          of aiInfrastructureArticle.references
        ) {

          expect(
            reference.url
          ).toMatch(
            /^https:\/\//
          );

        }

      }
    );


    it(
      "only cites references that exist",
      () => {

        const text =
          JSON.stringify(
            aiInfrastructureArticle.sections
          );

        const cited =
          [
            ...text.matchAll(
              /\[(\d+(?:\s*[–,]\s*\d+)*)\]/g
            )
          ].flatMap(
            (match) =>
              match[1]
                .split(
                  /\s*[–,]\s*/
                )
                .map(
                  Number
                )
          );

        expect(
          cited.length
        ).toBeGreaterThan(
          5
        );

        for (
          const number
          of cited
        ) {

          expect(
            number
          ).toBeGreaterThanOrEqual(
            1
          );

          expect(
            number
          ).toBeLessThanOrEqual(
            aiInfrastructureArticle.references.length
          );

        }

      }
    );


    it(
      "routes the slug to the dedicated article page",
      () => {

        expect(
          layout
        ).toContain(
          `"${SLUG}"`
        );

        expect(
          layout
        ).toContain(
          "<AiInfrastructureInsight />"
        );

        expect(
          component.match(
            /<h1\b/g
          )
        ).toHaveLength(
          1
        );

        expect(
          component
        ).toContain(
          'aria-label="Article contents"'
        );

      }
    );


    it(
      "links the LinkedIn post from the article and the activity archive",
      () => {

        expect(
          aiInfrastructureArticle.linkedinUrl
        ).toBe(
          "https://www.linkedin.com/feed/update/urn:li:activity:7522269684860325889/"
        );

        expect(
          linkedInPosts.some(
            (post) =>
              post.href
              ===
              aiInfrastructureArticle.linkedinUrl
          )
        ).toBe(
          true
        );

      }
    );

  }
);
