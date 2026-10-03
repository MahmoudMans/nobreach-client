import {
  expect,
  test
} from "@playwright/test";


// NB_EVENTS_V70_LEGACY_UPCOMING_CONTRACT
// Upcoming remains represented when empty; V69 removes the duplicate
// nested heading and exposes the semantic UPCOMING / WAITING state.

test(
  "Events renders one index experience",
  async ({
    page
  }) => {

    const response =
      await page.goto(
        "/events"
      );


    expect(
      response?.status()
    ).toBe(
      200
    );


    const root =
      page.locator(
        '[data-events-index-design="v44"]'
      );


    await expect(
      root
    ).toHaveCount(
      1
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            "Events."
        }
      )
    ).toHaveCount(
      1
    );

  }
);


test(
  "event state groups follow upcoming ongoing past order",
  async ({
    page
  }) => {

    await page.goto(
      "/events"
    );


    const states =
      await page.locator(
        "[data-event-state]"
      ).evaluateAll(
        elements =>
          elements.map(
            element =>
              element.getAttribute(
                "data-event-state"
              )
          )
      );


    const order =
      {
        upcoming:
          0,

        ongoing:
          1,

        past:
          2
      } as const;


    expect(
      states[
        0
      ]
    ).toBe(
      "upcoming"
    );


    for (
      let index =
        1;
      index
      <
      states.length;
      index +=
        1
    ) {

      const previous =
        states[
          index
          -
          1
        ];


      const current =
        states[
          index
        ];


      if (
        !previous
        ||
        !current
      ) {

        continue;

      }


      expect(
        order[
          current as keyof typeof order
        ]
      ).toBeGreaterThan(
        order[
          previous as keyof typeof order
        ]
      );

    }

  }
);


test(
  "Upcoming is never silently hidden",
  async ({
    page
  }) => {

    await page.goto(
      "/events"
    );


    const upcoming =
      page.locator(
        '[data-event-state="upcoming"]'
      );


    await expect(
      upcoming
    ).toBeVisible();


    const eventCount =
      await upcoming.locator(
        '[data-event-row="upcoming"]'
      ).count();


    if (
      eventCount
      ===
      0
    ) {

      await expect(
        upcoming.getByText(
          "UPCOMING / WAITING",
          {
            exact:
              true
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "published event rows lead to event details",
  async ({
    page
  }) => {

    await page.goto(
      "/events"
    );


    const rows =
      page.locator(
        "[data-event-row]"
      );


    const count =
      await rows.count();


    if (
      count
      >
      0
    ) {

      for (
        let index =
          0;
        index
        <
        count;
        index +=
          1
      ) {

        const href =
          await rows
            .nth(
              index
            )
            .getByRole(
              "link",
              {
                name:
                  /view event/i
              }
            )
            .getAttribute(
              "href"
            );


        expect(
          href
        ).toMatch(
          /^\/events\/[^/]+$/
        );

      }

    }

  }
);


test(
  "events index does not leak into event detail route",
  async ({
    page
  }) => {

    await page.goto(
      "/events/cr4ckout-2-0"
    );


    await expect(
      page.locator(
        '[data-events-index-design="v44"]'
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "Events remains overflow-free at representative widths",
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
            1180,

          height:
            820
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
        "/events"
      );


      const dimensions =
        await page.evaluate(
          () => ({
            scroll:
              document.documentElement.scrollWidth,

            client:
              document.documentElement.clientWidth
          })
        );


      expect(
        dimensions.scroll,
        `${viewport.width}px viewport`
      ).toBeLessThanOrEqual(
        dimensions.client
        +
        1
      );

    }

  }
);
