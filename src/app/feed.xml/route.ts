import {
  insights
} from "@/content/insights";
import {
  siteConfig
} from "@/content/site";

export const dynamic =
  "force-static";

function escapeXml(
  value: string
) {
  return value
    .replaceAll(
      "&",
      "&amp;"
    )
    .replaceAll(
      "<",
      "&lt;"
    )
    .replaceAll(
      ">",
      "&gt;"
    )
    .replaceAll(
      '"',
      "&quot;"
    )
    .replaceAll(
      "'",
      "&apos;"
    );
}

export function GET() {
  const items =
    insights
      .map(
        (insight) => {
          const link =
            new URL(
              `/insights/${insight.slug}`,
              siteConfig.url
            ).toString();

          const date =
            new Date(
              `${insight.publishedAt}T12:00:00Z`
            ).toUTCString();

          return `
    <item>
      <title>${escapeXml(
        insight.title
      )}</title>
      <link>${escapeXml(
        link
      )}</link>
      <guid isPermaLink="true">${escapeXml(
        link
      )}</guid>
      <description>${escapeXml(
        insight.summary
      )}</description>
      <category>${escapeXml(
        insight.category
      )}</category>
      <pubDate>${date}</pubDate>
    </item>`;
        }
      )
      .join("");

  const xml =
    `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(
      siteConfig.name
    )} Insights</title>
    <link>${escapeXml(
      new URL(
        "/insights",
        siteConfig.url
      ).toString()
    )}</link>
    <description>${escapeXml(
      "Technical cybersecurity writing from No Breach."
    )}</description>
    <language>en</language>${items}
  </channel>
</rss>`;

  return new Response(
    xml,
    {
      headers: {
        "Content-Type":
          "application/rss+xml; charset=utf-8",
        "Cache-Control":
          "public, max-age=3600, s-maxage=3600"
      }
    }
  );
}
