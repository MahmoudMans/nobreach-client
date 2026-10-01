import Link from "next/link";

import {
  Container
} from "@/components/layout/container";

import {
  createMetadata
} from "@/lib/seo";

import styles from "./api-security.module.css";


export const metadata =
  createMetadata({

    title:
      "API Security | No Breach",

    description:
      "API security assessment focused on REST and GraphQL interfaces, authentication, authorization, object and function access, token security, business logic and data exposure.",

    path:
      "/services/api-security"
  });


const interfaces = [
  {
    title:
      "REST APIs",

    description:
      "Review exposed endpoints, resources, methods, identities and behavior across REST-style interfaces."
  },
  {
    title:
      "GraphQL",

    description:
      "Review schema exposure, operations, resolver behavior and authorization boundaries, including access to returned data."
  }
] as const;


const boundaries = [
  {
    number:
      "01",

    code:
      "ID",

    title:
      "Identity boundary",

    description:
      "Examine who is making the request, how API clients establish and maintain authenticated identity, and what trust is attached to that identity.",

    supplement:
      null
  },
  {
    number:
      "02",

    code:
      "OBJ",

    title:
      "Object boundary",

    description:
      "Compare access to records, resources and tenant-owned objects across different identities. Test whether changing object references can cross intended access boundaries.",

    supplement:
      "Object-level access · BOLA / IDOR"
  },
  {
    number:
      "03",

    code:
      "FN",

    title:
      "Function boundary",

    description:
      "Review whether actions, workflows and privileged operations remain restricted to the identities permitted to invoke them.",

    supplement:
      null
  }
] as const;


const additionalAreas = [
  {
    title:
      "Token security",

    description:
      "Review token handling, lifecycle assumptions and the identity and session boundaries carried between requests."
  },
  {
    title:
      "Rate limiting",

    description:
      "Review how sensitive API operations respond to repeated or high-frequency requests and the request-control boundaries applied to them."
  },
  {
    title:
      "Business logic",

    description:
      "Follow complete workflows to identify security assumptions that endpoint-by-endpoint testing may miss."
  },
  {
    title:
      "Data exposure",

    description:
      "Review whether responses disclose fields or information beyond the intended use of the request."
  }
] as const;


const workflow = [
  {
    number:
      "01",

    title:
      "Context",

    description:
      "Understand the API architecture, intended identities, trust relationships and assessment boundaries."
  },
  {
    number:
      "02",

    title:
      "Surface map",

    description:
      "Map reachable REST or GraphQL functionality, resources and important operations."
  },
  {
    number:
      "03",

    title:
      "Identity matrix",

    description:
      "Compare expected access across anonymous, standard and privileged application identities where supplied for the assessment."
  },
  {
    number:
      "04",

    title:
      "Validation",

    description:
      "Safely validate meaningful authentication, authorization and business-logic weaknesses."
  },
  {
    number:
      "05",

    title:
      "Reporting",

    description:
      "Translate validated behavior into reproducible evidence and practical remediation guidance."
  }
] as const;


const outputs = [
  {
    code:
      "MAP",

    title:
      "API surface map",

    description:
      "Documented interface and resource context relevant to the assessment."
  },
  {
    code:
      "IAM",

    title:
      "Access-control evidence",

    description:
      "Identity, object and function authorization observations with reproducible context."
  },
  {
    code:
      "FND",

    title:
      "Validated findings",

    description:
      "Security findings supported by clear technical evidence rather than scanner output alone."
  },
  {
    code:
      "FIX",

    title:
      "Remediation guidance",

    description:
      "Practical recommendations and context for correcting the underlying security boundary."
  }
] as const;


/*
 * Preserve the current verified answers rather than silently replacing them
 * with screenshot-only editorial drafts.
 */
const faqs = [
  {
    question:
      "Does API testing include authorization?",

    answer:
      "Yes. Authorization is a core focus of the assessment, including object-level access, function-level authorization and BOLA / IDOR behavior."
  },
  {
    question:
      "Can the assessment cover REST and GraphQL?",

    answer:
      "The API security scope can include REST APIs and GraphQL interfaces when they are part of the authorized assessment scope."
  },
  {
    question:
      "Does the assessment look beyond authentication?",

    answer:
      "Yes. Testing also considers authorization boundaries, token security, rate limiting, business logic and data exposure."
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

  description:
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


      <p
        className={
          styles.sectionDescription
        }
      >
        {
          description
        }
      </p>
    </header>
  );

}


