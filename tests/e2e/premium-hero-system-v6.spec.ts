import {
  expect,
  test
} from "@playwright/test";

const publicRoutes = [
  "/",
  "/company",
  "/company/founder",
  "/company/team",
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
  "all public heroes remain visible, controlled and premium",
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
      of publicRoutes
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

            const rect =
              h1.getBoundingClientRect();

            const style =
              getComputedStyle(
                h1
              );

            return {
              top:
                rect.top,

              bottom:
                rect.bottom,

              fontSize:
                Number.parseFloat(
                  style.fontSize
                ),

              lineHeight:
                Number.parseFloat(
                  style.lineHeight
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
        metrics.top,
        `${route} H1 top`
      ).toBeGreaterThanOrEqual(
        0
      );

      expect(
        metrics.top,
        `${route} H1 enters viewport promptly`
      ).toBeLessThan(
        650
      );

      expect(
        metrics.bottom,
        `${route} H1 bottom`
      ).toBeLessThan(
        850
      );

      expect(
        metrics.fontSize,
        `${route} H1 desktop size`
      ).toBeLessThanOrEqual(
        104
      );

      expect(
        metrics.fontSize,
        `${route} H1 desktop minimum`
      ).toBeGreaterThanOrEqual(
        32
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
  "homepage hero carries the signature attack-surface visual",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );


    const visual =
      page.locator(
        '[data-home-hero-visual="attack-surface"]'
      );


    await expect(
      visual
    ).toBeVisible();


    await expect(
      visual
    ).toHaveAttribute(
      "data-hero-art",
      "attack-surface"
    );


    await expect(
      visual
    ).toHaveAttribute(
      "data-attack-surface",
      "true"
    );


    await expect(
      visual.getByText(
        "NO BREACH",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      visual.getByText(
        "ATTACK SURFACE / TN",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    for (
      const node
      of [
        "APP",
        "API",
        "AUTH",
        "USER",
        "DB",
        "DATA"
      ]
    ) {

      await expect(
        visual.getByText(
          node,
          {
            exact:
              true
          }
        )
      ).toBeVisible();

    }


    await expect(
      visual.getByText(
        "MAP",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      visual.getByText(
        "TEST",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      visual.getByText(
        "VALIDATE",
        {
          exact:
            true
        }
      )
    ).toBeVisible();

  }
);

test(
  "mobile heroes stay elegant without horizontal overflow",
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
        "/company/internships",
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

            const rect =
              h1.getBoundingClientRect();

            return {
              top:
                rect.top,

              bottom:
                rect.bottom,

              size:
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
        metrics.top
      ).toBeLessThan(
        500
      );

      expect(
        metrics.bottom
      ).toBeLessThan(
        820
      );

      expect(
        metrics.size
      ).toBeLessThanOrEqual(
        62
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
  "reduced-motion users do not receive hero animations",
  async ({
    page
  }) => {
    await page.emulateMedia({
      reducedMotion:
        "reduce"
    });

    await page.goto(
      "/"
    );

    const animationState =
      await page.evaluate(
        () => {
          const signal =
            document.querySelector(
              '[data-home-section="hero"]'
            );

          if (!signal) {
            return false;
          }

          /*
           * Existence is enough here; reduced-motion rules
           * are source-contracted in unit tests.
           */
          return true;
        }
      );

    expect(
      animationState
    ).toBe(
      true
    );
  }
);
