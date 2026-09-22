import {
  expect,
  test
} from "@playwright/test";


async function founderReady(
  page:
    import("@playwright/test").Page
) {
  const founder =
    page.locator(
      '[data-founder-page="v2"]'
    );


  await expect(
    founder
  ).toBeVisible();


  await expect(
    page.getByRole(
      "heading",
      {
        level:
          1,

        name:
          "Nouha Ben Brahim"
      }
    )
  ).toBeVisible();


  return founder;
}


test(
  "founder V2 renders the complete profile experience",
  async ({
    page
  }) => {
    await page.goto(
      "/company/founder"
    );


    const founder =
      await founderReady(
        page
      );


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
        founder.locator(
          `[data-founder-section="${section}"]`
        )
      ).toBeVisible();
    }
  }
);


test(
  "hero balances founder identity with visual portrait card",
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
      "/company/founder"
    );


    await founderReady(
      page
    );


    const copy =
      page.locator(
        '[data-founder-ui="hero-copy"]'
      );


    const portrait =
      page.locator(
        '[data-founder-ui="portrait-card"]'
      );


    await expect(
      copy
    ).toBeVisible();


    await expect(
      portrait
    ).toBeVisible();


    const copyBox =
      await copy.boundingBox();

    const portraitBox =
      await portrait.boundingBox();


    if (
      !copyBox
      ||
      !portraitBox
    ) {
      throw new Error(
        "Founder hero geometry unavailable"
      );
    }


    expect(
      copyBox.x
    ).toBeLessThan(
      portraitBox.x
    );


    expect(
      portraitBox.width
    ).toBeGreaterThan(
      340
    );


    expect(
      portraitBox.height
    ).toBeGreaterThan(
      430
    );
  }
);


test(
  "journey renders five visual stages",
  async ({
    page
  }) => {
    await page.goto(
      "/company/founder"
    );


    await founderReady(
      page
    );


    const journeySection =
      page.locator(
        '[data-founder-section="journey"]'
      );


    await expect(
      journeySection
    ).toBeVisible();


    const journey =
      journeySection.locator(
        '[data-founder-card="journey"]'
      );


    await expect(
      journey
    ).toHaveCount(
      5
    );


    for (
      const title
      of [
        "Development",
        "Cybersecurity",
        "Bug bounty / security research",
        "Offensive security",
        "No Breach"
      ]
    ) {
      await expect(
        journeySection.getByRole(
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
  "expertise renders four visual cards",
  async ({
    page
  }) => {
    await page.goto(
      "/company/founder"
    );


    await founderReady(
      page
    );


    await expect(
      page.locator(
        '[data-founder-card="expertise"]'
      )
    ).toHaveCount(
      4
    );
  }
);


test(
  "education section uses a substantial visual split card",
  async ({
    page
  }) => {
    await page.goto(
      "/company/founder"
    );


    await founderReady(
      page
    );


    const card =
      page.locator(
        '[data-founder-card="education"]'
      );


    await expect(
      card
    ).toBeVisible();


    await expect(
      card.getByRole(
        "heading",
        {
          name:
            /learn security by doing security/i
        }
      )
    ).toBeVisible();
  }
);


test(
  "public work uses three destination cards",
  async ({
    page
  }) => {
    await page.goto(
      "/company/founder"
    );


    await founderReady(
      page
    );


    await expect(
      page.locator(
        '[data-founder-card="public"]'
      )
    ).toHaveCount(
      3
    );


    for (
      const href
      of [
        "/activities",
        "/insights",
        "/cr4ckout"
      ]
    ) {
      await expect(
        page.locator(
          `a[href="${href}"]`
        ).first()
      ).toBeVisible();
    }
  }
);


test(
  "founder V2 contains no owner or CEO claim",
  async ({
    page
  }) => {
    await page.goto(
      "/company/founder"
    );


    const founder =
      await founderReady(
        page
      );


    await expect(
      founder.getByText(
        /\bowner\b/i
      )
    ).toHaveCount(
      0
    );


    await expect(
      founder.getByText(
        /\bCEO\b/
      )
    ).toHaveCount(
      0
    );
  }
);


test(
  "founder V2 remains overflow-free on mobile",
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
      "/company/founder"
    );


    await founderReady(
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
