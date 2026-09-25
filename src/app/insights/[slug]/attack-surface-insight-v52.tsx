import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import * as insightContent from "@/content/insights";

import sharedArticleStyles from "./article.module.css";
import styles from "./attack-surface-insight-v52.module.css";


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
      ?
      value.sections
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
      :
      [];


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


const discoveredInsights:
  CanonicalInsight[] =
    [];


for (
  const exportedValue
  of Object.values(
    insightContent
  )
) {

  if (
    !Array.isArray(
      exportedValue
    )
  ) {

    continue;

  }


  for (
    const value
    of exportedValue
  ) {

    const insight =
      normalizeInsight(
        value
      );


    if (
      insight
    ) {

      discoveredInsights.push(
        insight
      );

    }

  }

}


const insightMap =
  new Map<
    string,
    CanonicalInsight
  >();


for (
  const insight
  of discoveredInsights
) {

  insightMap.set(
    insight.slug,
    insight
  );

}


const insights =
  Array.from(
    insightMap.values()
  );


const article =
  (() => {

    const found =
      insights.find(
        insight =>
          insight.slug
          ===
          "attack-surface-mapping-before-exploitation"
      );


    if (
      !found
    ) {

      throw new Error(
        "Attack surface research article data is missing."
      );

    }


    return found;

  })();


const moreResearch =
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


