import {
  expect,
  test
} from "@playwright/test";


test(
  "Red Team Foundations renders the strict course-detail experience",
  async ({
    page
  }) => {

    const response =
      await page.goto(
        "/training/red-team-foundations"
      );


    expect(
      response?.status()
    ).toBe(
      200
    );


    const root =
      page.locator(
        '[data-red-team-design="v40-course-detail"]'
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
            /red team foundations/i
        }
      )
    ).toHaveCount(
      1
    );


    await expect(
      root.locator(
        '[data-red-team-section="course-intro"]'
      )
    ).toBeVisible();


    await expect(
      root.getByRole(
        "complementary",
        {
          name:
            /red team foundations enrollment/i
        }
      )
    ).toBeVisible();

  }
);


test(
  "course detail follows the required information sequence",
  async ({
    page
  }) => {

    await page.goto(
      "/training/red-team-foundations"
    );


    const sections =
      await page.locator(
        '[data-red-team-design="v40-course-detail"] [data-red-team-section]'
      ).evaluateAll(
        elements =>
          elements.map(
            element =>
              element.getAttribute(
                "data-red-team-section"
              )
          )
      );


    expect(
      sections
    ).toEqual([
      "course-intro",
      "overview",
      "curriculum",
      "requirements",
      "outcomes",
      "related",
      "academy-cta"
    ]);

  }
);


test(
  "desktop enrollment card is sticky below the global header",
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


    const enrollment =
      page.getByRole(
        "complementary",
        {
          name:
            /red team foundations enrollment/i
        }
      );


    const style =
      await enrollment.evaluate(
        element => {

          const computed =
            getComputedStyle(
              element
            );


          return {
            position:
              computed.position,

            top:
              computed.top
          };

        }
      );


    expect(
      style.position
    ).toBe(
      "sticky"
    );


    expect(
      parseFloat(
        style.top
      )
    ).toBeGreaterThanOrEqual(
      100
    );

  }
);


test(
  "mobile places course meaning before inline enrollment",
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
      "/training/red-team-foundations"
    );


    const enrollment =
      page.getByRole(
        "complementary",
        {
          name:
            /red team foundations enrollment/i
        }
      );


    const style =
      await enrollment.evaluate(
        element =>
          getComputedStyle(
            element
          ).position
      );


    expect(
      style
    ).toBe(
      "static"
    );


    const boxes =
      await page.evaluate(
        () => {

          const heading =
            document.querySelector(
              '[data-red-team-design="v40-course-detail"] h1'
            );


          const card =
            document.querySelector(
              '[aria-label="Red Team Foundations enrollment"]'
            );


          if (
            !heading
            ||
            !card
          ) {

            return null;

          }


          return {
            headingTop:
              heading.getBoundingClientRect().top,

            cardTop:
              card.getBoundingClientRect().top
          };

        }
      );


    expect(
      boxes
    ).not.toBeNull();


    expect(
      boxes!.cardTop
    ).toBeGreaterThan(
      boxes!.headingTop
    );

  }
);


test(
  "contextual course navigation is not a second site navbar",
  async ({
    page
  }) => {

    await page.goto(
      "/training/red-team-foundations"
    );


    await expect(
      page.getByRole(
        "navigation",
        {
          name:
            "Course sections"
        }
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "navigation",
        {
          name:
            "Course sections"
        }
      ).getByRole(
        "link"
      )
    ).toHaveCount(
      3
    );


    await expect(
      page.getByRole(
        "navigation",
        {
          name:
            "Course sections"
        }
      ).getByText(
        "Overview"
      )
    ).toBeVisible();

  }
);


test(
  "Red Team remains overflow-free across representative sizes",
  async ({
    page
  }) => {

    for (
      const viewport
      of [
        {
          width:
            1440,

          height:
            900
        },
        {
          width:
            1024,

          height:
            768
        },
        {
          width:
            768,

          height:
            1024
        },
        {
          width:
            390,

          height:
            844
        },
        {
          width:
            360,

          height:
            800
        }
      ]
    ) {

      await page.setViewportSize(
        viewport
      );


      await page.goto(
        "/training/red-team-foundations"
      );


      const dimensions =
        await page.evaluate(
          () => ({
            scroll:
              document.documentElement.scrollWidth,

            client:
              document.documentElement.clientWidth
          })
        );


      expect(
        dimensions.scroll,
        `${viewport.width}px viewport`
      ).toBeLessThanOrEqual(
        dimensions.client
        +
        1
      );

    }

  }
);


test(
  "Red Team V40 does not leak into other training programs",
  async ({
    page
  }) => {

    for (
      const route
      of [
        "/training/ai-security-foundations",
        "/training/web-exploitation-techniques"
      ]
    ) {

      await page.goto(
        route
      );


      await expect(
        page.locator(
          '[data-red-team-design="v40-course-detail"]'
        )
      ).toHaveCount(
        0
      );

    }

  }
);
