import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";

import {
  announcement
} from "@/content/announcement";

import {
  getEvent
} from "@/content/events";


// NB_ANNOUNCEMENT_BAR_V1

const layout =
  readFileSync(
    "src/app/layout.tsx",
    "utf8"
  );

const bar =
  readFileSync(
    "src/components/layout/announcement-bar.tsx",
    "utf8"
  );


describe(
  "Announcement bar V1",
  () => {

    it(
      "announces CR4CKOUT 3.0 registration with the event's form link",
      () => {

        expect(
          announcement.active
        ).toBe(
          true
        );

        expect(
          announcement.label
        ).toBe(
          "CR4CKOUT 3.0"
        );

        expect(
          announcement.href
        ).toBe(
          getEvent(
            "cr4ckout-3-0"
          )?.registrationUrl
        );

        for (
          const detail
          of announcement.details
        ) {

          expect(
            detail
          ).not.toMatch(
            /classified/i
          );

        }

      }
    );


    it(
      "renders above the site header on every page",
      () => {

        const barIndex =
          layout.indexOf(
            "<AnnouncementBar />"
          );

        expect(
          barIndex
        ).toBeGreaterThan(
          layout.indexOf(
            "Skip to main content"
          )
        );

        expect(
          barIndex
        ).toBeLessThan(
          layout.indexOf(
            "<SiteHeader />"
          )
        );

        expect(
          layout
        ).toContain(
          "suppressHydrationWarning"
        );

      }
    );


    it(
      "is a labelled complementary region, not a second banner",
      () => {

        expect(
          bar
        ).toContain(
          'aria-label="Announcement"'
        );

        expect(
          bar
        ).not.toMatch(
          /<header\b|role="banner"/
        );

      }
    );

  }
);
