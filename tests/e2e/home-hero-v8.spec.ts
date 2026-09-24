import {
  expect,
  test
} from "@playwright/test";


test(
  "homepage opens with the established security hero",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );


    const hero =
      page.locator(
        '[data-home-hero="v8"]'
      );


    await expect(
      hero
    ).toBeVisible();


    await expect(
      hero.getByRole(
        "heading",
        {
          level:
            1,

          name:
            /offensive security built around/i
        }
      )
    ).toBeVisible();


    await expect(
      hero.getByRole(
        "link",
        {
          name:
            /explore services/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/services"
    );

  }
);


test(
  "homepage hero presents the attack surface composition",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );


    const visual =
      page.locator(
        '[data-hero-art="attack-surface"]'
      );


    await expect(
      visual
    ).toBeVisible();


    for (
      const label
      of [
        "APP",
        "API",
        "AUTH",
        "USER",
        "DB",
        "DATA"
      ]
    ) {

      await expect(
        visual.getByText(
          label,
          {
            exact:
              true
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "homepage hero is overflow free on mobile",
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
      "/"
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1
        }
      )
    ).toBeVisible();


    const overflow =
      await page.evaluate(
        () =>
          document.documentElement.scrollWidth
          -
          document.documentElement.clientWidth
      );


    expect(
      overflow
    ).toBeLessThanOrEqual(
      1
    );

  }
);
