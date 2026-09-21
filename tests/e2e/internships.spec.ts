import {
  expect,
  test
} from "@playwright/test";

test(
  "internship project showcase renders",
  async ({
    page
  }) => {
    await page.goto(
      "/company/internships"
    );

    await expect(
      page.getByRole(
        "heading",
        {
          level: 1,
          name:
            "Security work built through practice."
        }
      )
    ).toBeVisible();

    await expect(
      page.getByRole(
        "heading",
        {
          name:
            "AI Security Training Labs"
        }
      )
    ).toBeVisible();

    await expect(
      page.getByRole(
        "heading",
        {
          name:
            "Purple Team Cyber Range"
        }
      )
    ).toBeVisible();

    await expect(
      page.getByRole(
        "heading",
        {
          name:
            "No Breach ReportOps"
        }
      )
    ).toBeVisible();

    await expect(
      page.getByRole(
        "heading",
        {
          name:
            "Cloud-Native Security Playbook"
        }
      )
    ).toBeVisible();
  }
);

test(
  "internship page explains public lab safety",
  async ({
    page
  }) => {
    await page.goto(
      "/company/internships"
    );

    await expect(
      page.getByText(
        /authorized, isolated environments/i
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        /synthetic or deliberately vulnerable systems/i
      )
    ).toBeVisible();
  }
);

test(
  "desktop Company navigation exposes internship projects",
  async ({
    page
  }) => {
    await page.setViewportSize({
      width: 1440,
      height: 900
    });

    await page.goto(
      "/"
    );

    const nav =
      page.locator(
        "[data-desktop-navigation]"
      );

    await nav
      .getByRole(
        "button",
        {
          name:
            "Company menu",
          exact:
            true
        }
      )
      .click();

    await expect(
      nav.getByRole(
        "link",
        {
          name:
            /Internship Projects/
        }
      )
    ).toBeVisible();
  }
);

test.describe(
  "internship responsive layout",
  () => {
    for (
      const viewport
      of [
        {
          label:
            "tablet",
          width: 820,
          height: 1180
        },
        {
          label:
            "mobile",
          width: 390,
          height: 844
        }
      ]
    ) {
      test(
        `internship page fits ${viewport.label}`,
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
            "/company/internships"
          );

          await expect(
            page.locator(
              "#main-content h1"
            )
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
      );
    }
  }
);
