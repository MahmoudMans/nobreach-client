import {
  expect,
  test
} from "@playwright/test";


test(
  "modern homepage renders student and organization journeys",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );


    const audience =
      page.locator(
        '[data-home-chapter="audience"]'
      );


    await expect(
      audience.getByText(
        "FOR STUDENTS"
      )
    ).toBeVisible();


    await expect(
      audience.getByText(
        "FOR ORGANIZATIONS"
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


    const academy =
      page.locator(
        '[data-home-chapter="academy"]'
      );


    for (
      const href
      of [
        "/training/red-team-foundations",
        "/training/web-exploitation-techniques",
        "/training/ai-security-foundations"
      ]
    ) {

      await expect(
        academy.locator(
          `a[href="${href}"]`
        )
      ).toBeVisible();

    }

  }
);


test(
  "modern homepage exposes real public proof",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );


    await expect(
      page.locator(
        '[data-home-chapter="proof"]'
      ).getByText(
        "CR4CKOUT",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-home-chapter="resources"]'
      ).getByRole(
        "link"
      ).first()
    ).toBeVisible();

  }
);
