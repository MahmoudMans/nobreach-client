import {
  expect,
  test
} from "@playwright/test";


const ROUTE =
  "/contact";


test(
  "Contact renders V101 while preserving V12 identity",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const root =
      page.locator(
        '[data-contact-design="v12-simple"]'
      );


    await expect(
      root
    ).toHaveAttribute(
      "data-contact-redesign",
      "v101"
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level: 1,
          name:
            "Get in touch."
        }
      )
    ).toHaveCount(
      1
    );


    await expect(
      page.getByText(
        /you can contact us directly by email or connect with us on linkedin/i
      )
    ).toBeVisible();

  }
);


test(
  "Contact desktop uses one balanced two-column stage",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width: 1440,
      height: 900
    });


    await page.goto(
      ROUTE
    );


    const stage =
      page.locator(
        '[data-contact-section="direct-contact"]'
      );


    const grid =
      stage.locator(
        '> div > div'
      );


    const intro =
      stage.locator(
        '[class*="intro"]'
      ).first();


    const options =
      stage.getByLabel(
        "Contact options"
      );


    const [
      introBox,
      optionsBox,
      stageBox
    ] =
      await Promise.all([
        intro.boundingBox(),
        options.boundingBox(),
        stage.boundingBox()
      ]);


    expect(
      introBox
    ).not.toBeNull();


    expect(
      optionsBox
    ).not.toBeNull();


    expect(
      stageBox
    ).not.toBeNull();


    if (
      !introBox
      ||
      !optionsBox
      ||
      !stageBox
    ) {

      return;

    }


    expect(
      optionsBox.x
    ).toBeGreaterThan(
      introBox.x
      +
      introBox.width
    );


    expect(
      optionsBox.width
    ).toBeGreaterThan(
      introBox.width
    );


    const display =
      await grid.evaluate(
        element =>
          getComputedStyle(
            element
          ).display
      );


    expect(
      display
    ).toBe(
      "grid"
    );

  }
);


test(
  "Contact removes the excessive top and bottom dead space",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width: 1440,
      height: 900
    });


    await page.goto(
      ROUTE
    );


    const root =
      page.locator(
        '[data-contact-design="v12-simple"]'
      );


    const stage =
      page.locator(
        '[data-contact-section="direct-contact"]'
      );


    const eyebrow =
      stage.getByText(
        "Contact",
        {
          exact: true
        }
      );


    const channelList =
      stage.locator(
        'a[data-contact-channel="email"]'
      ).locator(
        ".."
      );


    const [
      rootBox,
      eyebrowBox,
      channelListBox
    ] =
      await Promise.all([
        root.boundingBox(),
        eyebrow.boundingBox(),
        channelList.boundingBox()
      ]);


    expect(
      rootBox
    ).not.toBeNull();


    expect(
      eyebrowBox
    ).not.toBeNull();


    expect(
      channelListBox
    ).not.toBeNull();


    if (
      !rootBox
      ||
      !eyebrowBox
      ||
      !channelListBox
    ) {

      return;

    }


    /*
     * Contact content should begin materially inside the first viewport.
     */

    expect(
      eyebrowBox.y
    ).toBeLessThan(
      240
    );


    /*
     * Root should not retain hundreds of pixels of empty canvas after the
     * final contact option.
     */

    expect(
      rootBox.y
      +
      rootBox.height
      -
      (
        channelListBox.y
        +
        channelListBox.height
      )
    ).toBeLessThan(
      170
    );

  }
);


test(
  "Email remains direct contact and LinkedIn remains the external company channel",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const email =
      page.locator(
        'a[data-contact-channel="email"]'
      );


    const linkedIn =
      page.locator(
        'a[data-contact-channel="linkedin"]'
      );


    await expect(
      email
    ).toHaveAttribute(
      "href",
      /^mailto:/
    );


    await expect(
      email
    ).toHaveAttribute(
      "data-contact-priority",
      "primary"
    );


    await expect(
      linkedIn
    ).toHaveAttribute(
      "href",
      /linkedin\.com\/company\/no-breach/
    );


    await expect(
      linkedIn
    ).toHaveAttribute(
      "target",
      "_blank"
    );


    await expect(
      linkedIn
    ).toHaveAttribute(
      "data-contact-priority",
      "secondary"
    );

  }
);


test(
  "Contact stacks cleanly on narrow screens without horizontal overflow",
  async ({
    page
  }) => {

    for (
      const viewport
      of [
        {
          width: 390,
          height: 844
        },
        {
          width: 320,
          height: 760
        }
      ]
    ) {

      await page.setViewportSize(
        viewport
      );


      await page.goto(
        ROUTE
      );


      const overflow =
        await page.evaluate(
          () =>
            document.documentElement.scrollWidth
            -
            document.documentElement.clientWidth
        );


      expect(
        overflow
      ).toBeLessThanOrEqual(
        1
      );


      const stage =
        page.locator(
          '[data-contact-section="direct-contact"]'
        );


      const email =
        stage.locator(
          'a[data-contact-channel="email"]'
        );


      const linkedin =
        stage.locator(
          'a[data-contact-channel="linkedin"]'
        );


      const [
        emailBox,
        linkedinBox
      ] =
        await Promise.all([
          email.boundingBox(),
          linkedin.boundingBox()
        ]);


      expect(
        emailBox
      ).not.toBeNull();


      expect(
        linkedinBox
      ).not.toBeNull();


      if (
        !emailBox
        ||
        !linkedinBox
      ) {

        continue;

      }


      expect(
        linkedinBox.y
      ).toBeGreaterThan(
        emailBox.y
      );

    }

  }
);
