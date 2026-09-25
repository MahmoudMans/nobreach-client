import {
  expect,
  test
} from "@playwright/test";


async function openContact(
  page:
    import("@playwright/test").Page
) {

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
      '[data-contact-design="v11"]'
    );


  await expect(
    root
  ).toHaveCount(
    1
  );


  await expect(
    root
  ).toBeVisible({
    timeout:
      10_000
  });


  return root;

}


test(
  "Contact V11 renders one compact PageIntro",
  async ({
    page
  }) => {

    const root =
      await openContact(
        page
      );


    await expect(
      root.locator(
        "h1"
      )
    ).toHaveCount(
      1
    );


    await expect(
      root.locator(
        "h1"
      )
    ).toBeVisible();


    /*
     * Contact is explicitly a top-level page in the design authority.
     * It must not introduce an internal breadcrumb/navigation row.
     */
    await expect(
      root.locator(
        "nav"
      )
    ).toHaveCount(
      0
    );

  }
);


test(
  "Contact V11 places information before the consultation form",
  async ({
    page
  }) => {

    const root =
      await openContact(
        page
      );


    const information =
      root.locator(
        "[data-contact-information]"
      );


    const formColumn =
      root.locator(
        "[data-contact-form-column]"
      );


    const form =
      root.locator(
        "[data-consultation-form]"
      );


    await expect(
      information
    ).toBeVisible();


    await expect(
      formColumn
    ).toBeVisible();


    await expect(
      form
    ).toBeVisible();


    const order =
      await root.evaluate(
        element => {

          const information =
            element.querySelector(
              "[data-contact-information]"
            );


          const form =
            element.querySelector(
              "[data-contact-form-column]"
            );


          if (
            !information
            ||
            !form
          ) {

            return false;

          }


          return Boolean(
            information.compareDocumentPosition(
              form
            )
            &
            Node.DOCUMENT_POSITION_FOLLOWING
          );

        }
      );


    expect(
      order
    ).toBe(
      true
    );

  }
);


test(
  "Contact V11 uses the five seven desktop composition",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        1440,

      height:
        900
    });


    const root =
      await openContact(
        page
      );


    const information =
      root.locator(
        "[data-contact-information]"
      );


    const formColumn =
      root.locator(
        "[data-contact-form-column]"
      );


    const [
      informationBox,
      formBox
    ] =
      await Promise.all([
        information.boundingBox(),
        formColumn.boundingBox()
      ]);


    expect(
      informationBox
    ).not.toBeNull();


    expect(
      formBox
    ).not.toBeNull();


    expect(
      formBox?.x
      ??
      0
    ).toBeGreaterThan(
      informationBox?.x
      ??
      0
    );


    expect(
      formBox?.width
      ??
      0
    ).toBeGreaterThan(
      informationBox?.width
      ??
      0
    );


    const gap =
      (
        formBox?.x
        ??
        0
      )
      -
      (
        (
          informationBox?.x
          ??
          0
        )
        +
        (
          informationBox?.width
          ??
          0
        )
      );


    expect(
      gap
    ).toBeGreaterThanOrEqual(
      60
    );


    expect(
      gap
    ).toBeLessThanOrEqual(
      84
    );

  }
);


test(
  "Contact V11 preserves the existing consultation intake",
  async ({
    page
  }) => {

    const root =
      await openContact(
        page
      );


    const form =
      root.locator(
        "[data-consultation-form]"
      );


    await expect(
      form
    ).toBeVisible();


    await expect(
      form.getByLabel(
        "Startup",
        {
          exact:
            true
        }
      )
    ).toBeVisible();


    await expect(
      page.getByText(
        /does not transmit the form to a backend yet/i
      )
    ).toBeVisible();


    await expect(
      page.getByText(
        /do not enter passwords/i
      )
    ).toBeVisible();

  }
);


test(
  "Contact V11 mobile orders information before the form without overflow",
  async ({
    page
  }) => {

    await page.setViewportSize({
      width:
        390,

      height:
        844
    });


    const root =
      await openContact(
        page
      );


    const information =
      root.locator(
        "[data-contact-information]"
      );


    const formColumn =
      root.locator(
        "[data-contact-form-column]"
      );


    const [
      informationBox,
      formBox
    ] =
      await Promise.all([
        information.boundingBox(),
        formColumn.boundingBox()
      ]);


    expect(
      informationBox
    ).not.toBeNull();


    expect(
      formBox
    ).not.toBeNull();


    expect(
      informationBox?.width
      ??
      0
    ).toBeGreaterThan(
      300
    );


    expect(
      formBox?.width
      ??
      0
    ).toBeGreaterThan(
      300
    );


    expect(
      formBox?.y
      ??
      0
    ).toBeGreaterThan(
      informationBox?.y
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
