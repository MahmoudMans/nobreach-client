import {
  expect,
  test
} from "@playwright/test";


const targetRoute =
  "/insights/attack-surface-mapping-before-exploitation";


test(
  "attack surface article receives its dedicated editorial presentation",
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


    /*
     * Validate the actual article heading semantically instead of
     * replacing the editorial title with a test-generated phrase.
     */

    const heading =
      page.locator(
        "#main-content h1"
      ).first();


    await expect(
      heading
    ).toBeVisible();


    const headingText =
      (
        await heading.innerText()
      )
        .trim()
        .toLowerCase();


    expect(
      headingText.length
    ).toBeGreaterThan(
      12
    );


    expect(
      headingText
    ).toContain(
      "attack"
    );


    expect(
      headingText
    ).toContain(
      "surface"
    );


    await expect(
      shell.locator(
        '[data-ui="attack-surface-topology"]'
      )
    ).toBeAttached();
  }
);


test(
  "attack surface topology stays decorative and accessible",
  async ({
    page
  }) => {
    await page.goto(
      targetRoute
    );

    const topology =
      page.locator(
        '[data-ui="attack-surface-topology"]'
      );

    await expect(
      topology
    ).toBeAttached();


    await expect(
      topology
    ).toHaveAttribute(
      "aria-hidden",
      "true"
    );


    await expect(
      topology.locator(
        "a, button, input, select, textarea"
      )
    ).toHaveCount(
      0
    );
  }
);


test(
  "article keeps a substantial readable information structure",
  async ({
    page
  }) => {
    await page.goto(
      targetRoute
    );

    const main =
      page.locator(
        "#main-content"
      );


    await expect(
      main
    ).toBeVisible();


    const text =
      (
        await main.innerText()
      ).trim();


    expect(
      text.length
    ).toBeGreaterThan(
      700
    );


    const h2Count =
      await main.locator(
        "h2:visible"
      ).count();


    expect(
      h2Count
    ).toBeGreaterThanOrEqual(
      2
    );


    const paragraphs =
      main.locator(
        "article p:visible"
      );


    expect(
      await paragraphs.count()
    ).toBeGreaterThanOrEqual(
      3
    );
  }
);


test(
  "article reading width remains controlled on desktop",
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


    const result =
      await page.evaluate(
        () => {
          const article =
            document.querySelector(
              "#main-content article"
            );


          if (!article) {
            throw new Error(
              "Article element missing"
            );
          }


          const rect =
            article.getBoundingClientRect();


          return {
            width:
              rect.width,

            scrollWidth:
              document
                .documentElement
                .scrollWidth,

            clientWidth:
              document
                .documentElement
                .clientWidth
          };
        }
      );


    expect(
      result.width
    ).toBeLessThanOrEqual(
      900
    );


    expect(
      result.scrollWidth
    ).toBeLessThanOrEqual(
      result.clientWidth +
        1
    );
  }
);


test(
  "article remains readable and overflow-free on mobile",
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


    const heading =
      page.locator(
        "#main-content h1"
      ).first();


    await expect(
      heading
    ).toBeVisible();


    const metrics =
      await page.evaluate(
        () => {
          const h1 =
            document.querySelector(
              "#main-content h1"
            );


          if (!h1) {
            throw new Error(
              "Missing article heading"
            );
          }


          const rect =
            h1.getBoundingClientRect();


          return {
            fontSize:
              Number.parseFloat(
                getComputedStyle(
                  h1
                ).fontSize
              ),

            h1Top:
              rect.top,

            h1Bottom:
              rect.bottom,

            scrollWidth:
              document
                .documentElement
                .scrollWidth,

            clientWidth:
              document
                .documentElement
                .clientWidth
          };
        }
      );


    expect(
      metrics.fontSize
    ).toBeLessThanOrEqual(
      64
    );


    expect(
      metrics.h1Top
    ).toBeLessThan(
      650
    );


    expect(
      metrics.h1Bottom
    ).toBeLessThan(
      840
    );


    expect(
      metrics.scrollWidth
    ).toBeLessThanOrEqual(
      metrics.clientWidth +
        1
    );
  }
);


test(
  "other insights retain the normal article treatment",
  async ({
    page
  }) => {
    for (
      const route
      of [
        "/insights/authorization-is-a-system-not-a-checkbox",
        "/insights/prompt-injection-matters-when-ai-can-act",
        "/insights/manual-reasoning-in-web-security-testing"
      ]
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
          "Insight slug missing"
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
          '[data-ui="attack-surface-topology"]'
        )
      ).toHaveCount(
        0
      );
    }
  }
);
