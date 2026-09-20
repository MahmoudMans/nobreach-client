import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { methodology } from "@/content/site";
import { services } from "@/content/services";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";

export const metadata = createMetadata({
  title: "Security Services",
  description:
    "Explore No Breach web application, API, infrastructure and cybersecurity training services.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: "Services"
          }
        ]}
      />

      <PageHero
        eyebrow="Security services"
        title="See the system from the attacker’s side."
        description="Security assessment focused on application behavior, trust boundaries, attack surfaces and meaningful evidence rather than scanner volume."
        meta={["Web", "API", "Infrastructure", "Training"]}
        actions={
          <ButtonLink href="/contact">Discuss an assessment</ButtonLink>
        }
      />

      <section className={pages.section}>
        <Container>
          <div className={pages.grid2}>
            {services.map((service) => (
              <Link
                className={`${pages.card} ${pages.linkCard}`}
                href={`/services/${service.slug}`}
                key={service.slug}
              >
                <p className={pages.cardNumber}>{service.number}</p>
                <h2 className={pages.cardTitle}>{service.title}</h2>
                <p className={pages.cardDescription}>{service.summary}</p>
                <p className={pages.cardMeta}>
                  Explore service <ArrowUpRight size={13} aria-hidden="true" />
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <SectionHeader
            eyebrow="Approach"
            title="A repeatable assessment lifecycle."
          />

          <div className={pages.stack}>
            {methodology.map((step) => (
              <div className={pages.featureRow} key={step.number}>
                <p className={pages.featureNumber}>{step.number}</p>
                <div>
                  <h3 className={pages.featureTitle}>{step.title}</h3>
                  <p className={pages.featureText}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <div className={pages.cta}>
            <p className={pages.ctaEyebrow}>Scope a project</p>
            <h2 className={pages.ctaTitle}>
              Start with the systems and risks that matter.
            </h2>
            <p className={pages.ctaText}>
              Describe the environment at a high level without submitting
              credentials or sensitive infrastructure information.
            </p>
            <div className={pages.ctaActions}>
              <ButtonLink href="/contact">Contact No Breach</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
