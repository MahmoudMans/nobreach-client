import {
  expect,
  test
} from "@playwright/test";


const routes = [
  "/services/api-security",
  "/services/infrastructure-security",
  "/services/security-training"
] as const;


for (
  const route
  of routes
) {

  test(
    `${route} opens directly into service content without breadcrumb sub-header`,
    async ({
      page
    }) => {

      const response =
        await page.goto(
          route
        );


      expect(
        response?.status(),
        route
      ).toBe(
        200
      );


      await expect(
        page.getByRole(
          "heading",
          {
            level:
              1
          }
        )
      ).toBeVisible();


      /*
       * The global SiteHeader remains outside main.
       * No breadcrumb navigation may exist inside page content.
       */
      await expect(
        page.locator(
          'main nav[aria-label="Breadcrumb"]'
        )
      ).toHaveCount(
        0
      );


      await expect(
        page.locator(
          'main [aria-label="Breadcrumb"]'
        )
      ).toHaveCount(
        0
      );


      const geometry =
        await page.evaluate(
          () => ({
            scroll:
              document.documentElement.scrollWidth,

            client:
              document.documentElement.clientWidth
          })
        );


      expect(
        geometry.scroll
      ).toBeLessThanOrEqual(
        geometry.client
        +
        1
      );

    }
  );

}


test(
  "web application pentesting route remains available",
  async ({
    page
  }) => {

    const response =
      await page.goto(
        "/services/web-application-pentesting"
      );


    expect(
      response?.status()
    ).toBe(
      200
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1
        }
      )
    ).toBeVisible();

  }
);
