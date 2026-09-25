import {
  expect,
  test
} from "@playwright/test";


const route =
  "/insights";


const publishedInsightRoutes = [
  "/insights/authorization-is-a-system-not-a-checkbox",
  "/insights/attack-surface-mapping-before-exploitation",
  "/insights/prompt-injection-matters-when-ai-can-act",
  "/insights/manual-reasoning-in-web-security-testing"
] as const;


test(
  "Insights renders the continuous resource index",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        1440,

      height:
        900
    });


    await page.goto(
      route
    );


    await expect(
      page.locator(
        '[data-insights-index="resource-system"]'
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-insights-browser-system="resources"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            /security thinking worth publishing/i
        }
      )
    ).toHaveCount(
      1
    );

  }
);


test(
  "Insights keeps all four published research routes discoverable",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    for (
      const href
      of publishedInsightRoutes
    ) {

      await expect(
        page.locator(
          `a[href="${href}"]`
        ).first()
      ).toBeVisible();

    }

  }
);


test(
  "Insights does not render the removed research feed continuation",
  async ({
    page
  }) => {

    const response =
      await page.goto(
        "/insights",
        {
          waitUntil:
            "domcontentloaded"
        }
      );


    expect(
      response?.status()
    ).toBe(
      200
    );


    await expect(
      page.locator(
        '[data-insights-index-section="follow"]'
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.getByText(
        "Follow the research.",
        {
          exact:
            true
        }
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.getByRole(
        "link",
        {
          name:
            /Open research feed/i
        }
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "Insights browser controls retain accessible interaction targets",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const browser =
      page.locator(
        '[data-insights-browser-system="resources"]'
      );


    await expect(
      browser
    ).toBeVisible();


    const controls =
      browser.locator(
        "button, input, select"
      );


    const count =
      await controls.count();


    for (
      let index = 0;
      index < count;
      index += 1
    ) {

      const box =
        await controls
          .nth(
            index
          )
          .boundingBox();


      if (!box) {

        continue;

      }


      expect(
        box.height
      ).toBeGreaterThanOrEqual(
        40
      );

    }

  }
);


test(
  "article detail experience remains available",
  async ({
    page
  }) => {

    await page.goto(
      "/insights/attack-surface-mapping-before-exploitation"
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1
        }
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-insights-index="resource-system"]'
      )
    ).toHaveCount(
      0
    );

  }
);


for (
  const viewport
  of [
    {
      name:
        "desktop",

      width:
        1440,

      height:
        900
    },
    {
      name:
        "compact",

      width:
        1180,

      height:
        820
    },
    {
      name:
        "tablet",

      width:
        820,

      height:
        1180
    },
    {
      name:
        "mobile",

      width:
        390,

      height:
        844
    },
    {
      name:
        "narrow",

      width:
        360,

      height:
        800
    }
  ]
) {

  test(
    `Insights stays contained at ${viewport.name}`,
    async ({
      page
    }) => {

      await page.setViewportSize({
        width:
          viewport.width,

        height:
          viewport.height
      });


      await page.goto(
        route
      );


      await expect(
        page.getByRole(
          "heading",
          {
            level:
              1,

            name:
              /security thinking worth publishing/i
          }
        )
      ).toBeVisible();


      const geometry =
        await page.evaluate(
          () => ({
            scrollWidth:
              document
                .documentElement
                .scrollWidth,

            clientWidth:
              document
                .documentElement
                .clientWidth
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

}
