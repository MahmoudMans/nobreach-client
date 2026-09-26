import {
  expect,
  test
} from "@playwright/test";


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


    const root =
      page.locator(
        '[data-event-detail-design="v43"]'
      );


    await expect(
      root.getByRole(
        "link",
        {
          name:
            /explore cr4ckout/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/cr4ckout"
    );


    await expect(
      root.getByRole(
        "link",
        {
          name:
            /all events/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/events"
    );

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
