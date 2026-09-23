import {
  expect,
  test
} from "@playwright/test";


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
    }
  ]
) {

  test(
    `Company V19 hero forms the first screen at ${viewport.width}x${viewport.height}`,
    async ({
      page
    }) => {

      await page.setViewportSize(
        viewport
      );


      await page.goto(
        "/company"
      );


      const hero =
        page.locator(
          '[data-company-section="hero"]'
        );


      await expect(
        hero
      ).toBeVisible();


      const box =
        await hero.boundingBox();


      if (!box) {

        throw new Error(
          "Company hero geometry unavailable"
        );

      }


      expect(
        box.height
      ).toBeGreaterThan(
        viewport.height
        *
        0.82
      );


      expect(
        box.y
        +
        box.height
      ).toBeLessThan(
        viewport.height
        +
        80
      );


      await expect(
        hero.getByRole(
          "heading",
          {
            level:
              1
          }
        )
      ).toBeVisible();


      await expect(
        hero.locator(
          '[data-company-ui="signal-system"]'
        )
      ).toBeVisible();

    }
  );

}


test(
  "Company V19 mobile hero remains compact",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        390,

      height:
        844
    });


    await page.goto(
      "/company"
    );


    const heading =
      page.locator(
        '[data-company-section="hero"] h1'
      );


    await expect(
      heading
    ).toBeVisible();


    const box =
      await heading.boundingBox();


    if (!box) {

      throw new Error(
        "Mobile heading geometry unavailable"
      );

    }


    expect(
      box.y
    ).toBeLessThan(
      260
    );


    expect(
      box.y
      +
      box.height
    ).toBeLessThan(
      650
    );

  }
);
