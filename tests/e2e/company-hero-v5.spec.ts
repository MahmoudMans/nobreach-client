import {
  expect,
  test,
} from "@playwright/test";


test(
  "company opens with the enhanced V5 hero",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    const hero =
      page.locator(
        '[data-company-hero="v5"]'
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
        '[data-company-hero-decoration="signal-grid"]'
      )
    ).toHaveCount(
      1
    );


    const styles =
      await hero.evaluate(
        element => {

          const computed =
            window.getComputedStyle(
              element
            );


          return {
            position:
              computed.position,

            overflow:
              computed.overflow,

            backgroundImage:
              computed.backgroundImage,

            minHeight:
              computed.minHeight,
          };

        }
      );


    expect(
      styles.position
    ).toBe(
      "relative"
    );


    expect(
      styles.overflow
    ).toBe(
      "hidden"
    );


    expect(
      styles.backgroundImage
    ).not.toBe(
      "none"
    );

  }
);


test(
  "company V5 preserves the established profile-card experience",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    await expect(
      page.locator(
        '[data-company-page="v4"]'
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-company-hero="v5"]'
      )
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
    `company V5 hero remains controlled at ${viewport.width}x${viewport.height}`,
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
          '[data-company-hero="v5"]'
        );


      await expect(
        hero
      ).toBeVisible();


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

            const hero =
              document.querySelector(
                '[data-company-hero="v5"]'
              );


            const heading =
              hero?.querySelector(
                "h1"
              );


            if (
              !hero ||
              !heading
            ) {

              throw new Error(
                "Company V5 hero unavailable"
              );

            }


            const heroBox =
              hero.getBoundingClientRect();


            const headingBox =
              heading.getBoundingClientRect();


            return {
              viewportWidth:
                document.documentElement.clientWidth,

              documentWidth:
                document.documentElement.scrollWidth,

              heroWidth:
                heroBox.width,

              headingWidth:
                headingBox.width,

              headingVisible:
                headingBox.bottom > 0 &&
                headingBox.top <
                  window.innerHeight,
            };

          }
        );


      expect(
        result.documentWidth
      ).toBeLessThanOrEqual(
        result.viewportWidth + 1
      );


      expect(
        result.heroWidth
      ).toBeGreaterThan(
        0
      );


      expect(
        result.headingWidth
      ).toBeGreaterThan(
        0
      );


      expect(
        result.headingVisible
      ).toBe(
        true
      );

    }
  );

}


test(
  "company V5 decorative artwork is hidden from accessibility semantics",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    const decoration =
      page.locator(
        '[data-company-hero-decoration="signal-grid"]'
      );


    await expect(
      decoration
    ).toHaveAttribute(
      "aria-hidden",
      "true"
    );

  }
);
