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
    "src/app/cr4ckout/page.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/cr4ckout/cr4ckout.module.css",
    "utf8"
  );


const normalizedPage =
  page.replace(
    /\s+/g,
    " "
  );


describe(
  "CR4CKOUT V10 compatibility + V11 audit",
  () => {

    it(
      "keeps the established route identity while activating V11",
      () => {

        expect(
          page
        ).toContain(
          'data-cr4ckout-design="continuous-system"'
        );

        expect(
          page
        ).toContain(
          'data-cr4ckout-audit="v11"'
        );

        expect(
          css
        ).toContain(
          "NB_CR4CKOUT_DESIGN_AUTHORITY_V10"
        );

        expect(
          css
        ).toContain(
          "NB_CR4CKOUT_AUDIT_V11"
        );

        expect(
          page.match(
            /<h1>/g
          )
        ).toHaveLength(
          1
        );

      }
    );


    it(
      "removes unsupported exclusivity and simulated active status",
      () => {

        expect(
          page
        ).not.toContain(
          "only event of its kind in Tunisia"
        );

        expect(
          page
        ).not.toContain(
          "SIGNAL ACTIVE"
        );

        expect(
          page
        ).not.toContain(
          "A hacking experience like no other."
        );

        expect(
          page
        ).toContain(
          "A story-driven hacking challenge."
        );

      }
    );


    it(
      "integrates three factual overview signals into the introduction",
      () => {

        for (
          const token
          of
          [
            "Story-driven challenge",
            "Universities and tech events",
            "Tunisia"
          ]
        ) {

          expect(
            page
          ).toContain(
            token
          );

        }


        expect(
          page
        ).not.toContain(
          "Specialized security"
        );

      }
    );


    it(
      "uses one merged four-part experience framework",
      () => {

        for (
          const token
          of
          [
            "Hack. Learn. Break. Build.",
            "Enter the challenge and investigate the environment.",
            "Adapt, research and build understanding as the story evolves.",
            "Solve technical obstacles through practical security thinking and reasoning.",
            "Turn what you discover into stronger technical intuition."
          ]
        ) {

          expect(
            normalizedPage
          ).toContain(
            token
          );

        }


        expect(
          page
        ).toContain(
          'data-cr4ckout-ui="experience-framework"'
        );

      }
    );


    it(
      "preserves the three technical challenge areas without code labels",
      () => {

        for (
          const token
          of
          [
            "Cryptography",
            "Steganography",
            "System access challenges"
          ]
        ) {

          expect(
            page
          ).toContain(
            token
          );

        }


        for (
          const retired
          of
          [
            '"CRYPT"',
            '"STEGO"',
            '"ACCESS"'
          ]
        ) {

          expect(
            page
          ).not.toContain(
            retired
          );

        }

      }
    );


    it(
      "binds event information to the canonical CR4CKOUT record",
      () => {

        expect(
          page
        ).toContain(
          'from "@/content/events"'
        );

        expect(
          page
        ).toMatch(
          /getEvent\(\s*"cr4ckout-2-0"/
        );

        expect(
          page
        ).toContain(
          "featuredEvent.year"
        );

        expect(
          page
        ).toContain(
          "featuredEvent.location"
        );

        expect(
          page
        ).toContain(
          "featuredEvent.status"
        );

        expect(
          page
        ).toContain(
          "/events/${featuredEvent.slug}"
        );

      }
    );


    it(
      "keeps event browsing and hosting as distinct actions",
      () => {

        expect(
          page
        ).toContain(
          "View event details"
        );

        expect(
          page
        ).toContain(
          "Browse all No Breach events"
        );

        expect(
          page
        ).toContain(
          'href="/events"'
        );

        expect(
          page
        ).toContain(
          "Discuss hosting"
        );

        expect(
          page
        ).toContain(
          'href="/contact"'
        );

        expect(
          page
        ).not.toContain(
          "Explore events"
        );

      }
    );


    it(
      "keeps one purposeful five-section page flow",
      () => {

        for (
          const section
          of
          [
            "hero",
            "experience",
            "challenges",
            "events",
            "host"
          ]
        ) {

          expect(
            page
          ).toContain(
            `data-cr4ckout-section="${section}"`
          );

        }


        for (
          const retired
          of
          [
            'data-cr4ckout-section="profile"',
            'data-cr4ckout-section="story"',
            'data-cr4ckout-section="archive"'
          ]
        ) {

          expect(
            page
          ).not.toContain(
            retired
          );

        }

      }
    );

  }
);
