import {
  expect,
  test
} from "@playwright/test";

const visualRoutes = [
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
  "/activities/ai-security-foundations-2026",
  "/activities/red-team-foundations-2026",
  "/activities/cr4ckout-2",
  "/activities/training-hub-established",
  "/activities/cr4ckout-launched",
  "/events",
  "/events/cr4ckout-2-0",
  "/insights",
  "/insights/authorization-is-a-system-not-a-checkbox",
  "/insights/attack-surface-mapping-before-exploitation",
  "/insights/prompt-injection-matters-when-ai-can-act",
  "/insights/manual-reasoning-in-web-security-testing",
  "/careers",
  "/contact",
  "/privacy",
  "/legal",
  "/security"
];

for (
  const route
  of visualRoutes
) {
  test(
    `route production audit: ${route}`,
    async ({
      page
    }) => {
      const consoleErrors:
        string[] = [];

      page.on(
        "console",
        (message) => {
          if (
            message.type() ===
            "error"
          ) {
            consoleErrors.push(
              message.text()
            );
          }
        }
      );

      const response =
        await page.goto(
          route,
          {
            waitUntil:
              route
              ===
              "/insights/authorization-is-a-system-not-a-checkbox"
                ?
                "domcontentloaded"
                :
                "networkidle"
          }
        );


      /*
       * NB_AUTHORIZATION_V51_ROUTE_AUDIT_WAIT_V1
       *
       * Authorization V51 has dedicated production-route coverage.
       * DOM readiness avoids waiting on unrelated global-shell Link
       * prefetch activity.
       */
      if (
        route
        ===
        "/insights/authorization-is-a-system-not-a-checkbox"
      ) {

        await expect(
          page.locator(
            '[data-authorization-insight-design="v51"]'
          )
        ).toBeVisible({
          timeout:
            10_000
        });

      }

      expect(
        response,
        `No response for ${route}`
      ).not.toBeNull();

      expect(
        response?.status(),
        `Unexpected HTTP status for ${route}`
      ).toBeLessThan(
        400
      );

      await expect(
        page.locator(
          "main"
        )
      ).toBeVisible();

      const horizontalOverflow =
        await page.evaluate(
          () =>
            document
              .documentElement
              .scrollWidth >
            document
              .documentElement
              .clientWidth +
              1
        );

      expect(
        horizontalOverflow,
        `Horizontal overflow detected on ${route}`
      ).toBe(
        false
      );

      expect(
        consoleErrors,
        `Console errors on ${route}`
      ).toEqual([]);
    }
  );
}

test.describe(
  "mobile route audit",
  () => {
    test.use({
      viewport: {
        width: 390,
        height: 844
      }
    });

    const mobileRoutes = [
      "/",
      "/services",
      "/services/api-security",
      "/training",
      "/activities",
      "/insights",
      "/insights/prompt-injection-matters-when-ai-can-act",
      "/contact",
      "/security"
    ];

    for (
      const route
      of mobileRoutes
    ) {
      test(
        `mobile overflow audit: ${route}`,
        async ({
          page
        }) => {
          await page.goto(
            route
          );

          const dimensions =
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
            dimensions.scrollWidth,
            `Mobile overflow on ${route}`
          ).toBeLessThanOrEqual(
            dimensions.clientWidth +
              1
          );
        }
      );
    }
  }
);
