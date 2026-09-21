import {
  expect,
  test
} from "@playwright/test";


async function ready(
  page:
    import("@playwright/test").Page
) {
  const company =
    page.locator(
      '[data-company-page="v4"]'
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
          /offensive security beyond the assessment/i
      }
    )
  ).toBeVisible();


  return company;
}


test(
  "company V4 renders the full visual corporate experience",
  async ({
    page
  }) => {
    await page.goto(
      "/company"
    );


    const company =
      await ready(
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
  "hero balances copy with a visual profile card",
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
      "/company"
    );


    await ready(
      page
    );


    const copy =
      page.locator(
        '[data-company-ui="hero-copy"]'
      );


    const profile =
      page.locator(
        '[data-company-ui="profile-card"]'
      );


    await expect(
      copy
    ).toBeVisible();


    await expect(
      profile
    ).toBeVisible();


    const copyBox =
      await copy.boundingBox();

    const profileBox =
      await profile.boundingBox();


    if (
      !copyBox
      ||
      !profileBox
    ) {
      throw new Error(
        "Company hero geometry unavailable"
      );
    }


    expect(
      copyBox.x
    ).toBeLessThan(
      profileBox.x
    );


    expect(
      profileBox.width
    ).toBeGreaterThan(
      330
    );


    expect(
      profileBox.height
    ).toBeGreaterThan(
      300
    );
  }
);


test(
  "company profile presents four factual tiles",
  async ({
    page
  }) => {
    await page.goto(
      "/company"
    );


    await ready(
      page
    );


    const facts =
      page.locator(
        '[data-company-ui="facts"]'
      );


    await expect(
      facts.locator(
        "> div"
      )
    ).toHaveCount(
      4
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
        facts.getByText(
          value,
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
  "company approach uses three visual process cards",
  async ({
    page
  }) => {
    await page.goto(
      "/company"
    );


    await ready(
      page
    );


    const flow =
      page.locator(
        '[data-company-ui="approach-flow"]'
      );


    await expect(
      flow.locator(
        "article"
      )
    ).toHaveCount(
      3
    );


    for (
      const heading
      of [
        "Test",
        "Learn",
        "Share"
      ]
    ) {
      await expect(
        flow.getByText(
          heading,
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
  "company capabilities render as four substantial cards",
  async ({
    page
  }) => {
    await page.goto(
      "/company"
    );


    await ready(
      page
    );


    const cards =
      page.locator(
        '[data-company-card="capability"]'
      );


    await expect(
      cards
    ).toHaveCount(
      4
    );


    const firstBox =
      await cards
        .first()
        .boundingBox();


    if (!firstBox) {
      throw new Error(
        "Capability card geometry unavailable"
      );
    }


    expect(
      firstBox.height
    ).toBeGreaterThan(
      250
    );
  }
);


test(
  "principles render as exactly three visual cards",
  async ({
    page
  }) => {
    await page.goto(
      "/company"
    );


    await ready(
      page
    );


    const cards =
      page.locator(
        '[data-company-card="principle"]'
      );


    await expect(
      cards
    ).toHaveCount(
      3
    );


    for (
      const title
      of [
        "Think offensively",
        "Build through practice",
        "Share knowledge"
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


test(
  "ecosystem presents four visual destination cards",
  async ({
    page
  }) => {
    await page.goto(
      "/company"
    );


    await ready(
      page
    );


    await expect(
      page.locator(
        '[data-company-card="ecosystem"]'
      )
    ).toHaveCount(
      4
    );
  }
);


test(
  "timeline presents five compact milestone cards",
  async ({
    page
  }) => {
    await page.goto(
      "/company"
    );


    await ready(
      page
    );


    await expect(
      page.locator(
        '[data-company-card="timeline"]'
      )
    ).toHaveCount(
      5
    );
  }
);


test(
  "founder is presented as a visual profile card",
  async ({
    page
  }) => {
    await page.goto(
      "/company"
    );


    await ready(
      page
    );


    const founder =
      page.locator(
        '[data-company-card="founder"]'
      );


    await expect(
      founder
    ).toBeVisible();


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
        /\bowner\b/i
      )
    ).toHaveCount(
      0
    );
  }
);


test(
  "people area uses two destination cards",
  async ({
    page
  }) => {
    await page.goto(
      "/company"
    );


    await ready(
      page
    );


    await expect(
      page.locator(
        '[data-company-card="people"]'
      )
    ).toHaveCount(
      2
    );
  }
);


test(
  "company V4 remains overflow-free on mobile",
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
      "/company"
    );


    await ready(
      page
    );


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
