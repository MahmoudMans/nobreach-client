import {
  expect,
  test
} from "@playwright/test";


test(
  "homepage opens with the established offensive-security proposition",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );

    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,
          name:
            /Offensive security built around how real systems fail/i
        }
      )
    ).toBeVisible();

    await expect(
      page.getByRole(
        "link",
        {
          name:
            /Explore services/i
        }
      ).first()
    ).toBeVisible();

    await expect(
      page.getByRole(
        "link",
        {
          name:
            /Explore training/i
        }
      ).first()
    ).toBeVisible();

  }
);


test(
  "homepage hero retains a restrained attack-surface model",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );

    const visual =
      page.locator(
        '[data-home-hero-visual="attack-surface"]'
      );

    await expect(
      visual
    ).toBeVisible();

    await expect(
      visual.getByText(
        "NB / ATTACK SURFACE",
        {
          exact:
            true
        }
      )
    ).toBeVisible();

    for (
      const stage
      of
      [
        "edge",
        "application",
        "identity",
        "access",
        "data"
      ]
    ) {

      await expect(
        visual.locator(
          `[data-stage="${stage}"]`
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

    const scrollWidth =
      await page.evaluate(
        () =>
          document.documentElement.scrollWidth
      );

    expect(
      scrollWidth
    ).toBeLessThanOrEqual(
      391
    );

  }
);
