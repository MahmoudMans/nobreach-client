// NB_MCP_SECURITY_COURSE_V1
import Link from "next/link";
import type { TrainingProgram } from "@/types/content";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { Container } from "@/components/layout/container";
import { TrainingRegistrationAction } from "../course-registration-links";
import { StarRating } from "@/components/training/star-rating";
import styles from "./mcp-security-course-detail.module.css";

const mcpComponents = [
  "Hosts",
  "Clients",
  "Servers",
  "Tools",
  "Resources",
  "Prompts"
];

const attackSurfaces = [
  "Tool poisoning",
  "Malicious and look-alike servers",
  "Indirect prompt injection through tool outputs and resources",
  "Confused deputy attacks",
  "Over-permissioned tools"
];

const controls = [
  "Authentication and authorization",
  "Least privilege",
  "Sandboxing",
  "MCP server vetting",
  "Monitoring and logging",
  "Human-in-the-loop controls"
];

const programFacts = [
  { label: "Sessions", value: "3 per week" },
  { label: "Session length", value: "1.5–2 hours" },
  { label: "Format", value: "Live training" },
  { label: "Program", value: "Mentorship" },
  { label: "Assessment", value: "Scenario-based" },
  { label: "Certification", value: "Included" }
];

export function McpSecurityCourseDetail({
  program
}: {
  program: TrainingProgram;
}) {
  return (
    <div
      className={styles.page}
      data-training-detail="mcp-security"
    >
      <Breadcrumbs
        items={[
          {
            label: "Training",
            href: "/training"
          },
          {
            label: program.title
          }
        ]}
      />

      <section
        className={styles.hero}
        aria-labelledby="mcp-program-title"
      >
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span
                  className={styles.eyebrowDot}
                  aria-hidden="true"
                />
                NO BREACH ACADEMY / MENTORSHIP PROGRAM
              </p>

              <h1 id="mcp-program-title">
                MCP Security
                {" "}
                <span>Mentorship Program.</span>
              </h1>

              {/* NB_TRAINING_RATINGS_V1 */}
              {program.rating ? (
                <StarRating
                  rating={program.rating}
                  placement="hero"
                />
              ) : null}

              <p className={styles.lead}>
                Map the trust boundaries. Understand
                the attacks. Apply the controls before
                MCP deployments reach production.
              </p>

              <p className={styles.description}>
                {program.description}
              </p>

              <div className={styles.heroActions}>
                <TrainingRegistrationAction
                  slug={program.slug}
                  className={styles.primaryAction}
                />

                <a
                  href="#curriculum"
                  className={styles.secondaryAction}
                >
                  Explore the program
                  <span aria-hidden="true">↓</span>
                </a>
              </div>

              <p className={styles.registerNote}>
                Registration opens an external Google
                Form. Specific session dates are not
                listed here.
              </p>

              <div
                className={styles.componentStrip}
                aria-label="MCP components covered"
              >
                {mcpComponents.map((name) => (
                  <span key={name}>{name}</span>
                ))}
              </div>
            </div>

            <aside
              className={styles.snapshot}
              aria-label="Program details"
            >
              <div className={styles.snapshotTop}>
                <span>PROGRAM STRUCTURE</span>

                <span className={styles.liveLabel}>
                  <i aria-hidden="true" />
                  LIVE TRAINING
                </span>
              </div>

              <div
                className={styles.snapshotEmblem}
                aria-hidden="true"
              >
                <span>M</span>
                <span>C</span>
                <span>P</span>
              </div>

              <h2>Model Context Protocol security.</h2>

              <p>
                From architecture and trust boundaries
                to attack vectors and the controls that
                reduce risk.
              </p>

              <dl className={styles.factGrid}>
                {programFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className={styles.snapshotFoot}>
                Architecture → Attack → Defense
                <span aria-hidden="true">↗</span>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section
        className={styles.section}
        id="curriculum"
        aria-labelledby="mcp-difference-title"
      >
        <Container>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionIndex}>
              01 / WHAT MAKES THIS PROGRAM DIFFERENT
            </p>

            <h2 id="mcp-difference-title">
              Understanding the protocol alone
              is not enough.
            </h2>

            <p>
              MCP introduces security considerations
              across tools, resources, prompts, servers
              and the systems that interact with them.
              Securing an MCP deployment requires knowing
              where trust boundaries exist, how attacks
              can move through them and which controls
              are needed to reduce risk. This program
              takes a structured approach.
            </p>
          </div>

          <ol className={styles.moduleList}>
            {program.modules.map((module) => (
              <li
                className={styles.moduleRow}
                key={module.number}
              >
                <span className={styles.moduleNumber}>
                  {module.number}
                </span>

                <div>
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                </div>

                <span
                  className={styles.moduleArrow}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        className={`${styles.section} ${styles.sectionAlt}`}
        id="attack-and-defense"
        aria-labelledby="mcp-attack-title"
      >
        <Container>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionIndex}>
              02 / ATTACK AND DEFENSE
            </p>

            <h2 id="mcp-attack-title">
              Study how attacks move. Learn the
              controls that stop them.
            </h2>

            <p>
              Attack analysis and defense are taught
              together, so each attack surface connects
              to the controls that reduce its risk.
            </p>

            <div
              className={styles.process}
              aria-label="Program progression"
            >
              <span>Architecture</span>
              <span aria-hidden="true">→</span>
              <span>Trust boundaries</span>
              <span aria-hidden="true">→</span>
              <span>STRIDE threats</span>
              <span aria-hidden="true">→</span>
              <span>Controls</span>
              <span aria-hidden="true">→</span>
              <span>Assessment</span>
            </div>
          </div>

          <div className={styles.surfaceGrid}>
            <div
              className={`${styles.panel} ${styles.attackPanel}`}
            >
              <p className={styles.panelEyebrow}>
                ATTACK SURFACES STUDIED
              </p>

              <ul>
                {attackSurfaces.map((item, index) => (
                  <li key={item}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.panel}>
              <p className={styles.panelEyebrow}>
                CONTROLS APPLIED
              </p>

              <ul>
                {controls.map((item, index) => (
                  <li key={item}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section
        className={styles.section}
        id="foundation"
        aria-labelledby="mcp-foundation-title"
      >
        <Container>
          <div className={styles.artifactLayout}>
            <div className={styles.artifactIntro}>
              <p className={styles.sectionIndex}>
                03 / YOUR FOUNDATION
              </p>

              <h2 id="mcp-foundation-title">
                What can you do with this foundation?
              </h2>

              <p>
                Completing the program provides a
                structured understanding of MCP
                architecture, its security boundaries
                and the attack techniques that can affect
                MCP deployments. You will work through
                threat modeling an MCP deployment,
                recognizing risks such as tool poisoning
                and privilege abuse, and identifying
                appropriate controls for securing and
                assessing deployments before production.
              </p>
            </div>

            <div className={styles.panel}>
              <p className={styles.panelEyebrow}>
                WHAT YOU LEAVE WITH
              </p>

              <ul>
                {program.outcomes.map((outcome, index) => (
                  <li key={outcome}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section
        className={`${styles.section} ${styles.sectionAlt}`}
        id="certificate"
        aria-labelledby="mcp-certificate-title"
      >
        <Container>
          <div className={styles.certificate}>
            <div>
              <p className={styles.sectionIndex}>
                04 / ASSESSMENT &amp; CERTIFICATION
              </p>

              <h2 id="mcp-certificate-title">
                Scenario-based assessment.
                Certification included.
              </h2>

              <p>
                The program concludes with a
                scenario-based assessment and includes
                certification on completion. The
                certificate recognizes this No Breach
                program; it does not imply third-party or
                government accreditation.
              </p>
            </div>

            <span
              className={styles.certificateIcon}
              aria-hidden="true"
            >
              ✓
            </span>
          </div>
        </Container>
      </section>

      <section
        className={styles.finalCta}
        aria-labelledby="mcp-cta-title"
      >
        <Container>
          <div className={styles.finalGrid}>
            <div>
              <p className={styles.sectionIndex}>
                JOIN THE PROGRAM
              </p>

              <h2 id="mcp-cta-title">
                Secure MCP deployments before
                they reach production.
              </h2>

              <p>
                Three live sessions per week.
                1.5–2 hours per session.
                Certification included.
              </p>
            </div>

            <div className={styles.finalActions}>
              <TrainingRegistrationAction
                slug={program.slug}
                className={styles.primaryAction}
              />

              <Link
                href="/training"
                className={styles.secondaryAction}
              >
                View all programs
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
