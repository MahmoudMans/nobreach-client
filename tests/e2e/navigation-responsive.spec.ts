import {
  expect,
  test
} from "@playwright/test";

test.describe(
  "desktop navigation",
  () => {
    test.use({
      viewport: {
        width: 1440,
        height: 900
      }
    });

    test(
      "renders premium desktop navigation and dropdowns",
      async ({
        page
      }) => {
        await page.goto(
          "/"
        );

        const banner =
          page.getByRole(
            "banner"
          );

        const desktopNav =
          page.locator(
            "[data-desktop-navigation]"
          );

        await expect(
          banner.getByRole(
            "link",
            {
              name:
                "No Breach home",
              exact:
                true
            }
          )
        ).toBeVisible();

        await expect(
          desktopNav
        ).toBeVisible();

        await expect(
          banner.getByRole(
            "button",
            {
              name:
                "Open navigation",
              exact:
                true
            }
          )
        ).toBeHidden();

        const company =
          desktopNav.getByRole(
            "button",
            {
              name:
                "Company menu",
              exact:
                true
            }
          );

        await company.click();

        await expect(
          company
        ).toHaveAttribute(
          "aria-expanded",
          "true"
        );

        await expect(
          desktopNav.getByRole(
            "link",
            {
              name:
                /Founder/
            }
          )
        ).toBeVisible();

        const services =
          desktopNav.getByRole(
            "button",
            {
              name:
                "Services menu",
              exact:
                true
            }
          );

        await services.click();

        await expect(
          services
        ).toHaveAttribute(
          "aria-expanded",
          "true"
        );

        await expect(
          desktopNav.getByRole(
            "link",
            {
              name:
                /API Security/
            }
          )
        ).toBeVisible();
      }
    );

    test(
      "marks service section active",
      async ({
        page
      }) => {
        await page.goto(
          "/services/api-security"
        );

        const desktopNav =
          page.locator(
            "[data-desktop-navigation]"
          );

        await expect(
          desktopNav.getByRole(
            "button",
            {
              name:
                "Services menu",
              exact:
                true
            }
          )
        ).toHaveAttribute(
          "aria-current",
          "page"
        );
      }
    );
  }
);

test.describe(
  "compact desktop navigation",
  () => {
    test.use({
      viewport: {
        width: 1180,
        height: 820
      }
    });

    test(
      "desktop navbar fits without horizontal overflow",
      async ({
        page
      }) => {
        await page.goto(
          "/"
        );

        await expect(
          page.locator(
            "[data-desktop-navigation]"
          )
        ).toBeVisible();

        const overflow =
          await page.evaluate(
            () =>
              document
                .documentElement
                .scrollWidth >
              document
                .documentElement
                .clientWidth +
                1
          );

        expect(
          overflow
        ).toBe(
          false
        );
      }
    );
  }
);

