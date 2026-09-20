import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import {
  getTrainingProgram,
  trainingPrograms
} from "@/content/training";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return trainingPrograms.map((program) => ({
    slug: program.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getTrainingProgram(slug);

  if (!program) {
    return createMetadata({
      title: "Training",
      description: "No Breach cybersecurity training.",
      path: "/training"
    });
  }

  return createMetadata({
    title: program.title,
    description: program.summary,
    path: `/training/${program.slug}`
  });
}

export default async function TrainingProgramPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getTrainingProgram(slug);

  if (!program) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={program.category}
        title={program.title}
        description={program.description}
        meta={[
          program.level,
          program.format,
          program.duration ?? "Flexible duration",
          program.status.toUpperCase()
        ]}
        actions={
          <ButtonLink href="/contact">
            {program.status === "archived"
              ? "Ask about future editions"
              : "Ask about this program"}
          </ButtonLink>
        }
      />

      <section className={pages.section}>
        <Container>
          <div className={pages.split}>
            <p className={pages.sideLabel}>Learning objectives</p>
            <ul className={pages.list}>
              {program.objectives.map((objective, index) => (
                <li className={pages.listItem} key={objective}>
                  <span className={pages.listDot}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <SectionHeader
            eyebrow="Curriculum"
            title="A structured path through the subject."
          />

          <div className={pages.grid2}>
            {program.modules.map((module) => (
              <div className={pages.card} key={module.number}>
                <p className={pages.cardNumber}>{module.number}</p>
                <h3 className={pages.cardTitle}>{module.title}</h3>
                <p className={pages.cardDescription}>{module.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <div className={pages.split}>
            <p className={pages.sideLabel}>Prerequisites</p>
            <ul className={pages.list}>
              {program.prerequisites.map((prerequisite, index) => (
                <li className={pages.listItem} key={prerequisite}>
                  <span className={pages.listDot}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{prerequisite}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <div className={pages.cta}>
            <p className={pages.ctaEyebrow}>Training Hub</p>
            <h2 className={pages.ctaTitle}>
              Build practical security capability.
            </h2>
            <div className={pages.ctaActions}>
              <ButtonLink href="/contact">Training enquiry</ButtonLink>
              <ButtonLink href="/training" variant="secondary">
                All programs
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
