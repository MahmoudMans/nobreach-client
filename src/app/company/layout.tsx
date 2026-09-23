import type {
  ReactNode
} from "react";

import {
  IBM_Plex_Mono,
  Inter,
  Space_Grotesk
} from "next/font/google";

import styles from "./company-family.module.css";


const displayFont =
  Space_Grotesk({
    subsets: [
      "latin"
    ],

    display:
      "swap",

    variable:
      "--font-company-display"
  });


const bodyFont =
  Inter({
    subsets: [
      "latin"
    ],

    display:
      "swap",

    variable:
      "--font-company-body"
  });


const monoFont =
  IBM_Plex_Mono({
    subsets: [
      "latin"
    ],

    weight: [
      "400",
      "500",
      "600"
    ],

    display:
      "swap",

    variable:
      "--font-company-mono"
  });


export default function CompanyLayout({
  children
}: {
  children:
    ReactNode;
}) {

  return (
    <div
      className={
        [
          styles.fontScope,
          displayFont.variable,
          bodyFont.variable,
          monoFont.variable
        ].join(
          " "
        )
      }
    >
      {
        children
      }
    </div>
  );

}
