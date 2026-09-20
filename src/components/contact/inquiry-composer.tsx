"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/content/site";
import styles from "./inquiry-composer.module.css";

export function InquiryComposer() {
  const [draft, setDraft] = useState("");
  const [copied, setCopied] = useState(false);

  function prepareInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const organization = String(
      formData.get("organization") ?? ""
    ).trim();
    const requestType = String(
      formData.get("requestType") ?? ""
    ).trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const prepared = [
      `No Breach enquiry`,
      ``,
      `Type: ${requestType}`,
      `Subject: ${subject}`,
      `Name: ${name}`,
      `Email: ${email}`,
      organization ? `Organization: ${organization}` : "",
      ``,
      message
    ]
      .filter((line) => line !== "")
      .join("\n");

    setDraft(prepared);
    setCopied(false);
  }

  async function copyDraft() {
    if (!draft) {
      return;
    }

    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={styles.shell}>
      <aside className={styles.info}>
        <p className={styles.eyebrow}>Public enquiry</p>
        <h2 className={styles.title}>Prepare the right context.</h2>
        <p className={styles.text}>
          This frontend does not transmit the form to a backend yet. It
          prepares a clean enquiry that you can copy and send through the
          company&apos;s official public channel.
        </p>

        <div className={styles.notice}>
          Do not enter passwords, access tokens, confidential infrastructure
          details, customer data or production credentials.
        </div>
      </aside>

      <div>
        <form className={styles.form} onSubmit={prepareInquiry}>
          <div className={styles.row}>
            <label className={styles.field}>
              <span className={styles.label}>Name</span>
              <input
                className={styles.input}
                type="text"
                name="name"
                autoComplete="name"
                required
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Email</span>
              <input
                className={styles.input}
                type="email"
                name="email"
                autoComplete="email"
                required
              />
            </label>
          </div>

          <div className={styles.row}>
            <label className={styles.field}>
              <span className={styles.label}>Organization</span>
              <input
                className={styles.input}
                type="text"
                name="organization"
                autoComplete="organization"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Enquiry type</span>
              <select
                className={styles.select}
                name="requestType"
                defaultValue="Security assessment"
              >
                <option>Security assessment</option>
                <option>Training</option>
                <option>Partnership</option>
                <option>Career / Internship</option>
              </select>
            </label>
          </div>

          <label className={styles.field}>
            <span className={styles.label}>Subject</span>
            <input
              className={styles.input}
              type="text"
              name="subject"
              required
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Message</span>
            <textarea
              className={styles.textarea}
              name="message"
              required
            />
          </label>

          <button className={styles.submit} type="submit">
            Prepare enquiry
          </button>
        </form>

        {draft ? (
          <div className={styles.draft}>
            <h3 className={styles.draftTitle}>Prepared enquiry</h3>
            <pre className={styles.draftText}>{draft}</pre>

            <div className={styles.draftActions}>
              <button
                className={styles.copyButton}
                type="button"
                onClick={copyDraft}
              >
                {copied ? "Copied" : "Copy enquiry"}
              </button>

              <a
                className={styles.linkButton}
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Open No Breach on LinkedIn ↗
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
