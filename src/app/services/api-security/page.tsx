import Link from "next/link";

import {
  Breadcrumbs
} from "@/components/navigation/breadcrumbs";

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


const focusAreas = [
  {
    number:
      "01",

    code:
      "REST",

    title:
      "REST APIs",

    description:
      "Review exposed endpoints, resource behavior, methods and security boundaries."
  },
  {
    number:
      "02",

    code:
      "GQL",

    title:
      "GraphQL",

    description:
      "Review schema exposure, resolver behavior and authorization across operations."
  },
  {
    number:
      "03",

    code:
      "AUTHN",

    title:
      "Authentication",

    description:
      "Examine how API clients establish and maintain authenticated identity."
  },
  {
    number:
      "04",

    code:
      "AUTHZ",

    title:
      "Authorization",

    description:
      "Validate whether identities can perform only the actions they are intended to perform."
  },
  {
    number:
      "05",

    code:
      "BOLA",

    title:
      "BOLA / IDOR",

    description:
      "Test whether changing object references can cross intended access boundaries."
  },
  {
    number:
      "06",

    code:
      "OBJ",

    title:
      "Object-level access",

    description:
      "Compare access to records and resources across different identities."
  },
  {
    number:
      "07",

    code:
      "FUNC",

    title:
      "Function-level authorization",

    description:
      "Review whether privileged actions remain restricted to appropriate identities."
  },
  {
    number:
      "08",

    code:
      "TOKEN",

    title:
      "Token security",

    description:
      "Review token handling, lifecycle assumptions and the boundaries attached to authenticated sessions."
  },
  {
    number:
      "09",

    code:
      "RATE",

    title:
      "Rate limiting",

    description:
      "Review how sensitive API behavior responds to repeated or high-frequency requests."
  },
  {
    number:
      "10",

    code:
      "DATA",

    title:
      "Business logic & data exposure",

    description:
      "Assess workflow assumptions and whether responses reveal more information than intended."
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
      "Who is making the request, how identity is established and what trust is attached to it."
  },
  {
    number:
      "02",

    code:
      "OBJ",

    title:
      "Object boundary",

    description:
      "Which records, resources and tenant-owned objects that identity is allowed to access."
  },
  {
    number:
      "03",

    code:
      "FN",

    title:
      "Function boundary",

    description:
      "Which actions, workflows and privileged operations that identity is permitted to invoke."
  }
] as const;


