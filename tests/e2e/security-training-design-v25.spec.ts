import {
  expect,
  test
} from "@playwright/test";


test(
  "Security Training V25 renders the capability studio",
  async ({
    page
  }) => {

    await page.goto(
      "/services/security-training"
    );


    await expect(
      page.locator(
        '[data-security-training-design="v25"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            /Security capability is built through practice/i
        }
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-security-training-ui="capability-map"]'
      )
    ).toBeVisible();

  }
);


test(
  "Security Training V25 exposes four organization audiences",
  async ({
    page
  }) => {

    await page.goto(
      "/services/security-training"
    );


    const section =
      page.locator(
        '[data-security-training-section="audiences"]'
      );


    await section
      .scrollIntoViewIfNeeded();


    await expect(
      section.locator(
        '[data-security-training-audience]'
      )
    ).toHaveCount(
      4
    );


    for (
      const heading
      of [
        "Companies",
        "Universities",
        "Communities",
        "Teams"
      ]
    ) {

      await expect(
        section.getByRole(
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
  "Security Training V25 presents four learning architecture stages",
  async ({
    page
  }) => {

    await page.goto(
      "/services/security-training"
    );


    const section =
      page.locator(
        '[data-security-training-section="architecture"]'
      );


    await section
      .scrollIntoViewIfNeeded();


    await expect(
      section.locator(
        '[data-security-training-step]'
      )
    ).toHaveCount(
      4
    );


    for (
      const heading
      of [
        "Context",
        "Design",
        "Practice",
        "Review"
      ]
    ) {

      await expect(
        section.getByRole(
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
  "Security Training V25 separates service and public training journeys",
  async ({
    page
  }) => {

    await page.goto(
      "/services/security-training"
    );


    const journeys =
      page.locator(
        '[data-security-training-section="journeys"]'
      );


    await journeys
      .scrollIntoViewIfNeeded();


    await expect(
      journeys.getByRole(
        "heading",
        {
          name:
            "Security Training Service",

          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      journeys.getByRole(
        "heading",
        {
          name:
            "Training Hub",

          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      journeys.getByRole(
        "link",
        {
          name:
            /Discuss training/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/contact"
    );


    await expect(
      journeys.getByRole(
        "link",
        {
          name:
            /Explore Training Hub/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/training"
    );

  }
);


test(
  "Security Training V25 contact CTA stays organization-facing",
  async ({
    page
  }) => {

    await page.goto(
      "/services/security-training"
    );


    const cta =
      page.locator(
        '[data-security-training-section="cta"]'
      );


    await cta
      .scrollIntoViewIfNeeded();


    await expect(
      cta.getByRole(
        "link",
        {
          name:
            /Start a conversation/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/contact"
    );


    await expect(
      cta.getByRole(
        "link",
        {
          name:
            /Public Training Hub/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/training"
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
    `Security Training V25 remains contained at ${viewport.name}`,
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
        "/services/security-training"
      );


      const heading =
        page.getByRole(
          "heading",
          {
            level:
              1,

            name:
              /Security capability is built through practice/i
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
            "Security Training V25 mobile H1 geometry unavailable"
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
