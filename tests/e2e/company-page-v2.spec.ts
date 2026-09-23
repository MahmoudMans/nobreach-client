import {
  expect,
  test
} from "@playwright/test";


test(
  "company V18 presents exactly three real content chapters",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    await expect(
      page.locator(
        '[data-company-section="hero"]'
      )
    ).toBeVisible();


    const sections =
      page.locator(
        '[data-company-content-section]'
      );


    await expect(
      sections
    ).toHaveCount(
      3
    );


    for (
      const name
      of [
        "company",
        "capabilities",
        "people-journey"
      ]
    ) {

      await expect(
        page.locator(
          `[data-company-content-section="${name}"]`
        )
      ).toBeAttached();

    }


    await expect(
      page.locator(
        '[data-company-section="cta"]'
      )
    ).toBeAttached();

  }
);


test(
  "Company and operating model share the first chapter",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    const section =
      page.locator(
        '[data-company-content-section="company"]'
      );


    await section.scrollIntoViewIfNeeded();


    await expect(
      section
    ).toBeVisible();


    await expect(
      section.getByText(
        "Operating model",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      section.getByText(
        "Security services",
        {
          exact:
            true
        }
      )
    ).toBeVisible();

  }
);


test(
  "Capabilities and principles share the second chapter",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    const section =
      page.locator(
        '[data-company-content-section="capabilities"]'
      );


    await section.scrollIntoViewIfNeeded();


    await expect(
      section.locator(
        '[data-company-card="capability"]'
      )
    ).toHaveCount(
      4
    );


    await expect(
      section.locator(
        '[data-company-card="principle"]'
      )
    ).toHaveCount(
      3
    );

  }
);


test(
  "Journey founder and people share the third chapter",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    const section =
      page.locator(
        '[data-company-content-section="people-journey"]'
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
        '[data-company-card="founder"]'
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
  "company V18 stays overflow free on mobile",
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
