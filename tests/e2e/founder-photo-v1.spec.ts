import {
  expect,
  test
} from "@playwright/test";


test(
  "founder profile renders the real portrait",
  async ({
    page
  }) => {

    await page.goto(
      "/company/founder"
    );

    const portrait =
      page.locator(
        '[data-founder-photo-image="profile"]'
      );

    await expect(
      portrait
    ).toBeVisible();

    await expect(
      portrait
    ).toHaveAttribute(
      "src",
      /ceo\.png/
    );

  }
);


test(
  "audited Company page intentionally presents the founder portrait",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );

    const founder =
      page.locator(
        '[data-company-section="founder"]'
      );

    await expect(
      founder
    ).toBeVisible();

    await expect(
      founder.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Meet the founder"
        }
      )
    ).toBeVisible();

    await expect(
      founder.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "Nouha Ben Brahim"
        }
      )
    ).toBeVisible();

    const portrait =
      founder.getByRole(
        "img",
        {
          name:
            "Nouha Ben Brahim, founder of No Breach"
        }
      );

    await expect(
      portrait
    ).toBeVisible();

    await expect(
      portrait
    ).toHaveAttribute(
      "src",
      /ceo\.png/
    );

    await expect(
      founder.getByRole(
        "link",
        {
          name:
            /Explore founder profile/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/company/founder"
    );

  }
);


for (
  const route
  of
  [
    "/company",
    "/company/founder"
  ]
) {

  test(
    `${route} founder photo layout remains overflow free on mobile`,
    async ({
      page
    }) => {

      await page.setViewportSize({
        width:
          390,
        height:
          844
      });

      await page.goto(
        route
      );

      const geometry =
        await page.evaluate(
          () => ({
            scroll:
              document.documentElement.scrollWidth,

            client:
              document.documentElement.clientWidth
          })
        );

      expect(
        geometry.scroll
      ).toBeLessThanOrEqual(
        geometry.client
        +
        1
      );

    }
  );

}
