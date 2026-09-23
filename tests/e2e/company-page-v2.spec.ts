import {
  expect,
  test
} from "@playwright/test";


async function ready(
  page:
    import("@playwright/test").Page
) {

  const company =
    page.locator(
      '[data-company-page="v4"]'
    );


  await expect(
    company
  ).toBeVisible();


  await expect(
    page.getByRole(
      "heading",
      {
        level:
          1,

        name:
          /offensive security beyond the assessment/i
      }
    )
  ).toBeVisible();


  return company;

}


test(
  "company V15 renders the concise corporate architecture",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    const company =
      await ready(
        page
      );


    for (
      const section
      of [
        "hero",
        "who-we-are",
        "what-we-do",
        "principles",
        "timeline",
        "founder",
        "team",
        "cta"
      ]
    ) {

      await expect(
        company.locator(
          `[data-company-section="${section}"]`
        )
      ).toBeVisible();

    }


    await expect(
      company.locator(
        '[data-company-section="story"]'
      )
    ).toHaveCount(
      0
    );


    await expect(
      company.locator(
        '[data-company-section="ecosystem"]'
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "company profile retains four factual items",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    await ready(
      page
    );


    const facts =
      page.locator(
        '[data-company-ui="facts"] > div'
      );


    await expect(
      facts
    ).toHaveCount(
      4
    );

  }
);


test(
  "capabilities use compact editorial rows",
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


    await ready(
      page
    );


    const rows =
      page.locator(
        '[data-company-card="capability"]'
      );


    await expect(
      rows
    ).toHaveCount(
      4
    );


    const first =
      await rows
        .first()
        .boundingBox();


    if (!first) {

      throw new Error(
        "Capability geometry unavailable"
      );

    }


    expect(
      first.height
    ).toBeGreaterThan(
      150
    );


    expect(
      first.height
    ).toBeLessThan(
      230
    );

  }
);


test(
  "company retains three operating principles",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    await ready(
      page
    );


    await expect(
      page.locator(
        '[data-company-card="principle"]'
      )
    ).toHaveCount(
      3
    );

  }
);


test(
  "founder and people destinations remain available",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    await ready(
      page
    );


    await expect(
      page.locator(
        '[data-company-card="founder"]'
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-company-card="people"]'
      )
    ).toHaveCount(
      2
    );

  }
);


test(
  "company V15 remains overflow-free on mobile",
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


    await ready(
      page
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
);
