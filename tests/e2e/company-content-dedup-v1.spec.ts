import {
  expect,
  test
} from "@playwright/test";


test(
  "Company contains no page-level duplicate navigation",
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


    await expect(
      page.getByText(
        "Company sections",
        {
          exact:
            true
        }
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "Company has one final CTA section",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    await expect(
      page.locator(
        '[data-company-section="cta"]'
      )
    ).toHaveCount(
      1
    );

  }
);
