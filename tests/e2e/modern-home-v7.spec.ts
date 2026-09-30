import {
  expect,
  test
} from "@playwright/test";


test(
  "modern homepage renders learner and organization journeys",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );

    await expect(
      page.getByText(
        "For learners",
        {
          exact:
            true
        }
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        "For organizations",
        {
          exact:
            true
        }
      )
    ).toBeVisible();

  }
);


test(
  "modern homepage renders canonical Academy programs",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );

    await expect(
      page.locator(
        '[data-home-program="red-team-foundations"]'
      )
    ).toBeVisible();

    await expect(
      page.locator(
        '[data-home-program="web-exploitation-techniques"]'
      )
    ).toBeVisible();

    await expect(
      page.locator(
        '[data-home-program="ai-security-foundations"]'
      )
    ).toBeVisible();

  }
);


test(
  "modern homepage exposes public proof and founder context",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );

    await expect(
      page.getByRole(
        "link",
        {
          name:
            /Explore CR4CKOUT/i
        }
      )
    ).toBeVisible();

    await expect(
      page.locator(
        "[data-home-founder]"
      )
    ).toBeVisible();

    await expect(
      page.getByRole(
        "link",
        {
          name:
            /Read article/i
        }
      ).first()
    ).toBeVisible();

  }
);
