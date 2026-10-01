"use client";


import {
  usePathname
} from "next/navigation";

import styles from "./course-registration-links.module.css";


type RegistrationProgram = {
  slug:
    string;

  name:
    string;

  registrationUrl:
    string;
};


const programs:
  RegistrationProgram[] =
  [
    {
      slug:
        "red-team-foundations",

      name:
        "Red Team Foundations",

      registrationUrl:
        "https://forms.gle/xfTXg2r1xVfECvCM8"
    },
    {
      slug:
        "ai-security-foundations",

      name:
        "AI Security Foundations",

      registrationUrl:
        "https://forms.gle/G5VhyDZ8i5EpWYuA6"
    },
    {
      slug:
        "web-exploitation-techniques",

      name:
        "Web Exploitation Techniques",

      registrationUrl:
        "https://forms.gle/32b6mUKhYWbpz6NF6"
    }
  ];


function getProgram(
  slug:
    string
) {

  return programs.find(
    program =>
      program.slug
      ===
      slug
  );

}


export function TrainingRegistrationAction({
  slug,
  className
}: {
  slug:
    string;

  className?:
    string;
}) {

  const program =
    getProgram(
      slug
    );


  if (
    !program
  ) {

    return null;

  }


  if (
    className
  ) {

    return (
      <a
        className={
          className
        }
        href={
          program.registrationUrl
        }
        target="_blank"
        rel="noreferrer"
        data-training-registration={
          program.slug
        }
      >
        Register now

        <span
          aria-hidden="true"
        >
          ↗
        </span>
      </a>
    );

  }


  return (
    <a
      className={
        styles.action
      }
      href={
        program.registrationUrl
      }
      target="_blank"
      rel="noreferrer"
      data-training-registration={
        program.slug
      }
    >
      <span
        className={
          styles.actionProgram
        }
      >
        {
          program.name
        }
      </span>


      <span
        className={
          styles.actionButton
        }
      >
        Register now

        <span
          aria-hidden="true"
        >
          ↗
        </span>
      </span>
    </a>
  );

}


export function CourseRegistrationLinks() {

  const pathname =
    usePathname();


  /*
   * V27:
   * The /training index owns registration inside each comparison card.
   * Detail routes retain the immediately visible registration strip.
   */
  if (
    pathname
    ===
    "/training"
  ) {

    return null;

  }


  const selectedProgram =
    programs.find(
      program =>
        pathname
        ===
        `/training/${program.slug}`
    );


  if (
    !selectedProgram
  ) {

    return null;

  }


  return (
    <section
      className={
        styles.registration
      }
      data-training-registration-section
      data-registration-placement="top"
      aria-label={`${selectedProgram.name} registration`}
    >
      <div
        className={
          styles.container
        }
      >
        <div
          className={
            styles.message
          }
        >
          <span>
            Program registration
          </span>
        </div>


        <TrainingRegistrationAction
          slug={
            selectedProgram.slug
          }
        />
      </div>
    </section>
  );

}
