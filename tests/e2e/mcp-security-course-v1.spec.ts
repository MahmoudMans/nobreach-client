import {
  expect,
  test
} from "@playwright/test";


// NB_MCP_SECURITY_COURSE_V1

const REGISTRATION_URL =
  "https://forms.gle/UQqsXvod6Pkui1Aa8";


test(
  "MCP Security detail page renders with registration actions",
  async ({
    page
  }) => {

    await page.goto(
      "/training/mcp-security"
    );


    await expect(
      page.locator(
        '[data-training-detail="mcp-security"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1
        }
      )
    ).toHaveCount(
      1
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,
          name:
            /MCP Security/
        }
      )
    ).toBeVisible();


    const registrationLinks =
      page.locator(
        `a[href="${REGISTRATION_URL}"]`
      );


    expect(
      await registrationLinks.count()
    ).toBeGreaterThanOrEqual(
      2
    );


    await expect(
      registrationLinks.first()
    ).toHaveAttribute(
      "target",
      "_blank"
    );

  }
);


test(
  "training index lists the MCP Security program",
  async ({
    page
  }) => {

    await page.goto(
      "/training"
    );


    const card =
      page.locator(
        '[data-training-program-card="mcp-security"]'
      );


    await expect(
      card
    ).toBeVisible();


    await expect(
      card.locator(
        'a[href="/training/mcp-security"]'
      )
    ).toBeVisible();


    await expect(
      card.locator(
        `a[href="${REGISTRATION_URL}"]`
      )
    ).toBeVisible();

  }
);
