import {
  expect,
  test
} from "@playwright/test";


const targetRoute =
  "/insights/attack-surface-mapping-before-exploitation";


function articleClass(
  className: string
) {
  return (
    `[class*="article-module"][class*="${className}"]`
  );
}


test(
  "attack surface page uses its clean editorial shell",
  async ({
    page
  }) => {
    await page.goto(
      targetRoute
    );


    const shell =
      page.locator(
        '[data-insight-article="attack-surface-mapping-before-exploitation"]'
      );


    await expect(
      shell
    ).toBeVisible();


    const h1 =
      page.locator(
        "#main-content h1"
      ).first();


    await expect(
      h1
    ).toBeVisible();


    const title =
      (
        await h1.innerText()
      )
        .toLowerCase();


    expect(
      title
    ).toContain(
      "attack"
    );


    expect(
      title
    ).toContain(
      "surface"
    );


    await expect(
      shell.locator(
        '[data-ui="attack-surface-editorial-ambient"]'
      )
    ).toBeAttached();
  }
);


test(
  "editorial ambient visual stays decorative",
  async ({
    page
  }) => {
    await page.goto(
      targetRoute
    );


    const visual =
      page.locator(
        '[data-ui="attack-surface-editorial-ambient"]'
      );


    await expect(
      visual
    ).toHaveAttribute(
      "aria-hidden",
      "true"
    );


    await expect(
      visual.locator(
        "a, button, input, select, textarea"
      )
    ).toHaveCount(
      0
    );
  }
);


test(
  "desktop layout uses a genuine readable research column",
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
      targetRoute
    );


    const shell =
      page.locator(
        '[data-insight-article="attack-surface-mapping-before-exploitation"]'
      );


    const layout =
      shell.locator(
        articleClass(
          "layout"
        )
      ).first();


    const content =
      shell.locator(
        articleClass(
          "content"
        )
      ).first();


    const toc =
      shell.locator(
        articleClass(
          "toc"
        )
      ).first();


    const meta =
      shell.locator(
        articleClass(
          "metaSide"
        )
      ).first();


    await expect(
      layout
    ).toBeVisible();


    await expect(
      content
    ).toBeVisible();


    await expect(
      toc
    ).toBeVisible();


    await expect(
      meta
    ).toBeVisible();


    const contentBox =
      await content.boundingBox();


    if (!contentBox) {
      throw new Error(
        "Content bounding box unavailable"
      );
    }


    expect(
      contentBox.width
    ).toBeGreaterThanOrEqual(
      600
    );


    expect(
      contentBox.width
    ).toBeLessThanOrEqual(
      780
    );


    const paragraphs =
      content.locator(
        articleClass(
          "paragraph"
        )
      );


    expect(
      await paragraphs.count()
    ).toBeGreaterThanOrEqual(
      3
    );


    const widths =
      await paragraphs.evaluateAll(
        (
          elements
        ) =>
          elements
            .filter(
              (
                element
              ) =>
                (
                  element.textContent
                    ?.trim()
                    .length ??
                  0
                )
                >=
                60
            )
            .map(
              (
                element
              ) =>
                element
                  .getBoundingClientRect()
                  .width
            )
      );


    expect(
      widths.length
    ).toBeGreaterThanOrEqual(
      2
    );


    expect(
      Math.max(
        ...widths
      )
    ).toBeGreaterThanOrEqual(
      580
    );


    expect(
      Math.max(
        ...widths
      )
    ).toBeLessThanOrEqual(
      740
    );


    const overflow =
      await page.evaluate(
        () => ({
          scroll:
            document
              .documentElement
              .scrollWidth,

          client:
            document
              .documentElement
              .clientWidth
        })
      );


    expect(
      overflow.scroll
    ).toBeLessThanOrEqual(
      overflow.client +
      1
    );
  }
);


test(
  "article contains the expected editorial structure",
  async ({
    page
  }) => {
    await page.goto(
      targetRoute
    );


    const shell =
      page.locator(
        '[data-insight-article="attack-surface-mapping-before-exploitation"]'
      );


    await expect(
      shell.locator(
        articleClass(
          "intro"
        )
      ).first()
    ).toBeVisible();


    expect(
      await shell
        .locator(
          articleClass(
            "section"
          )
        )
        .count()
    ).toBeGreaterThanOrEqual(
      2
    );


    expect(
      await shell
        .locator(
          articleClass(
            "sectionTitle"
          )
        )
        .count()
    ).toBeGreaterThanOrEqual(
      2
    );


    expect(
      (
        await shell.innerText()
      ).length
    ).toBeGreaterThan(
      700
    );
  }
);


test(
  "mobile reading layout remains clear and overflow free",
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
      targetRoute
    );


    const shell =
      page.locator(
        '[data-insight-article="attack-surface-mapping-before-exploitation"]'
      );


    const content =
      shell.locator(
        articleClass(
          "content"
        )
      ).first();


    await expect(
      content
    ).toBeVisible();


    const contentBox =
      await content.boundingBox();


    if (!contentBox) {
      throw new Error(
        "Mobile content bounding box unavailable"
      );
    }


    expect(
      contentBox.width
    ).toBeGreaterThan(
      300
    );


    expect(
      contentBox.width
    ).toBeLessThanOrEqual(
      390
    );


    const h1 =
      page.locator(
        "#main-content h1"
      ).first();


    await expect(
      h1
    ).toBeVisible();


    const fontSize =
      await h1.evaluate(
        (
          node
        ) =>
          Number.parseFloat(
            getComputedStyle(
              node
            ).fontSize
          )
      );


    expect(
      fontSize
    ).toBeLessThanOrEqual(
      64
    );


    const overflow =
      await page.evaluate(
        () => ({
          scroll:
            document
              .documentElement
              .scrollWidth,

          client:
            document
              .documentElement
              .clientWidth
        })
      );


    expect(
      overflow.scroll
    ).toBeLessThanOrEqual(
      overflow.client +
      1
    );
  }
);


test(
  "other insight articles do not receive the attack-surface visual",
  async ({
    page
  }) => {
    const routes = [
      "/insights/authorization-is-a-system-not-a-checkbox",
      "/insights/prompt-injection-matters-when-ai-can-act",
      "/insights/manual-reasoning-in-web-security-testing"
    ];


    for (
      const route
      of routes
    ) {
      await page.goto(
        route
      );


      const slug =
        route
          .split(
            "/"
          )
          .at(
            -1
          );


      if (!slug) {
        throw new Error(
          "Insight slug unavailable"
        );
      }


      const shell =
        page.locator(
          `[data-insight-article="${slug}"]`
        );


      await expect(
        shell
      ).toBeVisible();


      await expect(
        shell.locator(
          '[data-ui="attack-surface-editorial-ambient"]'
        )
      ).toHaveCount(
        0
      );
    }
  }
);
