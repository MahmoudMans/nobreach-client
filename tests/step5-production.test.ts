import fs from "node:fs";
import path from "node:path";
import {
  describe,
  expect,
  it
} from "vitest";

const root =
  process.cwd();

function read(
  relativePath: string
) {
  return fs.readFileSync(
    path.join(
      root,
      relativePath
    ),
    "utf8"
  );
}

describe(
  "Step 5 production trust architecture",
  () => {
    it(
      "provides a security page",
      () => {
        expect(
          fs.existsSync(
            path.join(
              root,
              "src/app/security/page.tsx"
            )
          )
        ).toBe(
          true
        );
      }
    );

    it(
      "provides security.txt",
      () => {
        expect(
          read(
            "src/app/security.txt/route.ts"
          )
        ).toContain(
          "Preferred-Languages"
        );
      }
    );

    it(
      "maps the well-known security path",
      () => {
        expect(
          read(
            "next.config.ts"
          )
        ).toContain(
          "/.well-known/security.txt"
        );
      }
    );

    it(
      "provides a health endpoint",
      () => {
        expect(
          read(
            "src/app/health/route.ts"
          )
        ).toContain(
          '"nobreach-web"'
        );
      }
    );

    it(
      "keeps x-powered-by disabled",
      () => {
        expect(
          read(
            "next.config.ts"
          )
        ).toContain(
          "poweredByHeader"
        );

        expect(
          read(
            "next.config.ts"
          )
        ).toContain(
          "false"
        );
      }
    );

    it(
      "contains production security headers",
      () => {
        const source =
          read(
            "next.config.ts"
          );

        for (
          const header
          of [
            "Content-Security-Policy",
            "Strict-Transport-Security",
            "X-Content-Type-Options",
            "Referrer-Policy",
            "Permissions-Policy",
            "Cross-Origin-Opener-Policy",
            "Cross-Origin-Resource-Policy"
          ]
        ) {
          expect(
            source
          ).toContain(
            header
          );
        }
      }
    );

    it(
      "provides GitHub CI",
      () => {
        const source =
          read(
            ".github/workflows/ci.yml"
          );

        expect(
          source
        ).toContain(
          "npm ci"
        );

        expect(
          source
        ).toContain(
          "npm run lint"
        );

        expect(
          source
        ).toContain(
          "npm run typecheck"
        );

        expect(
          source
        ).toContain(
          "npm run test"
        );

        expect(
          source
        ).toContain(
          "npm run build"
        );

        expect(
          source
        ).toContain(
          "npm run test:e2e:run"
        );
      }
    );

    it(
      "links security from the footer",
      () => {
        expect(
          read(
            "src/components/layout/site-footer.tsx"
          )
        ).toContain(
          'href="/security"'
        );
      }
    );
  }
);
