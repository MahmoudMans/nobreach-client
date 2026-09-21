import {
  expect,
  test
} from "@playwright/test";


async function companyReady(
  page:
    import("@playwright/test").Page
) {
  const company =
    page.locator(
      '[data-company-page="v2"]'
    );


  await expect(
    company
  ).toBeVisible();


  await expect(
    page.getByRole(
      "heading",
      {
        level:
          1,

        name:
          /offensive security at the center/i
      }
    )
  ).toBeVisible();


  return company;
}


test(
  "company page renders the complete corporate experience",
  async ({
    page
  }) => {
    await page.goto(
      "/company",
      {
        waitUntil:
          "domcontentloaded"
      }
    );


    const company =
      await companyReady(
        page
      );


    for (
      const section
      of [
        "hero",
        "who-we-are",
        "story",
        "what-we-do",
        "principles",
        "ecosystem",
        "timeline",
        "founder",
        "team",
        "cta"
      ]
    ) {
      await expect(
        company.locator(
          `[data-company-section="${section}"]`
        )
      ).toBeVisible();
    }
  }
);


test(
  "company hero uses a substantial desktop split layout",
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
      "/company",
      {
        waitUntil:
          "domcontentloaded"
      }
    );


    await companyReady(
      page
    );


    const hero =
      page.locator(
        '[data-company-section="hero"]'
      );


    const visual =
      page.locator(
        '[data-ui="company-system-map"]'
      );


    await expect(
      hero
    ).toBeVisible();


    await expect(
      visual
    ).toBeVisible();


    const heading =
      hero.locator(
        "h1"
      );


    const headingBox =
      await heading.boundingBox();

    const visualBox =
      await visual.boundingBox();


    if (
      !headingBox
      ||
      !visualBox
    ) {
      throw new Error(
        "Company hero geometry unavailable"
      );
    }


    expect(
      headingBox.x
    ).toBeLessThan(
      visualBox.x
    );


    expect(
      visualBox.width
    ).toBeGreaterThan(
      350
    );


    expect(
      visualBox.height
    ).toBeGreaterThan(
      400
    );
  }
);


test(
  "company page exposes four factual company blocks",
  async ({
    page
  }) => {
    await page.goto(
      "/company"
    );


    await companyReady(
      page
    );


    const hero =
      page.locator(
        '[data-company-section="hero"]'
      );


    for (
      const value
      of [
        "2023",
        "Tunis, Tunisia",
        "Offensive Security",
        "Services · Education · Community"
      ]
    ) {
      await expect(
        hero.getByText(
          value,
          {
            exact:
              true
          }
        ).first()
      ).toBeVisible();
    }
  }
);


test(
  "company principles stay limited to the intended three",
  async ({
    page
  }) => {
    await page.goto(
      "/company"
    );


    const company =
      await companyReady(
        page
      );


    const section =
      company.locator(
        '[data-company-section="principles"]'
      );


    const principles =
      section.locator(
        "article"
      );


    await expect(
      principles
    ).toHaveCount(
      3
    );


    for (
      const heading
      of [
        "Think offensively",
        "Build through practice",
        "Share knowledge"
      ]
    ) {
      await expect(
        section.getByRole(
          "heading",
          {
            name:
              heading
          }
        )
      ).toBeVisible();
    }
  }
);


test(
  "rendered company links point to the real ecosystem routes",
  async ({
    page
  }) => {
    await page.goto(
      "/company"
    );


    await companyReady(
      page
    );


    for (
      const href
      of [
        "/services",
        "/training",
        "/cr4ckout",
        "/activities",
        "/insights",
        "/company/founder",
        "/company/team",
        "/company/internships",
        "/contact"
      ]
    ) {
      const links =
        page.locator(
          `a[href="${href}"]`
        );


      expect(
        await links.count()
      ).toBeGreaterThanOrEqual(
        1
      );


      await expect(
        links.first()
      ).toBeVisible();
    }
  }
);


test(
  "company timeline exposes the canonical development sequence",
  async ({
    page
  }) => {
    await page.goto(
      "/company"
    );


    const company =
      await companyReady(
        page
      );


    const timeline =
      company.locator(
        '[data-company-section="timeline"]'
      );


    await expect(
      timeline.locator(
        "li"
      )
    ).toHaveCount(
      5
    );


    for (
      const milestone
      of [
        "No Breach founded",
        "Training Hub established",
        "CR4CKOUT launched",
        "Community and training activities",
        "Continuing to build"
      ]
    ) {
      await expect(
        timeline.getByText(
          milestone,
          {
            exact:
              true
          }
        )
      ).toBeVisible();
    }
  }
);


test(
  "founder preview uses the founder title without ownership claims",
  async ({
    page
  }) => {
    await page.goto(
      "/company"
    );


    const company =
      await companyReady(
        page
      );


    const founder =
      company.locator(
        '[data-company-section="founder"]'
      );


    await expect(
      founder.getByRole(
        "heading",
        {
          name:
            "Nouha Ben Brahim"
        }
      )
    ).toBeVisible();


    await expect(
      founder.getByText(
        /founder of no breach/i
      )
    ).toBeVisible();


    await expect(
      founder.getByText(
        /\bowner\b/i
      )
    ).toHaveCount(
      0
    );
  }
);


test(
  "company page remains overflow-free on mobile",
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
      "/company",
      {
        waitUntil:
          "domcontentloaded"
      }
    );


    await companyReady(
      page
    );


    await expect(
      page.locator(
        '[data-ui="company-system-map"]'
      )
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
      metrics.clientWidth +
        1
    );
  }
);