test.describe(
  "tablet sidebar navigation",
  () => {
    test.use({
      viewport: {
        width: 1024,
        height: 768
      }
    });

    test(
      "opens accessible side drawer and traps navigation",
      async ({
        page
      }) => {
        await page.goto(
          "/"
        );

        await expect(
          page.locator(
            "[data-desktop-navigation]"
          )
        ).toBeHidden();

        const opener =
          page.getByRole(
            "banner"
          ).getByRole(
            "button",
            {
              name:
                "Open navigation",
              exact:
                true
            }
          );

        await expect(
          opener
        ).toBeVisible();

        await opener.click();

        const dialog =
          page.getByRole(
            "dialog",
            {
              name:
                "Site navigation",
              exact:
                true
            }
          );

        await expect(
          dialog
        ).toBeVisible();

        const closeButton =
          dialog.getByRole(
            "button",
            {
              name:
                "Close navigation",
              exact:
                true
            }
          );

        await expect(
          closeButton
        ).toBeFocused();

        const overflow =
          await page.evaluate(
            () =>
              document
                .body
                .style
                .overflow
          );

        expect(
          overflow
        ).toBe(
          "hidden"
        );

        const mobileNav =
          dialog.getByRole(
            "navigation",
            {
              name:
                "Mobile navigation",
              exact:
                true
            }
          );

        const company =
          mobileNav.getByRole(
            "button",
            {
              name:
                "Company navigation",
              exact:
                true
            }
          );

        await company.click();

        await expect(
          mobileNav.getByRole(
            "link",
            {
              name:
                "Founder",
              exact:
                true
            }
          )
        ).toBeVisible();

        await page
          .keyboard
          .press(
            "Escape"
          );

        await expect(
          dialog
        ).toBeHidden();

        const restored =
          await page.evaluate(
            () =>
              document
                .body
                .style
                .overflow
          );

        expect(
          restored
        ).toBe(
          ""
        );
      }
    );

    test(
      "keeps keyboard focus inside drawer",
      async ({
        page
      }) => {
        await page.goto(
          "/"
        );

        await page
          .getByRole(
            "banner"
          )
          .getByRole(
            "button",
            {
              name:
                "Open navigation",
              exact:
                true
            }
          )
          .click();

        const dialog =
          page.getByRole(
            "dialog",
            {
              name:
                "Site navigation",
              exact:
                true
            }
          );

        await expect(
          dialog
        ).toBeVisible();

        for (
          let index = 0;
          index < 14;
          index += 1
        ) {
          await page
            .keyboard
            .press(
              "Tab"
            );

          const inside =
            await dialog.evaluate(
              (
                element
              ) =>
                element.contains(
                  document.activeElement
                )
            );

          expect(
            inside
          ).toBe(
            true
          );
        }
      }
    );
  }
);

test.describe(
  "mobile navigation",
  () => {
    test.use({
      viewport: {
        width: 390,
        height: 844
      }
    });

    test(
      "uses a full-width mobile drawer and navigates through service submenu",
      async ({
        page
      }) => {
        await page.goto(
          "/"
        );

        await page
          .getByRole(
            "banner"
          )
          .getByRole(
            "button",
            {
              name:
                "Open navigation",
              exact:
                true
            }
          )
          .click();

        const dialog =
          page.getByRole(
            "dialog",
            {
              name:
                "Site navigation",
              exact:
                true
            }
          );

        await expect(
          dialog
        ).toBeVisible();

        const box =
          await dialog
            .boundingBox();

        expect(
          box
        ).not.toBeNull();

        expect(
          box?.width ?? 0
        ).toBeGreaterThanOrEqual(
          388
        );

        const mobileNav =
          dialog.getByRole(
            "navigation",
            {
              name:
                "Mobile navigation",
              exact:
                true
            }
          );

        await mobileNav
          .getByRole(
            "button",
            {
              name:
                "Services navigation",
              exact:
                true
            }
          )
          .click();

        const apiLink =
          mobileNav.getByRole(
            "link",
            {
              name:
                "API Security",
              exact:
                true
            }
          );

        await expect(
          apiLink
        ).toBeVisible();

        await apiLink.click();

        await expect(
          page
        ).toHaveURL(
          /\/services\/api-security$/
        );

        await expect(
          page.getByRole(
            "dialog",
            {
              name:
                "Site navigation",
              exact:
                true
            }
          )
        ).toBeHidden();
      }
    );

    test(
      "keeps navigation inside the viewport",
      async ({
        page
      }) => {
        await page.goto(
          "/"
        );

        await page
          .getByRole(
            "banner"
          )
          .getByRole(
            "button",
            {
              name:
                "Open navigation",
              exact:
                true
            }
          )
          .click();

        const dialog =
          page.getByRole(
            "dialog",
            {
              name:
                "Site navigation",
              exact:
                true
            }
          );

        await expect(
          dialog
        ).toBeVisible();

        const overflow =
          await page.evaluate(
            () =>
              document
                .documentElement
                .scrollWidth >
              document
                .documentElement
                .clientWidth +
                1
          );

        expect(
          overflow
        ).toBe(
          false
        );

        await expect(
          dialog.getByRole(
            "link",
            {
              name:
                "Contact No Breach",
              exact:
                true
            }
          )
        ).toBeVisible();
      }
    );
  }
);
