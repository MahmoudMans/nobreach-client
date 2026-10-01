import {
  expect,
  test
} from "@playwright/test";


test(
  "Internships V21 route remains compatible under V22 audit",
  async ({
    page
  }) => {

    await page.goto(
      "/company/internships"
    );

    await expect(
      page.locator(
        '[data-internship-design="v21"]'
      )
    ).toBeVisible();

    await expect(
      page.locator(
        '[data-internship-audit="v22"]'
      )
    ).toBeVisible();

    await expect(
      page.locator(
        '[data-company-content-section]'
      )
    ).toHaveCount(
      2
    );

  }
);


test(
  "Internships keeps eight expandable technical project records",
  async ({
    page
  }) => {

    await page.goto(
      "/company/internships"
    );

    const projects =
      page.locator(
        '[data-internship-project]'
      );

    await expect(
      projects
    ).toHaveCount(
      8
    );

    await expect(
      projects.getByRole(
        "button",
        {
          name:
            /View details/i
        }
      )
    ).toHaveCount(
      8
    );

  }
);


test(
  "Internships keeps six connected methodology stages",
  async ({
    page
  }) => {

    await page.goto(
      "/company/internships"
    );

    await expect(
      page.locator(
        '[data-internship-ui="method-grid"] > li'
      )
    ).toHaveCount(
      6
    );

  }
);


test(
  "Internships keeps public safety boundaries visible",
  async ({
    page
  }) => {

    await page.goto(
      "/company/internships"
    );

    await expect(
      page.getByText(
        /authorized, isolated environments/i
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        /synthetic or deliberately vulnerable systems/i
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        "Contributor names are published only with permission.",
        {
          exact:
            true
        }
      )
    ).toBeVisible();

  }
);


for (
  const viewport
  of
  [
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
        "tablet",
      width:
        768,
      height:
        1024
    },
    {
      name:
        "mobile",
      width:
        390,
      height:
        844
    },
    {
      name:
        "narrow",
      width:
        320,
      height:
        800
    }
  ]
) {

  test(
    `Internships V21 compatibility remains contained at ${viewport.name}`,
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
        "/company/internships"
      );


      const dimensions =
        await page.evaluate(
          () => ({
            scroll:
              document
                .documentElement
                .scrollWidth,

            client:
              document
                .documentElement
                .clientWidth
          })
        );


      expect(
        dimensions.scroll
      ).toBeLessThanOrEqual(
        dimensions.client
        +
        1
      );

    }
  );

}
