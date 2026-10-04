import {
  expect,
  test
} from "@playwright/test";


const ROUTE =
  "/insights/prompt-injection-matters-when-ai-can-act";


test(
  "Prompt Injection renders the V96 refinement on V54",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const root =
      page.locator(
        '[data-prompt-injection-insight-design="v54"]'
      );


    await expect(
      root
    ).toHaveAttribute(
      "data-prompt-injection-insight-redesign",
      "v96"
    );


    await expect(
      root.locator(
        "h1"
      )
    ).toHaveCount(
      1
    );

  }
);


test(
  "V96 exposes four semantic AI action stages",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const path =
      page.getByRole(
        "list",
        {
          name:
            "AI action path"
        }
      );


    await expect(
      path
    ).toBeVisible();


    const stages =
      path.getByRole(
        "listitem"
      );


    await expect(
      stages
    ).toHaveCount(
      4
    );


    for (
      const label
      of [
        "PROMPT",
        "MODEL",
        "TOOL",
        "ACTION"
      ]
    ) {

      await expect(
        path.getByText(
          label,
          {
            exact: true
          }
        )
      ).toBeVisible();

    }


    await expect(
      path.getByText(
        "ACTION BOUNDARY",
        {
          exact: true
        }
      )
    ).toBeVisible();

  }
);


test(
  "V96 keeps Article Contents persistent and Article Information static",
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


    const contents =
      page.getByRole(
        "navigation",
        {
          name:
            "Article contents"
        }
      );


    const indexColumn =
      contents.locator(
        ".."
      );


    const information =
      page.getByLabel(
        "Article information"
      );


    const informationInner =
      information
        .locator(
          ":scope > div"
        )
        .first();


    const positions =
      await Promise.all([
        indexColumn.evaluate(
          element =>
            getComputedStyle(
              element
            ).position
        ),

        contents.evaluate(
          element =>
            getComputedStyle(
              element
            ).position
        ),

        information.evaluate(
          element =>
            getComputedStyle(
              element
            ).position
        ),

        informationInner.evaluate(
          element =>
            getComputedStyle(
              element
            ).position
        )
      ]);


    expect(
      positions[0]
    ).toBe(
      "sticky"
    );


    expect(
      positions[1]
    ).toBe(
      "static"
    );


    expect(
      positions[2]
    ).toBe(
      "static"
    );


    expect(
      positions[3]
    ).toBe(
      "static"
    );


    await page
      .getByRole(
        "heading",
        {
          name:
            "Limit the authority of AI actions"
        }
      )
      .scrollIntoViewIfNeeded();


    await page.waitForTimeout(
      50
    );


    await expect(
      contents
    ).toBeVisible();

  }
);


test(
  "V96 renders related research as three full-width rows",
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


    const list =
      page.locator(
        '[data-prompt-injection-related="v96"]'
      );


    const rows =
      list.locator(
        ':scope > a[href^="/insights/"]'
      );


    await expect(
      rows
    ).toHaveCount(
      3
    );


    const listBox =
      await list.boundingBox();


    expect(
      listBox
    ).not.toBeNull();


    if (
      !listBox
    ) {

      return;

    }


    for (
      let index = 0;
      index < 3;
      index += 1
    ) {

      const box =
        await rows
          .nth(
            index
          )
          .boundingBox();


      expect(
        box
      ).not.toBeNull();


      if (
        !box
      ) {

        continue;

      }


      expect(
        box.width
        /
        listBox.width
      ).toBeGreaterThan(
        0.9
      );

    }

  }
);


test(
  "V96 makes related research and final action one continuation",
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


    const research =
      page.locator(
        '[data-prompt-injection-continuation="research"]'
      );


    const actions =
      page.locator(
        '[data-prompt-injection-continuation="actions"]'
      );


    const [
      researchBox,
      actionsBox,
      researchBackground,
      actionBackground
    ] =
      await Promise.all([
        research.boundingBox(),
        actions.boundingBox(),

        research.evaluate(
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
      researchBox
    ).not.toBeNull();


    expect(
      actionsBox
    ).not.toBeNull();


    if (
      !researchBox
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
          researchBox.y
          +
          researchBox.height
        )
      )
    ).toBeLessThanOrEqual(
      2
    );


    expect(
      actionBackground
    ).toBe(
      researchBackground
    );


    await expect(
      page.getByRole(
        "link",
        {
          name:
            "All insights",
          exact:
            true
        }
      )
    ).toHaveCount(
      1
    );


    await expect(
      page.getByRole(
        "link",
        {
          name:
            /explore services/i
        }
      )
    ).toBeVisible();

  }
);


test(
  "V96 uses compact intro and action-boundary rhythm without shrinking the H1",
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


    const geometry =
      await page.evaluate(
        () => {

          const intro =
            document.querySelector(
              '[data-insight-section="intro"]'
            );

          const boundary =
            document.querySelector(
              '[data-insight-section="action-boundary"]'
            );

          const h1 =
            intro?.querySelector(
              "h1"
            );


          if (
            !intro
            ||
            !boundary
            ||
            !h1
          ) {

            return null;

          }


          const introStyle =
            getComputedStyle(
              intro
            );

          const boundaryStyle =
            getComputedStyle(
              boundary
            );


          return {
            introTop:
              parseFloat(
                introStyle.paddingTop
              ),

            introBottom:
              parseFloat(
                introStyle.paddingBottom
              ),

            boundaryTop:
              parseFloat(
                boundaryStyle.paddingTop
              ),

            boundaryBottom:
              parseFloat(
                boundaryStyle.paddingBottom
              ),

            h1Font:
              parseFloat(
                getComputedStyle(
                  h1
                ).fontSize
              )
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
      geometry.introTop
    ).toBeLessThanOrEqual(
      76
    );


    expect(
      geometry.introBottom
    ).toBeLessThanOrEqual(
      82
    );


    expect(
      geometry.boundaryTop
    ).toBeLessThanOrEqual(
      76
    );


    expect(
      geometry.boundaryBottom
    ).toBeLessThanOrEqual(
      76
    );


    expect(
      geometry.h1Font
    ).toBeGreaterThan(
      60
    );

  }
);


test(
  "V96 remains horizontally contained",
  async ({
    page
  }) => {

    for (
      const viewport
      of [
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
          height: 1024
        },
        {
          width: 390,
          height: 844
        },
        {
          width: 320,
          height: 760
        }
      ]
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
