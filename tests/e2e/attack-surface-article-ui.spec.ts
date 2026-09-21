import {
  expect,
  test,
  type Locator,
  type Page
} from "@playwright/test";


const routes = [
  "/insights/authorization-is-a-system-not-a-checkbox",
  "/insights/attack-surface-mapping-before-exploitation",
  "/insights/prompt-injection-matters-when-ai-can-act",
  "/insights/manual-reasoning-in-web-security-testing"
];


function articleClass(
  name: string
) {
  return (
    `[class*="article-module"][class*="${name}"]`
  );
}


async function waitForStableBox(
  locator: Locator
) {
  await expect(
    locator
  ).toBeVisible();


  await expect
    .poll(
      async () => {
        const box =
          await locator.boundingBox();


        if (!box) {
          return {
            width:
              0,

            height:
              0
          };
        }


        return {
          width:
            Math.round(
              box.width
            ),

          height:
            Math.round(
              box.height
            )
        };
      },
      {
        timeout:
          5000,

        intervals: [
          50,
          100,
          150
        ]
      }
    )
    .toEqual(
      expect.objectContaining({
        width:
          expect.any(
            Number
          ),

        height:
          expect.any(
            Number
          )
      })
    );


  await expect
    .poll(
      async () => {
        const box =
          await locator.boundingBox();


        return (
          box &&
          box.width >
            0 &&
          box.height >
            0
        );
      },
      {
        timeout:
          5000,

        intervals: [
          50,
          100,
          150
        ]
      }
    )
    .toBe(
      true
    );


  const first =
    await locator.boundingBox();


  if (!first) {
    throw new Error(
      "Element became unavailable after visibility synchronization"
    );
  }


  await locator.page().waitForTimeout(
    75
  );


  const second =
    await locator.boundingBox();


  if (!second) {
    throw new Error(
      "Element became unavailable during geometry stabilization"
    );
  }


  /*
   * We do not require pixel-perfect equality because fonts and fractional
   * layout calculations can legitimately differ by tiny values.
   */

  expect(
    Math.abs(
      first.width -
      second.width
    )
  ).toBeLessThanOrEqual(
    2
  );


  expect(
    Math.abs(
      first.height -
      second.height
    )
  ).toBeLessThanOrEqual(
    2
  );


  return second;
}


async function waitForInsightReady(
  page: Page,
  slug: string
) {
  const shell =
    page.locator(
      `[data-insight-article="${slug}"]`
    );


  await expect(
    shell
  ).toBeVisible();


  await expect(
    page.locator(
      "#main-content h1"
    ).first()
  ).toBeVisible();


  const layout =
    shell
      .locator(
        articleClass(
          "layout"
        )
      )
      .first();


  const toc =
    shell
      .locator(
        articleClass(
          "toc"
        )
      )
      .first();


  const content =
    shell
      .locator(
        articleClass(
          "content"
        )
      )
      .first();


  const meta =
    shell
      .locator(
        articleClass(
          "metaSide"
        )
      )
      .first();


  await expect(
    layout
  ).toBeVisible();


  await expect(
    toc
  ).toBeVisible();


  await expect(
    content
  ).toBeVisible();


  await expect(
    meta
  ).toBeVisible();


  return {
    shell,
    layout,
    toc,
    content,
    meta
  };
}


test(
  "all insight details use the shared editorial architecture",
  async ({
    page
  }) => {
    for (
      const route
      of routes
    ) {
      await page.goto(
        route,
        {
          waitUntil:
            "domcontentloaded"
        }
      );


      const slug =
        route
          .split(
            "/"
          )
          .at(
            -1
          );


      if (!slug) {
        throw new Error(
          "Missing insight slug"
        );
      }


      await waitForInsightReady(
        page,
        slug
      );
    }
  }
);


test(
  "desktop places contents left research center and information right",
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
      "/insights/attack-surface-mapping-before-exploitation",
      {
        waitUntil:
          "domcontentloaded"
      }
    );


    const {
      toc,
      content,
      meta
    } =
      await waitForInsightReady(
        page,
        "attack-surface-mapping-before-exploitation"
      );


    /*
     * Synchronize on visible measurable layout instead of immediately asking
     * Playwright for bounding boxes after navigation.
     */

    const tocBox =
      await waitForStableBox(
        toc
      );

    const contentBox =
      await waitForStableBox(
        content
      );

    const metaBox =
      await waitForStableBox(
        meta
      );


    expect(
      tocBox.x
    ).toBeLessThan(
      contentBox.x
    );


    expect(
      contentBox.x
    ).toBeLessThan(
      metaBox.x
    );


    expect(
      tocBox.width
    ).toBeGreaterThanOrEqual(
      150
    );


    expect(
      tocBox.width
    ).toBeLessThanOrEqual(
      215
    );


    expect(
      contentBox.width
    ).toBeGreaterThanOrEqual(
      650
    );


    expect(
      contentBox.width
    ).toBeLessThanOrEqual(
      730
    );


    expect(
      metaBox.width
    ).toBeGreaterThanOrEqual(
      150
    );


    expect(
      metaBox.width
    ).toBeLessThanOrEqual(
      215
    );
  }
);


