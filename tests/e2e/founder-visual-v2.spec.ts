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
      '[data-founder-page="v20"]'
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
  "Founder V20 renders the new editorial profile",
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
        '[data-company-content-section]'
      )
    ).toHaveCount(
      3
    );


    for (
      const name
      of [
        "journey",
        "expertise-education",
        "public-work"
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


test(
  "Founder V20 hero uses editorial portrait and identity split",
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


    const portrait =
      page.locator(
        '[data-founder-ui="portrait-editorial"]'
      );


    const copy =
      page.locator(
        '[data-founder-ui="hero-copy"]'
      );


    await expect(
      portrait
    ).toBeVisible();


    await expect(
      copy
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-founder-ui="portrait-card"]'
      )
    ).toHaveCount(
      0
    );


    const portraitBox =
      await portrait.boundingBox();


    const copyBox =
      await copy.boundingBox();


    if (
      !portraitBox
      ||
      !copyBox
    ) {

      throw new Error(
        "Founder V20 hero geometry unavailable"
      );

    }


    expect(
      portraitBox.x
    ).toBeLessThan(
      copyBox.x
    );


    expect(
      portraitBox.width
    ).toBeGreaterThan(
      320
    );


    expect(
      portraitBox.height
    ).toBeGreaterThan(
      400
    );

  }
);


test(
  "Founder V20 journey uses five editorial rows",
  async ({
    page
  }) => {

    await page.goto(
      "/company/founder"
    );


    const section =
      page.locator(
        '[data-founder-section="journey"]'
      );


    await section.scrollIntoViewIfNeeded();


    const rows =
      section.locator(
        '[data-founder-card="journey"]'
      );


    await expect(
      rows
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
        section.getByRole(
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
  "Founder V20 practice uses four expertise rows and one methodology",
  async ({
    page
  }) => {

    await page.goto(
      "/company/founder"
    );


    await expect(
      page.locator(
        '[data-founder-card="expertise"]'
      )
    ).toHaveCount(
      4
    );


    const method =
      page.locator(
        '[data-founder-ui="method"]'
      );


    await method.scrollIntoViewIfNeeded();


    await expect(
      method.getByRole(
        "heading",
        {
          name:
            "Learn security by doing security."
        }
      )
    ).toBeVisible();

  }
);


test(
  "Founder V20 public work uses three editorial destinations",
  async ({
    page
  }) => {

    await page.goto(
      "/company/founder"
    );


    const publicSection =
      page.locator(
        '[data-company-content-section="public-work"]'
      );


    await publicSection.scrollIntoViewIfNeeded();


    await expect(
      publicSection.locator(
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
        publicSection.locator(
          `a[href="${href}"]`
        )
      ).toBeVisible();

    }

  }
);


test(
  "Founder V20 contains no owner or CEO claim",
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
    `Founder V20 remains contained at ${viewport.name}`,
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
        metrics.clientWidth
        +
        1
      );

    }
  );

}
