import {
  expect,
  test
} from "@playwright/test";


test(
  "Security Training V26 opens as an organization-facing service",
  async ({
    page
  }) => {

    await page.goto(
      "/services/security-training"
    );


    await expect(
      page.locator(
        '[data-security-training-audit="v26"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,
          name:
            "Security capability is built through practice."
        }
      )
    ).toBeVisible();


    await expect(
      page.getByText(
        /Practical cybersecurity training for companies, universities, communities and teams/i
      )
    ).toBeVisible();


    await expect(
      page.getByText(
        /both teams and individuals/i
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "Security Training V26 gives individual learners an immediate Training Hub route",
  async ({
    page
  }) => {

    await page.goto(
      "/services/security-training"
    );


    const aside =
      page.locator(
        '[data-security-training-ui="training-hub-aside"]'
      );


    await expect(
      aside
    ).toBeVisible();


    await expect(
      aside.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Training Hub"
        }
      )
    ).toBeVisible();


    await expect(
      aside.getByText(
        /Looking for a public learner program/i
      )
    ).toBeVisible();


    await expect(
      aside.getByRole(
        "link",
        {
          name:
            /Explore Training Hub/
        }
      )
    ).toHaveAttribute(
      "href",
      "/training"
    );

  }
);


test(
  "Security Training hero keeps the service inquiry and in-page exploration actions",
  async ({
    page
  }) => {

    await page.goto(
      "/services/security-training"
    );


    const hero =
      page.locator(
        '[data-security-training-section="hero"]'
      );


    await expect(
      hero.getByRole(
        "link",
        {
          name:
            /Discuss training/
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
            /Explore the service/
        }
      )
    ).toHaveAttribute(
      "href",
      "#audiences"
    );

  }
);


test(
  "Security Training V26 preserves four organization contexts",
  async ({
    page
  }) => {

    await page.goto(
      "/services/security-training"
    );


    const audienceRows =
      page.locator(
        '[data-security-training-audience]'
      );


    await expect(
      audienceRows
    ).toHaveCount(
      4
    );


    for (
      const title
      of
      [
        "Companies",
        "Universities",
        "Communities",
        "Teams"
      ]
    ) {

      await expect(
        page.getByRole(
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

  }
);


test(
  "Security Training V26 presents one four-stage learning architecture",
  async ({
    page
  }) => {

    await page.goto(
      "/services/security-training"
    );


    const architecture =
      page.locator(
        '[data-security-training-section="architecture"]'
      );


    await expect(
      architecture.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "From learning context to technical practice."
        }
      )
    ).toBeVisible();


    const stages =
      architecture.locator(
        '[data-security-training-step]'
      );


    await expect(
      stages
    ).toHaveCount(
      4
    );


    for (
      const title
      of
      [
        "Context",
        "Design",
        "Practice",
        "Review"
      ]
    ) {

      await expect(
        architecture.getByRole(
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
      architecture.getByText(
        /current cybersecurity practice rather than generic awareness material/i
      )
    ).toBeVisible();

  }
);


test(
  "Security Training V26 removes the late route comparison",
  async ({
    page
  }) => {

    await page.goto(
      "/services/security-training"
    );


    await expect(
      page.locator(
        '[data-security-training-section="journeys"]'
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.locator(
        '[data-security-training-ui="journey-system"]'
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.getByText(
        "Organization-facing training and public programs are different paths.",
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
  "Security Training V26 intentionally omits an unapproved training example",
  async ({
    page
  }) => {

    await page.goto(
      "/services/security-training"
    );


    await expect(
      page.locator(
        '[data-security-training-example]'
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.getByText(
        /Representative training example/i
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "Security Training discussion keeps group inquiry and public learner routes distinct",
  async ({
    page
  }) => {

    await page.goto(
      "/services/security-training"
    );


    const cta =
      page.locator(
        '[data-security-training-section="cta"]'
      );


    await expect(
      cta.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Build practical security capability with your group."
        }
      )
    ).toBeVisible();


    await expect(
      cta.getByRole(
        "link",
        {
          name:
            /Start a conversation/
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
            /Explore Training Hub/
        }
      )
    ).toHaveAttribute(
      "href",
      "/training"
    );


    await expect(
      cta.getByText(
        /technical background and the security capability you want to develop/i
      )
    ).toBeVisible();

  }
);


test(
  "Security Training V26 uses one purposeful section sequence",
  async ({
    page
  }) => {

    await page.goto(
      "/services/security-training"
    );


    const order =
      await page
        .locator(
          '[data-security-training-section]'
        )
        .evaluateAll(
          elements =>
            elements.map(
              element =>
                element.getAttribute(
                  "data-security-training-section"
                )
            )
        );


    expect(
      order
    ).toEqual([
      "hero",
      "audiences",
      "architecture",
      "cta"
    ]);

  }
);


test(
  "Security Training main regions use one shared outer frame",
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
      "/services/security-training"
    );


    const frames =
      page.locator(
        '[data-security-training-frame]'
      );


    await expect(
      frames
    ).toHaveCount(
      4
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
  "Security Training architecture recomposes before four stages become cramped",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        768,
      height:
        1024
    });


    await page.goto(
      "/services/security-training"
    );


    const system =
      page.locator(
        '[data-security-training-ui="learning-system"]'
      );


    await expect(
      system
    ).toBeVisible();


    const columns =
      await system.evaluate(
        element =>
          getComputedStyle(
            element
          ).gridTemplateColumns
      );


    expect(
      columns
        .trim()
        .split(
          /\s+/
        )
        .length
    ).toBeLessThanOrEqual(
      2
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
    `Security Training V26 remains contained at ${viewport.label}`,
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
        "/services/security-training"
      );


      await expect(
        page.locator(
          '[data-security-training-audit="v26"]'
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
