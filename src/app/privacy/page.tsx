import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";

export const metadata = createMetadata({
  title: "Privacy",
  description: "Privacy information for the No Breach website.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Minimal data by default."
        description="The initial No Breach frontend is designed to operate without marketing trackers or a backend contact-form submission endpoint."
      />

      <section className={pages.section}>
        <Container size="reading">
          <div className={pages.prose}>
            <p>
              The website does not intentionally request passwords, production
              credentials or confidential infrastructure information.
            </p>
            <p>
              The public enquiry composer prepares text locally in the browser.
              In this frontend release, it does not send the enquiry to a No
              Breach server.
            </p>
            <p>
              External links, including LinkedIn, are governed by the privacy
              practices of those external services once you leave this website.
            </p>
            <p>
              If analytics, a CMS or backend forms are introduced later, this
              page should be updated before those features are enabled in
              production.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
