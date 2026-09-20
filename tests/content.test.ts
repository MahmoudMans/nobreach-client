import {
  describe,
  expect,
  it
} from "vitest";
import {
  activities,
  getActivity
} from "@/content/activities";
import {
  events
} from "@/content/events";
import {
  services
} from "@/content/services";
import {
  trainingPrograms
} from "@/content/training";

describe(
  "content integrity",
  () => {
    it(
      "keeps service slugs unique",
      () => {
        const slugs =
          services.map(
            (service) =>
              service.slug
          );

        expect(
          new Set(slugs).size
        ).toBe(
          slugs.length
        );
      }
    );

    it(
      "keeps training slugs unique",
      () => {
        const slugs =
          trainingPrograms.map(
            (program) =>
              program.slug
          );

        expect(
          new Set(slugs).size
        ).toBe(
          slugs.length
        );
      }
    );

    it(
      "keeps event slugs unique",
      () => {
        const slugs =
          events.map(
            (event) =>
              event.slug
          );

        expect(
          new Set(slugs).size
        ).toBe(
          slugs.length
        );
      }
    );

    it(
      "keeps activity slugs unique",
      () => {
        const slugs =
          activities.map(
            (activity) =>
              activity.slug
          );

        expect(
          new Set(slugs).size
        ).toBe(
          slugs.length
        );
      }
    );

    it(
      "provides meaningful service content",
      () => {
        for (
          const service
          of services
        ) {
          expect(
            service.title.length
          ).toBeGreaterThan(
            5
          );

          expect(
            service.summary.length
          ).toBeGreaterThan(
            20
          );

          expect(
            service.scope.length
          ).toBeGreaterThan(
            3
          );

          expect(
            service.deliverables.length
          ).toBeGreaterThan(
            3
          );

          expect(
            service.suitableFor.length
          ).toBeGreaterThan(
            2
          );

          expect(
            service.engagement.length
          ).toBe(
            5
          );

          expect(
            service.faqs.length
          ).toBeGreaterThanOrEqual(
            3
          );
        }
      }
    );

    it(
      "provides modules and audiences for every training program",
      () => {
        for (
          const program
          of trainingPrograms
        ) {
          expect(
            program.modules.length
          ).toBeGreaterThan(
            2
          );

          expect(
            program.objectives.length
          ).toBeGreaterThan(
            2
          );

          expect(
            program.audience.length
          ).toBeGreaterThan(
            2
          );

          expect(
            program.outcomes.length
          ).toBeGreaterThan(
            2
          );
        }
      }
    );

    it(
      "provides complete activity detail content",
      () => {
        for (
          const activity
          of activities
        ) {
          expect(
            activity.description.length
          ).toBeGreaterThan(
            30
          );

          expect(
            activity.highlights.length
          ).toBeGreaterThan(
            2
          );

          expect(
            activity.sections.length
          ).toBeGreaterThan(
            0
          );

          expect(
            getActivity(
              activity.slug
            )
          ).toEqual(
            activity
          );
        }
      }
    );

    it(
      "references only existing training programs from activities",
      () => {
        const trainingSlugs =
          new Set(
            trainingPrograms.map(
              (program) =>
                program.slug
            )
          );

        for (
          const activity
          of activities
        ) {
          if (
            activity.relatedTrainingSlug
          ) {
            expect(
              trainingSlugs.has(
                activity.relatedTrainingSlug
              )
            ).toBe(
              true
            );
          }
        }
      }
    );

    it(
      "references only existing events from activities",
      () => {
        const eventSlugs =
          new Set(
            events.map(
              (event) =>
                event.slug
            )
          );

        for (
          const activity
          of activities
        ) {
          if (
            activity.relatedEventSlug
          ) {
            expect(
              eventSlugs.has(
                activity.relatedEventSlug
              )
            ).toBe(
              true
            );
          }
        }
      }
    );
  }
);

describe(
  "insight content integrity",
  () => {
    it(
      "keeps insight slugs unique",
      async () => {
        const {
          insights
        } =
          await import(
            "@/content/insights"
          );

        const slugs =
          insights.map(
            (insight) =>
              insight.slug
          );

        expect(
          new Set(slugs).size
        ).toBe(
          slugs.length
        );
      }
    );

    it(
      "provides complete article content",
      async () => {
        const {
          insights
        } =
          await import(
            "@/content/insights"
          );

        for (
          const insight
          of insights
        ) {
          expect(
            insight.title.length
          ).toBeGreaterThan(
            10
          );

          expect(
            insight.summary.length
          ).toBeGreaterThan(
            40
          );

          expect(
            insight.sections.length
          ).toBeGreaterThanOrEqual(
            3
          );

          expect(
            insight.tags.length
          ).toBeGreaterThanOrEqual(
            3
          );

          expect(
            insight.author
          ).toBe(
            "No Breach"
          );
        }
      }
    );

    it(
      "references only existing service slugs from insights",
      async () => {
        const {
          insights
        } =
          await import(
            "@/content/insights"
          );

        const serviceSlugs =
          new Set(
            services.map(
              (service) =>
                service.slug
            )
          );

        for (
          const insight
          of insights
        ) {
          for (
            const slug
            of insight.relatedServiceSlugs
          ) {
            expect(
              serviceSlugs.has(
                slug
              )
            ).toBe(
              true
            );
          }
        }
      }
    );

    it(
      "references only existing training slugs from insights",
      async () => {
        const {
          insights
        } =
          await import(
            "@/content/insights"
          );

        const trainingSlugs =
          new Set(
            trainingPrograms.map(
              (program) =>
                program.slug
            )
          );

        for (
          const insight
          of insights
        ) {
          for (
            const slug
            of insight.relatedTrainingSlugs
          ) {
            expect(
              trainingSlugs.has(
                slug
              )
            ).toBe(
              true
            );
          }
        }
      }
    );
  }
);
