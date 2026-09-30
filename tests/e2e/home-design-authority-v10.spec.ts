import {
  expect,
  test
} from "@playwright/test";


test(
  "homepage applies the evidence-led editorial authority",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );

    const root =
      page.locator(
        '[data-home-redesign="editorial-v12"]'
      );

    await expect(
      root
    ).toBeVisible();

    await expect(
      page.locator(
        "[data-home-chapter]"
      )
    ).toHaveCount(
      8
    );

    await expect(
      page.locator(
        "[data-home-service]"
      )
    ).toHaveCount(
      4
    );

    await expect(
      page.locator(
        "[data-home-program]"
      )
    ).toHaveCount(
      3
    );

  }
);


test(
  "homepage no longer exposes fake live-assessment language",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );

    await expect(
      page.getByText(
        "LIVE ASSESSMENT",
        {
          exact:
            true
        }
      )
    ).toHaveCount(
      0
    );

    await expect(
      page.getByText(
        "STATUS / ACTIVE",
        {
          exact:
            true
        }
      )
    ).toHaveCount(
      0
    );

    await expect(
      page.getByText(
        "Illustrative attack path — not a live assessment."
      )
    ).toBeVisible();

  }
);


test(
  "homepage stays horizontally contained on mobile",
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

    const contained =
      await page.evaluate(
        () =>
          document.documentElement.scrollWidth
          <=
          window.innerWidth
          +
          1
      );

    expect(
      contained
    ).toBe(
      true
    );

  }
);
