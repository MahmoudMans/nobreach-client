import {
  expect,
  test
} from "@playwright/test";


test(
  "founder profile renders the approved portrait",
  async ({
    page
  }) => {

    await page.goto(
      "/company/founder"
    );

    const portrait =
      page.getByRole(
        "img",
        {
          name:
            "Portrait of Nouha Ben Brahim"
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

  }
);


for (
  const width
  of
  [
    320,
    390
  ]
) {

  test(
    `founder photo layout remains overflow free at ${width}`,
    async ({
      page
    }) => {

      await page.setViewportSize({
        width,
        height:
          844
      });

      await page.goto(
        "/company/founder"
      );

      await expect(
        page.locator(
          '[data-founder-photo-image="profile"]'
        )
      ).toBeVisible();

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
