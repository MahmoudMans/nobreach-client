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
  "responsive navigation redesign",
  () => {
    it(
      "contains the navigation redesign marker",
      () => {
        expect(
          read(
            "src/components/layout/site-header.module.css"
          )
        ).toContain(
          "NB_NAVIGATION_REDESIGN_V1"
        );
      }
    );

    it(
      "provides desktop Company and Services menus",
      () => {
        const source =
          read(
            "src/components/layout/site-header.tsx"
          );

        expect(
          source
        ).toContain(
          'aria-label="Company menu"'
        );

        expect(
          source
        ).toContain(
          'aria-label="Services menu"'
        );
      }
    );

    it(
      "provides an accessible mobile navigation dialog",
      () => {
        const source =
          read(
            "src/components/layout/site-header.tsx"
          );

        expect(
          source
        ).toContain(
          'role="dialog"'
        );

        expect(
          source
        ).toContain(
          'aria-modal="true"'
        );

        expect(
          source
        ).toContain(
          'aria-label="Site navigation"'
        );
      }
    );

    it(
      "locks body scrolling while the drawer is open",
      () => {
        expect(
          read(
            "src/components/layout/site-header.tsx"
          )
        ).toContain(
          'document.body.style.overflow'
        );
      }
    );

    it(
      "supports escape and keyboard focus containment",
      () => {
        const source =
          read(
            "src/components/layout/site-header.tsx"
          );

        expect(
          source
        ).toContain(
          'event.key ==='
        );

        expect(
          source
        ).toContain(
          '"Escape"'
        );

        expect(
          source
        ).toContain(
          '"Tab"'
        );
      }
    );

    it(
      "switches to drawer navigation for tablet widths",
      () => {
        expect(
          read(
            "src/components/layout/site-header.module.css"
          )
        ).toContain(
          "@media (max-width: 1120px)"
        );
      }
    );

    it(
      "hides decorative drawer numbering from assistive technology",
      () => {
        const source =
          read(
            "src/components/layout/site-header.tsx"
          );

        const matches =
          source.match(
            /className=\{\s*styles\.drawerIndex\s*\}\s*aria-hidden="true"/g
          ) ?? [];

        expect(
          matches.length
        ).toBe(
          4
        );
      }
    );

  }
);
