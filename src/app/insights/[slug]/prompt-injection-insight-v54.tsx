import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import * as insightContent from "@/content/insights";

import sharedArticleStyles from "./article.module.css";
import styles from "./prompt-injection-insight-v54.module.css";


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


  const normalized =
    value.trim();


  return normalized
    ?
    normalized
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

      const normalized =
        asString(
          item
        );


      return normalized
        ?
        [
          normalized
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


const records:
  CanonicalInsight[] =
    [];


for (
  const exported
  of Object.values(
    insightContent
  )
) {

  if (
    !Array.isArray(
      exported
    )
  ) {

    continue;

  }


  for (
    const value
    of exported
  ) {

    const insight =
      normalizeInsight(
        value
      );


    if (
      insight
    ) {

      records.push(
        insight
      );

    }

  }

}


const map =
  new Map<
    string,
    CanonicalInsight
  >();


for (
  const insight
  of records
) {

  map.set(
    insight.slug,
    insight
  );

}


const insights =
  Array.from(
    map.values()
  );


const article =
  (() => {

    const result =
      insights.find(
        insight =>
          insight.slug
          ===
          "prompt-injection-matters-when-ai-can-act"
      );


    if (
      !result
    ) {

      throw new Error(
        "Prompt injection Insight is missing."
      );

    }


    return result;

  })();


const relatedResearch =
  insights
    .filter(
      item =>
        item.slug
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
        part
          .charAt(
            0
          )
          .toUpperCase()
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


export function PromptInjectionInsightV54() {

  return (
    <article
      className={
        `${sharedArticleStyles.article} ${styles.page}`
      }
      data-prompt-injection-insight-design="v54"
      data-insight-slug="prompt-injection-matters-when-ai-can-act"
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
              AI Security
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
            </div>


            <dl
              className={
                styles.introMeta
              }
            >
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
                  Research
                </dt>

                <dd>
                  {
                    article.author
                  }
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>


      {/* ================================================================
          ACTION BOUNDARY
         ================================================================ */}

      <section
        className={
          styles.boundary
        }
        data-insight-section="action-boundary"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <header
            className={
              styles.boundaryHeader
            }
          >
            <div>
              <p
                className={
                  styles.microLabel
                }
              >
                AI action path
              </p>

              <h2>
                The risk changes when instructions can become actions.
              </h2>
            </div>


            <p>
              Follow the path from input to capability.
            </p>
          </header>


          <div
            className={
              styles.actionPath
            }
            data-ai-action-boundary="v54"
            aria-hidden="true"
          >
            {
              [
                [
                  "01",
                  "PROMPT",
                  "Instruction"
                ],
                [
                  "02",
                  "MODEL",
                  "Interpretation"
                ],
                [
                  "03",
                  "TOOL",
                  "Capability"
                ],
                [
                  "04",
                  "ACTION",
                  "Effect"
                ]
              ].map(
                (
                  node,
                  index
                ) => (
                  <div
                    className={
                      styles.pathNode
                    }
                    key={
                      node[
                        0
                      ]
                    }
                  >
                    <span
                      className={
                        styles.pathIndex
                      }
                    >
                      {
                        node[
                          0
                        ]
                      }
                    </span>


                    <div>
                      <strong>
                        {
                          node[
                            1
                          ]
                        }
                      </strong>

                      <small>
                        {
                          node[
                            2
                          ]
                        }
                      </small>
                    </div>


                    {
                      index
                      <
                      3
                        ?
                        (
                          <span
                            className={
                              styles.pathArrow
                            }
                          >
                            →
                          </span>
                        )
                        :
                        null
                    }
                  </div>
                )
              )
            }


            <div
              className={
                styles.boundaryLine
              }
            >
              <span>
                ACTION BOUNDARY
              </span>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          READING SYSTEM
         ================================================================ */}

      <section
        className={
          styles.reading
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
                styles.indexColumn
              }
            >
              <nav
                className={
                  `${sharedArticleStyles.toc} ${styles.sectionIndex}`
                }
                aria-label="Article contents"
              >
                <p
                  className={
                    styles.microLabel
                  }
                >
                  Article contents
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
                          <a
                            href={
                              `#${section.id}`
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


            {/* RESEARCH */}

            <div
              className={
                `${sharedArticleStyles.content} ${styles.researchColumn}`
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
                        `${sharedArticleStyles.section} ${styles.researchSection}`
                      }
                      id={
                        section.id
                      }
                      key={
                        section.id
                      }
                      data-article-section="true"
                    >
                      <header
                        className={
                          styles.researchHeader
                        }
                      >
                        <span
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
                              styles.microLabel
                            }
                          >
                            Research note
                          </p>

                          <h2>
                            {
                              section.heading
                            }
                          </h2>
                        </div>
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
                            ?
                            (
                              <ul>
                                {
                                  section.bullets.map(
                                    bullet => (
                                      <li
                                        key={
                                          bullet
                                        }
                                      >
                                        <span
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>

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
                `${sharedArticleStyles.metaSide} ${styles.factsColumn}`
              }
              aria-label="Article information"
            >
              <div
                className={
                  styles.factsSticky
                }
              >
                <p
                  className={
                    styles.microLabel
                  }
                >
                  Article information
                </p>


                <dl
                  className={
                    styles.factList
                  }
                >
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

                  <div>
                    <dt>
                      Reading time
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
                          styles.tags
                        }
                      >
                        <p
                          className={
                            styles.microLabel
                          }
                        >
                          Topics
                        </p>

                        <div>
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
                          styles.references
                        }
                      >
                        <p
                          className={
                            styles.microLabel
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
                          styles.references
                        }
                      >
                        <p
                          className={
                            styles.microLabel
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
          RELATED RESEARCH
         ================================================================ */}

      {
        relatedResearch.length
        >
        0
          ?
          (
            <section
              className={
                `${sharedArticleStyles.relatedSection} ${styles.related}`
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
                        styles.microLabel
                      }
                    >
                      More research
                    </p>

                    <h2>
                      Continue through the security model.
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
                    relatedResearch.map(
                      (
                        insight,
                        index
                      ) => (
                        <Link
                          className={
                            styles.relatedItem
                          }
                          href={
                            `/insights/${insight.slug}`
                          }
                          key={
                            insight.slug
                          }
                        >
                          <span
                            className={
                              styles.relatedNumber
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
                          </span>


                          <div>
                            <p>
                              {
                                insight.category
                              }
                            </p>

                            <h3>
                              {
                                insight.title
                              }
                            </h3>
                          </div>


                          <span
                            className={
                              styles.relatedSummary
                            }
                          >
                            {
                              insight.summary
                            }
                          </span>


                          <Arrow />
                        </Link>
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
              styles.finalCtaInner
            }
          >
            <div>
              <p
                className={
                  styles.microLabel
                }
              >
                AI Security
              </p>

              <h2>
                Secure the path between model reasoning and real-world action.
              </h2>
            </div>


            <div
              className={
                styles.finalActions
              }
            >
              <Link
                href="/services"
                className={
                  styles.primaryAction
                }
              >
                Explore services

                <Arrow />
              </Link>

              <Link
                href="/insights"
                className={
                  styles.secondaryAction
                }
              >
                More research
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </article>
  );

}
