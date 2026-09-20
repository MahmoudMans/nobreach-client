import type {
  Insight,
  InsightCategory
} from "@/types/content";

export const insightCategories:
  InsightCategory[] = [
    "Web Security",
    "API Security",
    "Offensive Security",
    "AI Security",
    "Research",
    "Community"
  ];

export const insights:
  Insight[] = [
    {
      slug:
        "authorization-is-a-system-not-a-checkbox",
      title:
        "Authorization is a system, not a checkbox",
      category:
        "API Security",
      summary:
        "Why secure APIs require reasoning about users, objects, functions and state instead of checking authorization one endpoint at a time.",
      author:
        "No Breach",
      publishedAt:
        "2026-09-20",
      readingTime:
        "7 min read",
      featured:
        true,
      tags: [
        "Authorization",
        "API Security",
        "BOLA",
        "Access Control"
      ],
      relatedServiceSlugs: [
        "api-security",
        "web-application-pentesting"
      ],
      relatedTrainingSlugs: [
        "web-exploitation-techniques"
      ],
      sections: [
        {
          id:
            "authorization-model",
          heading:
            "Authorization begins with a model",
          paragraphs: [
            "Authorization testing becomes difficult when it is reduced to a list of endpoints. An API rarely exists as isolated requests. It represents users, roles, objects, actions and state transitions that together define what access is supposed to mean.",
            "A useful security assessment therefore starts by understanding those relationships. Which identities exist? Which resources belong to whom? Which operations change state? Which actions should be restricted by ownership, role or context?"
          ],
          bullets: [
            "Identify user and service identities",
            "Map object ownership",
            "Understand role boundaries",
            "Document state-changing actions"
          ]
        },
        {
          id:
            "valid-request-wrong-user",
          heading:
            "A valid request can still be unauthorized",
          paragraphs: [
            "Many authorization weaknesses are not malformed requests. The syntax can be perfectly valid, the session can be authenticated and every field can pass validation. The security problem is that the requester should not be allowed to perform that action on that object.",
            "This is why API security requires more than fuzzing inputs. Testing needs to compare behavior between identities and determine whether the server consistently enforces the intended relationship between actor, operation and resource."
          ]
        },
        {
          id:
            "authorization-matrix",
          heading:
            "Think in authorization matrices",
          paragraphs: [
            "One practical way to reason about authorization is to build a matrix. Rows represent identities or roles. Columns represent objects and operations. The expected access decision becomes explicit, which makes unexpected behavior easier to recognize.",
            "The value of the matrix is not the document itself. The value is the discipline of defining expectations before interpreting responses."
          ],
          bullets: [
            "Same user, different object",
            "Different user, same object",
            "Lower role, privileged function",
            "State transition without required prerequisite"
          ]
        },
        {
          id:
            "business-context",
          heading:
            "Business context determines impact",
          paragraphs: [
            "Not every inconsistent authorization response has the same impact. Reading a public profile field and modifying another organization's financial workflow are fundamentally different situations.",
            "Technical evidence needs to be connected to the sensitivity of the resource, the action performed and the business consequence. That context is what turns a raw observation into a useful security finding."
          ]
        }
      ]
    },
    {
      slug:
        "attack-surface-mapping-before-exploitation",
      title:
        "Attack-surface mapping before exploitation",
      category:
        "Offensive Security",
      summary:
        "Why disciplined reconnaissance and system mapping often matter more than immediately searching for individual vulnerabilities.",
      author:
        "No Breach",
      publishedAt:
        "2026-09-18",
      readingTime:
        "6 min read",
      featured:
        true,
      tags: [
        "Reconnaissance",
        "Attack Surface",
        "Pentesting",
        "Methodology"
      ],
      relatedServiceSlugs: [
        "web-application-pentesting",
        "infrastructure-security"
      ],
      relatedTrainingSlugs: [
        "red-team-foundations"
      ],
      sections: [
        {
          id:
            "map-before-test",
          heading:
            "Map before you test deeply",
          paragraphs: [
            "A security assessment can lose depth when testing begins before the system is understood. The first interesting input field or exposed service can attract attention while more important relationships remain undiscovered.",
            "Attack-surface mapping creates a working model of the environment before deeper validation begins."
          ]
        },
        {
          id:
            "relationships",
          heading:
            "Attack surfaces are relationships",
          paragraphs: [
            "The useful question is not only which endpoints or hosts exist. It is how identities, applications, APIs, infrastructure and data connect.",
            "A low-severity weakness can become important when it provides information or access that supports another step. Conversely, a technically interesting behavior may have little operational value when it cannot influence a meaningful path."
          ],
          bullets: [
            "Applications and subdomains",
            "Authentication boundaries",
            "API relationships",
            "Roles and trust assumptions",
            "Exposed infrastructure services",
            "Sensitive workflows"
          ]
        },
        {
          id:
            "prioritization",
          heading:
            "Mapping improves prioritization",
          paragraphs: [
            "A structured map helps testing effort follow the most important parts of the environment. High-value workflows, privileged identities, externally reachable systems and cross-system trust relationships can receive attention before less significant surfaces.",
            "This improves both coverage and reporting because findings can be explained as part of a wider system instead of as isolated technical observations."
          ]
        },
        {
          id:
            "living-model",
          heading:
            "Treat the map as a living model",
          paragraphs: [
            "Reconnaissance is not only an opening phase. New information discovered during testing should refine the model.",
            "The assessment becomes iterative: map, test, learn, update the map and then test the newly understood relationships."
          ]
        }
      ]
    },
    {
      slug:
        "prompt-injection-matters-when-ai-can-act",
      title:
        "Prompt injection matters most when AI can act",
      category:
        "AI Security",
      summary:
        "A security model for understanding prompt injection when AI applications can retrieve data, invoke tools and perform actions.",
      author:
        "No Breach",
      publishedAt:
        "2026-09-15",
      readingTime:
        "8 min read",
      featured:
        true,
      tags: [
        "AI Security",
        "Prompt Injection",
        "Agents",
        "Tool Calling"
      ],
      relatedServiceSlugs: [
        "web-application-pentesting"
      ],
      relatedTrainingSlugs: [
        "ai-security-foundations"
      ],
      sections: [
        {
          id:
            "capability-changes-risk",
          heading:
            "Capability changes the risk",
          paragraphs: [
            "Prompt injection becomes a security problem when manipulated model behavior can influence something that matters outside the conversation itself.",
            "An AI feature that only produces low-stakes text has a different security profile from a system that can read private records, send messages, modify files or invoke business operations."
          ]
        },
        {
          id:
            "trust-boundaries",
          heading:
            "Model the trust boundaries",
          paragraphs: [
            "The useful security unit is not the model alone. It is the complete AI-enabled application: model, prompts, retrieved information, user identity, application permissions, external tools and downstream systems.",
            "Security review should identify where untrusted instructions can enter and what authority the application gives the model after those instructions are processed."
          ],
          bullets: [
            "User-provided prompts",
            "Retrieved documents",
            "Web content",
            "Tool responses",
            "External integrations",
            "Persistent memory or state"
          ]
        },
        {
          id:
            "least-authority",
          heading:
            "Limit the authority of AI actions",
          paragraphs: [
            "The model should not become the authorization layer. Sensitive operations still need application-level policy, identity checks and explicit permission boundaries.",
            "Tooling should expose the smallest useful capability rather than broad administrative functions. The damage from manipulated model behavior is constrained when the application itself enforces least authority."
          ]
        },
        {
          id:
            "security-testing",
          heading:
            "Test workflows, not only prompts",
          paragraphs: [
            "A prompt-injection test is more useful when it examines the entire workflow. What information can be reached? Which tools can be selected? What parameters can be influenced? What independent controls remain after the model makes a decision?",
            "This turns AI security from a collection of clever prompts into conventional security engineering around trust, authority and data flow."
          ]
        }
      ]
    },
    {
      slug:
        "manual-reasoning-in-web-security-testing",
      title:
        "Why manual reasoning still matters in web security testing",
      category:
        "Web Security",
      summary:
        "Automation is valuable for coverage, but application behavior, authorization and business logic still require human reasoning.",
      author:
        "No Breach",
      publishedAt:
        "2026-09-12",
      readingTime:
        "6 min read",
      featured:
        false,
      tags: [
        "Web Security",
        "Pentesting",
        "Business Logic",
        "Methodology"
      ],
      relatedServiceSlugs: [
        "web-application-pentesting"
      ],
      relatedTrainingSlugs: [
        "web-exploitation-techniques"
      ],
      sections: [
        {
          id:
            "automation-is-useful",
          heading:
            "Automation is useful",
          paragraphs: [
            "Security tools can discover technologies, enumerate behavior, identify known patterns and provide repeatable coverage. Rejecting automation would make many assessments slower and less consistent.",
            "The important distinction is between using automation as support and treating automated output as the assessment itself."
          ]
        },
        {
          id:
            "applications-have-meaning",
          heading:
            "Applications have meaning",
          paragraphs: [
            "A web application contains workflows and assumptions that scanners cannot fully infer. A transfer, invitation, approval or account-recovery action has meaning that comes from the business process around it.",
            "Security testing needs to understand what the application believes should happen before it can meaningfully challenge that behavior."
          ]
        },
        {
          id:
            "authorization-needs-context",
          heading:
            "Authorization needs context",
          paragraphs: [
            "A response code alone rarely explains whether access is correct. The tester needs to understand the identity, ownership model, role and state of the resource.",
            "Manual comparison between users and workflows often exposes inconsistencies that generic vulnerability scanning cannot classify correctly."
          ]
        },
        {
          id:
            "combined-method",
          heading:
            "The strongest workflow combines both",
          paragraphs: [
            "Automation can accelerate discovery and repetitive checks. Human reasoning can focus attention on unusual relationships, business logic and meaningful validation.",
            "The goal is not manual versus automated testing. The goal is using each where it provides the most security value."
          ]
        }
      ]
    }
  ];

export function getInsight(
  slug: string
) {
  return insights.find(
    (insight) =>
      insight.slug === slug
  );
}

export function getRelatedInsights(
  insight: Insight,
  limit = 3
) {
  return insights
    .filter(
      (candidate) =>
        candidate.slug !==
          insight.slug &&
        (
          candidate.category ===
            insight.category ||
          candidate.tags.some(
            (tag) =>
              insight.tags.includes(
                tag
              )
          )
        )
    )
    .slice(
      0,
      limit
    );
}
