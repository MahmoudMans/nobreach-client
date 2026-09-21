import {
  expect,
  test
} from "@playwright/test";


test(
  "modern homepage renders dynamic No Breach hero",
  async ({
    page
  }) => {
    await page.goto(
      "/"
    );

    const hero =
      page.locator(
        '[data-home-section="hero"]'
      );

    await expect(
      hero
    ).toBeVisible();

    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            /offensive security built around real-world attack thinking/i
        }
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        "NB / ATTACK SURFACE"
      )
    ).toBeVisible();

    for (
      const node
      of [
        "APP",
        "API",
        "AUTH",
        "USER",
        "DATA"
      ]
    ) {
      await expect(
        hero.getByText(
          node,
          {
            exact:
              true
          }
        ).first()
      ).toBeVisible();
    }
  }
);


test(
  "modern homepage preserves all five primary sections",
  async ({
    page
  }) => {
    await page.goto(
      "/"
    );

    await expect(
      page.locator(
        "[data-home-section]"
      )
    ).toHaveCount(
      5
    );

    for (
      const section
      of [
        "hero",
        "company",
        "services",
        "explore",
        "contact"
      ]
    ) {
      await expect(
        page.locator(
          `[data-home-section="${section}"]`
        )
      ).toBeVisible();
    }
  }
);


test(
  "modern service rows route to service details",
  async ({
    page
  }) => {
    await page.goto(
      "/"
    );

    const api =
      page.getByRole(
        "link",
        {
          name:
            /api security/i
        }
      ).first();

    await expect(
      api
    ).toHaveAttribute(
      "href",
      "/services/api-security"
    );

    const web =
      page.getByRole(
        "link",
        {
          name:
            /web application security/i
        }
      ).first();

    await expect(
      web
    ).toHaveAttribute(
      "href",
      "/services/web-application-pentesting"
    );
  }
);


test(
  "modern ecosystem retains dedicated content destinations",
  async ({
    page
  }) => {
    await page.goto(
      "/"
    );

    const destinations = [
      {
        name:
          "Nouha Ben Brahim",

        href:
          "/company/founder"
      },
      {
        name:
          "Training Hub",

        href:
          "/training"
      },
      {
        name:
          "CR4CKOUT",

        href:
          "/cr4ckout"
      },
      {
        name:
          "Internship Projects",

        href:
          "/company/internships"
      },
      {
        name:
          "Activities & LinkedIn",

        href:
          "/activities"
      },
      {
        name:
          "Technical Insights",

        href:
          "/insights"
      },
      {
        name:
          "Events Archive",

        href:
          "/events"
      }
    ];

    for (
      const destination
      of destinations
    ) {
      await expect(
        page.getByRole(
          "link",
          {
            name:
              new RegExp(
                destination.name,
                "i"
              )
          }
        ).first()
      ).toHaveAttribute(
        "href",
        destination.href
      );
    }
  }
);


test.describe(
  "modern homepage responsive experience",
  () => {
    for (
      const viewport
      of [
        {
          label:
            "desktop",

          width:
            1440,

          height:
            900
        },
        {
          label:
            "tablet",

          width:
            820,

          height:
            1180
        },
        {
          label:
            "mobile",

          width:
            390,

          height:
            844
        }
      ]
    ) {
      test(
        `modern homepage fits ${viewport.label}`,
        async ({
          page
        }) => {
          await page.setViewportSize({
            width:
              viewport.width,

            height:
              viewport.height
          });

          await page.goto(
            "/"
          );

          await expect(
            page.locator(
              "#main-content h1"
            )
          ).toBeVisible();

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
            dimensions.scrollWidth
          ).toBeLessThanOrEqual(
            dimensions.clientWidth +
              1
          );
        }
      );
    }
  }
);
