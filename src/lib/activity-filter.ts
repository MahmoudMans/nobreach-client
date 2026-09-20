export const activityFilters = [
  "all",
  "conference",
  "training",
  "workshop",
  "ctf",
  "university",
  "community",
  "media"
] as const;

export type ActivityFilter = (typeof activityFilters)[number];

export function isActivityFilter(
  value: string | null | undefined
): value is ActivityFilter {
  return Boolean(
    value &&
      activityFilters.includes(value as ActivityFilter)
  );
}
