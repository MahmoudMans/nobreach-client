import {
  expect,
  test
} from "@playwright/test";


test(
  "Main Company page uses the consolidated audit-led flow",
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
      6
    );

    const expected = [
      "intro",
      "mission-vision",
      "timeline",
      "founder",
      "approach-expertise",
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
