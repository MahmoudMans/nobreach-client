import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import {
  createMetadata
} from "@/lib/seo";

import styles from "./security-training.module.css";


export const metadata =
  createMetadata({

    title:
      "Security Training | No Breach",

    description:
      "Organization-facing practical cybersecurity training for companies, universities, communities and teams, with public learner programs available separately through the Training Hub.",

    path:
      "/services/security-training"
  });


const audiences = [
  {
    title:
      "Companies",

    description:
      "Cybersecurity training for companies looking to develop practical security capability."
  },
  {
    title:
      "Universities",

    description:
      "Practical training for academic and technical learning environments."
  },
  {
    title:
      "Communities",

    description:
      "Technical training for cybersecurity communities and organized learning groups."
  },
  {
    title:
      "Teams",

    description:
      "Practical security development for technical teams working together."
  }
] as const;


const learningArchitecture = [
  {
    number:
      "01",

    title:
      "Context",

    description:
      "Start from the audience, its technical background and the security capability it wants to develop."
  },
  {
    number:
      "02",

    title:
      "Design",

    description:
      "Shape the training around the relevant subject, audience and practical learning context."
  },
  {
    number:
      "03",

    title:
      "Practice",

    description:
      "Use hands-on technical work to move beyond passive theory."
  },
  {
    number:
      "04",

    title:
      "Review",

    description:
      "Connect the practical work back to the security reasoning behind it."
  }
] as const;


function Arrow() {

  return (
    <span
      aria-hidden="true"
    >
      →
    </span>
  );

}


function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow:
    string;

  title:
    string;

  description?:
    string;
}) {

  return (
    <header
      className={
        styles.sectionHeading
      }
    >
      <p
        className={
          styles.sectionEyebrow
        }
      >
        {
          eyebrow
        }
      </p>


      <h2>
        {
          title
        }
      </h2>


      {
        description
          ? (
              <p
                className={
                  styles.sectionDescription
                }
              >
                {
                  description
                }
              </p>
            )
          : null
      }
    </header>
  );

}


export default function SecurityTrainingPage() {

  return (
    <div
      className={
        styles.page
      }
      data-security-training-design="v25"
      data-security-training-audit="v26"
    >
      {/* ================================================================
          ORGANIZATION-FACING INTRODUCTION + PUBLIC LEARNER ALTERNATIVE
         ================================================================ */}

      <section
        className={
          styles.hero
        }
        data-security-training-section="hero"
      >
        <Container>
          <div
            className={
              styles.frame
            }
            data-security-training-frame="hero"
          >
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
                    styles.heroEyebrow
                  }
                >
                  Security Training
                </p>


                <h1>
                  Security capability is built through practice.
                </h1>


                <p
                  className={
                    styles.heroLead
                  }
                >
                  Practical cybersecurity training for companies,
                  universities, communities and teams, designed to build
                  skills participants can connect to real technical work.
                </p>


                <div
                  className={
                    styles.heroActions
                  }
                >
                  <Link
                    href="/contact"
                    className={
                      styles.primaryAction
                    }
                  >
                    Discuss training

                    <Arrow />
                  </Link>


                  <a
                    href="#audiences"
                    className={
                      styles.secondaryAction
                    }
                  >
                    Explore the service

                    <span
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  </a>
                </div>
              </div>


              <aside
                className={
                  styles.hubAside
                }
                data-security-training-ui="training-hub-aside"
                aria-labelledby="training-hub-aside-title"
              >
                <p
                  className={
                    styles.hubEyebrow
                  }
                >
                  Individual programs
                </p>


                <h2
                  id="training-hub-aside-title"
                >
                  Training Hub
                </h2>


                <p>
                  Looking for a public learner program? Explore the Training
                  Hub rather than the organization-facing training service.
                </p>


                <Link
                  href="/training"
                  className={
                    styles.textAction
                  }
                >
                  Explore Training Hub

                  <Arrow />
                </Link>
              </aside>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          WHO IT IS FOR
         ================================================================ */}

      <section
        id="audiences"
        className={
          styles.section
        }
        data-security-training-section="audiences"
      >
        <Container>
          <div
            className={
              styles.frame
            }
            data-security-training-frame="audiences"
          >
            <SectionHeading
              eyebrow="01 · Who it is for"
              title="Four organizational contexts. One practical focus."
            />


            <div
              className={
                styles.audienceList
              }
              data-security-training-ui="audience-list"
            >
              {
                audiences.map(
                  (
                    audience
                  ) => (
                    <article
                      className={
                        styles.audienceRow
                      }
                      data-security-training-audience
                      key={
                        audience.title
                      }
                    >
                      <h3>
                        {
                          audience.title
                        }
                      </h3>


                      <p>
                        {
                          audience.description
                        }
                      </p>
                    </article>
                  )
                )
              }
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          TRAINING ARCHITECTURE
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.architectureSection}`
        }
        data-security-training-section="architecture"
      >
        <Container>
          <div
            className={
              styles.frame
            }
            data-security-training-frame="architecture"
          >
            <SectionHeading
              eyebrow="02 · Training architecture"
              title="From learning context to technical practice."
              description="Technical learning centered on doing, testing and understanding. Training focuses on current cybersecurity practice rather than generic awareness material, with skills participants can connect to real technical work."
            />


            {/*
              A concrete training-example block is intentionally omitted here.

              The audit requires an approved subject, intended audience and
              prerequisites, practical activity, intended learning objective,
              and source/status before that content can be published.
            */}


            <ol
              className={
                styles.stageGrid
              }
              data-security-training-ui="learning-system"
              aria-label="Training architecture"
            >
              {
                learningArchitecture.map(
                  (
                    stage
                  ) => (
                    <li
                      className={
                        styles.stage
                      }
                      data-security-training-step
                      key={
                        stage.number
                      }
                    >
                      <span
                        className={
                          styles.stageNumber
                        }
                        aria-hidden="true"
                      >
                        {
                          stage.number
                        }
                      </span>


                      <h3>
                        {
                          stage.title
                        }
                      </h3>


                      <p>
                        {
                          stage.description
                        }
                      </p>
                    </li>
                  )
                )
              }
            </ol>
          </div>
        </Container>
      </section>


      {/* ================================================================
          TRAINING DISCUSSION
         ================================================================ */}

      <section
        className={
          styles.cta
        }
        data-security-training-section="cta"
      >
        <Container>
          <div
            className={
              `${styles.frame} ${styles.ctaLayout}`
            }
            data-security-training-frame="cta"
          >
            <div>
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                Security training
              </p>


              <h2>
                Build practical security capability with your group.
              </h2>
            </div>


            <div
              className={
                styles.ctaCopy
              }
            >
              <p>
                Tell No Breach about the organization, audience and training
                context you want to discuss.
              </p>


              <p
                className={
                  styles.ctaSupport
                }
              >
                Include the audience&apos;s technical background and the
                security capability you want to develop.
              </p>


              <div
                className={
                  styles.ctaActions
                }
              >
                <Link
                  href="/contact"
                  className={
                    styles.primaryAction
                  }
                >
                  Start a conversation

                  <Arrow />
                </Link>


                <Link
                  href="/training"
                  className={
                    styles.textAction
                  }
                >
                  Explore Training Hub

                  <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );

}
