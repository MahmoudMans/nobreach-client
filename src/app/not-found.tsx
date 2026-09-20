import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import pages from "@/styles/pages.module.css";

export default function NotFound() {
  return (
    <section className={pages.section}>
      <Container>
        <div className={pages.empty}>
          <p className={pages.emptyEyebrow}>404 / Route not found</p>
          <h1 className={pages.ctaTitle}>This endpoint doesn&apos;t exist.</h1>
          <p className={pages.emptyText}>
            The requested page is not part of the current No Breach public
            website.
          </p>
          <div className={pages.ctaActions}>
            <ButtonLink href="/">Return home</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
