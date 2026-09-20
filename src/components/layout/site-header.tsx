"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { BrandMark } from "@/components/brand/brand-mark";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/content/site";
import styles from "./site-header.module.css";

const companyLinks = [
  {
    href: "/company",
    label: "About No Breach",
    description: "Company, principles and story"
  },
  {
    href: "/company/founder",
    label: "Founder",
    description: "Nouha Ben Brahim"
  },
  {
    href: "/company/team",
    label: "Team",
    description: "Current published profiles"
  },
  {
    href: "/careers",
    label: "Careers",
    description: "Employment and internships"
  }
];

const serviceLinks = [
  {
    href: "/services",
    label: "Overview",
    description: "Explore security services"
  },
  {
    href: "/services/web-application-pentesting",
    label: "Web Application Security",
    description: "Application-focused testing"
  },
  {
    href: "/services/api-security",
    label: "API Security",
    description: "REST and GraphQL assessment"
  },
  {
    href: "/services/infrastructure-security",
    label: "Infrastructure Security",
    description: "Network and exposure assessment"
  },
  {
    href: "/services/security-training",
    label: "Security Training",
    description: "Programs for teams and communities"
  }
];

function routeMatches(
  pathname: string,
  href: string
) {
  if (href === "/") {
    return pathname === "/";
  }

  if (
    href === "/company" ||
    href === "/services"
  ) {
    return pathname === href;
  }

  return (
    pathname === href ||
    pathname.startsWith(`${href}/`)
  );
}

