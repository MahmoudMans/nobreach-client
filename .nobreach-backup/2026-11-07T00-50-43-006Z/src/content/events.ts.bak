import type { EventItem } from "@/types/content";

export const events: EventItem[] = [
  {
    slug: "cr4ckout-2-0",
    title: "CR4CKOUT 2.0",
    year: "2025",
    status: "past",
    location: "Tunis, Tunisia",
    summary:
      "A hands-on cybersecurity community event built around technical challenges and shared learning.",
    description: [
      "CR4CKOUT is a No Breach community initiative designed around practical cybersecurity participation.",
      "The event format brings together technical challenges, learning opportunities and community interaction rather than passive conference attendance."
    ],
    format: [
      "CTF-style challenges",
      "Technical workshops",
      "Community networking",
      "Hands-on cybersecurity learning"
    ]
  }
];

export function getEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}
