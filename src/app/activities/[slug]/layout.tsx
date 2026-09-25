import type {
  ReactNode
} from "react";

import {
  TrainingHubEstablishedV46
} from "./training-hub-established-v46";

import { Cr4ckoutLaunchedV47 } from "./cr4ckout-launched-v47";

import { Cr4ckout2V48 } from "./cr4ckout-2-v48";

import { RedTeamFoundationsActivityV49 } from "./red-team-foundations-2026-v49";


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
    "red-team-foundations-2026"
  ) {

    return (
      <RedTeamFoundationsActivityV49 />
    );

  }


  if (
    slug
    ===
    "cr4ckout-2"
  ) {

    return (
      <Cr4ckout2V48 />
    );

  }


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
