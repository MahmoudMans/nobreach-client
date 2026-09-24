import {
  expect,
  test
} from "@playwright/test";


test(
  "API Security V23 renders the trust boundary experience",
  async ({
    page
  }) => {

    await page.goto(
      "/services/api-security"
    );


    await expect(
      page.locator(
        '[data-api-security-design="v23"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            /API security starts with trust boundaries/i
        }
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-api-ui="trust-map"]'
      )
    ).toBeVisible();

  }
);


test(
  "API Security V23 exposes ten assessment focus rows",
  async ({
    page
  }) => {

    await page.goto(
      "/services/api-security"
    );


    const section =
      page.locator(
        '[data-api-section="attack-surface"]'
      );


    await section
      .scrollIntoViewIfNeeded();


    await expect(
      section.locator(
        '[data-api-focus]'
      )
    ).toHaveCount(
      10
    );


    for (
      const name
      of [
        "REST APIs",
        "GraphQL",
        "Authentication",
        "Authorization",
        "BOLA / IDOR",
        "Object-level access",
        "Function-level authorization",
        "Token security",
        "Rate limiting",
        "Business logic & data exposure"
      ]
    ) {

      await expect(
        section.getByRole(
          "heading",
          {
            name,
            exact:
              true
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "API Security V23 models three authorization boundaries",
  async ({
    page
  }) => {

    await page.goto(
      "/services/api-security"
    );


    const system =
      page.locator(
        '[data-api-ui="boundary-system"]'
      );


    await system
      .scrollIntoViewIfNeeded();


    await expect(
      system.locator(
        '[data-api-boundary]'
      )
    ).toHaveCount(
      3
    );


    for (
      const heading
      of [
        "Identity boundary",
        "Object boundary",
        "Function boundary"
      ]
    ) {

      await expect(
        system.getByRole(
          "heading",
          {
            name:
              heading,

            exact:
              true
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "API Security V23 preserves workflow and authorization FAQ",
  async ({
    page
  }) => {

    await page.goto(
      "/services/api-security"
    );


    const section =
      page.locator(
        '[data-api-section="validation-reporting"]'
      );


    await section
      .scrollIntoViewIfNeeded();


    await expect(
      section.getByRole(
        "heading",
        {
          level:
            2,

          name:
            "From initial context to actionable reporting."
        }
      )
    ).toBeVisible();


    await expect(
      section.getByText(
        "Does API testing include authorization?",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-api-ui="workflow"] li'
      )
    ).toHaveCount(
      5
    );

  }
);


test(
  "API Security V23 keeps assessment CTA connected to contact",
  async ({
    page
  }) => {

    await page.goto(
      "/services/api-security"
    );


    const cta =
      page.locator(
        '[data-api-section="cta"]'
      );


    await cta
      .scrollIntoViewIfNeeded();


    await expect(
      cta.getByRole(
        "link",
        {
          name:
            /Discuss an assessment/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/contact"
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
    `API Security V23 remains contained at ${viewport.name}`,
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
        "/services/api-security"
      );


      const heading =
        page.getByRole(
          "heading",
          {
            level:
              1,

            name:
              /API security starts with trust boundaries/i
          }
        );


      await expect(
        heading
      ).toBeVisible();


      const metrics =
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
        metrics.scrollWidth
      ).toBeLessThanOrEqual(
        metrics.clientWidth
        +
        1
      );


      if (
        viewport.width
        <=
        390
      ) {

        const box =
          await heading.boundingBox();


        if (!box) {

          throw new Error(
            "API Security V23 mobile H1 geometry unavailable"
          );

        }


        expect(
          box.y
        ).toBeLessThan(
          200
        );

      }

    }
  );

}
