import {
  InsightsBrowser
} from "@/components/insights/insights-browser";

import {
  isInsightFilter,
  type InsightFilter
} from "@/lib/insight-filter";

import {
  createMetadata
} from "@/lib/seo";

import indexStyles from "./insights-index.module.css";


export const metadata =
  createMetadata({
    title:
      "Cybersecurity Insights",

    description:
      "Technical writing from No Breach covering web security, API security, offensive security and AI security.",

    path:
      "/insights"
  });


type Props = {
  searchParams:
    Promise<{
      category?:
        | string
        | string[]
        | undefined;
    }>;
};


function resolveCategory(
  value:
    | string
    | string[]
    | undefined
): InsightFilter {

  const candidate =
    Array.isArray(
      value
    )
      ? value[0]
      : value;


  if (
    isInsightFilter(
      candidate
    )
  ) {

    return candidate;

  }


  return "all";

}


export default async function InsightsPage({
  searchParams
}: Props) {

  const params =
    await searchParams;


  const initialCategory =
    resolveCategory(
      params.category
    );


  return (
    <div
      className={
        indexStyles.page
      }
      data-insights-index="resource-system"
      data-insights-index-redesign="v76"
    >

      {/* ================================================================
          HERO
         ================================================================ */}

      <section
        className={
          indexStyles.pageIntro
        }
        data-insights-index-section="intro"
      >
        <div
          className={
            indexStyles.pageIntroDecoration
          }
          aria-hidden="true"
        />


        <div
          className={
            indexStyles.pageIntroInner
          }
        >
          <div
            className={
              indexStyles.pageIntroCopy
            }
          >
            <p
              className={
                indexStyles.eyebrow
              }
            >
              NOBREACH / RESEARCH
            </p>


            <h1>
              Security thinking worth publishing.
            </h1>


            <p
              className={
                indexStyles.introLead
              }
            >
              Practical security research, field notes and
              technical thinking across application security,
              AI systems and offensive testing.
            </p>
          </div>


          <aside
            className={
              indexStyles.researchFocus
            }
            aria-label="Research focus"
          >
            <p
              className={
                indexStyles.focusLabel
              }
            >
              RESEARCH FOCUS
            </p>


            <div
              className={
                indexStyles.focusRows
              }
            >
              <span>
                Application security
              </span>

              <span>
                AI security
              </span>

              <span>
                Security testing
              </span>
            </div>
          </aside>
        </div>
      </section>


      {/* ================================================================
          01 — RESEARCH LIBRARY
         ================================================================ */}

      <section
        className={
          indexStyles.resources
        }
        data-insights-index-section="resources"
        aria-labelledby="insights-library-title"
      >
        <div
          className={
            indexStyles.libraryHeader
          }
        >
          <div>
            <p
              className={
                indexStyles.libraryEyebrow
              }
            >
              <span>
                01
              </span>

              Research library
            </p>


            <h2
              id="insights-library-title"
            >
              Published technical research.
            </h2>
          </div>


          <p
            className={
              indexStyles.libraryLead
            }
          >
            Browse No Breach writing by security topic or
            search across the published library.
          </p>
        </div>


        <div
          className={
            indexStyles.currentContent
          }
        >
          <InsightsBrowser
            initialCategory={
              initialCategory
            }
          />
        </div>
      </section>

    </div>
  );

}
