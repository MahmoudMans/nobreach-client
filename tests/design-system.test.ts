import fs from "node:fs";
import path from "node:path";
import {
  describe,
  expect,
  it
} from "vitest";

const projectRoot =
  process.cwd();

function readProjectFile(
  filePath: string
) {
  return fs.readFileSync(
    path.join(
      projectRoot,
      filePath
    ),
    "utf8"
  );
}

describe(
  "No Breach visual identity",
  () => {
    const tokens =
      readProjectFile(
        "src/styles/tokens.css"
      );

    it(
      "contains the approved four-color palette",
      () => {
        expect(tokens).toContain(
          "#83b3d7"
        );
        expect(tokens).toContain(
          "#a1e2f0"
        );
        expect(tokens).toContain(
          "#6333c6"
        );
        expect(tokens).toContain(
          "#7e60b9"
        );
      }
    );

    it(
      "keeps dark mode as the base identity",
      () => {
        expect(tokens).toContain(
          "--color-bg: #050506"
        );
      }
    );

    it(
      "does not reintroduce the previous red accent",
      () => {
        expect(tokens).not.toContain(
          "#ef3934"
        );
        expect(tokens).not.toContain(
          "#ff3b30"
        );
      }
    );
  }
);

describe(
  "accessibility foundation",
  () => {
    const layout =
      readProjectFile(
        "src/app/layout.tsx"
      );

    const globalStyles =
      readProjectFile(
        "src/styles/globals.css"
      );

    it(
      "provides a skip navigation link",
      () => {
        expect(layout).toContain(
          'href="#main-content"'
        );
        expect(layout).toContain(
          'id="main-content"'
        );
      }
    );

    it(
      "contains visible focus handling",
      () => {
        expect(
          globalStyles
        ).toContain(
          ":focus-visible"
        );
      }
    );
  }
);
