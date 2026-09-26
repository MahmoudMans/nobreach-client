"use client";

import { BrandLogo } from "@/components/brand/brand-logo";
import {
  useEffect,
  useRef,
  useState
} from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import {
  usePathname
} from "next/navigation";
import {
  siteConfig
} from "@/content/site";
import styles from "./site-header.module.css";

type MenuName =
  | "company"
  | "services";

type NavigationItem = {
  href: string;
  label: string;
  description?: string;
};

const companyItems:
  NavigationItem[] = [
    {
      href:
        "/company",
      label:
        "About No Breach",
      description:
        "Company, mission and positioning."
    },
    {
      href:
        "/company/founder",
      label:
        "Founder",
      description:
        "Leadership and founder profile."
    },
    {
      href:
        "/company/team",
      label:
        "Team",
      description:
        "People behind the ecosystem."
    },
    {
      href:
        "/company/internships",
      label:
        "Internship Projects",
      description:
        "Selected applied-security work from No Breach internships."
    },
    {
      href:
        "/careers",
      label:
        "Careers",
      description:
        "Career and internship opportunities."
    }
  ];

const serviceItems:
  NavigationItem[] = [
    {
      href:
        "/services",
      label:
        "Services Overview",
      description:
        "Explore security capabilities."
    },
    {
      href:
        "/services/web-application-pentesting",
      label:
        "Web Application Pentesting",
      description:
        "Manual security assessment for web applications."
    },
    {
      href:
        "/services/api-security",
      label:
        "API Security",
      description:
        "Authorization, access control and API behavior."
    },
    {
      href:
        "/services/infrastructure-security",
      label:
        "Infrastructure Security",
      description:
        "Externally exposed infrastructure assessment."
    },
    {
      href:
        "/services/security-training",
      label:
        "Security Training",
      description:
        "Practical technical security education."
    }
  ];

const primaryLinks:
  NavigationItem[] = [
    {
      href:
        "/training",
      label:
        "Training"
    },
    {
      href:
        "/cr4ckout",
      label:
        "CR4CKOUT"
    },
    {
      href:
        "/activities",
      label:
        "Activities"
    },
    {
      href:
        "/insights",
      label:
        "Insights"
    }
  ];

function routeMatches(
  pathname: string,
  href: string
) {
  if (
    href === "/"
  ) {
    return pathname === "/";
  }

  return (
    pathname === href ||
    pathname.startsWith(
      `${href}/`
    )
  );
}

function sectionMatches(
  pathname: string,
  items:
    NavigationItem[]
) {
  return items.some(
    (
      item
    ) =>
      routeMatches(
        pathname,
        item.href
      )
  );
}

