import type {
  ReactNode
} from "react";

import { AuthorizationSystemInsightV51 } from "./authorization-system-v51";


import {
  AttackSurfaceInsightV53
} from "./attack-surface-insight-v53";

import {
  PromptInjectionInsightV54
} from "./prompt-injection-insight-v54";

import {
  ManualReasoningInsightV55
} from "./manual-reasoning-insight-v55";

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
    "manual-reasoning-in-web-security-testing"
  ) {

    return (
      <div
        data-insight-article={
          slug
        }
      >
        <ManualReasoningInsightV55 />
      </div>
    );

  }



  if (
    slug
    ===
    "prompt-injection-matters-when-ai-can-act"
  ) {

    return (
      <div
        data-insight-article={
          slug
        }
      >
        <PromptInjectionInsightV54 />
      </div>
    );

  }



  if (
    slug
    ===
    "attack-surface-mapping-before-exploitation"
  ) {

    return (
      <div
        data-insight-article={
          slug
        }
      >
        <AttackSurfaceInsightV53 />
      </div>
    );

  }


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
