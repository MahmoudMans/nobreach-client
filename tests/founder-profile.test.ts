import fs from "node:fs";
import path from "node:path";
import {
  describe,
  expect,
  it
} from "vitest";
import {
  founderProfile
} from "@/content/founder";

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
  "founder profile",
  () => {
    it(
      "uses the defensible founder title",
      () => {
        expect(
          founderProfile.title
        ).toBe(
          "Founder of No Breach"
        );
      }
    );

    it(
      "does not publish age or unsupported ownership claims",
      () => {
        const serialized =
          JSON.stringify(
            founderProfile
          ).toLowerCase();

        expect(
          serialized
        ).not.toContain(
          '"age"'
        );

        expect(
          serialized
        ).not.toContain(
          "owner of no breach"
        );
      }
    );

    it(
      "contains a documented journey",
      () => {
        expect(
          founderProfile
            .journey
            .length
        ).toBeGreaterThanOrEqual(
          5
        );
      }
    );

    it(
      "contains public speaking and mentoring activity",
      () => {
        const events =
          founderProfile
            .publicEngagements
            .map(
              (
                item
              ) =>
                item.event
            );

        expect(
          events
        ).toContain(
          "CyberSummit 4.0"
        );

        expect(
          events
        ).toContain(
          "CyberCamp 5.0"
        );

        expect(
          events
        ).toContain(
          "SECURIDAY_17"
        );

        expect(
          events
        ).toContain(
          "COD3 R3D"
        );
      }
    );

    it(
      "contains writing and podcast work",
      () => {
        const titles =
          founderProfile
            .writingAndMedia
            .map(
              (
                item
              ) =>
                item.title
            );

        expect(
          titles
        ).toContain(
          "Navigating the New Security Frontier of Agentic AI"
        );

        expect(
          titles
        ).toContain(
          "The Hackers Line"
        );

        expect(
          titles
        ).toContain(
          "Stay Creative Together — The Hacker's Cache"
        );
      }
    );

    it(
      "contains publicly listed credentials",
      () => {
        const credentials =
          founderProfile
            .credentials
            .map(
              (
                item
              ) =>
                item.title
            );

        expect(
          credentials
        ).toContain(
          "Certified Cybersecurity Educator Professional (CCEP)"
        );

        expect(
          credentials
        ).toContain(
          "Digital Forensics Essentials (DFE)"
        );

        expect(
          credentials
        ).toContain(
          "CCNA Security"
        );
      }
    );

    it(
      "provides Person structured data",
      () => {
        const source =
          read(
            "src/components/founder/founder-person-structured-data.tsx"
          );

        expect(
          source
        ).toContain(
          '"Person"'
        );

        expect(
          source
        ).toContain(
          "founderProfile.name"
        );
      }
    );

    it(
      "provides dedicated founder OpenGraph artwork",
      () => {
        expect(
          fs.existsSync(
            path.join(
              root,
              "src/app/company/founder/opengraph-image.tsx"
            )
          )
        ).toBe(
          true
        );
      }
    );
  }
);
