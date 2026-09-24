import {
  expect,
  test
} from "@playwright/test";


test(
  "homepage uses the full continuous UX chapter flow",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );


    const chapters =
      page.locator(
        "[data-home-chapter]"
      );


    await expect(
      chapters
    ).toHaveCount(
      16
    );


    const expected =
      [
        "hero",
        "trust",
        "audience",
        "services",
        "capability",
        "academy",
        "labs",
        "why",
        "process",
        "proof",
        "metrics",
        "team",
        "resources",
        "faq",
        "feed",
        "cta"
      ];


    for (
      let index = 0;
      index < expected.length;
      index += 1
    ) {

      await expect(
        chapters.nth(
          index
        )
      ).toHaveAttribute(
        "data-home-chapter",
        expected[
          index
        ]
      );

    }

  }
);


test(
  "homepage routes detailed content to dedicated pages",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );


    for (
      const href
      of [
        "/services",
        "/training",
        "/cr4ckout",
        "/activities",
        "/events",
        "/insights",
        "/company/team",
        "/contact"
      ]
    ) {

      await expect(
        page.locator(
          `a[href="${href}"]`
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
    `continuous homepage fits ${viewport.name}`,
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
        "/"
      );


      const geometry =
        await page.evaluate(
          () => ({
            scrollWidth:
              document.documentElement.scrollWidth,

            clientWidth:
              document.documentElement.clientWidth
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
