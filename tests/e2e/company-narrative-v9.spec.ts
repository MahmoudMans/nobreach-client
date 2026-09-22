import {
  expect,
  test,
} from "@playwright/test";


test(
  "company V9 uses narrative rows instead of repeated cards",
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
        '[data-company-design="v9"]'
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


    const capability1 =
      await capabilities
        .nth(
          0
        )
        .boundingBox();


    const capability2 =
      await capabilities
        .nth(
          1
        )
        .boundingBox();


    if (
      !capability1
      ||
      !capability2
    ) {

      throw new Error(
        "Capability geometry unavailable"
      );

    }


    expect(
      Math.abs(
        capability1.width
        -
        capability2.width
      )
    ).toBeLessThanOrEqual(
      3
    );


    expect(
      capability2.y
    ).toBeGreaterThan(
      capability1.y
      +
      capability1.height
      -
      2
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


    const principle1 =
      await principles
        .nth(
          0
        )
        .boundingBox();


    const principle2 =
      await principles
        .nth(
          1
        )
        .boundingBox();


    if (
      !principle1
      ||
      !principle2
    ) {

      throw new Error(
        "Principle geometry unavailable"
      );

    }


    expect(
      principle2.y
    ).toBeGreaterThan(
      principle1.y
      +
      principle1.height
      -
      2
    );

  }
);


test(
  "company V9 uses an alternating timeline",
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


    const timeline =
      page.locator(
        '[data-company-card="timeline"]'
      );


    await expect(
      timeline
    ).toHaveCount(
      5
    );


    /*
     * The timeline lives well below the initial viewport.
     * Synchronize the real rendered items before comparing their
     * alternating horizontal positions.
     */
    await timeline
      .nth(
        0
      )
      .scrollIntoViewIfNeeded();


    await expect(
      timeline.nth(
        0
      )
    ).toBeVisible();


    await timeline
      .nth(
        1
      )
      .scrollIntoViewIfNeeded();


    await expect(
      timeline.nth(
        1
      )
    ).toBeVisible();


    const geometry =
      await timeline.evaluateAll(
        elements =>
          elements
            .slice(
              0,
              2
            )
            .map(
              element => {

                const rect =
                  element.getBoundingClientRect();


                const style =
                  window.getComputedStyle(
                    element
                  );


                return {
                  x:
                    rect.x,

                  y:
                    rect.y,

                  width:
                    rect.width,

                  height:
                    rect.height,

                  display:
                    style.display,

                  visibility:
                    style.visibility,
                };

              }
            )
      );


    expect(
      geometry
    ).toHaveLength(
      2
    );


    const [
      first,
      second,
    ] = geometry;


    expect(
      first.display
    ).not.toBe(
      "none"
    );


    expect(
      second.display
    ).not.toBe(
      "none"
    );


    expect(
      first.visibility
    ).not.toBe(
      "hidden"
    );


    expect(
      second.visibility
    ).not.toBe(
      "hidden"
    );


    expect(
      first.width
    ).toBeGreaterThan(
      0
    );


    expect(
      first.height
    ).toBeGreaterThan(
      0
    );


    expect(
      second.width
    ).toBeGreaterThan(
      0
    );


    expect(
      second.height
    ).toBeGreaterThan(
      0
    );


    /*
     * Item 01 occupies the left timeline column and item 02 the right.
     */
    expect(
      first.x
    ).toBeLessThan(
      second.x
    );

  }
);



test(
  "company V9 people area behaves as directory rows",
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


    const people =
      page.locator(
        '[data-company-card="people"]'
      );


    await expect(
      people
    ).toHaveCount(
      2
    );


    /*
     * Synchronize the actual rendered directory rows before geometry
     * sampling. The previous contract counted the DOM nodes but could
     * measure them before the lower page region had completed layout.
     */
    await people
      .nth(
        0
      )
      .scrollIntoViewIfNeeded();


    await expect(
      people.nth(
        0
      )
    ).toBeVisible();


    await people
      .nth(
        1
      )
      .scrollIntoViewIfNeeded();


    await expect(
      people.nth(
        1
      )
    ).toBeVisible();


    const geometry =
      await people.evaluateAll(
        elements =>
          elements.map(
            element => {

              const rect =
                element.getBoundingClientRect();


              const style =
                window.getComputedStyle(
                  element
                );


              return {
                x:
                  rect.x,

                y:
                  rect.y,

                width:
                  rect.width,

                height:
                  rect.height,

                display:
                  style.display,

                visibility:
                  style.visibility,
              };

            }
          )
      );


    expect(
      geometry
    ).toHaveLength(
      2
    );


    const [
      first,
      second,
    ] = geometry;


    expect(
      first.display
    ).not.toBe(
      "none"
    );


    expect(
      second.display
    ).not.toBe(
      "none"
    );


    expect(
      first.visibility
    ).not.toBe(
      "hidden"
    );


    expect(
      second.visibility
    ).not.toBe(
      "hidden"
    );


    expect(
      first.width
    ).toBeGreaterThan(
      0
    );


    expect(
      first.height
    ).toBeGreaterThan(
      0
    );


    expect(
      second.width
    ).toBeGreaterThan(
      0
    );


    expect(
      second.height
    ).toBeGreaterThan(
      0
    );


    expect(
      second.y
    ).toBeGreaterThan(
      first.y
      +
      first.height
      -
      2
    );

  }
);



test(
  "company V9 remains controlled on mobile",
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
        '[data-company-design="v9"] h1'
      )
    ).toBeVisible();


    const result =
      await page.evaluate(
        () => ({
          scrollWidth:
            document.documentElement.scrollWidth,

          clientWidth:
            document.documentElement.clientWidth,
        })
      );


    expect(
      result.scrollWidth
    ).toBeLessThanOrEqual(
      result.clientWidth + 1
    );

  }
);
