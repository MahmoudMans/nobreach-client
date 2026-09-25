import type {
  ReactNode
} from "react";

import {
  TrainingHubEstablishedV46
} from "./training-hub-established-v46";

import { Cr4ckoutLaunchedV47 } from "./cr4ckout-launched-v47";


export default async function ActivityDetailLayout({
  children,
  params
}: {
  children:
    ReactNode;

  params:
    Promise<{
      slug:
        string;
    }>;
}) {

  const {
    slug
  } =
    await params;

  if (
    slug
    ===
    "cr4ckout-launched"
  ) {

    return (
      <Cr4ckoutLaunchedV47 />
    );

  }



  if (
    slug
    ===
    "training-hub-established"
  ) {

    return (
      <TrainingHubEstablishedV46 />
    );

  }


  return children;

}
