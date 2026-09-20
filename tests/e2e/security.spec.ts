import {
  expect,
  test
} from "@playwright/test";

test(
  "security headers are present",
  async ({
    request
  }) => {
    const response =
      await request.get(
        "/"
      );

    expect(
      response.ok()
    ).toBeTruthy();

    const headers =
      response.headers();

    expect(
      headers[
        "content-security-policy"
      ]
    ).toContain(
      "default-src 'self'"
    );

    expect(
      headers[
        "strict-transport-security"
      ]
    ).toContain(
      "max-age=63072000"
    );

    expect(
      headers[
        "x-content-type-options"
      ]
    ).toBe(
      "nosniff"
    );

    expect(
      headers[
        "x-frame-options"
      ]
    ).toBe(
      "DENY"
    );

    expect(
      headers[
        "referrer-policy"
      ]
    ).toBe(
      "strict-origin-when-cross-origin"
    );

    expect(
      headers[
        "cross-origin-opener-policy"
      ]
    ).toBe(
      "same-origin"
    );

    expect(
      headers[
        "cross-origin-resource-policy"
      ]
    ).toBe(
      "same-origin"
    );

    expect(
      headers[
        "x-powered-by"
      ]
    ).toBeUndefined();
  }
);

test(
  "health endpoint returns non-cached healthy status",
  async ({
    request
  }) => {
    const response =
      await request.get(
        "/health"
      );

    expect(
      response.status()
    ).toBe(
      200
    );

    expect(
      response.headers()[
        "cache-control"
      ]
    ).toContain(
      "no-store"
    );

    expect(
      await response.json()
    ).toEqual({
      status: "ok",
      service:
        "nobreach-web"
    });
  }
);

test(
  "security.txt is available under standard path",
  async ({
    request
  }) => {
    const response =
      await request.get(
        "/.well-known/security.txt"
      );

    expect(
      response.status()
    ).toBe(
      200
    );

    expect(
      response.headers()[
        "content-type"
      ]
    ).toContain(
      "text/plain"
    );

    const body =
      await response.text();

    expect(
      body
    ).toContain(
      "Contact:"
    );

    expect(
      body
    ).toContain(
      "Policy:"
    );

    expect(
      body
    ).toContain(
      "Canonical:"
    );

    expect(
      body
    ).toContain(
      "does not grant authorization"
    );
  }
);

test(
  "security page explicitly denies public testing authorization",
  async ({
    page
  }) => {
    await page.goto(
      "/security"
    );

    await expect(
      page.getByRole(
        "heading",
        {
          level: 1,
          name:
            /security starts with clear boundaries/i
        }
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        /does not constitute authorization to scan/i
      )
    ).toBeVisible();
  }
);

test(
  "RSS sitemap and robots production resources remain healthy",
  async ({
    request
  }) => {
    for (
      const route
      of [
        "/feed.xml",
        "/sitemap.xml",
        "/robots.txt"
      ]
    ) {
      const response =
        await request.get(
          route
        );

      expect(
        response.status(),
        route
      ).toBe(
        200
      );
    }
  }
);
