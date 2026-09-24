import {
  expect,
  test
} from "@playwright/test";


test(
  "homepage applies the continuous NoBreach master authority",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );


    await expect(
      page.locator(
        '[data-home-master="continuous-v11"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            /offensive security built around/i
        }
      )
    ).toHaveCount(
      1
    );


    await expect(
      page.locator(
        "[data-home-chapter]"
      )
    ).toHaveCount(
      16
    );

  }
);


test(
  "homepage services behave as a commercial service index",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );


    const services =
      page.locator(
        '[data-home-chapter="services"]'
      );


    await expect(
      services.locator(
        "[data-home-service]"
      )
    ).toHaveCount(
      4
    );


    for (
      const href
      of [
        "/services/web-application-pentesting",
        "/services/api-security",
        "/services/infrastructure-security",
        "/services/security-training"
      ]
    ) {

      await expect(
        services.locator(
          `a[href="${href}"]`
        )
      ).toHaveCount(
        1
      );

    }

  }
);


test(
  "homepage ecosystem is an editorial directory",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );


    const proof =
      page.locator(
        '[data-home-section="explore"]'
      );


    for (
      const href
      of [
        "/cr4ckout",
        "/training",
        "/activities",
        "/events",
        "/insights"
      ]
    ) {

      await expect(
        proof.locator(
          `a[href="${href}"]`
        )
      ).toBeVisible();

    }

  }
);


test(
  "homepage remains sleek and overflow free on mobile",
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


    const geometry =
      await page.evaluate(
        () => ({
          scrollWidth:
            document.documentElement.scrollWidth,

          clientWidth:
            document.documentElement.clientWidth
        })
      );


    expect(
      geometry.scrollWidth
    ).toBeLessThanOrEqual(
      geometry.clientWidth
      +
      1
    );

  }
);
