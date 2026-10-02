import {
  expect,
  test
} from "@playwright/test";


const ROUTE =
  "/activities/training-hub-established";


test(
  "Training Hub activity renders the V59 audit-led architecture",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const article =
      page.locator(
        '[data-training-hub-activity-design="v46"]'
      );


    await expect(
      article
    ).toHaveCount(
      1
    );


    await expect(
      article
    ).toHaveAttribute(
      "data-training-hub-audit-redesign",
      "v59"
    );


    await expect(
      article.getByRole(
        "heading",
        {
          level: 1,
          name:
            "No Breach Training Hub"
        }
      )
    ).toHaveCount(
      1
    );

  }
);


test(
  "Training Hub retains one breadcrumb and its learning signal",
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
          name:
            "Breadcrumb"
        }
      )
    ).toHaveCount(
      1
    );


    const signal =
      page.getByLabel(
        "Training Hub activity signal"
      );


    await expect(
      signal
    ).toBeVisible();


    for (
      const label
      of [
        "LEARN",
        "PRACTICE",
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
        "ESTABLISHED",
        {
          exact: true
        }
      )
    ).toBeVisible();

  }
);


test(
  "Training Hub uses one consolidated Learning Model chapter",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const learning =
      page.locator(
        '[data-training-hub-consolidated-section="learning-model"]'
      );


    await expect(
      learning
    ).toHaveCount(
      1
    );


    await expect(
      learning.getByRole(
        "heading",
        {
          level: 2,
          name:
            "Education built around practice."
        }
      )
    ).toBeVisible();


    await expect(
      learning.locator(
        '[data-activity-detail-section="narrative"]'
      )
    ).toHaveCount(
      2
    );


    await expect(
      learning.getByRole(
        "heading",
        {
          level: 3,
          name:
            "A dedicated education layer"
        }
      )
    ).toBeVisible();


    await expect(
      learning.getByRole(
        "heading",
        {
          level: 3,
          name:
            "Practice as the learning model"
        }
      )
    ).toBeVisible();

  }
);


test(
  "Training Hub uses one compact Continue Learning ending",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const ending =
      page.locator(
        '[data-training-hub-consolidated-section="continue-learning"]'
      );


    await expect(
      ending
    ).toHaveCount(
      1
    );


    await expect(
      ending.getByRole(
        "heading",
        {
          level: 2,
          name:
            "Continue with the current Training Hub."
        }
      )
    ).toBeVisible();


    await expect(
      ending.getByRole(
        "link",
        {
          name:
            /Explore Training Hub/
        }
      )
    ).toHaveAttribute(
      "href",
      "/training"
    );


    await expect(
      ending.getByRole(
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

  }
);


test(
  "Training Hub preserves the V46 section marker sequence",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const sequence =
      await page
        .locator(
          "[data-activity-detail-section]"
        )
        .evaluateAll(
          nodes =>
            nodes.map(
              node =>
                node.getAttribute(
                  "data-activity-detail-section"
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

  }
);


test(
  "Training Hub removes the previous restarted ending copy",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    await expect(
      page.getByText(
        "The published Training Hub activity record.",
        {
          exact: true
        }
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.getByText(
        "Continue into the No Breach learning ecosystem.",
        {
          exact: true
        }
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.getByText(
        "Explore more published No Breach work.",
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
  "Training Hub sections stay content-driven on desktop",
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
        '[data-activity-detail-section="overview"]',
        '[data-training-hub-consolidated-section="learning-model"]',
        '[data-training-hub-consolidated-section="continue-learning"]'
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
  "Training Hub remains horizontally contained",
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
  "Training Hub keeps essential actions usable on mobile",
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
            "No Breach Training Hub"
        }
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "link",
        {
          name:
            /Explore current Training Hub/
        }
      )
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
