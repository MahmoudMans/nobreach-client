import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import { team } from "@/content/team";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";

export const metadata = createMetadata({
  title: "Team",
  description:
    "Published No Breach team profiles and areas of cybersecurity focus.",
  path: "/company/team"
});

export default function TeamPage() {
  const currentTeam = team.filter((member) => member.status === "current");

  return (
    <>
      <PageHero
        eyebrow="Team"
        title="People behind the work."
        description="Only current, confirmed public profiles are shown here. No Breach does not use inferred or outdated employment information for this page."
      />

      <section className={pages.section}>
        <Container>
          <div className={pages.grid3}>
            {currentTeam.map((member) => (
              <article className={pages.card} key={member.name}>
                <p className={pages.cardNumber}>{member.initials}</p>
                <h2 className={pages.cardTitle}>{member.name}</h2>
                <p className={pages.cardMeta}>{member.role}</p>
                <p className={pages.cardDescription}>{member.bio}</p>

                <div className={pages.tags}>
                  {member.specialties.map((specialty) => (
                    <span className={pages.tag} key={specialty}>
                      {specialty}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={pages.sectionCompact}>
        <Container>
          <div className={pages.empty}>
            <p className={pages.emptyEyebrow}>Profile policy</p>
            <h2 className={pages.emptyTitle}>
              Additional profiles are published only when current roles are confirmed.
            </h2>
            <p className={pages.emptyText}>
              This prevents old internship, freelance or social-profile data
              from being presented as current employment.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
