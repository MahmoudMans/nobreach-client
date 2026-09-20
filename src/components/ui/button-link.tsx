import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import styles from "./button-link.module.css";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: ButtonLinkProps) {
  const className = `${styles.button} ${styles[variant]}`;
  const external = /^https?:\/\//.test(href);

  if (external) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
      <ArrowRight size={16} aria-hidden="true" />
    </Link>
  );
}
