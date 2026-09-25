import {
  expect,
  test
} from "@playwright/test";


test(
  "Company starts with a PageIntro instead of a second hero or navbar",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    const intro =
      page.locator(
        '[data-company-section="intro"]'
      );


    await expect(
      intro
    ).toBeVisible();


    await expect(
      intro.locator(
        "nav"
      )
    ).toHaveCount(
      0
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
