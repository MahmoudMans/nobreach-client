import {
  JsonLd
} from "@/components/ui/json-ld";
import {
  founderProfile
} from "@/content/founder";
import {
  siteConfig
} from "@/content/site";

export function FounderPersonStructuredData() {
  return (
    <JsonLd
      data={{
        "@context":
          "https://schema.org",

        "@type":
          "Person",

        name:
          founderProfile.name,

        jobTitle:
          founderProfile.title,

        description:
          founderProfile.summary,

        url:
          new URL(
            "/company/founder",
            siteConfig.url
          ).toString(),

        address: {
          "@type":
            "PostalAddress",

          addressLocality:
            "Tunis",

          addressCountry:
            "TN"
        },

        worksFor: {
          "@type":
            "Organization",

          name:
            siteConfig.name,

          url:
            siteConfig.url
        },

        knowsAbout:
          founderProfile
            .focusAreas
            .map(
              (
                focus
              ) =>
                focus.title
            )
      }}
    />
  );
}
