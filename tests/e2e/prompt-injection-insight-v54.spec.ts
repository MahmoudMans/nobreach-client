import {
  expect,
  test
} from "@playwright/test";


const route =
  "/insights/prompt-injection-matters-when-ai-can-act";


async function openV54(
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
      '[data-prompt-injection-insight-design="v54"]'
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
  "Prompt Injection renders one V54 AI action-boundary experience",
  async ({
    page
  }) => {

    const root =
      await openV54(
        page
      );


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
  "V54 renders the four-stage AI action path",
  async ({
    page
  }) => {

    const root =
      await openV54(
        page
      );


    const path =
      root.locator(
        '[data-ai-action-boundary="v54"]'
      );


    await expect(
      path
    ).toBeVisible();


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
            exact:
              true
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "V54 uses contents research and article information",
  async ({
    page
  }) => {

    const root =
      await openV54(
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
  "V54 contents resolve to canonical article sections",
  async ({
    page
  }) => {

    const root =
      await openV54(
        page
      );


    const links =
      root
        .getByRole(
          "navigation",
          {
            name:
              "Article contents"
          }
        )
        .getByRole(
          "link"
        );


    const count =
      await links.count();


    expect(
      count
    ).toBeGreaterThan(
      0
    );


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


      await expect(
        page.locator(
          href as string
        )
      ).toHaveCount(
        1
      );

    }

  }
);


test(
  "V54 desktop keeps the research column readable",
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
      await openV54(
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
  "V54 research remains flat and substantial",
  async ({
    page
  }) => {

    const root =
      await openV54(
        page
      );


    const sections =
      root.locator(
        '[data-article-section="true"]'
      );


    expect(
      await sections.count()
    ).toBeGreaterThan(
      0
    );


    const paragraphs =
      root.locator(
        '[data-article-research="true"] p'
      );


    expect(
      await paragraphs.count()
    ).toBeGreaterThanOrEqual(
      3
    );

  }
);


test(
  "V54 mobile recomposes contents research information in order",
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
      await openV54(
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
      contentsBox?.width
      ??
      0
    ).toBeGreaterThan(
      300
    );


    expect(
      researchBox?.width
      ??
      0
    ).toBeGreaterThan(
      300
    );


    expect(
      informationBox?.width
      ??
      0
    ).toBeGreaterThan(
      300
    );


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


    const dimensions =
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
      dimensions.scrollWidth
    ).toBeLessThanOrEqual(
      dimensions.clientWidth
      +
      1
    );

  }
);


test(
  "V54 remains isolated from other Insight routes",
  async ({
    page
  }) => {

    await page.goto(
      "/insights/manual-reasoning-in-web-security-testing",
      {
        waitUntil:
          "domcontentloaded"
      }
    );


    await expect(
      page.locator(
        '[data-prompt-injection-insight-design="v54"]'
      )
    ).toHaveCount(
      0
    );

  }
);
