import {
  expect,
  test
} from "@playwright/test";


test(
  "Services V11 presents the corrected service-first introduction",
  async ({
    page
  }) => {

    await page.goto(
      "/services"
    );


    await expect(
      page.locator(
        '[data-services-audit="v11"]'
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "heading",
        {
          level:
            1,
          name:
            "See the system from an attacker’s perspective."
        }
      )
    ).toBeVisible();


    await expect(
      page.getByText(
        /Security consulting, web and API testing, infrastructure assessment, and practical cybersecurity training/
      )
    ).toBeVisible();


    await expect(
      page.getByRole(
        "link",
        {
          name:
            /Explore services/
        }
      )
    ).toHaveAttribute(
      "href",
      "#services"
    );

  }
);


test(
  "Services directory appears before consulting",
  async ({
    page
  }) => {

    await page.goto(
      "/services"
    );


    const sections =
      page.locator(
        '[data-services-section]'
      );


    await expect(
      sections
    ).toHaveCount(
      5
    );


    const order =
      await sections.evaluateAll(
        elements =>
          elements.map(
            element =>
              element.getAttribute(
                "data-services-section"
              )
          )
      );


    expect(
      order
    ).toEqual([
      "introduction",
      "directory",
      "consulting",
      "featured-web",
      "consultation"
    ]);


    const directoryIndex =
      order.indexOf(
        "directory"
      );


    const consultingIndex =
      order.indexOf(
        "consulting"
      );


    expect(
      directoryIndex
    ).toBeGreaterThan(
      order.indexOf(
        "introduction"
      )
    );


    expect(
      consultingIndex
    ).toBeGreaterThan(
      directoryIndex
    );


    await expect(
      page.locator(
        '[data-services-section="directory"]'
      )
    ).toBeVisible();


    await expect(
      page.locator(
        '[data-services-section="consulting"]'
      )
    ).toBeVisible();

  }
);


test(
  "Services exposes four service rows with verified destinations",
  async ({
    page
  }) => {

    await page.goto(
      "/services"
    );


    const directory =
      page.locator(
        '[data-services-section="directory"]'
      );


    await expect(
      directory.locator(
        '[data-service-row]'
      )
    ).toHaveCount(
      4
    );


    const destinations = [
      [
        "Web Penetration Testing",
        "/services/web-application-pentesting"
      ],
      [
        "API Security",
        "/services/api-security"
      ],
      [
        "Infrastructure Security",
        "/services/infrastructure-security"
      ],
      [
        "Cybersecurity Training",
        "/services/security-training"
      ]
    ] as const;


    for (
      const [
        title,
        href
      ]
      of
      destinations
    ) {

      const row =
        directory.locator(
          `[data-service-title="${title}"]`
        );


      await expect(
        row
      ).toBeVisible();


      await expect(
        row.getByRole(
          "link"
        ).filter({
          has:
            page.locator(
              `a[href="${href}"]`
            )
        })
      ).toHaveCount(
        0
      );


      await expect(
        row.locator(
          `a[href="${href}"]`
        )
      ).toHaveCount(
        1
      );

    }

  }
);


test(
  "Cybersecurity Training row distinguishes the service and public programs",
  async ({
    page
  }) => {

    await page.goto(
      "/services"
    );


    const training =
      page.locator(
        '[data-service-title="Cybersecurity Training"]'
      );


    await expect(
      training.getByRole(
        "link",
        {
          name:
            /View training service/
        }
      )
    ).toHaveAttribute(
      "href",
      "/services/security-training"
    );


    await expect(
      training.getByRole(
        "link",
        {
          name:
            /Explore training programs/
        }
      )
    ).toHaveAttribute(
      "href",
      "/training"
    );


    await expect(
      page.locator(
        '[data-services-section="training"]'
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "Security consulting remains after the directory with three focus areas",
  async ({
    page
  }) => {

    await page.goto(
      "/services"
    );


    const consulting =
      page.locator(
        '[data-services-section="consulting"]'
      );


    await expect(
      consulting.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Security consulting for architecture, workflows and internal practices."
        }
      )
    ).toBeVisible();


    for (
      const text
      of
      [
        "Security architecture reviews",
        "Secure workflows and infrastructure guidance",
        "Internal process hardening, including access control and data handling"
      ]
    ) {

      await expect(
        consulting.getByText(
          text,
          {
            exact:
              true
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "Featured web assessment keeps the useful validation and reporting detail",
  async ({
    page
  }) => {

    await page.goto(
      "/services"
    );


    const featured =
      page.locator(
        '[data-services-section="featured-web"]'
      );


    await expect(
      featured.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Web application testing in practice."
        }
      )
    ).toBeVisible();


    await expect(
      featured.getByText(
        "Manual investigation of realistic attack scenarios.",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    for (
      const text
      of
      [
        "In-depth testing of web applications and APIs.",
        "Business logic and authentication flaw identification.",
        "Manual verification of critical vulnerabilities.",
        "Clear reporting with technical and executive summaries."
      ]
    ) {

      await expect(
        featured.getByText(
          text,
          {
            exact:
              true
          }
        )
      ).toBeVisible();

    }

  }
);


test(
  "Consultation CTA describes the actual contact handoff",
  async ({
    page
  }) => {

    await page.goto(
      "/services"
    );


    const consultation =
      page.locator(
        '[data-services-section="consultation"]'
      );


    await expect(
      consultation.getByRole(
        "heading",
        {
          level:
            2,
          name:
            "Discuss your security needs."
        }
      )
    ).toBeVisible();


    await expect(
      consultation.getByRole(
        "link",
        {
          name:
            /Discuss your needs/
        }
      )
    ).toHaveAttribute(
      "href",
      "/contact"
    );


    await expect(
      page.getByText(
        /Book a consultation/i
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "Service row hover does not shift its content axis",
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
      "/services"
    );


    const row =
      page.locator(
        '[data-service-title="Cybersecurity Training"]'
      );


    await row.scrollIntoViewIfNeeded();

    await expect(
      row
    ).toBeVisible();


    const title =
      row.getByRole(
        "heading",
        {
          level:
            3,
          name:
            "Cybersecurity Training"
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


test(
  "Services keeps one purposeful section sequence",
  async ({
    page
  }) => {

    await page.goto(
      "/services"
    );


    const sections =
      page.locator(
        '[data-services-section]'
      );


    await expect(
      sections
    ).toHaveCount(
      5
    );


    await expect(
      sections.nth(
        0
      )
    ).toHaveAttribute(
      "data-services-section",
      "introduction"
    );


    await expect(
      sections.nth(
        1
      )
    ).toHaveAttribute(
      "data-services-section",
      "directory"
    );


    await expect(
      sections.nth(
        2
      )
    ).toHaveAttribute(
      "data-services-section",
      "consulting"
    );


    await expect(
      sections.nth(
        3
      )
    ).toHaveAttribute(
      "data-services-section",
      "featured-web"
    );


    await expect(
      sections.nth(
        4
      )
    ).toHaveAttribute(
      "data-services-section",
      "consultation"
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
    `Services audit V11 remains contained at ${viewport.label}`,
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
        "/services"
      );


      await expect(
        page.locator(
          '[data-services-audit="v11"]'
        )
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

}
