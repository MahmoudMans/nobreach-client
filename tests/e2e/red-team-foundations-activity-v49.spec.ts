import {
  expect,
  test
} from "@playwright/test";


const route =
  "/activities/red-team-foundations-2026";


test(
  "Red Team activity V52 opens as a compact published record",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    await expect(
      page.locator(
        '[data-red-team-activity-audit="v52"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,
          name:
            "Red Team Foundations"
        }
      )
    ).toBeVisible();


    await expect(
      page.getByText(
        /offensive-security engagement from reconnaissance through reporting/i
      )
    ).toBeVisible();

  }
);


test(
  "Red Team activity keeps one lightweight breadcrumb",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const breadcrumb =
      page.getByRole(
        "navigation",
        {
          name:
            "Breadcrumb"
        }
      );


    await expect(
      breadcrumb
    ).toBeVisible();


    await expect(
      breadcrumb.getByRole(
        "link",
        {
          name:
            "Activities"
        }
      )
    ).toHaveAttribute(
      "href",
      "/activities"
    );

  }
);


test(
  "Red Team V52 replaces the decorative signal with record context",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    await expect(
      page.locator(
        '[aria-label="Red Team training activity signal"]'
      )
    ).toHaveCount(
      0
    );


    const context =
      page.locator(
        '[data-red-team-activity-ui="record-context"]'
      );


    await expect(
      context
    ).toBeVisible();


    await expect(
      context.locator(
        "dt"
      )
    ).toHaveCount(
      4
    );


    for (
      const value
      of
      [
        "2026",
        "training",
        "Tunis / Online"
      ]
    ) {

      await expect(
        context.getByText(
          value,
          {
            exact:
              true
          }
        )
      ).toBeVisible();

    }


    const recordValue =
      context
        .locator(
          "dd"
        )
        .filter({
          hasText:
            /^Published activity$/
        });


    await expect(
      recordValue
    ).toHaveCount(
      1
    );


    await expect(
      recordValue
    ).toBeVisible();

  }
);


test(
  "Red Team activity introduction leads into the record before conversion",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const intro =
      page.locator(
        '[data-red-team-activity-section="intro"]'
      );


    await expect(
      intro.getByRole(
        "link",
        {
          name:
            /Read activity record/
        }
      )
    ).toHaveAttribute(
      "href",
      "#overview"
    );


    await expect(
      intro.getByRole(
        "link",
        {
          name:
            /Activity archive/
        }
      )
    ).toHaveAttribute(
      "href",
      "/activities"
    );

  }
);


test(
  "Red Team overview preserves the canonical description and five highlights",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const overview =
      page.locator(
        '[data-red-team-activity-section="overview"]'
      );


    await expect(
      overview.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "What this activity covered."
        }
      )
    ).toBeVisible();


    await expect(
      overview.getByText(
        /sequence and discipline behind offensive-security work/i
      )
    ).toBeVisible();


    const highlights =
      overview.locator(
        '[data-red-team-activity-ui="published-highlights"] li'
      );


    await expect(
      highlights
    ).toHaveCount(
      5
    );


    for (
      const highlight
      of
      [
        "Reconnaissance",
        "Attack-surface discovery",
        "Privilege concepts",
        "Operational discipline",
        "Security reporting"
      ]
    ) {

      await expect(
        overview.getByText(
          highlight,
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
  "Red Team V52 consolidates both canonical narrative sections",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const record =
      page.locator(
        '[data-red-team-activity-section="record"]'
      );


    const rows =
      record.locator(
        '[data-red-team-activity-record-section]'
      );


    await expect(
      rows
    ).toHaveCount(
      2
    );


    await expect(
      record.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "From isolated techniques to methodology"
        }
      )
    ).toBeVisible();


    await expect(
      record.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "Operational thinking"
        }
      )
    ).toBeVisible();

  }
);


test(
  "Red Team V52 has one current-programme handoff",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    await expect(
      page.locator(
        '[data-red-team-activity-section="final-cta"]'
      )
    ).toHaveCount(
      0
    );


    const context =
      page.locator(
        '[data-red-team-activity-section="context"]'
      );


    await expect(
      context.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Continue into the current Red Team Foundations programme."
        }
      )
    ).toBeVisible();


    await expect(
      context.getByRole(
        "link",
        {
          name:
            /View related course/
        }
      )
    ).toHaveAttribute(
      "href",
      "/training/red-team-foundations"
    );


    await expect(
      context.getByRole(
        "link",
        {
          name:
            /Activity archive/
        }
      )
    ).toHaveAttribute(
      "href",
      "/activities"
    );

  }
);


test(
  "Red Team V52 keeps one purposeful section sequence",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const order =
      await page
        .locator(
          '[data-red-team-activity-section]'
        )
        .evaluateAll(
          elements =>
            elements.map(
              element =>
                element.getAttribute(
                  "data-red-team-activity-section"
                )
            )
        );


    expect(
      order
    ).toEqual([
      "intro",
      "overview",
      "record",
      "context"
    ]);

  }
);


test(
  "Red Team V52 uses one shared content frame",
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
      route
    );


    const frames =
      page.locator(
        '[data-red-team-activity-frame]'
      );


    await expect(
      frames
    ).toHaveCount(
      4
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


test(
  "Red Team V52 reduces the oversized opening composition",
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
      route
    );


    const height =
      await page
        .locator(
          '[data-red-team-activity-section="intro"]'
        )
        .evaluate(
          element =>
            element
              .getBoundingClientRect()
              .height
        );


    expect(
      height
    ).toBeLessThan(
      650
    );

  }
);


test(
  "Red Team activity remains distinct from the current course detail",
  async ({
    page
  }) => {

    await page.goto(
      "/training/red-team-foundations"
    );


    await expect(
      page.locator(
        '[data-red-team-activity-audit="v52"]'
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "other activity routes remain isolated from Red Team V52",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/ai-security-foundations-2026"
    );


    await expect(
      page.locator(
        '[data-red-team-activity-audit="v52"]'
      )
    ).toHaveCount(
      0
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
    `Red Team activity V52 remains contained at ${viewport.label}`,
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
        route
      );


      await expect(
        page.locator(
          '[data-red-team-activity-audit="v52"]'
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