export function SiteHeader() {
  const dialogRef =
    useRef<HTMLDialogElement>(null);

  const pathname = usePathname();

  const companyActive =
    pathname === "/company" ||
    pathname.startsWith("/company/") ||
    pathname.startsWith("/careers");

  const servicesActive =
    pathname === "/services" ||
    pathname.startsWith("/services/");

  function openMenu() {
    dialogRef.current?.showModal();
  }

  function closeMenu() {
    dialogRef.current?.close();
  }

  function linkClass(
    href: string
  ) {
    return [
      styles.navLink,
      routeMatches(pathname, href)
        ? styles.navLinkActive
        : ""
    ]
      .filter(Boolean)
      .join(" ");
  }

  function mobileLinkClass(
    href: string
  ) {
    return routeMatches(pathname, href)
      ? styles.mobileLinkActive
      : undefined;
  }

  return (
    <header className={styles.header}>
      <Container
        className={styles.inner}
        size="wide"
      >
        <BrandMark />

        <nav
          className={styles.desktopNav}
          aria-label="Primary navigation"
        >
          <details
            className={styles.navDetails}
          >
            <summary
              className={[
                styles.navSummary,
                companyActive
                  ? styles.navSummaryActive
                  : ""
              ]
                .filter(Boolean)
                .join(" ")}
            >
              Company
              <ChevronDown
                size={14}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </summary>

            <div className={styles.dropdown}>
              {companyLinks.map(
                (item) => (
                  <Link
                    href={item.href}
                    key={item.href}
                    className={
                      routeMatches(
                        pathname,
                        item.href
                      )
                        ? styles.dropdownActive
                        : undefined
                    }
                    aria-current={
                      routeMatches(
                        pathname,
                        item.href
                      )
                        ? "page"
                        : undefined
                    }
                  >
                    <strong>
                      {item.label}
                    </strong>
                    <span>
                      {item.description}
                    </span>
                  </Link>
                )
              )}
            </div>
          </details>

          <details
            className={styles.navDetails}
          >
            <summary
              className={[
                styles.navSummary,
                servicesActive
                  ? styles.navSummaryActive
                  : ""
              ]
                .filter(Boolean)
                .join(" ")}
            >
              Services
              <ChevronDown
                size={14}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </summary>

            <div className={styles.dropdown}>
              {serviceLinks.map(
                (item) => (
                  <Link
                    href={item.href}
                    key={item.href}
                    className={
                      routeMatches(
                        pathname,
                        item.href
                      )
                        ? styles.dropdownActive
                        : undefined
                    }
                    aria-current={
                      routeMatches(
                        pathname,
                        item.href
                      )
                        ? "page"
                        : undefined
                    }
                  >
                    <strong>
                      {item.label}
                    </strong>
                    <span>
                      {item.description}
                    </span>
                  </Link>
                )
              )}
            </div>
          </details>

          <Link
            className={linkClass(
              "/training"
            )}
            href="/training"
            aria-current={
              routeMatches(
                pathname,
                "/training"
              )
                ? "page"
                : undefined
            }
          >
            Training
          </Link>

          <Link
            className={linkClass(
              "/cr4ckout"
            )}
            href="/cr4ckout"
            aria-current={
              routeMatches(
                pathname,
                "/cr4ckout"
              )
                ? "page"
                : undefined
            }
          >
            CR4CKOUT
          </Link>

          <Link
            className={linkClass(
              "/activities"
            )}
            href="/activities"
            aria-current={
              routeMatches(
                pathname,
                "/activities"
              )
                ? "page"
                : undefined
            }
          >
            Activities
          </Link>

          <Link
            className={linkClass(
              "/insights"
            )}
            href="/insights"
            aria-current={
              routeMatches(
                pathname,
                "/insights"
              )
                ? "page"
                : undefined
            }
          >
            Insights
          </Link>
        </nav>

        <div className={styles.actions}>
          <Link
            className={[
              styles.contact,
              routeMatches(
                pathname,
                "/contact"
              )
                ? styles.contactActive
                : ""
            ]
              .filter(Boolean)
              .join(" ")}
            href="/contact"
            aria-current={
              routeMatches(
                pathname,
                "/contact"
              )
                ? "page"
                : undefined
            }
          >
            Contact
            <ArrowUpRight
              size={15}
              aria-hidden="true"
            />
          </Link>

          <button
            className={styles.mobileButton}
            type="button"
            aria-label="Open navigation"
            onClick={openMenu}
          >
            <Menu
              size={20}
              aria-hidden="true"
            />
          </button>
        </div>
      </Container>

      <dialog
        className={styles.dialog}
        ref={dialogRef}
        onCancel={closeMenu}
      >
        <div className={styles.mobileShell}>
          <Container
            className={styles.mobileTop}
            size="wide"
          >
            <BrandMark />

            <button
              className={styles.closeButton}
              type="button"
              aria-label="Close navigation"
              onClick={closeMenu}
            >
              <X
                size={20}
                aria-hidden="true"
              />
            </button>
          </Container>

          <Container
            className={styles.mobileNav}
          >
            <div
              className={styles.mobileSection}
            >
              <p
                className={
                  styles.mobileSectionTitle
                }
              >
                Company
              </p>

              <div
                className={styles.mobileLinks}
              >
                {companyLinks.map(
                  (item) => (
                    <Link
                      href={item.href}
                      key={item.href}
                      className={mobileLinkClass(
                        item.href
                      )}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            </div>

            <div
              className={styles.mobileSection}
            >
              <p
                className={
                  styles.mobileSectionTitle
                }
              >
                Security
              </p>

              <div
                className={styles.mobileLinks}
              >
                {serviceLinks.map(
                  (item) => (
                    <Link
                      href={item.href}
                      key={item.href}
                      className={mobileLinkClass(
                        item.href
                      )}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            </div>

            <div
              className={styles.mobileSection}
            >
              <p
                className={
                  styles.mobileSectionTitle
                }
              >
                Ecosystem
              </p>

              <div
                className={styles.mobileLinks}
              >
                {[
                  ["/training", "Training Hub"],
                  ["/cr4ckout", "CR4CKOUT"],
                  ["/activities", "Activities"],
                  ["/events", "Events"],
                  ["/insights", "Insights"],
                  ["/contact", "Contact"]
                ].map(([href, label]) => (
                  <Link
                    href={href}
                    key={href}
                    className={mobileLinkClass(
                      href
                    )}
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.mobileMeta}>
              <span>
                {siteConfig.location}
              </span>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </Container>
        </div>
      </dialog>
    </header>
  );
}
