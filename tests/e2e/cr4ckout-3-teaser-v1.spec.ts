import {
  expect,
  test
} from "@playwright/test";


// NB_CR4CKOUT_3_TEASER_V1


test(
  "CR4CKOUT page teases the next edition without revealing details",
  async ({
    page
  }) => {

    await page.goto(
      "/cr4ckout"
    );


    const teaser =
      page.locator(
        '[data-cr4ckout-section="next-edition"]'
      );


    await expect(
      teaser
    ).toBeVisible();


    await expect(
      teaser.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "CR4CKOUT 3.0"
        }
      )
    ).toBeVisible();


    await expect(
      teaser
    ).toContainText(
      "Classified"
    );


    await expect(
      teaser.locator(
        'a[href="/events/cr4ckout-3-0"]'
      )
    ).toBeVisible();


    await page
      .locator(
        '[data-cr4ckout-ui="next-edition-signal"]'
      )
      .click();


    await expect(
      page
    ).toHaveURL(
      /#next-edition$/
    );

  }
);


test(
  "teaser event page renders without Event structured data",
  async ({
    page
  }) => {

    await page.goto(
      "/events/cr4ckout-3-0"
    );


    await expect(
      page.locator(
        '[data-event-detail="cr4ckout-3-teaser"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,
          name:
            "CR4CKOUT 3.0"
        }
      )
    ).toBeVisible();


    await expect(
      page.locator(
        'script[type="application/ld+json"]',
        {
          hasText:
            '"Event"'
        }
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.locator(
        'a[href="/events/cr4ckout-2-0"]'
      )
    ).toBeVisible();

  }
);


test(
  "events index lists CR4CKOUT 3.0 as upcoming",
  async ({
    page
  }) => {

    await page.goto(
      "/events"
    );


    const row =
      page.locator(
        '[data-event-row="upcoming"]',
        {
          hasText:
            "CR4CKOUT 3.0"
        }
      );


    await expect(
      row
    ).toBeVisible();


    await expect(
      row.getByRole(
        "link",
        {
          name:
            /view event/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/events/cr4ckout-3-0"
    );

  }
);
