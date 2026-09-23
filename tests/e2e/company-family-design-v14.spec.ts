import {
  expect,
  test
} from "@playwright/test";


const routes = [
  {
    path:
      "/company",

    heading:
      /offensive security beyond the assessment/i,

    contentSections:
      3
  },
  {
    path:
      "/company/founder",

    heading:
      "Nouha Ben Brahim",

    contentSections:
      3
  },
  {
    path:
      "/company/team",

    heading:
      "People behind the work.",

    contentSections:
      1
  },
  {
    path:
      "/company/internships",

    heading:
      "Security work built through practice.",

    contentSections:
      3
  }
] as const;


for (
  const route
  of routes
) {

  test(
    `${route.path} uses one primary heading and the V18 section budget`,
    async ({
      page
    }) => {

      await page.goto(
        route.path,
        {
          waitUntil:
            "domcontentloaded"
        }
      );


      await expect(
        page.getByRole(
          "heading",
          {
            level:
              1,

            name:
              route.heading
          }
        )
      ).toBeVisible();


      await expect(
        page.locator(
          "#main-content h1"
        )
      ).toHaveCount(
        1
      );


      await expect(
        page.locator(
          '[data-company-content-section]'
        )
      ).toHaveCount(
        route.contentSections
      );


      expect(
        route.contentSections
      ).toBeLessThanOrEqual(
        3
      );

    }
  );

}


test(
  "Company and Founder do not render secondary page navigation",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    await expect(
      page.locator(
        'nav[aria-label="Company sections"]'
      )
    ).toHaveCount(
      0
    );


    await page.goto(
      "/company/founder"
    );


    await expect(
      page.locator(
        'nav[aria-label="Founder page sections"]'
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "founder preserves all profile information inside three chapters",
  async ({
    page
  }) => {

    await page.goto(
      "/company/founder"
    );


    await expect(
      page.locator(
        '[data-founder-photo-image="profile"]'
      )
    ).toBeVisible();


    for (
      const part
      of [
        "overview",
        "journey",
        "expertise",
        "education",
        "public-work"
      ]
    ) {

      await expect(
        page.locator(
          `[data-founder-section="${part}"]`
        )
      ).toBeAttached();

    }


    await expect(
      page.locator(
        '[data-company-content-section]'
      )
    ).toHaveCount(
      3
    );

  }
);


test(
  "Team does not create filler sections",
  async ({
    page
  }) => {

    await page.goto(
      "/company/team"
    );


    await expect(
      page.locator(
        '[data-company-content-section]'
      )
    ).toHaveCount(
      1
    );


    await expect(
      page.getByRole(
        "heading",
        {
          name:
            "Nouha Ben Brahim"
        }
      )
    ).toBeVisible();

  }
);


test(
  "Internships uses exactly three content chapters",
  async ({
    page
  }) => {

    await page.goto(
      "/company/internships"
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


    for (
      const name
      of [
        "projects",
        "method",
        "public-showcase"
      ]
    ) {

      await expect(
        page.locator(
          `[data-company-content-section="${name}"]`
        )
      ).toBeAttached();

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

  for (
    const route
    of routes
  ) {

    test(
      `${route.path} remains contained at ${viewport.name}`,
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
          route.path,
          {
            waitUntil:
              "domcontentloaded"
          }
        );


        await expect(
          page.locator(
            "#main-content h1"
          ).first()
        ).toBeVisible();


        const geometry =
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
          geometry.scrollWidth
        ).toBeLessThanOrEqual(
          geometry.clientWidth
          +
          1
        );

      }
    );

  }

}
