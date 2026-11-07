import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";

import {
  getTrainingProgram
} from "@/content/training";


// NB_MCP_SECURITY_COURSE_V1

const registration =
  readFileSync(
    "src/app/training/course-registration-links.tsx",
    "utf8"
  );

const route =
  readFileSync(
    "src/app/training/[slug]/page.tsx",
    "utf8"
  );

const detail =
  readFileSync(
    "src/app/training/[slug]/mcp-security-course-detail.tsx",
    "utf8"
  );

const css =
  readFileSync(
    "src/app/training/[slug]/mcp-security-course-detail.module.css",
    "utf8"
  );


describe(
  "MCP Security Mentorship Program V1",
  () => {

    it(
      "publishes the program record",
      () => {

        const program =
          getTrainingProgram(
            "mcp-security"
          );

        expect(
          program
        ).toBeDefined();

        expect(
          program?.title
        ).toBe(
          "MCP Security Mentorship Program"
        );

        expect(
          program?.category
        ).toBe(
          "AI Security"
        );

        expect(
          program?.status
        ).toBe(
          "available"
        );

        expect(
          program?.duration
        ).toBe(
          "3 sessions per week · 1.5–2 hours each"
        );

        expect(
          program?.format
        ).toContain(
          "Live training"
        );

        expect(
          program?.modules.map(
            (module) =>
              module.title
          )
        ).toEqual([
          "Architecture before exploitation",
          "Focused on real attack surfaces",
          "Threat modeling built in",
          "Defense alongside attack analysis",
          "Scenario-based assessment"
        ]);

      }
    );


    it(
      "registers through the published Google Form",
      () => {

        expect(
          registration
        ).toContain(
          'slug: "mcp-security"'
        );

        expect(
          registration
        ).toContain(
          "https://forms.gle/UQqsXvod6Pkui1Aa8"
        );

      }
    );


    it(
      "routes the slug to a dedicated detail page",
      () => {

        expect(
          route
        ).toContain(
          'program.slug === "mcp-security"'
        );

        expect(
          route
        ).toContain(
          "<McpSecurityCourseDetail"
        );

        expect(
          detail
        ).toContain(
          'data-training-detail="mcp-security"'
        );

        expect(
          detail.match(
            /<h1\b/g
          )
        ).toHaveLength(
          1
        );

        expect(
          css
        ).toContain(
          "NB_MCP_SECURITY_COURSE_V1"
        );

      }
    );


    it(
      "presents the attack surfaces, controls and program structure",
      () => {

        for (
          const token
          of
          [
            "Tool poisoning",
            "Malicious and look-alike servers",
            "Indirect prompt injection through tool outputs and resources",
            "Confused deputy attacks",
            "Over-permissioned tools",
            "Least privilege",
            "Sandboxing",
            "MCP server vetting",
            "Human-in-the-loop controls",
            "3 per week",
            "1.5–2 hours",
            "Scenario-based",
            "TrainingRegistrationAction"
          ]
        ) {

          expect(
            detail
          ).toContain(
            token
          );

        }

      }
    );

  }
);
