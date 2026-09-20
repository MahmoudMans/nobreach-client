import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { InsightsBrowser } from "@/components/insights/insights-browser";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import {
  isInsightFilter,
  type InsightFilter
} from "@/lib/insight-filter";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";

export const metadata =
  createMetadata({
    title:
      "Cybersecurity Insights",
    description:
      "Technical writing from No Breach covering web security, API security, offensive security and AI security.",
    path:
      "/insights"
  });

type Props = {
  searchParams:
    Promise<{
      category?:
        | string
        | string[]
        | undefined;
    }>;
};

function resolveCategory(
  value:
    | string
    | string[]
    | undefined
): InsightFilter {
  const candidate =
    Array.isArray(value)
      ? value[0]
      : value;

  if (
    isInsightFilter(
      candidate
    )
  ) {
    return candidate;
  }

  return "all";
}

export default async function InsightsPage({
  searchParams
}: Props) {
  const params =
    await searchParams;

  const initialCategory =
    resolveCategory(
      params.category
    );

  return (
    <>
      <Breadcrumbs
        items={[
          {
            label:
              "Insights"
          }
        ]}
      />

      <PageHero
        eyebrow="Knowledge"
        title="Security thinking worth publishing."
        description="Technical writing about web security, APIs, offensive-security methodology and the changing security boundaries around AI-enabled applications."
        meta={[
          "Web Security",
          "API Security",
          "Offensive Security",
          "AI Security"
        ]}
        actions={
          <ButtonLink
            href="/feed.xml"
            variant="secondary"
          >
            RSS feed
          </ButtonLink>
        }
      />

      <section
        className={
          pages.section
        }
      >
        <Container>
          <InsightsBrowser
            initialCategory={
              initialCategory
            }
          />
        </Container>
      </section>
    </>
  );
}
