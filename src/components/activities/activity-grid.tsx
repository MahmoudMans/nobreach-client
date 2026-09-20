"use client";

import { useMemo, useState } from "react";
import { activities } from "@/content/activities";
import {
  activityFilters,
  type ActivityFilter
} from "@/lib/activity-filter";
import type { ActivityCategory } from "@/types/content";
import styles from "./activity-grid.module.css";

type ActivityGridProps = {
  initialFilter?: ActivityFilter;
};

export function ActivityGrid({
  initialFilter = "all"
}: ActivityGridProps) {
  const [filter, setFilter] =
    useState<ActivityFilter>(initialFilter);

  const visibleActivities = useMemo(() => {
    if (filter === "all") {
      return activities;
    }

    return activities.filter(
      (activity) =>
        activity.category ===
        (filter as ActivityCategory)
    );
  }, [filter]);

  function selectFilter(
    nextFilter: ActivityFilter
  ) {
    setFilter(nextFilter);

    const url = new URL(window.location.href);

    if (nextFilter === "all") {
      url.searchParams.delete("type");
    } else {
      url.searchParams.set(
        "type",
        nextFilter
      );
    }

    window.history.replaceState(
      {},
      "",
      url
    );
  }

  return (
    <>
      <div
        className={styles.filters}
        aria-label="Filter activities"
      >
        {activityFilters.map(
          (category) => (
            <button
              className={`${styles.filter} ${
                filter === category
                  ? styles.active
                  : ""
              }`}
              key={category}
              type="button"
              aria-pressed={
                filter === category
              }
              onClick={() =>
                selectFilter(category)
              }
            >
              {category}
            </button>
          )
        )}
      </div>

      <div
        className={styles.grid}
        aria-live="polite"
      >
        {visibleActivities.length >
        0 ? (
          visibleActivities.map(
            (activity) => (
              <article
                className={styles.card}
                key={activity.slug}
              >
                <div
                  className={
                    styles.meta
                  }
                >
                  <span>
                    {activity.year}
                  </span>
                  <span>
                    {activity.category}
                  </span>
                </div>

                <h2
                  className={
                    styles.title
                  }
                >
                  {activity.title}
                </h2>

                <p
                  className={
                    styles.summary
                  }
                >
                  {activity.summary}
                </p>

                {activity.location ? (
                  <p
                    className={
                      styles.location
                    }
                  >
                    {
                      activity.location
                    }
                  </p>
                ) : null}
              </article>
            )
          )
        ) : (
          <div
            className={styles.empty}
          >
            No published activities
            match this filter yet.
          </div>
        )}
      </div>
    </>
  );
}
