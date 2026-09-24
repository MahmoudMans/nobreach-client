import {
  expect,
  test
} from "@playwright/test";


test(
  "Infrastructure Security V24 renders the exposure graph",
  async ({
    page
  }) => {

    await page.goto(
      "/services/infrastructure-security"
    );


    await expect(
      page.locator(
        '[data-infrastructure-design="v24"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            /Infrastructure risk starts with what is reachable/i
        }
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-infrastructure-ui="exposure-graph"]'
      )
    ).toBeVisible();

  }
);


test(
  "Infrastructure Security V24 exposes three external surface layers",
  async ({
    page
  }) => {

    await page.goto(
      "/services/infrastructure-security"
    );


    const section =
      page.locator(
        '[data-infrastructure-section="external-surface"]'
      );


    await section
      .scrollIntoViewIfNeeded();


    await expect(
      section.locator(
        '[data-infrastructure-external]'
      )
    ).toHaveCount(
      3
    );


    for (
      const heading
      of [
        "External exposure",
        "Network services",
        "Configuration review"
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
  "Infrastructure Security V24 exposes four internal path areas",
  async ({
    page
  }) => {

    await page.goto(
      "/services/infrastructure-security"
    );


    const section =
      page.locator(
        '[data-infrastructure-section="internal-paths"]'
      );


    await section
      .scrollIntoViewIfNeeded();


    await expect(
      section.locator(
        '[data-infrastructure-path]'
      )
    ).toHaveCount(
      4
    );


    for (
      const heading
      of [
        "Internal attack surface",
        "Privilege paths",
        "Segmentation",
        "Credentials"
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
  "Infrastructure Security V24 retains reporting as a primary chapter",
  async ({
    page
  }) => {

    await page.goto(
      "/services/infrastructure-security"
    );


    const reporting =
      page.locator(
        '[data-infrastructure-section="reporting"]'
      );


    await reporting
      .scrollIntoViewIfNeeded();


    await expect(
      reporting.getByRole(
        "heading",
        {
          level:
            2,

          name:
            /Keep infrastructure findings connected to their system context/i
        }
      )
    ).toBeVisible();


    await expect(
      reporting.locator(
        '[data-infrastructure-ui="reporting-register"]'
      )
    ).toBeVisible();


    await expect(
      reporting.getByText(
        "Reporting",
        {
          exact:
            true
        }
      ).last()
    ).toBeVisible();

  }
);


test(
  "Infrastructure Security V24 assessment CTA reaches contact",
  async ({
    page
  }) => {

    await page.goto(
      "/services/infrastructure-security"
    );


    const cta =
      page.locator(
        '[data-infrastructure-section="cta"]'
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
    `Infrastructure Security V24 remains contained at ${viewport.name}`,
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
        "/services/infrastructure-security"
      );


      const heading =
        page.getByRole(
          "heading",
          {
            level:
              1,

            name:
              /Infrastructure risk starts with what is reachable/i
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
            "Infrastructure V24 mobile H1 geometry unavailable"
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
