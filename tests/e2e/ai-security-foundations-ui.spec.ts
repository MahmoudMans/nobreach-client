import {
  expect,
  test
} from "@playwright/test";


const route =
  "/training/ai-security-foundations";


test(
  "AI Security V39 renders four visible sections",
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
        '[data-ai-security-design="v39"]'
      );


    await expect(
      root
    ).toBeVisible();


    const sections =
      root.locator(
        ":scope > section[data-ai-v39-section]"
      );


    await expect(
      sections
    ).toHaveCount(
      4
    );


    for (
      let index = 0;
      index < 4;
      index += 1
    ) {

      await expect(
        sections.nth(
          index
        )
      ).toBeVisible();

    }

  }
);


test(
  "AI Security V39 uses the new hero",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const hero =
      page.locator(
        '[data-ai-v39-section="hero"]'
      );


    await expect(
      hero
    ).toBeVisible();


    await expect(
      hero.getByRole(
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
      hero.getByText(
        "Secure the system around the model."
      )
    ).toBeVisible();


    await expect(
      hero.getByText(
        "MODEL ≠ SYSTEM"
      )
    ).toBeVisible();

  }
);


test(
  "AI Security V39 preserves canonical audience and objectives",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const surface =
      page.locator(
        '[data-ai-v39-section="surface"]'
      );


    await expect(
      surface.getByRole(
        "heading",
        {
          level:
            2,

          name:
            /designed for learners building practical security capability/i
        }
      )
    ).toBeVisible();


    await expect(
      surface.getByText(
        "Application-security learners"
      )
    ).toBeVisible();


    await expect(
      surface.getByText(
        /understand tool-calling and permission boundaries/i
      )
    ).toBeVisible();

  }
);


test(
  "AI Security V39 presents the three curriculum boundaries",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const program =
      page.locator(
        '[data-ai-v39-section="program"]'
      );


    for (
      const name
      of [
        "AI Application Attack Surface",
        "Prompt Injection",
        "Tool-Using Systems"
      ]
    ) {

      await expect(
        program.getByRole(
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


    await expect(
      program.getByText(
        /AI application trust boundaries/i
      )
    ).toBeVisible();


    await expect(
      program.getByText(
        /no advanced machine-learning background required/i
      )
    ).toBeVisible();

  }
);


test(
  "AI Security V39 uses one research note instead of the old article section",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const note =
      page.locator(
        '[data-ai-v39-section="note"]'
      );


    await expect(
      note
    ).toBeVisible();


    const research =
      note.getByRole(
        "link",
        {
          name:
            /prompt injection matters most when AI can act/i
        }
      );


    await expect(
      research
    ).toBeVisible();


    await expect(
      research
    ).toHaveAttribute(
      "href",
      "/insights/prompt-injection-matters-when-ai-can-act"
    );


    await expect(
      note.getByText(
        /build practical security capability/i
      )
    ).toBeVisible();

  }
);


test(
  "AI Security V39 removes the legacy ambient visual",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const root =
      page.locator(
        '[data-ai-security-design="v39"]'
      );


    await expect(
      root
    ).toBeVisible();


    const oldVisual =
      root.locator(
        '[class*="aiAmbientVisual"]'
      );


    if (
      await oldVisual.count()
      >
      0
    ) {

      await expect(
        oldVisual.first()
      ).toBeHidden();

    }

  }
);


test(
  "AI Security V39 body stays dark",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const sections =
      page.locator(
        "[data-ai-v39-section]"
      );


    await expect(
      sections
    ).toHaveCount(
      4
    );


    for (
      let index = 0;
      index < 4;
      index += 1
    ) {

      const section =
        sections.nth(
          index
        );


      const state =
        await section.evaluate(
          (
            element
          ) => {

            const style =
              getComputedStyle(
                element
              );


            return {
              backgroundColor:
                style.backgroundColor,

              backgroundImage:
                style.backgroundImage
            };

          }
        );


      const channels =
        state
          .backgroundColor
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
        state.backgroundImage
        ===
        "none"
        &&
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


test(
  "V39 remains isolated from the other training programs",
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
          "[data-ai-v39-section]"
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
    `AI Security V39 remains contained at ${viewport.name}`,
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
                .clientWidth,

            pageHeight:
              document
                .documentElement
                .scrollHeight
          })
        );


      expect(
        geometry.scrollWidth
      ).toBeLessThanOrEqual(
        geometry.clientWidth
        +
        1
      );


      if (
        viewport.width
        >=
        1180
      ) {

        expect(
          geometry.pageHeight
        ).toBeLessThan(
          3900
        );

      }

    }
  );

}


test(
  "AI Security V39 replaces the generic training DOM",
  async ({
    page
  }) => {

    await page.goto(
      route
    );


    const root =
      page.locator(
        '[data-ai-security-design="v39"]'
      );


    await expect(
      root
    ).toBeVisible();


    /*
     * The AI route must contain exactly the four V39 sections as direct
     * section children — not eight hidden generic course sections plus V39.
     */

    const directSections =
      root.locator(
        ":scope > section"
      );


    await expect(
      directSections
    ).toHaveCount(
      4
    );


    await expect(
      root.locator(
        ':scope > section[data-ai-v39-section="hero"]'
      )
    ).toHaveCount(
      1
    );


    await expect(
      root.locator(
        ':scope > section[data-ai-v39-section="surface"]'
      )
    ).toHaveCount(
      1
    );


    await expect(
      root.locator(
        ':scope > section[data-ai-v39-section="program"]'
      )
    ).toHaveCount(
      1
    );


    await expect(
      root.locator(
        ':scope > section[data-ai-v39-section="note"]'
      )
    ).toHaveCount(
      1
    );

  }
);
