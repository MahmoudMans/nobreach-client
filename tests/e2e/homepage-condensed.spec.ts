import {
  expect,
  test
} from "@playwright/test";


test(
  "homepage uses eight purposeful editorial chapters",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );

    await expect(
      page.locator(
        '[data-home-chapter="hero"]'
      )
    ).toBeVisible();

    await expect(
      page.locator(
        '[data-home-chapter="orientation"]'
      )
    ).toBeVisible();

    await expect(
      page.locator(
        '[data-home-chapter="services"]'
      )
    ).toBeVisible();

    await expect(
      page.locator(
        '[data-home-chapter="approach"]'
      )
    ).toBeVisible();

    await expect(
      page.locator(
        '[data-home-chapter="training"]'
      )
    ).toBeVisible();

    await expect(
      page.locator(
        '[data-home-chapter="public-work"]'
      )
    ).toBeVisible();

    await expect(
      page.locator(
        '[data-home-chapter="people"]'
      )
    ).toBeVisible();

    await expect(
      page.locator(
        '[data-home-chapter="insights"]'
      )
    ).toBeVisible();

  }
);


test(
  "homepage routes detailed content to dedicated pages",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );

    for (
      const href
      of
      [
        "/services",
        "/training",
        "/cr4ckout",
        "/activities",
        "/events",
        "/company/founder",
        "/insights",
        "/contact"
      ]
    ) {

      await expect(
        page.locator(
          `a[href="${href}"]`
        ).first()
      ).toBeVisible();

    }

  }
);


for (
  const viewport
  of
  [
    {
      name:
        "tablet",

      width:
        768,

      height:
        1024
    },
    {
      name:
        "mobile",

      width:
        390,

      height:
        844
    },
    {
      name:
        "narrow",

      width:
        320,

      height:
        800
    }
  ]
) {

  test(
    `editorial homepage fits ${viewport.name}`,
    async ({
      page
    }) => {

      await page.setViewportSize({
        width:
          viewport.width,

        height:
          viewport.height
      });

      await page.goto(
        "/"
      );

      const fits =
        await page.evaluate(
          () =>
            document.documentElement.scrollWidth
            <=
            window.innerWidth
            +
            1
        );

      expect(
        fits
      ).toBe(
        true
      );

    }
  );

}
