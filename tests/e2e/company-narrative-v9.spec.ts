import {
  expect,
  test
} from "@playwright/test";


test(
  "Company V19 uses editorial rows instead of a card wall",
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


    const capabilities =
      page.locator(
        '[data-company-card="capability"]'
      );


    await capabilities
      .first()
      .scrollIntoViewIfNeeded();


    await expect(
      capabilities
    ).toHaveCount(
      4
    );


    const boxes =
      await capabilities.evaluateAll(
        elements =>
          elements.map(
            element => {

              const rect =
                element.getBoundingClientRect();


              return {
                width:
                  rect.width,

                height:
                  rect.height
              };

            }
          )
      );


    for (
      const box
      of boxes
    ) {

      expect(
        box.width
      ).toBeGreaterThan(
        800
      );


      expect(
        box.height
      ).toBeLessThan(
        130
      );

    }

  }
);


test(
  "Company timeline is horizontal on desktop",
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
        '[data-company-content-section="people"]'
      );


    await section.scrollIntoViewIfNeeded();


    const items =
      section.locator(
        '[data-company-card="timeline"]'
      );


    await expect(
      items
    ).toHaveCount(
      5
    );


    const boxes =
      await items.evaluateAll(
        elements =>
          elements.map(
            element => {

              const rect =
                element.getBoundingClientRect();


              return {
                x:
                  rect.x,

                y:
                  rect.y
              };

            }
          )
      );


    for (
      let index = 1;
      index < boxes.length;
      index += 1
    ) {

      expect(
        boxes[
          index
        ].x
      ).toBeGreaterThan(
        boxes[
          index - 1
        ].x
      );

    }

  }
);


test(
  "Company timeline becomes vertical on mobile",
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


    const section =
      page.locator(
        '[data-company-content-section="people"]'
      );


    await section.scrollIntoViewIfNeeded();


    const items =
      section.locator(
        '[data-company-card="timeline"]'
      );


    const boxes =
      await items.evaluateAll(
        elements =>
          elements.map(
            element => {

              const rect =
                element.getBoundingClientRect();


              return {
                x:
                  rect.x,

                y:
                  rect.y
              };

            }
          )
      );


    for (
      let index = 1;
      index < boxes.length;
      index += 1
    ) {

      expect(
        boxes[
          index
        ].y
      ).toBeGreaterThan(
        boxes[
          index - 1
        ].y
      );

    }

  }
);
