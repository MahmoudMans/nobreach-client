import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";

import {
  getEvent
} from "@/content/events";


// NB_CR4CKOUT_3_TEASER_V1

const teaser =
  readFileSync(
    "src/components/cr4ckout/next-edition-teaser.tsx",
    "utf8"
  );

const cr4ckoutPage =
  readFileSync(
    "src/app/cr4ckout/page.tsx",
    "utf8"
  );

const eventRoute =
  readFileSync(
    "src/app/events/[slug]/page.tsx",
    "utf8"
  );


describe(
  "CR4CKOUT 3.0 teaser V1",
  () => {

    it(
      "publishes an upcoming record that withholds date and location",
      () => {

        const event =
          getEvent(
            "cr4ckout-3-0"
          );

        expect(
          event
        ).toBeDefined();

        expect(
          event?.status
        ).toBe(
          "upcoming"
        );

        expect(
          event?.year
        ).not.toMatch(
          /\d/
        );

        expect(
          event?.location
        ).not.toMatch(
          /tunis|online/i
        );

      }
    );


    it(
      "places the teaser directly after the CR4CKOUT introduction",
      () => {

        const hero =
          cr4ckoutPage.indexOf(
            'data-cr4ckout-section="hero"'
          );

        const teaserSection =
          cr4ckoutPage.indexOf(
            'data-cr4ckout-section="next-edition"'
          );

        const experience =
          cr4ckoutPage.indexOf(
            'data-cr4ckout-section="experience"'
          );

        expect(
          hero
        ).toBeGreaterThan(
          -1
        );

        expect(
          teaserSection
        ).toBeGreaterThan(
          hero
        );

        expect(
          experience
        ).toBeGreaterThan(
          teaserSection
        );

        expect(
          cr4ckoutPage
        ).toContain(
          "<Cr4ckoutTeaserSignal />"
        );

      }
    );


    it(
      "keeps CR4CKOUT 2.0 as the featured event record",
      () => {

        expect(
          cr4ckoutPage
        ).toMatch(
          /getEvent\(\s*"cr4ckout-2-0"/
        );

      }
    );


    it(
      "renders a dedicated teaser page without Event structured data",
      () => {

        const teaserReturn =
          eventRoute.indexOf(
            "return <Cr4ckout3Teaser />"
          );

        const structuredData =
          eventRoute.indexOf(
            "<EventStructuredData"
          );

        expect(
          teaserReturn
        ).toBeGreaterThan(
          -1
        );

        expect(
          teaserReturn
        ).toBeLessThan(
          structuredData
        );

      }
    );


    it(
      "avoids simulated live-status language and hides decorative layers",
      () => {

        expect(
          teaser
        ).not.toContain(
          "SIGNAL ACTIVE"
        );

        expect(
          teaser.match(
            /className=\{styles\.glitchLayer\}\s*aria-hidden="true"/g
          )
        ).toHaveLength(
          2
        );

      }
    );

  }
);
