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

    const response =
      await page.goto(
        "/activities"
      );


    expect(
      response?.status()
    ).toBe(
      200
    );


    const filters =
      page.getByRole(
        "navigation",
        {
          name:
            "Activity filters"
        }
      );


    await expect(
      filters
    ).toBeVisible();


    const training =
      filters.getByRole(
        "link",
        {
          name:
            "Training",
          exact:
            true
        }
      );


    await expect(
      training
    ).toBeVisible();


    await expect(
      training
    ).toHaveAttribute(
      "href",
      "/activities?type=training"
    );


    await training.click();


    await expect(
      page
    ).toHaveURL(
      /\/activities\?type=training$/
    );


    const active =
      page.locator(
        '[data-activity-filter="training"]'
      );


    await expect(
      active
    ).toHaveAttribute(
      "data-active",
      "true"
    );


    await expect(
      active
    ).toHaveAttribute(
      "aria-current",
      "page"
    );


    const rows =
      page.locator(
        '[data-activity-row="true"]'
      );


    const rowCount =
      await rows.count();


    if (
      rowCount
      >
      0
    ) {

      for (
        let index =
          0;
        index
        <
        rowCount;
        index +=
          1
      ) {

        await expect(
          rows.nth(
            index
          )
        ).toHaveAttribute(
          "data-activity-category",
          "training"
        );

      }

    }
    else {

      await expect(
        page.locator(
          '[data-activities-empty="true"]'
        )
      ).toBeVisible();

    }


    const all =
      filters.getByRole(
        "link",
        {
          name:
            "All",
          exact:
            true
        }
      );


    await expect(
      all
    ).toHaveAttribute(
      "href",
      "/activities"
    );


    await all.click();


    await expect(
      page
    ).toHaveURL(
      /\/activities$/
    );


    await expect(
      page.locator(
        '[data-activity-filter="all"]'
      )
    ).toHaveAttribute(
      "data-active",
      "true"
    );

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
