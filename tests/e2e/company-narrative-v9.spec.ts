import {
  expect,
  test
} from "@playwright/test";


test(
  "Company uses editorial story and direction sections",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    await expect(
      page.locator(
        '[data-company-section="story"]'
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-company-section="mission-vision"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            2,

          name:
            /built from offensive security/i
        }
      )
    ).toBeVisible();

  }
);


test(
  "Company timeline contains only published milestones",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    const timeline =
      page.locator(
        '[data-company-section="timeline"]'
      );


    await expect(
      timeline.locator(
        "ol > li"
      )
    ).toHaveCount(
      5
    );


    await expect(
      timeline.getByText(
        "CR4CKOUT launched",
        {
          exact:
            true
        }
      )
    ).toBeVisible();

  }
);


test(
  "Company expertise stays editorial rather than another card wall",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    const expertise =
      page.locator(
        '[data-company-section="expertise"]'
      );


    await expect(
      expertise.getByRole(
        "link"
      )
    ).toHaveCount(
      4
    );

  }
);