export default function ApiSecurityPage() {

  return (
    <div
      className={
        styles.page
      }
      data-api-security-design="v23"
      data-api-security-audit="v24"
    >
      {/* ================================================================
          INTRODUCTION
         ================================================================ */}

      <section
        className={
          styles.hero
        }
        data-api-section="hero"
      >
        <Container>
          <div
            className={
              styles.frame
            }
            data-api-frame="hero"
          >
            <div
              className={
                styles.heroTopline
              }
            >
              <span>
                No Breach / API Security
              </span>

              <span>
                Trust Boundary Assessment
              </span>
            </div>


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
                  REST · GraphQL · Authorization
                </p>


                <h1>
                  API security starts with trust boundaries.
                </h1>


                <p
                  className={
                    styles.heroLead
                  }
                >
                  Security testing focused on the identities, objects,
                  functions and business rules exposed through application
                  interfaces.
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
                    Discuss an API assessment

                    <Arrow />
                  </Link>


                  <a
                    href="#attack-surface"
                    className={
                      styles.secondaryAction
                    }
                  >
                    Explore the assessment

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
                  styles.overview
                }
                data-api-ui="assessment-overview"
                aria-labelledby="api-assessment-overview"
              >
                <p
                  className={
                    styles.overviewLabel
                  }
                >
                  Assessment overview
                </p>


                <h2
                  id="api-assessment-overview"
                  className={
                    styles.overviewTitle
                  }
                >
                  Interfaces, boundaries and evidence at a glance.
                </h2>


                <dl
                  className={
                    styles.overviewList
                  }
                >
                  <div>
                    <dt>
                      Interfaces
                    </dt>

                    <dd>
                      REST APIs and GraphQL
                    </dd>
                  </div>


                  <div>
                    <dt>
                      Focus
                    </dt>

                    <dd>
                      Identity, object and function boundaries
                    </dd>
                  </div>


                  <div>
                    <dt>
                      Outputs
                    </dt>

                    <dd>
                      Technical evidence and remediation guidance
                    </dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          ATTACK SURFACE
         ================================================================ */}

      <section
        id="attack-surface"
        className={
          styles.section
        }
        data-api-section="attack-surface"
      >
        <Container>
          <div
            className={
              styles.frame
            }
            data-api-frame="attack-surface"
          >
            <SectionHeading
              eyebrow="01 / Attack surface"
              title="Test the interface as a system, not a list of endpoints."
              description="The assessment follows how identities, requests, resources and application workflows interact across the API."
            />


            <div
              className={
                styles.subgroupHeading
              }
            >
              <h3>
                Interfaces assessed
              </h3>
            </div>


            <div
              className={
                styles.interfaceGrid
              }
              data-api-ui="interfaces"
            >
              {
                interfaces.map(
                  (
                    item
                  ) => (
                    <article
                      className={
                        styles.interfacePanel
                      }
                      data-api-interface
                      key={
                        item.title
                      }
                    >
                      <h3>
                        {
                          item.title
                        }
                      </h3>


                      <p>
                        {
                          item.description
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
          AUTHORIZATION MODEL
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.authorization}`
        }
        data-api-section="authorization"
      >
        <Container>
          <div
            className={
              styles.frame
            }
            data-api-frame="authorization"
          >
            <SectionHeading
              eyebrow="02 / Authorization model"
              title="Identity is only the first boundary."
              description="The assessment connects authenticated identity with the objects and functions that identity is permitted to access."
            />


            <div
              className={
                styles.boundaryGrid
              }
              data-api-ui="boundary-system"
            >
              {
                boundaries.map(
                  (
                    boundary
                  ) => (
                    <article
                      className={
                        styles.boundary
                      }
                      data-api-boundary
                      key={
                        boundary.code
                      }
                    >
                      <div
                        className={
                          styles.boundaryMeta
                        }
                      >
                        <span>
                          {
                            boundary.number
                          }
                        </span>

                        <span>
                          {
                            boundary.code
                          }
                        </span>
                      </div>


                      <h3>
                        {
                          boundary.title
                        }
                      </h3>


                      <p>
                        {
                          boundary.description
                        }
                      </p>


                      {
                        boundary.supplement
                          ? (
                              <p
                                className={
                                  styles.boundarySupplement
                                }
                              >
                                {
                                  boundary.supplement
                                }
                              </p>
                            )
                          : null
                      }
                    </article>
                  )
                )
              }
            </div>


            <div
              className={
                styles.additional
              }
            >
              <div
                className={
                  styles.subgroupHeading
                }
              >
                <h3>
                  Additional assessment areas
                </h3>
              </div>


              <div
                className={
                  styles.additionalList
                }
              >
                {
                  additionalAreas.map(
                    (
                      item
                    ) => (
                      <article
                        className={
                          styles.additionalRow
                        }
                        data-api-additional
                        key={
                          item.title
                        }
                      >
                        <h4>
                          {
                            item.title
                          }
                        </h4>


                        <p>
                          {
                            item.description
                          }
                        </p>
                      </article>
                    )
                  )
                }
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          VALIDATION & REPORTING
         ================================================================ */}

      <section
        className={
          styles.section
        }
        data-api-section="validation-reporting"
      >
        <Container>
          <div
            className={
              styles.frame
            }
            data-api-frame="validation-reporting"
          >
            <SectionHeading
              eyebrow="03 / Validation & reporting"
              title="From initial context to actionable reporting."
              description="The engagement moves from understanding intended API behavior toward validating meaningful weaknesses and documenting what engineering teams need to correct."
            />


            <ol
              className={
                styles.workflow
              }
              data-api-ui="workflow"
              aria-label="API security assessment workflow"
            >
              {
                workflow.map(
                  (
                    step
                  ) => (
                    <li
                      className={
                        styles.workflowStep
                      }
                      data-api-workflow-step
                      key={
                        step.number
                      }
                    >
                      <div
                        className={
                          styles.workflowMarker
                        }
                        aria-hidden="true"
                      >
                        <span>
                          {
                            step.number
                          }
                        </span>

                        <i />
                      </div>


                      <h3>
                        {
                          step.title
                        }
                      </h3>


                      <p>
                        {
                          step.description
                        }
                      </p>
                    </li>
                  )
                )
              }
            </ol>


            <div
              className={
                styles.reportingGrid
              }
            >
              <section
                className={
                  styles.outputs
                }
                aria-labelledby="api-output-heading"
              >
                <div
                  className={
                    styles.subgroupHeading
                  }
                >
                  <h3
                    id="api-output-heading"
                  >
                    Assessment output
                  </h3>
                </div>


                <div
                  className={
                    styles.outputList
                  }
                >
                  {
                    outputs.map(
                      (
                        output
                      ) => (
                        <article
                          className={
                            styles.outputRow
                          }
                          data-api-output
                          key={
                            output.code
                          }
                        >
                          <span>
                            {
                              output.code
                            }
                          </span>


                          <div>
                            <h4>
                              {
                                output.title
                              }
                            </h4>

                            <p>
                              {
                                output.description
                              }
                            </p>
                          </div>
                        </article>
                      )
                    )
                  }
                </div>
              </section>


              <section
                className={
                  styles.questions
                }
                aria-labelledby="api-faq-heading"
              >
                <div
                  className={
                    styles.subgroupHeading
                  }
                >
                  <h3
                    id="api-faq-heading"
                  >
                    Common questions
                  </h3>
                </div>


                <div
                  className={
                    styles.faqList
                  }
                >
                  {
                    faqs.map(
                      (
                        faq,
                        index
                      ) => (
                        <details
                          className={
                            styles.faqItem
                          }
                          data-api-faq
                          key={
                            faq.question
                          }
                        >
                          <summary>
                            <span
                              className={
                                styles.faqTrigger
                              }
                            >
                              <span
                                className={
                                  styles.faqNumber
                                }
                                aria-hidden="true"
                              >
                                {
                                  String(
                                    index + 1
                                  ).padStart(
                                    2,
                                    "0"
                                  )
                                }
                              </span>


                              <span
                                className={
                                  styles.faqQuestion
                                }
                              >
                                {
                                  faq.question
                                }
                              </span>


                              <span
                                className={
                                  styles.faqIndicator
                                }
                                aria-hidden="true"
                              />
                            </span>
                          </summary>


                          <div
                            className={
                              styles.faqAnswer
                            }
                          >
                            <p>
                              {
                                faq.answer
                              }
                            </p>
                          </div>
                        </details>
                      )
                    )
                  }
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          ASSESSMENT DISCUSSION
         ================================================================ */}

      <section
        className={
          styles.cta
        }
        data-api-section="cta"
      >
        <Container>
          <div
            className={
              `${styles.frame} ${styles.ctaGrid}`
            }
            data-api-frame="cta"
          >
            <div>
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                API assessment
              </p>


              <h2>
                Understand your API&apos;s access boundaries.
              </h2>
            </div>


            <div
              className={
                styles.ctaBody
              }
            >
              <p>
                Discuss your API architecture, assessment scope and the access
                boundaries you need to validate.
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
                  Discuss an API assessment

                  <Arrow />
                </Link>


                <Link
                  href="/services"
                  className={
                    styles.textAction
                  }
                >
                  View all services

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
