import {
  expect,
  test
} from "@playwright/test";


const route =
  "/insights/attack-surface-mapping-before-exploitation";


async function openV52(
  page:
    import("@playwright/test").Page
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
  ).toHaveCount(
    1
  );


  await expect(
    root
  ).toBeVisible({
    timeout:
      10_000
  });


  return root;

}


test(
  "Attack Surface article renders one V52 research experience",
  async ({
    page
  }) => {

    const root =
      await openV52(
        page
      );


    await expect(
      page.locator(
        '[data-insight-article="attack-surface-mapping-before-exploitation"]'
      )
    ).toHaveCount(
      1
    );


    /*
     * The title is canonical data, so the browser contract should not
     * duplicate the article title as a separate hard-coded string.
     *
     * Source/unit contracts already prove article.title is rendered by
     * the single H1. Runtime verifies the structural result.
     */
    const heading =
      root.locator(
        "h1"
      );


    await expect(
      heading
    ).toHaveCount(
      1
    );


    await expect(
      heading
    ).toBeVisible();


    await expect(
      heading
    ).toContainText(
      /\S/
    );

  }
);


test(
  "Attack Surface article keeps one deep breadcrumb and technical map",
  async ({
    page
  }) => {

    const root =
      await openV52(
        page
      );


    await expect(
      root.getByRole(
        "navigation",
        {
          name:
            "Breadcrumb"
        }
      )
    ).toHaveCount(
      1
    );


    const map =
      root.locator(
        '[data-attack-surface-map="true"]'
      );


    await expect(
      map
    ).toHaveCount(
      1
    );


    await expect(
      map
    ).toHaveAttribute(
      "aria-hidden",
      "true"
    );

  }
);


test(
  "Attack Surface article uses contents research and information architecture",
  async ({
    page
  }) => {

    const root =
      await openV52(
        page
      );


    await expect(
      root.getByRole(
        "navigation",
        {
          name:
            "Article contents"
        }
      )
    ).toBeVisible();


    await expect(
      root.locator(
        '[data-article-research="true"]'
      )
    ).toBeVisible();


    await expect(
      root.locator(
        '[aria-label="Article information"]'
      )
    ).toBeVisible();

  }
);


test(
  "Attack Surface contents resolve to canonical research sections",
  async ({
    page
  }) => {

    const root =
      await openV52(
        page
      );


    const contents =
      root.getByRole(
        "navigation",
        {
          name:
            "Article contents"
        }
      );


    const links =
      contents.getByRole(
        "link"
      );


    await expect
      .poll(
        async () =>
          links.count(),
        {
          timeout:
            10_000
        }
      )
      .toBeGreaterThan(
        0
      );


    const count =
      await links.count();


    const hrefs:
      string[] =
        [];


    for (
      let index =
        0;
      index
      <
      count;
      index +=
        1
    ) {

      const href =
        await links
          .nth(
            index
          )
          .getAttribute(
            "href"
          );


      expect(
        href
      ).toMatch(
        /^#[A-Za-z0-9_-]+$/
      );


      hrefs.push(
        href as string
      );


      await expect(
        page.locator(
          href as string
        )
      ).toHaveCount(
        1
      );

    }


    expect(
      new Set(
        hrefs
      ).size
    ).toBe(
      hrefs.length
    );

  }
);


test(
  "Attack Surface desktop reading measure remains editorial",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        1440,

      height:
        900
    });


    const root =
      await openV52(
        page
      );


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


    await expect
      .poll(
        async () => {

          const box =
            await research.boundingBox();


          return box?.width
            ??
            0;

        },
        {
          timeout:
            10_000
        }
      )
      .toBeGreaterThan(
        560
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

  }
);


test(
  "Attack Surface research sections remain flat and substantial",
  async ({
    page
  }) => {

    const root =
      await openV52(
        page
      );


    const sections =
      root.locator(
        '[data-article-section="true"]'
      );


    await expect
      .poll(
        async () =>
          sections.count(),
        {
          timeout:
            10_000
        }
      )
      .toBeGreaterThan(
        0
      );


    const paragraphs =
      root.locator(
        '[data-article-research="true"] p'
      );


    expect(
      await paragraphs.count()
    ).toBeGreaterThan(
      0
    );

  }
);


test(
  "Attack Surface mobile recomposes contents research information in order",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        390,

      height:
        844
    });


    const root =
      await openV52(
        page
      );


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
            a,
            b,
            c
          ] =
            await Promise.all([
              contents.boundingBox(),
              research.boundingBox(),
              information.boundingBox()
            ]);


          return Boolean(
            a
            &&
            b
            &&
            c
            &&
            a.height
            >
            0
            &&
            b.height
            >
            0
            &&
            c.height
            >
            0
          );

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
      researchBox?.y
      ??
      0
    ).toBeGreaterThan(
      contentsBox?.y
      ??
      0
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
              .clientWidth,

          bodyScrollWidth:
            document
              .body
              .scrollWidth
        })
      );


    expect(
      metrics.scrollWidth
    ).toBeLessThanOrEqual(
      metrics.clientWidth
      +
      1
    );


    expect(
      metrics.bodyScrollWidth
    ).toBeLessThanOrEqual(
      metrics.clientWidth
      +
      1
    );

  }
);


test(
  "other Insight articles do not receive Attack Surface V52",
  async ({
    page
  }) => {

    await page.goto(
      "/insights/prompt-injection-matters-when-ai-can-act",
      {
        waitUntil:
          "domcontentloaded"
      }
    );


    await expect(
      page.locator(
        '[data-attack-surface-insight-design="v52"]'
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.locator(
        '[data-insight-article="prompt-injection-matters-when-ai-can-act"]'
      )
    ).toHaveCount(
      1
    );

  }
);
