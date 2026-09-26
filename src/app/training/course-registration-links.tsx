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


function RegistrationAction({
  program
}: {
  program:
    RegistrationProgram;
}) {

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
        {program.name}
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


  const isTrainingIndex =
    pathname
    ===
    "/training";


  const selectedProgram =
    programs.find(
      (
        program
      ) =>
        pathname
        ===
        `/training/${program.slug}`
    );


  if (
    !isTrainingIndex
    &&
    !selectedProgram
  ) {

    return null;

  }


  const visiblePrograms =
    selectedProgram
      ?
      [
        selectedProgram
      ]
      :
      programs;


  return (
    <section
      className={
        styles.registration
      }
      data-training-registration-section
      data-registration-placement="top"
      aria-label="Mentorship registration"
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
          <span
            className={
              styles.label
            }
          >
            Mentorship registration
          </span>


          {
            selectedProgram
              ?
              (
                <span
                  className={
                    styles.prompt
                  }
                >
                  Ready to join this program?
                </span>
              )
              :
              (
                <span
                  className={
                    styles.prompt
                  }
                >
                  Choose a program and register.
                </span>
              )
          }
        </div>


        <div
          className={
            styles.actions
          }
        >
          {
            visiblePrograms.map(
              (
                program
              ) => (
                <RegistrationAction
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
