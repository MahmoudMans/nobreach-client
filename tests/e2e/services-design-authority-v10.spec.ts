import {
  expect,
  test,
} from "@playwright/test";


test(
  "services V10 presents the commercial No Breach experience",
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
      "/services",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    await expect(
      page.locator(
        '[data-services-design="authority-v10"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            /see the system from the attacker/i,
        }
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "link",
        {
          name:
            /book a consultation/i,
        }
      ).first()
    ).toHaveAttribute(
      "href",
      "/contact"
    );

  }
);


test(
  "services V10 presents consulting as editorial content",
  async ({
    page
  }) => {

    await page.goto(
      "/services",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    const consulting =
      page.locator(
        '[data-services-section="consulting"]'
      );


    await consulting
      .scrollIntoViewIfNeeded();


    await expect(
      consulting
    ).toBeVisible();


    await expect(
      consulting.getByText(
        "Security architecture reviews"
      )
    ).toBeVisible();


    await expect(
      consulting.getByText(
        "Secure workflows and infrastructure guidance"
      )
    ).toBeVisible();


    await expect(
      consulting.getByText(
        /Internal process hardening/
      )
    ).toBeVisible();

  }
);


test(
  "services V10 uses four full-width service rows",
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
      "/services",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    const rows =
      page.locator(
        "[data-service-row]"
      );


    await expect(
      rows
    ).toHaveCount(
      4
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


              return {
                width:
                  rect.width,

                y:
                  rect.y,

                height:
                  rect.height,
              };

            }
          )
      );


    expect(
      geometry
    ).toHaveLength(
      4
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
        row.height
      ).toBeGreaterThan(
        90
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
  "services V10 exposes approved penetration testing focus areas",
  async ({
    page
  }) => {

    await page.goto(
      "/services",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    const pentest =
      page.locator(
        '[data-services-section="web-penetration-testing"]'
      );


    await pentest
      .scrollIntoViewIfNeeded();


    await expect(
      pentest
    ).toBeVisible();


    const expected = [
      "In-depth testing of web applications and APIs",
      "Business logic and authentication flaw identification",
      "Manual verification of critical vulnerabilities",
      "Clear reporting with technical and executive summaries",
    ];


    for (
      const text
      of expected
    ) {

      await expect(
        pentest.getByText(
          text
        )
      ).toBeVisible();

    }


    await expect(
      pentest.getByRole(
        "link",
        {
          name:
            /explore web penetration testing/i,
        }
      )
    ).toHaveAttribute(
      "href",
      "/services/web-application-pentesting"
    );

  }
);


test(
  "services V10 remains controlled on mobile",
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
      "/services",
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
            /see the system from the attacker/i,
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
