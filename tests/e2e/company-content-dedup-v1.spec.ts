import {
  expect,
  test
} from "@playwright/test";


test(
  "Company V19 contains only three primary content chapters",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    const sections =
      page.locator(
        '[data-company-content-section]'
      );


    await expect(
      sections
    ).toHaveCount(
      3
    );


    const names =
      await sections.evaluateAll(
        elements =>
          elements.map(
            element =>
              element.getAttribute(
                "data-company-content-section"
              )
          )
      );


    expect(
      names
    ).toEqual([
      "identity",
      "capabilities",
      "people"
    ]);

  }
);


test(
  "Hero and CTA remain outside the content budget",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    await expect(
      page.locator(
        '[data-company-section="hero"][data-company-content-section]'
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.locator(
        '[data-company-section="cta"][data-company-content-section]'
      )
    ).toHaveCount(
      0
    );

  }
);
