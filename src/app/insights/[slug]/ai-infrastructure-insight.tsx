// NB_AI_INFRA_INSIGHT_V1
// "When the Model Is Not the Only Attack Surface" by Nouha Ben Brahim.
// Content: src/content/articles/ai-infrastructure-security.ts
import Link from "next/link";
import { Fragment } from "react";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/ui/json-ld";
import {
  aiInfrastructureArticle as article,
  type ArticleBlock
} from "@/content/articles/ai-infrastructure-security";
import {
  getInsight,
  getRelatedInsights
} from "@/content/insights";
import { getService } from "@/content/services";
import { siteConfig } from "@/content/site";
import { getTrainingProgram } from "@/content/training";
import styles from "./ai-infrastructure-insight.module.css";

const insight = getInsight(article.slug);

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function formatDate(value: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return value;
  return `${Number(match[3])} ${MONTHS[Number(match[2]) - 1]} ${match[1]}`;
}

const INLINE_TOKEN = /(\[\d+(?:\s*[–,]\s*\d+)*\]|`[^`]+`)/g;

function Citation({ label }: { label: string }) {
  const items = label.includes("–")
    ? [label]
    : label.split(/\s*,\s*/);

  return (
    <sup className={styles.cite}>
      [
      {items.map((item, index) => (
        <Fragment key={item}>
          {index > 0 ? ", " : null}
          <a
            href={`#ref-${Number.parseInt(item, 10)}`}
            aria-label={`Reference ${item}`}
          >
            {item}
          </a>
        </Fragment>
      ))}
      ]
    </sup>
  );
}

function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(INLINE_TOKEN).map((part, index, parts) => {
        if (part.length > 1 && part.startsWith("`") && part.endsWith("`")) {
          return <code key={index}>{part.slice(1, -1)}</code>;
        }

        const citation = /^\[(\d.*)\]$/.exec(part);
        if (citation) {
          return <Citation key={index} label={citation[1]} />;
        }

        // keep the reference marker attached to the preceding word
        const next = parts[index + 1];
        const trimmed = next && /^\[\d/.test(next) ? part.trimEnd() : part;

        return <Fragment key={index}>{trimmed}</Fragment>;
      })}
    </>
  );
}

