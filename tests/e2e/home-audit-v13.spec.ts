import {
  expect,
  test
} from "@playwright/test";


test(
  "V13 preserves the eight-chapter homepage",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );

    await expect(
      page.locator(
        '[data-home-correction="audit-v13"]'
      )
    ).toBeVisible();

    await expect(
      page.locator(
        "[data-home-chapter]"
      )
    ).toHaveCount(
      8
    );

    await expect(
      page.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Security assessments and practical training."
        }
      )
    ).toBeVisible();

    await expect(
      page.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Meet the founder."
        }
      )
    ).toBeVisible();

    await expect(
      page.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Practical security insights."
        }
      )
    ).toBeVisible();

  }
);


test(
  "Academy uses truthful comparable metadata",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        1440,
      height:
        1000
    });

    await page.goto(
      "/"
    );

    const training =
      page.locator(
        '[data-home-chapter="training"]'
      );

    const cards =
      training.locator(
        "[data-home-program]"
      );

    await expect(
      cards
    ).toHaveCount(
      3
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

      await expect(
        card.getByText(
          "Level",
          {
            exact:
              true
          }
        )
      ).toBeVisible();

      await expect(
        card.getByText(
          "Format",
          {
            exact:
              true
          }
        )
      ).toBeVisible();

      await expect(
        card.getByText(
          "Duration",
          {
            exact:
              true
          }
        )
      ).toBeVisible();

    }

    await expect(
      training.getByText(
        "Not specified",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    const geometry =
      await cards.evaluateAll(
        (
          elements
        ) =>
          elements.map(
            (
              element
            ) => {

              const metadata =
                element.querySelector(
                  "dl"
                );

              const action =
                element.querySelector(
                  'a[href^="/training/"]'
                );

              return {
                metadata:
                  metadata
                    ?.getBoundingClientRect()
                    .top
                  ??
                  null,

                action:
                  action
                    ?.getBoundingClientRect()
                    .top
                  ??
                  null
              };

            }
          )
      );


    const metadata =
      geometry
        .map(
          (
            item
          ) =>
            item.metadata
        )
        .filter(
          (
            value
          ): value is number =>
            value
            !==
            null
        );


    const actions =
      geometry
        .map(
          (
            item
          ) =>
            item.action
        )
        .filter(
          (
            value
          ): value is number =>
            value
            !==
            null
        );


    expect(
      metadata
    ).toHaveLength(
      3
    );

    expect(
      actions
    ).toHaveLength(
      3
    );


    expect(
      Math.max(
        ...metadata
      )
      -
      Math.min(
        ...metadata
      )
    ).toBeLessThanOrEqual(
      12
    );


    expect(
      Math.max(
        ...actions
      )
      -
      Math.min(
        ...actions
      )
    ).toBeLessThanOrEqual(
      12
    );

  }
);


test(
  "curriculum preview is one five-row learning component",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );

    const preview =
      page.locator(
        '[data-home-curriculum-preview="true"]'
      );

    await expect(
      preview
    ).toBeVisible();

    await expect(
      preview.getByText(
        /See how Red Team Foundations progresses from reconnaissance to privilege escalation/i
      )
    ).toBeVisible();

    await expect(
      preview.locator(
        "ol > li"
      )
    ).toHaveCount(
      5
    );

  }
);


test(
  "public work descriptions explain their destinations",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );

    await expect(
      page.getByText(
        /Explore CR4CKOUT, technical activities and past events from the No Breach community/i
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        "Explore training and community activities.",
        {
          exact:
            true
        }
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        "Explore past No Breach events, including CR4CKOUT 2.0.",
        {
          exact:
            true
        }
      )
    ).toBeVisible();

  }
);


test(
  "footer uses Training terminology",
  async ({
    page
  }) => {

    await page.goto(
      "/"
    );

    const footer =
      page.locator(
        "footer"
      );

    await expect(
      footer.getByRole(
        "link",
        {
          name:
            "Training",
          exact:
            true
        }
      )
    ).toHaveAttribute(
      "href",
      "/training"
    );

    await expect(
      footer.getByRole(
        "link",
        {
          name:
            "Training Hub",
          exact:
            true
        }
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
      name:
        "320",
      width:
        320,
      height:
        800
    },
    {
      name:
        "390",
      width:
        390,
      height:
        844
    },
    {
      name:
        "768",
      width:
        768,
      height:
        1024
    }
  ]
) {

  test(
    `V13 remains contained at ${viewport.name}`,
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
        "/"
      );

      const widths =
        await page.evaluate(
          () => ({
            scroll:
              document.documentElement.scrollWidth,
            client:
              document.documentElement.clientWidth
          })
        );

      expect(
        widths.scroll
      ).toBeLessThanOrEqual(
        widths.client
        +
        1
      );

    }
  );

}
