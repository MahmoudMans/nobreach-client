import {
  expect,
  test
} from "@playwright/test";


test(
  "Internships V21 renders three workbench chapters",
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
        '[data-company-content-section]'
      )
    ).toHaveCount(
      3
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            "Security work built through practice."
        }
      )
    ).toBeVisible();

  }
);


test(
  "Internships V21 uses expandable technical project rows",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        1440,

      height:
        900
    });


    await page.goto(
      "/company/internships"
    );


    const projects =
      page.locator(
        '[data-internship-project]'
      );


    const count =
      await projects.count();


    expect(
      count
    ).toBeGreaterThanOrEqual(
      8
    );


    const first =
      projects.first();


    await first
      .locator(
        "summary"
      )
      .click();


    await expect(
      first.getByText(
        "Technologies",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      first.getByText(
        "Work",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      first.getByText(
        "Outputs",
        {
          exact:
            true
        }
      )
    ).toBeVisible();

  }
);


test(
  "Internships V21 exposes six connected methodology stages",
  async ({
    page
  }) => {

    await page.goto(
      "/company/internships"
    );


    const rail =
      page.locator(
        '[data-internship-ui="method-rail"]'
      );


    await rail.scrollIntoViewIfNeeded();


    await expect(
      rail.locator(
        "li"
      )
    ).toHaveCount(
      6
    );


    for (
      const title
      of [
        "Build",
        "Understand",
        "Validate",
        "Detect",
        "Fix",
        "Document"
      ]
    ) {

      await expect(
        rail.getByRole(
          "heading",
          {
            name:
              title,

            exact:
              true
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "Internships V21 keeps public safety boundaries visible",
  async ({
    page
  }) => {

    await page.goto(
      "/company/internships"
    );


    const safety =
      page.locator(
        '[data-internship-ui="safety-boundaries"]'
      );


    await safety.scrollIntoViewIfNeeded();


    await expect(
      safety.getByText(
        /authorized, isolated environments/i
      )
    ).toBeVisible();


    await expect(
      safety.getByText(
        /synthetic or deliberately vulnerable systems/i
      )
    ).toBeVisible();


    for (
      const label
      of [
        /Authorized/,
        /Isolated/,
        /Synthetic/
      ]
    ) {

      await expect(
        safety.getByText(
          label
        ).first()
      ).toBeVisible();

    }

  }
);


for (
  const viewport
  of [
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
        820,

      height:
        1180
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
        360,

      height:
        800
    }
  ]
) {

  test(
    `Internships V21 stays contained at ${viewport.name}`,
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


      const heading =
        page.getByRole(
          "heading",
          {
            level:
              1,

            name:
              "Security work built through practice."
          }
        );


      await expect(
        heading
      ).toBeVisible();


      const metrics =
        await page.evaluate(
          () => ({
            scrollWidth:
              document
                .documentElement
                .scrollWidth,

            clientWidth:
              document
                .documentElement
                .clientWidth
          })
        );


      expect(
        metrics.scrollWidth
      ).toBeLessThanOrEqual(
        metrics.clientWidth
        +
        1
      );


      if (
        viewport.width
        <=
        390
      ) {

        const box =
          await heading.boundingBox();


        if (!box) {

          throw new Error(
            "Internship V21 mobile H1 geometry unavailable"
          );

        }


        expect(
          box.y
        ).toBeLessThan(
          190
        );

      }

    }
  );

}
