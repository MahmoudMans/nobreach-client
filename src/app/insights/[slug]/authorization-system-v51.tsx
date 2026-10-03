import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import * as insightContent from "@/content/insights";

import styles from "./authorization-system-v51.module.css";


type UnknownRecord =
  Record<
    string,
    unknown
  >;


type CanonicalSection = {
  id:
    string;

  heading:
    string;

  paragraphs:
    string[];

  bullets:
    string[];
};


type CanonicalInsight = {
  slug:
    string;

  title:
    string;

  category:
    string;

  summary:
    string;

  author:
    string;

  publishedAt:
    string;

  updatedAt?:
    string;

  readingTime:
    string;

  tags:
    string[];

  sections:
    CanonicalSection[];

  relatedServiceSlugs:
    string[];

  relatedTrainingSlugs:
    string[];
};


function isRecord(
  value:
    unknown
): value is UnknownRecord {

  return (
    typeof value
    ===
    "object"
    &&
    value
    !==
    null
    &&
    !Array.isArray(
      value
    )
  );

}


function asString(
  value:
    unknown
) {

  if (
    typeof value
    !==
    "string"
  ) {

    return undefined;

  }


  const result =
    value.trim();


  return result
    ?
    result
    :
    undefined;

}


function asStringList(
  value:
    unknown
) {

  if (
    !Array.isArray(
      value
    )
  ) {

    return [];

  }


  return value.flatMap(
    item => {

      const text =
        asString(
          item
        );


      return text
        ?
        [
          text
        ]
        :
        [];

    }
  );

}


function normalizeSection(
  value:
    unknown
):
  CanonicalSection
  |
  null {

  if (
    !isRecord(
      value
    )
  ) {

    return null;

  }


  const id =
    asString(
      value.id
    );


  const heading =
    asString(
      value.heading
    )
    ??
    asString(
      value.title
    );


  const paragraphs =
    asStringList(
      value.paragraphs
    );


  const bullets =
    asStringList(
      value.bullets
    );


  if (
    !id
    ||
    !heading
    ||
    paragraphs.length
    ===
    0
  ) {

    return null;

  }


  return {
    id,
    heading,
    paragraphs,
    bullets
  };

}


function normalizeInsight(
  value:
    unknown
):
  CanonicalInsight
  |
  null {

  if (
    !isRecord(
      value
    )
  ) {

    return null;

  }


  const slug =
    asString(
      value.slug
    );


  const title =
    asString(
      value.title
    );


  const category =
    asString(
      value.category
    );


  const summary =
    asString(
      value.summary
    );


  const author =
    asString(
      value.author
    );


  const publishedAt =
    asString(
      value.publishedAt
    );


  const readingTime =
    asString(
      value.readingTime
    );


  const sections =
    Array.isArray(
      value.sections
    )
      ? value.sections
          .map(
            normalizeSection
          )
          .filter(
            (
              section
            ): section is CanonicalSection =>
              section
              !==
              null
          )
      : [];


  if (
    !slug
    ||
    !title
    ||
    !category
    ||
    !summary
    ||
    !author
    ||
    !publishedAt
    ||
    !readingTime
    ||
    sections.length
    ===
    0
  ) {

    return null;

  }


  return {
    slug,

    title,

    category,

    summary,

    author,

    publishedAt,

    updatedAt:
      asString(
        value.updatedAt
      ),

    readingTime,

    tags:
      asStringList(
        value.tags
      ),

    sections,

    relatedServiceSlugs:
      asStringList(
        value.relatedServiceSlugs
      ),

    relatedTrainingSlugs:
      asStringList(
        value.relatedTrainingSlugs
      )
  };

}


const insightRecords:
  UnknownRecord[] =
    [];


for (
  const exportedValue
  of Object.values(
    insightContent
  )
) {

  if (
    Array.isArray(
      exportedValue
    )
  ) {

    for (
      const item
      of exportedValue
    ) {

      if (
        isRecord(
          item
        )
      ) {

        insightRecords.push(
          item
        );

      }

    }

  }

}


const insights =
  insightRecords
    .map(
      normalizeInsight
    )
    .filter(
      (
        insight
      ): insight is CanonicalInsight =>
        insight
        !==
        null
    );


