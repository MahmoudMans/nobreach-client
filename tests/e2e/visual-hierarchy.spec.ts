import {
  expect,
  type Page,
  test
} from "@playwright/test";

function px(
  value: string
) {
  return Number.parseFloat(
    value
  );
}

async function openStableRoute(
  page: Page,
  route: string
) {
  await page.emulateMedia({
    reducedMotion:
      "reduce"
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
    response,
    `No response for ${route}`
  ).not.toBeNull();

  expect(
    response?.status(),
    `Unexpected HTTP status for ${route}`
  ).toBeLessThan(
    400
  );

  await expect(
    page.locator(
      "#main-content"
    )
  ).toBeVisible({
    timeout: 10000
  });
}

async function inspectPrimaryHeading(
  page: Page,
  route: string
) {
  const headings =
    page.locator(
      "#main-content h1"
    );


  await expect(
    headings
  ).toHaveCount(
    1,
    {
      timeout:
        10000
    }
  );


  const heading =
    headings.first();


  await expect(
    heading
  ).toBeVisible({
    timeout:
      10000
  });


  const count =
    await headings.count();


  expect(
    count,
    `${route} should have exactly one H1`
  ).toBe(
    1
  );


  const metrics =
    await heading.evaluate(
      (
        element
      ) => {
        const style =
          getComputedStyle(
            element
          );

        const rect =
          element
            .getBoundingClientRect();

        return {
          fontSize:
            style.fontSize,

          lineHeight:
            style.lineHeight,

          display:
            style.display,

          visibility:
            style.visibility,

          opacity:
            style.opacity,

          transform:
            style.transform,

          width:
            rect.width,

          height:
            rect.height,

          parentDisplay:
            element.parentElement
              ? getComputedStyle(
                  element.parentElement
                ).display
              : "",

          parentVisibility:
            element.parentElement
              ? getComputedStyle(
                  element.parentElement
                ).visibility
              : "",

          parentOpacity:
            element.parentElement
              ? getComputedStyle(
                  element.parentElement
                ).opacity
              : ""
        };
      }
    );

  expect(
    metrics.display,
    `${route} H1 display`
  ).not.toBe(
    "none"
  );

  expect(
    metrics.visibility,
    `${route} H1 visibility`
  ).not.toBe(
    "hidden"
  );

  expect(
    Number.parseFloat(
      metrics.opacity
    ),
    `${route} H1 opacity`
  ).toBeGreaterThan(
    0
  );

  expect(
    metrics.parentDisplay,
    `${route} H1 parent display`
  ).not.toBe(
    "none"
  );

  expect(
    metrics.parentVisibility,
    `${route} H1 parent visibility`
  ).not.toBe(
    "hidden"
  );

  expect(
    Number.parseFloat(
      metrics.parentOpacity ||
        "1"
    ),
    `${route} H1 parent opacity`
  ).toBeGreaterThan(
    0
  );

  expect(
    metrics.width,
    `${route} H1 width`
  ).toBeGreaterThan(
    0
  );

  expect(
    metrics.height,
    `${route} H1 height`
  ).toBeGreaterThan(
    0
  );

  return {
    heading,
    metrics
  };
}

test(
  "desktop typography remains controlled",
  async ({
    page
  }) => {
    await openStableRoute(
      page,
      "/"
    );

    const home =
      await inspectPrimaryHeading(
        page,
        "/"
      );

    expect(
      px(
        home.metrics.fontSize
      )
    ).toBeLessThanOrEqual(
      100
    );

    await openStableRoute(
      page,
      "/services/api-security"
    );

    const service =
      await inspectPrimaryHeading(
        page,
        "/services/api-security"
      );

    expect(
      px(
        service.metrics.fontSize
      )
    ).toBeLessThanOrEqual(
      90
    );
  }
);

test(
  "major visible section headings stay below oversized display scale",
  async ({
    page
  }) => {
    const routes = [
      "/",
      "/company",
      "/services",
      "/training",
      "/cr4ckout",
      "/insights"
    ];

    for (
      const route
      of routes
    ) {
      await openStableRoute(
        page,
        route
      );

      const headings =
        page.locator(
          "#main-content h2:visible"
        );

      const count =
        await headings.count();

      for (
        let index = 0;
        index < count;
        index += 1
      ) {
        const size =
          await headings
            .nth(index)
            .evaluate(
              (
                element
              ) =>
                getComputedStyle(
                  element
                ).fontSize
            );

        expect(
          px(size),
          `${route} visible H2 ${index} is too large`
        ).toBeLessThanOrEqual(
          112
        );
      }
    }
  }
);

test.describe(
  "mobile primary heading visibility",
  () => {
    test.use({
      viewport: {
        width: 390,
        height: 844
      }
    });

    const routes = [
      {
        route: "/",
        maxSize: 76
      },
      {
        route:
          "/services",
        maxSize: 70
      },
      {
        route:
          "/training",
        maxSize: 70
      },
      {
        route:
          "/cr4ckout",
        maxSize: 70
      },
      {
        route:
          "/insights",
        maxSize: 70
      }
    ];

    for (
      const {
        route,
        maxSize
      }
      of routes
    ) {
      test(
        `mobile H1 visible and controlled: ${route}`,
        async ({
          page
        }) => {
          await openStableRoute(
            page,
            route
          );

          const result =
            await inspectPrimaryHeading(
              page,
              route
            );

          expect(
            px(
              result.metrics.fontSize
            ),
            `${route} mobile H1 too large`
          ).toBeLessThanOrEqual(
            maxSize
          );

          const documentMetrics =
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
            documentMetrics.scrollWidth,
            `${route} has horizontal overflow`
          ).toBeLessThanOrEqual(
            documentMetrics.clientWidth +
              1
          );
        }
      );
    }
  }
);

