import {
  expect,
  test
} from "@playwright/test";


test(
  "Internships keeps the accepted V22 architecture",
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
      page.locator(
        '[data-internship-refinement="v23"]'
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
  "publication scope is compact and preserves every safeguard",
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


    const notice =
      page.getByRole(
        "complementary",
        {
          name:
            "Publication scope"
        }
      );


    await expect(
      notice
    ).toBeVisible();


    await expect(
      notice.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "Publication scope"
        }
      )
    ).toBeVisible();


    await expect(
      notice.getByText(
        /authorized, isolated environments/i
      )
    ).toBeVisible();


    await expect(
      notice.getByText(
        /separate from confidential client and production environments/i
      )
    ).toBeVisible();


    await expect(
      notice.getByText(
        /No confidential client systems, credentials or private assessment data are published/i
      )
    ).toBeVisible();


    await expect(
      notice.getByText(
        "Contributor names are published only with permission.",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    const box =
      await notice.boundingBox();


    expect(
      box
    ).not.toBeNull();


    expect(
      box!.height
    ).toBeLessThan(
      300
    );

  }
);


test(
  "instruction precedes the first project",
  async ({
    page
  }) => {

    await page.goto(
      "/company/internships"
    );


    const instruction =
      page.getByText(
        "Open a project to view its work and technical outputs.",
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
      instructionBox,
      projectBox
    ] =
      await Promise.all([
        instruction.boundingBox(),
        firstProject.boundingBox()
      ]);


    expect(
      instructionBox
    ).not.toBeNull();

    expect(
      projectBox
    ).not.toBeNull();


    expect(
      instructionBox!.y
    ).toBeLessThan(
      projectBox!.y
    );

  }
);


test(
  "each title and detail action form one disclosure control",
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
          "h3 > button"
        )
      ).toHaveCount(
        1
      );


      await expect(
        project.getByRole(
          "button",
          {
            name:
              /View details/i
          }
        )
      ).toHaveAttribute(
        "aria-expanded",
        "false"
      );

    }

  }
);


test(
  "all summaries stay closely grouped with their disclosure headings",
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


    const projects =
      page.locator(
        '[data-internship-project]'
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


      const button =
        project.locator(
          "h3 > button"
        );


      const summary =
        project.locator(
          '[data-project-summary="true"]'
        );


      await project.scrollIntoViewIfNeeded();

      await button.scrollIntoViewIfNeeded();

      await expect(
        button
      ).toBeVisible();


      await summary.scrollIntoViewIfNeeded();

      await expect(
        summary
      ).toBeVisible();


      const [
        buttonBox,
        summaryBox
      ] =
        await Promise.all([
          button.boundingBox(),
          summary.boundingBox()
        ]);


      expect(
        buttonBox
      ).not.toBeNull();

      expect(
        summaryBox
      ).not.toBeNull();


      const gap =
        summaryBox!.y
        -
        (
          buttonBox!.y
          +
          buttonBox!.height
        );


      expect(
        gap
      ).toBeGreaterThanOrEqual(
        8
      );


      expect(
        gap
      ).toBeLessThanOrEqual(
        18
      );


    }

  }
);


test(
  "metadata begins on the same content axis as each summary",
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


    const projects =
      page.locator(
        '[data-internship-project]'
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


      const summary =
        project.locator(
          '[data-project-summary="true"]'
        );


      const firstChip =
        project
          .locator(
            '[data-project-metadata="true"] li'
          )
          .first();


      await project.scrollIntoViewIfNeeded();

      await summary.scrollIntoViewIfNeeded();

      await expect(
        summary
      ).toBeVisible();


      await firstChip.scrollIntoViewIfNeeded();

      await expect(
        firstChip
      ).toBeVisible();


      const [
        summaryBox,
        chipBox
      ] =
        await Promise.all([
          summary.boundingBox(),
          firstChip.boundingBox()
        ]);


      expect(
        summaryBox
      ).not.toBeNull();

      expect(
        chipBox
      ).not.toBeNull();


      expect(
        Math.abs(
          summaryBox!.x
          -
          chipBox!.x
        )
      ).toBeLessThanOrEqual(
        1.5
      );

    }

  }
);


