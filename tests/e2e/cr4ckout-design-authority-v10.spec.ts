import {
  expect,
  test
} from "@playwright/test";


test(
  "CR4CKOUT V11 presents the signature challenge without unsupported status claims",
  async ({
    page
  }) => {

    await page.goto(
      "/cr4ckout"
    );


    await expect(
      page.locator(
        '[data-cr4ckout-audit="v11"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,
          name:
            "CR4CKOUT"
        }
      )
    ).toBeVisible();


    await expect(
      page.getByText(
        "A story-driven hacking challenge.",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      page.getByText(
        /only event of its kind in Tunisia/i
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.getByText(
        "SIGNAL ACTIVE",
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
  "CR4CKOUT V11 uses a static challenge-theme illustration",
  async ({
    page
  }) => {

    await page.goto(
      "/cr4ckout"
    );


    const figure =
      page.locator(
        '[data-cr4ckout-ui="theme-illustration"]'
      );


    await expect(
      figure
    ).toBeVisible();


    for (
      const label
      of
      [
        "Challenge themes",
        "Cryptography",
        "Steganography",
        "System access"
      ]
    ) {

      await expect(
        figure.getByText(
          label,
          {
            exact:
              true
          }
        )
      ).toBeVisible();

    }


    await expect(
      figure.locator(
        "a, button"
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "CR4CKOUT V11 integrates three overview facts into the hero",
  async ({
    page
  }) => {

    await page.goto(
      "/cr4ckout"
    );


    const hero =
      page.locator(
        '[data-cr4ckout-section="hero"]'
      );


    for (
      const value
      of
      [
        "Story-driven challenge",
        "Universities and tech events",
        "Tunisia"
      ]
    ) {

      await expect(
        hero.getByText(
          value,
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
  "CR4CKOUT V11 merges the experience narrative into four connected stages",
  async ({
    page
  }) => {

    await page.goto(
      "/cr4ckout"
    );


    const experience =
      page.locator(
        '[data-cr4ckout-section="experience"]'
      );


    await expect(
      experience.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Hack. Learn. Break. Build."
        }
      )
    ).toBeVisible();


    const steps =
      experience.locator(
        '[data-cr4ckout-experience-step]'
      );


    await expect(
      steps
    ).toHaveCount(
      4
    );


    for (
      const title
      of
      [
        "Hack",
        "Learn",
        "Break",
        "Build"
      ]
    ) {

      await expect(
        experience.getByRole(
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
  "CR4CKOUT V11 preserves three descriptive challenge areas",
  async ({
    page
  }) => {

    await page.goto(
      "/cr4ckout"
    );


    const challenges =
      page.locator(
        '[data-cr4ckout-section="challenges"]'
      );


    await expect(
      challenges.locator(
        '[data-cr4ckout-challenge]'
      )
    ).toHaveCount(
      3
    );


    for (
      const title
      of
      [
        "Cryptography",
        "Steganography",
        "System access challenges"
      ]
    ) {

      await expect(
        challenges.getByRole(
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
  "CR4CKOUT V11 exposes verified context for CR4CKOUT 2.0",
  async ({
    page
  }) => {

    await page.goto(
      "/cr4ckout"
    );


    const feature =
      page.locator(
        '[data-cr4ckout-ui="event-feature"]'
      );


    await expect(
      feature
    ).toBeVisible();


    await expect(
      feature.getByText(
        "Past event",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      feature.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "CR4CKOUT 2.0"
        }
      )
    ).toBeVisible();


    await expect(
      feature.getByText(
        "2025",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      feature.getByText(
        "Tunis, Tunisia",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      feature.getByRole(
        "link",
        {
          name:
            /View event details/
        }
      )
    ).toHaveAttribute(
      "href",
      "/events/cr4ckout-2-0"
    );

  }
);


test(
  "CR4CKOUT V11 separates event details from general event browsing",
  async ({
    page
  }) => {

    await page.goto(
      "/cr4ckout"
    );


    const events =
      page.locator(
        '[data-cr4ckout-section="events"]'
      );


    await expect(
      events.getByRole(
        "link",
        {
          name:
            /Browse all No Breach events/
        }
      )
    ).toHaveAttribute(
      "href",
      "/events"
    );


    await expect(
      events.getByRole(
        "link",
        {
          name:
            /View event details/
        }
      )
    ).toHaveAttribute(
      "href",
      "/events/cr4ckout-2-0"
    );

  }
);


test(
  "CR4CKOUT V11 gives organizers useful hosting guidance",
  async ({
    page
  }) => {

    await page.goto(
      "/cr4ckout"
    );


    const host =
      page.locator(
        '[data-cr4ckout-section="host"]'
      );


    await expect(
      host.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Bring CR4CKOUT to your university or tech event."
        }
      )
    ).toBeVisible();


    await expect(
      host.getByText(
        /institution or event, location, preferred timing and expected audience/i
      )
    ).toBeVisible();


    await expect(
      host.getByRole(
        "link",
        {
          name:
            /Discuss hosting/
        }
      )
    ).toHaveAttribute(
      "href",
      "/contact"
    );


    await expect(
      host.getByRole(
        "link",
        {
          name:
            /Explore events/
        }
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "CR4CKOUT V11 keeps one purposeful page sequence",
  async ({
    page
  }) => {

    await page.goto(
      "/cr4ckout"
    );


    const order =
      await page
        .locator(
          '[data-cr4ckout-section]'
        )
        .evaluateAll(
          elements =>
            elements.map(
              element =>
                element.getAttribute(
                  "data-cr4ckout-section"
                )
            )
        );


    expect(
      order
    ).toEqual([
      "hero",
      "experience",
      "challenges",
      "events",
      "host"
    ]);

  }
);


test(
  "CR4CKOUT V11 uses one shared outer frame",
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
      "/cr4ckout"
    );


    const frames =
      page.locator(
        '[data-cr4ckout-frame]'
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
    `CR4CKOUT V11 remains contained at ${viewport.label}`,
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
        "/cr4ckout"
      );


      await expect(
        page.locator(
          '[data-cr4ckout-audit="v11"]'
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
