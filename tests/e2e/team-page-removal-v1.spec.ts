import {
  expect,
  test
} from "@playwright/test";


test(
  "public UI exposes no link to the removed Team route",
  async ({
    page
  }) => {

    for (
      const route
      of [
        "/",
        "/company"
      ]
    ) {

      await page.goto(
        route
      );


      await expect(
        page.locator(
          'a[href="/company/team"]'
        )
      ).toHaveCount(
        0
      );

    }

  }
);


test(
  "removed Team route returns 404",
  async ({
    page
  }) => {

    const response =
      await page.goto(
        "/company/team"
      );


    expect(
      response?.status()
    ).toBe(
      404
    );

  }
);


test(
  "sitemap no longer publishes the Team route",
  async ({
    request
  }) => {

    const response =
      await request.get(
        "/sitemap.xml"
      );


    expect(
      response.ok()
    ).toBe(
      true
    );


    const body =
      await response.text();


    expect(
      body
    ).not.toContain(
      "/company/team"
    );

  }
);


test(
  "surviving Company routes continue to render",
  async ({
    page
  }) => {

    for (
      const route
      of [
        "/company",
        "/company/founder",
        "/company/internships"
      ]
    ) {

      const response =
        await page.goto(
          route
        );


      expect(
        response?.status(),
        route
      ).toBe(
        200
      );


      await expect(
        page.getByRole(
          "heading",
          {
            level:
              1
          }
        )
      ).toBeVisible();

    }

  }
);
