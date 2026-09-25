import type {
  ReactNode
} from "react";

import { AuthorizationSystemInsightV51 } from "./authorization-system-v51";


export default async function InsightDetailLayout({
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
    "authorization-is-a-system-not-a-checkbox"
  ) {

    return (
      <div
        data-insight-article={
          slug
        }
      >
        <AuthorizationSystemInsightV51 />
      </div>
    );

  }



  return (
    <div
      data-insight-article={
        slug
      }
    >
      {
        children
      }
    </div>
  );
}
