import {
  expect,
  test,
} from "@playwright/test";


test(
  "company renders the clean V6 hero",
  async ({
    page
  }) => {

    await page.goto(
      "/company",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    const hero =
      page.locator(
        '[data-company-hero="v6"]'
      );


    await expect(
      hero
    ).toBeVisible();


    await expect(
      hero.locator(
        "h1"
      )
    ).toBeVisible();


    await expect(
      hero.locator(
        '[data-company-ui="profile-card"]'
      )
    ).toBeVisible();


    const design =
      await hero.evaluate(
        element => {

          const style =
            window.getComputedStyle(
              element
            );


          return {
            backgroundImage:
              style.backgroundImage,

            backgroundColor:
              style.backgroundColor,

            boxShadow:
              style.boxShadow,

            minHeight:
              style.minHeight,
          };

        }
      );


    expect(
      design.backgroundImage
    ).toBe(
      "none"
    );


    expect(
      design.backgroundColor
    ).not.toBe(
      "rgba(0, 0, 0, 0)"
    );


    expect(
      design.boxShadow
    ).toBe(
      "none"
    );

  }
);


for (
  const viewport
  of [
    {
      width:
        1440,

      height:
        900,
    },
    {
      width:
        1180,

      height:
        820,
    },
    {
      width:
        820,

      height:
        1180,
    },
    {
      width:
        390,

      height:
        844,
    },
  ]
) {

  test(
    `company V6 remains compact at ${viewport.width}x${viewport.height}`,
    async ({
      page
    }) => {

      await page.setViewportSize(
        viewport
      );


      await page.goto(
        "/company",
        {
          waitUntil:
            "domcontentloaded",
        }
      );


      const hero =
        page.locator(
          '[data-company-hero="v6"]'
        );


      const heading =
        hero.locator(
          "h1"
        );


      await expect(
        heading
      ).toBeVisible();


      await expect(
        heading
      ).toBeInViewport();


      const result =
        await page.evaluate(
          () => {

            const heading =
              document.querySelector(
                '[data-company-hero="v6"] h1'
              );


            if (
              !heading
            ) {

              throw new Error(
                "Company V6 heading unavailable"
              );

            }


            const box =
              heading.getBoundingClientRect();


            return {
              headingTop:
                box.top,

              viewportHeight:
                window.innerHeight,

              scrollWidth:
                document.documentElement.scrollWidth,

              clientWidth:
                document.documentElement.clientWidth,
            };

          }
        );


      expect(
        result.headingTop
      ).toBeLessThan(
        result.viewportHeight * 0.34
      );


      expect(
        result.scrollWidth
      ).toBeLessThanOrEqual(
        result.clientWidth + 1
      );

    }
  );

}
