import {
  expect,
  test
} from "@playwright/test";


test(
  "Activities V46 opens with useful archive context instead of a decorative field log",
  async ({
    page
  }) => {

    await page.goto(
      "/activities"
    );


    await expect(
      page.locator(
        '[data-activities-audit="v46"]'
      )
    ).toBeVisible();


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
    ).toBeVisible();


    const overview =
      page.locator(
        '[data-activities-ui="archive-overview"]'
      );


    await expect(
      overview
    ).toBeVisible();


    await expect(
      overview.getByText(
        "Published records",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      overview.getByText(
        "Represented types",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      page.getByText(
        "FIELD LOG",
        {
          exact:
            true
        }
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "Activities V46 keeps exploration and Events as distinct introduction actions",
  async ({
    page
  }) => {

    await page.goto(
      "/activities"
    );


    const intro =
      page.locator(
        '[data-activities-section="intro"]'
      );


    await expect(
      intro.getByRole(
        "link",
        {
          name:
            /Explore the archive/
        }
      )
    ).toHaveAttribute(
      "href",
      "#archive"
    );


    await expect(
      intro.getByRole(
        "link",
        {
          name:
            /Events/
        }
      )
    ).toHaveAttribute(
      "href",
      "/events"
    );

  }
);


test(
  "Activities V46 exposes filter counts while preserving the complete taxonomy",
  async ({
    page
  }) => {

    await page.goto(
      "/activities"
    );


    const filters =
      page.locator(
        '[data-activities-ui="filter-toolbar"] [data-activity-filter]'
      );


    await expect(
      filters
    ).toHaveCount(
      8
    );


    for (
      const filter
      of
      [
        "all",
        "conference",
        "training",
        "workshop",
        "ctf",
        "university",
        "community",
        "media"
      ]
    ) {

      const item =
        page.locator(
          `[data-activity-filter="${filter}"]`
        );


      await expect(
        item
      ).toBeVisible();


      await expect(
        item
      ).toHaveAttribute(
        "aria-label",
        /records?/
      );

    }

  }
);


test(
  "Activity filters remain URL-backed and expose the active record set",
  async ({
    page
  }) => {

    await page.goto(
      "/activities?type=training"
    );


    await expect(
      page
        .locator(
          '[data-activity-filter="training"]'
        )
    ).toHaveAttribute(
      "aria-current",
      "page"
    );


    const rows =
      page.locator(
        '[data-activity-row="true"]'
      );


    await expect(
      rows
    ).toHaveCount(
      2
    );


    const categories =
      await rows.evaluateAll(
        elements =>
          elements.map(
            element =>
              element.getAttribute(
                "data-activity-category"
              )
          )
      );


    expect(
      categories
    ).toEqual([
      "training",
      "training"
    ]);

  }
);


test(
  "zero-record filters communicate the empty result and recovery",
  async ({
    page
  }) => {

    await page.goto(
      "/activities?type=conference"
    );


    await expect(
      page.locator(
        '[data-activities-empty="true"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "No published activity matches this filter."
        }
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "link",
        {
          name:
            /Reset filter/
        }
      )
    ).toHaveAttribute(
      "href",
      "/activities"
    );

  }
);


test(
  "published activity rows preserve record context and dedicated destinations",
  async ({
    page
  }) => {

    await page.goto(
      "/activities"
    );


    const rows =
      page.locator(
        '[data-activity-row="true"]'
      );


    await expect(
      rows
    ).toHaveCount(
      5
    );


    const first =
      rows.first();


    await expect(
      first.locator(
        "h3"
      )
    ).toBeVisible();


    await expect(
      first.getByRole(
        "link",
        {
          name:
            /View activity/
        }
      )
    ).toHaveAttribute(
      "href",
      /^\/activities\/.+/
    );

  }
);


test(
  "verified LinkedIn activity remains a distinct evidence source",
  async ({
    page
  }) => {

    await page.goto(
      "/activities"
    );


    const section =
      page.locator(
        '[data-linkedin-activity-section]'
      );


    await expect(
      section
    ).toBeVisible();


    await expect(
      section.locator(
        '[data-linkedin-post]'
      )
    ).toHaveCount(
      14
    );

  }
);


test(
  "Activities V46 preserves ecosystem destinations",
  async ({
    page
  }) => {

    await page.goto(
      "/activities"
    );


    const finalCta =
      page.locator(
        '[data-activities-section="final-cta"]'
      );


    await expect(
      finalCta.getByRole(
        "link",
        {
          name:
            /Explore events/
        }
      )
    ).toHaveAttribute(
      "href",
      "/events"
    );


    await expect(
      finalCta.getByRole(
        "link",
        {
          name:
            /Discover CR4CKOUT/
        }
      )
    ).toHaveAttribute(
      "href",
      "/cr4ckout"
    );

  }
);


test(
  "Activities V46 keeps primary page regions on one outer frame",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        1440,
      height:
        900
    });


    await page.goto(
      "/activities"
    );


    const frames =
      page.locator(
        '[data-activities-frame]'
      );


    await expect(
      frames
    ).toHaveCount(
      3
    );


    const geometry =
      await frames.evaluateAll(
        elements =>
          elements.map(
            element => {

              const rect =
                element.getBoundingClientRect();


              return {
                x:
                  rect.x,

                width:
                  rect.width
              };

            }
          )
      );


    const xs =
      geometry.map(
        item =>
          item.x
      );


    const widths =
      geometry.map(
        item =>
          item.width
      );


    expect(
      Math.max(
        ...xs
      )
      -
      Math.min(
        ...xs
      )
    ).toBeLessThanOrEqual(
      1
    );


    expect(
      Math.max(
        ...widths
      )
      -
      Math.min(
        ...widths
      )
    ).toBeLessThanOrEqual(
      1
    );

  }
);


for (
  const viewport
  of
  [
    {
      label:
        "320",
      width:
        320,
      height:
        800
    },
    {
      label:
        "390",
      width:
        390,
      height:
        844
    },
    {
      label:
        "768",
      width:
        768,
      height:
        1024
    },
    {
      label:
        "1024",
      width:
        1024,
      height:
        768
    },
    {
      label:
        "1440",
      width:
        1440,
      height:
        900
    }
  ]
) {

  test(
    `Activities V46 remains contained at ${viewport.label}`,
    async ({
      page
    }) => {

      await page.setViewportSize({
        width:
          viewport.width,
        height:
          viewport.height
      });


      await page.goto(
        "/activities"
      );


      await expect(
        page.locator(
          '[data-activities-audit="v46"]'
        )
      ).toBeVisible();


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
      ).toBeVisible();


      const dimensions =
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
        dimensions.scrollWidth
      ).toBeLessThanOrEqual(
        dimensions.clientWidth
        +
        1
      );

    }
  );

}
