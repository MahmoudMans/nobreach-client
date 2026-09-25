import {
  expect,
  test
} from "@playwright/test";


test(
  "AI Security activity renders one strict detail experience",
  async ({
    page
  }) => {

    const response =
      await page.goto(
        "/activities/ai-security-foundations-2026"
      );


    expect(
      response?.status()
    ).toBe(
      200
    );


    const root =
      page.locator(
        '[data-ai-security-activity-design="v50"]'
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
  "AI Security activity exposes one lightweight breadcrumb",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/ai-security-foundations-2026"
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
  "AI Security activity uses its restrained system visual",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/ai-security-foundations-2026"
    );


    const root =
      page.locator(
        '[data-ai-security-activity-design="v50"]'
      );


    for (
      const label
      of [
        "PROMPT",
        "MODEL",
        "TOOL",
        "ACTION"
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
  "AI Security activity exposes the correct content flow",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/ai-security-foundations-2026"
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
          `[data-ai-activity-section="${section}"]`
        )
      ).toHaveCount(
        1
      );

    }

  }
);


test(
  "AI Security activity remains distinct from the course page",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/ai-security-foundations-2026"
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
  "AI Security activity provides a Training Hub journey",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/ai-security-foundations-2026"
    );


    const links =
      page.locator(
        'a[href^="/training"]'
      );


    expect(
      await links.count()
    ).toBeGreaterThanOrEqual(
      1
    );

  }
);


test(
  "other activity routes remain isolated from V50",
  async ({
    page
  }) => {

    for (
      const route
      of [
        "/activities/red-team-foundations-2026",
        "/activities/cr4ckout-2",
        "/activities/cr4ckout-launched",
        "/activities/training-hub-established"
      ]
    ) {

      await page.goto(
        route
      );


      await expect(
        page.locator(
          '[data-ai-security-activity-design="v50"]'
        )
      ).toHaveCount(
        0
      );

    }

  }
);


test(
  "AI Security activity remains overflow-free",
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
        "/activities/ai-security-foundations-2026"
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
