import Image from "next/image";

import styles from "./brand-logo.module.css";


type BrandLogoProps = {
  placement?:
    "header"
    |
    "footer";
};


export function BrandLogo({
  placement =
    "header"
}: BrandLogoProps) {

  const className =
    placement
    ===
    "footer"
      ?
      `${styles.logo} ${styles.footer}`
      :
      `${styles.logo} ${styles.header}`;


  return (
    <Image
      className={
        className
      }
      src="/brand/nobreachlogo.png"
      alt="NoBreach"
      width={876}
      height={280}
      priority={
        placement
        ===
        "header"
      }
      data-brand-logo={
        placement
      }
    />
  );

}
