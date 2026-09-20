import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/pages/service-detail-page";
import { getService, services } from "@/content/services";
import { createMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return createMetadata({
      title: "Security Service",
      description: "No Breach cybersecurity services.",
      path: "/services"
    });
  }

  return createMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`
  });
}

export default async function ServicePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
