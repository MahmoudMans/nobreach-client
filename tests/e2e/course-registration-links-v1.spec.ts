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
  "training index exposes all mentorship registration links",
  async ({
    page
  }) => {

    const response =
      await page.goto(
        "/training",
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


    const section =
      page.locator(
        "[data-training-registration-section]"
      );


    await expect(
      section
    ).toBeVisible();


    await expect(
      section.getByRole(
        "heading",
        {
          name:
            "Join the mentorship program."
        }
      )
    ).toBeVisible();


    for (
      const program
      of programs
    ) {

      const link =
        section.locator(
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
      ).toHaveAttribute(
        "target",
        "_blank"
      );


      await expect(
        link
      ).toContainText(
        program.title
      );

    }

  }
);


for (
  const program
  of programs
) {

  test(
    `${program.title} exposes only its matching registration form`,
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


      const section =
        page.locator(
          "[data-training-registration-section]"
        );


      await expect(
        section
      ).toBeVisible();


      const links =
        section.locator(
          "[data-training-registration]"
        );


      await expect(
        links
      ).toHaveCount(
        1
      );


      const matching =
        section.locator(
          `[data-training-registration="${program.slug}"]`
        );


      await expect(
        matching
      ).toBeVisible();


      await expect(
        matching
      ).toHaveAttribute(
        "href",
        program.url
      );


      await expect(
        matching
      ).toContainText(
        program.title
      );

    }
  );

}


test(
  "registration section remains controlled on mobile",
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
      "/training",
      {
        waitUntil:
          "domcontentloaded"
      }
    );


    const section =
      page.locator(
        "[data-training-registration-section]"
      );


    await expect(
      section
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