// NB_HOME_MOBILE_GRID_REGRESSION_V3

test.describe(
  "homepage mobile responsive grid regression",
  () => {
    test.use({
      viewport: {
        width: 390,
        height: 844
      }
    });

    test(
      "homepage primary content receives real mobile width",
      async ({
        page
      }) => {
        await page.emulateMedia({
          reducedMotion:
            "reduce"
        });

        const response =
          await page.goto(
            "/",
            {
              waitUntil:
                "domcontentloaded"
            }
          );

        expect(
          response?.status()
        ).toBeLessThan(
          400
        );

        const h1 =
          page.locator(
            "#main-content h1"
          );

        await expect(
          h1
        ).toHaveCount(
          1
        );

        const layout =
          await h1.evaluate(
            (
              element
            ) => {
              const content =
                element
                  .parentElement;

              const grid =
                content
                  ?.parentElement;

              const headingRect =
                element
                  .getBoundingClientRect();

              const contentRect =
                content
                  ?.getBoundingClientRect();

              const gridRect =
                grid
                  ?.getBoundingClientRect();

              return {
                headingWidth:
                  headingRect.width,

                contentWidth:
                  contentRect?.width ??
                  0,

                gridWidth:
                  gridRect?.width ??
                  0,

                gridColumns:
                  grid
                    ? getComputedStyle(
                        grid
                      )
                        .gridTemplateColumns
                    : "",

                headingDisplay:
                  getComputedStyle(
                    element
                  ).display,

                headingVisibility:
                  getComputedStyle(
                    element
                  ).visibility,

                headingOpacity:
                  getComputedStyle(
                    element
                  ).opacity
              };
            }
          );

        expect(
          layout.gridWidth
        ).toBeGreaterThan(
          300
        );

        expect(
          layout.contentWidth
        ).toBeGreaterThan(
          300
        );

        expect(
          layout.headingWidth
        ).toBeGreaterThan(
          300
        );

        expect(
          layout.headingDisplay
        ).not.toBe(
          "none"
        );

        expect(
          layout.headingVisibility
        ).not.toBe(
          "hidden"
        );

        expect(
          Number.parseFloat(
            layout.headingOpacity
          )
        ).toBeGreaterThan(
          0
        );

        const overflow =
          await page.evaluate(
            () =>
              document
                .documentElement
                .scrollWidth >
              document
                .documentElement
                .clientWidth +
                1
          );

        expect(
          overflow
        ).toBe(
          false
        );
      }
    );
  }
);
