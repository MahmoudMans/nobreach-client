import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import * as insightContent from "@/content/insights";

import sharedArticleStyles from "./article.module.css";
import styles from "./attack-surface-insight-v53.module.css";


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

      const result =
        asString(
          item
        );


      return result
        ?
        [
          result
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
        "Attack surface research dossier is missing."
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


export function AttackSurfaceInsightV53() {

  return (
    <article
      className={
        `${sharedArticleStyles.article} ${styles.page}`
      }
      data-attack-surface-insight-design="v53"
      data-insight-slug="attack-surface-mapping-before-exploitation"
    >

      {/* ================================================================
          INTELLIGENCE MASTHEAD
         ================================================================ */}

      <section
        className={
          styles.masthead
        }
        data-insight-section="intro"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <div
            className={
              styles.topline
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
                Research dossier
              </span>
            </nav>


            <p
              className={
                styles.dossierId
              }
            >
              NBR / RECON / 01
            </p>
          </div>


          <div
            className={
              styles.mastheadBody
            }
          >
            <p
              className={
                styles.kicker
              }
            >
              <span>
                {
                  article.category
                }
              </span>

              Reconnaissance dossier
            </p>


            <h1>
              {
                article.title
              }
            </h1>


            <div
              className={
                styles.introLower
              }
            >
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
                  styles.mastheadMeta
                }
              >
                <div>
                  <span>
                    Published
                  </span>

                  <strong>
                    {
                      article.publishedAt
                    }
                  </strong>
                </div>

                <div>
                  <span>
                    Reading
                  </span>

                  <strong>
                    {
                      article.readingTime
                    }
                  </strong>
                </div>

                <div>
                  <span>
                    Research
                  </span>

                  <strong>
                    {
                      article.author
                    }
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          EXPOSURE MAP
         ================================================================ */}

      <section
        className={
          styles.exposure
        }
        aria-label="Attack surface reconnaissance model"
        data-insight-section="surface-model"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <header
            className={
              styles.exposureHeader
            }
          >
            <div>
              <p
                className={
                  styles.microLabel
                }
              >
                Recon workflow
              </p>

              <h2>
                Map the surface before touching the target.
              </h2>
            </div>


            <p>
              Build context first. Exploitation comes later.
            </p>
          </header>


          <div
            className={
              styles.exposureMap
            }
            data-attack-surface-map="v53"
            aria-hidden="true"
          >
            <div
              className={
                styles.exposureAxis
              }
            >
              <span>
                EXTERNAL
              </span>

              <span>
                CONTEXT
              </span>

              <span>
                DEPTH
              </span>
            </div>


            {
              [
                [
                  "01",
                  "OBSERVE",
                  "Public edge"
                ],
                [
                  "02",
                  "ENUMERATE",
                  "Reachable systems"
                ],
                [
                  "03",
                  "RELATE",
                  "Trust paths"
                ],
                [
                  "04",
                  "VERIFY",
                  "Exposure"
                ],
                [
                  "05",
                  "PRIORITIZE",
                  "Attack paths"
                ]
              ].map(
                item => (
                  <div
                    className={
                      styles.exposureStep
                    }
                    key={
                      item[
                        0
                      ]
                    }
                  >
                    <span
                      className={
                        styles.exposureNumber
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
                  </div>
                )
              )
            }


            <div
              className={
                styles.exposureTrace
              }
            />
          </div>
        </Container>
      </section>


      {/* ================================================================
          RESEARCH DOSSIER
         ================================================================ */}

      <section
        className={
          styles.dossier
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
              `${sharedArticleStyles.layout} ${styles.dossierGrid}`
            }
            data-article-reading-grid="true"
          >

            <aside
              className={
                styles.indexRail
              }
            >
              <nav
                className={
                  `${sharedArticleStyles.toc} ${styles.fieldIndex}`
                }
                aria-label="Article contents"
              >
                <p
                  className={
                    styles.microLabel
                  }
                >
                  Field index
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


            <div
              className={
                `${sharedArticleStyles.content} ${styles.researchBody}`
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
                        `${sharedArticleStyles.section} ${styles.chapter}`
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
                          styles.chapterHeader
                        }
                      >
                        <div
                          className={
                            styles.chapterNumber
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
                            Research chapter
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
                          styles.chapterBody
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


            <aside
              className={
                `${sharedArticleStyles.metaSide} ${styles.dossierMeta}`
              }
              aria-label="Article information"
            >
              <div
                className={
                  styles.metaSticky
                }
              >
                <p
                  className={
                    styles.microLabel
                  }
                >
                  Dossier information
                </p>


                <dl
                  className={
                    styles.metaList
                  }
                >
                  <div>
                    <dt>
                      Classification
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
                      Researcher
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
                          styles.tagBlock
                        }
                      >
                        <p
                          className={
                            styles.microLabel
                          }
                        >
                          Index terms
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
                          styles.referenceBlock
                        }
                      >
                        <p
                          className={
                            styles.microLabel
                          }
                        >
                          Operational context
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
                          styles.referenceBlock
                        }
                      >
                        <p
                          className={
                            styles.microLabel
                          }
                        >
                          Training reference
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
          RESEARCH DISPATCHES
         ================================================================ */}

      {
        relatedResearch.length
        >
        0
          ?
          (
            <section
              className={
                `${sharedArticleStyles.relatedSection} ${styles.dispatches}`
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
                    styles.dispatchHeader
                  }
                >
                  <div>
                    <p
                      className={
                        styles.microLabel
                      }
                    >
                      Research dispatches
                    </p>

                    <h2>
                      Continue the investigation.
                    </h2>
                  </div>


                  <Link
                    href="/insights"
                    className={
                      styles.inlineAction
                    }
                  >
                    Research index

                    <Arrow />
                  </Link>
                </header>


                <div
                  className={
                    `${sharedArticleStyles.relatedGrid} ${styles.dispatchRows}`
                  }
                >
                  {
                    relatedResearch.map(
                      (
                        item,
                        index
                      ) => (
                        <Link
                          href={
                            `/insights/${item.slug}`
                          }
                          className={
                            styles.dispatchRow
                          }
                          key={
                            item.slug
                          }
                        >
                          <span
                            className={
                              styles.dispatchNumber
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
                                item.category
                              }
                            </p>

                            <h3>
                              {
                                item.title
                              }
                            </h3>
                          </div>


                          <span
                            className={
                              styles.dispatchSummary
                            }
                          >
                            {
                              item.summary
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
          CLOSING INTELLIGENCE STRIP
         ================================================================ */}

      <section
        className={
          styles.closing
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
              styles.closingGrid
            }
          >
            <p
              className={
                styles.closingCode
              }
            >
              NBR / END OF DOSSIER
            </p>


            <div>
              <p
                className={
                  styles.microLabel
                }
              >
                Next action
              </p>

              <h2>
                Turn reconnaissance into informed testing.
              </h2>
            </div>


            <div
              className={
                styles.closingActions
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
