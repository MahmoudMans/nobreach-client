import type {
  ReactNode
} from "react";

import styles from "./attack-surface-shell.module.css";


export default async function InsightArticleLayout({
  children,
  params
}: {
  children:
    ReactNode;

  params:
    Promise<{
      slug:
        string;
    }>;
}) {
  const {
    slug
  } =
    await params;

  const isAttackSurfaceArticle =
    slug ===
    "attack-surface-mapping-before-exploitation";


  return (
    <div
      className={
        isAttackSurfaceArticle
          ? styles.attackSurfaceArticle
          : styles.articleShell
      }
      data-insight-article={
        slug
      }
    >
      {
        isAttackSurfaceArticle
          ? (
              <div
                className={
                  styles.attackSurfaceVisual
                }
                data-ui="attack-surface-topology"
                aria-hidden="true"
              >
                <div
                  className={
                    styles.visualHeader
                  }
                >
                  <span>
                    NB / ATTACK SURFACE
                  </span>

                  <span>
                    RECON / 01
                  </span>
                </div>

                <div
                  className={
                    styles.topologyStage
                  }
                >
                  <div
                    className={
                      styles.topologyGrid
                    }
                  />

                  <div
                    className={
                      styles.scanLine
                    }
                  />

                  <svg
                    className={
                      styles.topologyConnections
                    }
                    viewBox="0 0 620 430"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M92 104 L207 183"
                    />

                    <path
                      d="M207 183 L324 105"
                    />

                    <path
                      d="M207 183 L341 255"
                    />

                    <path
                      d="M341 255 L494 174"
                    />

                    <path
                      d="M341 255 L496 326"
                    />

                    <path
                      d="M92 104 L324 105"
                      className={
                        styles.secondaryConnection
                      }
                    />

                    <path
                      d="M207 183 L496 326"
                      className={
                        styles.secondaryConnection
                      }
                    />
                  </svg>

                  <div
                    className={`${styles.surfaceNode} ${styles.nodeDns}`}
                  >
                    <span>
                      DNS
                    </span>

                    <small>
                      discovery
                    </small>
                  </div>

                  <div
                    className={`${styles.surfaceNode} ${styles.nodeEdge}`}
                  >
                    <span>
                      EDGE
                    </span>

                    <small>
                      exposure
                    </small>
                  </div>

                  <div
                    className={`${styles.surfaceNode} ${styles.nodeAuth}`}
                  >
                    <span>
                      AUTH
                    </span>

                    <small>
                      trust
                    </small>
                  </div>

                  <div
                    className={`${styles.surfaceNode} ${styles.nodeApi}`}
                  >
                    <span>
                      API
                    </span>

                    <small>
                      objects
                    </small>
                  </div>

                  <div
                    className={`${styles.surfaceNode} ${styles.nodeApp}`}
                  >
                    <span>
                      APP
                    </span>

                    <small>
                      logic
                    </small>
                  </div>

                  <div
                    className={`${styles.surfaceNode} ${styles.nodeData}`}
                  >
                    <span>
                      DATA
                    </span>

                    <small>
                      impact
                    </small>
                  </div>

                  <div
                    className={
                      styles.reconCore
                    }
                  >
                    <strong>
                      MAP
                    </strong>

                    <small>
                      BEFORE
                      <br />
                      EXPLOIT
                    </small>
                  </div>
                </div>

                <div
                  className={
                    styles.visualFooter
                  }
                >
                  <span>
                    Discover
                  </span>

                  <span>
                    Model
                  </span>

                  <span>
                    Prioritize
                  </span>

                  <span>
                    Validate
                  </span>
                </div>
              </div>
            )
          : null
      }

      {
        children
      }
    </div>
  );
}
