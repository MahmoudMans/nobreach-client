import {
  expect,
  test
} from "@playwright/test";


test(
  "CR4CKOUT launched renders one strict activity detail",
  async ({
    page
  }) => {

    const response =
      await page.goto(
        "/activities/cr4ckout-launched"
      );


    expect(
      response?.status()
    ).toBe(
      200
    );


    const root =
      page.locator(
        '[data-cr4ckout-launched-design="v47"]'
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
  "CR4CKOUT activity uses a single lightweight breadcrumb",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/cr4ckout-launched"
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
  "CR4CKOUT supporting signal remains present",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/cr4ckout-launched"
    );


    const root =
      page.locator(
        '[data-cr4ckout-launched-design="v47"]'
      );


    for (
      const text
      of [
        "HACK",
        "LEARN",
        "BREAK",
        "BUILD"
      ]
    ) {

      await expect(
        root.getByText(
          text,
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
  "CR4CKOUT activity exposes the required content flow",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/cr4ckout-launched"
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
          `[data-cr4ckout-activity-section="${section}"]`
        )
      ).toHaveCount(
        1
      );

    }

  }
);


test(
  "CR4CKOUT activity connects to CR4CKOUT and archive",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/cr4ckout-launched"
    );


    await expect(
      page.getByRole(
        "link",
        {
          name:
            /discover cr4ckout/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/cr4ckout"
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

  }
);


test(
  "generic activity detail is not stacked underneath V47",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/cr4ckout-launched"
    );


    await expect(
      page.locator(
        '[data-cr4ckout-launched-design="v47"]'
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
  "other activity routes do not receive V47",
  async ({
    page
  }) => {

    for (
      const route
      of [
        "/activities/cr4ckout-2",
        "/activities/ai-security-foundations-2026"
      ]
    ) {

      await page.goto(
        route
      );


      await expect(
        page.locator(
          '[data-cr4ckout-launched-design="v47"]'
        )
      ).toHaveCount(
        0
      );

    }

  }
);


test(
  "CR4CKOUT launched remains overflow-free",
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
        "/activities/cr4ckout-launched"
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
