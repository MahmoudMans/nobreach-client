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
  "homepage continuous master architecture",
  () => {

    it(
      "uses the intended content-chapter sequence",
      () => {

        const chapters =
          page.match(
            /data-home-chapter="[^"]+"/g
          )
          ??
          [];


        expect(
          chapters
        ).toEqual([
          'data-home-chapter="hero"',
          'data-home-chapter="trust"',
          'data-home-chapter="audience"',
          'data-home-chapter="services"',
          'data-home-chapter="capability"',
          'data-home-chapter="academy"',
          'data-home-chapter="labs"',
          'data-home-chapter="why"',
          'data-home-chapter="process"',
          'data-home-chapter="proof"',
          'data-home-chapter="metrics"',
          'data-home-chapter="team"',
          'data-home-chapter="resources"',
          'data-home-chapter="faq"',
          'data-home-chapter="feed"',
          'data-home-chapter="cta"'
        ]);

      }
    );


    it(
      "keeps five legacy route markers for compatibility",
      () => {

        const legacySections =
          page.match(
            /data-home-section="[^"]+"/g
          )
          ??
          [];


        expect(
          legacySections
        ).toEqual([
          'data-home-section="hero"',
          'data-home-section="company"',
          'data-home-section="services"',
          'data-home-section="explore"',
          'data-home-section="contact"'
        ]);

      }
    );


    it(
      "contains no page-level navbar",
      () => {

        expect(
          page
        ).not.toContain(
          "<nav"
        );

      }
    );


    it(
      "does not invent testimonial content",
      () => {

        expect(
          page
        ).not.toContain(
          "data-home-chapter=\"testimonials\""
        );

      }
    );

  }
);
