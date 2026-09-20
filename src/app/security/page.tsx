import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";

export const metadata =
  createMetadata({
    title:
      "Website Security",

    description:
      "Security and responsible-contact information for the No Breach public website.",

    path:
      "/security"
  });

const principles = [
  {
    number:
      "01",

    title:
      "Authorization remains mandatory",

    description:
      "Nothing published on this website grants permission to test, scan, probe, exploit or otherwise interact with No Breach systems outside their normal intended use."
  },
  {
    number:
      "02",

    title:
      "Sensitive information stays out of public forms",

    description:
      "Passwords, tokens, private keys, customer information and confidential infrastructure details should not be submitted through public website interfaces."
  },
  {
    number:
      "03",

    title:
      "Suspected website issues can be reported responsibly",

    description:
      "If you believe the public No Breach website exposes a security issue, use the official contact channel and provide only the information necessary to explain the concern."
  }
];

export default function SecurityPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          {
            label:
              "Security"
          }
        ]}
      />

      <PageHero
        eyebrow="Website security"
        title="Security starts with clear boundaries."
        description="Information about responsible contact, public website security expectations and the limits of authorization."
        meta={[
          "Responsible Contact",
          "Security Boundaries",
          "No Public Testing Authorization"
        ]}
        actions={
          <ButtonLink href="/contact">
            Contact No Breach
          </ButtonLink>
        }
      />

      <section
        className={
          pages.section
        }
      >
        <Container>
          <SectionHeader
            eyebrow="Principles"
            title="Clear security expectations for the public website."
          />

          <div
            className={
              pages.grid3
            }
          >
            {principles.map(
              (
                principle
              ) => (
                <article
                  className={
                    pages.card
                  }
                  key={
                    principle.number
                  }
                >
                  <p
                    className={
                      pages.cardNumber
                    }
                  >
                    {
                      principle.number
                    }
                  </p>

                  <h2
                    className={
                      pages.cardTitle
                    }
                  >
                    {
                      principle.title
                    }
                  </h2>

                  <p
                    className={
                      pages.cardDescription
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
          pages.section
        }
      >
        <Container>
          <div
            className={
              pages.split
            }
          >
            <p
              className={
                pages.sideLabel
              }
            >
              Responsible contact
            </p>

            <div
              className={
                pages.prose
              }
            >
              <p>
                No Breach does not
                publish a public bug
                bounty program through
                this website.
              </p>

              <p>
                The existence of a
                security.txt file, a
                security page or a
                public contact channel
                does not constitute
                authorization to scan,
                probe or exploit No
                Breach systems.
              </p>

              <p>
                If you believe you have
                encountered a security
                issue while using the
                public website
                normally, contact No
                Breach through its
                official channel
                before disclosing
                sensitive technical
                information publicly.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        className={
          pages.section
        }
      >
        <Container>
          <div
            className={
              pages.split
            }
          >
            <p
              className={
                pages.sideLabel
              }
            >
              Public security.txt
            </p>

            <div>
              <p
                className={
                  pages.largeCopy
                }
              >
                Machine-readable
                security contact
                information is
                available under the
                standard well-known
                path.
              </p>

              <div
                className={
                  pages.ctaActions
                }
                style={{
                  marginTop:
                    "2rem"
                }}
              >
                <ButtonLink
                  href="/.well-known/security.txt"
                  variant="secondary"
                >
                  View security.txt
                </ButtonLink>

                <ButtonLink
                  href={
                    siteConfig.linkedin
                  }
                  variant="secondary"
                >
                  Official LinkedIn
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        className={
          pages.section
        }
      >
        <Container>
          <div
            className={
              pages.cta
            }
          >
            <p
              className={
                pages.ctaEyebrow
              }
            >
              Security contact
            </p>

            <h2
              className={
                pages.ctaTitle
              }
            >
              Report concerns without
              sending credentials or
              confidential data.
            </h2>

            <p
              className={
                pages.ctaText
              }
            >
              Use the public contact
              channel for an initial
              message. Sensitive
              technical material
              should only be exchanged
              after an appropriate
              communication path is
              established.
            </p>

            <div
              className={
                pages.ctaActions
              }
            >
              <ButtonLink href="/contact">
                Contact No Breach
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
