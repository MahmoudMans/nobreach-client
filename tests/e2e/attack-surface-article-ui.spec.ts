import {
  expect,
  test,
  type Locator,
  type Page
} from "@playwright/test";function articleClass(
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


/*
 * NB_AUTHORIZATION_V51_SHARED_TARGET_V1
 *
 * Legacy Insight details continue to use article.module.css.
 * Authorization V51 uses the same editorial information architecture
 * through explicit semantic markers rather than fake legacy classes.
 */
test(
  "all insight details use the shared editorial architecture",
  async ({
    page
  }) => {

    const routes = [
      "/insights/authorization-is-a-system-not-a-checkbox",
      "/insights/attack-surface-mapping-before-exploitation",
      "/insights/prompt-injection-matters-when-ai-can-act",
      "/insights/manual-reasoning-in-web-security-testing"
    ] as const;


    for (
      const route
      of routes
    ) {

      const response =
        await page.goto(
          route,
          {
            waitUntil:
              "domcontentloaded"
          }
        );


      expect(
        response,
        `No response for ${route}`
      ).not.toBeNull();


      expect(
        response?.status(),
        `Unexpected HTTP status for ${route}`
      ).toBeLessThan(
        400
      );


      const slug =
        route
          .split(
            "/"
          )
          .filter(
            Boolean
          )
          .pop();


      expect(
        slug
      ).toBeTruthy();


      const article =
        page.locator(
          `[data-insight-article="${slug}"]`
        );


      await expect(
        article
      ).toHaveCount(
        1
      );


      await expect(
        article
      ).toBeVisible({
        timeout:
          10_000
      });


      if (
        route
        ===
        "/insights/authorization-is-a-system-not-a-checkbox"
      ) {

        const v51 =
          article.locator(
            '[data-authorization-insight-design="v51"]'
          );


        await expect(
          v51
        ).toHaveCount(
          1
        );


        await expect(
          v51
        ).toBeVisible();


        const readingGrid =
          v51.locator(
            '[data-article-reading-grid="true"]'
          );


        await expect(
          readingGrid
        ).toHaveCount(
          1
        );


        await expect(
          readingGrid
        ).toBeVisible();


        await expect(
          v51.getByRole(
            "navigation",
            {
              name:
                "Article contents"
            }
          )
        ).toBeVisible();


        await expect(
          v51.locator(
            '[data-article-research="true"]'
          )
        ).toBeVisible();


        await expect(
          v51.locator(
            '[aria-label="Article information"]'
          )
        ).toBeVisible();


        const sections =
          v51.locator(
            '[data-article-section="true"]'
          );


        await expect
          .poll(
            async () =>
              sections.count(),
            {
              timeout:
                10_000,

              message:
                "V51 should expose canonical editorial sections"
            }
          )
          .toBeGreaterThan(
            0
          );


        continue;

      }


      /*
       * Legacy routes retain the established article.module.css
       * editorial shell. Keep enforcing it here.
       */
      const legacyLayout =
        article
          .locator(
            '[class*="article-module"][class*="layout"]'
          )
          .first();


      await expect(
        legacyLayout
      ).toBeVisible({
        timeout:
          10_000
      });


      const legacyContent =
        article
          .locator(
            '[class*="article-module"][class*="content"]'
          )
          .first();


      await expect(
        legacyContent
      ).toBeVisible({
        timeout:
          10_000
      });


      const legacyMeta =
        article
          .locator(
            '[class*="article-module"][class*="metaSide"]'
          )
          .first();


      await expect(
        legacyMeta
      ).toBeVisible({
        timeout:
          10_000
      });

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


    const response =
      await page.goto(
        "/insights/attack-surface-mapping-before-exploitation",
        {
          waitUntil:
            "domcontentloaded"
        }
      );


    expect(
      response
    ).not.toBeNull();


    expect(
      response?.status()
    ).toBe(
      200
    );


    const root =
      page.locator(
        '[data-attack-surface-insight-design="v52"]'
      );


    await expect(
      root
    ).toBeVisible({
      timeout:
        10_000
    });


    const contents =
      root.getByRole(
        "navigation",
        {
          name:
            "Article contents"
        }
      );


    const research =
      root.locator(
        '[data-article-research="true"]'
      );


    const information =
      root.locator(
        '[aria-label="Article information"]'
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


    await expect
      .poll(
        async () => {

          const [
            contentsBox,
            researchBox,
            informationBox
          ] =
            await Promise.all([
              contents.boundingBox(),
              research.boundingBox(),
              information.boundingBox()
            ]);


          return Boolean(
            contentsBox
            &&
            researchBox
            &&
            informationBox
            &&
            contentsBox.width
            >
            0
            &&
            researchBox.width
            >
            0
            &&
            informationBox.width
            >
            0
          );

        },
        {
          timeout:
            10_000
        }
      )
      .toBe(
        true
      );


    const [
      contentsBox,
      researchBox,
      informationBox
    ] =
      await Promise.all([
        contents.boundingBox(),
        research.boundingBox(),
        information.boundingBox()
      ]);


    expect(
      contentsBox
    ).not.toBeNull();


    expect(
      researchBox
    ).not.toBeNull();


    expect(
      informationBox
    ).not.toBeNull();


    expect(
      contentsBox?.x
      ??
      0
    ).toBeLessThan(
      researchBox?.x
      ??
      0
    );


    expect(
      informationBox?.x
      ??
      0
    ).toBeGreaterThan(
      researchBox?.x
      ??
      0
    );


    expect(
      researchBox?.width
      ??
      0
    ).toBeGreaterThan(
      560
    );


    expect(
      researchBox?.width
      ??
      0
    ).toBeLessThanOrEqual(
      820
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


    const response =
      await page.goto(
        "/insights/attack-surface-mapping-before-exploitation",
        {
          waitUntil:
            "domcontentloaded"
        }
      );


    expect(
      response
    ).not.toBeNull();


    expect(
      response?.status()
    ).toBe(
      200
    );


    const root =
      page.locator(
        '[data-attack-surface-insight-design="v52"]'
      );


    await expect(
      root
    ).toBeVisible({
      timeout:
        10_000
    });


    const research =
      root.locator(
        '[data-article-research="true"]'
      );


    await expect(
      research
    ).toBeVisible();


    const researchBox =
      await research.boundingBox();


    expect(
      researchBox
    ).not.toBeNull();


    expect(
      researchBox?.width
      ??
      0
    ).toBeGreaterThan(
      560
    );


    expect(
      researchBox?.width
      ??
      0
    ).toBeLessThanOrEqual(
      820
    );


    const paragraphs =
      research.locator(
        "p"
      );


    await expect
      .poll(
        async () =>
          paragraphs.count(),
        {
          timeout:
            10_000
        }
      )
      .toBeGreaterThanOrEqual(
        3
      );


    const widths =
      await paragraphs.evaluateAll(
        nodes =>
          nodes
            .map(
              node =>
                node.getBoundingClientRect().width
            )
            .filter(
              width =>
                width
                >
                0
            )
      );


    expect(
      widths.length
    ).toBeGreaterThanOrEqual(
      3
    );


    const maxParagraphWidth =
      Math.max(
        ...widths
      );


    expect(
      maxParagraphWidth
    ).toBeGreaterThan(
      320
    );


    expect(
      maxParagraphWidth
    ).toBeLessThanOrEqual(
      760
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


    const response =
      await page.goto(
        "/insights/attack-surface-mapping-before-exploitation",
        {
          waitUntil:
            "domcontentloaded"
        }
      );


    expect(
      response
    ).not.toBeNull();


    expect(
      response?.status()
    ).toBe(
      200
    );


    const root =
      page.locator(
        '[data-attack-surface-insight-design="v52"]'
      );


    await expect(
      root
    ).toBeVisible({
      timeout:
        10_000
    });


    const contents =
      root.getByRole(
        "navigation",
        {
          name:
            "Article contents"
        }
      );


    const research =
      root.locator(
        '[data-article-research="true"]'
      );


    const information =
      root.locator(
        '[aria-label="Article information"]'
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


    await expect
      .poll(
        async () => {

          const [
            contentsBox,
            researchBox,
            informationBox
          ] =
            await Promise.all([
              contents.boundingBox(),
              research.boundingBox(),
              information.boundingBox()
            ]);


          return Boolean(
            contentsBox
            &&
            researchBox
            &&
            informationBox
            &&
            contentsBox.width
            >
            0
            &&
            researchBox.width
            >
            0
            &&
            informationBox.width
            >
            0
          );

        },
        {
          timeout:
            10_000
        }
      )
      .toBe(
        true
      );


    const [
      contentsBox,
      researchBox,
      informationBox
    ] =
      await Promise.all([
        contents.boundingBox(),
        research.boundingBox(),
        information.boundingBox()
      ]);


    expect(
      contentsBox
    ).not.toBeNull();


    expect(
      researchBox
    ).not.toBeNull();


    expect(
      informationBox
    ).not.toBeNull();


    expect(
      researchBox?.y
      ??
      0
    ).toBeGreaterThanOrEqual(
      (
        contentsBox?.y
        ??
        0
      )
      +
      (
        contentsBox?.height
        ??
        0
      )
      -
      1
    );


    expect(
      informationBox?.y
      ??
      0
    ).toBeGreaterThan(
      researchBox?.y
      ??
      0
    );


    const documentGeometry =
      await page.evaluate(
        () => ({
          scrollWidth:
            document
              .documentElement
              .scrollWidth,

          clientWidth:
            document
              .documentElement
              .clientWidth,

          bodyScrollWidth:
            document
              .body
              .scrollWidth
        })
      );


    expect(
      documentGeometry.scrollWidth
    ).toBeLessThanOrEqual(
      documentGeometry.clientWidth
      +
      1
    );


    expect(
      documentGeometry.bodyScrollWidth
    ).toBeLessThanOrEqual(
      documentGeometry.clientWidth
      +
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
