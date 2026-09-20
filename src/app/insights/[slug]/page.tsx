import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import { getInsight, insights } from "@/content/insights";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) {
    return createMetadata({
      title: "Insight",
      description: "No Breach technical cybersecurity insight.",
      path: "/insights"
    });
  }

  return createMetadata({
    title: insight.title,
    description: insight.summary,
    path: `/insights/${insight.slug}`
  });
}

export default async function InsightPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={insight.category}
        title={insight.title}
        description={insight.summary}
        meta={[insight.publishedAt, insight.readingTime]}
      />

      <section className={pages.section}>
        <Container size="reading">
          <div className={pages.prose}>
            {insight.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
