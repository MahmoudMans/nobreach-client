import {
  expect,
  test
} from "@playwright/test";


const programs = [
  {
    slug:
      "red-team-foundations",

    title:
      "Red Team Foundations",

    url:
      "https://forms.gle/xfTXg2r1xVfECvCM8"
  },
  {
    slug:
      "ai-security-foundations",

    title:
      "AI Security Foundations",

    url:
      "https://forms.gle/G5VhyDZ8i5EpWYuA6"
  },
  {
    slug:
      "web-exploitation-techniques",

    title:
      "Web Exploitation Techniques",

    url:
      "https://forms.gle/32b6mUKhYWbpz6NF6"
  }
] as const;


test(
  "training index shows all registrations at the top",
  async ({
    page
  }) => {

    await page.goto(
      "/training",
      {
        waitUntil:
          "domcontentloaded"
      }
    );


    const registration =
      page.locator(
        '[data-registration-placement="top"]'
      );


    await expect(
      registration
    ).toBeVisible();


    for (
      const program
      of programs
    ) {

      const link =
        registration.locator(
          `[data-training-registration="${program.slug}"]`
        );


      await expect(
        link
      ).toBeVisible();


      await expect(
        link
      ).toHaveAttribute(
        "href",
        program.url
      );

    }


    const registrationBox =
      await registration.boundingBox();


    const h1 =
      page.locator(
        "h1"
      ).first();


    const headingBox =
      await h1.boundingBox();


    expect(
      registrationBox
    ).not.toBeNull();


    expect(
      headingBox
    ).not.toBeNull();


    expect(
      registrationBox?.y
      ??
      Number.MAX_SAFE_INTEGER
    ).toBeLessThan(
      headingBox?.y
      ??
      0
    );

  }
);


for (
  const program
  of programs
) {

  test(
    `${program.title} shows its registration before the course hero`,
    async ({
      page
    }) => {

      const response =
        await page.goto(
          `/training/${program.slug}`,
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


      const registration =
        page.locator(
          '[data-registration-placement="top"]'
        );


      await expect(
        registration
      ).toBeVisible();


      const links =
        registration.locator(
          "[data-training-registration]"
        );


      await expect(
        links
      ).toHaveCount(
        1
      );


      const link =
        registration.locator(
          `[data-training-registration="${program.slug}"]`
        );


      await expect(
        link
      ).toBeVisible();


      await expect(
        link
      ).toHaveAttribute(
        "href",
        program.url
      );


      await expect(
        link
      ).toContainText(
        "Register now"
      );


      const registrationBox =
        await registration.boundingBox();


      const h1 =
        page.locator(
          "h1"
        ).first();


      await expect(
        h1
      ).toBeVisible();


      const headingBox =
        await h1.boundingBox();


      expect(
        registrationBox
      ).not.toBeNull();


      expect(
        headingBox
      ).not.toBeNull();


      expect(
        registrationBox?.y
        ??
        Number.MAX_SAFE_INTEGER
      ).toBeLessThan(
        headingBox?.y
        ??
        0
      );

    }
  );

}


test(
  "top registration remains easy to use at 360px",
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
      "/training/red-team-foundations",
      {
        waitUntil:
          "domcontentloaded"
      }
    );


    const registration =
      page.locator(
        '[data-registration-placement="top"]'
      );


    await expect(
      registration
    ).toBeVisible();


    const register =
      registration.locator(
        '[data-training-registration="red-team-foundations"]'
      );


    await expect(
      register
    ).toBeVisible();


    const box =
      await register.boundingBox();


    expect(
      box
    ).not.toBeNull();


    expect(
      box?.width
      ??
      0
    ).toBeGreaterThan(
      280
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
