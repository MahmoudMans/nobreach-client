import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import { insights } from "@/content/insights";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";

export const metadata = createMetadata({
  title: "Insights",
  description:
    "Technical cybersecurity insights and research published by No Breach.",
  path: "/insights"
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge"
        title="Technical thinking worth publishing."
        description="Web security, API security, offensive security, AI security, research and community knowledge."
        meta={[
          "Web Security",
          "API Security",
          "Offensive Security",
          "AI Security"
        ]}
      />

      <section className={pages.section}>
        <Container>
          {insights.length === 0 ? (
            <div className={pages.empty}>
              <p className={pages.emptyEyebrow}>Insights</p>
              <h2 className={pages.emptyTitle}>
                Technical insights will appear here as they are published.
              </h2>
              <p className={pages.emptyText}>
                No placeholder articles are created simply to fill the layout.
                The archive begins when genuine technical content is ready.
              </p>
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
}