function labelFromSlug(
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


export function AttackSurfaceInsightV52() {

  return (
    <article
      className={
        `${sharedArticleStyles.article} ${styles.page}`
      }
      data-attack-surface-insight-design="v52"
      data-insight-slug="attack-surface-mapping-before-exploitation"
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
                styles.surfaceMap
              }
              data-attack-surface-map="true"
              aria-hidden="true"
            >
              <div
                className={
                  styles.mapHeader
                }
              >
                <span>
                  ATTACK SURFACE
                </span>

                <span>
                  MAP / 01
                </span>
              </div>


              <div
                className={
                  styles.mapCanvas
                }
              >
                <div
                  className={
                    `${styles.mapNode} ${styles.nodeA}`
                  }
                >
                  <span>
                    01
                  </span>

                  <strong>
                    DISCOVER
                  </strong>

                  <small>
                    ASSETS
                  </small>
                </div>


                <div
                  className={
                    `${styles.mapNode} ${styles.nodeB}`
                  }
                >
                  <span>
                    02
                  </span>

                  <strong>
                    RESOLVE
                  </strong>

                  <small>
                    INTERFACES
                  </small>
                </div>


                <div
                  className={
                    `${styles.mapNode} ${styles.nodeC}`
                  }
                >
                  <span>
                    03
                  </span>

                  <strong>
                    RELATE
                  </strong>

                  <small>
                    TRUST
                  </small>
                </div>


                <div
                  className={
                    `${styles.mapNode} ${styles.nodeD}`
                  }
                >
                  <span>
                    04
                  </span>

                  <strong>
                    PRIORITIZE
                  </strong>

                  <small>
                    PATHS
                  </small>
                </div>


                <i
                  className={
                    `${styles.mapLine} ${styles.lineA}`
                  }
                />

                <i
                  className={
                    `${styles.mapLine} ${styles.lineB}`
                  }
                />

                <i
                  className={
                    `${styles.mapLine} ${styles.lineC}`
                  }
                />


                <div
                  className={
                    styles.mapCenter
                  }
                >
                  <span>
                    EXTERNAL
                  </span>

                  <strong>
                    SURFACE
                  </strong>
                </div>
              </div>


              <div
                className={
                  styles.mapFooter
                }
              >
                <span>
                  OBSERVE BEFORE EXPLOIT
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
              `${sharedArticleStyles.layout} ${styles.readingGrid}`
            }
            data-article-reading-grid="true"
          >

            {/* CONTENTS */}

            <aside
              className={
                styles.contentsColumn
              }
            >
              <nav
                className={
                  `${sharedArticleStyles.toc} ${styles.contents}`
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
                        item,
                        index
                      ) => (
                        <li
                          key={
                            item.id
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
                              `#${item.id}`
                            }
                          >
                            {
                              item.heading
                            }
                          </a>
                        </li>
                      )
                    )
                  }
                </ol>
              </nav>
            </aside>


            {/* CANONICAL RESEARCH */}

            <div
              className={
                `${sharedArticleStyles.content} ${styles.research}`
              }
              data-article-research="true"
            >
              {
                article.sections.map(
                  (
                    item,
                    index
                  ) => (
                    <section
                      className={
                        `${sharedArticleStyles.section} ${styles.articleSection}`
                      }
                      id={
                        item.id
                      }
                      key={
                        item.id
                      }
                      data-article-section="true"
                    >
                      <header
                        className={
                          styles.sectionHeader
                        }
                      >
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
                            item.heading
                          }
                        </h2>
                      </header>


                      <div
                        className={
                          styles.prose
                        }
                      >
                        {
                          item.paragraphs.map(
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
                          item.bullets.length
                          >
                          0
                            ?
                            (
                              <ul>
                                {
                                  item.bullets.map(
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
                            :
                            null
                        }
                      </div>
                    </section>
                  )
                )
              }
            </div>


            {/* INFORMATION */}

            <aside
              className={
                `${sharedArticleStyles.metaSide} ${styles.infoColumn}`
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
                      ?
                      (
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
                      :
                      null
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
                    ?
                    (
                      <div
                        className={
                          styles.contextGroup
                        }
                      >
                        <p
                          className={
                            styles.railLabel
                          }
                        >
                          Topics
                        </p>

                        <div
                          className={
                            styles.tags
                          }
                        >
                          {
                            article.tags.map(
                              tag => (
                                <span
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
                      </div>
                    )
                    :
                    null
                }


                {
                  article.relatedServiceSlugs.length
                  >
                  0
                    ?
                    (
                      <div
                        className={
                          styles.contextGroup
                        }
                      >
                        <p
                          className={
                            styles.railLabel
                          }
                        >
                          Related services
                        </p>

                        {
                          article.relatedServiceSlugs.map(
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
                                  labelFromSlug(
                                    slug
                                  )
                                }

                                <Arrow />
                              </Link>
                            )
                          )
                        }
                      </div>
                    )
                    :
                    null
                }


                {
                  article.relatedTrainingSlugs.length
                  >
                  0
                    ?
                    (
                      <div
                        className={
                          styles.contextGroup
                        }
                      >
                        <p
                          className={
                            styles.railLabel
                          }
                        >
                          Related training
                        </p>

                        {
                          article.relatedTrainingSlugs.map(
                            slug => (
                              <Link
                                href={
                                  `/training/${slug}`
                                }
                                key={
                                  slug
                                }
                              >
                                {
                                  labelFromSlug(
                                    slug
                                  )
                                }

                                <Arrow />
                              </Link>
                            )
                          )
                        }
                      </div>
                    )
                    :
                    null
                }
              </div>
            </aside>

          </div>
        </Container>
      </section>


      {/* ================================================================
          MORE RESEARCH
         ================================================================ */}

      {
        moreResearch.length
        >
        0
          ?
          (
            <section
              className={
                `${sharedArticleStyles.relatedSection} ${styles.relatedSection}`
              }
              data-insight-section="related"
            >
              <Container
                size="wide"
                className={
                  styles.container
                }
              >
                <header
                  className={
                    styles.relatedHeader
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
                      More research.
                    </h2>
                  </div>

                  <Link
                    href="/insights"
                    className={
                      styles.textAction
                    }
                  >
                    All insights

                    <Arrow />
                  </Link>
                </header>


                <div
                  className={
                    `${sharedArticleStyles.relatedGrid} ${styles.relatedList}`
                  }
                >
                  {
                    moreResearch.map(
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
          :
          null
      }


      {/* ================================================================
          FINAL CTA
         ================================================================ */}

      <section
        className={
          styles.finalCta
        }
        data-insight-section="final-cta"
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
                Continue mapping the security problem.
              </h2>
            </div>


            <div
              className={
                styles.finalBody
              }
            >
              <p>
                Explore more No Breach research or move from
                security thinking into practical assessment.
              </p>


              <div
                className={
                  styles.finalActions
                }
              >
                <Link
                  href="/insights"
                  className={
                    styles.primaryAction
                  }
                >
                  Explore Insights

                  <Arrow />
                </Link>


                <Link
                  href="/services"
                  className={
                    styles.secondaryAction
                  }
                >
                  Explore Services

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
