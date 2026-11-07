import {
  expect,
  test
} from "@playwright/test";


const ROUTE =
  "/insights";


test(
  "Insights renders the V76 editorial research library",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const root =
      page.locator(
        '[data-insights-index="resource-system"]'
      );


    await expect(
      root
    ).toHaveAttribute(
      "data-insights-index-redesign",
      "v76"
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level: 1,
          name:
            "Security thinking worth publishing."
        }
      )
    ).toHaveCount(
      1
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level: 2,
          name:
            "Published technical research."
        }
      )
    ).toBeVisible();

  }
);


test(
  "Insights has no standalone source punctuation text nodes",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const stray =
      await page
        .locator(
          '[data-insights-index-section="resources"]'
        )
        .evaluate(
          root => {

            const walker =
              document.createTreeWalker(
                root,
                NodeFilter.SHOW_TEXT
              );


            const found:
              string[] = [];


            let node =
              walker.nextNode();


            while (
              node
            ) {

              const value =
                node.textContent
                  ?.trim();


              if (
                value
                ===
                "("
                ||
                value
                ===
                ")"
              ) {

                found.push(
                  value
                );

              }


              node =
                walker.nextNode();

            }


            return found;

          }
        );


    expect(
      stray
    ).toEqual(
      []
    );

  }
);


test(
  "Insights keeps accessible search and category controls",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    await expect(
      page.getByRole(
        "searchbox",
        {
          name:
            "Search insights"
        }
      )
    ).toBeVisible();


    const all =
      page.getByRole(
        "button",
        {
          name:
            "all"
        }
      );


    await expect(
      all
    ).toHaveAttribute(
      "aria-pressed",
      "true"
    );


    for (
      const category
      of [
        "Web Security",
        "API Security",
        "Offensive Security",
        "AI Security",
        "Research",
        "Community"
      ]
    ) {

      await expect(
        page.getByRole(
          "button",
          {
            name:
              category
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "category deep link still initializes the selected filter",
  async ({
    page
  }) => {

    await page.goto(
      "/insights?category=AI%20Security"
    );


    await expect(
      page.getByRole(
        "button",
        {
          name:
            "AI Security"
        }
      )
    ).toHaveAttribute(
      "aria-pressed",
      "true"
    );


    await expect(
      page.getByRole(
        "link",
        {
          name:
            "Prompt injection matters most when AI can act"
        }
      )
    ).toBeVisible();

  }
);


test(
  "search updates result count and article visibility",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    await page
      .getByRole(
        "searchbox",
        {
          name:
            "Search insights"
        }
      )
      .fill(
        "prompt injection"
      );


    await expect(
      page.getByText(
        "1 article",
        {
          exact: true
        }
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "link",
        {
          name:
            "Prompt injection matters most when AI can act"
        }
      )
    ).toBeVisible();

  }
);


test(
  "zero-result state explains the state and can recover",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    await page
      .getByRole(
        "searchbox",
        {
          name:
            "Search insights"
        }
      )
      .fill(
        "definitely-no-published-insight-matches-this"
      );


    await expect(
      page.locator(
        "[data-insights-empty]"
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "button",
        {
          name:
            "Clear filters"
        }
      )
    ).toBeVisible();


    await page
      .getByRole(
        "button",
        {
          name:
            "Clear filters"
        }
      )
      .click();


    await expect(
      page.getByText(
        "4 articles",
        {
          exact: true
        }
      )
    ).toBeVisible();

  }
);


test(
  "featured research uses both columns for real content",
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


    const card =
      page.locator(
        '[data-insight-featured="true"]'
      );


    const identity =
      card.locator(
        '[data-insight-featured-part="identity"]'
      );


    const body =
      card.locator(
        '[data-insight-featured-part="body"]'
      );


    const [
      cardBox,
      identityBox,
      bodyBox
    ] =
      await Promise.all([
        card.boundingBox(),
        identity.boundingBox(),
        body.boundingBox()
      ]);


    expect(
      cardBox
    ).not.toBeNull();

    expect(
      identityBox
    ).not.toBeNull();

    expect(
      bodyBox
    ).not.toBeNull();


    if (
      !cardBox
      ||
      !identityBox
      ||
      !bodyBox
    ) {

      return;

    }


    expect(
      identityBox.width
      /
      cardBox.width
    ).toBeGreaterThan(
      0.4
    );


    expect(
      bodyBox.width
      /
      cardBox.width
    ).toBeGreaterThan(
      0.3
    );

  }
);


test(
  "all four published insight routes remain discoverable",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    for (
      const slug
      of [
        "authorization-is-a-system-not-a-checkbox",
        "attack-surface-mapping-before-exploitation",
        "prompt-injection-matters-when-ai-can-act",
        "manual-reasoning-in-web-security-testing"
      ]
    ) {

      await expect(
        page.locator(
          `a[href="/insights/${slug}"]`
        ).first()
      ).toBeVisible();

    }

  }
);


test(
  "Insights remains horizontally contained",
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
