import { LinkedInActivitySection } from "@/components/activities/linkedin-activity-section";
import { ActivityGrid } from "@/components/activities/activity-grid";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import {
  isActivityFilter,
  type ActivityFilter
} from "@/lib/activity-filter";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";

export const metadata =
  createMetadata({
    title: "Activities",
    description:
      "Explore published No Breach training, cybersecurity community and event activity.",
    path: "/activities"
  });

type ActivitiesPageProps = {
  searchParams: Promise<{
    type?:
      | string
      | string[]
      | undefined;
  }>;
};

function resolveInitialFilter(
  value:
    | string
    | string[]
    | undefined
): ActivityFilter {
  const candidate =
    Array.isArray(value)
      ? value[0]
      : value;

  if (
    isActivityFilter(candidate)
  ) {
    return candidate;
  }

  return "all";
}

export default async function ActivitiesPage({
  searchParams
}: ActivitiesPageProps) {
  const params =
    await searchParams;

  const initialFilter =
    resolveInitialFilter(
      params.type
    );

  return (
    <>
      <PageHero
        eyebrow="Activity archive"
        title="Security work is more than a services page."
        description="Training, community participation, events and published initiatives collected in one public archive."
      />

      <section
        className={pages.section}
      >
        <Container>
          <ActivityGrid
            initialFilter={
              initialFilter
            }
          />
        </Container>
      </section>

      <LinkedInActivitySection />
</>
  );
}
