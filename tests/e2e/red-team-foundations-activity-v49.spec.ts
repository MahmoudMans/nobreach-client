import {
  expect,
  test
} from "@playwright/test";


test(
  "Red Team Foundations activity renders one strict detail",
  async ({
    page
  }) => {

    const response =
      await page.goto(
        "/activities/red-team-foundations-2026"
      );


    expect(
      response?.status()
    ).toBe(
      200
    );


    const root =
      page.locator(
        '[data-red-team-activity-design="v49"]'
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
  "Red Team activity has one lightweight breadcrumb",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/red-team-foundations-2026"
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
  "Red Team activity exposes the activity-detail flow",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/red-team-foundations-2026"
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
          `[data-red-team-activity-section="${section}"]`
        )
      ).toHaveCount(
        1
      );

    }

  }
);


test(
  "Red Team activity does not render course-detail navigation",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/red-team-foundations-2026"
    );


    await expect(
      page.getByRole(
        "navigation",
        {
          name:
            "Course sections"
        }
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.getByText(
        "View curriculum",
        {
          exact:
            true
        }
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "training journey uses a canonical or catalogue link",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/red-team-foundations-2026"
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
  "other activity routes stay isolated from V49",
  async ({
    page
  }) => {

    for (
      const route
      of [
        "/activities/cr4ckout-2",
        "/activities/cr4ckout-launched",
        "/activities/training-hub-established",
        "/activities/ai-security-foundations-2026"
      ]
    ) {

      await page.goto(
        route
      );


      await expect(
        page.locator(
          '[data-red-team-activity-design="v49"]'
        )
      ).toHaveCount(
        0
      );

    }

  }
);


test(
  "Red Team activity remains overflow-free",
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
        "/activities/red-team-foundations-2026"
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
