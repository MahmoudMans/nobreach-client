import {
  expect,
  test
} from "@playwright/test";


const route =
  "/insights/authorization-is-a-system-not-a-checkbox";


test(
  "Authorization article renders one V51 experience",
  async ({
    page
  }) => {

    const response =
      await page.goto(
        route
      );


    expect(
      response?.status()
    ).toBe(
      200
    );


    await expect(
      page.locator(
        '[data-insight-article="authorization-is-a-system-not-a-checkbox"]'
      )
    ).toHaveCount(
      1
    );


    await expect(
      page.locator(
        '[data-authorization-insight-design="v51"]'
      )
    ).toHaveCount(
      1
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            "Authorization is a system, not a checkbox",
          exact:
            true
        }
      )
    ).toHaveCount(
      1
    );

  }
);


test(
  "Authorization article keeps one deep-page breadcrumb",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const breadcrumb =
      page.getByRole(
        "navigation",
        {
          name:
            "Breadcrumb"
        }
      );


    await expect(
      breadcrumb
    ).toHaveCount(
      1
    );


    await expect(
      breadcrumb.getByRole(
        "link",
        {
          name:
            "Insights",
          exact:
            true
        }
      )
    ).toHaveAttribute(
      "href",
      "/insights"
    );

  }
);


test(
  "article keeps contents research and information columns",
  async ({
    page
  }) => {

    await page.goto(
      route
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
      page.locator(
        '[aria-label="Article information"]'
      )
    ).toBeVisible();

  }
);


test(
  "contents links resolve to canonical sections",
  async ({
    page
  }) => {

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
        '[data-authorization-insight-design="v51"]'
      );


    await expect(
      root
    ).toHaveCount(
      1
    );


    await expect(
      root
    ).toBeVisible();


    const contents =
      page.getByRole(
        "navigation",
        {
          name:
            "Article contents"
        }
      );


    await expect(
      contents
    ).toHaveCount(
      1
    );


    await expect(
      contents
    ).toBeVisible();


    const links =
      contents.getByRole(
        "link"
      );


    /*
     * In parallel Next.js E2E execution the navigation shell can become
     * visible before its canonical section links are queryable.
     *
     * Wait for the actual link collection rather than treating the first
     * zero count as an empty article.
     */
    await expect
      .poll(
        async () =>
          links.count(),
        {
          timeout:
            10_000,

          message:
            "Article contents should expose canonical section links"
        }
      )
      .toBeGreaterThan(
        0
      );


    const count =
      await links.count();


    expect(
      count
    ).toBeGreaterThan(
      0
    );


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

      const link =
        links.nth(
          index
        );


      await expect(
        link
      ).toBeVisible();


      const href =
        await link.getAttribute(
          "href"
        );


      expect(
        href
      ).not.toBeNull();


      expect(
        href
      ).toMatch(
        /^#[A-Za-z0-9_-]+$/
      );


      hrefs.push(
        href as string
      );


      const target =
        page.locator(
          href as string
        );


      await expect(
        target
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
  "article preserves API Security contextual navigation",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    await expect(
      page.getByRole(
        "link",
        {
          name:
            /api security/i
        }
      ).first()
    ).toHaveAttribute(
      "href",
      "/services/api-security"
    );

  }
);


test(
  "other Insight articles retain the generic renderer",
  async ({
    page
  }) => {

    for (
      const otherRoute
      of [
        "/insights/attack-surface-mapping-before-exploitation",
        "/insights/prompt-injection-matters-when-ai-can-act",
        "/insights/manual-reasoning-in-web-security-testing"
      ]
    ) {

      await page.goto(
        otherRoute
      );


      await expect(
        page.locator(
          '[data-authorization-insight-design="v51"]'
        )
      ).toHaveCount(
        0
      );


      await expect(
        page.locator(
          "[data-insight-article]"
        )
      ).toHaveCount(
        1
      );

    }

  }
);


test(
  "desktop research measure remains editorial",
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


    const research =
      page.locator(
        '[data-article-research="true"]'
      );


    await expect(
      research
    ).toHaveCount(
      1
    );


    await expect(
      research
    ).toBeVisible();


    /*
     * Next.js can expose the server-rendered node before layout has a
     * non-zero geometry during parallel Playwright execution.
     *
     * Wait for the actual rendered bounding box instead of sampling the
     * node immediately after navigation.
     */
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
            10_000,

          message:
            "research column should acquire a stable desktop width"
        }
      )
      .toBeGreaterThan(
        560
      );


    const box =
      await research.boundingBox();


    expect(
      box
    ).not.toBeNull();


    const width =
      box?.width
      ??
      0;


    expect(
      width
    ).toBeGreaterThan(
      560
    );


    expect(
      width
    ).toBeLessThanOrEqual(
      820
    );

  }
);


test(
  "mobile recomposes contents research information in order",
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
      page.locator(
        '[aria-label="Article information"]'
      );


    await expect(
      contents
    ).toHaveCount(
      1
    );


    await expect(
      research
    ).toHaveCount(
      1
    );


    await expect(
      information
    ).toHaveCount(
      1
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


    /*
     * During parallel Next.js / Playwright execution the SSR nodes can
     * exist before the browser has produced stable mobile geometry.
     *
     * Wait until all three reading-frame regions have measurable boxes.
     */
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


          const boxes =
            [
              contentsBox,
              researchBox,
              informationBox
            ];


          return boxes.every(
            box =>
              Boolean(
                box
                &&
                box.width
                >
                0
                &&
                box.height
                >
                0
              )
          );

        },
        {
          timeout:
            10_000,

          message:
            "mobile article regions should acquire stable geometry"
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


    const contentsTop =
      contentsBox?.y
      ??
      -1;


    const researchTop =
      researchBox?.y
      ??
      -1;


    const informationTop =
      informationBox?.y
      ??
      -1;


    expect(
      contentsTop
    ).toBeGreaterThanOrEqual(
      0
    );


    expect(
      researchTop
    ).toBeGreaterThan(
      contentsTop
    );


    expect(
      informationTop
    ).toBeGreaterThan(
      researchTop
    );


    const viewport =
      await page.evaluate(
        () => ({
          scrollWidth:
            document.documentElement.scrollWidth,

          clientWidth:
            document.documentElement.clientWidth,

          bodyScrollWidth:
            document.body.scrollWidth
        })
      );


    expect(
      viewport.scrollWidth
    ).toBeLessThanOrEqual(
      viewport.clientWidth
      +
      1
    );


    expect(
      viewport.bodyScrollWidth
    ).toBeLessThanOrEqual(
      viewport.clientWidth
      +
      1
    );

  }
);
