import {
  expect,
  test
} from "@playwright/test";


// NB_CR4CKOUT_EVENT_V73_CTA_CONTRACT
// Destination remains /cr4ckout; accessible name follows the V72
// historical/current wording: Explore current CR4CKOUT.

// NB_CR4CKOUT_EVENT_V75_JOURNEY_CONTRACT
// Legacy journey coverage now protects route availability rather than
// assuming a unique accessible label across hero and continuation CTAs.
test(
  "CR4CKOUT 2.0 renders one strict event-detail experience",
  async ({
    page
  }) => {

    const response =
      await page.goto(
        "/events/cr4ckout-2-0"
      );


    expect(
      response?.status()
    ).toBe(
      200
    );


    const root =
      page.locator(
        '[data-event-detail-design="v43"]'
      );


    await expect(
      root
    ).toHaveCount(
      1
    );


    await expect(
      root
    ).toBeVisible();


    await expect(
      root.locator(
        "h1"
      )
    ).toHaveCount(
      1
    );

  }
);


test(
  "event detail starts with one intro rather than stacked headers",
  async ({
    page
  }) => {

    await page.goto(
      "/events/cr4ckout-2-0"
    );


    const root =
      page.locator(
        '[data-event-detail-design="v43"]'
      );


    await expect(
      root.locator(
        '[data-event-section="intro"]'
      )
    ).toHaveCount(
      1
    );


    await expect(
      root.getByRole(
        "navigation",
        {
          name:
            "Breadcrumb"
        }
      )
    ).toHaveCount(
      1
    );

  }
);


test(
  "event journeys remain available",
  async ({
    page
  }) => {

    await page.goto(
      "/events/cr4ckout-2-0"
    );


    const detail =
      page.locator(
        '[data-event-detail-design="v43"]'
      );


    await expect(
      detail
    ).toHaveCount(
      1
    );


    for (
      const destination
      of [
        "/cr4ckout",
        "/events",
        "/activities"
      ]
    ) {

      const links =
        detail.locator(
          `a[href="${destination}"]`
        );


      const count =
        await links.count();


      expect(
        count
      ).toBeGreaterThanOrEqual(
        1
      );


      await expect(
        links.first()
      ).toBeVisible();

    }

  }
);


test(
  "event detail has no horizontal overflow",
  async ({
    page
  }) => {

    for (
      const viewport
      of [
        {
          width:
            1440,

          height:
            900
        },
        {
          width:
            1024,

          height:
            768
        },
        {
          width:
            768,

          height:
            1024
        },
        {
          width:
            430,

          height:
            932
        },
        {
          width:
            390,

          height:
            844
        },
        {
          width:
            360,

          height:
            800
        }
      ]
    ) {

      await page.setViewportSize(
        viewport
      );


      await page.goto(
        "/events/cr4ckout-2-0"
      );


      const geometry =
        await page.evaluate(
          () => ({
            scroll:
              document.documentElement.scrollWidth,

            client:
              document.documentElement.clientWidth
          })
        );


      expect(
        geometry.scroll,
        `${viewport.width}px viewport`
      ).toBeLessThanOrEqual(
        geometry.client
        +
        1
      );

    }

  }
);


test(
  "top-level events page does not receive the detail presentation",
  async ({
    page
  }) => {

    await page.goto(
      "/events"
    );


    await expect(
      page.locator(
        '[data-event-detail-design="v43"]'
      )
    ).toHaveCount(
      0
    );

  }
);
