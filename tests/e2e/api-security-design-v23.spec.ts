import {
  expect,
  test
} from "@playwright/test";


test(
  "API Security V24 renders the consolidated service introduction",
  async ({
    page
  }) => {

    await page.goto(
      "/services/api-security"
    );


    await expect(
      page.locator(
        '[data-api-security-audit="v24"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,
          name:
            "API security starts with trust boundaries."
        }
      )
    ).toBeVisible();


    const overview =
      page.locator(
        '[data-api-ui="assessment-overview"]'
      );


    await expect(
      overview
    ).toBeVisible();


    for (
      const text
      of
      [
        "REST APIs and GraphQL",
        "Identity, object and function boundaries",
        "Technical evidence and remediation guidance"
      ]
    ) {

      await expect(
        overview.getByText(
          text,
          {
            exact:
              true
          }
        )
      ).toBeVisible();

    }


    await expect(
      page.getByRole(
        "link",
        {
          name:
            /Discuss an API assessment/
        }
      ).first()
    ).toHaveAttribute(
      "href",
      "/contact"
    );

  }
);


test(
  "Attack Surface presents REST and GraphQL once as interfaces",
  async ({
    page
  }) => {

    await page.goto(
      "/services/api-security"
    );


    const surface =
      page.locator(
        '[data-api-section="attack-surface"]'
      );


    await expect(
      surface.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Test the interface as a system, not a list of endpoints."
        }
      )
    ).toBeVisible();


    await expect(
      surface.locator(
        '[data-api-interface]'
      )
    ).toHaveCount(
      2
    );


    await expect(
      surface.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "REST APIs"
        }
      )
    ).toBeVisible();


    await expect(
      surface.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "GraphQL"
        }
      )
    ).toBeVisible();


    await expect(
      page.getByText(
        "Protocol",
        {
          exact:
            true
        }
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.locator(
        '[data-api-ui="focus-index"]'
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "Authorization Model preserves three distinct boundaries",
  async ({
    page
  }) => {

    await page.goto(
      "/services/api-security"
    );


    const model =
      page.locator(
        '[data-api-section="authorization"]'
      );


    await expect(
      model.locator(
        '[data-api-boundary]'
      )
    ).toHaveCount(
      3
    );


    for (
      const heading
      of
      [
        "Identity boundary",
        "Object boundary",
        "Function boundary"
      ]
    ) {

      await expect(
        model.getByRole(
          "heading",
          {
            level:
              3,
            name:
              heading
          }
        )
      ).toBeVisible();

    }


    await expect(
      model.getByText(
        "Object-level access · BOLA / IDOR",
        {
          exact:
            true
        }
      )
    ).toBeVisible();

  }
);


test(
  "Authorization Model keeps four supporting assessment areas",
  async ({
    page
  }) => {

    await page.goto(
      "/services/api-security"
    );


    const additional =
      page.locator(
        '[data-api-additional]'
      );


    await expect(
      additional
    ).toHaveCount(
      4
    );


    for (
      const heading
      of
      [
        "Token security",
        "Rate limiting",
        "Business logic",
        "Data exposure"
      ]
    ) {

      await expect(
        page.getByRole(
          "heading",
          {
            level:
              4,
            name:
              heading
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "Validation workflow keeps five stages and the supplied-identity qualification",
  async ({
    page
  }) => {

    await page.goto(
      "/services/api-security"
    );


    const validation =
      page.locator(
        '[data-api-section="validation-reporting"]'
      );


    await expect(
      validation.locator(
        '[data-api-workflow-step]'
      )
    ).toHaveCount(
      5
    );


    for (
      const heading
      of
      [
        "Context",
        "Surface map",
        "Identity matrix",
        "Validation",
        "Reporting"
      ]
    ) {

      await expect(
        validation.getByRole(
          "heading",
          {
            level:
              3,
            name:
              heading
          }
        )
      ).toBeVisible();

    }


    await expect(
      validation.getByText(
        /where supplied for the assessment/i
      )
    ).toBeVisible();

  }
);


test(
  "Assessment output retains four concrete deliverables",
  async ({
    page
  }) => {

    await page.goto(
      "/services/api-security"
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "Assessment output"
        }
      )
    ).toBeVisible();


    const outputs =
      page.locator(
        '[data-api-output]'
      );


    await expect(
      outputs
    ).toHaveCount(
      4
    );


    for (
      const heading
      of
      [
        "API surface map",
        "Access-control evidence",
        "Validated findings",
        "Remediation guidance"
      ]
    ) {

      await expect(
        page.getByRole(
          "heading",
          {
            level:
              4,
            name:
              heading
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "API FAQ keeps three native disclosures with aligned indicators",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        1440,
      height:
        900
    });


    await page.goto(
      "/services/api-security"
    );


    const rows =
      page.locator(
        '[data-api-faq]'
      );


    const triggers =
      page.locator(
        '[data-api-faq] span[class*="faqTrigger"]'
      );


    const indicators =
      page.locator(
        '[data-api-faq] span[class*="faqIndicator"]'
      );


    await expect(
      rows
    ).toHaveCount(
      3
    );


    await expect(
      triggers
    ).toHaveCount(
      3
    );


    await expect(
      indicators
    ).toHaveCount(
      3
    );


    const first =
      rows.nth(
        0
      );


    await first.locator(
      "summary"
    ).click();


    await expect(
      first
    ).toHaveAttribute(
      "open",
      ""
    );


    await expect(
      first.getByText(
        /Authorization is a core focus/i
      )
    ).toBeVisible();


    const geometry =
      await indicators.evaluateAll(
        elements =>
          elements.map(
            element =>
              element
                .getBoundingClientRect()
                .x
          )
      );


    expect(
      Math.max(
        ...geometry
      )
      -
      Math.min(
        ...geometry
      )
    ).toBeLessThanOrEqual(
      1
    );

  }
);


test(
  "API discussion uses qualified scope wording and verified destinations",
  async ({
    page
  }) => {

    await page.goto(
      "/services/api-security"
    );


    const cta =
      page.locator(
        '[data-api-section="cta"]'
      );


    await expect(
      cta.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Understand your API's access boundaries."
        }
      )
    ).toBeVisible();


    await expect(
      cta.getByRole(
        "link",
        {
          name:
            /Discuss an API assessment/
        }
      )
    ).toHaveAttribute(
      "href",
      "/contact"
    );


    await expect(
      cta.getByRole(
        "link",
        {
          name:
            /View all services/
        }
      )
    ).toHaveAttribute(
      "href",
      "/services"
    );


    await expect(
      page.getByText(
        "Know what every identity can really do.",
        {
          exact:
            true
        }
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "API Security V24 keeps one purposeful section sequence",
  async ({
    page
  }) => {

    await page.goto(
      "/services/api-security"
    );


    const order =
      await page
        .locator(
          '[data-api-section]'
        )
        .evaluateAll(
          elements =>
            elements.map(
              element =>
                element.getAttribute(
                  "data-api-section"
                )
            )
        );


    expect(
      order
    ).toEqual([
      "hero",
      "attack-surface",
      "authorization",
      "validation-reporting",
      "cta"
    ]);

  }
);


test(
  "API Security hero body and discussion share one outer frame",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        1440,
      height:
        900
    });


    await page.goto(
      "/services/api-security"
    );


    const frames =
      page.locator(
        '[data-api-frame]'
      );


    const boxes =
      await frames.evaluateAll(
        elements =>
          elements.map(
            element => {

              const box =
                element.getBoundingClientRect();


              return {
                x:
                  box.x,

                width:
                  box.width
              };

            }
          )
      );


    expect(
      boxes.length
    ).toBe(
      5
    );


    const xs =
      boxes.map(
        box =>
          box.x
      );


    const widths =
      boxes.map(
        box =>
          box.width
      );


    expect(
      Math.max(
        ...xs
      )
      -
      Math.min(
        ...xs
      )
    ).toBeLessThanOrEqual(
      1
    );


    expect(
      Math.max(
        ...widths
      )
      -
      Math.min(
        ...widths
      )
    ).toBeLessThanOrEqual(
      1
    );

  }
);


test(
  "API workflow recomposes vertically before its five columns become narrow",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        1024,
      height:
        900
    });


    await page.goto(
      "/services/api-security"
    );


    const workflow =
      page.locator(
        '[data-api-ui="workflow"]'
      );


    await expect(
      workflow
    ).toBeVisible();


    const columns =
      await workflow.evaluate(
        element =>
          getComputedStyle(
            element
          ).gridTemplateColumns
      );


    expect(
      columns
        .trim()
        .split(
          /\s+/
        )
        .length
    ).toBe(
      1
    );

  }
);


for (
  const viewport
  of
  [
    {
      label:
        "320",
      width:
        320,
      height:
        800
    },
    {
      label:
        "390",
      width:
        390,
      height:
        844
    },
    {
      label:
        "768",
      width:
        768,
      height:
        1024
    },
    {
      label:
        "1024",
      width:
        1024,
      height:
        768
    },
    {
      label:
        "1280",
      width:
        1280,
      height:
        800
    },
    {
      label:
        "1440",
      width:
        1440,
      height:
        900
    }
  ]
) {

  test(
    `API Security V24 remains contained at ${viewport.label}`,
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
        "/services/api-security"
      );


      await expect(
        page.locator(
          '[data-api-security-audit="v24"]'
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
        dimensions.clientWidth
        +
        1
      );

    }
  );

}
