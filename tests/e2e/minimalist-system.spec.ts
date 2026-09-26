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
  "/services/api-security",
  "/training",
  "/training/red-team-foundations",
  "/cr4ckout",
  "/activities",
  "/events",
  "/insights",
  "/insights/authorization-is-a-system-not-a-checkbox",
  "/careers",
  "/contact",
  "/security",
  "/privacy",
  "/legal"
] as const;

test(
  "core routes keep restrained typography and no horizontal overflow",
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
                "H1 missing"
              );
            }

            const style =
              window.getComputedStyle(
                h1
              );

            return {
              fontSize:
                Number.parseFloat(
                  style.fontSize
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
        82
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
  "representative pages remain clean on mobile",
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
        "/company/founder",
        "/company/internships",
        "/services",
        "/training",
        "/activities",
        "/insights",
        "/contact"
      ]
    ) {
      await page.goto(
        route
      );

      await expect(
        page.locator(
          "#main-content h1"
        ).first()
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
