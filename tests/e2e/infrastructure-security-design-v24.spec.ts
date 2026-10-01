import {
  expect,
  test
} from "@playwright/test";


test(
  "Infrastructure Security V25 renders the focused introduction",
  async ({
    page
  }) => {

    await page.goto(
      "/services/infrastructure-security"
    );


    await expect(
      page.locator(
        '[data-infrastructure-audit="v25"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,
          name:
            "Infrastructure risk starts with what is reachable."
        }
      )
    ).toBeVisible();


    const figure =
      page.locator(
        '[data-infrastructure-ui="exposure-path"]'
      );


    await expect(
      figure
    ).toBeVisible();


    await expect(
      figure.getByText(
        "Illustrative exposure path",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      figure.locator(
        "li"
      )
    ).toHaveCount(
      5
    );


    await expect(
      figure.getByText(
        /Actual relationships and assessment coverage depend on the authorized scope/i
      )
    ).toBeVisible();

  }
);


test(
  "Infrastructure hero keeps verified assessment actions",
  async ({
    page
  }) => {

    await page.goto(
      "/services/infrastructure-security"
    );


    const hero =
      page.locator(
        '[data-infrastructure-section="hero"]'
      );


    await expect(
      hero.getByRole(
        "link",
        {
          name:
            /Discuss an assessment/
        }
      )
    ).toHaveAttribute(
      "href",
      "/contact"
    );


    await expect(
      hero.getByRole(
        "link",
        {
          name:
            /Explore the surface/
        }
      )
    ).toHaveAttribute(
      "href",
      "#external-surface"
    );

  }
);


test(
  "External Surface retains three clearly described subjects without radar framing",
  async ({
    page
  }) => {

    await page.goto(
      "/services/infrastructure-security"
    );


    const section =
      page.locator(
        '[data-infrastructure-section="external-surface"]'
      );


    await expect(
      section.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Start with the infrastructure an attacker can reach."
        }
      )
    ).toBeVisible();


    await expect(
      section.locator(
        '[data-infrastructure-external]'
      )
    ).toHaveCount(
      3
    );


    for (
      const title
      of
      [
        "External exposure",
        "Network services",
        "Configuration review"
      ]
    ) {

      await expect(
        section.getByRole(
          "heading",
          {
            level:
              3,
            name:
              title
          }
        )
      ).toBeVisible();

    }


    await expect(
      page.getByText(
        "03 LAYERS",
        {
          exact:
            true
        }
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "Internal Paths retains four subjects and explicit scope qualification",
  async ({
    page
  }) => {

    await page.goto(
      "/services/infrastructure-security"
    );


    const section =
      page.locator(
        '[data-infrastructure-section="internal-paths"]'
      );


    await expect(
      section.locator(
        '[data-infrastructure-internal]'
      )
    ).toHaveCount(
      4
    );


    for (
      const title
      of
      [
        "Internal attack surface",
        "Privilege paths",
        "Segmentation",
        "Credentials"
      ]
    ) {

      await expect(
        section.getByRole(
          "heading",
          {
            level:
              3,
            name:
              title
          }
        )
      ).toBeVisible();

    }


    await expect(
      section.getByText(
        /Inside the authorized scope/i
      )
    ).toBeVisible();


    await expect(
      section.getByText(
        /could lead toward higher privilege/i
      )
    ).toBeVisible();

  }
);


test(
  "Reporting explains the technical record instead of repeating coverage",
  async ({
    page
  }) => {

    await page.goto(
      "/services/infrastructure-security"
    );


    const reporting =
      page.locator(
        '[data-infrastructure-section="reporting"]'
      );


    await expect(
      reporting.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Keep infrastructure findings connected to their system context."
        }
      )
    ).toBeVisible();


    await expect(
      reporting.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "Inside the technical record"
        }
      )
    ).toBeVisible();


    await expect(
      reporting.locator(
        '[data-infrastructure-record]'
      )
    ).toHaveCount(
      3
    );


    for (
      const title
      of
      [
        "Assessed surface",
        "System context",
        "Technical observations"
      ]
    ) {

      await expect(
        reporting.getByText(
          title,
          {
            exact:
              true
          }
        )
      ).toBeVisible();

    }


    await expect(
      page.locator(
        '[data-infrastructure-ui="reporting-register"]'
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "Infrastructure assessment discussion retains truthful destinations",
  async ({
    page
  }) => {

    await page.goto(
      "/services/infrastructure-security"
    );


    const cta =
      page.locator(
        '[data-infrastructure-section="cta"]'
      );


    await expect(
      cta.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Understand what is exposed and where it can lead."
        }
      )
    ).toBeVisible();


    await expect(
      cta.getByRole(
        "link",
        {
          name:
            /Discuss an assessment/
        }
      )
    ).toHaveAttribute(
      "href",
      "/contact"
    );


    await expect(
      cta.getByRole(
        "link",
        {
          name:
            /View all services/
        }
      )
    ).toHaveAttribute(
      "href",
      "/services"
    );

  }
);


