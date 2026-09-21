import type {
  MetadataRoute
} from "next";
import {
  activities
} from "@/content/activities";
import {
  events
} from "@/content/events";
import {
  insights
} from "@/content/insights";
import {
  services
} from "@/content/services";
import {
  siteConfig
} from "@/content/site";
import {
  trainingPrograms
} from "@/content/training";

const staticRoutes = [
  "",
  "/company",
  "/company/founder",
  "/company/team",
  "/company/internships",
  "/services",
  "/training",
  "/cr4ckout",
  "/activities",
  "/events",
  "/insights",
  "/feed.xml",
  "/careers",
  "/contact",
  "/privacy",
  "/legal",
  "/security"
];

export default function sitemap():
  MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,

    ...services.map(
      (service) =>
        `/services/${service.slug}`
    ),

    ...trainingPrograms.map(
      (program) =>
        `/training/${program.slug}`
    ),

    ...events.map(
      (event) =>
        `/events/${event.slug}`
    ),

    ...activities.map(
      (activity) =>
        `/activities/${activity.slug}`
    ),

    ...insights.map(
      (insight) =>
        `/insights/${insight.slug}`
    )
  ];

  return routes.map(
    (route) => ({
      url:
        new URL(
          route || "/",
          siteConfig.url
        ).toString(),

      lastModified:
        new Date(
          "2026-09-20"
        ),

      changeFrequency:
        route === ""
          ? "weekly"
          : route.startsWith(
                "/insights"
              )
            ? "weekly"
            : "monthly",

      priority:
        route === ""
          ? 1
          : route.startsWith(
                "/insights/"
              )
            ? 0.75
            : 0.7
    })
  );
}
