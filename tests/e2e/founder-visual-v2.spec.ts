import {
  expect,
  test
} from "@playwright/test";


test(
  "Founder V20 remains the compatible route architecture after V21 refinement",
  async ({
    page
  }) => {

    await page.goto(
      "/company/founder"
    );

    await expect(
      page.locator(
        '[data-founder-page="v20"]'
      )
    ).toBeVisible();

    await expect(
      page.locator(
        '[data-founder-audit="v21"]'
      )
    ).toBeVisible();

    await expect(
      page.locator(
        '[data-company-content-section]'
      )
    ).toHaveCount(
      3
    );

  }
);


test(
  "Founder profile keeps one primary heading and portrait",
  async ({
    page
  }) => {

    await page.goto(
      "/company/founder"
    );

    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1
        }
      )
    ).toHaveCount(
      1
    );

    await expect(
      page.locator(
        '[data-founder-photo-image="profile"]'
      )
    ).toBeVisible();

  }
);


test(
  "Founder trajectory keeps five stages",
  async ({
    page
  }) => {

    await page.goto(
      "/company/founder"
    );

    await expect(
      page.locator(
        '[data-founder-card="journey"]'
      )
    ).toHaveCount(
      5
    );

  }
);


test(
  "Founder practice keeps four focus rows and four method stages",
  async ({
    page
  }) => {

    await page.goto(
      "/company/founder"
    );

    await expect(
      page.locator(
        '[data-founder-card="expertise"]'
      )
    ).toHaveCount(
      4
    );

    await expect(
      page.locator(
        '[data-founder-ui="method"] ol > li'
      )
    ).toHaveCount(
      4
    );

  }
);


test(
  "Founder public work keeps three personal engagements and three No Breach destinations",
  async ({
    page
  }) => {

    await page.goto(
      "/company/founder"
    );

    await expect(
      page.locator(
        '[data-founder-engagement="true"]'
      )
    ).toHaveCount(
      3
    );

    await expect(
      page.locator(
        '[data-founder-card="public"]'
      )
    ).toHaveCount(
      3
    );

  }
);


test(
  "Founder page contains no owner or CEO claim",
  async ({
    page
  }) => {

    await page.goto(
      "/company/founder"
    );

    const text =
      await page.locator(
        "main"
      ).innerText();

    expect(
      text
    ).not.toMatch(
      /\bowner\b/i
    );

    expect(
      text
    ).not.toMatch(
      /\bCEO\b/
    );

  }
);


for (
  const viewport
  of
  [
    {
      width:
        1440,
      height:
        900
    },
    {
      width:
        820,
      height:
        1180
    },
    {
      width:
        390,
      height:
        844
    },
    {
      width:
        320,
      height:
        800
    }
  ]
) {

  test(
    `Founder V21 remains overflow-free at ${viewport.width}`,
    async ({
      page
    }) => {

      await page.setViewportSize(
        viewport
      );

      await page.goto(
        "/company/founder"
      );

      const dimensions =
        await page.evaluate(
          () => ({
            scroll:
              document.documentElement.scrollWidth,

            client:
              document.documentElement.clientWidth
          })
        );

      expect(
        dimensions.scroll
      ).toBeLessThanOrEqual(
        dimensions.client
        +
        1
      );

    }
  );

}
