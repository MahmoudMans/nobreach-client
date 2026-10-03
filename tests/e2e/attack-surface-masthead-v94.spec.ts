import {
  expect,
  test
} from "@playwright/test";


const ROUTE =
  "/insights/attack-surface-mapping-before-exploitation";


test(
  "V94 composes the masthead as one compact editorial hierarchy",
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


    const geometry =
      await page.evaluate(
        () => {

          const intro =
            document.querySelector(
              '[data-insight-section="intro"]'
            );

          const workflow =
            document.querySelector(
              '[data-insight-section="surface-model"]'
            );

          const breadcrumb =
            intro?.querySelector(
              'nav[aria-label="Breadcrumb"]'
            );

          const topLine =
            breadcrumb?.parentElement
            ??
            null;

          const h1 =
            intro?.querySelector(
              "h1"
            );

          const kicker =
            h1?.previousElementSibling
            ??
            null;

          const lower =
            h1?.nextElementSibling
            ??
            null;


          if (
            !intro
            ||
            !workflow
            ||
            !topLine
            ||
            !kicker
            ||
            !h1
            ||
            !lower
          ) {

            return null;

          }


          const introRect =
            intro.getBoundingClientRect();

          const workflowRect =
            workflow.getBoundingClientRect();

          const topLineRect =
            topLine.getBoundingClientRect();

          const kickerRect =
            kicker.getBoundingClientRect();

          const h1Rect =
            h1.getBoundingClientRect();

          const lowerRect =
            lower.getBoundingClientRect();


          return {
            introHeight:
              introRect.height,

            workflowTop:
              workflowRect.top,

            topLineToKicker:
              kickerRect.top
              -
              topLineRect.bottom,

            kickerToTitle:
              h1Rect.top
              -
              kickerRect.bottom,

            titleToLower:
              lowerRect.top
              -
              h1Rect.bottom,

            titleFontSize:
              parseFloat(
                getComputedStyle(
                  h1
                ).fontSize
              )
          };

        }
      );


    expect(
      geometry
    ).not.toBeNull();


    if (
      !geometry
    ) {

      return;

    }


    /*
     * Masthead should no longer behave like a screen-sized cinematic panel.
     */

    expect(
      geometry.introHeight
    ).toBeLessThan(
      690
    );


    /*
     * Recon Workflow must materially enter the initial 900px viewport.
     */

    expect(
      geometry.workflowTop
    ).toBeLessThan(
      820
    );


    /*
     * Breadcrumb row -> identity group.
     */

    expect(
      geometry.topLineToKicker
    ).toBeGreaterThanOrEqual(
      24
    );

    expect(
      geometry.topLineToKicker
    ).toBeLessThanOrEqual(
      64
    );


    /*
     * Identity -> H1.
     */

    expect(
      geometry.kickerToTitle
    ).toBeGreaterThanOrEqual(
      12
    );

    expect(
      geometry.kickerToTitle
    ).toBeLessThanOrEqual(
      36
    );


    /*
     * H1 -> summary/meta band.
     */

    expect(
      geometry.titleToLower
    ).toBeGreaterThanOrEqual(
      24
    );

    expect(
      geometry.titleToLower
    ).toBeLessThanOrEqual(
      56
    );


    /*
     * Preserve title authority.
     */

    expect(
      geometry.titleFontSize
    ).toBeGreaterThan(
      60
    );

  }
);


test(
  "V94 preserves the accepted masthead information",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const intro =
      page.locator(
        '[data-insight-section="intro"]'
      );


    await expect(
      page.getByRole(
        "heading",
        {
          level: 1,
          name:
            "Attack-surface mapping before exploitation"
        }
      )
    ).toHaveCount(
      1
    );


    await expect(
      intro.getByText(
        "Why disciplined reconnaissance and system mapping often matter more than immediately searching for individual vulnerabilities."
      )
    ).toBeVisible();


    await expect(
      intro.getByText(
        "2026-09-18"
      )
    ).toBeVisible();


    await expect(
      intro.getByText(
        "6 min read"
      )
    ).toBeVisible();


    await expect(
      intro.getByText(
        "No Breach"
      )
    ).toBeVisible();

  }
);


test(
  "V94 remains contained on representative widths",
  async ({
    page
  }) => {

    for (
      const viewport
      of [
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
      ]
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
