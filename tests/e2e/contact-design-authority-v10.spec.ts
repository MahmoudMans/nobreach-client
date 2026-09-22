import {
  expect,
  test,
} from "@playwright/test";


test(
  "contact V10 presents the consultation journey",
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
      "/contact",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    await expect(
      page.locator(
        '[data-contact-design="authority-v10"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            "Contact",
        }
      )
    ).toBeVisible();


    await expect(
      page.getByText(
        "Getting to know our clients."
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            2,

          name:
            "Getting to Know Our Clients",
        }
      )
    ).toBeVisible();

  }
);


test(
  "contact V10 exposes the three supplied intake stages",
  async ({
    page
  }) => {

    await page.goto(
      "/contact",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    const form =
      page.locator(
        "[data-consultation-form]"
      );


    await form
      .scrollIntoViewIfNeeded();


    await expect(
      form
    ).toBeVisible();


    await expect(
      form.locator(
        "[data-intake-stage]"
      )
    ).toHaveCount(
      3
    );


    await expect(
      form.locator(
        '[data-intake-stage="client-profile"]'
      )
    ).toBeVisible();


    await expect(
      form.locator(
        '[data-intake-stage="service-needs"]'
      )
    ).toBeVisible();


    await expect(
      form.locator(
        '[data-intake-stage="technical-maturity"]'
      )
    ).toBeVisible();

  }
);


test(
  "contact V10 implements the approved client profile fields",
  async ({
    page
  }) => {

    await page.goto(
      "/contact",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    const form =
      page.locator(
        "[data-consultation-form]"
      );


    await form
      .scrollIntoViewIfNeeded();


    for (
      const label
      of [
        "Startup",
        "Mid-size company",
        "Large company / Enterprise",
        "Educational institution",
        "Individual / Independent professional",
      ]
    ) {

      await expect(
        form.getByLabel(
          label,
          {
            exact:
              true,
          }
        )
      ).toBeVisible();

    }


    await expect(
      form.getByLabel(
        /Industry \/ Sector/
      )
    ).toBeVisible();


    for (
      const label
      of [
        "1–10",
        "11–50",
        "51–200",
        "201+",
      ]
    ) {

      await expect(
        form.getByLabel(
          label,
          {
            exact:
              true,
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "contact V10 implements service interest and preferred format fields",
  async ({
    page
  }) => {

    await page.goto(
      "/contact",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    const form =
      page.locator(
        "[data-consultation-form]"
      );


    for (
      const label
      of [
        "Security Consulting",
        "Zerodays",
        "Web Application Pentesting",
        "Cybersecurity Training",
        "Combination of the above",
        "Not sure yet — need guidance",
      ]
    ) {

      await expect(
        form.getByLabel(
          label,
          {
            exact:
              true,
          }
        )
      ).toBeVisible();

    }


    for (
      const label
      of [
        "One-time consultation",
        "Ongoing support",
        "Short-term project",
        "Training session(s) only",
      ]
    ) {

      await expect(
        form.getByLabel(
          label,
          {
            exact:
              true,
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "contact V10 intake can be completed and reviewed without pretending to send",
  async ({
    page
  }) => {

    await page.goto(
      "/contact",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    const form =
      page.locator(
        "[data-consultation-form]"
      );


    await form
      .scrollIntoViewIfNeeded();


    await form
      .getByLabel(
        "Startup",
        {
          exact:
            true,
        }
      )
      .check();


    await form
      .getByLabel(
        /Industry \/ Sector/
      )
      .fill(
        "Technology"
      );


    await form
      .getByLabel(
        "11–50",
        {
          exact:
            true,
        }
      )
      .check();


    await form
      .getByLabel(
        "Security Consulting",
        {
          exact:
            true,
        }
      )
      .check();


    await form
      .getByLabel(
        "Web Application Pentesting",
        {
          exact:
            true,
        }
      )
      .check();


    await form
      .getByLabel(
        "Ongoing support",
        {
          exact:
            true,
        }
      )
      .check();


    const maturityStage =
      form.locator(
        '[data-intake-stage="technical-maturity"]'
      );


    await maturityStage
      .locator(
        'input[name="strategy"][value="Partially"]'
      )
      .check();


    await maturityStage
      .locator(
        'input[name="inHouseTeam"][value="Yes"]'
      )
      .check();


    await form.getByRole(
      "button",
      {
        name:
          /review consultation brief/i,
      }
    ).click();


    const review =
      form.locator(
        "[data-consultation-review]"
      );


    await expect(
      review
    ).toContainText(
      "Consultation brief ready."
    );


    await expect(
      review
    ).toContainText(
      "Nothing has been sent from this page."
    );


    await expect(
      form.getByLabel(
        "Startup",
        {
          exact:
            true,
        }
      )
    ).toBeChecked();


    await expect(
      form.getByLabel(
        "Security Consulting",
        {
          exact:
            true,
        }
      )
    ).toBeChecked();

  }
);


test(
  "contact V10 reset clears the consultation intake",
  async ({
    page
  }) => {

    await page.goto(
      "/contact",
      {
        waitUntil:
          "domcontentloaded",
      }
    );


    const form =
      page.locator(
        "[data-consultation-form]"
      );


    const startup =
      form.getByLabel(
        "Startup",
        {
          exact:
            true,
        }
      );


    const consulting =
      form.getByLabel(
        "Security Consulting",
        {
          exact:
            true,
        }
      );


    await startup.check();

    await consulting.check();


    await form.getByRole(
      "button",
      {
        name:
          /clear answers/i,
      }
    ).click();


    await expect(
      startup
    ).not.toBeChecked();


    await expect(
      consulting
    ).not.toBeChecked();

  }
);


test(
  "contact V10 remains controlled on mobile",
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
      "/contact",
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
            "Contact",
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
