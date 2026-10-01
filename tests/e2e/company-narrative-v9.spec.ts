import {
  expect,
  test
} from "@playwright/test";


test(
  "Company uses consolidated purpose and history sections",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );

    await expect(
      page.locator(
        '[data-company-section="mission-vision"]'
      )
    ).toBeVisible();

    await expect(
      page.locator(
        '[data-company-section="timeline"]'
      )
    ).toBeVisible();

    await expect(
      page.locator(
        '[data-company-section="story"]'
      )
    ).toHaveCount(
      0
    );

    await expect(
      page.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Mission and vision"
        }
      )
    ).toBeVisible();

  }
);


test(
  "Company timeline distinguishes milestones and ongoing work",
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
        '[data-company-milestone="true"]'
      )
    ).toHaveCount(
      3
    );

    await expect(
      timeline.locator(
        '[data-company-ongoing="true"]'
      )
    ).toHaveCount(
      2
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
  "Company expertise remains an editorial service directory",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );

    const expertise =
      page.locator(
        '[data-company-section="approach-expertise"]'
      );

    await expect(
      expertise.locator(
        '[data-company-expertise="true"]'
      )
    ).toHaveCount(
      4
    );

  }
);
