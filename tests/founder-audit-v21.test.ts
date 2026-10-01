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
    "src/app/company/founder/page.tsx",
    "utf8"
  );

const css =
  readFileSync(
    "src/app/company/founder/founder.module.css",
    "utf8"
  );


describe(
  "founder audit v21",
  () => {

    it(
      "preserves the Founder V20 route while activating the audit refinement",
      () => {

        expect(
          page
        ).toContain(
          'data-founder-page="v20"'
        );

        expect(
          page
        ).toContain(
          'data-founder-design-system="v20"'
        );

        expect(
          page
        ).toContain(
          'data-founder-audit="v21"'
        );

      }
    );


    it(
      "uses the shared Company frame instead of wide route containers",
      () => {

        expect(
          page
        ).not.toContain(
          'Container\n          size="wide"'
        );

        expect(
          page
        ).toContain(
          "Breadcrumbs"
        );

      }
    );


    it(
      "simplifies repeated profile metadata",
      () => {

        expect(
          page
        ).toContain(
          "Founder of No Breach"
        );

        expect(
          page
        ).toContain(
          "Tunis, Tunisia"
        );

        expect(
          page
        ).not.toContain(
          "Founder profile"
        );

        expect(
          page
        ).not.toContain(
          "No Breach / Tunisia"
        );

        expect(
          page
        ).not.toContain(
          "Security · Training · Research"
        );

      }
    );


    it(
      "uses five complete trajectory summaries without headline duplication",
      () => {

        expect(
          page
        ).not.toContain(
          "headline:"
        );

        for (
          const stage
          of
          [
            "Development",
            "Cybersecurity",
            "Bug bounty / security research",
            "Offensive security",
            "No Breach"
          ]
        ) {

          expect(
            page
          ).toContain(
            stage
          );

        }

      }
    );


    it(
      "presents working perspective as editorial copy rather than a quote",
      () => {

        expect(
          page
        ).toContain(
          "The emphasis is on understanding how systems behave"
        );

        expect(
          page
        ).not.toContain(
          "<blockquote"
        );

      }
    );


    it(
      "keeps four practice areas and four aligned teaching stages",
      () => {

        for (
          const text
          of
          [
            "Web Security",
            "API Security",
            "Offensive Security",
            "Security Training",
            "Understand",
            "Build",
            "Test",
            "Explain",
            "View training"
          ]
        ) {

          expect(
            page
          ).toContain(
            text
          );

        }

      }
    );


    it(
      "adds verified context to all three selected public engagements",
      () => {

        for (
          const text
          of
          [
            "CyberSummit 4.0",
            "Workshop trainer",
            "Cyber Trace / ESPITA",
            "CyberCamp 5.0",
            "OSINT mentor",
            "Securinets",
            "The Hackers Line",
            "Podcast host",
            "featuring conversations with practitioners"
          ]
        ) {

          expect(
            page
          ).toContain(
            text
          );

        }

      }
    );


    it(
      "separates personal engagements from organizational destinations",
      () => {

        expect(
          page
        ).toContain(
          "More from No Breach"
        );

        expect(
          page
        ).toContain(
          "without implying personal authorship"
        );

        for (
          const href
          of
          [
            "/activities",
            "/insights",
            "/cr4ckout"
          ]
        ) {

          expect(
            page
          ).toContain(
            `"${href}"`
          );

        }

      }
    );


    it(
      "uses correct internal-navigation arrows",
      () => {

        expect(
          page
        ).toContain(
          "View public work"
        );

        expect(
          page
        ).toContain(
          "↓"
        );

        expect(
          page
        ).toContain(
          "→"
        );

        expect(
          page
        ).not.toContain(
          "↗"
        );

      }
    );


    it(
      "keeps required compatibility and audit CSS markers",
      () => {

        for (
          const marker
          of
          [
            "NB_MINIMALIST_SYSTEM_V1",
            "NB_MINIMALIST_POLISH_V4",
            "NB_PREMIUM_HERO_SYSTEM_V6",
            "NB_NAV_HERO_RHYTHM_V1",
            "NB_FOUNDER_VISUAL_V2",
            "NB_FOUNDER_REAL_PHOTO_V1",
            "NB_FOUNDER_V20",
            "NB_FOUNDER_AUDIT_V21"
          ]
        ) {

          expect(
            css.match(
              new RegExp(
                marker,
                "g"
              )
            )
            ??
            []
          ).toHaveLength(
            1
          );

        }

      }
    );

  }
);
