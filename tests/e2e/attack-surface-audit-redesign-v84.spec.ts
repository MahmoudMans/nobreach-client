import {
  expect,
  test
} from "@playwright/test";


const ROUTE =
  "/insights/attack-surface-mapping-before-exploitation";


test(
  "Attack Surface renders the V84 refinement on the V53 dossier",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const root =
      page.locator(
        '[data-attack-surface-insight-design="v53"]'
      );


    await expect(
      root
    ).toHaveAttribute(
      "data-attack-surface-insight-redesign",
      "v84"
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level: 1,
          name:
            "Attack-surface mapping before exploitation"
        }
      )
    ).toHaveCount(
      1
    );

  }
);


test(
  "recon workflow exposes five semantic ordered items",
  async ({
    page
  }) => {

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


    await expect(
      workflow
    ).toBeVisible();


    const items =
      workflow.getByRole(
        "listitem"
      );


    await expect(
      items
    ).toHaveCount(
      5
    );


    for (
      const text
      of [
        "OBSERVE",
        "ENUMERATE",
        "RELATE",
        "VERIFY",
        "PRIORITIZE"
      ]
    ) {

      await expect(
        workflow
      ).toContainText(
        text
      );

    }

  }
);


test(
  "workflow axis is decorative while step content remains accessible",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    await expect(
      page.locator(
        '[data-attack-surface-axis="decorative"]'
      )
    ).toHaveAttribute(
      "aria-hidden",
      "true"
    );


    await expect(
      page.getByRole(
        "list",
        {
          name:
            "Reconnaissance workflow"
        }
      )
    ).toBeVisible();

  }
);


test(
  "Field Index research and dossier information remain intact",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


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
        '[data-article-research="true"]'
      )
    ).toBeVisible();


    await expect(
      page.getByLabel(
        "Article information"
      )
    ).toBeVisible();

  }
);


test(
  "research dispatches are three full-width editorial rows",
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
        '[data-attack-surface-dispatches="v84"]'
      );


    const rows =
      dispatches.locator(
        'a[href^="/insights/"]'
      );


    await expect(
      rows
    ).toHaveCount(
      3
    );


    const containerBox =
      await dispatches.boundingBox();


    expect(
      containerBox
    ).not.toBeNull();


    if (
      !containerBox
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
        containerBox.width
      ).toBeGreaterThan(
        0.9
      );

    }

  }
);


test(
  "dispatches and end-of-dossier actions form one visual continuation",
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
      dispatchBox,
      actionsBox,
      dispatchBackground,
      actionsBackground
    ] =
      await Promise.all([
        dispatches.boundingBox(),
        actions.boundingBox(),

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
        )
      ]);


    expect(
      dispatchBox
    ).not.toBeNull();

    expect(
      actionsBox
    ).not.toBeNull();


    if (
      !dispatchBox
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
          dispatchBox.y
          +
          dispatchBox.height
        )
      )
    ).toBeLessThanOrEqual(
      2
    );


    expect(
      actionsBackground
    ).toBe(
      dispatchBackground
    );


    expect(
      actionsBox.height
    ).toBeLessThan(
      480
    );

  }
);


test(
  "only one Research index action remains",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    await expect(
      page.getByRole(
        "link",
        {
          name:
            /research index/i
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
  "V84 remains horizontally contained",
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
