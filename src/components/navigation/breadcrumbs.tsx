import Link from "next/link";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/ui/json-ld";
import { siteConfig } from "@/content/site";
import styles from "./breadcrumbs.module.css";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({
  items
}: BreadcrumbsProps) {
  const allItems = [
    {
      label: "Home",
      href: "/"
    },
    ...items
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context":
            "https://schema.org",
          "@type":
            "BreadcrumbList",
          itemListElement:
            allItems.map(
              (item, index) => ({
                "@type":
                  "ListItem",
                position:
                  index + 1,
                name:
                  item.label,
                item:
                  item.href
                    ? new URL(
                        item.href,
                        siteConfig.url
                      ).toString()
                    : undefined
              })
            )
        }}
      />

      <nav
        className={styles.nav}
        aria-label="Breadcrumb"
      >
        <Container>
          <ol className={styles.list}>
            {allItems.map(
              (item, index) => {
                const last =
                  index ===
                  allItems.length - 1;

                return (
                  <li
                    className={
                      styles.item
                    }
                    key={`${item.label}-${index}`}
                  >
                    {index > 0 ? (
                      <span
                        className={
                          styles.separator
                        }
                        aria-hidden="true"
                      >
                        /
                      </span>
                    ) : null}

                    {!last &&
                    item.href ? (
                      <Link
                        className={
                          styles.link
                        }
                        href={
                          item.href
                        }
                      >
                        {
                          item.label
                        }
                      </Link>
                    ) : (
                      <span
                        className={
                          styles.current
                        }
                        aria-current={
                          last
                            ? "page"
                            : undefined
                        }
                      >
                        {
                          item.label
                        }
                      </span>
                    )}
                  </li>
                );
              }
            )}
          </ol>
        </Container>
      </nav>
    </>
  );
}
