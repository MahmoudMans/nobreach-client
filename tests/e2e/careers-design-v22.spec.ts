import {
  expect,
  test
} from "@playwright/test";


test(
  "Careers consolidates identity scope status and next action",
  async ({
    page
  }) => {

    await page.goto(
      "/careers"
    );


    const opening =
      page.locator(
        '[data-careers-section="opening"]'
      );


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,
          name:
            "Careers at No Breach"
        }
      )
    ).toBeVisible();


    await expect(
      opening.getByText(
        "There are currently no published openings.",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      opening.getByText(
        "New opportunities will appear here when they are formally published.",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-careers-section]'
      )
    ).toHaveCount(
      2
    );


    await expect(
      page.getByText(
        "Opportunity Index",
        {
          exact:
            true
        }
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.getByText(
        /Three paths\. One truthful public status\./
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "Careers exposes the three categories once without claiming not hiring",
  async ({
    page
  }) => {

    await page.goto(
      "/careers"
    );


    const categories =
      page.locator(
        '[data-careers-category]'
      );


    await expect(
      categories
    ).toHaveCount(
      3
    );


    await expect(
      categories.nth(
        0
      )
    ).toHaveText(
      "Employment"
    );


    await expect(
      categories.nth(
        1
      )
    ).toHaveText(
      "Internships"
    );


    await expect(
      categories.nth(
        2
      )
    ).toHaveText(
      "Freelance collaboration"
    );


    await expect(
      page.getByText(
        /we are not hiring/i
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.locator(
        '[data-careers-opportunity]'
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.locator(
        "form"
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "Careers removes unsupported freshness and dashboard decoration",
  async ({
    page
  }) => {

    await page.goto(
      "/careers"
    );


    await expect(
      page.getByText(
        /updated public index/i
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.getByText(
        "00",
        {
          exact:
            true
        }
      )
    ).toHaveCount(
      0
    );


    await expect(
      page.getByText(
        "View opportunity status",
        {
          exact:
            true
        }
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "Careers LinkedIn action is one explicit external handoff in the status group",
  async ({
    page
  }) => {

    await page.goto(
      "/careers"
    );


    const status =
      page.locator(
        '[data-careers-status="empty"]'
      );


    const linkedIn =
      status.getByRole(
        "link",
        {
          name:
            /View No Breach on LinkedIn/i
        }
      );


    await expect(
      linkedIn
    ).toBeVisible();


    await expect(
      linkedIn
    ).toHaveAttribute(
      "href",
      /linkedin\.com\/company\/no-breach/
    );


    await expect(
      linkedIn
    ).toHaveAttribute(
      "target",
      "_blank"
    );


    await expect(
      page.getByRole(
        "link",
        {
          name:
            "Follow on LinkedIn",
          exact:
            true
        }
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "Careers resource directory keeps three verified internal destinations",
  async ({
    page
  }) => {

    await page.goto(
      "/careers"
    );


    const work =
      page.locator(
        '[data-careers-section="work"]'
      );


    await expect(
      work.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Explore No Breach’s work"
        }
      )
    ).toBeVisible();


    await expect(
      work.locator(
        '[data-careers-resource]'
      )
    ).toHaveCount(
      3
    );


    await expect(
      work.getByRole(
        "link",
        {
          name:
            /Internship Projects/
        }
      )
    ).toHaveAttribute(
      "href",
      "/company/internships"
    );


    await expect(
      work.getByRole(
        "link",
        {
          name:
            /Training/
        }
      )
    ).toHaveAttribute(
      "href",
      "/training"
    );


    await expect(
      work.getByRole(
        "link",
        {
          name:
            /Technical Insights/
        }
      )
    ).toHaveAttribute(
      "href",
      "/insights"
    );

  }
);


test(
  "Careers opening and resource directory use the same shared frame",
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
      "/careers"
    );


    const opening =
      page.locator(
        '[data-careers-frame="opening"]'
      );


    const work =
      page.locator(
        '[data-careers-frame="work"]'
      );


    const [
      openingBox,
      workBox
    ] =
      await Promise.all([
        opening.boundingBox(),
        work.boundingBox()
      ]);


    expect(
      openingBox
    ).not.toBeNull();

    expect(
      workBox
    ).not.toBeNull();


    expect(
      Math.abs(
        openingBox!.x
        -
        workBox!.x
      )
    ).toBeLessThanOrEqual(
      1
    );


    expect(
      Math.abs(
        openingBox!.width
        -
        workBox!.width
      )
    ).toBeLessThanOrEqual(
      1
    );

  }
);


test(
  "Careers resource hover preserves content geometry",
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
      "/careers"
    );


    const row =
      page.locator(
        '[data-careers-resource="insights"]'
      );


    await row.scrollIntoViewIfNeeded();

    await expect(
      row
    ).toBeVisible();


    const title =
      row.getByText(
        "Technical Insights",
        {
          exact:
            true
        }
      );


    const before =
      await Promise.all([
        row.boundingBox(),
        title.boundingBox()
      ]);


    await row.hover();


    const after =
      await Promise.all([
        row.boundingBox(),
        title.boundingBox()
      ]);


    for (
      const box
      of
      [
        ...before,
        ...after
      ]
    ) {

      expect(
        box
      ).not.toBeNull();

    }


    expect(
      Math.abs(
        before[0]!.x
        -
        after[0]!.x
      )
    ).toBeLessThanOrEqual(
      1
    );


    expect(
      Math.abs(
        before[0]!.height
        -
        after[0]!.height
      )
    ).toBeLessThanOrEqual(
      1
    );


    expect(
      Math.abs(
        before[1]!.x
        -
        after[1]!.x
      )
    ).toBeLessThanOrEqual(
      1
    );

  }
);


for (
  const viewport
  of
  [
    {
      label:
        "320",
      width:
        320,
      height:
        800
    },
    {
      label:
        "390",
      width:
        390,
      height:
        844
    },
    {
      label:
        "768",
      width:
        768,
      height:
        1024
    },
    {
      label:
        "1024",
      width:
        1024,
      height:
        768
    },
    {
      label:
        "1280",
      width:
        1280,
      height:
        800
    },
    {
      label:
        "1440",
      width:
        1440,
      height:
        900
    }
  ]
) {

  test(
    `Careers audit V23 remains contained at ${viewport.label}`,
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
        "/careers"
      );


      await expect(
        page.locator(
          '[data-careers-audit="v23"]'
        )
      ).toBeVisible();


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

}
