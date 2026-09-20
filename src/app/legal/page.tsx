import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";

export const metadata = createMetadata({
  title: "Legal",
  description: "Legal information for the No Breach website.",
  path: "/legal"
});

export default function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Website information."
        description="Public information used by this website is limited to company-approved or publicly established No Breach information."
      />

      <section className={pages.section}>
        <Container size="reading">
          <div className={pages.prose}>
            <p>
              Website brand: {siteConfig.name}. Public location:{" "}
              {siteConfig.location}.
            </p>
            <p>
              Formal registration identifiers, tax information, registered
              capital and other legal-entity details are not invented by this
              frontend. They should be added only when company-approved legal
              information is supplied.
            </p>
            <p>
              Security-service descriptions on this website are informational
              and do not constitute authorization to test any third-party
              system.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
