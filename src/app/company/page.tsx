import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { companyTimeline } from "@/content/site";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";

export const metadata = createMetadata({
  title: "About No Breach",
  description:
    "Learn about No Breach, its offensive-security focus, training initiatives and cybersecurity community work.",
  path: "/company"
});

const principles = [
  {
    number: "01",
    title: "Think offensively",
    description:
      "Understand systems by considering how assumptions, trust boundaries and controls can fail under real attack behavior."
  },
  {
    number: "02",
    title: "Build through practice",
    description:
      "Security expertise should be exercised, tested and demonstrated rather than learned only as theory."
  },
  {
    number: "03",
    title: "Share knowledge",
    description:
      "Training and community participation strengthen both individual practitioners and the wider security ecosystem."
  }
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Security practice, education and community under one brand."
        description="No Breach is a Tunisia-based cybersecurity organization centered on offensive-security thinking and practical technical development."
        meta={["Founded 2023", "Tunis, Tunisia", "Offensive Security"]}
      />

      <section className={pages.section}>
        <Container>
          <div className={pages.split}>
            <p className={pages.sideLabel}>Who we are</p>
            <div className={pages.prose}>
              <p>
                No Breach brings together security assessment, hands-on
                cybersecurity education and community initiatives.
              </p>
              <p>
                The company is intentionally built around practical security:
                understand systems, challenge assumptions, validate weaknesses
                carefully and communicate findings in a way that engineers and
                decision-makers can use.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <SectionHeader
            eyebrow="Principles"
            title="The way we approach security work."
          />

          <div className={pages.grid3}>
            {principles.map((principle) => (
              <div className={pages.card} key={principle.number}>
                <p className={pages.cardNumber}>{principle.number}</p>
                <h3 className={pages.cardTitle}>{principle.title}</h3>
                <p className={pages.cardDescription}>
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <SectionHeader
            eyebrow="Ecosystem"
            title="Three connected areas of work."
          />

          <div className={pages.grid3}>
            <div className={pages.card}>
              <p className={pages.cardNumber}>SECURITY</p>
              <h3 className={pages.cardTitle}>Security Services</h3>
              <p className={pages.cardDescription}>
                Web application, API and infrastructure security assessment.
              </p>
            </div>

            <div className={pages.card}>
              <p className={pages.cardNumber}>EDUCATION</p>
              <h3 className={pages.cardTitle}>Training Hub</h3>
              <p className={pages.cardDescription}>
                Practical programs, mentorship and security learning.
              </p>
            </div>

            <div className={pages.card}>
              <p className={pages.cardNumber}>COMMUNITY</p>
              <h3 className={pages.cardTitle}>CR4CKOUT</h3>
              <p className={pages.cardDescription}>
                Events and community initiatives centered on hands-on cybersecurity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <SectionHeader eyebrow="Timeline" title="How the ecosystem evolved." />

          <div className={pages.timeline}>
            {companyTimeline.map((item) => (
              <div className={pages.timelineItem} key={`${item.year}-${item.title}`}>
                <p className={pages.timelineYear}>{item.year}</p>
                <div>
                  <h3 className={pages.timelineTitle}>{item.title}</h3>
                  <p className={pages.timelineDescription}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <div className={pages.cta}>
            <p className={pages.ctaEyebrow}>Leadership</p>
            <h2 className={pages.ctaTitle}>Meet the founder behind No Breach.</h2>
            <p className={pages.ctaText}>
              Learn more about Nouha Ben Brahim, her cybersecurity focus and
              the role of education and community in No Breach.
            </p>
            <div className={pages.ctaActions}>
              <ButtonLink href="/company/founder">Meet the founder</ButtonLink>
              <ButtonLink href="/company/team" variant="secondary">
                Published team
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
