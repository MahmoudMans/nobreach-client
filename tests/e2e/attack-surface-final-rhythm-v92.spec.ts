import {
  expect,
  test
} from "@playwright/test";


const ROUTE =
  "/insights/attack-surface-mapping-before-exploitation";


test(
  "V92 gives the five recon stages equal desktop tracks",
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


    const workflow =
      page.getByRole(
        "list",
        {
          name:
            "Reconnaissance workflow"
        }
      );


    const items =
      workflow.getByRole(
        "listitem"
      );


    await expect(
      items
    ).toHaveCount(
      5
    );


    const widths: number[] =
      [];


    for (
      let index = 0;
      index < 5;
      index += 1
    ) {

      const box =
        await items
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


      widths.push(
        box.width
      );


      expect(
        box.width
      ).toBeGreaterThan(
        150
      );

    }


    expect(
      widths
    ).toHaveLength(
      5
    );


    const largest =
      Math.max(
        ...widths
      );

    const smallest =
      Math.min(
        ...widths
      );


    expect(
      largest
      -
      smallest
    ).toBeLessThanOrEqual(
      2.5
    );

  }
);


test(
  "V92 makes Field Index the persistent desktop rail and metadata static",
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


    const indexRail =
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
        indexRail.evaluate(
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
            "Mapping improves prioritization"
        }
      )
      .scrollIntoViewIfNeeded();


    await page.waitForTimeout(
      50
    );


    const contentsBox =
      await contents.boundingBox();


    expect(
      contentsBox
    ).not.toBeNull();


    if (
      !contentsBox
    ) {

      return;

    }


    expect(
      contentsBox.y
    ).toBeGreaterThanOrEqual(
      90
    );


    expect(
      contentsBox.y
    ).toBeLessThan(
      180
    );

  }
);


test(
  "V92 tightens opening and workflow vertical allocation",
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


    const spacing =
      await page.evaluate(
        () => {

          const intro =
            document.querySelector(
              '[data-insight-section="intro"]'
            );

          const workflow =
            document.querySelector(
              '[data-insight-section="surface-model"]'
            );


          if (
            !intro
            ||
            !workflow
          ) {

            return null;

          }


          const introStyle =
            getComputedStyle(
              intro
            );

          const workflowStyle =
            getComputedStyle(
              workflow
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

            workflowTop:
              parseFloat(
                workflowStyle.paddingTop
              ),

            workflowBottom:
              parseFloat(
                workflowStyle.paddingBottom
              )
          };

        }
      );


    expect(
      spacing
    ).not.toBeNull();


    if (
      !spacing
    ) {

      return;

    }


    expect(
      spacing.introTop
    ).toBeLessThanOrEqual(
      76
    );


    expect(
      spacing.introBottom
    ).toBeLessThanOrEqual(
      76
    );


    expect(
      spacing.workflowTop
    ).toBeLessThanOrEqual(
      70
    );


    expect(
      spacing.workflowBottom
    ).toBeLessThanOrEqual(
      64
    );

  }
);


test(
  "V92 preserves the accepted continuation surface",
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


    const dispatches =
      page.locator(
        '[data-attack-surface-continuation="dispatches"]'
      );


    const actions =
      page.locator(
        '[data-attack-surface-continuation="actions"]'
      );


    const [
      dispatchBackground,
      actionBackground,
      dispatchBox,
      actionBox
    ] =
      await Promise.all([
        dispatches.evaluate(
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
        ),

        dispatches.boundingBox(),
        actions.boundingBox()
      ]);


    expect(
      actionBackground
    ).toBe(
      dispatchBackground
    );


    expect(
      dispatchBox
    ).not.toBeNull();


    expect(
      actionBox
    ).not.toBeNull();


    if (
      !dispatchBox
      ||
      !actionBox
    ) {

      return;

    }


    expect(
      Math.abs(
        actionBox.y
        -
        (
          dispatchBox.y
          +
          dispatchBox.height
        )
      )
    ).toBeLessThanOrEqual(
      2
    );

  }
);
