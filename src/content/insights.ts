import type { Insight } from "@/types/content";

export const insights: Insight[] = [];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
