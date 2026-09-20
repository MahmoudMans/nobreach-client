import { expect, test } from "@playwright/test";

test("homepage renders the No Breach identity", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /offensive security built around/i
    })
  ).toBeVisible();

  await expect(page.getByText("NO BREACH").first()).toBeVisible();
});

test("services are reachable", async ({ page }) => {
  await page.goto("/services");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /see the system from the attacker/i
    })
  ).toBeVisible();

  await page.getByRole("link", { name: /web application penetration/i }).click();

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Web Application Penetration Testing"
    })
  ).toBeVisible();
});

test("training program routes render", async ({ page }) => {
  await page.goto("/training/red-team-foundations");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Red Team Foundations"
    })
  ).toBeVisible();

  await expect(page.getByText("Reconnaissance").first()).toBeVisible();
});

test("contact page does not pretend to submit data", async ({ page }) => {
  await page.goto("/contact");

  await expect(
    page.getByText(/does not transmit the form to a backend yet/i)
  ).toBeVisible();
});

test("unknown route returns the custom 404", async ({ page }) => {
  await page.goto("/this-route-does-not-exist");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /this endpoint doesn't exist/i
    })
  ).toBeVisible();
});
