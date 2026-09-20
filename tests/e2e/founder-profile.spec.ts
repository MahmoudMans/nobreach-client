import {
  expect,
  test
} from "@playwright/test";

test(
  "founder page renders researched professional profile",
  async ({
    page
  }) => {
    await page.goto(
      "/company/founder"
    );

    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,
          name:
            "Nouha Ben Brahim"
        }
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        "Founder of No Breach",
        {
          exact:
            true
        }
      )
    ).toBeVisible();

    await expect(
      page.getByRole(
        "heading",
        {
          name:
            "From programming to offensive security."
        }
      )
    ).toBeVisible();

    await expect(
      page.getByRole(
        "heading",
        {
          name:
            "Selected public engagements."
        }
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        "CyberSummit 4.0",
        {
          exact:
            true
        }
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        "CyberCamp 5.0",
        {
          exact:
            true
        }
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        "The Hackers Line",
        {
          exact:
            true
        }
      )
    ).toBeVisible();
  }
);

test(
  "founder page exposes exactly one primary heading",
  async ({
    page
  }) => {
    await page.goto(
      "/company/founder"
    );

    await expect(
      page.locator(
        "#main-content h1"
      )
    ).toHaveCount(
      1
    );
  }
);

test(
  "founder page emits Person structured data",
  async ({
    page
  }) => {
    await page.goto(
      "/company/founder"
    );

    const jsonLd =
      page.locator(
        'script[type="application/ld+json"]'
      );

    const count =
      await jsonLd.count();

    let personFound =
      false;

    for (
      let index = 0;
      index < count;
      index += 1
    ) {
      const content =
        await jsonLd
          .nth(index)
          .textContent();

      if (
        content?.includes(
          '"@type":"Person"'
        ) &&
        content.includes(
          "Nouha Ben Brahim"
        )
      ) {
        personFound =
          true;
        break;
      }
    }

    expect(
      personFound
    ).toBe(
      true
    );
  }
);

test.describe(
  "founder responsive design",
  () => {
    for (
      const viewport
      of [
        {
          name:
            "tablet",
          width:
            820,
          height:
            1180
        },
        {
          name:
            "mobile",
          width:
            390,
          height:
            844
        }
      ]
    ) {
      test(
        `founder page fits ${viewport.name}`,
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
            "/company/founder"
          );

          await expect(
            page.getByRole(
              "heading",
              {
                level:
                  1,
                name:
                  "Nouha Ben Brahim"
              }
            )
          ).toBeVisible();

          const layout =
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
            layout.scrollWidth
          ).toBeLessThanOrEqual(
            layout.clientWidth +
              1
          );
        }
      );
    }
  }
);
