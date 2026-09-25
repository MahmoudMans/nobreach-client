import {
  expect,
  test
} from "@playwright/test";


test(
  "Training Hub established renders one strict activity detail",
  async ({
    page
  }) => {

    const response =
      await page.goto(
        "/activities/training-hub-established"
      );


    expect(
      response?.status()
    ).toBe(
      200
    );


    const root =
      page.locator(
        '[data-training-hub-activity-design="v46"]'
      );


    await expect(
      root
    ).toHaveCount(
      1
    );


    await expect(
      root
    ).toBeVisible();


    await expect(
      root.locator(
        "h1"
      )
    ).toHaveCount(
      1
    );


    await expect(
      page.locator(
        "h1"
      )
    ).toHaveCount(
      1
    );

  }
);


test(
  "activity detail uses lightweight breadcrumb metadata",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/training-hub-established"
    );


    const breadcrumb =
      page.getByRole(
        "navigation",
        {
          name:
            "Breadcrumb"
        }
      );


    await expect(
      breadcrumb
    ).toHaveCount(
      1
    );


    await expect(
      breadcrumb.getByRole(
        "link",
        {
          name:
            "Activities",
          exact:
            true
        }
      )
    ).toHaveAttribute(
      "href",
      "/activities"
    );

  }
);


test(
  "activity detail exposes the canonical content hierarchy",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/training-hub-established"
    );


    for (
      const section
      of [
        "intro",
        "facts",
        "overview",
        "context",
        "final-cta"
      ]
    ) {

      await expect(
        page.locator(
          `[data-activity-detail-section="${section}"]`
        )
      ).toHaveCount(
        1
      );

    }

  }
);


test(
  "Training Hub activity exposes archive and Academy journeys",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/training-hub-established"
    );


    await expect(
      page.getByRole(
        "link",
        {
          name:
            /activity archive/i
        }
      ).first()
    ).toHaveAttribute(
      "href",
      "/activities"
    );


    const trainingLinks =
      page.locator(
        'a[href^="/training"]'
      );


    expect(
      await trainingLinks.count()
    ).toBeGreaterThanOrEqual(
      1
    );

  }
);


test(
  "generic activity detail is not stacked underneath V46",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/training-hub-established"
    );


    await expect(
      page.locator(
        '[data-training-hub-activity-design="v46"]'
      )
    ).toHaveCount(
      1
    );


    await expect(
      page.locator(
        "h1"
      )
    ).toHaveCount(
      1
    );

  }
);


test(
  "other activity detail routes remain on the existing renderer",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/cr4ckout-2"
    );


    await expect(
      page.locator(
        '[data-training-hub-activity-design="v46"]'
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.locator(
        "h1"
      ).first()
    ).toBeVisible();

  }
);


test(
  "Training Hub activity remains overflow-free",
  async ({
    page
  }) => {

    for (
      const viewport
      of [
        {
          width:
            1440,

          height:
            900
        },
        {
          width:
            1180,

          height:
            820
        },
        {
          width:
            1024,

          height:
            768
        },
        {
          width:
            768,

          height:
            1024
        },
        {
          width:
            430,

          height:
            932
        },
        {
          width:
            390,

          height:
            844
        },
        {
          width:
            360,

          height:
            800
        }
      ]
    ) {

      await page.setViewportSize(
        viewport
      );


      await page.goto(
        "/activities/training-hub-established"
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
        geometry.scroll,
        `${viewport.width}px viewport`
      ).toBeLessThanOrEqual(
        geometry.client
        +
        1
      );

    }

  }
);
