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
    "src/app/page.tsx",
    "utf8"
  );


describe(
  "modern homepage content",
  () => {

    it(
      "keeps the learner and organization journeys",
      () => {

        expect(
          page
        ).toContain(
          "For learners"
        );

        expect(
          page
        ).toContain(
          "For organizations"
        );

      }
    );


    it(
      "renders services from canonical service data",
      () => {

        expect(
          page
        ).toContain(
          "services.map"
        );

        expect(
          page
        ).toContain(
          "Good fit"
        );

        expect(
          page
        ).toContain(
          "Typical output"
        );

      }
    );


    it(
      "renders canonical Academy programs",
      () => {

        expect(
          page
        ).toContain(
          "trainingPrograms.map"
        );

        expect(
          page
        ).toContain(
          "Program published"
        );

      }
    );


    it(
      "preserves public community destinations",
      () => {

        expect(
          page
        ).toContain(
          'href="/cr4ckout"'
        );

        expect(
          page
        ).toContain(
          '"/activities"'
        );

        expect(
          page
        ).toContain(
          '"/events"'
        );

      }
    );


    it(
      "uses the singleton public founder record",
      () => {

        expect(
          page
        ).toContain(
          "currentFounder"
        );

        expect(
          page
        ).toContain(
          "/people/ceo.png"
        );

      }
    );


    it(
      "renders real insight provenance",
      () => {

        expect(
          page
        ).toContain(
          "publishedAt"
        );

        expect(
          page
        ).toContain(
          "readingTime"
        );

        expect(
          page
        ).toContain(
          "featuredInsight.author"
        );

      }
    );

  }
);
