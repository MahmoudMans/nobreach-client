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
  "homepage editorial chapter budget",
  () => {

    it(
      "uses eight purposeful chapters",
      () => {

        const matches =
          page.match(
            /data-home-chapter="/g
          )
          ??
          [];

        expect(
          matches
        ).toHaveLength(
          8
        );

      }
    );


    it(
      "removes the old standalone restart chapters",
      () => {

        expect(
          page
        ).not.toContain(
          'data-home-chapter="metrics"'
        );

        expect(
          page
        ).not.toContain(
          'data-home-chapter="why"'
        );

        expect(
          page
        ).not.toContain(
          'data-home-chapter="faq"'
        );

        expect(
          page
        ).not.toContain(
          'data-home-chapter="feed"'
        );

      }
    );


    it(
      "preserves the existing conversion ending outside the eight chapter budget",
      () => {

        expect(
          page
        ).toContain(
          'data-home-ending="cta"'
        );

        expect(
          page
        ).toContain(
          'data-home-section="contact"'
        );

      }
    );

  }
);
