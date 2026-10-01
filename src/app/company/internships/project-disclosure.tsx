"use client";

import {
  useState
} from "react";

import styles from "./internships.module.css";


type InternshipProjectDisclosureProps = {
  number:
    string;

  slug:
    string;

  title:
    string;

  track:
    string;

  summary:
    string;

  technologies:
    readonly string[];

  work:
    readonly string[];

  outputs:
    readonly string[];
};


export function InternshipProjectDisclosure({
  number,
  slug,
  title,
  track,
  summary,
  technologies,
  work,
  outputs
}: InternshipProjectDisclosureProps) {

  const [
    open,
    setOpen
  ] =
    useState(
      false
    );


  const triggerId =
    `internship-${slug}-trigger`;

  const panelId =
    `internship-${slug}-panel`;


  return (
    <article
      className={
        styles.projectRow
      }
      data-internship-project
      data-project-open={
        open
          ? "true"
          : "false"
      }
    >
      <div
        className={
          styles.projectRowLayout
        }
      >
        <span
          className={
            styles.projectNumber
          }
          aria-hidden="true"
        >
          {
            number
          }
        </span>

        <div
          className={
            styles.projectContent
          }
        >
          <p
            className={
              styles.projectTrack
            }
          >
            {
              track
            }
          </p>

          <div
            className={
              styles.projectHeadingRow
            }
          >
            <h3
              className={
                styles.projectTitle
              }
            >
              {
                title
              }
            </h3>

            <button
              id={
                triggerId
              }
              className={
                styles.projectToggle
              }
              type="button"
              aria-expanded={
                open
              }
              aria-controls={
                panelId
              }
              onClick={
                () =>
                  setOpen(
                    current =>
                      !current
                  )
              }
            >
              <span>
                {
                  open
                    ? "Hide details"
                    : "View details"
                }
              </span>

              <span
                className={
                  styles.projectToggleSymbol
                }
                aria-hidden="true"
              >
                {
                  open
                    ? "−"
                    : "+"
                }
              </span>
            </button>
          </div>

          <p
            className={
              styles.projectSummary
            }
          >
            {
              summary
            }
          </p>

          <ul
            className={
              styles.projectTechnologies
            }
            aria-label={
              `${title} technologies`
            }
          >
            {
              technologies.map(
                (
                  technology
                ) => (
                  <li
                    key={
                      technology
                    }
                  >
                    {
                      technology
                    }
                  </li>
                )
              )
            }
          </ul>
        </div>
      </div>

      <div
        id={
          panelId
        }
        className={
          styles.projectDetails
        }
        role="region"
        aria-labelledby={
          triggerId
        }
        hidden={
          !open
        }
      >
        <div
          className={
            styles.detailGroup
          }
        >
          <h4
            id={
              `${panelId}-work`
            }
          >
            Work performed
          </h4>

          <ul>
            {
              work.map(
                (
                  item
                ) => (
                  <li
                    key={
                      item
                    }
                  >
                    {
                      item
                    }
                  </li>
                )
              )
            }
          </ul>
        </div>

        <div
          className={
            styles.detailGroup
          }
        >
          <h4
            id={
              `${panelId}-outputs`
            }
          >
            Technical outputs
          </h4>

          <ul>
            {
              outputs.map(
                (
                  output
                ) => (
                  <li
                    key={
                      output
                    }
                  >
                    {
                      output
                    }
                  </li>
                )
              )
            }
          </ul>
        </div>
      </div>
    </article>
  );

}
