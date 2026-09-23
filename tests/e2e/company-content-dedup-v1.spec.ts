import {
  expect,
  test
} from "@playwright/test";


test(
  "company V15 contains only unique primary information blocks",
  async ({
    page
  }) => {

    await page.goto(
      "/company",
      {
        waitUntil:
          "domcontentloaded"
      }
    );


    await expect(
      page.locator(
        '[data-company-card="mindset"]'
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.locator(
        '[data-company-section="story"]'
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.locator(
        '[data-company-section="ecosystem"]'
      )
    ).toHaveCount(
      0
    );


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
        '[data-company-ui="principle-grid"]'
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-company-ui="timeline-grid"]'
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-company-ui="people-grid"]'
      )
    ).toBeVisible();

  }
);
