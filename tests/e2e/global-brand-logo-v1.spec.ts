import {
  expect,
  test
} from "@playwright/test";


const routes = [
  "/",
  "/training",
  "/training/red-team-foundations",
  "/company/internships",
  "/careers",
  "/contact"
] as const;


for (
  const route
  of routes
) {

  test(
    `NoBreach global logo renders on ${route}`,
    async ({
      page
    }) => {

      const response =
        await page.goto(
          route,
          {
            waitUntil:
              "domcontentloaded"
          }
        );


      expect(
        response?.status()
      ).toBe(
        200
      );


      const headerLogo =
        page.locator(
          '[data-brand-logo="header"]:visible'
        ).first();


      const footerLogo =
        page.locator(
          '[data-brand-logo="footer"]:visible'
        ).first();


      await expect(
        headerLogo
      ).toBeVisible();


      await expect(
        footerLogo
      ).toBeVisible();


      await expect(
        headerLogo
      ).toHaveAttribute(
        "alt",
        "NoBreach"
      );


      await expect(
        footerLogo
      ).toHaveAttribute(
        "alt",
        "NoBreach"
      );

    }
  );

}


test(
  "NoBreach header logo remains controlled on mobile",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        360,

      height:
        800
    });


    await page.goto(
      "/",
      {
        waitUntil:
          "domcontentloaded"
      }
    );


    const logo =
      page.locator(
        '[data-brand-logo="header"]:visible'
      ).first();


    await expect(
      logo
    ).toBeVisible();


    const box =
      await logo.boundingBox();


    expect(
      box
    ).not.toBeNull();


    expect(
      box?.height
      ??
      0
    ).toBeLessThanOrEqual(
      42
    );


    const geometry =
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
      geometry.scrollWidth
    ).toBeLessThanOrEqual(
      geometry.clientWidth
      +
      1
    );

  }
);
