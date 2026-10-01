import {
  readFileSync
} from "node:fs";

import {
  describe,
  expect,
  it
} from "vitest";


const page =
  readFileSync(
    "src/app/company/page.tsx",
    "utf8"
  );

const css =
  readFileSync(
    "src/app/company/company.module.css",
    "utf8"
  );


describe(
  "company audit-led redesign v21",
  () => {

    it(
      "uses six purposeful sections in the audited sequence",
      () => {

        const sections =
          [
            ...page.matchAll(
              /data-company-section="([^"]+)"/g
            )
          ].map(
            (
              match
            ) =>
              match[1]
          );

        expect(
          sections
        ).toEqual([
          "intro",
          "mission-vision",
          "timeline",
          "founder",
          "approach-expertise",
          "cta"
        ]);

      }
    );


    it(
      "removes repeated narrative and publishing-process copy",
      () => {

        expect(
          page
        ).not.toContain(
          'data-company-section="story"'
        );

        expect(
          page
        ).not.toContain(
          'data-company-section="values"'
        );

        expect(
          page
        ).not.toContain(
          'data-company-section="team"'
        );

        expect(
          page
        ).not.toContain(
          "Only established public milestones are shown."
        );

        expect(
          page
        ).not.toContain(
          "The preview uses only current published team profiles."
        );

      }
    );


    it(
      "implements the audited visitor-facing copy",
      () => {

        for (
          const token
          of
          [
            "No Breach is a Tunisia-based cybersecurity organization",
            "Mission and vision",
            "Selected milestones",
            "Ongoing activity",
            "Meet the founder",
            "How we approach the work",
            "Areas of expertise"
          ]
        ) {

          expect(
            page
          ).toContain(
            token
          );

        }

      }
    );


    it(
      "separates three milestones from two ongoing items",
      () => {

        expect(
          page.match(
            /data-company-milestone="true"/g
          )
          ??
          []
        ).toHaveLength(
          1
        );

        expect(
          page
        ).toContain(
          "milestones.map"
        );

        expect(
          page
        ).toContain(
          "ongoingActivity.map"
        );

        expect(
          page
        ).toContain(
          'data-company-ongoing="true"'
        );

      }
    );


    it(
      "uses the approved singleton founder content",
      () => {

        expect(
          page
        ).toContain(
          'src="/people/ceo.png"'
        );

        expect(
          page
        ).toContain(
          "founderProfile.name"
        );

        expect(
          page
        ).toContain(
          "founderProfile.summary"
        );

        expect(
          page
        ).toContain(
          'href="/company/founder"'
        );

      }
    );


    it(
      "preserves all four expertise destinations",
      () => {

        for (
          const href
          of
          [
            "/services/web-application-pentesting",
            "/services/api-security",
            "/services/infrastructure-security",
            "/services/security-training"
          ]
        ) {

          expect(
            page
          ).toContain(
            href
          );

        }

      }
    );


    it(
      "uses the audited semantic palette and spacing layer",
      () => {

        for (
          const token
          of
          [
            "#080b10",
            "#0c121b",
            "#111b28",
            "#182536",
            "#f3f6fb",
            "#b7c2d0",
            "#94a3b8",
            "#273446",
            "#63758c",
            "#a5e8f3",
            "#86bde0",
            "#b59ae7",
            "NB_COMPANY_AUDIT_V21"
          ]
        ) {

          expect(
            css
          ).toContain(
            token
          );

        }

      }
    );

  }
);
