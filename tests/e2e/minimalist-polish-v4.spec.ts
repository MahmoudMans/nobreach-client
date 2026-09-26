import {
  expect,
  test
} from "@playwright/test";

const routes = [
  "/",
  "/company",
  "/company/founder",
  "/company/internships",
  "/services",
  "/services/web-application-pentesting",
  "/services/api-security",
  "/services/infrastructure-security",
  "/services/security-training",
  "/training",
  "/training/red-team-foundations",
  "/training/web-exploitation-techniques",
  "/training/ai-security-foundations",
  "/cr4ckout",
  "/activities",
  "/activities/red-team-foundations-2026",
  "/events",
  "/events/cr4ckout-2-0",
  "/insights",
  "/insights/authorization-is-a-system-not-a-checkbox",
  "/careers",
  "/contact",
  "/security",
  "/privacy",
  "/legal"
] as const;

test(
  "all public routes share premium restrained visual hierarchy",
  async ({
    page
  }) => {
    await page.setViewportSize({
      width:
        1440,

      height:
        900
    });

    for (
      const route
      of routes
    ) {
      await page.goto(
        route
      );

      const h1 =
        page.locator(
          "#main-content h1"
        ).first();

      await expect(
        h1
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
                "Missing primary heading"
              );
            }

            const h1Style =
              getComputedStyle(
                h1
              );

            const articles =
              Array.from(
                document.querySelectorAll(
                  "#main-content article"
                )
              ).slice(
                0,
                10
              );

            return {
              h1Size:
                Number.parseFloat(
                  h1Style.fontSize
                ),

              scrollWidth:
                document
                  .documentElement
                  .scrollWidth,

              clientWidth:
                document
                  .documentElement
                  .clientWidth,

              cards:
                articles.map(
                  (
                    element
                  ) => {
                    const style =
                      getComputedStyle(
                        element
                      );

                    return {
                      radius:
                        Number.parseFloat(
                          style.borderRadius
                        ) || 0,

                      shadow:
                        style.boxShadow
                    };
                  }
                )
            };
          }
        );

      expect(
        metrics.h1Size
      ).toBeLessThanOrEqual(
        80
      );

      expect(
        metrics.scrollWidth
      ).toBeLessThanOrEqual(
        metrics.clientWidth +
          1
      );

      for (
        const card
        of metrics.cards
      ) {
        expect(
          card.radius
        ).toBeLessThanOrEqual(
          18
        );
      }
    }
  }
);

test(
  "site chrome remains compact",
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
      "/"
    );

    const chrome =
      await page.evaluate(
        () => {
          const header =
            document.querySelector(
              "header"
            );

          const footer =
            document.querySelector(
              "footer"
            );

          return {
            headerHeight:
              header
                ?.getBoundingClientRect()
                .height ??
              0,

            footerExists:
              Boolean(
                footer
              )
          };
        }
      );

    expect(
      chrome.headerHeight
    ).toBeGreaterThan(
      40
    );

    expect(
      chrome.headerHeight
    ).toBeLessThanOrEqual(
      90
    );

    expect(
      chrome.footerExists
    ).toBe(
      true
    );
  }
);

test(
  "mobile public routes retain controlled typography and width",
  async ({
    page
  }) => {
    await page.setViewportSize({
      width:
        390,

      height:
        844
    });

    for (
      const route
      of [
        "/",
        "/company",
        "/company/founder",
        "/services",
        "/services/api-security",
        "/training",
        "/training/red-team-foundations",
        "/cr4ckout",
        "/activities",
        "/events",
        "/insights",
        "/careers",
        "/contact"
      ]
    ) {
      await page.goto(
        route
      );

      const h1 =
        page.locator(
          "#main-content h1"
        ).first();

      await expect(
        h1
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
                "Missing mobile H1"
              );
            }

            return {
              fontSize:
                Number.parseFloat(
                  getComputedStyle(
                    h1
                  ).fontSize
                ),

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
        56
      );

      expect(
        metrics.scrollWidth
      ).toBeLessThanOrEqual(
        metrics.clientWidth +
          1
      );
    }
  }
);

test(
  "interactive controls retain professional minimum sizing",
  async ({
    page
  }) => {
    for (
      const route
      of [
        "/contact",
        "/activities",
        "/insights"
      ]
    ) {
      await page.goto(
        route
      );

      const controls =
        page.locator(
          "#main-content button, #main-content input, #main-content select, #main-content textarea"
        );

      const count =
        await controls.count();

      for (
        let index = 0;
        index < count;
        index += 1
      ) {
        const control =
          controls.nth(
            index
          );

        if (
          !(await control.isVisible())
        ) {
          continue;
        }

        const box =
          await control.boundingBox();

        if (!box) {
          continue;
        }

        expect(
          box.height
        ).toBeGreaterThanOrEqual(
          34
        );
      }
    }
  }
);
