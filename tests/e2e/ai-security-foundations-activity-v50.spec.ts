import {
  expect,
  test
} from "@playwright/test";


const route =
  "/activities/ai-security-foundations-2026";


test(
  "AI Security activity V51 opens as a compact published record",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    await expect(
      page.locator(
        '[data-ai-security-activity-audit="v51"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,
          name:
            "AI Security Foundations"
        }
      )
    ).toBeVisible();


    await expect(
      page.getByText(
        /Training activity focused on security boundaries around AI applications/i
      )
    ).toBeVisible();

  }
);


test(
  "AI Security activity keeps one lightweight breadcrumb",
  async ({
    page
  }) => {

    await page.goto(
      route
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
    ).toHaveAttribute(
      "href",
      "/activities"
    );

  }
);


test(
  "AI Security activity V51 replaces the decorative signal with record facts",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    await expect(
      page.locator(
        '[aria-label="AI Security activity signal"]'
      )
    ).toHaveCount(
      0
    );


    const context =
      page.locator(
        '[data-ai-activity-ui="record-context"]'
      );


    await expect(
      context
    ).toBeVisible();


    await expect(
      context.locator(
        "dt"
      )
    ).toHaveCount(
      4
    );


    for (
      const value
      of
      [
        "2026",
        "training",
        "Tunis / Online"
      ]
    ) {

      await expect(
        context.getByText(
          value,
          {
            exact:
              true
          }
        )
      ).toBeVisible();

    }


    const recordValue =
      context
        .locator(
          "dd"
        )
        .filter({
          hasText:
            /^Published activity$/
        });


    await expect(
      recordValue
    ).toHaveCount(
      1
    );


    await expect(
      recordValue
    ).toBeVisible();

  }
);


test(
  "AI Security activity introduction leads into the record before conversion",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const intro =
      page.locator(
        '[data-ai-activity-section="intro"]'
      );


    await expect(
      intro.getByRole(
        "link",
        {
          name:
            /Read activity record/
        }
      )
    ).toHaveAttribute(
      "href",
      "#overview"
    );


    await expect(
      intro.getByRole(
        "link",
        {
          name:
            /Activity archive/
        }
      )
    ).toHaveAttribute(
      "href",
      "/activities"
    );

  }
);


test(
  "AI Security activity overview preserves the canonical description and highlights",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const overview =
      page.locator(
        '[data-ai-activity-section="overview"]'
      );


    await expect(
      overview.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "What this activity covered."
        }
      )
    ).toBeVisible();


    await expect(
      overview.getByText(
        /traditional application-security thinking extends into modern AI-enabled systems/i
      )
    ).toBeVisible();


    const highlights =
      overview.locator(
        '[data-ai-activity-ui="published-highlights"] li'
      );


    await expect(
      highlights
    ).toHaveCount(
      4
    );


    for (
      const highlight
      of
      [
        "AI application attack surfaces",
        "Prompt-injection concepts",
        "Tool-use security boundaries",
        "Application-security context"
      ]
    ) {

      await expect(
        overview.getByText(
          highlight,
          {
            exact:
              true
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "AI Security activity consolidates both canonical narrative sections",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const record =
      page.locator(
        '[data-ai-activity-section="record"]'
      );


    const rows =
      record.locator(
        '[data-ai-activity-record-section]'
      );


    await expect(
      rows
    ).toHaveCount(
      2
    );


    await expect(
      record.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "Security beyond the model"
        }
      )
    ).toBeVisible();


    await expect(
      record.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "Practical security perspective"
        }
      )
    ).toBeVisible();

  }
);


test(
  "AI Security activity has one current-programme handoff",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    await expect(
      page.locator(
        '[data-ai-activity-section="final-cta"]'
      )
    ).toHaveCount(
      0
    );


    const context =
      page.locator(
        '[data-ai-activity-section="context"]'
      );


    await expect(
      context.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Continue into the current AI Security programme."
        }
      )
    ).toBeVisible();


    await expect(
      context.getByRole(
        "link",
        {
          name:
            /View related course/
        }
      )
    ).toHaveAttribute(
      "href",
      "/training/ai-security-foundations"
    );


    await expect(
      context.getByRole(
        "link",
        {
          name:
            /Explore Training Hub/
        }
      )
    ).toHaveAttribute(
      "href",
      "/training"
    );

  }
);


test(
  "AI Security activity V51 keeps one purposeful section sequence",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const order =
      await page
        .locator(
          '[data-ai-activity-section]'
        )
        .evaluateAll(
          elements =>
            elements.map(
              element =>
                element.getAttribute(
                  "data-ai-activity-section"
                )
            )
        );


    expect(
      order
    ).toEqual([
      "intro",
      "overview",
      "record",
      "context"
    ]);

  }
);


test(
  "AI Security activity V51 uses one shared content frame",
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
      route
    );


    const frames =
      page.locator(
        '[data-ai-activity-frame]'
      );


    await expect(
      frames
    ).toHaveCount(
      4
    );


    const geometry =
      await frames.evaluateAll(
        elements =>
          elements.map(
            element => {

              const rect =
                element.getBoundingClientRect();


              return {
                x:
                  rect.x,

                width:
                  rect.width
              };

            }
          )
      );


    const xs =
      geometry.map(
        item =>
          item.x
      );


    const widths =
      geometry.map(
        item =>
          item.width
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
  "AI Security activity V51 reduces the oversized opening composition",
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
      route
    );


    const height =
      await page
        .locator(
          '[data-ai-activity-section="intro"]'
        )
        .evaluate(
          element =>
            element
              .getBoundingClientRect()
              .height
        );


    expect(
      height
    ).toBeLessThan(
      650
    );

  }
);


test(
  "AI Security activity remains distinct from the current course detail",
  async ({
    page
  }) => {

    await page.goto(
      "/training/ai-security-foundations"
    );


    await expect(
      page.locator(
        '[data-ai-security-activity-audit="v51"]'
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.locator(
        '[data-ai-course-detail]'
      )
    ).toBeVisible();

  }
);


test(
  "other activity detail routes remain isolated from V51",
  async ({
    page
  }) => {

    await page.goto(
      "/activities/red-team-foundations-2026"
    );


    await expect(
      page.locator(
        '[data-ai-security-activity-audit="v51"]'
      )
    ).toHaveCount(
      0
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
        "1440",
      width:
        1440,
      height:
        900
    }
  ]
) {

  test(
    `AI Security activity V51 remains contained at ${viewport.label}`,
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
        route
      );


      await expect(
        page.locator(
          '[data-ai-security-activity-audit="v51"]'
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
