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
    >
      <section
        className={
          styles.intro
        }
        aria-labelledby="contact-title"
      >
        <Container
          size="wide"
          className={
            styles.container
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
        </Container>
      </section>


      <section
        className={
          styles.channels
        }
        aria-label="Contact options"
      >
        <Container
          size="wide"
          className={
            styles.container
          }
        >
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
        </Container>
      </section>
    </div>
  );

}
