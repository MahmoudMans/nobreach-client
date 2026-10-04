import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import * as insightContent from "@/content/insights";

import sharedArticleStyles from "./article.module.css";
import styles from "./manual-reasoning-insight-v55.module.css";


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

    const normalized =
      normalizeInsight(
        value
      );


    if (
      normalized
    ) {

      records.push(
        normalized
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
          "manual-reasoning-in-web-security-testing"
      );


    if (
      !result
    ) {

      throw new Error(
        "Manual reasoning Insight is missing."
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


export function ManualReasoningInsightV55() {

  return (
    <article
      className={
        `${sharedArticleStyles.article} ${styles.page}`
      }
      data-manual-reasoning-insight-design="v55"
      data-manual-reasoning-insight-redesign="v100"
      data-insight-slug="manual-reasoning-in-web-security-testing"
    >

      {/* ================================================================
          EDITORIAL PAGE INTRO
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
                article.category
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
                Research note · Manual testing
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


            <div
              className={
                styles.introContext
              }
            >
              <p
                className={
                  styles.microLabel
                }
              >
                Article context
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
          </div>
        </Container>
      </section>


      {/* ================================================================
          MANUAL REASONING LOOP
         ================================================================ */}

      <section
        className={
          styles.reasoning
        }
        data-insight-section="reasoning-loop"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <header
            className={
              styles.reasoningHeader
            }
          >
            <div>
              <p
                className={
                  styles.microLabel
                }
              >
                Manual testing loop
              </p>

              <h2>
                Reason before you automate.
              </h2>
            </div>


            <p>
              Testing becomes useful when observations are continuously turned
              into better questions.
            </p>
          </header>


          <div
            className={
              styles.reasoningTrack
            }
            data-reasoning-loop="v55"
            data-reasoning-loop-redesign="v100"
            role="list"
            aria-label="Manual testing loop"
          >
            {
              [
                [
                  "01",
                  "OBSERVE",
                  "Context"
                ],
                [
                  "02",
                  "HYPOTHESIZE",
                  "Question"
                ],
                [
                  "03",
                  "PROBE",
                  "Experiment"
                ],
                [
                  "04",
                  "INTERPRET",
                  "Evidence"
                ],
                [
                  "05",
                  "ITERATE",
                  "Refinement"
                ]
              ].map(
                (
                  item,
                  index
                ) => (
                  <div
                    className={
                      styles.reasoningStep
                    }
                    role="listitem"
                    key={
                      item[
                        0
                      ]
                    }
                  >
                    <span
                      className={
                        styles.stepIndex
                      }
                    >
                      {
                        item[
                          0
                        ]
                      }
                    </span>


                    <div>
                      <strong>
                        {
                          item[
                            1
                          ]
                        }
                      </strong>

                      <small>
                        {
                          item[
                            2
                          ]
                        }
                      </small>
                    </div>


                    {
                      index
                      <
                      4
                        ?
                        (
                          <span
                            className={
                              styles.connector
                            }
                            aria-hidden="true"
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
          </div>
        </Container>
      </section>


      {/* ================================================================
          TESTING NOTEBOOK
         ================================================================ */}

      <section
        className={
          styles.notebook
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
              `${sharedArticleStyles.layout} ${styles.notebookGrid}`
            }
            data-article-reading-grid="true"
          >

            {/* NOTEBOOK INDEX */}

            <aside
              className={
                styles.indexColumn
              }
            >
              <nav
                className={
                  `${sharedArticleStyles.toc} ${styles.indexNav}`
                }
                aria-label="Article contents"
              >
                <p
                  className={
                    styles.microLabel
                  }
                >
                  Notebook index
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

                            <strong>
                              {
                                section.heading
                              }
                            </strong>
                          </a>
                        </li>
                      )
                    )
                  }
                </ol>
              </nav>
            </aside>


            {/* RESEARCH NOTES */}

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
                        `${sharedArticleStyles.section} ${styles.note}`
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
                          styles.noteHeader
                        }
                      >
                        <div
                          className={
                            styles.noteNumber
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
                        </div>


                        <div>
                          <p
                            className={
                              styles.microLabel
                            }
                          >
                            Notebook entry
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


            {/* TESTING CONTEXT */}

            <aside
              className={
                `${sharedArticleStyles.metaSide} ${styles.contextColumn}`
              }
              aria-label="Article information"
            >
              <div
                className={
                  styles.contextSticky
                }
              >
                <p
                  className={
                    styles.microLabel
                  }
                >
                  Testing context
                </p>


                <dl
                  className={
                    styles.contextList
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
                      Publication
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

      <div
        className={
          styles.continuationGroupV100
        }
        data-manual-reasoning-continuation-group="v100"
      >

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
              data-manual-reasoning-continuation="research"
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
                      Related research
                    </p>

                    <h2>
                      Continue testing with context.
                    </h2>
                  </div>



                </header>


                <div
                  className={
                    `${sharedArticleStyles.relatedGrid} ${styles.relatedRows}`
                  }
                  data-manual-reasoning-related="v100"
                >
                  {
                    relatedResearch.map(
                      (
                        insight,
                        index
                      ) => (
                        <Link
                          className={
                            styles.relatedRow
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
        data-manual-reasoning-continuation="actions"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <div
            className={
              styles.finalInner
            }
          >
            <div>
              <p
                className={
                  styles.microLabel
                }
              >
                Web Security
              </p>

              <h2>
                Test deliberately. Understand what the application is telling you.
              </h2>
            </div>


            <div
              className={
                styles.finalActions
              }
            >
              <Link
                href="/services/web-application-pentesting"
                className={
                  styles.primaryAction
                }
              >
                Explore web testing

                <Arrow />
              </Link>

              <Link
                href="/insights"
                className={
                  styles.secondaryAction
                }
              >
                All insights
              </Link>
            </div>
          </div>
        </Container>
      </section>

      </div>

    </article>
  );

}
