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
    "src/app/activities/[slug]/layout.tsx",
    "utf8"
  );


const component =
  readFileSync(
    "src/app/activities/[slug]/training-hub-established-v46.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/activities/[slug]/training-hub-established-v46.module.css",
    "utf8"
  );


// NB_TRAINING_HUB_ACTIVITY_V60_LEGACY_CONTRACT
// V46 route/data/identity assertions remain protected.
// Only presentation assertions retired by the approved V59 redesign
// are migrated to the V59 structural contract.
// NB_TRAINING_HUB_ACTIVITY_V62_RELATIONSHIP_CONTRACT
// Relationship fields remain normalized by the activity source.
// V59 no longer requires this historical component to render both
// optional relationships when the canonical record does not use them.

describe(
  "Training Hub established V46 activity detail",
  () => {

    it(
      "uses an exclusive route gate",
      () => {

        expect(
          layout
        ).toContain(
          '"training-hub-established"'
        );


        expect(
          layout
        ).toContain(
          "<TrainingHubEstablishedV46 />"
        );


        expect(
          layout
        ).toContain(
          "return children"
        );

      }
    );


    it(
      "uses canonical activity content",
      () => {

        expect(
          component
        ).toContain(
          "@/content/activities"
        );


        for (
          const token
          of [
            "activity.title",
            "activity.year",
            "activity.category",
            "activity.summary",
            "activity.description",
            "activity.location",
            "activity.highlights",
            "activity.sections",
            "relatedEventSlug:",
            "relatedTrainingSlug:"
          ]
        ) {

          expect(
            component
          ).toContain(
            token
          );

        }

      }
    );


    it(
      "implements one strict activity-detail flow",
      () => {

        for (
          const token
          of [
            'data-activity-detail-section="intro"',
            'data-activity-detail-section="facts"',
            'data-activity-detail-section="overview"',
            'data-activity-detail-section="context"',
            'data-activity-detail-section="final-cta"'
          ]
        ) {

          expect(
            component
          ).toContain(
            token
          );

        }

      }
    );


    it(
      "uses exactly one H1",
      () => {

        expect(
          component.match(
            /<h1>/g
          )
          ??
          []
        ).toHaveLength(
          1
        );

      }
    );


    it(
      "uses strict NoBreach visual tokens",
      () => {

        for (
          const token
          of [
            "80px",
            "NB_TRAINING_HUB_ACTIVITY_AUDIT_REDESIGN_V59",
            ".intro",
            ".introGrid",
            ".trainingSignal",
            ".facts",
            ".factList",
            ".contentSection",
            ".editorialGrid",
            ".highlightRow",
            ".learningSection",
            ".narrativeGrid",
            ".narrativeCard",
            ".continueSection",
            ".continueGrid",
            ".archiveNavigation",
            ".primaryAction",
            ".secondaryAction",
            ":focus-visible",
            "@media (max-width: 620px)",
            "prefers-reduced-motion"
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

  }
);
