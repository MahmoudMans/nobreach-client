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
                  styles.editorialAmbient
                }
                data-ui="attack-surface-editorial-ambient"
                aria-hidden="true"
              >
                <svg
                  className={
                    styles.ambientMap
                  }
                  viewBox="0 0 560 320"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M68 220 L168 128 L284 176 L390 85 L500 148"
                  />

                  <path
                    d="M168 128 L220 60"
                  />

                  <path
                    d="M284 176 L338 258"
                  />

                  <path
                    d="M390 85 L472 44"
                  />

                  <circle
                    cx="68"
                    cy="220"
                    r="4"
                  />

                  <circle
                    cx="168"
                    cy="128"
                    r="4"
                  />

                  <circle
                    cx="220"
                    cy="60"
                    r="4"
                  />

                  <circle
                    cx="284"
                    cy="176"
                    r="5"
                  />

                  <circle
                    cx="338"
                    cy="258"
                    r="4"
                  />

                  <circle
                    cx="390"
                    cy="85"
                    r="4"
                  />

                  <circle
                    cx="472"
                    cy="44"
                    r="4"
                  />

                  <circle
                    cx="500"
                    cy="148"
                    r="4"
                  />
                </svg>

                <div
                  className={
                    styles.ambientCrosshair
                  }
                />

                <div
                  className={
                    styles.ambientLegend
                  }
                >
                  <span>
                    RECON
                  </span>

                  <span>
                    MAP
                  </span>

                  <span>
                    PRIORITIZE
                  </span>

                  <span>
                    TEST
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
