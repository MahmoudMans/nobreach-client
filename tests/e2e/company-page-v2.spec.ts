import {
  expect,
  test
} from "@playwright/test";


test(
  "Company V19 renders three editorial chapters",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    await expect(
      page.locator(
        '[data-company-design-system="v19"]'
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-company-content-section]'
      )
    ).toHaveCount(
      3
    );


    await expect(
      page.locator(
        '[data-company-section="cta"]'
      )
    ).toBeAttached();

  }
);


test(
  "Company identity uses a connected operating model",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    const section =
      page.locator(
        '[data-company-content-section="identity"]'
      );


    await section.scrollIntoViewIfNeeded();


    await expect(
      section
    ).toBeVisible();


    for (
      const text
      of [
        "Security services",
        "Practical education",
        "Community"
      ]
    ) {

      await expect(
        section.getByText(
          text,
          {
            exact:
              true
          }
        )
      ).toBeVisible();

    }


    await expect(
      section.locator(
        '[data-company-ui="facts"]'
      )
    ).toBeVisible();

  }
);


test(
  "Company capability system uses four compact index rows",
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
      "/company"
    );


    const section =
      page.locator(
        '[data-company-content-section="capabilities"]'
      );


    await section.scrollIntoViewIfNeeded();


    const rows =
      section.locator(
        '[data-company-card="capability"]'
      );


    await expect(
      rows
    ).toHaveCount(
      4
    );


    const heights =
      await rows.evaluateAll(
        elements =>
          elements.map(
            element =>
              element
                .getBoundingClientRect()
                .height
          )
      );


    for (
      const height
      of heights
    ) {

      expect(
        height
      ).toBeGreaterThan(
        80
      );


      expect(
        height
      ).toBeLessThan(
        130
      );

    }

  }
);


test(
  "Company final chapter combines timeline founder and destinations",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    const section =
      page.locator(
        '[data-company-content-section="people"]'
      );


    await section.scrollIntoViewIfNeeded();


    await expect(
      section.locator(
        '[data-company-card="timeline"]'
      )
    ).toHaveCount(
      5
    );


    await expect(
      section.locator(
        '[data-founder-photo-image="company"]'
      )
    ).toBeVisible();


    await expect(
      section.locator(
        '[data-company-card="people"]'
      )
    ).toHaveCount(
      2
    );

  }
);


test(
  "Company V19 stays overflow free on mobile",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        390,

      height:
        844
    });


    await page.goto(
      "/company"
    );


    const result =
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
      result.scrollWidth
    ).toBeLessThanOrEqual(
      result.clientWidth
      +
      1
    );

  }
);
