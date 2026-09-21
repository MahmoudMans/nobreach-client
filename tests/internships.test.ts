import fs from "node:fs";
import path from "node:path";
import {
  describe,
  expect,
  it
} from "vitest";
import {
  internshipMethod,
  internshipProjects,
  internshipPublicNote
} from "@/content/internships";

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
  "internship project showcase",
  () => {
    it(
      "contains a meaningful project portfolio",
      () => {
        expect(
          internshipProjects.length
        ).toBeGreaterThanOrEqual(
          8
        );
      }
    );

    it(
      "contains core No Breach internship projects",
      () => {
        const titles =
          internshipProjects.map(
            (
              project
            ) =>
              project.title
          );

        expect(
          titles
        ).toContain(
          "AI Security Training Labs"
        );

        expect(
          titles
        ).toContain(
          "Purple Team Cyber Range"
        );

        expect(
          titles
        ).toContain(
          "No Breach ReportOps"
        );

        expect(
          titles
        ).toContain(
          "Cloud-Native Security Playbook"
        );
      }
    );

    it(
      "describes technologies and outputs for every project",
      () => {
        for (
          const project
          of internshipProjects
        ) {
          expect(
            project.technologies.length
          ).toBeGreaterThan(
            2
          );

          expect(
            project.work.length
          ).toBeGreaterThan(
            2
          );

          expect(
            project.outputs.length
          ).toBeGreaterThan(
            2
          );
        }
      }
    );

    it(
      "documents the applied internship methodology",
      () => {
        expect(
          internshipMethod.map(
            (
              item
            ) =>
              item.title
          )
        ).toEqual([
          "Build",
          "Understand",
          "Validate",
          "Detect",
          "Fix",
          "Document"
        ]);
      }
    );

    it(
      "states that public project work is authorized and isolated",
      () => {
        expect(
          internshipPublicNote
            .toLowerCase()
        ).toContain(
          "authorized"
        );

        expect(
          internshipPublicNote
            .toLowerCase()
        ).toContain(
          "isolated"
        );

        expect(
          internshipPublicNote
            .toLowerCase()
        ).toContain(
          "synthetic"
        );
      }
    );

    it(
      "adds internship projects to company navigation",
      () => {
        expect(
          read(
            "src/components/layout/site-header.tsx"
          )
        ).toContain(
          "/company/internships"
        );
      }
    );

    it(
      "adds internship route to sitemap",
      () => {
        expect(
          read(
            "src/app/sitemap.ts"
          )
        ).toContain(
          "/company/internships"
        );
      }
    );
  }
);
