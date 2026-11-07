import {
  expect,
  test
} from "@playwright/test";


// NB_AI_INFRA_INSIGHT_V1

const ROUTE =
  "/insights/when-the-model-is-not-the-only-attack-surface";


test(
  "AI infrastructure article renders with contents, tables and references",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    await expect(
      page.locator(
        '[data-ai-infra-insight="v1"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,
          name:
            "When the Model Is Not the Only Attack Surface"
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
      page.locator(
        "table"
      )
    ).toHaveCount(
      2
    );


    await expect(
      page.locator(
        '#references li'
      )
    ).toHaveCount(
      6
    );


    await page
      .locator(
        'a[href="#ref-1"]'
      )
      .first()
      .click();


    await expect(
      page
    ).toHaveURL(
      /#ref-1$/
    );

  }
);


test(
  "AI infrastructure article links to the LinkedIn post",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const link =
      page.locator(
        "[data-ai-infra-linkedin]"
      );


    await expect(
      link
    ).toHaveAttribute(
      "href",
      "https://www.linkedin.com/feed/update/urn:li:activity:7522269684860325889/"
    );


    await expect(
      link
    ).toHaveAttribute(
      "target",
      "_blank"
    );

  }
);


test(
  "insights index features the new article",
  async ({
    page
  }) => {

    await page.goto(
      "/insights"
    );


    await expect(
      page.locator(
        '[data-insight-featured="true"]'
      )
    ).toContainText(
      "When the model is not the only attack surface"
    );

  }
);