const behavioralControls = [
  {
    number:
      "01",

    title:
      "Token security",

    description:
      "Inspect how API identity and session assumptions are carried between requests."
  },
  {
    number:
      "02",

    title:
      "Rate limiting",

    description:
      "Observe whether sensitive operations apply appropriate request-control boundaries."
  },
  {
    number:
      "03",

    title:
      "Business logic",

    description:
      "Follow complete workflows to identify security assumptions that endpoint-by-endpoint testing may miss."
  },
  {
    number:
      "04",

    title:
      "Data exposure",

    description:
      "Review whether API responses disclose fields or information outside the intended use of the request."
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


const deliverables = [
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
      ↗
    </span>
  );

}


function SectionHeading({
  number,
  eyebrow,
  title,
  description
}: {
  number:
    string;

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
        <span>
          {
            number
          }
        </span>

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
    >
      <Breadcrumbs
        items={[
          {
            label:
              "Services",

            href:
              "/services"
          },
          {
            label:
              "API Security"
          }
        ]}
      />


      {/* ================================================================
          HERO
         ================================================================ */}

      <section
        className={
          styles.hero
        }
        data-api-section="hero"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
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
                API security starts with
                <span>
                  trust boundaries.
                </span>
              </h1>

              <p
                className={
                  styles.heroLead
                }
              >
                Security testing focused on the identities, objects, functions and business rules exposed through application interfaces.
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
                    styles.textAction
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

            <div
              className={
                styles.trustMap
              }
              data-api-ui="trust-map"
              aria-label="API trust boundary model"
            >
              <div
                className={
                  styles.trustMapHeader
                }
              >
                <span>
                  Request path
                </span>

                <span>
                  NB / API
                </span>
              </div>

              <div
                className={
                  styles.trustNodes
                }
              >
                <div>
                  <span>
                    01
                  </span>

                  <strong>
                    CLIENT
                  </strong>
                </div>

                <i
                  aria-hidden="true"
                />

                <div>
                  <span>
                    02
                  </span>

                  <strong>
                    TOKEN
                  </strong>
                </div>

                <i
                  aria-hidden="true"
                />

                <div>
                  <span>
                    03
                  </span>

                  <strong>
                    API
                  </strong>
                </div>

                <i
                  aria-hidden="true"
                />

                <div>
                  <span>
                    04
                  </span>

                  <strong>
                    OBJECT
                  </strong>
                </div>

                <i
                  aria-hidden="true"
                />

                <div>
                  <span>
                    05
                  </span>

                  <strong>
                    FUNCTION
                  </strong>
                </div>
              </div>

              <div
                className={
                  styles.trustProtocols
                }
              >
                <div>
                  <span>
                    Interface
                  </span>

                  <strong>
                    REST APIs
                  </strong>
                </div>

                <div>
                  <span>
                    Interface
                  </span>

                  <strong>
                    GraphQL
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              styles.heroFooter
            }
          >
            <span>
              AUTHENTICATION
            </span>

            <i />

            <span>
              AUTHORIZATION
            </span>

            <i />

            <span>
              BUSINESS LOGIC
            </span>

            <i />

            <span>
              DATA EXPOSURE
            </span>
          </div>
        </Container>
      </section>


      {/* ================================================================
          01 — ATTACK SURFACE
         ================================================================ */}

      <section
        id="attack-surface"
        className={
          styles.section
        }
        data-api-section="attack-surface"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="01"
            eyebrow="Attack surface"
            title="Test the interface as a system, not a list of endpoints."
            description="The assessment follows how identities, requests, resources and application workflows interact across the API."
          />

          <div
            className={
              styles.surfaceTop
            }
          >
            <div>
              <span>
                Protocol
              </span>

              <strong>
                REST APIs
              </strong>

              <p>
                Resources, methods, identities and behavior exposed through REST-style interfaces.
              </p>
            </div>

            <div>
              <span>
                Protocol
              </span>

              <strong>
                GraphQL
              </strong>

              <p>
                Schema, operations, resolvers and the access boundaries applied to returned data.
              </p>
            </div>
          </div>

          <div
            className={
              styles.focusIndex
            }
            data-api-ui="focus-index"
          >
            {
              focusAreas.map(
                (
                  focus
                ) => (
                  <div
                    className={
                      styles.focusRow
                    }
                    data-api-focus
                    key={
                      focus.number
                    }
                  >
                    <span
                      className={
                        styles.focusNumber
                      }
                    >
                      {
                        focus.number
                      }
                    </span>

                    <span
                      className={
                        styles.focusCode
                      }
                    >
                      {
                        focus.code
                      }
                    </span>

                    <h3>
                      {
                        focus.title
                      }
                    </h3>

                    <p>
                      {
                        focus.description
                      }
                    </p>
                  </div>
                )
              )
            }
          </div>
        </Container>
      </section>


      {/* ================================================================
          02 — AUTHORIZATION MODEL
         ================================================================ */}

      <section
        className={
          `${styles.section} ${styles.sectionAlt}`
        }
        data-api-section="authorization"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="02"
            eyebrow="Authorization model"
            title="Identity is only the first boundary."
            description="Strong API security depends on consistently connecting identity to the objects and functions that identity is actually allowed to use."
          />

          <div
            className={
              styles.boundarySystem
            }
            data-api-ui="boundary-system"
          >
            {
              boundaries.map(
                (
                  boundary,
                  index
                ) => (
                  <div
                    className={
                      styles.boundaryColumn
                    }
                    data-api-boundary
                    key={
                      boundary.code
                    }
                  >
                    <div
                      className={
                        styles.boundaryTop
                      }
                    >
                      <span>
                        {
                          boundary.number
                        }
                      </span>

                      <strong>
                        {
                          boundary.code
                        }
                      </strong>
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
                      index <
                      boundaries.length - 1
                        ? (
                          <span
                            className={
                              styles.boundaryArrow
                            }
                            aria-hidden="true"
                          >
                            →
                          </span>
                        )
                        : null
                    }
                  </div>
                )
              )
            }
          </div>

          <div
            className={
              styles.behaviorLayout
            }
          >
            <div
              className={
                styles.behaviorIntro
              }
            >
              <p>
                Behavior beyond access control
              </p>

              <h3>
                Security boundaries also live inside application behavior.
              </h3>
            </div>

            <div
              className={
                styles.behaviorIndex
              }
            >
              {
                behavioralControls.map(
                  (
                    control
                  ) => (
                    <div
                      className={
                        styles.behaviorRow
                      }
                      key={
                        control.number
                      }
                    >
                      <span>
                        {
                          control.number
                        }
                      </span>

                      <strong>
                        {
                          control.title
                        }
                      </strong>

                      <p>
                        {
                          control.description
                        }
                      </p>
                    </div>
                  )
                )
              }
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          03 — VALIDATION & REPORTING
         ================================================================ */}

      <section
        className={
          styles.section
        }
        data-api-section="validation-reporting"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <SectionHeading
            number="03"
            eyebrow="Validation & reporting"
            title="From initial context to actionable reporting."
            description="The engagement moves from understanding intended API behavior toward validating meaningful weaknesses and documenting what engineering teams need to correct."
          />

          <ol
            className={
              styles.workflow
            }
            data-api-ui="workflow"
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
                    key={
                      step.number
                    }
                  >
                    <span>
                      {
                        step.number
                      }
                    </span>

                    <i
                      aria-hidden="true"
                    />

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
            <div
              className={
                styles.deliverables
              }
            >
              <p
                className={
                  styles.subsectionLabel
                }
              >
                Assessment output
              </p>

              <div
                className={
                  styles.deliverableIndex
                }
              >
                {
                  deliverables.map(
                    (
                      deliverable
                    ) => (
                      <div
                        className={
                          styles.deliverableRow
                        }
                        key={
                          deliverable.code
                        }
                      >
                        <span>
                          {
                            deliverable.code
                          }
                        </span>

                        <div>
                          <h3>
                            {
                              deliverable.title
                            }
                          </h3>

                          <p>
                            {
                              deliverable.description
                            }
                          </p>
                        </div>
                      </div>
                    )
                  )
                }
              </div>
            </div>

            <div
              className={
                styles.faq
              }
            >
              <p
                className={
                  styles.subsectionLabel
                }
              >
                Common questions
              </p>

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
                        key={
                          faq.question
                        }
                      >
                        <summary>
                          <span>
                            {
                              String(
                                index + 1
                              ).padStart(
                                2,
                                "0"
                              )
                            }
                          </span>

                          <strong>
                            {
                              faq.question
                            }
                          </strong>

                          <i
                            aria-hidden="true"
                          >
                            +
                          </i>
                        </summary>

                        <p>
                          {
                            faq.answer
                          }
                        </p>
                      </details>
                    )
                  )
                }
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* ================================================================
          CTA
         ================================================================ */}

      <section
        className={
          styles.cta
        }
        data-api-section="cta"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <div
            className={
              styles.ctaRule
            }
          />

          <div
            className={
              styles.ctaLayout
            }
          >
            <div>
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                <span>
                  API
                </span>

                Assessment
              </p>

              <h2>
                Know what every identity can really do.
              </h2>
            </div>

            <div
              className={
                styles.ctaCopy
              }
            >
              <p>
                Discuss your API architecture, assessment scope and the access boundaries you need to validate.
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
                  Discuss an assessment

                  <Arrow />
                </Link>

                <Link
                  href="/services"
                  className={
                    styles.textAction
                  }
                >
                  All services

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
