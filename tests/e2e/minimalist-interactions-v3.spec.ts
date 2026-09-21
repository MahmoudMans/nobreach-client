import {
  expect,
  test
} from "@playwright/test";

test(
  "contact controls remain usable and restrained",
  async ({
    page
  }) => {
    await page.goto(
      "/contact"
    );

    const controls =
      page.locator(
        "#main-content input, #main-content select, #main-content textarea, #main-content button"
      );

    const count =
      await controls.count();

    for (
      let index = 0;
      index < count;
      index += 1
    ) {
      const control =
        controls.nth(
          index
        );

      if (
        !(await control.isVisible())
      ) {
        continue;
      }

      const box =
        await control.boundingBox();

      if (!box) {
        continue;
      }

      expect(
        box.height
      ).toBeGreaterThanOrEqual(
        38
      );
    }
  }
);

test(
  "activity filters remain operational after minimalist styling",
  async ({
    page
  }) => {
    await page.goto(
      "/activities"
    );

    const buttons =
      page.getByRole(
        "button"
      );

    const filter =
      buttons.filter({
        hasText:
          /training/i
      }).first();

    await expect(
      filter
    ).toBeVisible();

    const box =
      await filter.boundingBox();

    expect(
      box
    ).not.toBeNull();

    if (box) {
      expect(
        box.height
      ).toBeGreaterThanOrEqual(
        34
      );
    }
  }
);

test(
  "detail breadcrumbs remain visible and compact",
  async ({
    page
  }) => {
    for (
      const route
      of [
        "/services/api-security",
        "/training/red-team-foundations",
        "/activities/red-team-foundations-2026",
        "/events/cr4ckout-2-0"
      ]
    ) {
      await page.goto(
        route
      );

      const links =
        page.locator(
          'nav a[href="/"], nav a[href="/services"], nav a[href="/training"], nav a[href="/activities"], nav a[href="/events"]'
        );

      expect(
        await links.count()
      ).toBeGreaterThan(
        0
      );
    }
  }
);

test(
  "public pages retain no horizontal overflow",
  async ({
    page
  }) => {
    await page.setViewportSize({
      width:
        390,
      height:
        844
    });

    for (
      const route
      of [
        "/contact",
        "/activities",
        "/events",
        "/insights",
        "/services/api-security",
        "/training/red-team-foundations"
      ]
    ) {
      await page.goto(
        route
      );

      const metrics =
        await page.evaluate(
          () => ({
            scrollWidth:
              document
                .documentElement
                .scrollWidth,

            clientWidth:
              document
                .documentElement
                .clientWidth
          })
        );

      expect(
        metrics.scrollWidth
      ).toBeLessThanOrEqual(
        metrics.clientWidth +
          1
      );
    }
  }
);
