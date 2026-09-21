import {
  expect,
  test
} from "@playwright/test";

const routes = [
  "/company",
  "/company/founder",
  "/company/team",
  "/company/internships",

  "/services",
  "/services/web-application-pentesting",
  "/services/api-security",

  "/training",
  "/training/red-team-foundations",

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
  "content pages keep compact readable vertical rhythm",
  async ({
    page
  }) => {
    await page.setViewportSize({
      width:
        1440,

      height:
        900
    });

    let cardLikeSurfaceCount =
      0;

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

      const result =
        await page.evaluate(
          () => {
            const articles =
              Array.from(
                document.querySelectorAll(
                  "#main-content article"
                )
              ).slice(
                0,
                16
              );

            const articleMetrics =
              articles.map(
                (
                  article
                ) => {
                  const style =
                    getComputedStyle(
                      article
                    );

                  const className =
                    typeof article.className ===
                    "string"
                      ? article.className
                      : "";

                  const isCardLike =
                    /card|panel|project|item|tile/i.test(
                      className
                    );

                  return {
                    className,

                    isCardLike,

                    paddingTop:
                      Number.parseFloat(
                        style.paddingTop
                      ) || 0,

                    paddingBottom:
                      Number.parseFloat(
                        style.paddingBottom
                      ) || 0
                  };
                }
              );

            return {
              scrollWidth:
                document
                  .documentElement
                  .scrollWidth,

              clientWidth:
                document
                  .documentElement
                  .clientWidth,

              articleMetrics
            };
          }
        );

      expect(
        result.scrollWidth
      ).toBeLessThanOrEqual(
        result.clientWidth +
          1
      );

      for (
        const article
        of result.articleMetrics
      ) {
        /*
         * Structural <article> containers can legitimately carry
         * section-level breathing room. 96px is the hard safety
         * ceiling for those containers.
         */
        expect(
          article.paddingTop,
          `${route} structural article top padding: ${article.className}`
        ).toBeLessThanOrEqual(
          96
        );

        expect(
          article.paddingBottom,
          `${route} structural article bottom padding: ${article.className}`
        ).toBeLessThanOrEqual(
          96
        );

        /*
         * Actual card / panel / project / item surfaces must remain
         * considerably denser.
         */
        if (
          article.isCardLike
        ) {
          cardLikeSurfaceCount +=
            1;

          expect(
            article.paddingTop,
            `${route} card-like top padding: ${article.className}`
          ).toBeLessThanOrEqual(
            56
          );

          expect(
            article.paddingBottom,
            `${route} card-like bottom padding: ${article.className}`
          ).toBeLessThanOrEqual(
            56
          );
        }
      }
    }

    /*
     * Protect against a selector contract that silently stops
     * observing the card system.
     */
    expect(
      cardLikeSurfaceCount
    ).toBeGreaterThan(
      0
    );
  }
);

test(
  "detail routes bring useful content into view quickly",
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
      of [
        "/services/api-security",
        "/training/red-team-foundations",
        "/activities/red-team-foundations-2026",
        "/events/cr4ckout-2-0",
        "/insights/authorization-is-a-system-not-a-checkbox"
      ]
    ) {
      await page.goto(
        route
      );

      const measurement =
        await page.evaluate(
          () => {
            const h1 =
              document.querySelector(
                "#main-content h1"
              );

            const laterHeading =
              Array.from(
                document.querySelectorAll(
                  "#main-content h2"
                )
              ).find(
                (
                  element
                ) =>
                  element
                    .getBoundingClientRect()
                    .height >
                  0
              );

            return {
              h1Bottom:
                h1
                  ?.getBoundingClientRect()
                  .bottom ??
                0,

              firstSectionHeadingTop:
                laterHeading
                  ?.getBoundingClientRect()
                  .top ??
                null
            };
          }
        );

      expect(
        measurement.h1Bottom
      ).toBeLessThan(
        760
      );

      if (
        measurement.firstSectionHeadingTop
        !==
        null
      ) {
        expect(
          measurement.firstSectionHeadingTop
        ).toBeLessThan(
          1250
        );
      }
    }
  }
);

test(
  "mobile content remains compact without overflow",
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
        "/company",
        "/company/founder",
        "/company/internships",
        "/services",
        "/services/api-security",
        "/training",
        "/training/red-team-foundations",
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

      await expect(
        page.locator(
          "#main-content h1"
        ).first()
      ).toBeVisible();

      const measurements =
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
        measurements.scrollWidth
      ).toBeLessThanOrEqual(
        measurements.clientWidth +
          1
      );
    }
  }
);
