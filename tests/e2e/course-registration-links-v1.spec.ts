import {
  expect,
  test
} from "@playwright/test";


const programs = [
  {
    slug:
      "red-team-foundations",

    registrationUrl:
      "https://forms.gle/xfTXg2r1xVfECvCM8"
  },
  {
    slug:
      "web-exploitation-techniques",

    registrationUrl:
      "https://forms.gle/32b6mUKhYWbpz6NF6"
  },
  {
    slug:
      "ai-security-foundations",

    registrationUrl:
      "https://forms.gle/G5VhyDZ8i5EpWYuA6"
  }
] as const;


test(
  "training index relocates registration into the program catalogue",
  async ({
    page
  }) => {

    await page.goto(
      "/training"
    );


    await expect(
      page.locator(
        '[data-training-registration-section]'
      )
    ).toHaveCount(
      0
    );


    const cardRegistrations =
      page.locator(
        '[data-training-program-card] [data-training-registration]'
      );


    await expect(
      cardRegistrations
    ).toHaveCount(
      3
    );

  }
);


for (
  const program
  of
  programs
) {

  test(
    `${program.slug} preserves its top registration action`,
    async ({
      page
    }) => {

      await page.goto(
        `/training/${program.slug}`
      );


      const section =
        page.locator(
          '[data-training-registration-section]'
        );


      await expect(
        section
      ).toBeVisible();


      await expect(
        section
      ).toHaveAttribute(
        "data-registration-placement",
        "top"
      );


      await expect(
        section.locator(
          `[data-training-registration="${program.slug}"]`
        )
      ).toHaveAttribute(
        "href",
        program.registrationUrl
      );

    }
  );

}


test(
  "catalogue registration actions remain usable at 360px",
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
      "/training"
    );


    const actions =
      page.locator(
        '[data-training-program-card] [data-training-registration]'
      );


    await expect(
      actions
    ).toHaveCount(
      3
    );


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
