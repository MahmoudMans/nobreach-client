import {
  defineConfig,
  devices
} from "@playwright/test";

const host =
  "127.0.0.1";

const requestedPort =
  Number.parseInt(
    process.env.NOBREACH_E2E_PORT ??
      "4177",
    10
  );

if (
  !Number.isInteger(
    requestedPort
  ) ||
  requestedPort < 1024 ||
  requestedPort > 65535
) {
  throw new Error(
    "NOBREACH_E2E_PORT must be a valid TCP port between 1024 and 65535."
  );
}

const baseURL =
  `http://${host}:${requestedPort}`;

export default defineConfig({
  testDir: "./tests/e2e",

  fullyParallel: true,

  forbidOnly:
    Boolean(process.env.CI),

  retries:
    process.env.CI
      ? 2
      : 0,

  workers:
    process.env.CI
      ? 2
      : 4,

  reporter: "list",

  use: {
    baseURL,
    trace: "on-first-retry",
    screenshot:
      "only-on-failure",
    video:
      "retain-on-failure"
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices[
          "Desktop Chrome"
        ]
      }
    }
  ],

  webServer: {
    command:
      `npm run start -- --hostname ${host} --port ${requestedPort}`,

    url: baseURL,

    reuseExistingServer:
      false,

    timeout:
      120000,

    stdout:
      "pipe",

    stderr:
      "pipe"
  }
});
