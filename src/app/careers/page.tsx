import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";

export const metadata = createMetadata({
  title: "Careers",
  description:
    "Employment, internship and freelance opportunities at No Breach.",
  path: "/careers"
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Work with people who like understanding how systems break."
        description="Published opportunities for employment, internships and freelance cybersecurity collaboration appear here."
      />

      <section className={pages.section}>
        <Container>
          <SectionHeader
            eyebrow="Opportunity types"
            title="Different ways to work with No Breach."
          />

          <div className={pages.grid3}>
            {[
              ["01", "Employment"],
              ["02", "Internships"],
              ["03", "Freelance collaboration"]
            ].map(([number, title]) => (
              <div className={pages.card} key={number}>
                <p className={pages.cardNumber}>{number}</p>
                <h2 className={pages.cardTitle}>{title}</h2>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <div className={pages.empty}>
            <p className={pages.emptyEyebrow}>Current openings</p>
            <h2 className={pages.emptyTitle}>
              There are currently no published openings.
            </h2>
            <p className={pages.emptyText}>
              No unconfirmed or expired roles are displayed as active
              opportunities.
            </p>
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <div className={pages.cta}>
            <p className={pages.ctaEyebrow}>Stay connected</p>
            <h2 className={pages.ctaTitle}>
              Follow No Breach for future opportunities.
            </h2>
            <div className={pages.ctaActions}>
              <ButtonLink
                href="https://www.linkedin.com/company/no-breach/"
                variant="secondary"
              >
                LinkedIn
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
