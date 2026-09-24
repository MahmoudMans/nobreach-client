import {
  expect,
  test
} from "@playwright/test";


test(
  "Careers V22 renders the truthful opportunity index",
  async ({
    page
  }) => {

    await page.goto(
      "/careers"
    );


    await expect(
      page.locator(
        '[data-careers-design="v22"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            "Opportunities published only when they are real."
        }
      )
    ).toBeVisible();


    await expect(
      page.getByText(
        "There are currently no published openings.",
        {
          exact:
            true
        }
      )
    ).toBeVisible();

  }
);


test(
  "Careers V22 exposes exactly three opportunity categories",
  async ({
    page
  }) => {

    await page.goto(
      "/careers"
    );


    const index =
      page.locator(
        '[data-careers-opportunity-index]'
      );


    await index.scrollIntoViewIfNeeded();


    await expect(
      index.locator(
        '[data-careers-category]'
      )
    ).toHaveCount(
      3
    );


    for (
      const heading
      of [
        "Employment",
        "Internships",
        "Freelance collaboration"
      ]
    ) {

      await expect(
        index.getByRole(
          "heading",
          {
            name:
              heading,

            exact:
              true
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "Careers V22 does not present fabricated job openings",
  async ({
    page
  }) => {

    await page.goto(
      "/careers"
    );


    await expect(
      page.locator(
        '[data-careers-design="v22"]'
      )
    ).toHaveAttribute(
      "data-careers-opening-count",
      "0"
    );


    await expect(
      page.locator(
        '[data-careers-opening]'
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "Careers V22 links candidates to real public work",
  async ({
    page
  }) => {

    await page.goto(
      "/careers"
    );


    const workIndex =
      page.locator(
        '[data-careers-section="explore"]'
      );


    await workIndex
      .scrollIntoViewIfNeeded();


    for (
      const href
      of [
        "/company/internships",
        "/training",
        "/insights"
      ]
    ) {

      const link =
        workIndex.locator(
          `a[href="${href}"]`
        );


      await expect(
        link
      ).toHaveCount(
        1
      );


      await expect(
        link
      ).toBeVisible();

    }

  }
);


test(
  "Careers V22 exposes the official follow CTA",
  async ({
    page
  }) => {

    await page.goto(
      "/careers"
    );


    await expect(
      page.getByRole(
        "heading",
        {
          name:
            "Follow No Breach for future opportunities."
        }
      )
    ).toBeVisible();


    const follow =
      page.getByRole(
        "link",
        {
          name:
            /Follow on LinkedIn/i
        }
      );


    await expect(
      follow
    ).toBeVisible();


    await expect(
      follow
    ).toHaveAttribute(
      "href",
      /^https:\/\//
    );

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
    `Careers V22 remains contained at ${viewport.name}`,
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
        "/careers"
      );


      const h1 =
        page.getByRole(
          "heading",
          {
            level:
              1,

            name:
              "Opportunities published only when they are real."
          }
        );


      await expect(
        h1
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
          await h1.boundingBox();


        if (!box) {

          throw new Error(
            "Careers V22 mobile H1 geometry unavailable"
          );

        }


        expect(
          box.y
        ).toBeLessThan(
          200
        );

      }

    }
  );

}
