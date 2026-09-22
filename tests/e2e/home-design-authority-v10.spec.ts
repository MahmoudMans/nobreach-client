import {
  expect,
  test,
} from "@playwright/test";


test(
  "homepage applies the No Breach V10 authority",
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
      "/",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    await expect(
      page.locator(
        '[data-home-design="authority-v10"]'
      )
    ).toHaveCount(
      5
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            /offensive security built around how real systems fail/i,
        }
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "link",
        {
          name:
            /explore services/i,
        }
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "link",
        {
          name:
            /contact no breach/i,
        }
      )
    ).toBeVisible();

  }
);


test(
  "homepage services behave as a commercial service index",
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
      "/",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    const section =
      page.locator(
        '[data-home-section="services"]'
      );


    await section
      .scrollIntoViewIfNeeded();


    await expect(
      section
    ).toBeVisible();


    const rows =
      section.locator(
        'a[href^="/services/"]'
      );


    await expect(
      rows
    ).toHaveCount(
      4
    );


    const geometry =
      await rows.evaluateAll(
        elements =>
          elements.map(
            element => {

              const rect =
                element.getBoundingClientRect();


              return {
                width:
                  rect.width,

                height:
                  rect.height,

                y:
                  rect.y,
              };

            }
          )
      );


    expect(
      geometry
    ).toHaveLength(
      4
    );


    for (
      const row
      of geometry
    ) {

      expect(
        row.width
      ).toBeGreaterThan(
        700
      );


      expect(
        row.height
      ).toBeGreaterThan(
        80
      );

    }


    expect(
      geometry[1].y
    ).toBeGreaterThan(
      geometry[0].y
    );

  }
);


test(
  "homepage ecosystem is a directory rather than a card wall",
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
      "/",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    const section =
      page.locator(
        '[data-home-section="explore"]'
      );


    await section
      .scrollIntoViewIfNeeded();


    await expect(
      section
    ).toBeVisible();


    const rows =
      section.locator(
        "a"
      );


    await expect(
      rows
    ).toHaveCount(
      7
    );


    const geometry =
      await rows.evaluateAll(
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
                width:
                  rect.width,

                y:
                  rect.y,

                radius:
                  style.borderRadius,

                background:
                  style.backgroundColor,
              };

            }
          )
      );


    expect(
      geometry
    ).toHaveLength(
      7
    );


    for (
      const row
      of geometry
    ) {

      expect(
        row.width
      ).toBeGreaterThan(
        700
      );


      expect(
        row.radius
      ).toBe(
        "0px"
      );

    }


    expect(
      geometry[1].y
    ).toBeGreaterThan(
      geometry[0].y
    );

  }
);


test(
  "homepage V10 remains sleek and overflow free on mobile",
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
      "/",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    await expect(
      page.locator(
        '[data-home-section="hero"] h1'
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


    await expect(
      page.locator(
        '[data-home-section="contact"]'
      )
    ).toBeAttached();

  }
);
