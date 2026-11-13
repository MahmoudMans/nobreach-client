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


    // NB_CR4CKOUT_3_REGISTRATION_V1: the story stays encrypted
    await expect(
      teaser
    ).toContainText(
      "Encrypted"
    );


    await expect(
      teaser.locator(
        '[data-cr4ckout-ui="register"]'
      )
    ).toHaveAttribute(
      "href",
      /^https:\/\/docs\.google\.com\/forms\//
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
  "event page only emits Event structured data with a real date",
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


    // NB_CR4CKOUT_3_REGISTRATION_V1
    const eventData =
      await page
        .locator(
          'script[type="application/ld+json"]',
          {
            hasText:
              '"Event"'
          }
        )
        .allTextContents();


    for (
      const raw
      of eventData
    ) {

      const data =
        JSON.parse(
          raw
        );

      expect(
        data.startDate
      ).toMatch(
        /^\d{4}-\d{2}-\d{2}/
      );

      expect(
        data.location?.name
      ).not.toMatch(
        /classified/i
      );

    }


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