test(
  "Infrastructure V25 uses one purposeful section sequence",
  async ({
    page
  }) => {

    await page.goto(
      "/services/infrastructure-security"
    );


    const order =
      await page
        .locator(
          '[data-infrastructure-section]'
        )
        .evaluateAll(
          elements =>
            elements.map(
              element =>
                element.getAttribute(
                  "data-infrastructure-section"
                )
            )
        );


    expect(
      order
    ).toEqual([
      "hero",
      "external-surface",
      "internal-paths",
      "reporting",
      "cta"
    ]);

  }
);


test(
  "Infrastructure main regions use one shared outer frame",
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
      "/services/infrastructure-security"
    );


    const frames =
      page.locator(
        '[data-infrastructure-frame]'
      );


    await expect(
      frames
    ).toHaveCount(
      5
    );


    const geometry =
      await frames.evaluateAll(
        elements =>
          elements.map(
            element => {

              const rect =
                element.getBoundingClientRect();


              return {
                x:
                  rect.x,

                width:
                  rect.width
              };

            }
          )
      );


    const xs =
      geometry.map(
        item =>
          item.x
      );


    const widths =
      geometry.map(
        item =>
          item.width
      );


    expect(
      Math.max(
        ...xs
      )
      -
      Math.min(
        ...xs
      )
    ).toBeLessThanOrEqual(
      1
    );


    expect(
      Math.max(
        ...widths
      )
      -
      Math.min(
        ...widths
      )
    ).toBeLessThanOrEqual(
      1
    );

  }
);


test(
  "Infrastructure heading uses natural wrapping rather than forced phrase fragments",
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
      "/services/infrastructure-security"
    );


    const heading =
      page.getByRole(
        "heading",
        {
          level:
            1,
          name:
            "Infrastructure risk starts with what is reachable."
        }
      );


    await expect(
      heading
    ).toBeVisible();


    const fragmentCount =
      await heading.locator(
        "span"
      ).count();


    expect(
      fragmentCount
    ).toBe(
      0
    );

  }
);


for (
  const viewport
  of
  [
    {
      label:
        "320",
      width:
        320,
      height:
        800
    },
    {
      label:
        "390",
      width:
        390,
      height:
        844
    },
    {
      label:
        "768",
      width:
        768,
      height:
        1024
    },
    {
      label:
        "1024",
      width:
        1024,
      height:
        768
    },
    {
      label:
        "1280",
      width:
        1280,
      height:
        800
    },
    {
      label:
        "1440",
      width:
        1440,
      height:
        900
    }
  ]
) {

  test(
    `Infrastructure Security V25 remains contained at ${viewport.label}`,
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
        "/services/infrastructure-security"
      );


      await expect(
        page.locator(
          '[data-infrastructure-audit="v25"]'
        )
      ).toBeVisible();


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

}
