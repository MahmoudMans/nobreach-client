import {
  expect,
  test
} from "@playwright/test";


const ROUTE =
  "/activities/cr4ckout-launched";


test(
  "CR4CKOUT launched renders the V64 architecture",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const article =
      page.locator(
        '[data-cr4ckout-launched-design="v47"]'
      );


    await expect(
      article
    ).toHaveCount(
      1
    );


    await expect(
      article
    ).toHaveAttribute(
      "data-cr4ckout-launched-audit-redesign",
      "v64"
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level: 1,
          name:
            "CR4CKOUT launched"
        }
      )
    ).toHaveCount(
      1
    );

  }
);


test(
  "CR4CKOUT launched preserves its activity signal",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const signal =
      page.getByLabel(
        "CR4CKOUT activity signal"
      );


    await expect(
      signal
    ).toBeVisible();


    for (
      const label
      of [
        "HACK",
        "LEARN",
        "BREAK",
        "BUILD"
      ]
    ) {

      await expect(
        signal.getByText(
          label,
          {
            exact: true
          }
        )
      ).toBeVisible();

    }


    await expect(
      signal.getByText(
        "LAUNCHED",
        {
          exact: true
        }
      )
    ).toBeVisible();

  }
);


test(
  "CR4CKOUT launched has one compact Community Model",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const community =
      page.locator(
        '[data-cr4ckout-launched-consolidated-section="community-model"]'
      );


    await expect(
      community
    ).toHaveCount(
      1
    );


    await expect(
      community.getByRole(
        "heading",
        {
          level: 2,
          name:
            "Security knowledge grows through shared practice."
        }
      )
    ).toBeVisible();


    await expect(
      community.getByRole(
        "heading",
        {
          level: 3,
          name:
            "Community as part of the security ecosystem"
        }
      )
    ).toBeVisible();


    await expect(
      community.locator(
        '[data-cr4ckout-activity-section="narrative"]'
      )
    ).toHaveCount(
      1
    );

  }
);


test(
  "CR4CKOUT launched uses one related-record ending",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const related =
      page.locator(
        '[data-cr4ckout-launched-consolidated-section="related-records"]'
      );


    await expect(
      related
    ).toHaveCount(
      1
    );


    await expect(
      related.getByRole(
        "heading",
        {
          level: 2,
          name:
            "Continue with CR4CKOUT."
        }
      )
    ).toBeVisible();


    await expect(
      related.getByRole(
        "link",
        {
          name:
            /Explore CR4CKOUT/
        }
      )
    ).toHaveAttribute(
      "href",
      "/cr4ckout"
    );


    await expect(
      related.getByRole(
        "link",
        {
          name:
            /^Events/
        }
      ).last()
    ).toHaveAttribute(
      "href",
      "/events"
    );


    await expect(
      related.getByRole(
        "link",
        {
          name:
            /Activity archive/
        }
      )
    ).toHaveAttribute(
      "href",
      "/activities"
    );

  }
);


test(
  "V47 runtime marker sequence remains compatible",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const sequence =
      await page
        .locator(
          "[data-cr4ckout-activity-section]"
        )
        .evaluateAll(
          nodes =>
            nodes.map(
              node =>
                node.getAttribute(
                  "data-cr4ckout-activity-section"
                )
            )
        );


    expect(
      sequence
    ).toEqual([
      "intro",
      "facts",
      "overview",
      "narrative",
      "context",
      "final-cta"
    ]);

  }
);


test(
  "legacy restarted headings no longer render",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    for (
      const text
      of [
        "The published CR4CKOUT launch record.",
        "Continue into the CR4CKOUT ecosystem.",
        "Explore more published No Breach activity."
      ]
    ) {

      await expect(
        page.getByText(
          text,
          {
            exact: true
          }
        )
      ).toHaveCount(
        0
      );

    }

  }
);


test(
  "post-hero sections stay content-driven on desktop",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width: 1440,
      height: 900
    });


    await page.goto(
      ROUTE
    );


    for (
      const selector
      of [
        '[data-cr4ckout-activity-section="overview"]',
        '[data-cr4ckout-launched-consolidated-section="community-model"]',
        '[data-cr4ckout-launched-consolidated-section="related-records"]'
      ]
    ) {

      const height =
        await page
          .locator(
            selector
          )
          .evaluate(
            element =>
              element.getBoundingClientRect().height
          );


      expect(
        height
      ).toBeLessThan(
        720
      );

    }

  }
);


test(
  "CR4CKOUT launched remains contained at representative widths",
  async ({
    page
  }) => {

    const viewports = [
      {
        width: 1440,
        height: 900
      },
      {
        width: 1024,
        height: 768
      },
      {
        width: 768,
        height: 900
      },
      {
        width: 390,
        height: 844
      },
      {
        width: 320,
        height: 760
      }
    ];


    for (
      const viewport
      of viewports
    ) {

      await page.setViewportSize(
        viewport
      );


      await page.goto(
        ROUTE
      );


      const overflow =
        await page.evaluate(
          () =>
            document.documentElement.scrollWidth
            -
            document.documentElement.clientWidth
        );


      expect(
        overflow
      ).toBeLessThanOrEqual(
        1
      );

    }

  }
);
