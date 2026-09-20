import {
  Breadcrumbs
} from "@/components/navigation/breadcrumbs";
import {
  FounderPersonStructuredData
} from "@/components/founder/founder-person-structured-data";
import {
  Container
} from "@/components/layout/container";
import {
  ButtonLink
} from "@/components/ui/button-link";
import {
  founderProfile
} from "@/content/founder";
import {
  createMetadata
} from "@/lib/seo";
import styles from "./founder.module.css";

export const metadata =
  createMetadata({
    title:
      "Nouha Ben Brahim | Founder of No Breach",

    description:
      "Meet Nouha Ben Brahim, founder of No Breach: cybersecurity specialist, mentor, author and speaker focused on offensive security, security education and AI security.",

    path:
      "/company/founder"
  });

export default function FounderPage() {
  return (
    <div
      className={
        styles.page
      }
    >
      <FounderPersonStructuredData />

      <Breadcrumbs
        items={[
          {
            label:
              "Company",
            href:
              "/company"
          },
          {
            label:
              "Founder"
          }
        ]}
      />

      <section
        className={
          styles.hero
        }
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
                Founder / No Breach
              </p>

              <h1
                className={
                  styles.heroTitle
                }
              >
                {
                  founderProfile.name
                }
              </h1>

              <p
                className={
                  styles.heroRole
                }
              >
                {
                  founderProfile.title
                }
              </p>

              <p
                className={
                  styles.heroSummary
                }
              >
                {
                  founderProfile.summary
                }
              </p>

              <div
                className={
                  styles.descriptors
                }
              >
                {founderProfile
                  .descriptors
                  .map(
                    (
                      descriptor
                    ) => (
                      <span
                        className={
                          styles.descriptor
                        }
                        key={
                          descriptor
                        }
                      >
                        {
                          descriptor
                        }
                      </span>
                    )
                  )}
              </div>

              <div
                className={
                  styles.actions
                }
              >
                <ButtonLink href="/contact">
                  Contact No Breach
                </ButtonLink>

                <ButtonLink
                  href="/company"
                  variant="secondary"
                >
                  About the company
                </ButtonLink>
              </div>
            </div>

            <aside
              className={
                styles.identityCard
              }
              aria-label="Founder profile summary"
            >
              <div
                className={
                  styles.identityTop
                }
              >
                <p
                  className={
                    styles.identityLabel
                  }
                >
                  NB / Founder
                </p>

                <span
                  className={
                    styles.identityStatus
                  }
                >
                  Public profile
                </span>
              </div>

              <div
                className={
                  styles.initials
                }
                aria-hidden="true"
              >
                NB
              </div>

              <dl
                className={
                  styles.identityFooter
                }
              >
                <div
                  className={
                    styles.identityDatum
                  }
                >
                  <dt>
                    Based
                  </dt>

                  <dd>
                    {
                      founderProfile.location
                    }
                  </dd>
                </div>

                <div
                  className={
                    styles.identityDatum
                  }
                >
                  <dt>
                    Founded
                  </dt>

                  <dd>
                    No Breach · 2023
                  </dd>
                </div>

                <div
                  className={
                    styles.identityDatum
                  }
                >
                  <dt>
                    Security
                  </dt>

                  <dd>
                    Offensive security
                  </dd>
                </div>

                <div
                  className={
                    styles.identityDatum
                  }
                >
                  <dt>
                    Education
                  </dt>

                  <dd>
                    Mentorship & training
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </Container>
      </section>

      <section
        className={
          styles.section
        }
      >
        <Container>
          <div
            className={
              styles.sectionHeader
            }
          >
            <p
              className={
                styles.sectionEyebrow
              }
            >
              Profile
            </p>

            <h2
              className={
                styles.sectionTitle
              }
            >
              From programming to offensive security.
            </h2>
          </div>

          <div
            className={
              styles.overviewGrid
            }
          >
            <div
              className={
                styles.overviewText
              }
            >
              {founderProfile
                .overview
                .map(
                  (
                    paragraph
                  ) => (
                    <p
                      key={
                        paragraph
                      }
                    >
                      {
                        paragraph
                      }
                    </p>
                  )
                )}
            </div>

            <blockquote
              className={
                styles.quote
              }
            >
              <span
                className={
                  styles.quoteMark
                }
                aria-hidden="true"
              >
                “
              </span>

              <p
                className={
                  styles.quoteText
                }
              >
                {
                  founderProfile.quote
                }
              </p>

              <footer
                className={
                  styles.quoteContext
                }
              >
                {
                  founderProfile.quoteContext
                }
              </footer>
            </blockquote>
          </div>
        </Container>
      </section>

      <section
        className={
          styles.section
        }
      >
        <Container>
          <div
            className={
              styles.sectionHeader
            }
          >
            <p
              className={
                styles.sectionEyebrow
              }
            >
              Journey
            </p>

            <h2
              className={
                styles.sectionTitle
              }
            >
              A technical path built through experimentation.
            </h2>
          </div>

          <div
            className={
              styles.journey
            }
          >
            {founderProfile
              .journey
              .map(
                (
                  item
                ) => (
                  <article
                    className={
                      styles.journeyItem
                    }
                    key={
                      item.index
                    }
                  >
                    <span
                      className={
                        styles.journeyIndex
                      }
                    >
                      {
                        item.index
                      }
                    </span>

                    <p
                      className={
                        styles.journeyLabel
                      }
                    >
                      {
                        item.label
                      }
                    </p>

                    <div
                      className={
                        styles.journeyContent
                      }
                    >
                      <h3
                        className={
                          styles.journeyTitle
                        }
                      >
                        {
                          item.title
                        }
                      </h3>

                      <p
                        className={
                          styles.journeyDescription
                        }
                      >
                        {
                          item.description
                        }
                      </p>
                    </div>
                  </article>
                )
              )}
          </div>
        </Container>
      </section>

      <section
        className={
          styles.section
        }
      >
        <Container>
          <div
            className={
              styles.sectionHeader
            }
          >
            <p
              className={
                styles.sectionEyebrow
              }
            >
              Focus
            </p>

            <h2
              className={
                styles.sectionTitle
              }
            >
              Security, education and attacker thinking.
            </h2>
          </div>

          <div
            className={
              styles.focusGrid
            }
          >
            {founderProfile
              .focusAreas
              .map(
                (
                  focus
                ) => (
                  <article
                    className={
                      styles.focusCard
                    }
                    key={
                      focus.number
                    }
                  >
                    <p
                      className={
                        styles.cardNumber
                      }
                    >
                      {
                        focus.number
                      }
                    </p>

                    <h3
                      className={
                        styles.focusTitle
                      }
                    >
                      {
                        focus.title
                      }
                    </h3>

                    <p
                      className={
                        styles.focusDescription
                      }
                    >
                      {
                        focus.description
                      }
                    </p>
                  </article>
                )
              )}
          </div>
        </Container>
      </section>

      <section
        className={
          styles.section
        }
      >
        <Container>
          <div
            className={
              styles.sectionHeader
            }
          >
            <p
              className={
                styles.sectionEyebrow
              }
            >
              Method
            </p>

            <h2
              className={
                styles.sectionTitle
              }
            >
              Themes that shape her public security work.
            </h2>
          </div>

          <div
            className={
              styles.principleGrid
            }
          >
            {founderProfile
              .principles
              .map(
                (
                  principle
                ) => (
                  <article
                    className={
                      styles.principleCard
                    }
                    key={
                      principle.label
                    }
                  >
                    <p
                      className={
                        styles.cardEyebrow
                      }
                    >
                      Principle
                    </p>

                    <h3
                      className={
                        styles.principleTitle
                      }
                    >
                      {
                        principle.label
                      }
                    </h3>

                    <p
                      className={
                        styles.principleDescription
                      }
                    >
                      {
                        principle.description
                      }
                    </p>
                  </article>
                )
              )}
          </div>
        </Container>
      </section>

      <section
        className={
          styles.section
        }
      >
        <Container>
          <div
            className={
              styles.sectionHeader
            }
          >
            <p
              className={
                styles.sectionEyebrow
              }
            >
              Speaking & mentorship
            </p>

            <h2
              className={
                styles.sectionTitle
              }
            >
              Selected public engagements.
            </h2>
          </div>

          <div
            className={
              styles.engagements
            }
          >
            {founderProfile
              .publicEngagements
              .map(
                (
                  engagement
                ) => (
                  <article
                    className={
                      styles.engagement
                    }
                    key={
                      engagement.event
                    }
                  >
                    <div
                      className={
                        styles.engagementMeta
                      }
                    >
                      <span>
                        {
                          engagement.period
                        }
                      </span>

                      <span
                        className={
                          styles.engagementRole
                        }
                      >
                        {
                          engagement.role
                        }
                      </span>
                    </div>

                    <h3
                      className={
                        styles.engagementTitle
                      }
                    >
                      {
                        engagement.event
                      }
                    </h3>

                    <p
                      className={
                        styles.engagementOrganization
                      }
                    >
                      {
                        engagement.organization
                      }
                    </p>

                    <p
                      className={
                        styles.engagementDetail
                      }
                    >
                      {
                        engagement.detail
                      }
                    </p>
                  </article>
                )
              )}
          </div>
        </Container>
      </section>

      <section
        className={
          styles.section
        }
      >
        <Container>
          <div
            className={
              styles.sectionHeader
            }
          >
            <p
              className={
                styles.sectionEyebrow
              }
            >
              Writing & media
            </p>

            <h2
              className={
                styles.sectionTitle
              }
            >
              Publishing and conversations beyond the assessment.
            </h2>
          </div>

          <div
            className={
              styles.mediaGrid
            }
          >
            {founderProfile
              .writingAndMedia
              .map(
                (
                  item
                ) => (
                  <article
                    className={
                      styles.mediaCard
                    }
                    key={
                      item.title
                    }
                  >
                    <div
                      className={
                        styles.mediaMeta
                      }
                    >
                      <span
                        className={
                          styles.mediaType
                        }
                      >
                        {
                          item.type
                        }
                      </span>

                      <span>
                        {
                          item.date
                        }
                      </span>
                    </div>

                    <h3
                      className={
                        styles.mediaTitle
                      }
                    >
                      {
                        item.title
                      }
                    </h3>

                    <p
                      className={
                        styles.mediaDescription
                      }
                    >
                      {
                        item.description
                      }
                    </p>
                  </article>
                )
              )}
          </div>
        </Container>
      </section>

      <section
        className={
          styles.section
        }
      >
        <Container>
          <div
            className={
              styles.sectionHeader
            }
          >
            <p
              className={
                styles.sectionEyebrow
              }
            >
              Credentials
            </p>

            <h2
              className={
                styles.sectionTitle
              }
            >
              Publicly listed professional credentials.
            </h2>
          </div>

          <div
            className={
              styles.credentialList
            }
          >
            {founderProfile
              .credentials
              .map(
                (
                  credential
                ) => (
                  <article
                    className={
                      styles.credential
                    }
                    key={
                      credential.title
                    }
                  >
                    <h3
                      className={
                        styles.credentialTitle
                      }
                    >
                      {
                        credential.title
                      }
                    </h3>

                    <p
                      className={
                        styles.credentialIssuer
                      }
                    >
                      {
                        credential.issuer
                      }
                    </p>

                    <p
                      className={
                        styles.credentialDetail
                      }
                    >
                      {
                        credential.detail
                      }
                    </p>
                  </article>
                )
              )}
          </div>
        </Container>
      </section>

      <section
        className={
          styles.section
        }
      >
        <Container>
          <div
            className={
              styles.researchBox
            }
          >
            <p
              className={
                styles.researchLabel
              }
            >
              Profile accuracy
            </p>

            <div>
              <p
                className={
                  styles.researchText
                }
              >
                {
                  founderProfile.researchNote
                }
              </p>

              <div
                className={
                  styles.sourceList
                }
                aria-label="Public research sources"
              >
                {founderProfile
                  .publicRecord
                  .map(
                    (
                      source
                    ) => (
                      <span
                        className={
                          styles.source
                        }
                        key={
                          source
                        }
                      >
                        {
                          source
                        }
                      </span>
                    )
                  )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        className={
          styles.cta
        }
      >
        <Container>
          <div
            className={
              styles.ctaBox
            }
          >
            <p
              className={
                styles.sectionEyebrow
              }
            >
              No Breach
            </p>

            <h2
              className={
                styles.ctaTitle
              }
            >
              Offensive security strengthened through practice, education and community.
            </h2>

            <p
              className={
                styles.ctaText
              }
            >
              Explore the organization Nouha founded, its security services and the practical training ecosystem being built around No Breach.
            </p>

            <div
              className={
                styles.ctaActions
              }
            >
              <ButtonLink href="/services">
                Explore services
              </ButtonLink>

              <ButtonLink
                href="/training"
                variant="secondary"
              >
                Training Hub
              </ButtonLink>

              <ButtonLink
                href="/insights"
                variant="secondary"
              >
                Read insights
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
