import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { trainingPrograms } from "@/content/training";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";

export const metadata = createMetadata({
  title: "No Breach Training Hub",
  description:
    "Practical cybersecurity programs and mentorship from No Breach Training Hub.",
  path: "/training"
});

const learningPrinciples = [
  {
    title: "Hands-on first",
    description:
      "Concepts are connected to practical technical work rather than remaining abstract."
  },
  {
    title: "Methodology over memorization",
    description:
      "Programs focus on repeatable ways to investigate security problems."
  },
  {
    title: "Context matters",
    description:
      "Learners are encouraged to understand systems and workflows before jumping to tools."
  }
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="No Breach Training Hub"
        title="Learn cybersecurity by doing cybersecurity."
        description="Practical programs designed around technical methodology, hands-on learning and the thinking required to investigate security problems."
        meta={["Live programs", "Mentorship", "Hands-on learning"]}
        actions={
          <ButtonLink href="/contact">Ask about training</ButtonLink>
        }
      />

      <section className={pages.section}>
        <Container>
          <SectionHeader
            eyebrow="Programs"
            title="Published training programs."
          />

          <div className={pages.grid3}>
            {trainingPrograms.map((program) => (
              <Link
                className={`${pages.card} ${pages.linkCard}`}
                href={`/training/${program.slug}`}
                key={program.slug}
              >
                <p className={pages.cardNumber}>
                  {program.category.toUpperCase()}
                </p>
                <h2 className={pages.cardTitle}>{program.title}</h2>
                <p className={pages.cardDescription}>{program.summary}</p>
                <p className={pages.cardMeta}>
                  {program.level} / {program.format}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <SectionHeader
            eyebrow="Learning approach"
            title="Build capability, not only vocabulary."
          />

          <div className={pages.grid3}>
            {learningPrinciples.map((principle, index) => (
              <div className={pages.card} key={principle.title}>
                <p className={pages.cardNumber}>
                  {String(index + 1).padStart(2, "0")}
                </p>
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
          <div className={pages.cta}>
            <p className={pages.ctaEyebrow}>Training enquiry</p>
            <h2 className={pages.ctaTitle}>
              Looking for a program, workshop or university collaboration?
            </h2>
            <div className={pages.ctaActions}>
              <ButtonLink href="/contact">Contact Training Hub</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
