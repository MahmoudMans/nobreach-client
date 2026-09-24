import {
  expect,
  test
} from "@playwright/test";


const route =
  "/cr4ckout";


test(
  "CR4CKOUT renders the continuous seven-section event page",
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
        '[data-cr4ckout-design="continuous-system"]'
      );


    await expect(
      root
    ).toBeVisible();


    await expect(
      root.locator(
        ":scope > section[data-cr4ckout-section]"
      )
    ).toHaveCount(
      7
    );


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
    ).toHaveCount(
      1
    );

  }
);


test(
  "CR4CKOUT does not introduce another navigation bar",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const root =
      page.locator(
        '[data-cr4ckout-design="continuous-system"]'
      );


    await expect(
      root.locator(
        "nav"
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "hero presents the event identity and primary actions",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const hero =
      page.locator(
        '[data-cr4ckout-section="hero"]'
      );


    await expect(
      hero.getByText(
        /a hacking experience/i
      )
    ).toBeVisible();


    await expect(
      hero.getByRole(
        "link",
        {
          name:
            /explore the challenge/i
        }
      )
    ).toHaveAttribute(
      "href",
      "#challenge-areas"
    );


    await expect(
      hero.getByRole(
        "link",
        {
          name:
            /host cr4ckout/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/contact"
    );

  }
);


test(
  "compact event profile contains four meaningful signals",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const profile =
      page.locator(
        '[data-cr4ckout-section="profile"]'
      );


    await expect(
      profile
    ).toBeVisible();


    await expect(
      profile.locator(
        "dt"
      )
    ).toHaveCount(
      4
    );


    await expect(
      profile.getByText(
        "Story-driven challenge"
      )
    ).toBeVisible();


    await expect(
      profile.getByText(
        "Tunisia"
      )
    ).toBeVisible();

  }
);


test(
  "challenge area is a three-row editorial sequence",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const section =
      page.locator(
        '[data-cr4ckout-section="challenges"]'
      );


    await expect(
      section.locator(
        "[data-cr4ckout-challenge]"
      )
    ).toHaveCount(
      3
    );


    for (
      const name
      of [
        "Cryptography",
        "Steganography",
        "System access challenges"
      ]
    ) {

      await expect(
        section.getByRole(
          "heading",
          {
            level:
              3,

            name
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "experience uses the four connected HACK LEARN BREAK BUILD steps",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const section =
      page.locator(
        '[data-cr4ckout-section="experience"]'
      );


    await expect(
      section.locator(
        "ol > li"
      )
    ).toHaveCount(
      4
    );


    for (
      const label
      of [
        "HACK",
        "LEARN",
        "BREAK",
        "BUILD"
      ]
    ) {

      await expect(
        section.getByText(
          label,
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
  "archive preserves the published CR4CKOUT event routes",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const archive =
      page.locator(
        '[data-cr4ckout-section="archive"]'
      );


    await expect(
      archive.getByRole(
        "link",
        {
          name:
            /cr4ckout 2\.0/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/events/cr4ckout-2-0"
    );


    await expect(
      archive.getByRole(
        "link",
        {
          name:
            /browse all nobreach events/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/events"
    );

  }
);


test(
  "hosting CTA is the final page conversion section",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const root =
      page.locator(
        '[data-cr4ckout-design="continuous-system"]'
      );


    const sections =
      root.locator(
        ":scope > section[data-cr4ckout-section]"
      );


    await expect(
      sections.last()
    ).toHaveAttribute(
      "data-cr4ckout-section",
      "host"
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
            /want to host cr4ck0ut/i
        }
      )
    ).toBeVisible();


    await expect(
      host.getByRole(
        "link",
        {
          name:
            /contact nobreach/i
        }
      )
    ).toHaveAttribute(
      "href",
      "/contact"
    );

  }
);


test(
  "desktop hero occupies the first meaningful viewport",
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


    const hero =
      page.locator(
        '[data-cr4ckout-section="hero"]'
      );


    const box =
      await hero.boundingBox();


    expect(
      box
    ).not.toBeNull();


    expect(
      box?.height
      ??
      0
    ).toBeGreaterThan(
      700
    );

  }
);


test(
  "all CR4CKOUT sections stay in the dark NoBreach surface system",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const sections =
      page.locator(
        "[data-cr4ckout-section]"
      );


    await expect(
      sections
    ).toHaveCount(
      7
    );


    for (
      let index = 0;
      index < 7;
      index += 1
    ) {

      const section =
        sections.nth(
          index
        );


      const background =
        await section.evaluate(
          (
            element
          ) =>
            getComputedStyle(
              element
            ).backgroundColor
        );


      const channels =
        background
          .match(
            /\d+/g
          )
          ?.slice(
            0,
            3
          )
          .map(
            Number
          )
        ??
        [];


      if (
        channels.length
        ===
        3
      ) {

        expect(
          Math.max(
            ...channels
          )
        ).toBeLessThan(
          70
        );

      }

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
    `CR4CKOUT remains contained at ${viewport.name}`,
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
              "CR4CKOUT"
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

    }
  );

}