const article =
  (() => {

    const found =
      insights.find(
        insight =>
          insight.slug
          ===
          "authorization-is-a-system-not-a-checkbox"
      );


    if (
      !found
    ) {

      throw new Error(
        "Authorization research article data is missing."
      );

    }


    return found;

  })();


const relatedResearch =
  insights
    .filter(
      insight =>
        insight.slug
        !==
        article.slug
    )
    .slice(
      0,
      3
    );


const relatedServices =
  article.relatedServiceSlugs
    .filter(
      slug =>
        slug
        !==
        "api-security"
    )
    .slice(
      0,
      2
    );


const relatedTraining =
  article.relatedTrainingSlugs
    .slice(
      0,
      2
    );


function titleFromSlug(
  slug:
    string
) {

  return slug
    .split(
      "-"
    )
    .map(
      part =>
        part.charAt(
          0
        ).toUpperCase()
        +
        part.slice(
          1
        )
    )
    .join(
      " "
    );

}


function Arrow() {

  return (
    <span
      aria-hidden="true"
    >
      ↗
    </span>
  );

}


export function AuthorizationSystemInsightV51() {

  return (
    <article
      className={
        styles.page
      }
      data-authorization-insight-design="v51"
      data-authorization-insight-redesign="v80"
      data-insight-slug="authorization-is-a-system-not-a-checkbox"
    >

      {/* ================================================================
          PAGE INTRO
         ================================================================ */}

      <section
        className={
          styles.intro
        }
        data-insight-section="intro"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >

          <nav
            className={
              styles.breadcrumb
            }
            aria-label="Breadcrumb"
          >
            <Link
              href="/insights"
            >
              Insights
            </Link>

            <span
              aria-hidden="true"
            >
              /
            </span>

            <span>
              {
                article.title
              }
            </span>
          </nav>


          <div
            className={
              styles.introGrid
            }
          >

            <div
              className={
                styles.introCopy
              }
            >

              <p
                className={
                  styles.eyebrow
                }
              >
                {
                  article.category
                }
                {" "}
                / RESEARCH
              </p>


              <h1>
                {
                  article.title
                }
              </h1>


              <p
                className={
                  styles.summary
                }
              >
                {
                  article.summary
                }
              </p>


              <div
                className={
                  styles.introMeta
                }
              >
                <span>
                  {
                    article.publishedAt
                  }
                </span>

                <span>
                  {
                    article.readingTime
                  }
                </span>

                <span>
                  {
                    article.author
                  }
                </span>
              </div>

            </div>


            <div
              className={
                styles.authSignal
              }
              aria-label="Authorization system model"
            >

              <div
                className={
                  styles.signalHeader
                }
              >
                <span>
                  AUTHORIZATION
                </span>

                <span>
                  SYSTEM / 01
                </span>
              </div>


              <div
                className={
                  styles.signalCore
                }
                aria-hidden="true"
              >
                <div>
                  <span>
                    01
                  </span>

                  <strong>
                    IDENTITY
                  </strong>
                </div>

                <i />

                <div>
                  <span>
                    02
                  </span>

                  <strong>
                    RESOURCE
                  </strong>
                </div>

                <i />

                <div>
                  <span>
                    03
                  </span>

                  <strong>
                    ACTION
                  </strong>
                </div>

                <i />

                <div>
                  <span>
                    04
                  </span>

                  <strong>
                    POLICY
                  </strong>
                </div>
              </div>


              <div
                className={
                  styles.signalFooter
                }
              >
                <span>
                  SECURITY RESEARCH
                </span>

                <span>
                  NOBREACH
                </span>
              </div>

            </div>

          </div>

        </Container>
      </section>


      {/* ================================================================
          READING FRAME
         ================================================================ */}

      <section
        className={
          styles.readingSection
        }
        data-insight-section="reading"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >

          <div
            className={
              styles.readingGrid
            }
            data-article-reading-grid="true"
          >

            {/* ==========================================================
                CONTENTS
               ========================================================== */}

            <aside
              className={
                styles.contentsColumn
              }
            >
              <nav
                className={
                  styles.contents
                }
                aria-label="Article contents"
              >
                <p
                  className={
                    styles.railLabel
                  }
                >
                  Contents
                </p>


                <ol>
                  {
                    article.sections.map(
                      (
                        section,
                        index
                      ) => (
                        <li
                          key={
                            section.id
                          }
                        >
                          <span>
                            {
                              String(
                                index
                                +
                                1
                              ).padStart(
                                2,
                                "0"
                              )
                            }
                          </span>

                          <a
                            href={
                              `#${section.id}`
                            }
                          >
                            {
                              section.heading
                            }
                          </a>
                        </li>
                      )
                    )
                  }
                </ol>
              </nav>
            </aside>


            {/* ==========================================================
                RESEARCH PROSE
               ========================================================== */}

            <div
              className={
                styles.research
              }
              data-article-research="true"
            >
              {
                article.sections.map(
                  (
                    section,
                    index
                  ) => (
                    <section
                      className={
                        styles.articleSection
                      }
                      data-article-section="true"
                      id={
                        section.id
                      }
                      key={
                        section.id
                      }
                    >
                      <header>
                        <p
                          className={
                            styles.sectionNumber
                          }
                        >
                          {
                            String(
                              index
                              +
                              1
                            ).padStart(
                              2,
                              "0"
                            )
                          }
                        </p>

                        <h2>
                          {
                            section.heading
                          }
                        </h2>
                      </header>


                      <div
                        className={
                          styles.prose
                        }
                      >
                        {
                          section.paragraphs.map(
                            paragraph => (
                              <p
                                key={
                                  paragraph
                                }
                              >
                                {
                                  paragraph
                                }
                              </p>
                            )
                          )
                        }


                        {
                          section.bullets.length
                          >
                          0
                            ? (
                                <ul>
                                  {
                                    section.bullets.map(
                                      bullet => (
                                        <li
                                          key={
                                            bullet
                                          }
                                        >
                                          {
                                            bullet
                                          }
                                        </li>
                                      )
                                    )
                                  }
                                </ul>
                              )
                            : null
                        }
                      </div>
                    </section>
                  )
                )
              }
            </div>


            {/* ==========================================================
                ARTICLE INFORMATION
               ========================================================== */}

            <aside
              className={
                styles.infoColumn
              }
              aria-label="Article information"
            >
              <div
                className={
                  styles.infoPanel
                }
              >
                <p
                  className={
                    styles.railLabel
                  }
                >
                  Information
                </p>


                <dl>
                  <div>
                    <dt>
                      Category
                    </dt>

                    <dd>
                      {
                        article.category
                      }
                    </dd>
                  </div>


                  <div>
                    <dt>
                      Published
                    </dt>

                    <dd>
                      {
                        article.publishedAt
                      }
                    </dd>
                  </div>


                  {
                    article.updatedAt
                    &&
                    article.updatedAt
                    !==
                    article.publishedAt
                      ? (
                          <div>
                            <dt>
                              Updated
                            </dt>

                            <dd>
                              {
                                article.updatedAt
                              }
                            </dd>
                          </div>
                        )
                      : null
                  }


                  <div>
                    <dt>
                      Reading
                    </dt>

                    <dd>
                      {
                        article.readingTime
                      }
                    </dd>
                  </div>


                  <div>
                    <dt>
                      Author
                    </dt>

                    <dd>
                      {
                        article.author
                      }
                    </dd>
                  </div>
                </dl>


                {
                  article.tags.length
                  >
                  0
                    ? (
                        <div
                          className={
                            styles.contextLinks
                          }
                        >
                          <p
                            className={
                              styles.railLabel
                            }
                          >
                            Topics
                          </p>

                          {
                            article.tags.map(
                              tag => (
                                <span
                                  className={
                                    styles.topic
                                  }
                                  key={
                                    tag
                                  }
                                >
                                  {
                                    tag
                                  }
                                </span>
                              )
                            )
                          }
                        </div>
                      )
                    : null
                }


                <div
                  className={
                    styles.contextLinks
                  }
                >
                  <p
                    className={
                      styles.railLabel
                    }
                  >
                    Related context
                  </p>


                  <Link
                    href="/services/api-security"
                  >
                    API Security

                    <Arrow />
                  </Link>


                  {
                    relatedServices.map(
                      slug => (
                        <Link
                          href={
                            `/services/${slug}`
                          }
                          key={
                            slug
                          }
                        >
                          {
                            slug
                              .split(
                                "-"
                              )
                              .map(
                                part =>
                                  part.charAt(
                                    0
                                  ).toUpperCase()
                                  +
                                  part.slice(
                                    1
                                  )
                              )
                              .join(
                                " "
                              )
                          }

                          <Arrow />
                        </Link>
                      )
                    )
                  }


                  {
                    relatedTraining.map(
                      slug => (
                        <Link
                          href={
                            `/training/${slug}`
                          }
                          key={
                            slug
                          }
                        >
                          <span
                            className={
                              styles.contextRelationV80
                            }
                          >
                            Related training
                          </span>

                          <span
                            className={
                              styles.contextDestinationV80
                            }
                          >
                            {
                              titleFromSlug(
                                slug
                              )
                            }
                          </span>

                          <Arrow />
                        </Link>
                      )
                    )
                  }
                </div>

              </div>
            </aside>

          </div>

        </Container>
      </section>


      {/* ================================================================
          RELATED RESEARCH
         ================================================================ */}

      {
        relatedResearch.length
        >
        0
          ? (
              <section
                className={
                  styles.relatedSection
                }
                data-insight-section="related"
                data-authorization-continuation="research"
              >
                <Container
                  size="wide"
                  className={
                    styles.container
                  }
                >

                  <header
                    className={
                      styles.sectionHeader
                    }
                  >
                    <div>
                      <p
                        className={
                          styles.sectionEyebrow
                        }
                      >
                        <span>
                          NB
                        </span>

                        Research
                      </p>

                      <h2>
                        Related research.
                      </h2>
                    </div>


                    <Link
                      className={
                        styles.textAction
                      }
                      href="/insights"
                    >
                      All insights

                      <Arrow />
                    </Link>
                  </header>


                  <div
                    className={
                      styles.relatedList
                    }
                  >
                    {
                      relatedResearch.map(
                        (
                          item,
                          index
                        ) => (
                          <article
                            className={
                              styles.relatedRow
                            }
                            key={
                              item.slug
                            }
                          >
                            <span
                              className={
                                styles.relatedIndex
                              }
                              aria-hidden="true"
                            >
                              {
                                String(
                                  index
                                  +
                                  1
                                ).padStart(
                                  2,
                                  "0"
                                )
                              }
                            </span>


                            <div>
                              <p
                                className={
                                  styles.relatedMeta
                                }
                              >
                                {
                                  item.category
                                }
                              </p>

                              <h3>
                                {
                                  item.title
                                }
                              </h3>

                              <p>
                                {
                                  item.summary
                                }
                              </p>
                            </div>


                            <Link
                              href={
                                `/insights/${item.slug}`
                              }
                            >
                              Read research

                              <Arrow />
                            </Link>
                          </article>
                        )
                      )
                    }
                  </div>

                </Container>
              </section>
            )
          : null
      }


      {/* ================================================================
          FINAL CTA
         ================================================================ */}

      <section
        className={
          styles.finalCta
        }
        data-insight-section="final-cta"
        data-authorization-continuation="actions"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <div
            className={
              styles.finalLayout
            }
          >
            <div>
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                <span>
                  NB
                </span>

                Insights
              </p>

              <h2>
                Keep exploring practical security thinking.
              </h2>
            </div>


            <div
              className={
                styles.finalBody
              }
            >
              <p>
                Continue through No Breach research or explore the
                application-security services connected to this topic.
              </p>


              <div
                className={
                  styles.finalActions
                }
              >
                <Link
                  className={
                    styles.primaryAction
                  }
                  href="/insights"
                >
                  Explore Insights

                  <Arrow />
                </Link>


                <Link
                  className={
                    styles.secondaryAction
                  }
                  href="/services/api-security"
                >
                  API Security

                  <span
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </article>
  );

}
