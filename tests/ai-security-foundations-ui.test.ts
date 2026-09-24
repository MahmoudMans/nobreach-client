import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const layout =
  readFileSync(
    "src/app/training/[slug]/layout.tsx",
    "utf8"
  );


const shell =
  readFileSync(
    "src/app/training/[slug]/training-program-shell.module.css",
    "utf8"
  );


const component =
  readFileSync(
    "src/app/training/[slug]/ai-security-v39.tsx",
    "utf8"
  );


const css =
  readFileSync(
    "src/app/training/[slug]/ai-security-v39.module.css",
    "utf8"
  );


describe(
  "AI Security Foundations V39 control surface",
  () => {

    it(
      "uses the AI route gate",
      () => {

        expect(
          layout
        ).toContain(
          "const isAiSecurity"
        );


        expect(
          layout
        ).toContain(
          'data-ai-security-design={isAiSecurity ? "v39" : undefined}'
        );


        expect(
          layout
        ).toContain(
          "AISecurityV39"
        );

      }
    );


    it(
      "uses a dedicated V39 root instead of the historical AI design root",
      () => {

        expect(
          layout
        ).toContain(
          "styles.aiSecurityV39Shell"
        );


        expect(
          shell
        ).toContain(
          ".aiSecurityV39Shell {"
        );


        expect(
          shell
        ).not.toContain(
          '.aiSecurity[data-ai-security-design="v39"]'
        );

      }
    );


    it(
      "defines the four new visual chapters",
      () => {

        for (
          const section
          of [
            'data-ai-v39-section="hero"',
            'data-ai-v39-section="surface"',
            'data-ai-v39-section="program"',
            'data-ai-v39-section="note"'
          ]
        ) {

          expect(
            component
          ).toContain(
            section
          );

        }

      }
    );


    it(
      "uses the new trust-control design language",
      () => {

        for (
          const value
          of [
            "MODEL ≠ SYSTEM",
            "02 / TRUST SURFACE",
            "03 / SECURITY PROGRAM",
            "04 / SECURITY NOTE",
            "Secure the system"
          ]
        ) {

          expect(
            component
          ).toContain(
            value
          );

        }

      }
    );


    it(
      "removes the old ambient presentation from the visible V39 shell",
      () => {

        expect(
          shell
        ).toContain(
          ".aiAmbientVisual"
        );


        expect(
          shell
        ).toContain(
          "display:\n    none !important;"
        );

      }
    );


    it(
      "uses a dark responsive V39 design system",
      () => {

        expect(
          css
        ).toContain(
          "#07090d"
        );


        expect(
          css
        ).toContain(
          ".heroGrid"
        );


        expect(
          css
        ).toContain(
          ".trustRows"
        );


        expect(
          css
        ).toContain(
          ".moduleRail"
        );


        expect(
          css
        ).toContain(
          "@media (\n  max-width:"
        );

      }
    );

  }
);
