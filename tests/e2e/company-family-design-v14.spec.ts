import {
  expect,
  test
} from "@playwright/test";


const routes = [
  {
    path:
      "/company",

    heading:
      /offensive security beyond the assessment/i
  },
  {
    path:
      "/company/founder",

    heading:
      "Nouha Ben Brahim"
  },
  {
    path:
      "/company/team",

    heading:
      "People behind the work."
  },
  {
    path:
      "/company/internships",

    heading:
      "Security work built through practice."
  }
] as const;


for (
  const route
  of routes
) {

  test(
    `${route.path} uses one primary page heading`,
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


      const heading =
        page.getByRole(
          "heading",
          {
            level:
              1,

            name:
              route.heading
          }
        );


      await expect(
        heading
      ).toBeVisible();


      await expect(
        page.locator(
          "#main-content h1"
        )
      ).toHaveCount(
        1
      );

    }
  );

}


test(
  "Company and Founder no longer render page-level navigation bars",
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
  "company retains the complete editorial information architecture",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );


    for (
      const section
      of [
        "hero",
        "who-we-are",
        "what-we-do",
        "principles",
        "timeline",
        "founder",
        "team",
        "cta"
      ]
    ) {

      await expect(
        page.locator(
          `[data-company-section="${section}"]`
        )
      ).toBeVisible();

    }


    await expect(
      page.locator(
        '[data-company-card="capability"]'
      )
    ).toHaveCount(
      4
    );


    await expect(
      page.locator(
        '[data-company-card="principle"]'
      )
    ).toHaveCount(
      3
    );

  }
);


test(
  "founder retains portrait and complete profile sections",
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
      const section
      of [
        "hero",
        "overview",
        "journey",
        "expertise",
        "education",
        "public-work",
        "cta"
      ]
    ) {

      await expect(
        page.locator(
          `[data-founder-section="${section}"]`
        )
      ).toBeVisible();

    }

  }
);


test(
  "Team uses a real directory rather than placeholder cards",
  async ({
    page
  }) => {

    await page.goto(
      "/company/team"
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


    await expect(
      page
        .locator(
          "#main-content"
        )
        .getByText(
          "Founder",
          {
            exact:
              true
          }
        )
    ).toBeVisible();

  }
);


test(
  "internship portfolio remains fully data-driven and visible",
  async ({
    page
  }) => {

    await page.goto(
      "/company/internships"
    );


    const projects =
      page.locator(
        "article[id]"
      );


    expect(
      await projects.count()
    ).toBeGreaterThanOrEqual(
      8
    );


    for (
      const title
      of [
        "AI Security Training Labs",
        "Purple Team Cyber Range",
        "No Breach ReportOps",
        "Cloud-Native Security Playbook"
      ]
    ) {

      await expect(
        page.getByRole(
          "heading",
          {
            name:
              title
          }
        )
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
          geometry.clientWidth +
            1
        );

      }
    );

  }

}
