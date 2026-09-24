import {
  expect,
  test
} from "@playwright/test";


const route =
  "/training";


const programRoutes = [
  "/training/red-team-foundations",
  "/training/web-exploitation-techniques",
  "/training/ai-security-foundations"
] as const;


test(
  "Academy renders the canonical continuous landing page",
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
      route
    );


    const root =
      page.locator(
        '[data-training-academy="continuous-v1"]'
      );


    await expect(
      root
    ).toBeVisible();


    await expect(
      root.locator(
        ":scope > section[data-training-section]"
      )
    ).toHaveCount(
      8
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            /learn cybersecurity by doing cybersecurity/i
        }
      )
    ).toHaveCount(
      1
    );

  }
);


test(
  "Academy does not create a second navbar",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    await expect(
      page.locator(
        '[data-training-academy="continuous-v1"] nav'
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "Academy exposes all three canonical public programs",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    for (
      const href
      of programRoutes
    ) {

      await expect(
        page.locator(
          `a[href="${href}"]`
        ).first()
      ).toBeVisible();

    }


    await expect(
      page.locator(
        "[data-training-program]"
      )
    ).toHaveCount(
      3
    );

  }
);


test(
  "Academy exposes valid public program statuses",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const cards =
      page.locator(
        "[data-training-program]"
      );


    const count =
      await cards.count();


    expect(
      count
    ).toBe(
      3
    );


    for (
      let index = 0;
      index < count;
      index += 1
    ) {

      const status =
        cards
          .nth(
            index
          )
          .locator(
            "[data-status]"
          );


      await expect(
        status
      ).toBeVisible();


      const value =
        await status.getAttribute(
          "data-status"
        );


      expect([
        "available",
        "upcoming",
        "archived"
      ]).toContain(
        value
      );

    }

  }
);


test(
  "Academy uses editorial learning paths rather than another site menu",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const paths =
      page.locator(
        '[data-training-section="paths"]'
      );


    await expect(
      paths
    ).toBeVisible();


    await expect(
      paths.getByRole(
        "link"
      )
    ).toHaveCount(
      3
    );


    await expect(
      paths.locator(
        "nav"
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "Academy presents asymmetric hands-on practice",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const practice =
      page.locator(
        '[data-training-section="practice"]'
      );


    await expect(
      practice
    ).toBeVisible();


    await expect(
      practice.getByText(
        "FEATURED PRACTICE"
      )
    ).toBeVisible();


    await expect(
      practice.locator(
        "ol li"
      ).first()
    ).toBeVisible();

  }
);


test(
  "Academy presents learning method and canonical outcomes",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const method =
      page.locator(
        '[data-training-section="method"]'
      );


    await expect(
      method.locator(
        "ol > li"
      )
    ).toHaveCount(
      4
    );


    const outcomes =
      page.locator(
        '[data-training-section="outcomes"]'
      );


    await expect(
      outcomes.locator(
        "article"
      )
    ).toHaveCount(
      3
    );

  }
);


test(
  "Academy FAQ stays quiet and accessible",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const faq =
      page.locator(
        '[data-training-section="faq"]'
      );


    await expect(
      faq.locator(
        "details"
      )
    ).toHaveCount(
      4
    );


    const first =
      faq.locator(
        "details"
      ).first();


    await first.locator(
      "summary"
    ).click();


    await expect(
      first.locator(
        "p"
      )
    ).toBeVisible();

  }
);


test(
  "Academy CTA is the final page section",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const sections =
      page.locator(
        '[data-training-academy="continuous-v1"] > section[data-training-section]'
      );


    await expect(
      sections.last()
    ).toHaveAttribute(
      "data-training-section",
      "cta"
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
        "compact",

      width:
        1180,

      height:
        820
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
    `Academy remains contained at ${viewport.name}`,
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
        route
      );


      await expect(
        page.getByRole(
          "heading",
          {
            level:
              1,

            name:
              /learn cybersecurity by doing cybersecurity/i
          }
        )
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
