import {
  expect,
  test
} from "@playwright/test";


test(
  "Main Company page uses the full canonical About flow",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    const sections =
      page.locator(
        '[data-company-about="strict-v20"] > section[data-company-section]'
      );


    await expect(
      sections
    ).toHaveCount(
      8
    );


    const expected = [
      "intro",
      "story",
      "mission-vision",
      "values",
      "timeline",
      "expertise",
      "team",
      "cta"
    ];


    for (
      let index = 0;
      index < expected.length;
      index += 1
    ) {

      await expect(
        sections.nth(
          index
        )
      ).toHaveAttribute(
        "data-company-section",
        expected[
          index
        ]
      );

    }

  }
);
