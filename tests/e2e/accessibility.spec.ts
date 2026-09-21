import AxeBuilder from "@axe-core/playwright";
import {
  expect,
  test
} from "@playwright/test";

const routes = [
  "/",
  "/company",
  "/company/founder",
  "/company/internships",
  "/services",
  "/services/api-security",
  "/training",
  "/training/red-team-foundations",
  "/activities",
  "/events",
  "/insights",
  "/contact",
  "/security"
];

for (
  const route
  of routes
) {
  test(
    `structural accessibility: ${route}`,
    async ({
      page
    }) => {
      await page.goto(
        route
      );

      const results =
        await new AxeBuilder({
          page
        })
          .withTags([
            "wcag2a",
            "wcag2aa"
          ])
          .disableRules([
            "color-contrast"
          ])
          .analyze();

      expect(
        results.violations,
        JSON.stringify(
          results.violations,
          null,
          2
        )
      ).toEqual([]);
    }
  );
}
