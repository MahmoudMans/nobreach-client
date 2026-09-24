import {
  expect,
  test
} from "@playwright/test";


const route =
  "/training/ai-security-foundations";


test(
  "AI Security uses the course-detail architecture",
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
      route
    );


    const root =
      page.locator(
        '[data-ai-course-detail="v1"]'
      );


    await expect(
      root
    ).toBeVisible();


    await expect(
      root.getByRole(
        "heading",
        {
          level:
            1,

          name:
            "AI Security Foundations"
        }
      )
    ).toBeVisible();


    await expect(
      root.locator(
        "[data-ai-course-section]"
      )
    ).toHaveCount(
      7
    );


    await expect(
      page.locator(
        '[data-ai-security-design="course-detail"]'
      )
    ).toHaveCount(
      1
    );

  }
);


test(
  "course intro contains summary metadata outcomes and program access",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const intro =
      page.locator(
        '[data-ai-course-section="intro"]'
      );


    await expect(
      intro
    ).toBeVisible();


    await expect(
      intro.getByText(
        "AI SECURITY / COURSE"
      )
    ).toBeVisible();


    await expect(
      intro.getByText(
        /what you will leave with/i
      )
    ).toBeVisible();


    const enrollment =
      intro.locator(
        "[data-course-enrollment]"
      );


    await expect(
      enrollment
    ).toBeVisible();


    await expect(
      enrollment.getByRole(
        "link",
        {
          name:
            "Ask about this program"
        }
      )
    ).toHaveAttribute(
      "href",
      "/contact"
    );


    await expect(
      enrollment.getByRole(
        "link",
        {
          name:
            "Explore Academy"
        }
      )
    ).toHaveAttribute(
      "href",
      "/training"
    );

  }
);


test(
  "desktop program card follows the sticky-header clearance rule",
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
      route
    );


    const enrollment =
      page.locator(
        "[data-course-enrollment]"
      );


    const style =
      await enrollment.evaluate(
        (
          element
        ) => {

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
      style.top
    ).toBe(
      "104px"
    );

  }
);


test(
  "course tabs are contextual navigation",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const tabs =
      page.getByRole(
        "navigation",
        {
          name:
            "Course sections"
        }
      );


    await expect(
      tabs
    ).toBeVisible();


    for (
      const name
      of [
        "Overview",
        "Curriculum",
        "Requirements",
        "Outcomes"
      ]
    ) {

      await expect(
        tabs.getByRole(
          "link",
          {
            name
          }
        )
      ).toBeVisible();

    }


    await expect(
      tabs.getByRole(
        "link"
      )
    ).toHaveCount(
      4
    );

  }
);


test(
  "overview uses objectives and audience without another card wall",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const section =
      page.locator(
        '[data-ai-course-section="overview"]'
      );


    await expect(
      section.getByRole(
        "heading",
        {
          level:
            2,

          name:
            /understand the system around the model/i
        }
      )
    ).toBeVisible();


    await expect(
      section.getByText(
        /learning objectives/i
      )
    ).toBeVisible();


    await expect(
      section.getByText(
        /who this is for/i
      )
    ).toBeVisible();

  }
);


test(
  "curriculum is an editorial module sequence",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const section =
      page.locator(
        '[data-ai-course-section="curriculum"]'
      );


    await expect(
      section
    ).toBeVisible();


    for (
      const name
      of [
        "AI Application Attack Surface",
        "Prompt Injection",
        "Tool-Using Systems"
      ]
    ) {

      await expect(
        section.getByRole(
          "heading",
          {
            level:
              3,

            name,

            exact:
              true
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "requirements and outcomes preserve canonical course content",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const requirements =
      page.locator(
        '[data-ai-course-section="requirements"]'
      );


    await expect(
      requirements
    ).toBeVisible();


    await expect(
      requirements.getByText(
        /no advanced machine-learning background required/i
      )
    ).toBeVisible();


    const outcomes =
      page.locator(
        '[data-ai-course-section="outcomes"]'
      );


    await expect(
      outcomes
    ).toBeVisible();


    await expect(
      outcomes.getByText(
        /AI application trust boundaries/i
      )
    ).toBeVisible();

  }
);


test(
  "related course section adapts to the two available programs",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const section =
      page.locator(
        '[data-ai-course-section="related"]'
      );


    await expect(
      section
    ).toBeVisible();


    await expect(
      section.getByRole(
        "link",
        {
          name:
            /explore course/i
        }
      )
    ).toHaveCount(
      2
    );

  }
);


test(
  "final Academy CTA remains a single controlled conversion area",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const section =
      page.locator(
        '[data-ai-course-section="cta"]'
      );


    await expect(
      section.getByRole(
        "heading",
        {
          level:
            2,

          name:
            /build capability through practice/i
        }
      )
    ).toBeVisible();


    await expect(
      section.getByRole(
        "link",
        {
          name:
            "Explore Academy"
        }
      )
    ).toBeVisible();


    await expect(
      section.getByRole(
        "link",
        {
          name:
            "Talk to NoBreach"
        }
      )
    ).toBeVisible();

  }
);


test(
  "the redesigned course remains isolated from other training routes",
  async ({
    page
  }) => {

    for (
      const otherRoute
      of [
        "/training/red-team-foundations",
        "/training/web-exploitation-techniques"
      ]
    ) {

      await page.goto(
        otherRoute
      );


      await expect(
        page.locator(
          '[data-ai-course-detail="v1"]'
        )
      ).toHaveCount(
        0
      );


      await expect(
        page.locator(
          '[data-ai-security-design="course-detail"]'
        )
      ).toHaveCount(
        0
      );

    }

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
    `AI course detail is contained at ${viewport.name}`,
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
        route
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


      const geometry =
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
        geometry.scrollWidth
      ).toBeLessThanOrEqual(
        geometry.clientWidth
        +
        1
      );


      const enrollment =
        page.locator(
          "[data-course-enrollment]"
        );


      await expect(
        enrollment
      ).toBeVisible();


      if (
        viewport.width
        <=
        980
      ) {

        const position =
          await enrollment.evaluate(
            (
              element
            ) =>
              getComputedStyle(
                element
              ).position
          );


        expect(
          position
        ).toBe(
          "static"
        );

      }

    }
  );

}
