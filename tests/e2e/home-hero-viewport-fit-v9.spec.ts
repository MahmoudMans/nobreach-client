import {
  expect,
  test,
} from "@playwright/test";


type Geometry = {
  headerBottom:
    number;

  heroTop:
    number;

  heroBottom:
    number;

  companyTop:
    number;

  viewportHeight:
    number;

  documentWidth:
    number;

  viewportWidth:
    number;

  titleBottom:
    number;

  actionsBottom:
    number;

  visualBottom:
    number | null;
};


async function geometry(
  page:
    import("@playwright/test").Page
): Promise<Geometry> {

  return page.evaluate(
    () => {

      const header =
        document.querySelector(
          "header"
        );


      const hero =
        document.querySelector(
          '[data-home-hero="v8"]'
        );


      const company =
        document.querySelector(
          '[data-home-section="company"]'
        );


      const title =
        hero?.querySelector(
          "h1"
        );


      const actions =
        hero?.querySelector(
          'a[href="/services"]'
        )
        ?.parentElement;


      const visual =
        hero?.querySelector(
          '[data-home-hero-visual="attack-surface"]'
        );


      if (
        !header ||
        !hero ||
        !company ||
        !title ||
        !actions
      ) {

        throw new Error(
          "Homepage V9 geometry target unavailable"
        );

      }


      const headerBox =
        header.getBoundingClientRect();


      const heroBox =
        hero.getBoundingClientRect();


      const companyBox =
        company.getBoundingClientRect();


      const titleBox =
        title.getBoundingClientRect();


      const actionsBox =
        actions.getBoundingClientRect();


      const visualBox =
        visual
          ? visual.getBoundingClientRect()
          : null;


      const visualDisplay =
        visual
          ? window
              .getComputedStyle(
                visual
              )
              .display
          : "none";


      return {
        headerBottom:
          headerBox.bottom,

        heroTop:
          heroBox.top,

        heroBottom:
          heroBox.bottom,

        companyTop:
          companyBox.top,

        viewportHeight:
          window.innerHeight,

        documentWidth:
          document.documentElement.scrollWidth,

        viewportWidth:
          document.documentElement.clientWidth,

        titleBottom:
          titleBox.bottom,

        actionsBottom:
          actionsBox.bottom,

        visualBottom:
          visualBox &&
          visualDisplay !==
            "none"
            ? visualBox.bottom
            : null,
      };

    }
  );

}


const desktopViewports = [
  {
    width:
      1440,

    height:
      900,
  },
  {
    width:
      1280,

    height:
      800,
  },
  {
    width:
      1180,

    height:
      820,
  },
] as const;


for (
  const viewport
  of desktopViewports
) {

  test(
    `V9 hero fits first screen at ${viewport.width}x${viewport.height}`,
    async ({
      page
    }) => {

      await page.setViewportSize(
        viewport
      );


      await page.goto(
        "/"
      );


      const hero =
        page.locator(
          '[data-home-hero="v8"]'
        );


      await expect(
        hero
      ).toBeVisible();


      const result =
        await geometry(
          page
        );


      /*
       * No visible layout gap between navbar and hero.
       */
      const navbarHeroGap =
        result.heroTop -
        result.headerBottom;


      /*
       * There must never be visible positive space between the navigation
       * and hero. A small negative value means the hero sits underneath the
       * opaque navbar by a few pixels, intentionally eliminating the seam.
       */
      expect(
        navbarHeroGap
      ).toBeLessThanOrEqual(
        3
      );


      expect(
        navbarHeroGap
      ).toBeGreaterThanOrEqual(
        -9
      );


      /*
       * Hero must finish inside the first viewport.
       */
      expect(
        result.heroBottom
      ).toBeLessThanOrEqual(
        result.viewportHeight + 1
      );


      /*
       * Important visible hero content must also fit.
       */
      expect(
        result.titleBottom
      ).toBeLessThanOrEqual(
        result.heroBottom + 1
      );


      expect(
        result.actionsBottom
      ).toBeLessThanOrEqual(
        result.heroBottom + 1
      );


      if (
        result.visualBottom !==
        null
      ) {

        expect(
          result.visualBottom
        ).toBeLessThanOrEqual(
          result.heroBottom + 1
        );

      }


      /*
       * No horizontal overflow.
       */
      expect(
        result.documentWidth
      ).toBeLessThanOrEqual(
        result.viewportWidth + 1
      );

    }
  );

}


test(
  "a slight scroll immediately reveals the next homepage section",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        1440,

      height:
        900,
    });


    await page.goto(
      "/"
    );


    await page.evaluate(
      () => {

        window.scrollTo({
          top:
            72,

          behavior:
            "instant",
        });

      }
    );


    const result =
      await page.evaluate(
        () => {

          const company =
            document.querySelector(
              '[data-home-section="company"]'
            );


          if (
            !company
          ) {

            throw new Error(
              "Company section unavailable"
            );

          }


          return {
            top:
              company
                .getBoundingClientRect()
                .top,

            viewport:
              window.innerHeight,
          };

        }
      );


    expect(
      result.top
    ).toBeLessThan(
      result.viewport
    );

  }
);


test(
  "mobile opens with complete primary hero content inside the first screen",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        390,

      height:
        844,
    });


    await page.goto(
      "/"
    );


    const hero =
      page.locator(
        '[data-home-hero="v8"]'
      );


    await expect(
      hero
    ).toBeVisible();


    await expect(
      hero.getByRole(
        "heading",
        {
          level:
            1,

          name:
            /offensive security built around how real systems fail/i,
        }
      )
    ).toBeVisible();


    await expect(
      hero.getByRole(
        "link",
        {
          name:
            /explore services/i,
        }
      )
    ).toBeVisible();


    await expect(
      hero.getByRole(
        "link",
        {
          name:
            /about no breach/i,
        }
      )
    ).toBeVisible();


    const result =
      await geometry(
        page
      );


    expect(
      Math.abs(
        result.heroTop -
        result.headerBottom
      )
    ).toBeLessThanOrEqual(
      2
    );


    expect(
      result.heroBottom
    ).toBeLessThanOrEqual(
      result.viewportHeight + 1
    );


    expect(
      result.actionsBottom
    ).toBeLessThanOrEqual(
      result.heroBottom + 1
    );


    expect(
      result.documentWidth
    ).toBeLessThanOrEqual(
      result.viewportWidth + 1
    );

  }
);
