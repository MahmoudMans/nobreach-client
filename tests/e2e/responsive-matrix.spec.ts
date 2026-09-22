import {
  expect,
  type Page,
  test
} from "@playwright/test";

type ViewportProfile = {
  name: string;
  width: number;
  height: number;
  maxH1: number;
};

const profiles:
  ViewportProfile[] = [
    {
      name:
        "compact-desktop",
      width:
        1180,
      height:
        820,
      maxH1:
        92
    },
    {
      name:
        "tablet-landscape",
      width:
        1024,
      height:
        768,
      maxH1:
        82
    },
    {
      name:
        "tablet-portrait",
      width:
        820,
      height:
        1180,
      maxH1:
        76
    },
    {
      name:
        "ipad-portrait",
      width:
        768,
      height:
        1024,
      maxH1:
        74
    },
    {
      name:
        "large-mobile",
      width:
        430,
      height:
        932,
      maxH1:
        64
    },
    {
      name:
        "mobile",
      width:
        390,
      height:
        844,
      maxH1:
        60
    }
  ];

const routes = [
  "/",
  "/company",
  "/company/founder",
  "/company/internships",
  "/services",
  "/services/api-security",
  "/training",
  "/training/red-team-foundations",
  "/activities",
  "/cr4ckout",
  "/insights",
  "/insights/authorization-is-a-system-not-a-checkbox",
  "/contact",
  "/security"
];

function number(
  value: string
) {
  return Number.parseFloat(
    value
  );
}

async function openRoute(
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
    `${route} returned an error`
  ).toBeLessThan(
    400
  );

  await expect(
    page.locator(
      "#main-content"
    )
  ).toBeVisible({
    timeout:
      15_000,
  });
}

async function inspectRoute(
  page: Page,
  route: string,
  profile:
    ViewportProfile
) {
  await openRoute(
    page,
    route
  );

  const documentLayout =
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
    documentLayout.scrollWidth,
    `${profile.name} ${route}: document overflow`
  ).toBeLessThanOrEqual(
    documentLayout.clientWidth +
      1
  );

  expect(
    documentLayout.bodyScrollWidth,
    `${profile.name} ${route}: body overflow`
  ).toBeLessThanOrEqual(
    documentLayout.clientWidth +
      1
  );

  const main =
    page.locator(
      "#main-content"
    );

  const mainRect =
    await main.evaluate(
      (
        element
      ) =>
        element
          .getBoundingClientRect()
    );

  expect(
    mainRect.width,
    `${profile.name} ${route}: main width`
  ).toBeGreaterThan(
    280
  );

  const headings =
    page.locator(
      "#main-content h1"
    );

  const headingCount =
    await headings.count();

  if (
    headingCount > 0
  ) {
    const h1 =
      headings.first();

    await expect(
      h1
    ).toBeVisible();

    const h1Metrics =
      await h1.evaluate(
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
            width:
              rect.width,

            height:
              rect.height,

            fontSize:
              style.fontSize,

            visibility:
              style.visibility,

            opacity:
              style.opacity
          };
        }
      );

    expect(
      h1Metrics.width,
      `${profile.name} ${route}: H1 zero width`
    ).toBeGreaterThan(
      0
    );

    expect(
      h1Metrics.height,
      `${profile.name} ${route}: H1 zero height`
    ).toBeGreaterThan(
      0
    );

    expect(
      h1Metrics.visibility,
      `${profile.name} ${route}: H1 hidden`
    ).not.toBe(
      "hidden"
    );

    expect(
      Number.parseFloat(
        h1Metrics.opacity
      ),
      `${profile.name} ${route}: H1 transparent`
    ).toBeGreaterThan(
      0
    );

    expect(
      number(
        h1Metrics.fontSize
      ),
      `${profile.name} ${route}: H1 too large`
    ).toBeLessThanOrEqual(
      profile.maxH1
    );
  }

  const visibleInteractiveOverflow =
    await page.evaluate(
      () => {
        const viewportWidth =
          document
            .documentElement
            .clientWidth;

        const nodes =
          Array.from(
            document.querySelectorAll(
              "#main-content a, #main-content button, #main-content input, #main-content textarea, #main-content select"
            )
          );

        return nodes
          .map(
            (
              node
            ) => {
              const element =
                node as HTMLElement;

              const style =
                getComputedStyle(
                  element
                );

              const rect =
                element
                  .getBoundingClientRect();

              return {
                tag:
                  element.tagName,

                text:
                  (
                    element.textContent ??
                    ""
                  )
                    .trim()
                    .slice(
                      0,
                      80
                    ),

                display:
                  style.display,

                visibility:
                  style.visibility,

                opacity:
                  Number.parseFloat(
                    style.opacity
                  ),

                width:
                  rect.width,

                height:
                  rect.height,

                left:
                  rect.left,

                right:
                  rect.right
              };
            }
          )
          .filter(
            (
              item
            ) =>
              item.display !==
                "none" &&
              item.visibility !==
                "hidden" &&
              item.opacity >
                0 &&
              item.width >
                0 &&
              item.height >
                0 &&
              (
                item.left <
                  -2 ||
                item.right >
                  viewportWidth +
                    2
              )
          );
      }
    );

  expect(
    visibleInteractiveOverflow,
    `${profile.name} ${route}: interactive elements outside viewport`
  ).toEqual([]);
}

for (
  const profile
  of profiles
) {
  test.describe(
    `responsive matrix: ${profile.name}`,
    () => {



      test.use({
        viewport: {
          width:
            profile.width,

          height:
            profile.height
        }
      });

      test(
        `all core templates fit ${profile.width}x${profile.height}`,
        async ({
          page
        }) => {

          // NB_RESPONSIVE_MATRIX_NAVIGATION_STABILITY_V1
          test.setTimeout(
            90_000
          );

          page.setDefaultNavigationTimeout(
            45_000
          );

          for (
            const route
            of routes
          ) {
            await inspectRoute(
              page,
              route,
              profile
            );
          }
        }
      );
    }
  );
}
