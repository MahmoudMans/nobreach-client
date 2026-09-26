import {
  expect,
  test
} from "@playwright/test";


test(
  "homepage opens with the V13 attack-path hero",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        1440,

      height:
        1000
    });


    await page.goto(
      "/"
    );


    const hero =
      page.locator(
        '[data-home-hero-spec="attack-path-v13"]'
      );


    await expect(
      hero
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            /offensive security built around how real systems fail/i
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


    await expect(
      hero.getByRole(
        "link",
        {
          name:
            /about no breach/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/company"
    );

  }
);


test(
  "hero presents the complete attack path assessment",
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
        "NB / ATTACK PATH",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    for (
      const token
      of [
        "EDGE",
        "APP",
        "AUTH",
        "ACCESS",
        "DATA",
        "DISCOVER",
        "TEST",
        "VALIDATE"
      ]
    ) {

      await expect(
        visual.getByText(
          token,
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
  "attack path hero stays balanced on desktop",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        1440,

      height:
        1000
    });


    await page.goto(
      "/"
    );


    const metrics =
      await page.evaluate(
        () => {

          const hero =
            document.querySelector(
              '[data-home-hero-spec="attack-path-v13"]'
            );


          const heading =
            hero?.querySelector(
              "h1"
            );


          const visual =
            hero?.querySelector(
              '[data-home-hero-visual="attack-surface"]'
            );


          if (
            !heading
            ||
            !visual
          ) {

            return null;

          }


          const h =
            heading.getBoundingClientRect();


          const v =
            visual.getBoundingClientRect();


          return {
            headingWidth:
              h.width,

            visualWidth:
              v.width,

            visualHeight:
              v.height,

            scrollWidth:
              document.documentElement.scrollWidth,

            clientWidth:
              document.documentElement.clientWidth
          };

        }
      );


    expect(
      metrics
    ).not.toBeNull();


    expect(
      metrics?.headingWidth
      ??
      9999
    ).toBeLessThanOrEqual(
      652
    );


    expect(
      metrics?.visualWidth
      ??
      0
    ).toBeGreaterThan(
      400
    );


    expect(
      metrics?.visualHeight
      ??
      0
    ).toBeGreaterThan(
      500
    );


    expect(
      metrics?.scrollWidth
      ??
      9999
    ).toBeLessThanOrEqual(
      (
        metrics?.clientWidth
        ??
        0
      )
      +
      1
    );

  }
);


test(
  "attack path hero becomes meaning action visual on mobile",
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


    const metrics =
      await page.evaluate(
        () => {

          const hero =
            document.querySelector(
              '[data-home-hero-spec="attack-path-v13"]'
            );


          const h1 =
            hero?.querySelector(
              "h1"
            );


          const action =
            hero?.querySelector(
              'a[href="/services"]'
            );


          const visual =
            hero?.querySelector(
              '[data-home-hero-visual="attack-surface"]'
            );


          if (
            !h1
            ||
            !action
            ||
            !visual
          ) {

            return null;

          }


          return {
            heading:
              h1.getBoundingClientRect().top,

            action:
              action.getBoundingClientRect().top,

            visual:
              visual.getBoundingClientRect().top,

            scrollWidth:
              document.documentElement.scrollWidth,

            clientWidth:
              document.documentElement.clientWidth
          };

        }
      );


    expect(
      metrics
    ).not.toBeNull();


    expect(
      metrics?.heading
      ??
      9999
    ).toBeLessThan(
      metrics?.action
      ??
      0
    );


    expect(
      metrics?.action
      ??
      9999
    ).toBeLessThan(
      metrics?.visual
      ??
      0
    );


    expect(
      metrics?.scrollWidth
      ??
      9999
    ).toBeLessThanOrEqual(
      (
        metrics?.clientWidth
        ??
        0
      )
      +
      1
    );

  }
);
