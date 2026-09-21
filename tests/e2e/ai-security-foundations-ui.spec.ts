import {
  expect,
  test
} from "@playwright/test";


test(
  "AI Security Foundations uses its dedicated premium presentation",
  async ({
    page
  }) => {
    await page.goto(
      "/training/ai-security-foundations"
    );

    const shell =
      page.locator(
        '[data-training-program="ai-security-foundations"]'
      );

    await expect(
      shell
    ).toBeVisible();

    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            /ai security foundations/i
        }
      )
    ).toBeVisible();

    await expect(
      shell.locator(
        '[data-ui="ai-security-visual"]'
      )
    ).toBeAttached();
  }
);


test(
  "AI training content remains substantial and readable",
  async ({
    page
  }) => {
    await page.goto(
      "/training/ai-security-foundations"
    );

    const main =
      page.locator(
        "#main-content"
      );

    await expect(
      main
    ).toBeVisible();

    await expect(
      main.getByRole(
        "heading",
        {
          level:
            1,

          name:
            /ai security foundations/i
        }
      )
    ).toBeVisible();


    /*
     * Do not encode editorial wording such as "Audience".
     *
     * The underlying training template is data-driven and its
     * section labels may evolve independently of the visual layer.
     * What matters here is that the program retains a substantial
     * multi-section information architecture.
     */

    const visibleSections =
      main.locator(
        "section:visible"
      );

    const visibleSectionCount =
      await visibleSections.count();


    expect(
      visibleSectionCount
    ).toBeGreaterThanOrEqual(
      3
    );


    const visibleSecondaryHeadings =
      main.locator(
        "h2:visible"
      );

    const secondaryHeadingCount =
      await visibleSecondaryHeadings.count();


    expect(
      secondaryHeadingCount
    ).toBeGreaterThanOrEqual(
      3
    );


    /*
     * Ensure meaningful program content is actually present rather
     * than validating a shell containing only headings.
     */

    const mainText =
      (
        await main.innerText()
      ).trim();


    expect(
      mainText.length
    ).toBeGreaterThan(
      450
    );


    /*
     * The page should expose multiple structured information items:
     * curriculum/objectives/prerequisites/outcomes are represented
     * through lists, cards or metadata depending on program data.
     */

    const structuredItems =
      main.locator(
        "li:visible, article:visible, dt:visible"
      );

    expect(
      await structuredItems.count()
    ).toBeGreaterThanOrEqual(
      3
    );
  }
);


test(
  "AI training route remains compact and overflow-free on mobile",
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
      "/training/ai-security-foundations"
    );

    await expect(
      page.locator(
        "#main-content h1"
      )
    ).toBeVisible();

    const metrics =
      await page.evaluate(
        () => {
          const heading =
            document.querySelector(
              "#main-content h1"
            );

          if (!heading) {
            throw new Error(
              "Missing training heading"
            );
          }

          const headingRect =
            heading.getBoundingClientRect();

          return {
            h1Size:
              Number.parseFloat(
                getComputedStyle(
                  heading
                ).fontSize
              ),

            h1Top:
              headingRect.top,

            h1Bottom:
              headingRect.bottom,

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
      metrics.h1Size
    ).toBeLessThanOrEqual(
      64
    );

    expect(
      metrics.h1Top
    ).toBeLessThan(
      600
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
  "AI security visual remains decorative and non-interactive",
  async ({
    page
  }) => {
    await page.goto(
      "/training/ai-security-foundations"
    );

    const visual =
      page.locator(
        '[data-ui="ai-security-visual"]'
      );

    await expect(
      visual
    ).toBeAttached();

    await expect(
      visual
    ).toHaveAttribute(
      "aria-hidden",
      "true"
    );

    const interactiveChildren =
      visual.locator(
        "a, button, input, select, textarea"
      );

    await expect(
      interactiveChildren
    ).toHaveCount(
      0
    );
  }
);


test(
  "other training programs do not receive the AI-specific treatment",
  async ({
    page
  }) => {
    for (
      const route
      of [
        "/training/red-team-foundations",
        "/training/web-exploitation-techniques"
      ]
    ) {
      await page.goto(
        route
      );

      const slug =
        route.split(
          "/"
        ).at(
          -1
        );

      if (!slug) {
        throw new Error(
          "Training slug missing"
        );
      }

      const shell =
        page.locator(
          `[data-training-program="${slug}"]`
        );

      await expect(
        shell
      ).toBeVisible();

      await expect(
        shell.locator(
          '[data-ui="ai-security-visual"]'
        )
      ).toHaveCount(
        0
      );
    }
  }
);
