import {
  expect,
  test
} from "@playwright/test";


// NB_ANNOUNCEMENT_BAR_V1


test(
  "announcement bar links to CR4CKOUT 3.0 registration",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );


    const bar =
      page.getByRole(
        "complementary",
        {
          name:
            "Announcement"
        }
      );


    await expect(
      bar
    ).toBeVisible();


    await expect(
      bar
    ).toContainText(
      "CR4CKOUT 3.0"
    );


    const link =
      bar.getByRole(
        "link"
      );


    await expect(
      link
    ).toHaveAttribute(
      "href",
      /^https:\/\/docs\.google\.com\/forms\//
    );


    await expect(
      link
    ).toHaveAttribute(
      "target",
      "_blank"
    );

  }
);


test(
  "closing the announcement bar keeps it closed across pages",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );


    const bar =
      page.getByRole(
        "complementary",
        {
          name:
            "Announcement"
        }
      );


    await bar
      .getByRole(
        "button",
        {
          name:
            "Close announcement"
        }
      )
      .click();


    await expect(
      bar
    ).toBeHidden();


    await page.goto(
      "/training"
    );


    await expect(
      page.locator(
        "[data-announcement]"
      )
    ).toBeHidden();

  }
);


test(
  "announcement bar stays on one line on phones",
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


    const box =
      await page
        .locator(
          "[data-announcement]"
        )
        .boundingBox();


    expect(
      box?.height
      ??
      0
    ).toBeLessThanOrEqual(
      48
    );


    const overflow =
      await page.evaluate(
        () =>
          document.documentElement.scrollWidth
          -
          document.documentElement.clientWidth
      );


    expect(
      overflow
    ).toBeLessThanOrEqual(
      1
    );

  }
);
