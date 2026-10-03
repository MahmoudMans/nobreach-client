import {
  expect,
  test
} from "@playwright/test";


const ROUTE =
  "/insights/authorization-is-a-system-not-a-checkbox";


test(
  "Authorization article renders the V80 editorial refinement",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const root =
      page.locator(
        '[data-authorization-insight-design="v51"]'
      );


    await expect(
      root
    ).toHaveAttribute(
      "data-authorization-insight-redesign",
      "v80"
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
    ).toHaveCount(
      1
    );

  }
);


test(
  "V80 preserves the complete reading frame",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const reading =
      page.locator(
        '[data-insight-section="reading"]'
      );


    await expect(
      reading.getByRole(
        "navigation",
        {
          name:
            "Article contents"
        }
      )
    ).toBeVisible();


    await expect(
      reading.locator(
        '[data-article-research="true"]'
      )
    ).toBeVisible();


    await expect(
      reading.getByLabel(
        "Article information"
      )
    ).toBeVisible();

  }
);


test(
  "all four canonical research chapters remain visible",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    for (
      const heading
      of [
        "Authorization begins with a model",
        "A valid request can still be unauthorized",
        "Think in authorization matrices",
        "Business context determines impact"
      ]
    ) {

      await expect(
        page.getByRole(
          "heading",
          {
            level: 2,
            name:
              heading
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "contents still links to every canonical chapter",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const contents =
      page.getByRole(
        "navigation",
        {
          name:
            "Article contents"
        }
      );


    const targets = [
      "authorization-model",
      "valid-request-wrong-user",
      "authorization-matrix",
      "business-context"
    ];


    for (
      const id
      of targets
    ) {

      await expect(
        contents.locator(
          `a[href="#${id}"]`
        )
      ).toHaveCount(
        1
      );


      await expect(
        page.locator(
          `#${id}`
        )
      ).toHaveCount(
        1
      );

    }

  }
);


test(
  "related training exposes its real destination title",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const training =
      page.locator(
        'a[href="/training/web-exploitation-techniques"]'
      );


    await expect(
      training
    ).toBeVisible();


    await expect(
      training
    ).toContainText(
      "Related training"
    );


    await expect(
      training
    ).toContainText(
      "Web Exploitation Techniques"
    );

  }
);


test(
  "related research and final actions form one visual continuation",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width: 1440,
      height: 900
    });


    await page.goto(
      ROUTE
    );


    const related =
      page.locator(
        '[data-authorization-continuation="research"]'
      );


    const actions =
      page.locator(
        '[data-authorization-continuation="actions"]'
      );


    const [
      relatedBox,
      actionsBox,
      relatedBackground,
      actionsBackground
    ] =
      await Promise.all([
        related.boundingBox(),
        actions.boundingBox(),

        related.evaluate(
          element =>
            getComputedStyle(
              element
            ).backgroundColor
        ),

        actions.evaluate(
          element =>
            getComputedStyle(
              element
            ).backgroundColor
        )
      ]);


    expect(
      relatedBox
    ).not.toBeNull();

    expect(
      actionsBox
    ).not.toBeNull();


    if (
      !relatedBox
      ||
      !actionsBox
    ) {

      return;

    }


    expect(
      Math.abs(
        actionsBox.y
        -
        (
          relatedBox.y
          +
          relatedBox.height
        )
      )
    ).toBeLessThanOrEqual(
      2
    );


    expect(
      actionsBackground
    ).toBe(
      relatedBackground
    );


    expect(
      actionsBox.height
    ).toBeLessThan(
      460
    );

  }
);


test(
  "article section titles remain editorial rather than hero-scale",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width: 1440,
      height: 900
    });


    await page.goto(
      ROUTE
    );


    const heading =
      page.getByRole(
        "heading",
        {
          level: 2,
          name:
            "Authorization begins with a model"
        }
      );


    const size =
      await heading.evaluate(
        element =>
          Number.parseFloat(
            getComputedStyle(
              element
            ).fontSize
          )
      );


    expect(
      size
    ).toBeLessThanOrEqual(
      52
    );

  }
);


test(
  "V80 keeps the reading article horizontally contained",
  async ({
    page
  }) => {

    const viewports = [
      {
        width: 1440,
        height: 900
      },
      {
        width: 1024,
        height: 768
      },
      {
        width: 768,
        height: 900
      },
      {
        width: 390,
        height: 844
      },
      {
        width: 320,
        height: 760
      }
    ];


    for (
      const viewport
      of viewports
    ) {

      await page.setViewportSize(
        viewport
      );


      await page.goto(
        ROUTE
      );


      const overflow =
        await page.evaluate(
          () =>
            document.documentElement.scrollWidth
            -
            document.documentElement.clientWidth
        );


      expect(
        overflow
      ).toBeLessThanOrEqual(
        1
      );

    }

  }
);


test(
  "V83 keeps Contents Research Information as a visible mobile stack",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width: 390,
      height: 844
    });


    await page.goto(
      ROUTE
    );


    const contents =
      page.getByRole(
        "navigation",
        {
          name:
            "Article contents"
        }
      );


    const research =
      page.locator(
        '[data-article-research="true"]'
      );


    const information =
      page.getByLabel(
        "Article information"
      );


    await expect(
      contents
    ).toBeVisible();


    await expect(
      research
    ).toBeVisible();


    await expect(
      information
    ).toBeVisible();


    const geometry =
      await page.evaluate(
        () => {

          const contentsElement =
            document.querySelector(
              'nav[aria-label="Article contents"]'
            );

          const researchElement =
            document.querySelector(
              '[data-article-research="true"]'
            );

          const informationElement =
            document.querySelector(
              '[aria-label="Article information"]'
            );


          if (
            !contentsElement
            ||
            !researchElement
            ||
            !informationElement
          ) {

            return null;

          }


          const contentsRect =
            contentsElement.getBoundingClientRect();

          const researchRect =
            researchElement.getBoundingClientRect();

          const informationRect =
            informationElement.getBoundingClientRect();


          return {
            contents: {
              x:
                contentsRect.x,

              y:
                contentsRect.y,

              width:
                contentsRect.width,

              height:
                contentsRect.height
            },

            research: {
              x:
                researchRect.x,

              y:
                researchRect.y,

              width:
                researchRect.width,

              height:
                researchRect.height
            },

            information: {
              x:
                informationRect.x,

              y:
                informationRect.y,

              width:
                informationRect.width,

              height:
                informationRect.height
            }
          };

        }
      );


    expect(
      geometry
    ).not.toBeNull();


    if (
      !geometry
    ) {

      return;

    }


    expect(
      geometry.contents.width
    ).toBeGreaterThan(
      250
    );


    expect(
      geometry.research.width
    ).toBeGreaterThan(
      250
    );


    expect(
      geometry.information.width
    ).toBeGreaterThan(
      250
    );


    expect(
      geometry.contents.height
    ).toBeGreaterThan(
      0
    );


    expect(
      geometry.research.height
    ).toBeGreaterThan(
      0
    );


    expect(
      geometry.information.height
    ).toBeGreaterThan(
      0
    );


    expect(
      geometry.contents.y
    ).toBeLessThan(
      geometry.research.y
    );


    expect(
      geometry.research.y
    ).toBeLessThan(
      geometry.information.y
    );

  }
);
