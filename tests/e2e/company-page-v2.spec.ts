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
      '[data-company-page="v3"]'
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
          /security, education and community/i
      }
    )
  ).toBeVisible();


  return company;
}


test(
  "company V3 renders the streamlined corporate experience",
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
  "hero uses an elegant content and identity split",
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


    const main =
      page.locator(
        '[data-company-ui="hero-main"]'
      );


    const identity =
      page.locator(
        '[data-company-ui="identity"]'
      );


    await expect(
      main
    ).toBeVisible();


    await expect(
      identity
    ).toBeVisible();


    const mainBox =
      await main.boundingBox();

    const identityBox =
      await identity.boundingBox();


    if (
      !mainBox
      ||
      !identityBox
    ) {
      throw new Error(
        "Company V3 hero geometry unavailable"
      );
    }


    expect(
      mainBox.x
    ).toBeLessThan(
      identityBox.x
    );


    expect(
      identityBox.width
    ).toBeGreaterThan(
      250
    );
  }
);


test(
  "company page no longer renders large technical diagrams",
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
        '[data-ui="company-system-map"]'
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.locator(
        '[data-ui="company-ecosystem-map"]'
      )
    ).toHaveCount(
      0
    );
  }
);


test(
  "company copy is intentionally compact",
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


    const text =
      (
        await company.innerText()
      )
        .trim();


    expect(
      text.length
    ).toBeGreaterThan(
      1200
    );


    expect(
      text.length
    ).toBeLessThan(
      4300
    );
  }
);


test(
  "company facts remain visible",
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
  "work section exposes four clean capability rows",
  async ({
    page
  }) => {
    await page.goto(
      "/company"
    );


    await ready(
      page
    );


    const work =
      page.locator(
        '[data-company-ui="work-list"]'
      );


    await expect(
      work.locator(
        "a"
      )
    ).toHaveCount(
      4
    );
  }
);


test(
  "principles remain exactly three",
  async ({
    page
  }) => {
    await page.goto(
      "/company"
    );


    await ready(
      page
    );


    const principles =
      page.locator(
        '[data-company-ui="principles"]'
      );


    await expect(
      principles.locator(
        "article"
      )
    ).toHaveCount(
      3
    );
  }
);


test(
  "timeline remains compact with five milestones",
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
        '[data-company-ui="timeline"] li'
      )
    ).toHaveCount(
      5
    );
  }
);


test(
  "company V3 stays overflow-free on mobile",
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
