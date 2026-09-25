import {
  expect,
  test
} from "@playwright/test";


test(
  "Company renders the canonical About-page architecture",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    const root =
      page.locator(
        '[data-company-about="strict-v20"]'
      );


    await expect(
      root
    ).toBeVisible();


    await expect(
      root.locator(
        ":scope > section[data-company-section]"
      )
    ).toHaveCount(
      8
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            /offensive security beyond the assessment/i
        }
      )
    ).toHaveCount(
      1
    );

  }
);


test(
  "Company exposes verified facts and principles",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    for (
      const text
      of [
        "2023",
        "Tunis, Tunisia",
        "Think offensively",
        "Build through practice",
        "Share knowledge"
      ]
    ) {

      await expect(
        page.getByText(
          text,
          {
            exact:
              true
          }
        ).first()
      ).toBeVisible();

    }

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
    `Company remains contained at ${viewport.name}`,
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
        "/company"
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


      const width =
        await page.evaluate(
          () => ({
            scroll:
              document.documentElement.scrollWidth,

            client:
              document.documentElement.clientWidth
          })
        );


      expect(
        width.scroll
      ).toBeLessThanOrEqual(
        width.client
        +
        1
      );

    }
  );

}
