import {
  expect,
  test
} from "@playwright/test";


const ROUTE =
  "/insights/manual-reasoning-in-web-security-testing";


test(
  "Manual Reasoning renders the V100 refinement on V55",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const root =
      page.locator(
        '[data-manual-reasoning-insight-design="v55"]'
      );


    await expect(
      root
    ).toHaveAttribute(
      "data-manual-reasoning-insight-redesign",
      "v100"
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
  "V100 exposes five semantic manual-testing stages",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const loop =
      page.getByRole(
        "list",
        {
          name:
            "Manual testing loop"
        }
      );


    await expect(
      loop
    ).toBeVisible();


    const steps =
      loop.getByRole(
        "listitem"
      );


    await expect(
      steps
    ).toHaveCount(
      5
    );


    for (
      const stage
      of [
        "OBSERVE",
        "HYPOTHESIZE",
        "PROBE",
        "INTERPRET",
        "ITERATE"
      ]
    ) {

      await expect(
        loop.getByText(
          stage,
          {
            exact: true
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "V100 keeps the five manual-testing stages equal on desktop",
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


    const loop =
      page.getByRole(
        "list",
        {
          name:
            "Manual testing loop"
        }
      );


    const steps =
      loop.getByRole(
        "listitem"
      );


    const widths: number[] =
      [];


    for (
      let index = 0;
      index < 5;
      index += 1
    ) {

      const box =
        await steps
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

    }


    expect(
      widths
    ).toHaveLength(
      5
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
      3
    );

  }
);


test(
  "V100 makes Notebook Index persistent and Testing Context static",
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
            "Authorization needs context"
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
  "V100 renders three related articles as full-width editorial rows",
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
        '[data-manual-reasoning-related="v100"]'
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
  "V100 makes related research and final action one visual continuation",
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
        '[data-manual-reasoning-continuation="research"]'
      );


    const actions =
      page.locator(
        '[data-manual-reasoning-continuation="actions"]'
      );


    const [
      researchBox,
      actionsBox,
      researchBackground,
      actionsBackground
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
      actionsBackground
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
            /explore web testing/i
        }
      )
    ).toBeVisible();

  }
);


test(
  "V100 compacts intro loop and final action without shrinking the H1",
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

          const loop =
            document.querySelector(
              '[data-insight-section="reasoning-loop"]'
            );

          const finalCta =
            document.querySelector(
              '[data-insight-section="final-cta"]'
            );

          const h1 =
            intro?.querySelector(
              "h1"
            );


          if (
            !intro
            ||
            !loop
            ||
            !finalCta
            ||
            !h1
          ) {

            return null;

          }


          const introStyle =
            getComputedStyle(
              intro
            );

          const loopStyle =
            getComputedStyle(
              loop
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

            loopTop:
              parseFloat(
                loopStyle.paddingTop
              ),

            loopBottom:
              parseFloat(
                loopStyle.paddingBottom
              ),

            h1Font:
              parseFloat(
                getComputedStyle(
                  h1
                ).fontSize
              ),

            finalHeight:
              finalCta.getBoundingClientRect().height
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
      84
    );


    expect(
      geometry.loopTop
    ).toBeLessThanOrEqual(
      76
    );


    expect(
      geometry.loopBottom
    ).toBeLessThanOrEqual(
      72
    );


    expect(
      geometry.h1Font
    ).toBeGreaterThan(
      60
    );


    expect(
      geometry.finalHeight
    ).toBeLessThan(
      520
    );

  }
);


test(
  "V100 keeps rails in normal flow on mobile and avoids horizontal overflow",
  async ({
    page
  }) => {

    for (
      const viewport
      of [
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


      expect(
        await indexColumn.evaluate(
          element =>
            getComputedStyle(
              element
            ).position
        )
      ).toBe(
        "static"
      );


      expect(
        await information.evaluate(
          element =>
            getComputedStyle(
              element
            ).position
        )
      ).toBe(
        "static"
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
