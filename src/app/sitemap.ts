import type { MetadataRoute } from "next";
import { events } from "@/content/events";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";
import { trainingPrograms } from "@/content/training";

const staticRoutes = [
  "",
  "/company",
  "/company/founder",
  "/company/team",
  "/services",
  "/training",
  "/cr4ckout",
  "/activities",
  "/events",
  "/insights",
  "/careers",
  "/contact",
  "/privacy",
  "/legal"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...services.map((service) => `/services/${service.slug}`),
    ...trainingPrograms.map((program) => `/training/${program.slug}`),
    ...events.map((event) => `/events/${event.slug}`)
  ];

  return routes.map((route) => ({
    url: new URL(route || "/", siteConfig.url).toString(),
    lastModified: new Date("2026-09-20"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
