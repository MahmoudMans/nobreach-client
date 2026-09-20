import { InquiryComposer } from "@/components/contact/inquiry-composer";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import { createMetadata } from "@/lib/seo";
import pages from "@/styles/pages.module.css";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact No Breach about security assessments, training, partnerships and career enquiries.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with the right conversation."
        description="Security assessment, training, partnership and career enquiries can all begin here without submitting sensitive infrastructure information."
        meta={[
          "Security Assessment",
          "Training",
          "Partnership",
          "Careers"
        ]}
      />

      <section className={pages.section}>
        <Container>
          <InquiryComposer />
        </Container>
      </section>
    </>
  );
}
