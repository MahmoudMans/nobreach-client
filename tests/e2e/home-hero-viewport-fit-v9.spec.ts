import {
  expect,
  test
} from "@playwright/test";


const route =
  "/";


const desktopProfiles = [
  {
    name:
      "desktop",

    width:
      1440,

    height:
      900
  },
  {
    name:
      "standard-desktop",

    width:
      1280,

    height:
      800
  },
  {
    name:
      "compact-desktop",

    width:
      1180,

    height:
      820
  }
] as const;


for (
  const viewport
  of desktopProfiles
) {

  test(
    `master homepage hero fits the opening viewport at ${viewport.name}`,
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


      const hero =
        page.locator(
          '[data-home-hero="v8"]'
        );


      /*
       * Do not request boundingBox() before establishing visibility.
       * At compact desktop widths the responsive header can settle during
       * the first browser layout cycle.
       */
      await expect(
        hero
      ).toBeVisible({
        timeout:
          10_000
      });


      const metrics =
        await hero.evaluate(
          (
            element
          ) => {

            const rect =
              element.getBoundingClientRect();


            const style =
              getComputedStyle(
                element
              );


            return {
              top:
                rect.top,

              bottom:
                rect.bottom,

              left:
                rect.left,

              right:
                rect.right,

              width:
                rect.width,

              height:
                rect.height,

              display:
                style.display,

              visibility:
                style.visibility,

              opacity:
                Number.parseFloat(
                  style.opacity
                )
            };

          }
        );


      expect(
        metrics.display,
        `${viewport.name}: hero display`
      ).not.toBe(
        "none"
      );


      expect(
        metrics.visibility,
        `${viewport.name}: hero visibility`
      ).not.toBe(
        "hidden"
      );


      expect(
        metrics.opacity,
        `${viewport.name}: hero opacity`
      ).toBeGreaterThan(
        0
      );


      expect(
        metrics.width,
        `${viewport.name}: hero width`
      ).toBeGreaterThan(
        0
      );


      expect(
        metrics.height,
        `${viewport.name}: hero height`
      ).toBeGreaterThan(
        560
      );


      expect(
        metrics.top,
        `${viewport.name}: hero top`
      ).toBeGreaterThanOrEqual(
        -8
      );


      expect(
        metrics.top,
        `${viewport.name}: hero begins too low`
      ).toBeLessThan(
        120
      );


      expect(
        metrics.right,
        `${viewport.name}: hero right edge`
      ).toBeLessThanOrEqual(
        viewport.width
        +
        1
      );


      expect(
        metrics.left,
        `${viewport.name}: hero left edge`
      ).toBeGreaterThanOrEqual(
        -1
      );

    }
  );

}


test(
  "mobile opens with complete primary hero content",
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
      route
    );


    const hero =
      page.locator(
        '[data-home-hero="v8"]'
      );


    const heading =
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            /offensive security built around/i
        }
      );


    const action =
      hero
        .getByRole(
          "link",
          {
            name:
              /explore services/i
          }
        );


    await expect(
      hero
    ).toBeVisible();


    await expect(
      heading
    ).toBeVisible();


    await expect(
      action
    ).toBeVisible();


    const actionMetrics =
      await action.evaluate(
        (
          element
        ) => {

          const rect =
            element.getBoundingClientRect();


          return {
            top:
              rect.top,

            bottom:
              rect.bottom,

            width:
              rect.width,

            height:
              rect.height
          };

        }
      );


    expect(
      actionMetrics.width
    ).toBeGreaterThan(
      0
    );


    expect(
      actionMetrics.height
    ).toBeGreaterThanOrEqual(
      44
    );


    expect(
      actionMetrics.top
    ).toBeLessThan(
      760
    );

  }
);
