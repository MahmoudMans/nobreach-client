import {
  expect,
  test
} from "@playwright/test";


test(
  "Founder V21 preserves identity while simplifying the profile",
  async ({
    page
  }) => {

    await page.goto(
      "/company/founder"
    );

    const root =
      page.locator(
        '[data-founder-audit="v21"]'
      );

    await expect(
      root
    ).toBeVisible();

    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,
          name:
            /Nouha Ben Brahim/i
        }
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        "Founder of No Breach",
        {
          exact:
            true
        }
      ).first()
    ).toBeVisible();

    await expect(
      page.getByRole(
        "img",
        {
          name:
            "Portrait of Nouha Ben Brahim"
        }
      )
    ).toBeVisible();

  }
);


test(
  "Founder V21 public-work shortcut uses an in-page anchor",
  async ({
    page
  }) => {

    await page.goto(
      "/company/founder"
    );

    const link =
      page.getByRole(
        "link",
        {
          name:
            /View public work/i
        }
      );

    await expect(
      link
    ).toHaveAttribute(
      "href",
      "#public-work"
    );

    await link.click();

    await expect(
      page
    ).toHaveURL(
      /#public-work$/
    );

    await expect(
      page.locator(
        "#public-work"
      )
    ).toBeVisible();

  }
);


test(
  "Founder V21 background keeps five concise stages",
  async ({
    page
  }) => {

    await page.goto(
      "/company/founder"
    );

    const journey =
      page.locator(
        '[data-founder-ui="journey"]'
      );

    await expect(
      journey.locator(
        '[data-founder-card="journey"]'
      )
    ).toHaveCount(
      5
    );

    await expect(
      journey.getByText(
        "Bug bounty / security research",
        {
          exact:
            true
        }
      )
    ).toBeVisible();

  }
);


test(
  "Founder V21 keeps four equal teaching steps in order",
  async ({
    page
  }) => {

    await page.goto(
      "/company/founder"
    );

    const method =
      page.locator(
        '[data-founder-ui="method"]'
      );

    const steps =
      method.locator(
        "ol > li"
      );

    await expect(
      steps
    ).toHaveCount(
      4
    );

    const labels =
      await steps.locator(
        "strong"
      ).allTextContents();

    expect(
      labels
    ).toEqual([
      "Understand",
      "Build",
      "Test",
      "Explain"
    ]);

    const tops =
      await steps.evaluateAll(
        elements =>
          elements.map(
            element =>
              element
                .getBoundingClientRect()
                .top
          )
      );

    expect(
      Math.max(
        ...tops
      )
      -
      Math.min(
        ...tops
      )
    ).toBeLessThanOrEqual(
      2
    );

  }
);


test(
  "Founder V21 public engagements include contribution context",
  async ({
    page
  }) => {

    await page.goto(
      "/company/founder"
    );

    const engagements =
      page.locator(
        '[data-founder-engagement="true"]'
      );

    await expect(
      engagements
    ).toHaveCount(
      3
    );

    for (
      const text
      of
      [
        "Workshop trainer",
        "Cyber Trace / ESPITA",
        "OSINT mentor",
        "Securinets",
        "Podcast host"
      ]
    ) {

      await expect(
        page.getByText(
          text,
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
  "Founder V21 separates organizational destinations",
  async ({
    page
  }) => {

    await page.goto(
      "/company/founder"
    );

    await expect(
      page.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "More from No Breach"
        }
      )
    ).toBeVisible();

    const publicWork =
      page.locator(
        "#public-work"
      );

    for (
      const href
      of
      [
        "/activities",
        "/insights",
        "/cr4ckout"
      ]
    ) {

      await expect(
        publicWork.locator(
          `a[href="${href}"]`
        )
      ).toHaveCount(
        1
      );

    }

  }
);


for (
  const viewport
  of
  [
    {
      name:
        "320",
      width:
        320,
      height:
        800
    },
    {
      name:
        "390",
      width:
        390,
      height:
        844
    },
    {
      name:
        "768",
      width:
        768,
      height:
        1024
    },
    {
      name:
        "1024",
      width:
        1024,
      height:
        768
    },
    {
      name:
        "1440",
      width:
        1440,
      height:
        900
    }
  ]
) {

  test(
    `Founder V21 remains contained at ${viewport.name}`,
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

      const geometry =
        await page.evaluate(
          () => ({
            scroll:
              document.documentElement.scrollWidth,

            client:
              document.documentElement.clientWidth
          })
        );

      expect(
        geometry.scroll
      ).toBeLessThanOrEqual(
        geometry.client
        +
        1
      );

    }
  );

}
