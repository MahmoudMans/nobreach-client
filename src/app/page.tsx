import Link from "next/link";
import {
  ArrowUpRight
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { AttackGraph } from "@/components/security/attack-graph";
import { CapabilityMap } from "@/components/security/capability-map";
import { ButtonLink } from "@/components/ui/button-link";
import { JsonLd } from "@/components/ui/json-ld";
import { SectionHeader } from "@/components/ui/section-header";
import { SignalStrip } from "@/components/ui/signal-strip";
import { activities } from "@/content/activities";
import { events } from "@/content/events";
import {
  companyTimeline,
  methodology,
  siteConfig
} from "@/content/site";
import { services } from "@/content/services";
import { trainingPrograms } from "@/content/training";
import pages from "@/styles/pages.module.css";
import styles from "./home.module.css";

export default function HomePage() {
  const featuredActivities =
    activities.slice(0, 3);

  const featuredEvent =
    events[0];

  return (
    <>
      <JsonLd
        data={{
          "@context":
            "https://schema.org",
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          foundingDate:
            siteConfig.founded,
          description:
            siteConfig.description,
          address: {
            "@type":
              "PostalAddress",
            addressLocality:
              "Tunis",
            addressCountry:
              "TN"
          },
          founder: {
            "@type": "Person",
            name:
              siteConfig.founder.name
          },
          sameAs: [
            siteConfig.linkedin
          ]
        }}
      />

      <section className={styles.hero}>
        <Container size="wide">
          <div
            className={
              styles.heroGrid
            }
          >
            <div>
              <p
                className={
                  styles.heroEyebrow
                }
              >
                Offensive Security /
                Tunisia
              </p>

              <h1
                className={
                  styles.heroTitle
                }
              >
                Offensive security
                built around
                <span
                  className={
                    styles.heroAccent
                  }
                >
                  real-world attack
                  thinking.
                </span>
              </h1>

              <p
                className={
                  styles.heroText
                }
              >
                No Breach helps
                organizations examine
                security weaknesses
                through an
                attacker-oriented
                perspective while
                developing practical
                cybersecurity knowledge
                through training and
                community initiatives.
              </p>

              <div
                className={
                  styles.heroActions
                }
              >
                <ButtonLink href="/services">
                  Explore security
                  services
                </ButtonLink>

                <ButtonLink
                  href="/company"
                  variant="secondary"
                >
                  Discover No Breach
                </ButtonLink>
              </div>

              <div
                className={
                  styles.heroMeta
                }
              >
                <span>
                  Founded{" "}
                  {
                    siteConfig.founded
                  }
                </span>

                <span>
                  {
                    siteConfig.location
                  }
                </span>

                <span>
                  Services · Education
                  · Community
                </span>
              </div>
            </div>

            <AttackGraph />
          </div>
        </Container>
      </section>

      <SignalStrip />

      <Container>
        <section
          className={styles.intro}
        >
          <p
            className={
              styles.introLabel
            }
          >
            01 / No Breach
          </p>

          <div>
            <h2
              className={
                styles.introTitle
              }
            >
              A cybersecurity
              organization built from
              offensive security.
            </h2>

            <p
              className={
                styles.introText
              }
            >
              No Breach brings
              together security
              assessment, hands-on
              education and
              cybersecurity community
              initiatives. The
              objective is simple:
              understand how systems
              fail, communicate
              security clearly and
              help people build
              stronger technical
              capability.
            </p>

            <div
              className={
                styles.companyFacts
              }
            >
              <div
                className={
                  styles.fact
                }
              >
                <p
                  className={
                    styles.factLabel
                  }
                >
                  Founded
                </p>
                <p
                  className={
                    styles.factValue
                  }
                >
                  2023
                </p>
              </div>

              <div
                className={
                  styles.fact
                }
              >
                <p
                  className={
                    styles.factLabel
                  }
                >
                  Based
                </p>
                <p
                  className={
                    styles.factValue
                  }
                >
                  Tunis, Tunisia
                </p>
              </div>

              <div
                className={
                  styles.fact
                }
              >
                <p
                  className={
                    styles.factLabel
                  }
                >
                  Focus
                </p>
                <p
                  className={
                    styles.factValue
                  }
                >
                  Offensive Security
                </p>
              </div>

              <div
                className={
                  styles.fact
                }
              >
                <p
                  className={
                    styles.factLabel
                  }
                >
                  Ecosystem
                </p>
                <p
                  className={
                    styles.factValue
                  }
                >
                  Security · Training
                  · Community
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <section
        className={styles.services}
      >
        <Container>
          <SectionHeader
            eyebrow="02 / Security services"
            title="Examine the system from the attacker’s side."
            description="Focused security services designed around attack surfaces, trust boundaries, application behavior and actionable reporting."
          />

          <div
            className={
              styles.serviceGrid
            }
          >
            {services.map(
              (service) => (
                <Link
                  className={
                    styles.serviceCard
                  }
                  href={`/services/${service.slug}`}
                  key={service.slug}
                >
                  <div
                    className={
                      styles.serviceTop
                    }
                  >
                    <span
                      className={
                        styles.serviceNumber
                      }
                    >
                      {service.number}
                    </span>

                    <ArrowUpRight
                      className={
                        styles.serviceArrow
                      }
                      size={19}
                      aria-hidden="true"
                    />
                  </div>

                  <h3
                    className={
                      styles.serviceTitle
                    }
                  >
                    {
                      service.shortTitle
                    }
                  </h3>

                  <p
                    className={
                      styles.serviceText
                    }
                  >
                    {service.summary}
                  </p>
                </Link>
              )
            )}
          </div>
        </Container>
      </section>

      <section
        className={
          styles.capabilities
        }
      >
        <Container size="wide">
          <div
            className={
              styles.capabilityGrid
            }
          >
            <div
              className={
                styles.capabilityCopy
              }
            >
              <p
                className={
                  styles.capabilityEyebrow
                }
              >
                03 / Capability
                architecture
              </p>

              <h2
                className={
                  styles.capabilityTitle
                }
              >
                Security, education
                and community are one
                connected system.
              </h2>

              <p
                className={
                  styles.capabilityText
                }
              >
                No Breach is presented
                as more than a list of
                consulting services.
                Security assessment,
                technical education and
                community activity
                reinforce the same
                practical cybersecurity
                identity.
              </p>

              <div
                className={
                  styles.capabilityList
                }
              >
                {[
                  "Offensive security services",
                  "Hands-on cybersecurity education",
                  "CR4CKOUT community initiative"
                ].map(
                  (item, index) => (
                    <div
                      className={
                        styles.capabilityItem
                      }
                      key={item}
                    >
                      <span
                        className={
                          styles.capabilityIndex
                        }
                      >
                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span
                        className={
                          styles.capabilityItemTitle
                        }
                      >
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            <CapabilityMap />
          </div>
        </Container>
      </section>

      <section
        className={
          styles.methodology
        }
      >
        <Container size="wide">
          <SectionHeader
            eyebrow="04 / Methodology"
            title="A disciplined path from scope to remediation."
            description="Security testing should be understandable, reproducible and useful to the people responsible for fixing what matters."
          />

          <div
            className={
              styles.methodGrid
            }
          >
            {methodology.map(
              (step) => (
                <div
                  className={
                    styles.methodItem
                  }
                  key={step.number}
                >
                  <p
                    className={
                      styles.methodNumber
                    }
                  >
                    {step.number}
                  </p>

                  <h3
                    className={
                      styles.methodTitle
                    }
                  >
                    {step.title}
                  </h3>

                  <p
                    className={
                      styles.methodText
                    }
                  >
                    {
                      step.description
                    }
                  </p>
                </div>
              )
            )}
          </div>
        </Container>
      </section>

      <section
        className={styles.founder}
      >
        <Container>
          <div
            className={
              styles.founderGrid
            }
          >
            <div
              className={
                styles.founderVisual
              }
              aria-hidden="true"
            >
              <span
                className={
                  styles.founderInitials
                }
              >
                NB
              </span>

              <span
                className={
                  styles.founderVisualLabel
                }
              >
                Founder / No Breach
              </span>
            </div>

            <div>
              <p
                className={
                  styles.founderEyebrow
                }
              >
                05 / Founder
              </p>

              <h2
                className={
                  styles.founderTitle
                }
              >
                Nouha Ben Brahim
              </h2>

              <p
                className={
                  styles.founderText
                }
              >
                Founder of No Breach
                and a cybersecurity
                professional focused
                on offensive security,
                web security, practical
                education and building
                stronger cybersecurity
                communities.
              </p>

              <div
                className={
                  styles.founderTags
                }
              >
                {[
                  "Offensive Security",
                  "Web Security",
                  "Bug Bounty",
                  "Training",
                  "AI Security"
                ].map((tag) => (
                  <span
                    className={
                      styles.founderTag
                    }
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className={
                  styles.founderActions
                }
              >
                <ButtonLink href="/company/founder">
                  Meet the founder
                </ButtonLink>

                <ButtonLink
                  href={
                    siteConfig
                      .founder
                      .linkedin
                  }
                  variant="secondary"
                >
                  LinkedIn
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        className={styles.training}
      >
        <Container>
          <div
            className={
              styles.trainingHead
            }
          >
            <div>
              <p
                className={
                  styles.trainingEyebrow
                }
              >
                06 / No Breach Training
                Hub
              </p>

              <h2
                className={
                  styles.trainingTitle
                }
              >
                Learn cybersecurity
                by doing
                cybersecurity.
              </h2>
            </div>

            <ButtonLink
              href="/training"
              variant="secondary"
            >
              Explore Training Hub
            </ButtonLink>
          </div>

          <div
            className={
              styles.programGrid
            }
          >
            {trainingPrograms.map(
              (program) => (
                <Link
                  className={
                    styles.programCard
                  }
                  href={`/training/${program.slug}`}
                  key={program.slug}
                >
                  <div
                    className={
                      styles.programMeta
                    }
                  >
                    <span>
                      {
                        program.category
                      }
                    </span>

                    <span>
                      {program.status}
                    </span>
                  </div>

                  <h3
                    className={
                      styles.programTitle
                    }
                  >
                    {program.title}
                  </h3>

                  <p
                    className={
                      styles.programText
                    }
                  >
                    {program.summary}
                  </p>

                  <div
                    className={
                      styles.programFooter
                    }
                  >
                    <span>
                      {program.level}
                    </span>

                    <ArrowUpRight
                      size={15}
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              )
            )}
          </div>
        </Container>
      </section>

      <section
        className={styles.crackout}
      >
        <Container>
          <p
            className={
              styles.crackoutEyebrow
            }
          >
            07 / Community
          </p>

          <h2
            className={
              styles.crackoutTitle
            }
          >
            CR4CKOUT
          </h2>

          <div
            className={
              styles.crackoutWords
            }
          >
            <span>HACK.</span>
            <span>LEARN.</span>
            <span>BREAK.</span>
            <span>BUILD.</span>
          </div>

          <p
            className={
              styles.crackoutText
            }
          >
            CR4CKOUT is a
            cybersecurity community
            initiative launched by No
            Breach, designed around
            hands-on learning,
            technical challenges and
            bringing cybersecurity
            practitioners and learners
            together.
          </p>

          <div
            className={
              styles.crackoutAction
            }
          >
            <ButtonLink href="/cr4ckout">
              Explore CR4CKOUT
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <SectionHeader
            eyebrow="08 / Activity"
            title="What No Breach is building, teaching and supporting."
            description="A public record of training, community activity, events and cybersecurity participation."
          />

          <div
            className={
              styles.activityLayout
            }
          >
            <div className={pages.grid3}>
              {featuredActivities.map(
                (activity) => (
                  <div
                    className={
                      pages.card
                    }
                    key={
                      activity.slug
                    }
                  >
                    <p
                      className={
                        pages.cardNumber
                      }
                    >
                      {
                        activity.year
                      }{" "}
                      /{" "}
                      {activity.category.toUpperCase()}
                    </p>

                    <h3
                      className={
                        pages.cardTitle
                      }
                    >
                      {
                        activity.title
                      }
                    </h3>

                    <p
                      className={
                        pages.cardDescription
                      }
                    >
                      {
                        activity.summary
                      }
                    </p>

                    {activity.location ? (
                      <p
                        className={
                          pages.cardMeta
                        }
                      >
                        {
                          activity.location
                        }
                      </p>
                    ) : null}
                  </div>
                )
              )}
            </div>

            {featuredEvent ? (
              <aside
                className={
                  styles.eventPanel
                }
              >
                <p
                  className={
                    styles.eventEyebrow
                  }
                >
                  Event archive
                </p>

                <p
                  className={
                    styles.eventYear
                  }
                >
                  {
                    featuredEvent.year
                  }{" "}
                  /{" "}
                  {featuredEvent.status.toUpperCase()}
                </p>

                <h3
                  className={
                    styles.eventTitle
                  }
                >
                  {
                    featuredEvent.title
                  }
                </h3>

                <p
                  className={
                    styles.eventText
                  }
                >
                  {
                    featuredEvent.summary
                  }
                </p>

                <div
                  className={
                    styles.eventAction
                  }
                >
                  <ButtonLink
                    href={`/events/${featuredEvent.slug}`}
                    variant="secondary"
                  >
                    View event
                  </ButtonLink>
                </div>
              </aside>
            ) : null}
          </div>

          <div
            style={{
              marginTop: "2rem"
            }}
          >
            <ButtonLink
              href="/activities"
              variant="secondary"
            >
              View all activities
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <SectionHeader
            eyebrow="09 / Timeline"
            title="From specialist practice to a broader security ecosystem."
          />

          <div
            className={
              pages.timeline
            }
          >
            {companyTimeline.map(
              (item) => (
                <div
                  className={
                    pages.timelineItem
                  }
                  key={`${item.year}-${item.title}`}
                >
                  <p
                    className={
                      pages.timelineYear
                    }
                  >
                    {item.year}
                  </p>

                  <div>
                    <h3
                      className={
                        pages.timelineTitle
                      }
                    >
                      {item.title}
                    </h3>

                    <p
                      className={
                        pages.timelineDescription
                      }
                    >
                      {
                        item.description
                      }
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <div className={pages.cta}>
            <p
              className={
                pages.ctaEyebrow
              }
            >
              Start a conversation
            </p>

            <h2
              className={
                pages.ctaTitle
              }
            >
              Security starts with
              understanding the attack
              surface.
            </h2>

            <p
              className={
                pages.ctaText
              }
            >
              Talk to No Breach about
              a security assessment,
              training, university
              collaboration or
              cybersecurity community
              initiative.
            </p>

            <div
              className={
                pages.ctaActions
              }
            >
              <ButtonLink href="/contact">
                Contact No Breach
              </ButtonLink>

              <ButtonLink
                href="/services"
                variant="secondary"
              >
                Explore services
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
