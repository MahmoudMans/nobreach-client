import type {
  ReactNode
} from "react";

import styles from "./training-program-shell.module.css";


export default async function TrainingProgramLayout({
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

  const isAiSecurity =
    slug ===
    "ai-security-foundations";


  // NB_RED_TEAM_V27_GATE
  const isRedTeam =
    slug ===
    "red-team-foundations";

return (
    <div
      className={
        isAiSecurity
          ? styles.aiSecurity
          : styles.programShell
      }
      data-training-program={
        slug
      }
    >
      {
        isAiSecurity
          ? (
              <div
                className={
                  styles.aiAmbientVisual
                }
                data-ui="ai-security-visual"
                aria-hidden="true"
              >
                <div
                  className={
                    styles.aiOrbitLarge
                  }
                />

                <div
                  className={
                    styles.aiOrbitSmall
                  }
                />

                <div
                  className={
                    styles.aiCore
                  }
                >
                  <span>
                    AI
                  </span>
                </div>

                <span
                  className={`${styles.aiNode} ${styles.aiNodeOne}`}
                />

                <span
                  className={`${styles.aiNode} ${styles.aiNodeTwo}`}
                />

                <span
                  className={`${styles.aiNode} ${styles.aiNodeThree}`}
                />

                <span
                  className={`${styles.aiNode} ${styles.aiNodeFour}`}
                />

                <span
                  className={`${styles.aiNode} ${styles.aiNodeFive}`}
                />

                <svg
                  className={
                    styles.aiConnections
                  }
                  viewBox="0 0 520 420"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M258 207 L122 88"
                  />

                  <path
                    d="M258 207 L410 78"
                  />

                  <path
                    d="M258 207 L459 226"
                  />

                  <path
                    d="M258 207 L361 350"
                  />

                  <path
                    d="M258 207 L95 330"
                  />

                  <path
                    d="M122 88 L410 78"
                  />

                  <path
                    d="M95 330 L361 350"
                  />
                </svg>
              </div>
            )
          : null
      }

      {
        isRedTeam
          ? (
            <div
              className={
                styles.redTeam
              }
              data-red-team-design="v27"
            >
              <div
                className={
                  styles.redTeamVisual
                }
                aria-hidden="true"
              >
                <div
                  className={
                    styles.redTeamVisualHeader
                  }
                >
                  <span>
                    ADVERSARY PATH
                  </span>

                  <span>
                    RT / 01
                  </span>
                </div>

                <div
                  className={
                    styles.redTeamVisualPath
                  }
                >
                  <div
                    className={
                      styles.redTeamVisualNode
                    }
                  >
                    <span>
                      01
                    </span>

                    <strong>
                      RECON
                    </strong>
                  </div>

                  <i />

                  <div
                    className={
                      styles.redTeamVisualNode
                    }
                  >
                    <span>
                      02
                    </span>

                    <strong>
                      MAP
                    </strong>
                  </div>

                  <i />

                  <div
                    className={
                      styles.redTeamVisualNode
                    }
                  >
                    <span>
                      03
                    </span>

                    <strong>
                      TEST
                    </strong>
                  </div>

                  <i />

                  <div
                    className={
                      styles.redTeamVisualNode
                    }
                  >
                    <span>
                      04
                    </span>

                    <strong>
                      REPORT
                    </strong>
                  </div>
                </div>

                <div
                  className={
                    styles.redTeamVisualFooter
                  }
                >
                  <span>
                    OBSERVE
                  </span>

                  <span>
                    UNDERSTAND
                  </span>
                </div>
              </div>

              {
                children
              }
            </div>
          )
          : children
      }
    </div>
  );
}
