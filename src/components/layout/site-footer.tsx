import { BrandLogo } from "@/components/brand/brand-logo";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/content/site";
import styles from "./site-footer.module.css";

const footerColumns = [
  {
    title: "Company",
    links: [
      ["/company", "About"],
      ["/company/founder", "Founder"],
      ["/careers", "Careers"]
    ]
  },
  {
    title: "Security",
    links: [
      ["/services/web-application-pentesting", "Web Security"],
      ["/services/api-security", "API Security"],
      ["/services/infrastructure-security", "Infrastructure"],
      ["/services/security-training", "Security Training"]
    ]
  },
  {
    title: "Ecosystem",
    links: [
      ["/training", "Training"],
      ["/cr4ckout", "CR4CKOUT"],
      ["/activities", "Activities"],
      ["/events", "Events"]
    ]
  }
] as const;

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.intro}>
            <BrandLogo placement="footer" />
            <p className={styles.tagline}>
              Offensive security.
              <br />
              Cybersecurity education.
              <br />
              Community.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className={styles.columnTitle}>{column.title}</p>
              <div className={styles.links}>
                {column.links.map(([href, label]) => (
                  <Link href={href} key={href}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <p className={styles.columnTitle}>Connect</p>
            <div className={styles.links}>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <Link href="/contact">Contact</Link>
              <Link href="/insights">Insights</Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {new Date().getFullYear()} No Breach. {siteConfig.location}.
          </span>
          <div className={styles.bottomRight}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/legal">Legal</Link>
            <Link href="/security">Security</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
