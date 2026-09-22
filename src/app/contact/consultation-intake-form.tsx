"use client";

import {
  type FormEvent,
  useState,
} from "react";

import styles from "./contact.module.css";


const clientTypes = [
  "Startup",
  "Mid-size company",
  "Large company / Enterprise",
  "Educational institution",
  "Individual / Independent professional",
] as const;


const companySizes = [
  "1–10",
  "11–50",
  "51–200",
  "201+",
] as const;


const services = [
  "Security Consulting",
  "Zerodays",
  "Web Application Pentesting",
  "Cybersecurity Training",
  "Combination of the above",
  "Not sure yet — need guidance",
] as const;


const formats = [
  "One-time consultation",
  "Ongoing support",
  "Short-term project",
  "Training session(s) only",
] as const;


const strategyOptions = [
  "Yes",
  "Partially",
  "Not yet",
] as const;


const teamOptions = [
  "Yes",
  "No",
] as const;


function slugify(
  value:
    string
) {

  return value
    .toLowerCase()
    .replace(
      /[^a-z0-9]+/g,
      "-"
    )
    .replace(
      /^-|-$/g,
      ""
    );
}


export function ConsultationIntakeForm() {

  const [
    reviewReady,
    setReviewReady,
  ] =
    useState(
      false
    );


  const handleReview =
    (
      event:
        FormEvent<HTMLFormElement>
    ) => {

      event.preventDefault();

      setReviewReady(
        true
      );

    };


  const handleReset =
    () => {

      setReviewReady(
        false
      );

    };


  return (
    <form
      className={
        styles.intakeForm
      }
      data-consultation-form
      onReset={
        handleReset
      }
      onSubmit={
        handleReview
      }
    >

      <section
        className={
          styles.formStage
        }
        data-intake-stage="client-profile"
      >

        <header
          className={
            styles.formStageHeader
          }
        >
          <span>
            01
          </span>

          <div>
            <p>
              CLIENT PROFILE
            </p>

            <h3>
              Tell us who you are.
            </h3>
          </div>
        </header>


        <fieldset
          className={
            styles.questionGroup
          }
        >
          <legend>
            <span>
              01.1
            </span>

            Are you a:
          </legend>


          <div
            className={
              styles.optionList
            }
          >
            {
              clientTypes.map(
                (
                  option
                ) => {

                  const id =
                    `client-type-${slugify(
                      option
                    )}`;


                  return (
                    <label
                      className={
                        styles.option
                      }
                      htmlFor={
                        id
                      }
                      key={
                        option
                      }
                    >
                      <input
                        id={
                          id
                        }
                        name="clientType"
                        type="radio"
                        value={
                          option
                        }
                      />

                      <span
                        className={
                          styles.optionIndicator
                        }
                        aria-hidden="true"
                      />

                      <span>
                        {
                          option
                        }
                      </span>
                    </label>
                  );

                }
              )
            }
          </div>

        </fieldset>


        <div
          className={
            styles.textQuestion
          }
        >
          <label
            htmlFor="industry"
          >
            <span
              className={
                styles.questionIndex
              }
            >
              01.2
            </span>

            <strong>
              Industry / Sector
            </strong>

            <em>
              optional
            </em>
          </label>

          <input
            id="industry"
            name="industry"
            placeholder="Industry or sector"
            type="text"
          />
        </div>


        <fieldset
          className={
            styles.questionGroup
          }
        >
          <legend>
            <span>
              01.3
            </span>

            Company size:
          </legend>


          <div
            className={
              styles.compactOptions
            }
          >
            {
              companySizes.map(
                (
                  option
                ) => {

                  const id =
                    `company-size-${slugify(
                      option
                    )}`;


                  return (
                    <label
                      className={
                        styles.compactOption
                      }
                      htmlFor={
                        id
                      }
                      key={
                        option
                      }
                    >
                      <input
                        id={
                          id
                        }
                        name="companySize"
                        type="radio"
                        value={
                          option
                        }
                      />

                      <span>
                        {
                          option
                        }
                      </span>
                    </label>
                  );

                }
              )
            }
          </div>

        </fieldset>

      </section>


      <section
        className={
          styles.formStage
        }
        data-intake-stage="service-needs"
      >

        <header
          className={
            styles.formStageHeader
          }
        >
          <span>
            02
          </span>

          <div>
            <p>
              WHAT ARE YOU LOOKING FOR?
            </p>

            <h3>
              Define the support you need.
            </h3>
          </div>
        </header>


        <fieldset
          className={
            styles.questionGroup
          }
        >
          <legend>
            <span>
              02.1
            </span>

            Service(s) you’re interested in:
          </legend>


          <div
            className={
              styles.optionList
            }
          >
            {
              services.map(
                (
                  option
                ) => {

                  const id =
                    `service-${slugify(
                      option
                    )}`;


                  return (
                    <label
                      className={
                        styles.option
                      }
                      htmlFor={
                        id
                      }
                      key={
                        option
                      }
                    >
                      <input
                        id={
                          id
                        }
                        name="services"
                        type="checkbox"
                        value={
                          option
                        }
                      />

                      <span
                        className={
                          styles.optionIndicator
                        }
                        aria-hidden="true"
                      />

                      <span>
                        {
                          option
                        }
                      </span>
                    </label>
                  );

                }
              )
            }
          </div>

        </fieldset>


        <fieldset
          className={
            styles.questionGroup
          }
        >
          <legend>
            <span>
              02.2
            </span>

            Preferred format:
          </legend>


          <div
            className={
              styles.optionList
            }
          >
            {
              formats.map(
                (
                  option
                ) => {

                  const id =
                    `format-${slugify(
                      option
                    )}`;


                  return (
                    <label
                      className={
                        styles.option
                      }
                      htmlFor={
                        id
                      }
                      key={
                        option
                      }
                    >
                      <input
                        id={
                          id
                        }
                        name="preferredFormat"
                        type="radio"
                        value={
                          option
                        }
                      />

                      <span
                        className={
                          styles.optionIndicator
                        }
                        aria-hidden="true"
                      />

                      <span>
                        {
                          option
                        }
                      </span>
                    </label>
                  );

                }
              )
            }
          </div>

        </fieldset>

      </section>


      <section
        className={
          styles.formStage
        }
        data-intake-stage="technical-maturity"
      >

        <header
          className={
            styles.formStageHeader
          }
        >
          <span>
            03
          </span>

          <div>
            <p>
              TECHNICAL MATURITY
            </p>

            <h3>
              Describe the current environment.
            </h3>
          </div>
        </header>


        <fieldset
          className={
            styles.questionGroup
          }
        >
          <legend>
            <span>
              03.1
            </span>

            Do you already have a cybersecurity strategy in place?
          </legend>


          <div
            className={
              styles.compactOptions
            }
          >
            {
              strategyOptions.map(
                (
                  option
                ) => {

                  const id =
                    `strategy-${slugify(
                      option
                    )}`;


                  return (
                    <label
                      className={
                        styles.compactOption
                      }
                      htmlFor={
                        id
                      }
                      key={
                        option
                      }
                    >
                      <input
                        id={
                          id
                        }
                        name="strategy"
                        type="radio"
                        value={
                          option
                        }
                      />

                      <span>
                        {
                          option
                        }
                      </span>
                    </label>
                  );

                }
              )
            }
          </div>

        </fieldset>


        <fieldset
          className={
            styles.questionGroup
          }
        >
          <legend>
            <span>
              03.2
            </span>

            Do you have an in-house dev or security team?
          </legend>


          <div
            className={
              styles.compactOptions
            }
          >
            {
              teamOptions.map(
                (
                  option
                ) => {

                  const id =
                    `in-house-team-${slugify(
                      option
                    )}`;


                  return (
                    <label
                      className={
                        styles.compactOption
                      }
                      htmlFor={
                        id
                      }
                      key={
                        option
                      }
                    >
                      <input
                        id={
                          id
                        }
                        name="inHouseTeam"
                        type="radio"
                        value={
                          option
                        }
                      />

                      <span>
                        {
                          option
                        }
                      </span>
                    </label>
                  );

                }
              )
            }
          </div>

        </fieldset>

      </section>


      <aside
        className={
          styles.reviewStatusVisible
        }
        data-contact-frontend-only
        aria-label="Frontend-only consultation notice"
      >
        <strong>
          Frontend-only consultation intake.
        </strong>

        <p>
          This page does not transmit the form to a backend yet.
          Your answers remain in the current browser experience unless
          a real submission service is connected later.
        </p>

        <p>
          Do not enter passwords, credentials, API keys, access tokens,
          private keys, authentication secrets, or other sensitive
          information in this consultation form.
        </p>
      </aside>


      <div
        className={
          styles.formActions
        }
      >

        <button
          className={
            styles.reviewButton
          }
          type="submit"
        >
          Review consultation brief

          <span
            aria-hidden="true"
          >
            →
          </span>
        </button>


        <button
          className={
            styles.resetButton
          }
          type="reset"
        >
          Clear answers
        </button>

      </div>


      <div
        className={
          reviewReady
            ? styles.reviewStatusVisible
            : styles.reviewStatus
        }
        data-consultation-review
        aria-live="polite"
        role="status"
      >
        {
          reviewReady
            ? (
                <>
                  <strong>
                    Consultation brief ready.
                  </strong>

                  <p>
                    Your answers are ready to review before the meeting.
                    Nothing has been sent from this page.
                  </p>
                </>
              )
            : null
        }
      </div>

    </form>
  );
}
