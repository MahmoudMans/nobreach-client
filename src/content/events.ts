import type { EventItem } from "@/types/content";

export const events: EventItem[] = [
  {
    // NB_CR4CKOUT_3_TEASER_V1 + NB_CR4CKOUT_3_REGISTRATION_V1
    // "year" holds the display date and "location" the venue. Values that
    // contain "classified" stay hidden on the site. The story stays encrypted.
    slug: "cr4ckout-3-0",
    title: "CR4CKOUT 3.0",
    year: "Date classified",
    status: "upcoming",
    location: "Location classified",
    summary:
      "Registration is open for the next chapter of the story-driven hacking challenge. The story and the challenges stay encrypted until the day.",
    description: [
      "Registration for CR4CKOUT 3.0 is open.",
      "The story and the challenges stay encrypted until the event."
    ],
    format: [
      "Story encrypted",
      "Challenges sealed"
    ],
    registrationUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfF07-cycT7bknomFBuqGCDfjTucjxnVsox0s9-MhBSUy0kqQ/viewform"
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
