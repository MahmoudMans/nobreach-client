"use client";


import {
  usePathname
} from "next/navigation";

import styles from "./course-registration-links.module.css";


type RegistrationProgram = {
  slug:
    string;

  title:
    string;

  shortTitle:
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

      title:
        "Red Team Foundations — Mentorship Program",

      shortTitle:
        "Red Team Foundations",

      registrationUrl:
        "https://forms.gle/xfTXg2r1xVfECvCM8"
    },
    {
      slug:
        "ai-security-foundations",

      title:
        "AI Security Foundations — Mentorship Program",

      shortTitle:
        "AI Security Foundations",

      registrationUrl:
        "https://forms.gle/G5VhyDZ8i5EpWYuA6"
    },
    {
      slug:
        "web-exploitation-techniques",

      title:
        "Web Exploitation Techniques — Mentorship Program",

      shortTitle:
        "Web Exploitation Techniques",

      registrationUrl:
        "https://forms.gle/32b6mUKhYWbpz6NF6"
    }
  ];


function RegistrationLink({
  program
}: {
  program:
    RegistrationProgram;
}) {

  return (
    <a
      className={
        styles.program
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
          styles.programMeta
        }
      >
        Mentorship program
      </span>


      <span
        className={
          styles.programTitle
        }
      >
        {program.shortTitle}
      </span>


      <span
        className={
          styles.programAction
        }
      >
        Register
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


  const detailPrefix =
    "/training/";


  const isTrainingIndex =
    pathname
    ===
    "/training";


  const matchingProgram =
    programs.find(
      (
        program
      ) =>
        pathname
        ===
        `${detailPrefix}${program.slug}`
    );


  if (
    !isTrainingIndex
    &&
    !matchingProgram
  ) {

    return null;

  }


  const visiblePrograms =
    matchingProgram
      ?
      [
        matchingProgram
      ]
      :
      programs;


  return (
    <section
      className={
        styles.registration
      }
      aria-labelledby="mentorship-registration-title"
      data-training-registration-section
    >
      <div
        className={
          styles.container
        }
      >
        <div
          className={
            styles.heading
          }
        >
          <p
            className={
              styles.eyebrow
            }
          >
            Registration
          </p>


          <h2
            id="mentorship-registration-title"
          >
            Join the mentorship program.
          </h2>


          <p
            className={
              styles.description
            }
          >
            Ready to take part? Select your program and complete the
            registration form to apply.
          </p>
        </div>


        <div
          className={
            styles.programs
          }
        >
          {
            visiblePrograms.map(
              (
                program
              ) => (
                <RegistrationLink
                  key={
                    program.slug
                  }
                  program={
                    program
                  }
                />
              )
            )
          }
        </div>
      </div>
    </section>
  );

}