test(
  "project disclosure works with keyboard and supports comparison",
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


    await firstButton.focus();

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
      first.locator(
        '[role="region"]'
      )
    ).toHaveCount(
      1
    );


    await expect(
      first.locator(
        '[role="region"]'
      )
    ).toBeVisible();


    await expect(
      first.getByText(
        "Work performed",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      first.getByText(
        "Technical outputs",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    await secondButton.click();


    await expect(
      first.locator(
        '[role="region"]'
      )
    ).toBeVisible();


    await expect(
      second.locator(
        '[role="region"]'
      )
    ).toBeVisible();


    await first
      .getByRole(
        "button",
        {
          name:
            /Hide details/i
        }
      )
      .press(
        "Space"
      );


    await expect(
      first.locator(
        '[role="region"]'
      )
    ).toBeHidden();


    await expect(
      second.locator(
        '[role="region"]'
      )
    ).toBeVisible();

  }
);


test(
  "method introduction is visitor-facing and keeps the Detect qualification",
  async ({
    page
  }) => {

    await page.goto(
      "/company/internships"
    );


    await expect(
      page.getByText(
        /The internship approach connects lab setup, system understanding, security validation, improvements and documentation\./
      )
    ).toBeVisible();


    await expect(
      page.getByText(
        /Detection work is included where relevant to the project\./
      )
    ).toBeVisible();


    await expect(
      page.getByText(
        /preserving project-specific differences/i
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.getByText(
        /Where relevant, interns work with telemetry/i
      )
    ).toBeVisible();

  }
);


test(
  "method grid uses equal cell insets and continuous grid-owned rules",
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


    const grid =
      page.locator(
        '[data-internship-ui="method-grid"]'
      );


    const steps =
      grid.locator(
        ":scope > li"
      );


    await expect(
      steps
    ).toHaveCount(
      6
    );


    const geometry =
      await steps.evaluateAll(
        elements =>
          elements.map(
            element => {

              const style =
                getComputedStyle(
                  element
                );

              const rect =
                element
                  .getBoundingClientRect();


              return {
                top:
                  rect.top,

                paddingLeft:
                  style.paddingLeft,

                borderLeft:
                  style.borderLeftWidth,

                borderRight:
                  style.borderRightWidth
              };

            }
          )
      );


    const firstRowTops =
      geometry
        .slice(
          0,
          3
        )
        .map(
          item =>
            item.top
        );


    expect(
      Math.max(
        ...firstRowTops
      )
      -
      Math.min(
        ...firstRowTops
      )
    ).toBeLessThanOrEqual(
      1
    );


    expect(
      new Set(
        geometry.map(
          item =>
            item.paddingLeft
        )
      ).size
    ).toBe(
      1
    );


    expect(
      new Set(
        geometry.map(
          item =>
            `${item.borderLeft}/${item.borderRight}`
        )
      ).size
    ).toBe(
      1
    );


    const gridStyle =
      await grid.evaluate(
        element => {

          const style =
            getComputedStyle(
              element
            );


          return {
            rowGap:
              style.rowGap,

            columnGap:
              style.columnGap,

            backgroundColor:
              style.backgroundColor
          };

        }
      );


    expect(
      gridStyle.rowGap
    ).toBe(
      "1px"
    );


    expect(
      gridStyle.columnGap
    ).toBe(
      "1px"
    );

  }
);


test(
  "major boundaries use one combined spacing allocation",
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


    const measurements =
      await page.evaluate(
        () => {

          const hero =
            document.querySelector(
              '[data-internship-section="hero"]'
            );

          const projects =
            document.querySelector(
              '[data-internship-section="projects"]'
            );

          const method =
            document.querySelector(
              '[data-internship-section="method"]'
            );

          const cta =
            document.querySelector(
              '[data-internship-section="cta"]'
            );


          const heroMeta =
            hero?.querySelector(
              'p[class*="heroMeta"]'
            );

          const projectsHeading =
            projects?.querySelector(
              'header'
            );

          const lastProject =
            projects?.querySelector(
              '[data-internship-project]:last-child'
            );

          const methodHeading =
            method?.querySelector(
              'header'
            );

          const methodGrid =
            method?.querySelector(
              '[data-internship-ui="method-grid"]'
            );

          const ctaHeading =
            cta?.querySelector(
              'h2'
            );


          if (
            !hero
            ||
            !projects
            ||
            !method
            ||
            !cta
            ||
            !heroMeta
            ||
            !projectsHeading
            ||
            !lastProject
            ||
            !methodHeading
            ||
            !methodGrid
            ||
            !ctaHeading
          ) {

            throw new Error(
              "BOUNDARY_TARGET_MISSING"
            );

          }


          const heroRect =
            hero.getBoundingClientRect();

          const projectsRect =
            projects.getBoundingClientRect();

          const methodRect =
            method.getBoundingClientRect();

          const ctaRect =
            cta.getBoundingClientRect();


          const heroMetaRect =
            heroMeta.getBoundingClientRect();

          const projectsHeadingRect =
            projectsHeading.getBoundingClientRect();

          const lastProjectRect =
            lastProject.getBoundingClientRect();

          const methodHeadingRect =
            methodHeading.getBoundingClientRect();

          const methodGridRect =
            methodGrid.getBoundingClientRect();

          const ctaHeadingRect =
            ctaHeading.getBoundingClientRect();


          return {
            heroToProjects:
              (
                heroRect.bottom
                -
                heroMetaRect.bottom
              )
              +
              (
                projectsHeadingRect.top
                -
                projectsRect.top
              ),

            projectsToMethod:
              (
                projectsRect.bottom
                -
                lastProjectRect.bottom
              )
              +
              (
                methodHeadingRect.top
                -
                methodRect.top
              ),

            methodToCta:
              (
                methodRect.bottom
                -
                methodGridRect.bottom
              )
              +
              (
                ctaHeadingRect.top
                -
                ctaRect.top
              )
          };

        }
      );


    for (
      const [
        name,
        value
      ]
      of
      Object.entries(
        measurements
      )
    ) {

      expect(
        value,
        name
      ).toBeGreaterThanOrEqual(
        50
      );


      expect(
        value,
        name
      ).toBeLessThanOrEqual(
        110
      );

    }

  }
);


test(
  "closing Careers Training Contact hierarchy remains unchanged",
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
    `Internships refinement remains contained at ${viewport.name}`,
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


      const dimensions =
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
        dimensions.scroll
      ).toBeLessThanOrEqual(
        dimensions.client
        +
        1
      );

    }
  );

}
