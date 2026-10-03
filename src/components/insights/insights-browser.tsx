"use client";

import Link from "next/link";

import {
  useMemo,
  useState
} from "react";

import {
  insightCategories,
  insights
} from "@/content/insights";

import type {
  InsightFilter
} from "@/lib/insight-filter";

import styles from "./insights-browser.module.css";


type Props = {
  initialCategory:
    InsightFilter;
};


function formatPublishedDate(
  value: string
) {

  const match =
    /^(\d{4})-(\d{2})-(\d{2})$/.exec(
      value
    );


  if (
    !match
  ) {

    return value;

  }


  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ] as const;


  const month =
    months[
      Number(
        match[2]
      )
      -
      1
    ];


  if (
    !month
  ) {

    return value;

  }


  return (
    `${match[3]} ${month} ${match[1]}`
  );

}


function Arrow() {

  return (
    <span
      aria-hidden="true"
    >
      →
    </span>
  );

}


export function InsightsBrowser({
  initialCategory
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
    useState(
      ""
    );


  const filters:
    InsightFilter[] = [
      "all",
      ...insightCategories
    ];


  const visibleInsights =
    useMemo(
      () => {

        const normalizedQuery =
          query
            .trim()
            .toLocaleLowerCase();


        return insights.filter(
          insight => {

            const categoryMatches =
              category
              ===
              "all"
              ||
              insight.category
              ===
              category;


            if (
              !categoryMatches
            ) {

              return false;

            }


            if (
              !normalizedQuery
            ) {

              return true;

            }


            const searchable =
              [
                insight.title,
                insight.summary,
                insight.category,
                insight.author,
                ...insight.tags
              ]
                .join(
                  " "
                )
                .toLocaleLowerCase();


            return searchable.includes(
              normalizedQuery
            );

          }
        );

      },
      [
        category,
        query
      ]
    );


  const featured =
    visibleInsights.find(
      insight =>
        insight.featured
    )
    ??
    visibleInsights[0]
    ??
    null;


  const secondary =
    featured
      ? visibleInsights.filter(
          insight =>
            insight.slug
            !==
            featured.slug
        )
      : [];


  const resultLabel =
    `${visibleInsights.length} ${
      visibleInsights.length
      ===
      1
        ? "article"
        : "articles"
    }`;


  function clearFilters() {

    setQuery(
      ""
    );

    setCategory(
      "all"
    );

  }


  return (
    <div
      className={
        styles.browserV76
      }
      data-insights-browser="resource-system"
      data-insights-browser-system="resources"
      data-insights-browser-redesign="v76"
    >

      {/* ================================================================
          DISCOVERY CONTROLS
         ================================================================ */}

      <div
        className={
          styles.toolbarV76
        }
        aria-label="Research library controls"
      >
        <div
          className={
            styles.searchRowV76
          }
        >
          <label
            className={
              styles.searchV76
            }
          >
            <span
              className={
                styles.searchIconV76
              }
              aria-hidden="true"
            >
              ⌕
            </span>

            <span
              className={
                styles.srOnlyV76
              }
            >
              Search insights
            </span>

            <input
              type="search"
              aria-label="Search insights"
              placeholder="Search insights"
              value={
                query
              }
              onChange={
                event =>
                  setQuery(
                    event.target.value
                  )
              }
            />
          </label>


          <p
            className={
              styles.countV76
            }
            aria-live="polite"
          >
            {
              resultLabel
            }
          </p>
        </div>


        <div
          className={
            styles.filtersV76
          }
          aria-label="Insight categories"
        >
          {
            filters.map(
              filter => {

                const active =
                  category
                  ===
                  filter;


                return (
                  <button
                    key={
                      filter
                    }
                    type="button"
                    className={
                      active
                        ? `${styles.filterButtonV76} ${styles.filterActiveV76}`
                        : styles.filterButtonV76
                    }
                    aria-label={
                      filter
                      ===
                      "all"
                        ? "all"
                        : filter
                    }
                    aria-pressed={
                      active
                    }
                    onClick={
                      () =>
                        setCategory(
                          filter
                        )
                    }
                  >
                    {
                      filter
                      ===
                      "all"
                        ? "All"
                        : filter
                    }
                  </button>
                );

              }
            )
          }
        </div>
      </div>


      {/* ================================================================
          RESULTS
         ================================================================ */}

      {
        featured
          ? (
              <div
                className={
                  styles.resultsV76
                }
                data-insights-results
              >

                <article
                  className={
                    styles.featuredV76
                  }
                  data-insight-featured="true"
                  data-insight-slug={
                    featured.slug
                  }
                >
                  <div
                    className={
                      styles.featuredIdentityV76
                    }
                    data-insight-featured-part="identity"
                  >
                    <div
                      className={
                        styles.featuredTopV76
                      }
                    >
                      <p
                        className={
                          styles.featuredEyebrowV76
                        }
                      >
                        FEATURED / {
                          featured.category.toUpperCase()
                        }
                      </p>


                      <p
                        className={
                          styles.metaV76
                        }
                      >
                        <time
                          dateTime={
                            featured.publishedAt
                          }
                        >
                          {
                            formatPublishedDate(
                              featured.publishedAt
                            )
                          }
                        </time>

                        <span
                          aria-hidden="true"
                        >
                          ·
                        </span>

                        <span>
                          {
                            featured.readingTime
                          }
                        </span>
                      </p>
                    </div>


                    <h3
                      className={
                        styles.featuredTitleV76
                      }
                    >
                      <Link
                        href={
                          `/insights/${featured.slug}`
                        }
                      >
                        {
                          featured.title
                        }
                      </Link>
                    </h3>
                  </div>


                  <div
                    className={
                      styles.featuredBodyV76
                    }
                    data-insight-featured-part="body"
                  >
                    <p
                      className={
                        styles.featuredSummaryV76
                      }
                    >
                      {
                        featured.summary
                      }
                    </p>


                    <div
                      className={
                        styles.featuredFooterV76
                      }
                    >
                      <p
                        className={
                          styles.authorV76
                        }
                      >
                        BY {
                          featured.author
                            .toUpperCase()
                        }
                      </p>


                      <Link
                        className={
                          styles.readLinkV76
                        }
                        href={
                          `/insights/${featured.slug}`
                        }
                      >
                        Read article

                        <Arrow />
                      </Link>
                    </div>
                  </div>
                </article>


                {
                  secondary.length
                  >
                  0
                    ? (
                        <div
                          className={
                            styles.gridV76
                          }
                          data-insight-grid
                        >
                          {
                            secondary.map(
                              insight => (
                                <article
                                  className={
                                    styles.cardV76
                                  }
                                  key={
                                    insight.slug
                                  }
                                  data-insight-card
                                  data-insight-slug={
                                    insight.slug
                                  }
                                >
                                  <div
                                    className={
                                      styles.cardMetaV76
                                    }
                                  >
                                    <span
                                      className={
                                        styles.categoryV76
                                      }
                                    >
                                      {
                                        insight.category
                                      }
                                    </span>


                                    <span>
                                      <time
                                        dateTime={
                                          insight.publishedAt
                                        }
                                      >
                                        {
                                          formatPublishedDate(
                                            insight.publishedAt
                                          )
                                        }
                                      </time>

                                      <span
                                        aria-hidden="true"
                                      >
                                        {" · "}
                                      </span>

                                      {
                                        insight.readingTime
                                      }
                                    </span>
                                  </div>


                                  <h3
                                    className={
                                      styles.cardTitleV76
                                    }
                                  >
                                    <Link
                                      href={
                                        `/insights/${insight.slug}`
                                      }
                                    >
                                      {
                                        insight.title
                                      }
                                    </Link>
                                  </h3>


                                  <p
                                    className={
                                      styles.cardSummaryV76
                                    }
                                  >
                                    {
                                      insight.summary
                                    }
                                  </p>


                                  <div
                                    className={
                                      styles.cardFooterV76
                                    }
                                  >
                                    <Link
                                      className={
                                        styles.readLinkV76
                                      }
                                      href={
                                        `/insights/${insight.slug}`
                                      }
                                    >
                                      Read article

                                      <Arrow />
                                    </Link>
                                  </div>
                                </article>
                              )
                            )
                          }
                        </div>
                      )
                    : null
                }

              </div>
            )
          : (
              <div
                className={
                  styles.emptyV76
                }
                data-insights-empty
                role="status"
              >
                <p
                  className={
                    styles.emptyEyebrowV76
                  }
                >
                  NO MATCHING RESEARCH
                </p>


                <h3>
                  No published insight matches this search and category.
                </h3>


                <p>
                  Adjust the search or return to the full published library.
                </p>


                <button
                  type="button"
                  className={
                    styles.clearV76
                  }
                  onClick={
                    clearFilters
                  }
                >
                  Clear filters
                </button>
              </div>
            )
      }

    </div>
  );

}
