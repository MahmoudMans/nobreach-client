import {
  expect,
  test,
} from "@playwright/test";


test(
  "company V7 renders the creative editorial system",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        1440,

      height:
        900,
    });


    await page.goto(
      "/company",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    const root =
      page.locator(
        '[data-company-design="v7"]'
      );


    await expect(
      root
    ).toBeVisible();


    const capabilities =
      page.locator(
        '[data-company-card="capability"]'
      );


    await expect(
      capabilities
    ).toHaveCount(
      4
    );


    const first =
      await capabilities
        .nth(
          0
        )
        .boundingBox();


    const second =
      await capabilities
        .nth(
          1
        )
        .boundingBox();


    expect(
      first
    ).not.toBeNull();


    expect(
      second
    ).not.toBeNull();


    if (
      !first
      ||
      !second
    ) {
      throw new Error(
        "Capability geometry unavailable"
      );
    }


    expect(
      first.width
    ).toBeGreaterThan(
      second.width
    );


    const principles =
      page.locator(
        '[data-company-card="principle"]'
      );


    await expect(
      principles
    ).toHaveCount(
      3
    );


    const principleOne =
      await principles
        .nth(
          0
        )
        .boundingBox();


    const principleTwo =
      await principles
        .nth(
          1
        )
        .boundingBox();


    if (
      !principleOne
      ||
      !principleTwo
    ) {
      throw new Error(
        "Principle geometry unavailable"
      );
    }


    expect(
      principleTwo.y
    ).toBeGreaterThan(
      principleOne.y + 10
    );

  }
);


test(
  "company V7 preserves the useful content architecture",
  async ({
    page
  }) => {

    await page.goto(
      "/company",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    await expect(
      page.locator(
        '[data-company-ui="approach-flow"] article'
      )
    ).toHaveCount(
      3
    );


    await expect(
      page.locator(
        '[data-company-ui="ecosystem-grid"] [data-company-card="ecosystem"]'
      )
    ).toHaveCount(
      4
    );


    await expect(
      page.locator(
        '[data-company-ui="timeline-grid"] [data-company-card="timeline"]'
      )
    ).toHaveCount(
      5
    );


    await expect(
      page.locator(
        '[data-company-card="founder"]'
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-company-ui="people-grid"] [data-company-card="people"]'
      )
    ).toHaveCount(
      2
    );

  }
);


test(
  "company V7 remains controlled on mobile",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        390,

      height:
        844,
    });


    await page.goto(
      "/company",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    await expect(
      page.locator(
        '[data-company-design="v7"] h1'
      )
    ).toBeVisible();


    const geometry =
      await page.evaluate(
        () => ({
          scrollWidth:
            document.documentElement.scrollWidth,

          clientWidth:
            document.documentElement.clientWidth,
        })
      );


    expect(
      geometry.scrollWidth
    ).toBeLessThanOrEqual(
      geometry.clientWidth + 1
    );

  }
);
