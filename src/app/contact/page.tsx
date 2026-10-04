import {
  Container
} from "@/components/layout/container";

import styles from "./contact.module.css";


const emailAddress =
  "nhbenbrahim@gmail.com";


const linkedInUrl =
  [
    "https:",
    "",
    "www.linkedin.com",
    "company",
    "no-breach"
  ].join(
    "/"
  );


export default function ContactPage() {

  return (
    <div
      className={
        styles.page
      }
      data-contact-design="v12-simple"
      data-contact-redesign="v101"
    >
      <section
        className={
          styles.contactStage
        }
        aria-labelledby="contact-title"
        data-contact-section="direct-contact"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
          <div
            className={
              styles.contactGrid
            }
          >
            <div
              className={
                styles.intro
              }
            >
              <div
                className={
                  styles.introInner
                }
              >
                <p
                  className={
                    styles.eyebrow
                  }
                >
                  Contact
                </p>


                <h1
                  id="contact-title"
                >
                  Get in touch.
                </h1>


                <p
                  className={
                    styles.lead
                  }
                >
                  You can contact us directly by email or connect with us on
                  LinkedIn.
                </p>
              </div>
            </div>


            <div
              className={
                styles.channels
              }
              aria-label="Contact options"
            >
              <p
                className={
                  styles.directoryLabel
                }
              >
                Direct contact
              </p>


              <div
                className={
                  styles.channelList
                }
              >
                <a
                  className={
                    styles.channel
                  }
                  href={
                    `mailto:${emailAddress}`
                  }
                  data-contact-channel="email"
                  data-contact-priority="primary"
                >
                  <span
                    className={
                      styles.channelLabel
                    }
                  >
                    Email
                  </span>


                  <span
                    className={
                      styles.channelValue
                    }
                  >
                    {emailAddress}
                  </span>


                  <span
                    className={
                      styles.channelAction
                    }
                    aria-hidden="true"
                  >
                    Write to us
                    <span>
                      ↗
                    </span>
                  </span>
                </a>


                <a
                  className={
                    styles.channel
                  }
                  href={
                    linkedInUrl
                  }
                  target="_blank"
                  rel="noreferrer"
                  data-contact-channel="linkedin"
                  data-contact-priority="secondary"
                >
                  <span
                    className={
                      styles.channelLabel
                    }
                  >
                    LinkedIn
                  </span>


                  <span
                    className={
                      styles.channelValue
                    }
                  >
                    No Breach
                  </span>


                  <span
                    className={
                      styles.channelAction
                    }
                    aria-hidden="true"
                  >
                    Connect
                    <span>
                      ↗
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );

}
