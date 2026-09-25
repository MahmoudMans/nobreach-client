import type {
  ReactNode
} from "react";

import {
  TrainingHubEstablishedV46
} from "./training-hub-established-v46";


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
    "training-hub-established"
  ) {

    return (
      <TrainingHubEstablishedV46 />
    );

  }


  return children;

}
