import {
  expect,
  test
} from "@playwright/test";


test(
  "Activities renders the strict archive experience",
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


    const root =
      page.locator(
        '[data-activities-index-design="v45"]'
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
            "Activity archive."
        }
      )
    ).toHaveCount(
      1
    );

  }
);


test(
  "Activity filters use shareable URLs",
  async ({
    page
  }) => {

    await page.goto(
      "/activities"
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


    await expect(
      filters.getByRole(
        "link"
      )
    ).toHaveCount(
      8
    );


    await expect(
      filters.getByRole(
        "link",
        {
          name:
            "Workshop",
          exact:
            true
        }
      )
    ).toHaveAttribute(
      "href",
      "/activities?type=workshop"
    );


    await filters
      .getByRole(
        "link",
        {
          name:
            "Workshop",
          exact:
            true
        }
      )
      .click();


    await expect(
      page
    ).toHaveURL(
      /\/activities\?type=workshop$/
    );


    await expect(
      page.locator(
        '[data-activity-filter="workshop"]'
      )
    ).toHaveAttribute(
      "data-active",
      "true"
    );

  }
);


test(
  "filtered archive contains only the selected category or its real empty state",
  async ({
    page
  }) => {

    await page.goto(
      "/activities?type=training"
    );


    const rows =
      page.locator(
        "[data-activity-row]"
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

  }
);


test(
  "activity rows route to dedicated detail records",
  async ({
    page
  }) => {

    await page.goto(
      "/activities"
    );


    const rows =
      page.locator(
        "[data-activity-row]"
      );


    const count =
      await rows.count();


    expect(
      count
    ).toBeGreaterThan(
      0
    );


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
                /view activity/i
            }
          )
          .getAttribute(
            "href"
          );


      expect(
        href
      ).toMatch(
        /^\/activities\/[^/]+$/
      );

    }

  }
);


test(
  "verified LinkedIn activity remains mounted",
  async ({
    page
  }) => {

    await page.goto(
      "/activities"
    );


    await expect(
      page.locator(
        '[data-activities-section="linkedin"]'
      )
    ).toBeVisible();


    const linkedinLinks =
      page.locator(
        'a[href*="linkedin.com"]'
      );


    await expect(
      linkedinLinks.first()
    ).toBeVisible();


    expect(
      await linkedinLinks.count()
    ).toBeGreaterThanOrEqual(
      1
    );

  }
);


test(
  "Activities remains overflow-free at representative widths",
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
        "/activities"
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
  "activity detail route does not receive index composition",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/cr4ckout-2"
    );


    await expect(
      page.locator(
        '[data-activities-index-design="v45"]'
      )
    ).toHaveCount(
      0
    );

  }
);
