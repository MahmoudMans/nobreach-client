import {
  expect,
  test
} from "@playwright/test";


const route =
  "/insights/attack-surface-mapping-before-exploitation";


async function openV53(
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
      '[data-attack-surface-insight-design="v53"]'
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
  "Attack Surface renders one V53 reconnaissance dossier",
  async ({
    page
  }) => {

    const root =
      await openV53(
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
      root.getByText(
        /Reconnaissance dossier/i
      )
    ).toBeVisible();

  }
);


test(
  "V53 exposes the five-stage reconnaissance model",
  async ({
    page
  }) => {

    const root =
      await openV53(
        page
      );


    const map =
      root.locator(
        '[data-attack-surface-map="v53"]'
      );


    await expect(
      map
    ).toBeVisible();


    for (
      const label
      of [
        "OBSERVE",
        "ENUMERATE",
        "RELATE",
        "VERIFY",
        "PRIORITIZE"
      ]
    ) {

      await expect(
        map.getByText(
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
  "V53 uses Field Index research and dossier information",
  async ({
    page
  }) => {

    const root =
      await openV53(
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
  "V53 Field Index resolves to canonical chapters",
  async ({
    page
  }) => {

    const root =
      await openV53(
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
  "V53 desktop keeps dossier rails around readable research",
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
      await openV53(
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
  "V53 mobile orders Field Index research then dossier information",
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
      await openV53(
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
  "V53 preserves canonical research prose",
  async ({
    page
  }) => {

    const root =
      await openV53(
        page
      );


    expect(
      await root
        .locator(
          '[data-article-section="true"]'
        )
        .count()
    ).toBeGreaterThan(
      0
    );


    expect(
      await root
        .locator(
          '[data-article-research="true"] p'
        )
        .count()
    ).toBeGreaterThanOrEqual(
      3
    );

  }
);


test(
  "V53 stays isolated from other Insight routes",
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
        '[data-attack-surface-insight-design="v53"]'
      )
    ).toHaveCount(
      0
    );

  }
);
