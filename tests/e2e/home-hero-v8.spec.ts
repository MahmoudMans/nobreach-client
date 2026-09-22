import {
  expect,
  test,
} from "@playwright/test";


test(
  "homepage opens with the elegant V8 security hero",
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
            /offensive security built around how real systems fail/i,
        }
      )
    ).toBeVisible();


    await expect(
      hero.getByRole(
        "link",
        {
          name:
            /explore services/i,
        }
      )
    ).toHaveAttribute(
      "href",
      "/services"
    );


    await expect(
      hero.getByRole(
        "link",
        {
          name:
            /about no breach/i,
        }
      )
    ).toHaveAttribute(
      "href",
      "/company"
    );

  }
);


test(
  "homepage hero presents the restrained attack surface composition",
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


    for (
      const node
      of [
        "APP",
        "API",
        "AUTH",
        "USER",
        "DB",
        "DATA",
      ]
    ) {

      await expect(
        visual.getByText(
          node,
          {
            exact:
              true,
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "homepage V8 preserves the five-section architecture",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );


    await expect(
      page.locator(
        "[data-home-section]"
      )
    ).toHaveCount(
      5
    );


    for (
      const section
      of [
        "hero",
        "company",
        "services",
        "explore",
        "contact",
      ]
    ) {

      await expect(
        page.locator(
          `[data-home-section="${section}"]`
        )
      ).toHaveCount(
        1
      );

    }

  }
);


test(
  "homepage V8 remains elegant and overflow free on mobile",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        390,

      height:
        844,
    });


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


    const geometry =
      await page.evaluate(
        () => ({
          viewport:
            document.documentElement.clientWidth,

          document:
            document.documentElement.scrollWidth,
        })
      );


    expect(
      geometry.document
    ).toBeLessThanOrEqual(
      geometry.viewport + 1
    );

  }
);
