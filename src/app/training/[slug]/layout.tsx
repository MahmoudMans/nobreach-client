import type {
  ReactNode
} from "react";

import styles from "./training-program-shell.module.css";
import { WebExploitationV41 } from "./web-exploitation-v41";
import { AISecurityCourseDetail } from "./ai-security-course-detail";
import { RedTeamV40 } from "./red-team-v40";


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


  // NB_WEB_EXPLOIT_V28_GATE
  // NB_WEB_EXPLOIT_V29_GATE
  // NB_WEB_EXPLOIT_EDITORIAL_V30
  const isWebExploitation =
    slug ===
    "web-exploitation-techniques";

return (
    <div
      className={
        isAiSecurity
          ? styles.aiSecurityCourseShell
          : styles.programShell
      }
      data-training-program={
        slug
      }

        data-ai-security-design={isAiSecurity ? "course-detail" : undefined}
      >
        {
          isAiSecurity
            ? (
              <AISecurityCourseDetail />
            )
            : (
              <>
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
               <RedTeamV40 />
                          )
                          : isWebExploitation
                            ? (
               <WebExploitationV41 />
             )
                            : children
                      }
              </>
            )
        }
      </div>
  );
}
