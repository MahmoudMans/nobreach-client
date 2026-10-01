import {
  expect,
  test
} from "@playwright/test";


test(
  "Training Hub V27 opens as a public program comparison experience",
  async ({
    page
  }) => {

    await page.goto(
      "/training"
    );


    await expect(
      page.locator(
        '[data-training-hub-audit="v27"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,
          name:
            "Learn cybersecurity by doing cybersecurity."
        }
      )
    ).toBeVisible();


    await expect(
      page.getByText(
        /Compare their technical focus, stated level, learning format and intended outcomes/i
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "link",
        {
          name:
            /Explore the Security Training Service/
        }
      )
    ).toHaveAttribute(
      "href",
      "/services/security-training"
    );

  }
);


test(
  "Training Hub V27 exposes one three-program comparison catalogue",
  async ({
    page
  }) => {

    await page.goto(
      "/training"
    );


    const cards =
      page.locator(
        '[data-training-program-card]'
      );


    await expect(
      cards
    ).toHaveCount(
      3
    );


    const titles =
      await cards
        .locator(
          "h3"
        )
        .allTextContents();


    expect(
      titles
    ).toEqual([
      "Red Team Foundations",
      "Web Exploitation Techniques",
      "AI Security Foundations"
    ]);

  }
);


test(
  "each program card exposes comparable metadata learning aims and actions",
  async ({
    page
  }) => {

    await page.goto(
      "/training"
    );


    const cards =
      page.locator(
        '[data-training-program-card]'
      );


    for (
      let index = 0;
      index < 3;
      index += 1
    ) {

      const card =
        cards.nth(
          index
        );


      for (
        const label
        of
        [
          "Level",
          "Format",
          "Sessions",
          "Modules",
          "Learning aims"
        ]
      ) {

        await expect(
          card.getByText(
            label,
            {
              exact:
                true
            }
          )
        ).toBeVisible();

      }



      await expect(
        card.getByRole(
          "link",
          {
            name:
              /Explore program/
          }
        )
      ).toBeVisible();


      await expect(
        card.getByRole(
          "link",
          {
            name:
              /Register now/
          }
        )
      ).toBeVisible();

    }


    await expect(
      cards
        .nth(
          1
        )
        .getByText(
          "Not specified",
          {
            exact:
              true
          }
        )
    ).toBeVisible();

  }
);


test(
  "Training Hub V27 retains unique curriculum previews",
  async ({
    page
  }) => {

    await page.goto(
      "/training"
    );


    const curriculum =
      page.locator(
        '[data-training-section="curriculum"]'
      );


    await expect(
      curriculum.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Preview the technical content."
        }
      )
    ).toBeVisible();


    await expect(
      curriculum.getByText(
        /Selected modules · 3 of 8 shown/i
      )
    ).toBeVisible();


    for (
      const title
      of
      [
        "Red Team Foundations",
        "Web Exploitation Techniques",
        "AI Security Foundations"
      ]
    ) {

      await expect(
        curriculum.getByRole(
          "heading",
          {
            level:
              3,
            name:
              title
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "Training Hub V27 keeps one four-stage learning method",
  async ({
    page
  }) => {

    await page.goto(
      "/training"
    );


    const method =
      page.locator(
        '[data-training-ui="learning-method"]'
      );


    await expect(
      method
    ).toBeVisible();


    await expect(
      method.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "How learning progresses."
        }
      )
    ).toBeVisible();


    const steps =
      method.locator(
        "ol > li"
      );


    await expect(
      steps
    ).toHaveCount(
      4
    );


    for (
      const title
      of
      [
        "Understand",
        "Practice",
        "Investigate",
        "Apply"
      ]
    ) {

      await expect(
        method.getByRole(
          "heading",
          {
            level:
              4,
            name:
              title
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "Training Hub V27 keeps FAQ disclosures and organization distinction",
  async ({
    page
  }) => {

    await page.goto(
      "/training"
    );


    const rows =
      page.locator(
        '[data-training-faq]'
      );


    await expect(
      rows
    ).toHaveCount(
      4
    );


    const organizationQuestion =
      rows.filter({
        hasText:
          "Is this the same as training for organizations?"
      });


    await organizationQuestion
      .locator(
        "summary"
      )
      .click();


    await expect(
      organizationQuestion.getByRole(
        "link",
        {
          name:
            /Explore Security Training Service/
        }
      )
    ).toHaveAttribute(
      "href",
      "/services/security-training"
    );

  }
);


test(
  "Training Hub V27 removes duplicate public program presentations",
  async ({
    page
  }) => {

    await page.goto(
      "/training"
    );


    for (
      const removed
      of
      [
        "paths",
        "courses",
        "outcomes"
      ]
    ) {

      await expect(
        page.locator(
          `[data-training-section="${removed}"]`
        )
      ).toHaveCount(
        0
      );

    }

  }
);


test(
  "Training Hub V27 keeps one purposeful section sequence",
  async ({
    page
  }) => {

    await page.goto(
      "/training"
    );


    const order =
      await page
        .locator(
          '[data-training-section]'
        )
        .evaluateAll(
          elements =>
            elements.map(
              element =>
                element.getAttribute(
                  "data-training-section"
                )
            )
        );


    expect(
      order
    ).toEqual([
      "intro",
      "programs",
      "curriculum",
      "faq",
      "cta"
    ]);

  }
);


test(
  "Training Hub V27 uses one shared outer frame",
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
      "/training"
    );


    const frames =
      page.locator(
        '[data-training-frame]'
      );


    await expect(
      frames
    ).toHaveCount(
      5
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
    `Training Hub V27 remains contained at ${viewport.label}`,
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
        "/training"
      );


      await expect(
        page.locator(
          '[data-training-hub-audit="v27"]'
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
