import {
  expect,
  test,
} from "@playwright/test";


test(
  "company presents unique information without repeated blocks",
  async ({
    page
  }) => {

    await page.goto(
      "/company",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    await expect(
      page.locator(
        '[data-company-card="statement"]'
      )
    ).toBeVisible();


    /*
     * The duplicate Core Mindset card has been deliberately retired.
     */
    await expect(
      page.locator(
        '[data-company-card="mindset"]'
      )
    ).toHaveCount(
      0
    );


    const approach =
      page.locator(
        '[data-company-ui="approach-flow"]'
      );


    await expect(
      approach
    ).toBeVisible();


    await expect(
      approach.locator(
        "article"
      )
    ).toHaveCount(
      3
    );


    await expect(
      approach.getByText(
        "Test",
        {
          exact:
            true,
        }
      )
    ).toBeVisible();


    await expect(
      approach.getByText(
        "Learn",
        {
          exact:
            true,
        }
      )
    ).toBeVisible();


    await expect(
      approach.getByText(
        "Share",
        {
          exact:
            true,
        }
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-company-ui="facts"]'
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-company-ui="capability-grid"]'
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-company-ui="timeline-grid"]'
      )
    ).toBeVisible();

  }
);
