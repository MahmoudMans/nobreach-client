import type {
  ReactNode
} from "react";

import {
  Cr4ckoutEventV43
} from "./cr4ckout-event-v43";


export default async function EventDetailLayout({
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
    "cr4ckout-2-0"
  ) {

    return (
      <Cr4ckoutEventV43 />
    );

  }


  return children;

}
