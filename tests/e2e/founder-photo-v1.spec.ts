import {
  expect,
  test,
} from "@playwright/test";


async function expectImageLoaded(
  locator:
    import("@playwright/test").Locator
) {

  await expect(
    locator
  ).toHaveCount(
    1
  );


  await locator
    .scrollIntoViewIfNeeded();


  await expect(
    locator
  ).toBeVisible();


  await expect
    .poll(
      async () =>
        locator.evaluate(
          (
            element
          ) => {

            const image =
              element as HTMLImageElement;


            return (
              image.complete
              &&
              image.naturalWidth > 0
              &&
              image.naturalHeight > 0
            );
          }
        ),
      {
        message:
          "expected founder portrait image to finish loading",

        timeout:
          5000,
      }
    )
    .toBe(
      true
    );

}


test(
  "founder profile renders the real portrait",
  async ({
    page
  }) => {

    await page.goto(
      "/company/founder"
    );


    const portrait =
      page.locator(
        '[data-founder-photo-image="profile"]'
      );


    await expectImageLoaded(
      portrait
    );


    await expect(
      portrait
    ).toHaveAttribute(
      "alt",
      ""
    );

  }
);


test(
  "company page links to the dedicated founder profile instead of duplicating its portrait",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    await expect(
      page.locator(
        '[data-founder-photo-image="company"]'
      )
    ).toHaveCount(
      0
    );


    await expect(
      page
        .locator(
          'main a[href="/company/founder"]'
        )
        .first()
    ).toBeVisible();

  }
);


test(
  "founder photo layouts remain overflow free on mobile",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        390,

      height:
        844,
    });


    for (
      const route
      of [
        "/company/founder",
        "/company",
      ]
    ) {

      await page.goto(
        route
      );


      const overflow =
        await page.evaluate(
          () =>
            document.documentElement.scrollWidth
            >
            document.documentElement.clientWidth
        );


      expect(
        overflow
      ).toBe(
        false
      );

    }

  }
);