export function SiteHeader() {
  const pathname =
    usePathname();

  const headerRef =
    useRef<HTMLElement>(
      null
    );

  const drawerRef =
    useRef<HTMLDivElement>(
      null
    );

  const closeButtonRef =
    useRef<HTMLButtonElement>(
      null
    );

  const [
    desktopMenu,
    setDesktopMenu
  ] =
    useState<MenuName | null>(
      null
    );

  const [
    drawerOpen,
    setDrawerOpen
  ] =
    useState(
      false
    );

  const [
    mobileSection,
    setMobileSection
  ] =
    useState<MenuName | null>(
      () => {
        if (
          sectionMatches(
            pathname,
            companyItems
          )
        ) {
          return "company";
        }

        if (
          sectionMatches(
            pathname,
            serviceItems
          )
        ) {
          return "services";
        }

        return null;
      }
    );

  const companyActive =
    sectionMatches(
      pathname,
      companyItems
    );

  const servicesActive =
    sectionMatches(
      pathname,
      serviceItems
    );

  useEffect(
    () => {
      if (
        !desktopMenu
      ) {
        return;
      }

      function handlePointerDown(
        event:
          PointerEvent
      ) {
        const target =
          event.target;

        if (
          target instanceof
            Element &&
          target.closest(
            "[data-desktop-menu-root]"
          )
        ) {
          return;
        }

        setDesktopMenu(
          null
        );
      }

      function handleKeyDown(
        event:
          globalThis.KeyboardEvent
      ) {
        if (
          event.key ===
          "Escape"
        ) {
          setDesktopMenu(
            null
          );
        }
      }

      document.addEventListener(
        "pointerdown",
        handlePointerDown
      );

      document.addEventListener(
        "keydown",
        handleKeyDown
      );

      return () => {
        document.removeEventListener(
          "pointerdown",
          handlePointerDown
        );

        document.removeEventListener(
          "keydown",
          handleKeyDown
        );
      };
    },
    [
      desktopMenu
    ]
  );

  useEffect(
    () => {
      if (
        !drawerOpen
      ) {
        return;
      }

      const previousOverflow =
        document.body
          .style
          .overflow;

      document.body.style.overflow =
        "hidden";

      closeButtonRef
        .current
        ?.focus();

      function handleKeyDown(
        event:
          globalThis.KeyboardEvent
      ) {
        if (
          event.key ===
          "Escape"
        ) {
          setDrawerOpen(
            false
          );
          return;
        }

        if (
          event.key !==
          "Tab"
        ) {
          return;
        }

        const drawer =
          drawerRef.current;

        if (!drawer) {
          return;
        }

        const focusable =
          Array.from(
            drawer.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
          ).filter(
            (
              element
            ) =>
              element.offsetParent !==
              null
          );

        if (
          focusable.length ===
          0
        ) {
          return;
        }

        const first =
          focusable[0];

        const last =
          focusable[
            focusable.length -
              1
          ];

        if (
          event.shiftKey &&
          document.activeElement ===
            first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement ===
            last
        ) {
          event.preventDefault();
          first.focus();
        }
      }

      document.addEventListener(
        "keydown",
        handleKeyDown
      );

      return () => {
        document.body.style.overflow =
          previousOverflow;

        document.removeEventListener(
          "keydown",
          handleKeyDown
        );
      };
    },
    [
      drawerOpen
    ]
  );

  function toggleDesktopMenu(
    name:
      MenuName
  ) {
    setDesktopMenu(
      (
        current
      ) =>
        current === name
          ? null
          : name
    );
  }

  function toggleMobileSection(
    name:
      MenuName
  ) {
    setMobileSection(
      (
        current
      ) =>
        current === name
          ? null
          : name
    );
  }

  function closeDrawer() {
    setDrawerOpen(
      false
    );
  }

  return (
    <>
      <header
        className={
          styles.header
        }
        ref={
          headerRef
        }
      >
        <div
          className={
            styles.inner
          }
        >
          <Link
            className={
              styles.brand
            }
            href="/"
            aria-label="No Breach home"
          >
            <BrandLogo placement="header" />
          </Link>

          <nav
            className={
              styles.desktopNav
            }
            aria-label="Primary navigation"
            data-desktop-navigation
          >
            <div
              className={
                styles.navGroup
              }
              data-desktop-menu-root
            >
              <button
                className={`${styles.navTrigger} ${
                  companyActive
                    ? styles.active
                    : ""
                }`}
                type="button"
                aria-label="Company menu"
                aria-expanded={
                  desktopMenu ===
                  "company"
                }
                aria-current={
                  companyActive
                    ? "page"
                    : undefined
                }
                onClick={() =>
                  toggleDesktopMenu(
                    "company"
                  )
                }
              >
                Company

                <ChevronDown
                  className={
                    styles.chevron
                  }
                  size={14}
                  aria-hidden="true"
                />
              </button>

              {desktopMenu ===
              "company" ? (
                <div
                  className={
                    styles.dropdown
                  }
                >
                  <div
                    className={
                      styles.dropdownHeader
                    }
                  >
                    <span>
                      01
                    </span>

                    <p>
                      Company
                    </p>
                  </div>

                  <div
                    className={
                      styles.dropdownLinks
                    }
                  >
                    {companyItems.map(
                      (
                        item
                      ) => (
                        <Link
                          className={`${styles.dropdownLink} ${
                            routeMatches(
                              pathname,
                              item.href
                            )
                              ? styles.dropdownLinkActive
                              : ""
                          }`}
                          href={
                            item.href
                          }
                          key={
                            item.href
                          }
                          onClick={() =>
                            setDesktopMenu(
                              null
                            )
                          }
                        >
                          <span>
                            {
                              item.label
                            }
                          </span>

                          {item.description ? (
                            <small>
                              {
                                item.description
                              }
                            </small>
                          ) : null}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              ) : null}
            </div>

            <div
              className={
                styles.navGroup
              }
              data-desktop-menu-root
            >
              <button
                className={`${styles.navTrigger} ${
                  servicesActive
                    ? styles.active
                    : ""
                }`}
                type="button"
                aria-label="Services menu"
                aria-expanded={
                  desktopMenu ===
                  "services"
                }
                aria-current={
                  servicesActive
                    ? "page"
                    : undefined
                }
                onClick={() =>
                  toggleDesktopMenu(
                    "services"
                  )
                }
              >
                Services

                <ChevronDown
                  className={
                    styles.chevron
                  }
                  size={14}
                  aria-hidden="true"
                />
              </button>

              {desktopMenu ===
              "services" ? (
                <div
                  className={`${styles.dropdown} ${styles.dropdownWide}`}
                >
                  <div
                    className={
                      styles.dropdownHeader
                    }
                  >
                    <span>
                      02
                    </span>

                    <p>
                      Security
                      capabilities
                    </p>
                  </div>

                  <div
                    className={
                      styles.dropdownLinks
                    }
                  >
                    {serviceItems.map(
                      (
                        item
                      ) => (
                        <Link
                          className={`${styles.dropdownLink} ${
                            routeMatches(
                              pathname,
                              item.href
                            )
                              ? styles.dropdownLinkActive
                              : ""
                          }`}
                          href={
                            item.href
                          }
                          key={
                            item.href
                          }
                          onClick={() =>
                            setDesktopMenu(
                              null
                            )
                          }
                        >
                          <span>
                            {
                              item.label
                            }
                          </span>

                          {item.description ? (
                            <small>
                              {
                                item.description
                              }
                            </small>
                          ) : null}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              ) : null}
            </div>

            {primaryLinks.map(
              (
                item
              ) => (
                <Link
                  className={`${styles.navLink} ${
                    routeMatches(
                      pathname,
                      item.href
                    )
                      ? styles.active
                      : ""
                  }`}
                  href={
                    item.href
                  }
                  key={
                    item.href
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
                  {
                    item.label
                  }
                </Link>
              )
            )}
          </nav>

          <div
            className={
              styles.desktopActions
            }
          >
            <Link
              className={
                styles.contactButton
              }
              href="/contact"
            >
              Contact

              <ArrowUpRight
                size={15}
                aria-hidden="true"
              />
            </Link>
          </div>

          <button
            className={
              styles.menuButton
            }
            type="button"
            aria-label="Open navigation"
            aria-expanded={
              drawerOpen
            }
            onClick={() =>
              setDrawerOpen(
                true
              )
            }
          >
            <span>
              Menu
            </span>

            <Menu
              size={19}
              aria-hidden="true"
            />
          </button>
        </div>
      </header>

      {drawerOpen ? (
        <div
          className={
            styles.drawerLayer
          }
          data-mobile-navigation
        >
          <button
            className={
              styles.backdrop
            }
            type="button"
            aria-label="Close navigation overlay"
            tabIndex={
              -1
            }
            onClick={
              closeDrawer
            }
          />

          <div
            className={
              styles.drawer
            }
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            ref={
              drawerRef
            }
          >
            <div
              className={
                styles.drawerHeader
              }
            >
              <Link
                className={
                  styles.drawerBrand
                }
                href="/"
                onClick={
                  closeDrawer
                }
              >
                <BrandLogo placement="header" />
              </Link>

              <button
                className={
                  styles.closeButton
                }
                type="button"
                aria-label="Close navigation"
                ref={
                  closeButtonRef
                }
                onClick={
                  closeDrawer
                }
              >
                <X
                  size={20}
                  aria-hidden="true"
                />
              </button>
            </div>

            <div
              className={
                styles.drawerMeta
              }
            >
              <span>
                Navigation
              </span>

              <span>
                Security /
                Education /
                Community
              </span>
            </div>

            <nav
              className={
                styles.drawerNavigation
              }
              aria-label="Mobile navigation"
            >
              <div
                className={
                  styles.drawerGroup
                }
              >
                <button
                  className={`${styles.drawerSectionButton} ${
                    companyActive
                      ? styles.drawerSectionActive
                      : ""
                  }`}
                  type="button"
                  aria-label="Company navigation"
                  aria-expanded={
                    mobileSection ===
                    "company"
                  }
                  onClick={() =>
                    toggleMobileSection(
                      "company"
                    )
                  }
                >
                  <span
                    className={
                      styles.drawerIndex
                    }
                    aria-hidden="true"
                  >
                    01
                  </span>

                  <span
                    className={
                      styles.drawerSectionLabel
                    }
                  >
                    Company
                  </span>

                  <ChevronDown
                    className={
                      mobileSection ===
                      "company"
                        ? styles.drawerChevronOpen
                        : styles.drawerChevron
                    }
                    size={18}
                    aria-hidden="true"
                  />
                </button>

                {mobileSection ===
                "company" ? (
                  <div
                    className={
                      styles.drawerSubmenu
                    }
                  >
                    {companyItems.map(
                      (
                        item
                      ) => (
                        <Link
                          className={`${styles.drawerSubLink} ${
                            routeMatches(
                              pathname,
                              item.href
                            )
                              ? styles.drawerSubLinkActive
                              : ""
                          }`}
                          href={
                            item.href
                          }
                          key={
                            item.href
                          }
                          aria-current={
                            routeMatches(
                              pathname,
                              item.href
                            )
                              ? "page"
                              : undefined
                          }
                          onClick={
                            closeDrawer
                          }
                        >
                          <span>
                            {
                              item.label
                            }
                          </span>

                          <ArrowUpRight
                            size={14}
                            aria-hidden="true"
                          />
                        </Link>
                      )
                    )}
                  </div>
                ) : null}
              </div>

              <div
                className={
                  styles.drawerGroup
                }
              >
                <button
                  className={`${styles.drawerSectionButton} ${
                    servicesActive
                      ? styles.drawerSectionActive
                      : ""
                  }`}
                  type="button"
                  aria-label="Services navigation"
                  aria-expanded={
                    mobileSection ===
                    "services"
                  }
                  onClick={() =>
                    toggleMobileSection(
                      "services"
                    )
                  }
                >
                  <span
                    className={
                      styles.drawerIndex
                    }
                    aria-hidden="true"
                  >
                    02
                  </span>

                  <span
                    className={
                      styles.drawerSectionLabel
                    }
                  >
                    Services
                  </span>

                  <ChevronDown
                    className={
                      mobileSection ===
                      "services"
                        ? styles.drawerChevronOpen
                        : styles.drawerChevron
                    }
                    size={18}
                    aria-hidden="true"
                  />
                </button>

                {mobileSection ===
                "services" ? (
                  <div
                    className={
                      styles.drawerSubmenu
                    }
                  >
                    {serviceItems.map(
                      (
                        item
                      ) => (
                        <Link
                          className={`${styles.drawerSubLink} ${
                            routeMatches(
                              pathname,
                              item.href
                            )
                              ? styles.drawerSubLinkActive
                              : ""
                          }`}
                          href={
                            item.href
                          }
                          key={
                            item.href
                          }
                          aria-current={
                            routeMatches(
                              pathname,
                              item.href
                            )
                              ? "page"
                              : undefined
                          }
                          onClick={
                            closeDrawer
                          }
                        >
                          <span>
                            {
                              item.label
                            }
                          </span>

                          <ArrowUpRight
                            size={14}
                            aria-hidden="true"
                          />
                        </Link>
                      )
                    )}
                  </div>
                ) : null}
              </div>

              {primaryLinks.map(
                (
                  item,
                  index
                ) => (
                  <Link
                    className={`${styles.drawerPrimaryLink} ${
                      routeMatches(
                        pathname,
                        item.href
                      )
                        ? styles.drawerPrimaryLinkActive
                        : ""
                    }`}
                    href={
                      item.href
                    }
                    key={
                      item.href
                    }
                    aria-current={
                      routeMatches(
                        pathname,
                        item.href
                      )
                        ? "page"
                        : undefined
                    }
                    onClick={
                      closeDrawer
                    }
                  >
                    <span
                      className={
                        styles.drawerIndex
                      }
                    aria-hidden="true"
                    >
                      {String(
                        index +
                          3
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span
                      className={
                        styles.drawerPrimaryLabel
                      }
                    >
                      {
                        item.label
                      }
                    </span>

                    <ArrowUpRight
                      size={17}
                      aria-hidden="true"
                    />
                  </Link>
                )
              )}

              <Link
                className={`${styles.drawerPrimaryLink} ${
                  routeMatches(
                    pathname,
                    "/careers"
                  )
                    ? styles.drawerPrimaryLinkActive
                    : ""
                }`}
                href="/careers"
                aria-current={
                  routeMatches(
                    pathname,
                    "/careers"
                  )
                    ? "page"
                    : undefined
                }
                onClick={
                  closeDrawer
                }
              >
                <span
                  className={
                    styles.drawerIndex
                  }
                    aria-hidden="true"
                >
                  07
                </span>

                <span
                  className={
                    styles.drawerPrimaryLabel
                  }
                >
                  Careers
                </span>

                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                />
              </Link>
            </nav>

            <div
              className={
                styles.drawerFooter
              }
            >
              <Link
                className={
                  styles.drawerContact
                }
                href="/contact"
                onClick={
                  closeDrawer
                }
              >
                <span>
                  Contact
                  No Breach
                </span>

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>

              <a
                className={
                  styles.drawerLinkedin
                }
                href={
                  siteConfig.linkedin
                }
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn

                <ArrowUpRight
                  size={13}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
