import {
  expect,
  test
} from "@playwright/test";


test(
  "Company follows the audit-led six-section sequence",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );

    const root =
      page.locator(
        '[data-company-audit="v21"]'
      );

    await expect(
      root
    ).toBeVisible();

    const sections =
      root.locator(
        ":scope > section[data-company-section]"
      );

    await expect(
      sections
    ).toHaveCount(
      6
    );

    const expected = [
      "intro",
      "mission-vision",
      "timeline",
      "founder",
      "approach-expertise",
      "cta"
    ];

    for (
      let index = 0;
      index < expected.length;
      index += 1
    ) {

      await expect(
        sections.nth(
          index
        )
      ).toHaveAttribute(
        "data-company-section",
        expected[
          index
        ]
      );

    }

  }
);


test(
  "Company mission and vision are compact distinct groups",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );

    const section =
      page.locator(
        '[data-company-section="mission-vision"]'
      );

    await expect(
      section.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Mission and vision"
        }
      )
    ).toBeVisible();

    await expect(
      section.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "Turn offensive security into practical decisions."
        }
      )
    ).toBeVisible();

    await expect(
      section.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "Connect security practice, learning and knowledge-sharing."
        }
      )
    ).toBeVisible();

  }
);


test(
  "Company separates milestones from ongoing activity",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );

    const section =
      page.locator(
        '[data-company-section="timeline"]'
      );

    await expect(
      section.locator(
        '[data-company-milestone="true"]'
      )
    ).toHaveCount(
      3
    );

    await expect(
      section.locator(
        '[data-company-ongoing="true"]'
      )
    ).toHaveCount(
      2
    );

    await expect(
      section.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Selected milestones"
        }
      )
    ).toBeVisible();

    await expect(
      section.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "Ongoing activity"
        }
      )
    ).toBeVisible();

  }
);


test(
  "Company presents one deliberate founder feature",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );

    const founder =
      page.locator(
        '[data-company-section="founder"]'
      );

    await expect(
      founder.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Meet the founder"
        }
      )
    ).toBeVisible();

    await expect(
      founder.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "Nouha Ben Brahim"
        }
      )
    ).toBeVisible();

    await expect(
      founder.getByRole(
        "img",
        {
          name:
            /Nouha Ben Brahim/i
        }
      )
    ).toBeVisible();

    await expect(
      founder.getByRole(
        "link",
        {
          name:
            /Explore founder profile/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/company/founder"
    );

  }
);


test(
  "Company exposes three principles and four expertise destinations",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );

    const section =
      page.locator(
        '[data-company-section="approach-expertise"]'
      );

    await expect(
      section.locator(
        '[data-company-principle="true"]'
      )
    ).toHaveCount(
      3
    );

    await expect(
      section.locator(
        '[data-company-expertise="true"]'
      )
    ).toHaveCount(
      4
    );

    await expect(
      section.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "How we approach the work"
        }
      )
    ).toBeVisible();

    await expect(
      section.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "Areas of expertise"
        }
      )
    ).toBeVisible();

  }
);


test(
  "Company removes publishing-process language",
  async ({
    page
  }) => {

    await page.goto(
      "/company"
    );

    await expect(
      page.getByText(
        "Only established public milestones are shown.",
        {
          exact:
            true
        }
      )
    ).toHaveCount(
      0
    );

    await expect(
      page.getByText(
        "The preview uses only current published team profiles.",
        {
          exact:
            true
        }
      )
    ).toHaveCount(
      0
    );

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
    `Company V21 remains contained at ${viewport.name}`,
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
        "/company"
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
