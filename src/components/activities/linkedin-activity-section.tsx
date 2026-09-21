import {
  Container
} from "@/components/layout/container";
import {
  linkedInPostResearchNote,
  linkedInPosts
} from "@/content/linkedin-posts";
import styles from "./linkedin-activity-section.module.css";

export function LinkedInActivitySection() {
  return (
    <section
      className={
        styles.section
      }
      aria-labelledby="linkedin-activity-title"
      data-linkedin-activity-section
    >
      <Container size="wide">
        <div
          className={
            styles.header
          }
        >
          <div>
            <p
              className={
                styles.eyebrow
              }
            >
              From LinkedIn
            </p>

            <h2
              className={
                styles.title
              }
              id="linkedin-activity-title"
            >
              Posts from the No Breach ecosystem.
            </h2>
          </div>

          <div
            className={
              styles.introduction
            }
          >
            <p>
              Public posts from No Breach, Nouha Ben Brahim and the No Breach Training Hub covering technical research, offensive-security thinking, training and community activity.
            </p>

            <p
              className={
                styles.researchNote
              }
            >
              {
                linkedInPostResearchNote
              }
            </p>
          </div>
        </div>

        <div
          className={
            styles.grid
          }
        >
          {linkedInPosts.map(
            (
              post,
              index
            ) => (
              <article
                className={
                  styles.card
                }
                data-linkedin-post
                key={
                  post.id
                }
              >
                <div
                  className={
                    styles.cardTop
                  }
                >
                  <span
                    className={
                      styles.index
                    }
                    aria-hidden="true"
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
                      styles.topic
                    }
                  >
                    {
                      post.topic
                    }
                  </span>
                </div>

                <div
                  className={
                    styles.source
                  }
                >
                  <span
                    className={
                      styles.linkedinMark
                    }
                    aria-hidden="true"
                  >
                    in
                  </span>

                  <span>
                    {
                      post.source
                    }
                  </span>
                </div>

                <h3
                  className={
                    styles.cardTitle
                  }
                >
                  {
                    post.title
                  }
                </h3>

                <p
                  className={
                    styles.summary
                  }
                >
                  {
                    post.summary
                  }
                </p>

                <a
                  className={
                    styles.link
                  }
                  href={
                    post.href
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View "${post.title}" on LinkedIn — opens in a new tab`}
                >
                  <span>
                    View LinkedIn post
                  </span>

                  <span
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              </article>
            )
          )}
        </div>
      </Container>
    </section>
  );
}
