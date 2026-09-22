import type {
  Metadata,
} from "next";

import {
  Container,
} from "@/components/layout/container";

import {
  ConsultationIntakeForm,
} from "./consultation-intake-form";

import styles from "./contact.module.css";


export const metadata:
  Metadata = {

  title:
    "Contact | No Breach",

  description:
    "Prepare for a No Breach cybersecurity consultation through a short, tailored client-intake experience.",
};


const intakeStages = [
  {
    index:
      "01",

    title:
      "Client Profile",

    description:
      "Tell us what kind of organization you represent and the context you operate in.",
  },
  {
    index:
      "02",

    title:
      "What Are You Looking For?",

    description:
      "Identify the services and engagement format that best match what you need.",
  },
  {
    index:
      "03",

    title:
      "Technical Maturity",

    description:
      "Give us a clearer view of your current cybersecurity strategy and internal capabilities.",
  },
] as const;


export default function ContactPage() {

  return (
    <div
      className={
        styles.page
      }
      data-contact-design="authority-v10"
    >

      <section
        className={
          styles.hero
        }
        data-contact-section="hero"
      >
        <Container size="wide">

          <div
            className={
              styles.heroGrid
            }
          >

            <div
              className={
                styles.heroCopy
              }
            >

              <p
                className={
                  styles.eyebrow
                }
              >
                CONTACT / CONSULTATION
              </p>


              <h1>
                Contact
              </h1>


              <p
                className={
                  styles.heroStatement
                }
              >
                Getting to know our clients.
              </p>


              <p
                className={
                  styles.heroLead
                }
              >
                What we ask before the meeting — so we can deliver
                exactly what you need.
              </p>


              <a
                className={
                  styles.heroAction
                }
                href="#consultation-intake"
              >
                Prepare your consultation

                <span
                  aria-hidden="true"
                >
                  ↓
                </span>
              </a>

            </div>


            <aside
              className={
                styles.heroAside
              }
              aria-label="Consultation approach"
            >

              <div
                className={
                  styles.heroAsideHeader
                }
              >
                <span>
                  BEFORE THE MEETING
                </span>

                <span>
                  NB / 03
                </span>
              </div>


              <p>
                When a client clicks to book a consultation, we guide
                them through a short and tailored set of questions.
              </p>


              <div
                className={
                  styles.signalRail
                }
                aria-hidden="true"
              >
                <span />

                <span />

                <span />
              </div>


              <dl
                className={
                  styles.heroMeta
                }
              >
                <div>
                  <dt>
                    Input
                  </dt>

                  <dd>
                    Context
                  </dd>
                </div>

                <div>
                  <dt>
                    Focus
                  </dt>

                  <dd>
                    Goals
                  </dd>
                </div>

                <div>
                  <dt>
                    Outcome
                  </dt>

                  <dd>
                    Relevant service
                  </dd>
                </div>
              </dl>

            </aside>

          </div>

        </Container>
      </section>


      <section
        className={
          styles.context
        }
        data-contact-section="context"
      >
        <Container size="wide">

          <div
            className={
              styles.sectionRule
            }
          />


          <div
            className={
              styles.contextLayout
            }
          >

            <div
              className={
                styles.contextHeading
              }
            >

              <p
                className={
                  styles.eyebrow
                }
              >
                THE PURPOSE
              </p>


              <h2>
                A more personalized start.
              </h2>

            </div>


            <div
              className={
                styles.contextCopy
              }
            >

              <p
                className={
                  styles.largeCopy
                }
              >
                This helps us understand your context, goals, and
                expectations — and allows us to offer a more
                personalized, relevant service from the start.
              </p>

            </div>

          </div>

        </Container>
      </section>


      <section
        id="consultation-intake"
        className={
          styles.intake
        }
        data-contact-section="intake"
      >
        <Container size="wide">

          <header
            className={
              styles.intakeHeader
            }
          >

            <div>

              <p
                className={
                  styles.eyebrow
                }
              >
                CONSULTATION INTAKE
              </p>


              <h2>
                Getting to Know Our Clients
              </h2>

            </div>


            <p>
              A short set of questions before the meeting helps establish
              the context for a more relevant conversation.
            </p>

          </header>


          <div
            className={
              styles.intakeLayout
            }
          >

            <nav
              className={
                styles.stageDirectory
              }
              aria-label="Consultation intake sections"
            >
              <ol>
                {
                  intakeStages.map(
                    (
                      stage
                    ) => (
                      <li
                        key={
                          stage.index
                        }
                      >

                        <span>
                          {
                            stage.index
                          }
                        </span>


                        <div>
                          <strong>
                            {
                              stage.title
                            }
                          </strong>

                          <p>
                            {
                              stage.description
                            }
                          </p>
                        </div>

                      </li>
                    )
                  )
                }
              </ol>
            </nav>


            <div
              className={
                styles.formColumn
              }
            >
              <ConsultationIntakeForm />
            </div>

          </div>

        </Container>
      </section>


      <section
        className={
          styles.closing
        }
        data-contact-section="closing"
      >
        <Container size="wide">

          <div
            className={
              styles.closingLayout
            }
          >

            <p
              className={
                styles.eyebrow
              }
            >
              NO ONE-SIZE-FITS-ALL
            </p>


            <h2>
              Start with the context that matters.
            </h2>


            <p>
              The intake keeps the first conversation focused on your
              situation, your goals, and the kind of support you are
              looking for.
            </p>


            <a
              className={
                styles.closingAction
              }
              href="#consultation-intake"
            >
              Review the questions

              <span
                aria-hidden="true"
              >
                ↑
              </span>
            </a>

          </div>

        </Container>
      </section>

    </div>
  );
}
