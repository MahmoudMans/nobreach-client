import { JsonLd } from "@/components/ui/json-ld";
import { siteConfig } from "@/content/site";
import type {
  Insight
} from "@/types/content";

type Props = {
  insight: Insight;
};

export function ArticleStructuredData({
  insight
}: Props) {
  return (
    <JsonLd
      data={{
        "@context":
          "https://schema.org",
        "@type":
          "Article",
        headline:
          insight.title,
        description:
          insight.summary,
        datePublished:
          insight.publishedAt,
        dateModified:
          insight.updatedAt ??
          insight.publishedAt,
        author: {
          "@type":
            "Organization",
          name:
            insight.author
        },
        publisher: {
          "@type":
            "Organization",
          name:
            siteConfig.name,
          url:
            siteConfig.url
        },
        mainEntityOfPage:
          new URL(
            `/insights/${insight.slug}`,
            siteConfig.url
          ).toString(),
        articleSection:
          insight.category,
        keywords:
          insight.tags.join(
            ", "
          )
      }}
    />
  );
}
