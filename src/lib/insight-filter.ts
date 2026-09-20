import {
  insightCategories
} from "@/content/insights";
import type {
  InsightCategory
} from "@/types/content";

export const insightFilterValues = [
  "all",
  ...insightCategories
] as const;

export type InsightFilter =
  | "all"
  | InsightCategory;

export function isInsightFilter(
  value:
    | string
    | null
    | undefined
): value is InsightFilter {
  if (!value) {
    return false;
  }

  return (
    value === "all" ||
    insightCategories.includes(
      value as InsightCategory
    )
  );
}
