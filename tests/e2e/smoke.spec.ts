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
      page.getByRole(
        "heading",
        {
          level:
            2,
          name:
            /a cybersecurity organization built from offensive security/i
        }
      )
    ).toBeVisible();

    await expect(
      page.locator(
        '[data-home-section="explore"]'
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
            /web penetration testing/i
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
      page
      .getByRole(
        "link"
      )
      .filter({
        hasText:
          "Red Team Foundations"
      })
      .first()
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
      "mobile navigation opens and reaches Training",
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
          "dialog",
          {
            name:
              "Site navigation",
            exact:
              true
          }
        );

        await expect(
          dialog
        ).toBeVisible();

        await dialog
          .getByRole(
            "navigation",
            {
              name:
                "Mobile navigation",
              exact:
                true
            }
          )
          .getByRole(
            "link",
            {
              name:
                "Training",
              exact:
                true
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

test(
  "activity archive links to activity detail pages",
  async ({
    page
  }) => {

    const response =
      await page.goto(
        "/activities"
      );


    expect(
      response?.status()
    ).toBe(
      200
    );


    const activityRow =
      page
        .locator(
          '[data-activity-row="true"]'
        )
        .filter({
          hasText:
            "AI Security Foundations"
        });


    await expect(
      activityRow
    ).toHaveCount(
      1
    );


    await expect(
      activityRow.getByRole(
        "heading",
        {
          name:
            "AI Security Foundations",
          exact:
            true
        }
      )
    ).toBeVisible();


    const activityLink =
      activityRow.getByRole(
        "link",
        {
          name:
            "View activity",
          exact:
            true
        }
      );


    await expect(
      activityLink
    ).toBeVisible();


    await expect(
      activityLink
    ).toHaveAttribute(
      "href",
      "/activities/ai-security-foundations-2026"
    );


    await activityLink.click();


    await expect(
      page
    ).toHaveURL(
      /\/activities\/ai-security-foundations-2026$/
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            "AI Security Foundations",
          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-ai-security-activity-design="v50"]'
      )
    ).toHaveCount(
      1
    );

  }
);

test(
  "activity detail exposes breadcrumb navigation",
  async ({ page }) => {
    await page.goto(
      "/activities/cr4ckout-2"
    );

    const breadcrumb =
      page.getByRole(
        "navigation",
        {
          name:
            "Breadcrumb"
        }
      );

    await expect(
      breadcrumb
    ).toBeVisible();

    await expect(
      breadcrumb.getByRole(
        "link",
        {
          name:
            "Activities"
        }
      )
    ).toBeVisible();
  }
);

test(
  "service detail contains engagement workflow and FAQ",
  async ({ page }) => {
    await page.goto(
      "/services/api-security"
    );

    await expect(
      page.getByRole(
        "heading",
        {
          level: 2,
          name:
            /from initial context to actionable reporting/i
        }
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        /does api testing include authorization/i
      )
    ).toBeVisible();
  }
);

test(
  "training detail contains audience and expected outcomes",
  async ({ page }) => {
    await page.goto(
      "/training/ai-security-foundations"
    );

    await expect(
      page.getByRole(
        "heading",
        {
          level: 2,
          name:
            /designed for learners building practical security capability/i
        }
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        /AI application trust boundaries/i
      )
    ).toBeVisible();
  }
);

test(
  "sitemap includes dynamic activity route",
  async ({ page }) => {
    const response =
      await page.request.get(
        "/sitemap.xml"
      );

    expect(
      response.ok()
    ).toBeTruthy();

    const body =
      await response.text();

    expect(
      body
    ).toContain(
      "/activities/cr4ckout-2"
    );
  }
);

test(
  "insights index renders published technical content",
  async ({ page }) => {
    await page.goto(
      "/insights"
    );

    await expect(
      page.getByRole(
        "heading",
        {
          level: 1,
          name:
            /security thinking worth publishing/i
        }
      )
    ).toBeVisible();

    await expect(
      page.getByRole(
        "link",
        {
          name:
            /authorization is a system, not a checkbox/i
        }
      )
    ).toBeVisible();
  }
);

test(
  "insight category deep link initializes the filter",
  async ({ page }) => {
    await page.goto(
      "/insights?category=AI%20Security"
    );

    await expect(
      page.getByRole(
        "button",
        {
          name:
            "AI Security"
        }
      )
    ).toHaveAttribute(
      "aria-pressed",
      "true"
    );

    await expect(
      page.getByRole(
        "link",
        {
          name:
            /prompt injection matters most when AI can act/i
        }
      )
    ).toBeVisible();
  }
);

test(
  "insight search filters articles",
  async ({ page }) => {
    await page.goto(
      "/insights"
    );

    await page
      .getByRole(
        "searchbox",
        {
          name:
            "Search insights"
        }
      )
      .fill(
        "prompt injection"
      );

    await expect(
      page.getByRole(
        "link",
        {
          name:
            /prompt injection matters most when AI can act/i
        }
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        "1 article"
      )
    ).toBeVisible();
  }
);

test(
  "article route renders contents and related context",
  async ({ page }) => {
    await page.goto(
      "/insights/authorization-is-a-system-not-a-checkbox"
    );

    await expect(
      page.getByRole(
        "heading",
        {
          level: 1,
          name:
            "Authorization is a system, not a checkbox"
        }
      )
    ).toBeVisible();

    await expect(
      page.getByRole(
        "navigation",
        {
          name:
            "Article contents"
        }
      )
    ).toBeVisible();

    await expect(
      page.getByRole(
        "link",
        {
          name:
            /api security/i
        }
      ).first()
    ).toBeVisible();
  }
);

test(
  "RSS feed returns cybersecurity insights",
  async ({ page }) => {
    const response =
      await page.request.get(
        "/feed.xml"
      );

    expect(
      response.ok()
    ).toBeTruthy();

    expect(
      response.headers()[
        "content-type"
      ]
    ).toContain(
      "application/rss+xml"
    );

    const body =
      await response.text();

    expect(
      body
    ).toContain(
      "<rss"
    );

    expect(
      body
    ).toContain(
      "Authorization is a system, not a checkbox"
    );
  }
);

test(
  "sitemap includes insight article routes",
  async ({ page }) => {
    const response =
      await page.request.get(
        "/sitemap.xml"
      );

    expect(
      response.ok()
    ).toBeTruthy();

    const body =
      await response.text();

    expect(
      body
    ).toContain(
      "/insights/prompt-injection-matters-when-ai-can-act"
    );
  }
);
