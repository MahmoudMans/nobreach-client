import {
  expect,
  test
} from "@playwright/test";


const ROUTE =
  "/activities/cr4ckout-2";


test(
  "CR4CKOUT 2 renders the audit-led V56 activity architecture",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const article =
      page.locator(
        '[data-cr4ckout-2-design="v48"]'
      );


    await expect(
      article
    ).toHaveCount(
      1
    );


    await expect(
      article
    ).toHaveAttribute(
      "data-cr4ckout-2-audit-redesign",
      "v56"
    );


    await expect(
      article.getByRole(
        "heading",
        {
          level: 1,
          name: "CR4CKOUT 2.0"
        }
      )
    ).toHaveCount(
      1
    );

  }
);


test(
  "CR4CKOUT 2 keeps one breadcrumb and its edition identity",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    await expect(
      page.getByRole(
        "navigation",
        {
          name: "Breadcrumb"
        }
      )
    ).toHaveCount(
      1
    );


    await expect(
      page.getByLabel(
        "CR4CKOUT edition 02 activity signal"
      )
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
        page.getByText(
          label,
          {
            exact: true
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "CR4CKOUT 2 visually consolidates the repeated middle narrative",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const participation =
      page.locator(
        '[data-cr4ckout-2-consolidated-section="participation"]'
      );


    await expect(
      participation
    ).toHaveCount(
      1
    );


    await expect(
      participation.getByRole(
        "heading",
        {
          level: 2,
          name:
            "Security practice, education and community in one format."
        }
      )
    ).toBeVisible();


    await expect(
      participation.locator(
        '[data-cr4ckout-2-section="narrative"]'
      )
    ).toHaveCount(
      2
    );


    await expect(
      participation.getByRole(
        "heading",
        {
          level: 3,
          name:
            "Designed for participation"
        }
      )
    ).toBeVisible();


    await expect(
      participation.getByRole(
        "heading",
        {
          level: 3,
          name:
            "Community around practice"
        }
      )
    ).toBeVisible();

  }
);


test(
  "CR4CKOUT 2 uses one consolidated related-record ending",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const related =
      page.locator(
        '[data-cr4ckout-2-consolidated-section="related-records"]'
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
            "Continue from CR4CKOUT 2.0."
        }
      )
    ).toBeVisible();


    await expect(
      related.getByRole(
        "link",
        {
          name:
            /View event record/
        }
      )
    ).toHaveAttribute(
      "href",
      "/events/cr4ckout-2-0"
    );


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
            /All activities/
        }
      )
    ).toHaveAttribute(
      "href",
      "/activities"
    );


    await expect(
      related.getByRole(
        "link",
        {
          name:
            /^Events/
        }
      )
    ).toHaveAttribute(
      "href",
      "/events"
    );

  }
);


test(
  "CR4CKOUT 2 keeps the legacy V48 section contract without visual duplication",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const sequence =
      await page
        .locator(
          "[data-cr4ckout-2-section]"
        )
        .evaluateAll(
          nodes =>
            nodes.map(
              node =>
                node.getAttribute(
                  "data-cr4ckout-2-section"
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
      "narrative",
      "context",
      "final-cta"
    ]);


    await expect(
      page.getByText(
        "The published CR4CKOUT 2 activity record.",
        {
          exact: true
        }
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.getByText(
        "Continue through the CR4CKOUT record.",
        {
          exact: true
        }
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.getByText(
        "Explore more published No Breach activity.",
        {
          exact: true
        }
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "CR4CKOUT 2 avoids oversized empty content sections on desktop",
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


    const sections = [
      '[data-cr4ckout-2-section="overview"]',
      '[data-cr4ckout-2-consolidated-section="participation"]',
      '[data-cr4ckout-2-consolidated-section="related-records"]'
    ];


    for (
      const selector
      of sections
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
  "CR4CKOUT 2 remains horizontally contained across representative widths",
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


test(
  "CR4CKOUT 2 mobile layout keeps essential actions available",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width: 390,
      height: 844
    });


    await page.goto(
      ROUTE
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level: 1,
          name:
            "CR4CKOUT 2.0"
        }
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "link",
        {
          name:
            /View event record/
        }
      ).first()
    ).toBeVisible();


    await expect(
      page.getByRole(
        "link",
        {
          name:
            /Back to activities/
        }
      )
    ).toBeVisible();

  }
);
