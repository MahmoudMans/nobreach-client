import {
  expect,
  test,
} from "@playwright/test";


test(
  "CR4CKOUT V10 presents the signature event experience",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        1440,

      height:
        900,
    });


    await page.goto(
      "/cr4ckout",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    await expect(
      page.locator(
        '[data-cr4ckout-design="authority-v10"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            "CR4CKOUT",
        }
      )
    ).toBeVisible();


    await expect(
      page.getByText(
        "A hacking experience like no other."
      )
    ).toBeVisible();

  }
);


test(
  "CR4CKOUT V10 presents three technical challenge disciplines",
  async ({
    page
  }) => {

    await page.goto(
      "/cr4ckout",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    const disciplines =
      page.locator(
        "[data-cr4ckout-discipline]"
      );


    await expect(
      disciplines
    ).toHaveCount(
      3
    );


    const section =
      page.locator(
        '[data-cr4ckout-section="disciplines"]'
      );


    await section
      .scrollIntoViewIfNeeded();


    await expect(
      section.getByRole(
        "heading",
        {
          name:
            "Cryptography",
        }
      )
    ).toBeVisible();


    await expect(
      section.getByRole(
        "heading",
        {
          name:
            "Steganography",
        }
      )
    ).toBeVisible();


    await expect(
      section.getByRole(
        "heading",
        {
          name:
            "System access challenges",
        }
      )
    ).toBeVisible();

  }
);


test(
  "CR4CKOUT V10 exposes hosting and event archive journeys",
  async ({
    page
  }) => {

    await page.goto(
      "/cr4ckout",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    const host =
      page.locator(
        '[data-cr4ckout-section="host"]'
      );


    await host
      .scrollIntoViewIfNeeded();


    await expect(
      host
    ).toBeVisible();


    await expect(
      host.getByRole(
        "heading",
        {
          name:
            /want to host cr4ckout at your university or tech event/i,
        }
      )
    ).toBeVisible();


    await expect(
      host.getByRole(
        "link",
        {
          name:
            "Contact us",
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
            /explore previous events/i,
        }
      )
    ).toHaveAttribute(
      "href",
      "/events"
    );

  }
);


test(
  "CR4CKOUT V10 uses editorial rows instead of a card wall",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        1440,

      height:
        900,
    });


    await page.goto(
      "/cr4ckout",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    const rows =
      page.locator(
        "[data-cr4ckout-discipline]"
      );


    await rows
      .first()
      .scrollIntoViewIfNeeded();


    const geometry =
      await rows.evaluateAll(
        elements =>
          elements.map(
            element => {

              const rect =
                element.getBoundingClientRect();

              const style =
                window.getComputedStyle(
                  element
                );


              return {
                width:
                  rect.width,

                y:
                  rect.y,

                radius:
                  style.borderRadius,
              };

            }
          )
      );


    expect(
      geometry
    ).toHaveLength(
      3
    );


    for (
      const row
      of geometry
    ) {

      expect(
        row.width
      ).toBeGreaterThan(
        700
      );


      expect(
        row.radius
      ).toBe(
        "0px"
      );

    }


    expect(
      geometry[1].y
    ).toBeGreaterThan(
      geometry[0].y
    );

  }
);


test(
  "CR4CKOUT V10 remains controlled on mobile",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        390,

      height:
        844,
    });


    await page.goto(
      "/cr4ckout",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            "CR4CKOUT",
        }
      )
    ).toBeVisible();


    const geometry =
      await page.evaluate(
        () => ({
          scrollWidth:
            document.documentElement.scrollWidth,

          clientWidth:
            document.documentElement.clientWidth,
        })
      );


    expect(
      geometry.scrollWidth
    ).toBeLessThanOrEqual(
      geometry.clientWidth + 1
    );

  }
);
