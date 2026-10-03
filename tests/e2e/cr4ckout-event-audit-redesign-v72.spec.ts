import {
  expect,
  test
} from "@playwright/test";


const ROUTE =
  "/events/cr4ckout-2-0";


test(
  "CR4CKOUT 2.0 renders the V72 event record",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const root =
      page.locator(
        '[data-event-detail-design="v43"]'
      );


    await expect(
      root
    ).toHaveCount(
      1
    );


    await expect(
      root
    ).toHaveAttribute(
      "data-event-detail-redesign",
      "v72"
    );


    await expect(
      page.getByRole(
        "heading",
        {
          level: 1,
          name:
            "CR4CKOUT 2.0"
        }
      )
    ).toHaveCount(
      1
    );

  }
);


test(
  "CR4CKOUT 2.0 exposes canonical historical facts",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const facts =
      page.locator(
        '[data-event-section="facts"]'
      );


    await expect(
      facts
    ).toContainText(
      "Year"
    );


    await expect(
      facts
    ).toContainText(
      "2025"
    );


    await expect(
      facts
    ).toContainText(
      "Tunis, Tunisia"
    );


    await expect(
      facts
    ).toContainText(
      "Past"
    );

  }
);


test(
  "CR4CKOUT 2.0 restores the canonical description",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const overview =
      page.locator(
        '[data-event-consolidated-section="record"]'
      );


    await expect(
      overview
    ).toContainText(
      "CR4CKOUT is a No Breach community initiative designed around practical cybersecurity participation."
    );


    await expect(
      overview
    ).toContainText(
      "The event format brings together technical challenges, learning opportunities and community interaction rather than passive conference attendance."
    );

  }
);


test(
  "CR4CKOUT 2.0 restores all four published format items",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const overview =
      page.locator(
        '[data-event-consolidated-section="record"]'
      );


    for (
      const item
      of [
        "CTF-style challenges",
        "Technical workshops",
        "Community networking",
        "Hands-on cybersecurity learning"
      ]
    ) {

      await expect(
        overview.getByText(
          item,
          {
            exact: true
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "V43 runtime marker progression remains compatible",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const sequence =
      await page
        .locator(
          "[data-event-section]"
        )
        .evaluateAll(
          nodes =>
            nodes.map(
              node =>
                node.getAttribute(
                  "data-event-section"
                )
            )
        );


    expect(
      sequence
    ).toEqual([
      "intro",
      "facts",
      "overview",
      "event-content",
      "cr4ckout",
      "final-cta"
    ]);

  }
);


test(
  "CR4CKOUT 2.0 has one consolidated related-record chapter",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    const related =
      page.locator(
        '[data-event-consolidated-section="related-records"]'
      );


    await expect(
      related
    ).toHaveCount(
      1
    );


    await expect(
      related.getByRole(
        "heading",
        {
          level: 2,
          name:
            "Continue from CR4CKOUT 2.0."
        }
      )
    ).toBeVisible();


    await expect(
      related.getByRole(
        "link",
        {
          name:
            /Explore current CR4CKOUT/
        }
      )
    ).toHaveAttribute(
      "href",
      "/cr4ckout"
    );


    await expect(
      related.getByRole(
        "link",
        {
          name:
            /^All events/
        }
      )
    ).toHaveAttribute(
      "href",
      "/events"
    );


    await expect(
      related.getByRole(
        "link",
        {
          name:
            /Activity archive/
        }
      )
    ).toHaveAttribute(
      "href",
      "/activities"
    );

  }
);


test(
  "legacy duplicate ending headings are no longer visible",
  async ({
    page
  }) => {

    await page.goto(
      ROUTE
    );


    for (
      const text
      of [
        "Continue into the wider CR4CKOUT experience.",
        "Explore more published No Breach activity."
      ]
    ) {

      await expect(
        page.getByText(
          text,
          {
            exact: true
          }
        )
      ).toHaveCount(
        0
      );

    }

  }
);


test(
  "CR4CKOUT 2.0 content chapters remain content-driven",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width: 1440,
      height: 900
    });


    await page.goto(
      ROUTE
    );


    for (
      const selector
      of [
        '[data-event-consolidated-section="record"]',
        '[data-event-consolidated-section="related-records"]'
      ]
    ) {

      const height =
        await page
          .locator(
            selector
          )
          .evaluate(
            element =>
              element.getBoundingClientRect().height
          );


      expect(
        height
      ).toBeLessThan(
        780
      );

    }

  }
);


test(
  "CR4CKOUT 2.0 remains contained at representative widths",
  async ({
    page
  }) => {

    const viewports = [
      {
        width: 1440,
        height: 900
      },
      {
        width: 1024,
        height: 768
      },
      {
        width: 768,
        height: 900
      },
      {
        width: 390,
        height: 844
      },
      {
        width: 320,
        height: 760
      }
    ];


    for (
      const viewport
      of viewports
    ) {

      await page.setViewportSize(
        viewport
      );


      await page.goto(
        ROUTE
      );


      const overflow =
        await page.evaluate(
          () =>
            document.documentElement.scrollWidth
            -
            document.documentElement.clientWidth
        );


      expect(
        overflow
      ).toBeLessThanOrEqual(
        1
      );

    }

  }
);
