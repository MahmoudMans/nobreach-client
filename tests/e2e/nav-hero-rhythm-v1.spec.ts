import {
  expect,
  test,
} from "@playwright/test";


const standardRoutes = [
  "/services",
  "/training",
  "/activities",
  "/insights",
  "/contact",
];


for (
  const route
  of standardRoutes
) {

  test(
    `${route} starts high in the viewport`,
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
        route,
        {
          waitUntil:
            "domcontentloaded",
        }
      );


      const h1 =
        page.locator(
          "#main-content h1"
        ).first();


      await expect(
        h1
      ).toBeVisible();


      const geometry =
        await h1.evaluate(
          element => {

            const box =
              element.getBoundingClientRect();


            return {
              top:
                box.top,

              scrollWidth:
                document.documentElement.scrollWidth,

              clientWidth:
                document.documentElement.clientWidth,
            };

          }
        );


      /*
       * Header is roughly one compact navigation row.
       * A primary heading hundreds of pixels lower indicates duplicated
       * page-shell + hero spacing.
       */
      expect(
        geometry.top
      ).toBeLessThan(
        210
      );


      expect(
        geometry.scrollWidth
      ).toBeLessThanOrEqual(
        geometry.clientWidth + 1
      );

    }
  );

}


for (
  const route
  of [
    "/company/founder",
    "/company/internships",
  ]
) {

  test(
    `${route} custom hero starts high on mobile`,
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
        route,
        {
          waitUntil:
            "domcontentloaded",
        }
      );


      const heading =
        page.locator(
          "#main-content h1"
        ).first();


      await expect(
        heading
      ).toBeVisible();


      const geometry =
        await heading.evaluate(
          element => {

            const box =
              element.getBoundingClientRect();


            return {
              top:
                box.top,

              documentWidth:
                document.documentElement.scrollWidth,

              viewportWidth:
                document.documentElement.clientWidth,
            };

          }
        );


      expect(
        geometry.top
      ).toBeLessThan(
        190
      );


      expect(
        geometry.documentWidth
      ).toBeLessThanOrEqual(
        geometry.viewportWidth + 1
      );

    }
  );

}
