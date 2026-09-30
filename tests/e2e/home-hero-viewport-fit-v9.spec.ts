import {
  expect,
  test
} from "@playwright/test";


const desktopViewports = [
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
      "standard-desktop",

    width:
      1280,

    height:
      800
  },
  {
    name:
      "compact-desktop",

    width:
      1180,

    height:
      820
  }
] as const;


for (
  const viewport
  of
  desktopViewports
) {

  test(
    `editorial homepage hero starts high at ${viewport.name}`,
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

      const hero =
        page.locator(
          '[data-home-chapter="hero"]'
        );

      await expect(
        hero
      ).toBeVisible();

      const box =
        await hero.boundingBox();

      expect(
        box
      ).not.toBeNull();

      expect(
        box!.y
      ).toBeLessThan(
        120
      );

      expect(
        box!.height
      ).toBeLessThan(
        780
      );

    }
  );

}


test(
  "compact homepage keeps primary hero decisions immediately visible",
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
      "/"
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
      page.getByRole(
        "link",
        {
          name:
            /Explore services/i
        }
      ).first()
    ).toBeVisible();

    await expect(
      page.getByRole(
        "link",
        {
          name:
            /Explore training/i
        }
      ).first()
    ).toBeVisible();

  }
);
