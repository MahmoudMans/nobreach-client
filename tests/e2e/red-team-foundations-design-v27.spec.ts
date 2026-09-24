import {
  expect,
  test
} from "@playwright/test";


test(
  "Red Team Foundations V27 renders the adversary field guide",
  async ({
    page
  }) => {

    await page.goto(
      "/training/red-team-foundations"
    );


    const root =
      page.locator(
        '[data-red-team-design="v27"]'
      );


    await expect(
      root
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            "Red Team Foundations"
        }
      )
    ).toBeVisible();


    await expect(
      page
        .getByText(
          "Reconnaissance"
        )
        .first()
    ).toBeVisible();

  }
);


test(
  "Red Team Foundations V27 shows the adversary path on desktop",
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
      "/training/red-team-foundations"
    );


    const visual =
      page.locator(
        '[data-red-team-design="v27"]'
      )
      .locator(
        '[aria-hidden="true"]'
      )
      .filter({
        hasText:
          "ADVERSARY PATH"
      });


    await expect(
      visual
    ).toHaveCount(
      1
    );


    await expect(
      visual
    ).toBeVisible();


    await expect(
      visual
    ).toContainText(
      "RECON"
    );


    await expect(
      visual
    ).toContainText(
      "MAP"
    );


    await expect(
      visual
    ).toContainText(
      "TEST"
    );


    await expect(
      visual
    ).toContainText(
      "REPORT"
    );

  }
);


test(
  "Red Team V27 retains substantial training content",
  async ({
    page
  }) => {

    await page.goto(
      "/training/red-team-foundations"
    );


    const root =
      page.locator(
        '[data-red-team-design="v27"]'
      );


    const headings =
      root.locator(
        "h2"
      );


    expect(
      await headings.count()
    ).toBeGreaterThanOrEqual(
      5
    );


    await expect(
      page
        .getByText(
          "Reconnaissance"
        )
        .first()
    ).toBeVisible();

  }
);


test(
  "Red Team design is isolated from AI Security Foundations",
  async ({
    page
  }) => {

    await page.goto(
      "/training/ai-security-foundations"
    );


    await expect(
      page.locator(
        '[data-red-team-design="v27"]'
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            "AI Security Foundations"
        }
      )
    ).toBeVisible();

  }
);


test(
  "Red Team design is isolated from Web Exploitation Techniques",
  async ({
    page
  }) => {

    await page.goto(
      "/training/web-exploitation-techniques"
    );


    await expect(
      page.locator(
        '[data-red-team-design="v27"]'
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            "Web Exploitation Techniques"
        }
      )
    ).toBeVisible();

  }
);


for (
  const viewport
  of [
    {
      name:
        "desktop",

      width:
        1440,

      height:
        900
    },
    {
      name:
        "compact",

      width:
        1180,

      height:
        820
    },
    {
      name:
        "tablet",

      width:
        820,

      height:
        1180
    },
    {
      name:
        "mobile",

      width:
        390,

      height:
        844
    },
    {
      name:
        "narrow",

      width:
        360,

      height:
        800
    }
  ]
) {

  test(
    `Red Team Foundations V27 remains contained at ${viewport.name}`,
    async ({
      page
    }) => {

      await page.setViewportSize({
        width:
          viewport.width,

        height:
          viewport.height
      });


      await page.goto(
        "/training/red-team-foundations"
      );


      const heading =
        page.getByRole(
          "heading",
          {
            level:
              1,

            name:
              "Red Team Foundations"
          }
        );


      await expect(
        heading
      ).toBeVisible();


      const metrics =
        await page.evaluate(
          () => {

            const h1 =
              document.querySelector(
                "#main-content h1"
              );


            const laterHeading =
              Array.from(
                document.querySelectorAll(
                  "#main-content h2"
                )
              )
              .find(
                (
                  element
                ) =>
                  element
                    .getBoundingClientRect()
                    .height
                  >
                  0
              );


            return {
              scrollWidth:
                document
                  .documentElement
                  .scrollWidth,

              clientWidth:
                document
                  .documentElement
                  .clientWidth,

              h1Bottom:
                h1
                  ?.getBoundingClientRect()
                  .bottom
                ??
                0,

              laterHeadingTop:
                laterHeading
                  ?.getBoundingClientRect()
                  .top
                ??
                null
            };

          }
        );


      expect(
        metrics.scrollWidth
      ).toBeLessThanOrEqual(
        metrics.clientWidth
        +
        1
      );


      expect(
        metrics.h1Bottom
      ).toBeLessThan(
        760
      );


      if (
        metrics.laterHeadingTop
        !==
        null
      ) {

        expect(
          metrics.laterHeadingTop
        ).toBeLessThan(
          1250
        );

      }

    }
  );

}