test(
  "research prose uses a readable desktop measure",
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
      "/insights/attack-surface-mapping-before-exploitation",
      {
        waitUntil:
          "domcontentloaded"
      }
    );


    const {
      content
    } =
      await waitForInsightReady(
        page,
        "attack-surface-mapping-before-exploitation"
      );


    await waitForStableBox(
      content
    );


    const paragraphs =
      content.locator(
        articleClass(
          "paragraph"
        )
      );


    expect(
      await paragraphs.count()
    ).toBeGreaterThanOrEqual(
      3
    );


    const widths =
      await paragraphs.evaluateAll(
        (
          elements
        ) =>
          elements
            .filter(
              (
                element
              ) => {
                const rect =
                  element
                    .getBoundingClientRect();


                return (
                  rect.width >
                    0
                  &&
                  rect.height >
                    0
                  &&
                  (
                    element.textContent
                      ?.trim()
                      .length ??
                    0
                  )
                  >=
                  60
                );
              }
            )
            .map(
              (
                element
              ) =>
                element
                  .getBoundingClientRect()
                  .width
            )
      );


    expect(
      widths.length
    ).toBeGreaterThanOrEqual(
      2
    );


    const maximum =
      Math.max(
        ...widths
      );


    expect(
      maximum
    ).toBeGreaterThanOrEqual(
      600
    );


    expect(
      maximum
    ).toBeLessThanOrEqual(
      710
    );
  }
);


test(
  "article sections are flat and visually separated",
  async ({
    page
  }) => {
    await page.goto(
      "/insights/attack-surface-mapping-before-exploitation",
      {
        waitUntil:
          "domcontentloaded"
      }
    );


    const {
      shell
    } =
      await waitForInsightReady(
        page,
        "attack-surface-mapping-before-exploitation"
      );


    const sections =
      shell.locator(
        articleClass(
          "section"
        )
      );


    expect(
      await sections.count()
    ).toBeGreaterThanOrEqual(
      2
    );


    await expect(
      sections.first()
    ).toBeVisible();


    const values =
      await sections.evaluateAll(
        (
          elements
        ) =>
          elements
            .filter(
              (
                element
              ) => {
                const rect =
                  element
                    .getBoundingClientRect();


                return (
                  rect.width >
                    0
                  &&
                  rect.height >
                    0
                );
              }
            )
            .map(
              (
                element
              ) => {
                const style =
                  getComputedStyle(
                    element
                  );


                return {
                  radius:
                    Number.parseFloat(
                      style.borderRadius
                    ),

                  width:
                    element
                      .getBoundingClientRect()
                      .width
                };
              }
            )
      );


    expect(
      values.length
    ).toBeGreaterThanOrEqual(
      2
    );


    for (
      const value
      of values
    ) {
      expect(
        value.radius
      ).toBeLessThanOrEqual(
        1
      );


      expect(
        value.width
      ).toBeGreaterThan(
        600
      );
    }
  }
);


test(
  "mobile uses contents then article then metadata",
  async ({
    page
  }) => {
    await page.setViewportSize({
      width:
        390,

      height:
        844
    });


    await page.goto(
      "/insights/attack-surface-mapping-before-exploitation",
      {
        waitUntil:
          "domcontentloaded"
      }
    );


    const {
      toc,
      content,
      meta
    } =
      await waitForInsightReady(
        page,
        "attack-surface-mapping-before-exploitation"
      );


    const tocBox =
      await waitForStableBox(
        toc
      );

    const contentBox =
      await waitForStableBox(
        content
      );

    const metaBox =
      await waitForStableBox(
        meta
      );


    expect(
      tocBox.y
    ).toBeLessThan(
      contentBox.y
    );


    expect(
      contentBox.y
    ).toBeLessThan(
      metaBox.y
    );


    expect(
      contentBox.width
    ).toBeGreaterThan(
      320
    );


    expect(
      contentBox.width
    ).toBeLessThanOrEqual(
      390
    );


    const overflow =
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
      overflow.scrollWidth
    ).toBeLessThanOrEqual(
      overflow.clientWidth +
      1
    );
  }
);


test(
  "related research stays below and wider than the reading column",
  async ({
    page
  }) => {
    await page.goto(
      "/insights/attack-surface-mapping-before-exploitation",
      {
        waitUntil:
          "domcontentloaded"
      }
    );


    const {
      shell,
      content
    } =
      await waitForInsightReady(
        page,
        "attack-surface-mapping-before-exploitation"
      );


    const related =
      shell
        .locator(
          articleClass(
            "relatedSection"
          )
        )
        .first();


    await expect(
      related
    ).toBeVisible();


    const contentBox =
      await waitForStableBox(
        content
      );

    const relatedBox =
      await waitForStableBox(
        related
      );


    expect(
      relatedBox.y
    ).toBeGreaterThan(
      contentBox.y
    );


    expect(
      relatedBox.width
    ).toBeGreaterThan(
      contentBox.width
    );
  }
);
