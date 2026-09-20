import { JsonLd } from "@/components/ui/json-ld";
import { siteConfig } from "@/content/site";
import type {
  EventItem
} from "@/types/content";

type Props = {
  event: EventItem;
};

export function EventStructuredData({
  event
}: Props) {
  return (
    <JsonLd
      data={{
        "@context":
          "https://schema.org",
        "@type": "Event",
        name:
          event.title,
        description:
          event.summary,
        eventStatus:
          event.status ===
          "past"
            ? "https://schema.org/EventCompleted"
            : event.status ===
                "ongoing"
              ? "https://schema.org/EventScheduled"
              : "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name:
            event.location
        },
        organizer: {
          "@type":
            "Organization",
          name:
            siteConfig.name,
          url:
            siteConfig.url
        },
        url:
          new URL(
            `/events/${event.slug}`,
            siteConfig.url
          ).toString()
      }}
    />
  );
}
