import {
  expect,
  test
} from "@playwright/test";


test(
  "Contact V12 exposes only the direct contact channels",
  async ({
    page
  }) => {

    const response =
      await page.goto(
        "/contact",
        {
          waitUntil:
            "domcontentloaded"
        }
      );


    expect(
      response?.status()
    ).toBe(
      200
    );


    const root =
      page.locator(
        '[data-contact-design="v12-simple"]'
      );


    await expect(
      root
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,

          name:
            "Get in touch."
        }
      )
    ).toBeVisible();


    const email =
      page.locator(
        '[data-contact-channel="email"]'
      );


    await expect(
      email
    ).toBeVisible();


    await expect(
      email
    ).toHaveAttribute(
      "href",
      "mailto:nhbenbrahim@gmail.com"
    );


    await expect(
      email
    ).toContainText(
      "nhbenbrahim@gmail.com"
    );


    const linkedin =
      page.locator(
        '[data-contact-channel="linkedin"]'
      );


    await expect(
      linkedin
    ).toBeVisible();


    const linkedinHref =
      await linkedin.getAttribute(
        "href"
      );


    expect(
      linkedinHref
    ).toContain(
      "linkedin.com/company/no-breach"
    );


    await expect(
      page.locator(
        "form"
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.locator(
        "input"
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.locator(
        "textarea"
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "Contact V12 stays simple and overflow-free on mobile",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        360,

      height:
        800
    });


    await page.goto(
      "/contact",
      {
        waitUntil:
          "domcontentloaded"
      }
    );


    const email =
      page.locator(
        '[data-contact-channel="email"]'
      );


    const linkedin =
      page.locator(
        '[data-contact-channel="linkedin"]'
      );


    await expect(
      email
    ).toBeVisible();


    await expect(
      linkedin
    ).toBeVisible();


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


    expect(
      linkedinBox?.y
      ??
      0
    ).toBeGreaterThan(
      emailBox?.y
      ??
      0
    );


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
