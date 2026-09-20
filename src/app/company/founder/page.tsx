import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";

export const metadata = createMetadata({
  title: "Nouha Ben Brahim — Founder",
  description:
    "Meet Nouha Ben Brahim, founder of No Breach and cybersecurity professional focused on offensive security and education.",
  path: "/company/founder"
});

const journey = [
  ["01", "Development", "A technical foundation in software and systems."],
  ["02", "Cybersecurity", "A move toward understanding how systems fail and how attackers reason."],
  ["03", "Bug bounty & research", "Practical exposure to finding and validating application weaknesses."],
  ["04", "Offensive security", "A professional focus on testing, methodology and adversarial thinking."],
  ["05", "No Breach", "Building security services, education and community around that experience."]
];

export default function FounderPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: "Company",
            href: "/company"
          },
          {
            label: "Founder"
          }
        ]}
      />

      <PageHero
        eyebrow="Founder"
        title="Nouha Ben Brahim"
        description="Cybersecurity professional and founder of No Breach, focused on offensive security, practical education and cybersecurity community development."
        meta={["Founder", "Offensive Security", "Cybersecurity Education"]}
        actions={
          <ButtonLink href={siteConfig.founder.linkedin} variant="secondary">
            LinkedIn profile
          </ButtonLink>
        }
      />

      <section className={pages.section}>
        <Container>
          <div className={pages.split}>
            <p className={pages.sideLabel}>Perspective</p>
            <div>
              <p className={pages.largeCopy}>
                Security becomes useful when technical depth is paired with
                curiosity, practice and clear communication.
              </p>
              <div className={pages.prose}>
                <p>
                  Nouha Ben Brahim&apos;s public work spans offensive security,
                  web security, cybersecurity training, bug bounty and
                  community participation.
                </p>
                <p>
                  No Breach reflects that intersection: technical security work
                  on one side, practical knowledge-sharing on the other.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <SectionHeader
            eyebrow="Journey"
            title="From technical practice to building No Breach."
          />

          <div className={pages.stack}>
            {journey.map(([number, title, description]) => (
              <div className={pages.featureRow} key={number}>
                <p className={pages.featureNumber}>{number}</p>
                <div>
                  <h3 className={pages.featureTitle}>{title}</h3>
                  <p className={pages.featureText}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <SectionHeader
            eyebrow="Areas of focus"
            title="Technical practice and security education."
          />

          <div className={pages.grid3}>
            {[
              "Offensive Security",
              "Web Security",
              "Bug Bounty",
              "Cybersecurity Training",
              "Community Mentorship",
              "AI Security"
            ].map((item, index) => (
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
          <div className={pages.cta}>
            <p className={pages.ctaEyebrow}>No Breach</p>
            <h2 className={pages.ctaTitle}>
              Explore the organization built around that approach.
            </h2>
            <div className={pages.ctaActions}>
              <ButtonLink href="/services">Security services</ButtonLink>
              <ButtonLink href="/training" variant="secondary">
                Training Hub
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
