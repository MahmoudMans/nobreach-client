import {
  expect,
  test
} from "@playwright/test";


test(
  "Internships V22 makes the project catalogue primary",
  async ({
    page
  }) => {

    await page.goto(
      "/company/internships"
    );

    await expect(
      page.locator(
        '[data-internship-audit="v22"]'
      )
    ).toBeVisible();

    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,
          name:
            "Security work built through practice."
        }
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        "8 showcased projects",
        {
          exact:
            true
        }
      )
    ).toBeVisible();

    await expect(
      page.locator(
        '[data-internship-project]'
      )
    ).toHaveCount(
      8
    );

  }
);


test(
  "detail instruction and publication notice precede the project list",
  async ({
    page
  }) => {

    await page.goto(
      "/company/internships"
    );

    const notice =
      page.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "About this showcase"
        }
      );

    const instruction =
      page.getByText(
        "Open a project to view its work performed and technical outputs.",
        {
          exact:
            true
        }
      );

    const firstProject =
      page.locator(
        '[data-internship-project]'
      ).first();


    const [
      noticeBox,
      instructionBox,
      firstBox
    ] =
      await Promise.all([
        notice.boundingBox(),
        instruction.boundingBox(),
        firstProject.boundingBox()
      ]);


    expect(
      noticeBox
    ).not.toBeNull();

    expect(
      instructionBox
    ).not.toBeNull();

    expect(
      firstBox
    ).not.toBeNull();


    expect(
      noticeBox!.y
    ).toBeLessThan(
      firstBox!.y
    );

    expect(
      instructionBox!.y
    ).toBeLessThan(
      firstBox!.y
    );

  }
);


test(
  "all project rows expose readable technology information",
  async ({
    page
  }) => {

    await page.goto(
      "/company/internships"
    );

    const projects =
      page.locator(
        '[data-internship-project]'
      );

    await expect(
      projects
    ).toHaveCount(
      8
    );

    for (
      let index = 0;
      index < 8;
      index += 1
    ) {

      const project =
        projects.nth(
          index
        );

      await expect(
        project.locator(
          "ul"
        ).first()
      ).toBeVisible();

      const technologyCount =
        await project
          .locator(
            "ul"
          )
          .first()
          .locator(
            "li"
          )
          .count();

      expect(
        technologyCount
      ).toBeGreaterThanOrEqual(
        3
      );

    }

  }
);


test(
  "project disclosures expose state and allow multiple projects open",
  async ({
    page
  }) => {

    await page.goto(
      "/company/internships"
    );

    const projects =
      page.locator(
        '[data-internship-project]'
      );

    const first =
      projects.nth(
        0
      );

    const second =
      projects.nth(
        1
      );

    const firstButton =
      first.getByRole(
        "button",
        {
          name:
            /View details/i
        }
      );

    const secondButton =
      second.getByRole(
        "button",
        {
          name:
            /View details/i
        }
      );


    await expect(
      firstButton
    ).toHaveAttribute(
      "aria-expanded",
      "false"
    );


    await firstButton.press(
      "Enter"
    );


    await expect(
      first.getByRole(
        "button",
        {
          name:
            /Hide details/i
        }
      )
    ).toHaveAttribute(
      "aria-expanded",
      "true"
    );


    await expect(
      first.getByRole(
        "region"
      )
    ).toBeVisible();


    await secondButton.click();


    await expect(
      second.getByRole(
        "region"
      )
    ).toBeVisible();


    await expect(
      first.getByRole(
        "region"
      )
    ).toBeVisible();


    await expect(
      first.getByRole(
        "heading",
        {
          level:
            4,
          name:
            "Work performed"
        }
      )
    ).toBeVisible();


    await expect(
      first.getByRole(
        "heading",
        {
          level:
            4,
          name:
            "Technical outputs"
        }
      )
    ).toBeVisible();

  }
);


test(
  "working method appears once as the six authoritative stages",
  async ({
    page
  }) => {

    await page.goto(
      "/company/internships"
    );

    const method =
      page.locator(
        '[data-internship-ui="method-grid"]'
      );

    await expect(
      method.locator(
        ":scope > li"
      )
    ).toHaveCount(
      6
    );


    const headings =
      await method
        .locator(
          "h3"
        )
        .allTextContents();


    expect(
      headings
    ).toEqual([
      "Build",
      "Understand",
      "Validate",
      "Detect",
      "Fix",
      "Document"
    ]);


    await expect(
      method.getByText(
        /Where relevant, interns work with telemetry/i
      )
    ).toBeVisible();

  }
);


test(
  "first method row uses consistent alignment",
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
      "/company/internships"
    );

    const steps =
      page.locator(
        '[data-internship-ui="method-grid"] > li'
      );


    const tops =
      await steps
        .evaluateAll(
          elements =>
            elements
              .slice(
                0,
                3
              )
              .map(
                element =>
                  element
                    .getBoundingClientRect()
                    .top
              )
        );


    expect(
      Math.max(
        ...tops
      )
      -
      Math.min(
        ...tops
      )
    ).toBeLessThanOrEqual(
      2
    );

  }
);


test(
  "closing region exposes one Careers Training Contact group",
  async ({
    page
  }) => {

    await page.goto(
      "/company/internships"
    );

    const cta =
      page.locator(
        '[data-internship-section="cta"]'
      );


    await expect(
      cta.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Explore careers and training."
        }
      )
    ).toBeVisible();


    await expect(
      cta.getByRole(
        "link",
        {
          name:
            /View careers/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/careers"
    );


    await expect(
      cta.getByRole(
        "link",
        {
          name:
            /View training/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/training"
    );


    await expect(
      cta.getByRole(
        "link",
        {
          name:
            /Contact No Breach/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/contact"
    );

  }
);


for (
  const viewport
  of
  [
    {
      name:
        "320",
      width:
        320,
      height:
        800
    },
    {
      name:
        "390",
      width:
        390,
      height:
        844
    },
    {
      name:
        "768",
      width:
        768,
      height:
        1024
    },
    {
      name:
        "1024",
      width:
        1024,
      height:
        768
    },
    {
      name:
        "1280",
      width:
        1280,
      height:
        800
    },
    {
      name:
        "1440",
      width:
        1440,
      height:
        900
    }
  ]
) {

  test(
    `Internships V22 remains contained at ${viewport.name}`,
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
        "/company/internships"
      );


      const geometry =
        await page.evaluate(
          () => ({
            scroll:
              document
                .documentElement
                .scrollWidth,

            client:
              document
                .documentElement
                .clientWidth
          })
        );


      expect(
        geometry.scroll
      ).toBeLessThanOrEqual(
        geometry.client
        +
        1
      );

    }
  );

}
