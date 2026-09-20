import type { ReactNode } from "react";
import styles from "./container.module.css";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "content" | "reading";
};

export function Container({
  children,
  className,
  size = "default"
}: ContainerProps) {
  const classes = [
    styles.container,
    size !== "default" ? styles[size] : "",
    className ?? ""
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
