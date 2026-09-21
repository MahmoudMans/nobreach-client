import {
  expect,
  test
} from "@playwright/test";

test(
  "activities page exposes verified LinkedIn activity",
  async ({
    page
  }) => {
    await page.goto(
      "/activities"
    );

    const section =
      page.locator(
        "[data-linkedin-activity-section]"
      );

    await expect(
      section
    ).toBeVisible();

    await expect(
      section.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Posts from the No Breach ecosystem."
        }
      )
    ).toBeVisible();

    await expect(
      section.locator(
        "[data-linkedin-post]"
      )
    ).toHaveCount(
      14
    );
  }
);

test(
  "LinkedIn cards point to actual LinkedIn post permalinks",
  async ({
    page
  }) => {
    await page.goto(
      "/activities"
    );

    const section =
      page.locator(
        "[data-linkedin-activity-section]"
      );

    await expect(
      section
    ).toBeVisible();

    const links =
      section.locator(
        'a[href*="linkedin.com/posts/"]'
      );

    await expect(
      links
    ).toHaveCount(
      14
    );

    for (
      let index = 0;
      index < 14;
      index += 1
    ) {
      const link =
        links.nth(
          index
        );

      const href =
        await link.getAttribute(
          "href"
        );

      expect(
        href
      ).not.toBeNull();

      expect(
        href
      ).toMatch(
        /^https:\/\/(?:[a-z]{2}\.)?(?:www\.)?linkedin\.com\/posts\//
      );

      await expect(
        link
      ).toHaveAttribute(
        "target",
        "_blank"
      );

      await expect(
        link
      ).toHaveAttribute(
        "rel",
        /noopener/
      );
    }
  }
);

test(
  "specific researched LinkedIn posts are linked",
  async ({
    page
  }) => {
    await page.goto(
      "/activities"
    );

    const section =
      page.locator(
        "[data-linkedin-activity-section]"
      );

    await expect(
      section.getByRole(
        "heading",
        {
          name:
            "Red Team Foundations"
        }
      )
    ).toBeVisible();

    await expect(
      section.getByRole(
        "heading",
        {
          name:
            "Web Exploitation Techniques Mentorship Program"
        }
      )
    ).toBeVisible();

    await expect(
      section.getByRole(
        "heading",
        {
          name:
            "Speaking at SECURIDAY_17"
        }
      )
    ).toBeVisible();

    await expect(
      section.getByRole(
        "heading",
        {
          name:
            "COD3 R3D at South Mediterranean University"
        }
      )
    ).toBeVisible();

    await expect(
      section.getByRole(
        "heading",
        {
          name:
            "Hackathon 6.0 judge"
        }
      )
    ).toBeVisible();
  }
);

test.describe(
  "LinkedIn activity responsive layout",
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
        `LinkedIn activity fits ${viewport.label}`,
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
            "/activities"
          );

          await expect(
            page.locator(
              "[data-linkedin-activity-section]"
            )
          ).toBeVisible();

          const metrics =
            await page.evaluate(
              () => ({
                clientWidth:
                  document
                    .documentElement
                    .clientWidth,

                scrollWidth:
                  document
                    .documentElement
                    .scrollWidth
              })
            );

          expect(
            metrics.scrollWidth
          ).toBeLessThanOrEqual(
            metrics.clientWidth +
              1
          );
        }
      );
    }
  }
);
