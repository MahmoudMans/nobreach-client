import {
  expect,
  test
} from "@playwright/test";


const pages = [
  {
    route:
      "/company",

    expected:
      3
  },
  {
    route:
      "/company/founder",

    expected:
      3
  },
  {
    route:
      "/company/team",

    expected:
      1
  },
  {
    route:
      "/company/internships",

    expected:
      3
  }
];


for (
  const item
  of pages
) {

  test(
    `${item.route} never exceeds three meaningful content sections`,
    async ({
      page
    }) => {

      await page.goto(
        item.route,
        {
          waitUntil:
            "domcontentloaded"
        }
      );


      const sections =
        page.locator(
          '[data-company-content-section]'
        );


      await expect(
        sections
      ).toHaveCount(
        item.expected
      );


      const count =
        await sections.count();


      expect(
        count
      ).toBeLessThanOrEqual(
        3
      );

    }
  );

}


test(
  "Hero and final CTA stay outside the content-section budget",
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
