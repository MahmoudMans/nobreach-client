import {
  expect,
  test
} from "@playwright/test";


test(
  "CR4CKOUT 2 renders one strict activity-detail experience",
  async ({
    page
  }) => {

    const response =
      await page.goto(
        "/activities/cr4ckout-2"
      );


    expect(
      response?.status()
    ).toBe(
      200
    );


    const root =
      page.locator(
        '[data-cr4ckout-2-design="v48"]'
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
      page.locator(
        "h1"
      )
    ).toHaveCount(
      1
    );

  }
);


test(
  "CR4CKOUT 2 retains one breadcrumb",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/cr4ckout-2"
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
  "CR4CKOUT 2 exposes its edition signal",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/cr4ckout-2"
    );


    const root =
      page.locator(
        '[data-cr4ckout-2-design="v48"]'
      );


    await expect(
      root.getByText(
        "EDITION / 02",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    for (
      const label
      of [
        "HACK",
        "LEARN",
        "BREAK",
        "BUILD"
      ]
    ) {

      await expect(
        root.getByText(
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
  "CR4CKOUT 2 uses one purposeful activity flow",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/cr4ckout-2"
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
          `[data-cr4ckout-2-section="${section}"]`
        )
      ).toHaveCount(
        1
      );

    }

  }
);


test(
  "generic activity page is not stacked below V48",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/cr4ckout-2"
    );


    await expect(
      page.locator(
        '[data-cr4ckout-2-design="v48"]'
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
  "other activity slugs remain isolated from V48",
  async ({
    page
  }) => {

    for (
      const route
      of [
        "/activities/ai-security-foundations-2026",
        "/activities/red-team-foundations-2026",
        "/activities/training-hub-established",
        "/activities/cr4ckout-launched"
      ]
    ) {

      await page.goto(
        route
      );


      await expect(
        page.locator(
          '[data-cr4ckout-2-design="v48"]'
        )
      ).toHaveCount(
        0
      );

    }

  }
);


test(
  "CR4CKOUT 2 remains overflow-free",
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
        "/activities/cr4ckout-2"
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
