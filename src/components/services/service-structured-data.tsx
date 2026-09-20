import { JsonLd } from "@/components/ui/json-ld";
import { siteConfig } from "@/content/site";
import type {
  Service
} from "@/types/content";

type Props = {
  service: Service;
};

export function ServiceStructuredData({
  service
}: Props) {
  return (
    <JsonLd
      data={{
        "@context":
          "https://schema.org",
        "@type": "Service",
        name:
          service.title,
        description:
          service.summary,
        provider: {
          "@type":
            "Organization",
          name:
            siteConfig.name,
          url:
            siteConfig.url
        },
        areaServed: {
          "@type":
            "Country",
          name:
            "Tunisia"
        },
        url:
          new URL(
            `/services/${service.slug}`,
            siteConfig.url
          ).toString()
      }}
    />
  );
}
