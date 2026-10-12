// NB_GRC_ENTERPRISE_COURSE_V1
import Link from "next/link";
import type { TrainingProgram } from "@/types/content";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { Container } from "@/components/layout/container";
import { TrainingRegistrationAction } from "../course-registration-links";
import styles from "./grc-enterprise-course-detail.module.css";

const frameworkNames = [
  "ISO 27001",
  "NIST CSF",
  "SOC 2",
  "GDPR"
];

const highlights = [
  {
    code: "01",
    title: "From findings to business risk",
    description:
      "Turn pentest reports, vulnerability observations and CVSS information into risk-register entries, clear ownership and actionable remediation priorities."
  },
  {
    code: "02",
    title: "One connected control picture",
    description:
      "Map ISO 27001, NIST CSF, SOC 2 and GDPR requirements together instead of treating each framework as an isolated checklist."
  },
  {
    code: "03",
    title: "Artifacts, not just theory",
    description:
      "Work through risk registers, gap analyses, audit-evidence organization and control-testing approaches."
  },
  {
    code: "04",
    title: "Enterprise workflow literacy",
    description:
      "Explore GRC workflows associated with ServiceNow, Archer and OneTrust without implying that licensed platform access is included."
  }
];

const artifacts = [
  "Risk register and business-risk statements",
  "Multi-framework control mapping matrix",
  "Gap analysis and control-testing evidence approach",
  "Audit-ready evidence repository structure",
  "Maturity-informed 12-month GRC roadmap"
];

const programFacts = [
  { label: "Duration", value: "3 weeks" },
  { label: "Sessions", value: "6 total" },
  { label: "Frequency", value: "2 per week" },
  { label: "Session length", value: "1.5–2 hours" },
  { label: "Delivery", value: "Live training" },
  { label: "Certificate", value: "Included" }
];

export function GrcEnterpriseCourseDetail({
  program
}: {
  program: TrainingProgram;
}) {
  return (
    <div
      className={styles.page}
      data-training-detail="grc-enterprise"
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
        aria-labelledby="grc-program-title"
      >
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span
                  className={styles.eyebrowDot}
                  aria-hidden="true"
                />
                NO BREACH ACADEMY / ENTERPRISE PROGRAM
              </p>

              <h1 id="grc-program-title">
                GRC Enterprise
                {" "}
                <span>Training Program.</span>
              </h1>

              <p className={styles.lead}>
                From technical security findings to
                boardroom-ready risk, control assurance
                and audit evidence.
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
                  Explore curriculum
                  <span aria-hidden="true">↓</span>
                </a>
              </div>

              <p className={styles.registerNote}>
                Registration opens an external Google
                Form. Specific session dates are not
                listed here.
              </p>

              <div
                className={styles.frameworkStrip}
                aria-label="Frameworks addressed"
              >
                {frameworkNames.map((name) => (
                  <span key={name}>{name}</span>
                ))}
              </div>
            </div>

            <aside
              className={styles.snapshot}
              aria-label="Program details"
            >
              <div className={styles.snapshotTop}>
                <span>PROGRAM OVERVIEW</span>

                <span className={styles.liveLabel}>
                  <i aria-hidden="true" />
                  LIVE TRAINING
                </span>
              </div>

              <div
                className={styles.snapshotEmblem}
                aria-hidden="true"
              >
                <span>G</span>
                <span>R</span>
                <span>C</span>
              </div>

              <h2>Governance. Risk. Compliance.</h2>

              <p>
                Practical GRC capability for enterprise
                decisions and audit-ready outcomes.
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
                Professional / Enterprise Level
                <span aria-hidden="true">↗</span>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section
        className={styles.section}
        id="difference"
        aria-labelledby="grc-difference-title"
      >
        <Container>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionIndex}>
              01 / WHY THIS PROGRAM
            </p>

            <h2 id="grc-difference-title">
              Beyond framework theory and
              certification checklists.
            </h2>

            <p>
              Learn to communicate technical security
              evidence in a form that risk owners,
              executives and auditors can act on.
            </p>
          </div>

          <div className={styles.benefitGrid}>
            {highlights.map((item) => (
              <article
                className={styles.benefit}
                key={item.code}
              >
                <span className={styles.cardNumber}>
                  {item.code}
                </span>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        className={`${styles.section} ${styles.sectionAlt}`}
        id="curriculum"
        aria-labelledby="grc-curriculum-title"
      >
        <Container>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionIndex}>
              02 / PRACTICAL LEARNING
            </p>

            <h2 id="grc-curriculum-title">
              Learn the workflows. Build the artifacts.
            </h2>

            <p>
              These are the program&apos;s stated focus
              areas, not a published session-by-session
              timetable.
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
        className={styles.section}
        id="artifacts"
        aria-labelledby="grc-artifacts-title"
      >
        <Container>
          <div className={styles.artifactLayout}>
            <div className={styles.artifactIntro}>
              <p className={styles.sectionIndex}>
                03 / REAL GRC WORK
              </p>

              <h2 id="grc-artifacts-title">
                From evidence to an executive decision.
              </h2>

              <p>
                Practice translating the technical
                reality into structured governance
                and audit materials.
              </p>

              <div
                className={styles.process}
                aria-label="GRC workflow"
              >
                <span>Technical finding</span>
                <span aria-hidden="true">→</span>
                <span>Business risk</span>
                <span aria-hidden="true">→</span>
                <span>Controls &amp; evidence</span>
                <span aria-hidden="true">→</span>
                <span>Roadmap</span>
              </div>
            </div>

            <div className={styles.artifactPanel}>
              <p className={styles.panelEyebrow}>
                PRACTICAL ARTIFACTS
              </p>

              <ul>
                {artifacts.map((artifact, index) => (
                  <li key={artifact}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {artifact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section
        className={`${styles.section} ${styles.sectionAlt}`}
        id="capstone"
        aria-labelledby="grc-capstone-title"
      >
        <Container>
          <div className={styles.capstone}>
            <div>
              <p className={styles.sectionIndex}>
                04 / FINAL CAPSTONE
              </p>

              <h2 id="grc-capstone-title">
                Present a complete enterprise GRC
                roadmap.
              </h2>

              <p>
                Build a maturity-informed program
                proposal backed by a 12-month plan,
                control-mapping work and risk
                priorities. The objective is a
                defensible presentation to business
                stakeholders.
              </p>
            </div>

            <div className={styles.capstoneBadge}>
              <span>12</span>
              <strong>
                MONTH
                <br />
                ROADMAP
              </strong>
              <p>Capstone presentation</p>
            </div>
          </div>
        </Container>
      </section>

      <section
        className={styles.section}
        id="certificate"
        aria-labelledby="grc-certificate-title"
      >
        <Container>
          <div className={styles.certificate}>
            <div>
              <p className={styles.sectionIndex}>
                05 / RECOGNITION
              </p>

              <h2 id="grc-certificate-title">
                Capability first. Certificate included.
              </h2>

              <p>
                Use your practical GRC work to
                strengthen a portfolio or resume for
                governance, risk, compliance, audit,
                consulting and security roles.
                The included program certificate
                recognizes this training; it does not
                imply ISO, SOC 2, NIST or government
                accreditation.
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
        aria-labelledby="grc-cta-title"
      >
        <Container>
          <div className={styles.finalGrid}>
            <div>
              <p className={styles.sectionIndex}>
                JOIN THE PROGRAM
              </p>

              <h2 id="grc-cta-title">
                Build GRC skills that connect
                security and the business.
              </h2>

              <p>
                Three weeks. Six live sessions.
                Two sessions per week.
                Certificate included.
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
