// NB_ANNOUNCEMENT_BAR_V1
import { announcement } from "@/content/announcement";
import { AnnouncementDismiss } from "./announcement-dismiss";
import styles from "./announcement-bar.module.css";

export const ANNOUNCEMENT_STORAGE_KEY = "nb-announcement-dismissed";

// Runs before the bar is painted, so a visitor who closed this announcement
// never sees it flash back on the next page.
const hideIfDismissed = `try{if(localStorage.getItem(${JSON.stringify(
  ANNOUNCEMENT_STORAGE_KEY
)})===${JSON.stringify(
  announcement.id
)})document.documentElement.setAttribute("data-nb-announcement-dismissed","")}catch(e){}`;

export function AnnouncementBar() {
  if (!announcement.active) return null;

  const external = /^https?:\/\//.test(announcement.href);

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: hideIfDismissed }} />

      <aside
        className={styles.bar}
        aria-label="Announcement"
        data-announcement={announcement.id}
      >
        <div className={styles.inner}>
          <a
            className={styles.link}
            href={announcement.href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.label}>{announcement.label}</span>
            <span className={styles.message}>{announcement.message}</span>
            <span className={styles.messageShort}>
              {announcement.shortMessage}
            </span>
            {announcement.details.map((detail) => (
              <span className={styles.detail} key={detail}>
                {detail}
              </span>
            ))}
            <span className={styles.cta}>
              <span className={styles.ctaLong}>{announcement.cta}</span>
              <span className={styles.ctaShort}>{announcement.shortCta}</span>
              <span aria-hidden="true">{external ? "↗" : "→"}</span>
              {external ? (
                <span className={styles.visuallyHidden}> (opens in a new tab)</span>
              ) : null}
            </span>
          </a>

          <AnnouncementDismiss
            id={announcement.id}
            storageKey={ANNOUNCEMENT_STORAGE_KEY}
            className={styles.close}
          />
        </div>
      </aside>
    </>
  );
}
