import {
  expect,
  test
} from "@playwright/test";

const desktopRoutes = [
  "/company",
  "/company/team",

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

  "/careers",
  "/contact",

  "/security",
  "/privacy",
  "/legal"
] as const;

const mobileRoutes = [
  "/company",
  "/company/team",
  "/services",
  "/services/api-security",
  "/training",
  "/training/red-team-foundations",
  "/cr4ckout",
  "/activities",
  "/events",
  "/careers",
  "/contact",
  "/security"
] as const;

test(
  "remaining public pages use restrained professional hierarchy",
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
      of desktopRoutes
    ) {
      await page.goto(
        route
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
                "Expected page H1"
              );
            }

            const headingStyle =
              window.getComputedStyle(
                h1
              );

            const articles = [
              ...document.querySelectorAll(
                "#main-content article"
              )
            ].slice(
              0,
              8
            );

            const cardMetrics =
              articles.map(
                (
                  article
                ) => {
                  const style =
                    window.getComputedStyle(
                      article
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
              );

            return {
              fontSize:
                Number.parseFloat(
                  headingStyle.fontSize
                ),

              scrollWidth:
                document
                  .documentElement
                  .scrollWidth,

              clientWidth:
                document
                  .documentElement
                  .clientWidth,

              cardMetrics
            };
          }
        );

      expect(
        metrics.fontSize
      ).toBeLessThanOrEqual(
        82
      );

      expect(
        metrics.scrollWidth
      ).toBeLessThanOrEqual(
        metrics.clientWidth +
          1
      );

      for (
        const card
        of metrics.cardMetrics
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
  "remaining page families stay elegant and usable on mobile",
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
      of mobileRoutes
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
        metrics.scrollWidth
      ).toBeLessThanOrEqual(
        metrics.clientWidth +
          1
      );
    }
  }
);

test(
  "contact page keeps usable form controls",
  async ({
    page
  }) => {
    await page.goto(
      "/contact"
    );

    const interactive =
      page.locator(
        "#main-content input, #main-content textarea, #main-content select, #main-content button"
      );

    const count =
      await interactive.count();

    for (
      let index = 0;
      index < count;
      index += 1
    ) {
      const element =
        interactive.nth(
          index
        );

      if (
        await element.isVisible()
      ) {
        const box =
          await element.boundingBox();

        if (box) {
          expect(
            box.height
          ).toBeGreaterThanOrEqual(
            38
          );
        }
      }
    }
  }
);
