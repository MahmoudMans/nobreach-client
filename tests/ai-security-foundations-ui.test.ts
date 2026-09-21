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
  "AI Security Foundations presentation",
  () => {
    const layout =
      read(
        "src/app/training/[slug]/layout.tsx"
      );

    const css =
      read(
        "src/app/training/[slug]/training-program-shell.module.css"
      );


    it(
      "scopes the premium design to AI Security Foundations",
      () => {
        expect(
          layout
        ).toContain(
          'slug ==='
        );

        expect(
          layout
        ).toContain(
          '"ai-security-foundations"'
        );

        expect(
          layout
        ).toContain(
          "styles.aiSecurity"
        );
      }
    );


    it(
      "keeps other training programs on the normal shell",
      () => {
        expect(
          layout
        ).toContain(
          "styles.programShell"
        );

        expect(
          css
        ).toContain(
          ".programShell"
        );
      }
    );


    it(
      "adds an AI-specific ambient graph",
      () => {
        expect(
          layout
        ).toContain(
          'data-ui="ai-security-visual"'
        );

        expect(
          css
        ).toContain(
          ".aiAmbientVisual"
        );

        expect(
          css
        ).toContain(
          ".aiConnections"
        );

        expect(
          css
        ).toContain(
          ".aiCore"
        );
      }
    );


    it(
      "modernizes metadata, cards and learning lists",
      () => {
        expect(
          css
        ).toContain(
          ":global(dl)"
        );

        expect(
          css
        ).toContain(
          ":global(article)"
        );

        expect(
          css
        ).toContain(
          ":global(section > ul)"
        );
      }
    );


    it(
      "supports responsive and reduced-motion users",
      () => {
        expect(
          css
        ).toContain(
          "max-width: 640px"
        );

        expect(
          css
        ).toContain(
          "prefers-reduced-motion"
        );
      }
    );
  }
);
