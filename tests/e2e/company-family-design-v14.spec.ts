import {
  expect,
  test
} from "@playwright/test";


const routes = [
  "/company",
  "/company/founder",
  "/company/team",
  "/company/internships"
] as const;


for (
  const route
  of routes
) {

  test(
    `${route} keeps one primary heading`,
    async ({
      page
    }) => {

      await page.goto(
        route
      );


      await expect(
        page.getByRole(
          "heading",
          {
            level:
              1
          }
        )
      ).toHaveCount(
        1
      );

    }
  );

}


test(
  "Company top level has no secondary page navigation",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    await expect(
      page.locator(
        '[data-company-about="strict-v20"] nav'
      )
    ).toHaveCount(
      0
    );

  }
);


for (
  const route
  of routes
) {

  test(
    `${route} remains contained on mobile`,
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


      const width =
        await page.evaluate(
          () => ({
            scroll:
              document.documentElement.scrollWidth,

            client:
              document.documentElement.clientWidth
          })
        );


      expect(
        width.scroll
      ).toBeLessThanOrEqual(
        width.client
        +
        1
      );

    }
  );

}
