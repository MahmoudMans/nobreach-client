import {
  expect,
  test,
} from "@playwright/test";


test(
  "company V8 renders the refined editorial experience",
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


    await expect(
      page.locator(
        '[data-company-design="v8"]'
      )
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
      Math.abs(
        first.width
        -
        second.width
      )
    ).toBeLessThanOrEqual(
      4
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


    const p1 =
      await principles
        .nth(
          0
        )
        .boundingBox();


    const p2 =
      await principles
        .nth(
          1
        )
        .boundingBox();


    const p3 =
      await principles
        .nth(
          2
        )
        .boundingBox();


    if (
      !p1
      ||
      !p2
      ||
      !p3
    ) {

      throw new Error(
        "Principle geometry unavailable"
      );

    }


    expect(
      Math.abs(
        p1.y
        -
        p2.y
      )
    ).toBeLessThanOrEqual(
      4
    );


    expect(
      Math.abs(
        p2.y
        -
        p3.y
      )
    ).toBeLessThanOrEqual(
      4
    );

  }
);


test(
  "company V8 preserves all useful sections",
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
        '[data-company-ui="facts"]'
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-company-ui="approach-flow"] article'
      )
    ).toHaveCount(
      3
    );


    await expect(
      page.locator(
        '[data-company-card="capability"]'
      )
    ).toHaveCount(
      4
    );


    await expect(
      page.locator(
        '[data-company-card="principle"]'
      )
    ).toHaveCount(
      3
    );


    await expect(
      page.locator(
        '[data-company-card="ecosystem"]'
      )
    ).toHaveCount(
      4
    );


    await expect(
      page.locator(
        '[data-company-card="timeline"]'
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
        '[data-company-card="people"]'
      )
    ).toHaveCount(
      2
    );

  }
);


test(
  "company V8 remains clean on mobile",
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
        '[data-company-design="v8"] h1'
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
