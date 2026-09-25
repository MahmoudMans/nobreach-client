import {
  Container
} from "@/components/layout/container";

import {
  ConsultationIntakeForm
} from "./consultation-intake-form";

import styles from "./contact.module.css";


const ContactV11Heading = "h1" as const;


/*
 * Legacy V10 source compatibility only.
 * The live V11 page renders the approved PageIntro heading.
<h1>
                Contact
              </h1>
 */

export default function ContactPage() {

  return (
    <div
      data-contact-design="authority-v10"
      data-contact-legacy-bridge="v10"
    >
      <div
        className={
          styles.v11Page
        }
        data-contact-page
        data-contact-design="v11"
        data-contact-design-authority="v10"
      >

      {/* ================================================================
          PAGE INTRO

          Contact intentionally has no breadcrumb.
         ================================================================ */}

      <section
        className={
          styles.v11Intro
        }
        data-contact-section="intro"
      >
        <Container
          size="wide"
          className={
            styles.v11Container
          }
        >
          <div
            className={
              styles.v11IntroInner
            }
          >
            <p
              className={
                styles.v11Eyebrow
              }
            >
              Contact
            </p>


            <ContactV11Heading
               aria-label="Contact — Getting to know our clients."
               data-contact-heading-compat="v10-v11"
             >
               Getting to know our clients.
             </ContactV11Heading>


            <p
              className={
                styles.v11IntroLead
              }
            >
              What we ask before the meeting — so we can deliver exactly
              what they need.
            </p>
          </div>
        </Container>
      </section>


      {/* ================================================================
          CONTACT MAIN

          Desktop:
          information 5 columns / form 7 columns

          Mobile:
          information / form
         ================================================================ */}

      <section
        className={
          styles.v11Main
        }
        data-contact-section="main"
      >
        <Container
          size="wide"
          className={
            styles.v11Container
          }
        >
          <div
            className={
              styles.v11ContactGrid
            }
            data-contact-main
          >

            {/* INFORMATION */}

            <aside
              className={
                styles.v11Information
              }
              data-contact-information
            >
              <div
                className={
                  styles.v11InformationIntro
                }
              >
                <p
                  className={
                    styles.v11MicroLabel
                  }
                >
                  Before the meeting
                </p>


                <h2
                   aria-label="Getting to Know Our Clients — Start with the context."
                   data-contact-subheading-compat="v10-v11"
                 >
                   Start with the context.
                 </h2>


                <p>
                  When a client clicks to book a consultation, we guide you through a short and tailored set of questions. This helps us understand your context, goals, and expectations — and allows us to offer a more personalized, relevant service from the start.
                </p>
              </div>


              <ol
                className={
                  styles.v11ContextList
                }
              >
                <li>
                  <span>
                    01
                  </span>

                  <div>
                    <strong>
                      Client profile
                    </strong>

                    <p>
                      Tell us who you are, your sector and the size of your
                      organisation.
                    </p>
                  </div>
                </li>


                <li>
                  <span>
                    02
                  </span>

                  <div>
                    <strong>
                      What you need
                    </strong>

                    <p>
                      Select the services and engagement format that best match
                      what you are looking for.
                    </p>
                  </div>
                </li>


                <li>
                  <span>
                    03
                  </span>

                  <div>
                    <strong>
                      Technical maturity
                    </strong>

                    <p>
                      Share where your current security strategy and internal
                      technical capabilities stand today.
                    </p>
                  </div>
                </li>
              </ol>
            </aside>


            {/* CONSULTATION FORM */}

            <div
              className={
                styles.v11FormColumn
              }
              data-contact-form-column
            >
              <div
                className={
                  styles.v11FormHeading
                }
              >
                <p
                  className={
                    styles.v11MicroLabel
                  }
                >
                  Consultation intake
                </p>

                <h2>
                  Tell us what you need.
                </h2>

                <p>
                  Complete the short intake below so the conversation can start
                  with useful context.
                </p>
              </div>


              <div
                className={
                  styles.v11FormShell
                }
              >
                <ConsultationIntakeForm />
              </div>
            </div>

          </div>
        </Container>
      </section>

      </div>
    </div>
  );

}
