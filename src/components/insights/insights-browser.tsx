"use client";

import {
  useMemo,
  useState
} from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Search
} from "lucide-react";
import {
  insights,
  insightCategories
} from "@/content/insights";
import type {
  InsightFilter
} from "@/lib/insight-filter";
import styles from "./insights-browser.module.css";

type Props = {
  initialCategory?:
    InsightFilter;
};

export function InsightsBrowser({
  initialCategory = "all"
}: Props) {
  const [
    category,
    setCategory
  ] =
    useState<InsightFilter>(
      initialCategory
    );

  const [
    query,
    setQuery
  ] =
    useState("");

  const filtered =
    useMemo(() => {
      const normalized =
        query
          .trim()
          .toLowerCase();

      return insights.filter(
        (insight) => {
          const categoryMatch =
            category ===
              "all" ||
            insight.category ===
              category;

          if (
            !categoryMatch
          ) {
            return false;
          }

          if (
            !normalized
          ) {
            return true;
          }

          const haystack = [
            insight.title,
            insight.summary,
            insight.category,
            ...insight.tags
          ]
            .join(" ")
            .toLowerCase();

          return haystack.includes(
            normalized
          );
        }
      );
    }, [
      category,
      query
    ]);

  const featured =
    filtered.find(
      (insight) =>
        insight.featured
    ) ??
    filtered[0];

  const remaining =
    featured
      ? filtered.filter(
          (insight) =>
            insight.slug !==
            featured.slug
        )
      : [];

  function changeCategory(
    value:
      InsightFilter
  ) {
    setCategory(value);

    const url =
      new URL(
        window.location.href
      );

    if (
      value === "all"
    ) {
      url.searchParams.delete(
        "category"
      );
    } else {
      url.searchParams.set(
        "category",
        value
      );
    }

    window.history.replaceState(
      {},
      "",
      url
    );
  }

  const filters:
    InsightFilter[] = [
      "all",
      ...insightCategories
    ];

  return (
    <>
      <div
        className={
          styles.controls
        }
      >
        <label
          className={
            styles.searchShell
          }
        >
          <span className="sr-only">
            Search insights
          </span>

          <Search
            className={
              styles.searchIcon
            }
            size={17}
            aria-hidden="true"
          />

          <input
            className={
              styles.search
            }
            value={query}
            type="search"
            placeholder="Search insights"
            onChange={(
              event
            ) =>
              setQuery(
                event.target.value
              )
            }
          />
        </label>

        <div
          className={
            styles.filters
          }
          aria-label="Filter insights by category"
        >
          {filters.map(
            (filter) => (
              <button
                className={`${
                  styles.filter
                } ${
                  category ===
                  filter
                    ? styles.active
                    : ""
                }`}
                key={filter}
                type="button"
                aria-pressed={
                  category ===
                  filter
                }
                onClick={() =>
                  changeCategory(
                    filter
                  )
                }
              >
                {filter}
              </button>
            )
          )}
        </div>
      </div>

      <p
        className={
          styles.resultCount
        }
        aria-live="polite"
      >
        {filtered.length}{" "}
        {filtered.length === 1
          ? "article"
          : "articles"}
      </p>

      {featured ? (
        <Link
          className={
            styles.featured
          }
          href={`/insights/${featured.slug}`}
        >
          <div
            className={
              styles.featuredContent
            }
          >
            <p
              className={
                styles.featuredLabel
              }
            >
              Featured /{" "}
              {
                featured.category
              }
            </p>

            <h2
              className={
                styles.featuredTitle
              }
            >
              {
                featured.title
              }
            </h2>

            <p
              className={
                styles.featuredSummary
              }
            >
              {
                featured.summary
              }
            </p>

            <div
              className={
                styles.meta
              }
            >
              <time
                dateTime={
                  featured.publishedAt
                }
              >
                {
                  featured.publishedAt
                }
              </time>

              <span>
                {
                  featured.readingTime
                }
              </span>

              <span>
                {
                  featured.author
                }
              </span>
            </div>
          </div>

          <div
            className={
              styles.featuredVisual
            }
            aria-hidden="true"
          />
        </Link>
      ) : null}

      {filtered.length >
      0 ? (
        <div
          className={
            styles.articleGrid
          }
        >
          {remaining.map(
            (insight) => (
              <Link
                className={
                  styles.card
                }
                href={`/insights/${insight.slug}`}
                key={
                  insight.slug
                }
              >
                <div
                  className={
                    styles.cardTop
                  }
                >
                  <span
                    className={
                      styles.category
                    }
                  >
                    {
                      insight.category
                    }
                  </span>

                  <time
                    dateTime={
                      insight.publishedAt
                    }
                  >
                    {
                      insight.publishedAt
                    }
                  </time>
                </div>

                <h2
                  className={
                    styles.cardTitle
                  }
                >
                  {
                    insight.title
                  }
                </h2>

                <p
                  className={
                    styles.cardSummary
                  }
                >
                  {
                    insight.summary
                  }
                </p>

                <div
                  className={
                    styles.cardFooter
                  }
                >
                  <span>
                    {
                      insight.readingTime
                    }
                  </span>

                  <span
                    className={
                      styles.read
                    }
                  >
                    Read{" "}
                    <ArrowUpRight
                      size={13}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            )
          )}
        </div>
      ) : (
        <div
          className={
            styles.empty
          }
        >
          No technical insights
          match this search.
        </div>
      )}
    </>
  );
}
