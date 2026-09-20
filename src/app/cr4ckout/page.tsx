import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { events } from "@/content/events";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";

export const metadata = createMetadata({
  title: "CR4CKOUT",
  description:
    "CR4CKOUT is a No Breach cybersecurity community initiative centered on hands-on learning and technical challenges.",
  path: "/cr4ckout"
});

export default function CrackoutPage() {
  return (
    <>
      <PageHero
        eyebrow="No Breach / Community"
        title="CR4CKOUT"
        description="A cybersecurity community initiative launched by No Breach, built around practical learning, technical challenges and bringing security people together."
        meta={["HACK", "LEARN", "BREAK", "BUILD"]}
        actions={
          <ButtonLink href="/events">Explore events</ButtonLink>
        }
      />

      <section className={pages.section}>
        <Container>
          <div className={pages.split}>
            <p className={pages.sideLabel}>What it is</p>
            <div>
              <p className={pages.largeCopy}>
                Not another passive cybersecurity conference.
              </p>
              <div className={pages.prose}>
                <p>
                  CR4CKOUT is designed around participation. Challenges,
                  workshops and community interaction put practical
                  cybersecurity at the center of the experience.
                </p>
                <p>
                  The format is intended to create a bridge between learners,
                  practitioners, universities and the wider cybersecurity
                  community.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <SectionHeader
            eyebrow="Format"
            title="Built for active participation."
          />

          <div className={pages.grid4}>
            {[
              ["01", "CTF challenges"],
              ["02", "Technical workshops"],
              ["03", "Community interaction"],
              ["04", "Hands-on learning"]
            ].map(([number, title]) => (
              <div className={pages.card} key={number}>
                <p className={pages.cardNumber}>{number}</p>
                <h3 className={pages.cardTitle}>{title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <SectionHeader eyebrow="Archive" title="Published event history." />

          <div className={pages.grid2}>
            {events.map((event) => (
              <div className={pages.card} key={event.slug}>
                <p className={pages.cardNumber}>
                  {event.year} / {event.status.toUpperCase()}
                </p>
                <h3 className={pages.cardTitle}>{event.title}</h3>
                <p className={pages.cardDescription}>{event.summary}</p>
                <p className={pages.cardMeta}>{event.location}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={pages.section}>
        <Container>
          <div className={pages.cta}>
            <p className={pages.ctaEyebrow}>Community</p>
            <h2 className={pages.ctaTitle}>
              Interested in hosting, supporting or collaborating?
            </h2>
            <div className={pages.ctaActions}>
              <ButtonLink href="/contact">Start a conversation</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
