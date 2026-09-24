import {
  expect,
  test
} from "@playwright/test";


test(
  "Training Hub V26 renders the cybersecurity learning range",
  async ({
    page
  }) => {

    await page.goto(
      "/training"
    );


    await expect(
      page.locator(
        '[data-training-hub-design="v26"]'
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
      page.locator(
        '[data-training-ui="practice-loop"]'
      )
    ).toBeVisible();

  }
);


test(
  "Training Hub V26 renders the canonical public programs",
  async ({
    page
  }) => {

    await page.goto(
      "/training"
    );


    const index =
      page.locator(
        '[data-training-ui="program-index"]'
      );


    await index
      .scrollIntoViewIfNeeded();


    const rows =
      index.locator(
        '[data-training-program]'
      );


    expect(
      await rows.count()
    ).toBeGreaterThan(
      0
    );


    for (
      const href
      of [
        "/training/red-team-foundations",
        "/training/web-exploitation-techniques",
        "/training/ai-security-foundations"
      ]
    ) {

      const link =
        index.locator(
          `a[href="${href}"]`
        );


      await expect(
        link
      ).toHaveCount(
        1
      );


      await expect(
        link
      ).toBeVisible();

    }

  }
);


test(
  "Training Hub V26 exposes valid public program statuses",
  async ({
    page
  }) => {

    await page.goto(
      "/training"
    );


    const statuses =
      await page
        .locator(
          '[data-training-program]'
        )
        .evaluateAll(
          (
            rows
          ) =>
            rows.map(
              (
                row
              ) =>
                row.textContent
                ??
                ""
            )
        );


    const allowed =
      [
        "AVAILABLE",
        "UPCOMING",
        "ARCHIVED"
      ];


    for (
      const text
      of statuses
    ) {

      expect(
        allowed.some(
          (
            status
          ) =>
            text.includes(
              status
            )
        )
      ).toBeTruthy();

    }

  }
);


test(
  "Training Hub V26 presents philosophy and learning flow",
  async ({
    page
  }) => {

    await page.goto(
      "/training"
    );


    const section =
      page.locator(
        '[data-training-section="learning-model"]'
      );


    await section
      .scrollIntoViewIfNeeded();


    await expect(
      section.locator(
        '[data-training-ui="philosophy"]'
      )
    ).toBeVisible();


    await expect(
      section.locator(
        '[data-training-ui="learning-flow"]'
      )
    ).toBeVisible();


    for (
      const label
      of [
        "Understand",
        "Practice",
        "Validate",
        "Explain",
        "Repeat"
      ]
    ) {

      await expect(
        section.getByText(
          label,
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
  "Training Hub V26 keeps learner and organization journeys distinct",
  async ({
    page
  }) => {

    await page.goto(
      "/training"
    );


    const cta =
      page.locator(
        '[data-training-section="cta"]'
      );


    await cta
      .scrollIntoViewIfNeeded();


    await expect(
      cta.getByRole(
        "link",
        {
          name:
            /Organization training/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/services/security-training"
    );


    await expect(
      cta.getByRole(
        "link",
        {
          name:
            "Contact",

          exact:
            true
        }
      )
    ).toHaveAttribute(
      "href",
      "/contact"
    );

  }
);


for (
  const viewport
  of [
    {
      name:
        "desktop",

      width:
        1440,

      height:
        900
    },
    {
      name:
        "compact",

      width:
        1180,

      height:
        820
    },
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
    },
    {
      name:
        "narrow",

      width:
        360,

      height:
        800
    }
  ]
) {

  test(
    `Training Hub V26 remains contained at ${viewport.name}`,
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


      const heading =
        page.getByRole(
          "heading",
          {
            level:
              1,

            name:
              "Learn cybersecurity by doing cybersecurity."
          }
        );


      await expect(
        heading
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
        metrics.clientWidth
        +
        1
      );


      if (
        viewport.width
        <=
        390
      ) {

        const box =
          await heading.boundingBox();


        if (!box) {

          throw new Error(
            "Training Hub V26 mobile H1 geometry unavailable"
          );

        }


        expect(
          box.y
        ).toBeLessThan(
          200
        );

      }

    }
  );

}
