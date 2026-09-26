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
  "modern homepage destination system",
  () => {

    it(
      "routes all four services",
      () => {

        for (
          const href
          of [
            "/services/web-application-pentesting",
            "/services/api-security",
            "/services/infrastructure-security",
            "/services/security-training"
          ]
        ) {

          expect(
            page
          ).toContain(
            href
          );

        }

      }
    );


    it(
      "routes the wider NoBreach ecosystem",
      () => {

        for (
          const href
          of [
            "/training",
            "/cr4ckout",
            "/activities",
            "/events",
            "/insights",
            "/contact"
          ]
        ) {

          expect(
            page
          ).toContain(
            href
          );

        }

      }
    );


    it(
      "uses canonical training data",
      () => {

        expect(
          page
        ).toContain(
          'from "@/content/training"'
        );


        expect(
          page
        ).toContain(
          "trainingPrograms.map"
        );

      }
    );


    it(
      "uses confirmed current-team data",
      () => {

        expect(
          page
        ).toContain(
          'from "@/content/team"'
        );


        expect(
          page
        ).toContain(
          'member.status'
        );


        expect(
          page
        ).toContain(
          '"current"'
        );

      }
    );

  }
);
