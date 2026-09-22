import {
  expect,
  test
} from "@playwright/test";

test(
  "homepage is a concise five-section gateway",
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

    await expect(
      page.getByRole(
        "heading",
        {
          level: 1,
          name:
            /offensive security built around how real systems fail/i
        }
      )
    ).toBeVisible();
  }
);

test(
  "homepage routes detailed content to dedicated pages",
  async ({
    page
  }) => {
    await page.goto(
      "/"
    );

    const expectedLinks = [
      {
        name:
          "Read the company story",
        href:
          "/company"
      },
      {
        name:
          "Full methodology & services",
        href:
          "/services"
      },
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
      const item
      of expectedLinks
    ) {
      const link =
        page.getByRole(
          "link",
          {
            name:
              new RegExp(
                item.name,
                "i"
              )
          }
        ).first();

      await expect(
        link
      ).toHaveAttribute(
        "href",
        item.href
      );
    }
  }
);

test.describe(
  "condensed homepage responsive layout",
  () => {
    for (
      const viewport
      of [
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
        `homepage fits ${viewport.label}`,
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
