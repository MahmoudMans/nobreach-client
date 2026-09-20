import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import type { Service } from "@/types/content";
import pages from "@/styles/pages.module.css";

type ServiceDetailPageProps = {
  service: Service;
};

export function ServiceDetailPage({
  service
}: ServiceDetailPageProps) {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.description}
        meta={[service.number, "Security Service", "No Breach"]}
        actions={
          <ButtonLink href="/contact">Discuss this service</ButtonLink>
        }
      />

      <section className={pages.section}>
        <Container>
          <SectionHeader
            eyebrow="Assessment scope"
            title="Areas considered during the engagement."
          />

          <div className={pages.grid2}>
            {service.scope.map((item, index) => (
              <div className={pages.card} key={item}>
                <p className={pages.cardNumber}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className={pages.cardTitle}>{item}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <SectionHeader
            eyebrow="How we work"
            title="Human reasoning stays at the center."
          />

          <div className={pages.grid3}>
            {service.approach.map((item, index) => (
              <div className={pages.card} key={item.title}>
                <p className={pages.cardNumber}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className={pages.cardTitle}>{item.title}</h3>
                <p className={pages.cardDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <div className={pages.split}>
            <p className={pages.sideLabel}>Deliverables</p>

            <ul className={pages.list}>
              {service.deliverables.map((item, index) => (
                <li className={pages.listItem} key={item}>
                  <span className={pages.listDot}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <div className={pages.cta}>
            <p className={pages.ctaEyebrow}>Next step</p>
            <h2 className={pages.ctaTitle}>
              Define the scope before testing begins.
            </h2>
            <p className={pages.ctaText}>
              Share only high-level project information through the public
              contact channel. Credentials and confidential infrastructure
              details should not be submitted through the website.
            </p>
            <div className={pages.ctaActions}>
              <ButtonLink href="/contact">Start a conversation</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                All services
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
