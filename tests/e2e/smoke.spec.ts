import {
  expect,
  test
} from "@playwright/test";

test(
  "homepage renders the premium No Breach identity",
  async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole(
        "heading",
        {
          level: 1,
          name:
            /offensive security built around/i
        }
      )
    ).toBeVisible();

    await expect(
      page
        .getByText(
          "NO BREACH"
        )
        .first()
    ).toBeVisible();

    await expect(
      page.getByText(
        /security, education and community are one connected system/i
      )
    ).toBeVisible();
  }
);

test(
  "skip navigation targets the main content",
  async ({ page }) => {
    await page.goto("/");

    const skip =
      page.getByRole(
        "link",
        {
          name:
            "Skip to main content"
        }
      );

    await skip.focus();

    await expect(
      skip
    ).toBeFocused();

    await expect(
      skip
    ).toHaveAttribute(
      "href",
      "#main-content"
    );
  }
);

test(
  "services overview and detail routes render",
  async ({ page }) => {
    await page.goto(
      "/services"
    );

    await expect(
      page.getByRole(
        "heading",
        {
          level: 1,
          name:
            /see the system from the attacker/i
        }
      )
    ).toBeVisible();

    await page
      .getByRole(
        "link",
        {
          name:
            /web application penetration/i
        }
      )
      .first()
      .click();

    await expect(
      page.getByRole(
        "heading",
        {
          level: 1,
          name:
            "Web Application Penetration Testing"
        }
      )
    ).toBeVisible();
  }
);

test(
  "training program routes render",
  async ({ page }) => {
    await page.goto(
      "/training/red-team-foundations"
    );

    await expect(
      page.getByRole(
        "heading",
        {
          level: 1,
          name:
            "Red Team Foundations"
        }
      )
    ).toBeVisible();

    await expect(
      page
        .getByText(
          "Reconnaissance"
        )
        .first()
    ).toBeVisible();
  }
);

test(
  "activity deep-link filter is server initialized",
  async ({ page }) => {
    await page.goto(
      "/activities?type=training"
    );

    const trainingButton =
      page.getByRole(
        "button",
        {
          name: "training"
        }
      );

    await expect(
      trainingButton
    ).toHaveAttribute(
      "aria-pressed",
      "true"
    );

    await expect(
      page.getByText(
        "AI Security Foundations"
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        "Red Team Foundations"
      )
    ).toBeVisible();
  }
);

test(
  "activity filters update the URL",
  async ({ page }) => {
    await page.goto(
      "/activities"
    );

    await page
      .getByRole(
        "button",
        {
          name: "ctf"
        }
      )
      .click();

    await expect(
      page
    ).toHaveURL(
      /type=ctf/
    );

    await expect(
      page.getByText(
        "CR4CKOUT 2.0"
      )
    ).toBeVisible();
  }
);

test(
  "contact experience explicitly remains frontend-only",
  async ({ page }) => {
    await page.goto(
      "/contact"
    );

    await expect(
      page.getByText(
        /does not transmit the form to a backend yet/i
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        /do not enter passwords/i
      )
    ).toBeVisible();
  }
);

test(
  "company founder route renders",
  async ({ page }) => {
    await page.goto(
      "/company/founder"
    );

    await expect(
      page.getByRole(
        "heading",
        {
          level: 1,
          name:
            "Nouha Ben Brahim"
        }
      )
    ).toBeVisible();
  }
);

test(
  "CR4CKOUT route renders",
  async ({ page }) => {
    await page.goto(
      "/cr4ckout"
    );

    await expect(
      page.getByRole(
        "heading",
        {
          level: 1,
          name: "CR4CKOUT"
        }
      )
    ).toBeVisible();
  }
);

test(
  "unknown route renders the custom 404",
  async ({ page }) => {
    await page.goto(
      "/this-route-does-not-exist"
    );

    await expect(
      page.getByRole(
        "heading",
        {
          level: 1,
          name:
            /this endpoint doesn't exist/i
        }
      )
    ).toBeVisible();
  }
);

test.describe(
  "mobile experience",
  () => {
    test.use({
      viewport: {
        width: 390,
        height: 844
      }
    });

    test(
      "mobile navigation opens and reaches Training Hub",
      async ({ page }) => {
        await page.goto("/");

        await page
          .getByRole(
            "button",
            {
              name:
                "Open navigation"
            }
          )
          .click();

        const dialog =
          page.getByRole(
            "dialog"
          );

        await expect(
          dialog
        ).toBeVisible();

        await dialog
          .getByRole(
            "link",
            {
              name:
                "Training Hub"
            }
          )
          .click();

        await expect(
          page
        ).toHaveURL(
          /\/training$/
        );

        await expect(
          page.getByRole(
            "heading",
            {
              level: 1,
              name:
                /learn cybersecurity by doing cybersecurity/i
            }
          )
        ).toBeVisible();
      }
    );
  }
);
