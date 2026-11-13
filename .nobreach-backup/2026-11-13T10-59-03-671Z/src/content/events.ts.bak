import type { EventItem } from "@/types/content";

export const events: EventItem[] = [
  {
    // NB_CR4CKOUT_3_TEASER_V1
    // Teaser record: date, location and story are intentionally withheld.
    // When the edition is announced, replace "year" and "location" with the
    // real values and update the summary, description and format.
    slug: "cr4ckout-3-0",
    title: "CR4CKOUT 3.0",
    year: "Date classified",
    status: "upcoming",
    location: "Location classified",
    summary:
      "The next chapter of the story-driven hacking challenge is being prepared. Everything else stays encrypted for now.",
    description: [
      "A new CR4CKOUT edition is in preparation.",
      "The story, the challenges and the details will be revealed when the file is declassified."
    ],
    format: [
      "Story encrypted",
      "Challenges sealed"
    ]
  },
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