function Block({ block, id }: { block: ArticleBlock; id: string }) {
  if (block.type === "paragraph") {
    return (
      <p className={styles.paragraph}>
        <Rich text={block.text} />
      </p>
    );
  }

  if (block.type === "bullets") {
    return (
      <ul className={styles.bullets}>
        {block.items.map((item) => (
          <li key={item.lead}>
            <strong>{item.lead}</strong>{" "}
            <Rich text={item.text} />
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "table") {
    return (
      <figure className={styles.tableFigure}>
        <table className={styles.table}>
          <caption>{block.caption}</caption>
          <thead>
            <tr>
              {block.columns.map((column) => (
                <th key={column} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) =>
                  index === 0 ? (
                    <th key={index} scope="row">
                      {cell}
                    </th>
                  ) : (
                    <td key={index} data-label={block.columns[index]}>
                      {cell}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </figure>
    );
  }

  return (
    <aside
      className={styles.callout}
      aria-labelledby={`${id}-callout`}
    >
      <p className={styles.calloutLabel}>Reading method</p>
      <h3 id={`${id}-callout`}>{block.title}</h3>
      <ol className={styles.calloutSteps}>
        {block.steps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {step}
          </li>
        ))}
      </ol>
      <p className={styles.calloutText}>
        <Rich text={block.text} />
      </p>
    </aside>
  );
}

export function AiInfrastructureInsight() {
  if (!insight) return null;

  const related = getRelatedInsights(insight);
  const services = insight.relatedServiceSlugs
    .map((slug) => getService(slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
  const programs = insight.relatedTrainingSlugs
    .map((slug) => getTrainingProgram(slug))
    .filter((program): program is NonNullable<typeof program> => Boolean(program));
  const published = formatDate(insight.publishedAt);

  return (
    <article
      className={styles.page}
      data-ai-infra-insight="v1"
      aria-labelledby="ai-infra-title"
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          alternativeHeadline: article.deck,
          description: insight.summary,
          datePublished: insight.publishedAt,
          dateModified: insight.updatedAt ?? insight.publishedAt,
          author: {
            "@type": "Person",
            name: article.author,
            jobTitle: article.authorRole,
            sameAs: siteConfig.founder.linkedin
          },
          publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url
          },
          mainEntityOfPage: new URL(
            `/insights/${insight.slug}`,
            siteConfig.url
          ).toString(),
          articleSection: insight.category,
          keywords: insight.tags.join(", "),
          citation: article.references.map((reference) => reference.url)
        }}
      />

      <header className={styles.hero}>
        <Container>
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <Link href="/insights">Insights</Link>
            <span aria-hidden="true">/</span>
            <Link href="/insights?category=AI%20Security">{insight.category}</Link>
          </nav>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>{article.kicker}</p>
              <h1 id="ai-infra-title">{article.title}</h1>
              <p className={styles.deck}>{article.deck}</p>
              <p className={styles.byline}>
                By{" "}
                <Link href="/company/founder">{article.author}</Link>
                <span aria-hidden="true">·</span>
                {article.format}
                <span aria-hidden="true">·</span>
                {article.dateLabel}
              </p>
            </div>

            <dl className={styles.heroMeta}>
              <div>
                <dt>Published</dt>
                <dd>
                  <time dateTime={insight.publishedAt}>{published}</time>
                </dd>
              </div>
              <div>
                <dt>Reading</dt>
                <dd>{insight.readingTime}</dd>
              </div>
              <div>
                <dt>Case studies</dt>
                <dd>Sandbox escape · LiteLLM 1.107.0</dd>
              </div>
              <div>
                <dt>Sources</dt>
                <dd>{article.references.length} references</dd>
              </div>
            </dl>
          </div>

          <blockquote className={styles.thesis}>
            <p>{article.thesis}</p>
          </blockquote>
        </Container>
      </header>

      <div className={styles.body}>
        <Container>
          <div className={styles.layout}>
            <nav className={styles.toc} aria-label="Article contents">
              <p className={styles.panelLabel}>Article contents</p>
              <ol>
                {article.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>
                      <span>{section.number.padStart(2, "0")}</span>
                      {section.heading}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#references">
                    <span>—</span>
                    References
                  </a>
                </li>
              </ol>
            </nav>

            <div className={styles.content}>
              {article.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={styles.section}
                  aria-labelledby={`${section.id}-title`}
                >
                  <header className={styles.sectionHead}>
                    <span className={styles.sectionNumber} aria-hidden="true">
                      {section.number.padStart(2, "0")}
                    </span>
                    <h2 id={`${section.id}-title`}>{section.heading}</h2>
                  </header>

                  {section.blocks.map((block, index) => (
                    <Block key={index} block={block} id={section.id} />
                  ))}

                  {section.subsections.map((subsection) => (
                    <section
                      key={subsection.id}
                      id={subsection.id}
                      className={styles.subsection}
                      aria-labelledby={`${subsection.id}-title`}
                    >
                      <h3 id={`${subsection.id}-title`}>
                        <span>{subsection.number}</span>
                        {subsection.heading}
                      </h3>

                      {subsection.blocks.map((block, index) => (
                        <Block key={index} block={block} id={subsection.id} />
                      ))}
                    </section>
                  ))}
                </section>
              ))}

              <section
                id="references"
                className={styles.references}
                aria-labelledby="references-title"
              >
                <h2 id="references-title">References</h2>
                <ol>
                  {article.references.map((reference) => (
                    <li key={reference.number} id={`ref-${reference.number}`}>
                      <span className={styles.refNumber}>[{reference.number}]</span>
                      <p>
                        {reference.source}, “
                        <a
                          href={reference.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {reference.title}
                        </a>
                        ”{reference.detail ? `, ${reference.detail}` : ""}.
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
            </div>

            <aside className={styles.info} aria-label="Article information">
              <p className={styles.panelLabel}>Article information</p>
              <dl>
                <div>
                  <dt>Category</dt>
                  <dd>{insight.category}</dd>
                </div>
                <div>
                  <dt>Author</dt>
                  <dd>
                    <Link href="/company/founder">{article.author}</Link>
                  </dd>
                </div>
                <div>
                  <dt>Published</dt>
                  <dd>{published}</dd>
                </div>
                <div>
                  <dt>Reading time</dt>
                  <dd>{insight.readingTime}</dd>
                </div>
              </dl>

              <p className={styles.panelLabel}>Topics</p>
              <ul className={styles.tags}>
                {insight.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <a
                className={styles.linkedin}
                href={article.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-ai-infra-linkedin
              >
                Read the LinkedIn post
                <span aria-hidden="true">↗</span>
              </a>

              {services.length > 0 ? (
                <>
                  <p className={styles.panelLabel}>Related service</p>
                  <ul className={styles.relatedLinks}>
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link href={`/services/${service.slug}`}>
                          {service.title}
                          <span aria-hidden="true">↗</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              {programs.length > 0 ? (
                <>
                  <p className={styles.panelLabel}>Related training</p>
                  <ul className={styles.relatedLinks}>
                    {programs.map((program) => (
                      <li key={program.slug}>
                        <Link href={`/training/${program.slug}`}>
                          {program.title}
                          <span aria-hidden="true">↗</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </aside>
          </div>
        </Container>
      </div>

      {related.length > 0 ? (
        <section
          className={styles.related}
          aria-labelledby="ai-infra-related-title"
        >
          <Container>
            <div className={styles.relatedHead}>
              <h2 id="ai-infra-related-title">Continue reading</h2>
              <Link href="/insights" className={styles.allLink}>
                All insights
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className={styles.relatedGrid}>
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/insights/${item.slug}`}
                  className={styles.relatedCard}
                >
                  <span className={styles.relatedMeta}>
                    {item.category} · {item.readingTime}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </article>
  );
}
