import {
  expect,
  test
} from "@playwright/test";


const ROUTE =
  "/events";


test(
  "Events renders the V68 state-driven index",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
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
      root
    ).toHaveAttribute(
      "data-events-audit-redesign",
      "v68"
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level: 1,
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
  "Events exposes three stable page chapters",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    await expect(
      page.locator(
        '[data-events-section="current"]'
      )
    ).toHaveCount(
      1
    );


    await expect(
      page.locator(
        '[data-events-section="archive"]'
      )
    ).toHaveCount(
      1
    );


    await expect(
      page.locator(
        '[data-events-section="final-cta"]'
      )
    ).toHaveCount(
      1
    );


    await expect(
      page.getByText(
        "01",
        {
          exact: true
        }
      ).first()
    ).toBeVisible();


    await expect(
      page.getByText(
        "02",
        {
          exact: true
        }
      ).first()
    ).toBeVisible();


    await expect(
      page.getByText(
        "03",
        {
          exact: true
        }
      ).first()
    ).toBeVisible();

  }
);


test(
  "Upcoming remains visible even when no event is announced",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const upcoming =
      page.locator(
        '[data-event-state="upcoming"]'
      );


    await expect(
      upcoming
    ).toHaveCount(
      1
    );


    const rowCount =
      await upcoming
        .locator(
          '[data-event-row="upcoming"]'
        )
        .count();


    if (
      rowCount
      ===
      0
    ) {

      await expect(
        upcoming.getByText(
          "No upcoming event has been announced.",
          {
            exact: true
          }
        )
      ).toBeVisible();


      await expect(
        upcoming.locator(
          '[data-events-empty="upcoming"]'
        )
      ).toBeVisible();

    }

  }
);


test(
  "hero publication counts match rendered status records",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const upcomingRows =
      await page
        .locator(
          '[data-event-row="upcoming"]'
        )
        .count();


    const ongoingRows =
      await page
        .locator(
          '[data-event-row="ongoing"]'
        )
        .count();


    const pastRows =
      await page
        .locator(
          '[data-event-row="past"]'
        )
        .count();


    await expect(
      page.locator(
        '[data-event-status-count="upcoming"]'
      )
    ).toHaveText(
      String(
        upcomingRows
      ).padStart(
        2,
        "0"
      )
    );


    await expect(
      page.locator(
        '[data-event-status-count="ongoing"]'
      )
    ).toHaveText(
      String(
        ongoingRows
      ).padStart(
        2,
        "0"
      )
    );


    await expect(
      page.locator(
        '[data-event-status-count="past"]'
      )
    ).toHaveText(
      String(
        pastRows
      ).padStart(
        2,
        "0"
      )
    );

  }
);


test(
  "event-state DOM order remains upcoming ongoing past",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const statuses =
      await page
        .locator(
          "[data-event-state]"
        )
        .evaluateAll(
          nodes =>
            nodes.map(
              node =>
                node.getAttribute(
                  "data-event-state"
                )
            )
        );


    const rank =
      {
        upcoming: 0,
        ongoing: 1,
        past: 2
      } as const;


    const numeric =
      statuses.map(
        status =>
          rank[
            status as keyof typeof rank
          ]
      );


    expect(
      numeric
    ).toEqual(
      [
        ...numeric
      ].sort(
        (
          a,
          b
        ) =>
          a
          -
          b
      )
    );

  }
);


test(
  "published event records retain detail navigation",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const rows =
      page.locator(
        "[data-event-row]"
      );


    const count =
      await rows.count();


    for (
      let index = 0;
      index < count;
      index += 1
    ) {

      const row =
        rows.nth(
          index
        );


      const action =
        row.getByRole(
          "link",
          {
            name:
              /View event/
          }
        );


      await expect(
        action
      ).toHaveAttribute(
        "href",
        /^\/events\/.+/
      );

    }

  }
);


test(
  "current and archive sections remain compact on desktop",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width: 1440,
      height: 900
    });


    await page.goto(
      ROUTE
    );


    for (
      const selector
      of [
        '[data-events-section="current"]',
        '[data-events-section="archive"]',
        '[data-events-section="final-cta"]'
      ]
    ) {

      const height =
        await page
          .locator(
            selector
          )
          .evaluate(
            element =>
              element.getBoundingClientRect().height
          );


      expect(
        height
      ).toBeLessThan(
        760
      );

    }

  }
);


test(
  "Events remains horizontally contained",
  async ({
    page
  }) => {

    const viewports = [
      {
        width: 1440,
        height: 900
      },
      {
        width: 1024,
        height: 768
      },
      {
        width: 768,
        height: 900
      },
      {
        width: 390,
        height: 844
      },
      {
        width: 320,
        height: 760
      }
    ];


    for (
      const viewport
      of viewports
    ) {

      await page.setViewportSize(
        viewport
      );


      await page.goto(
        ROUTE
      );


      const overflow =
        await page.evaluate(
          () =>
            document.documentElement.scrollWidth
            -
            document.documentElement.clientWidth
        );


      expect(
        overflow
      ).toBeLessThanOrEqual(
        1
      );

    }

  }
);
