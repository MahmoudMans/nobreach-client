import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    slug: "web-application-pentesting",
    number: "01",
    title: "Web Application Penetration Testing",
    shortTitle: "Web Application Security",
    eyebrow: "Application security",
    summary:
      "Manual security testing focused on application behavior, access control and realistic attack paths.",
    description:
      "Assess web applications from an attacker-oriented perspective with emphasis on exploitable behavior, authorization boundaries, session controls, business logic and security configuration.",
    scope: [
      "Authentication and account flows",
      "Authorization and access control",
      "Session management",
      "Business logic",
      "Input handling and injection exposure",
      "File upload and file processing",
      "Security configuration",
      "Application-to-API interactions"
    ],
    deliverables: [
      "Executive overview",
      "Technical findings",
      "Evidence and reproduction guidance",
      "Risk and impact context",
      "Remediation recommendations",
      "Prioritized next actions"
    ],
    approach: [
      {
        title: "Understand the application",
        description:
          "Map workflows, roles, trust boundaries and important business behavior before deeper testing."
      },
      {
        title: "Test manually",
        description:
          "Use tooling where it improves coverage while keeping human reasoning at the center of the assessment."
      },
      {
        title: "Validate impact",
        description:
          "Confirm findings carefully and separate meaningful weaknesses from low-value scanner noise."
      }
    ]
  },
  {
    slug: "api-security",
    number: "02",
    title: "API Security Testing",
    shortTitle: "API Security",
    eyebrow: "API security",
    summary:
      "Security assessment of REST and GraphQL interfaces with attention to identity, authorization and business logic.",
    description:
      "Evaluate API behavior across authentication, authorization, object access, privilege boundaries, data exposure and business workflows.",
    scope: [
      "REST APIs",
      "GraphQL interfaces",
      "Authentication mechanisms",
      "Object-level authorization",
      "Function-level authorization",
      "Token and session handling",
      "Rate limiting",
      "Business logic",
      "Sensitive data exposure"
    ],
    deliverables: [
      "API attack-surface map",
      "Verified security findings",
      "Request and response evidence",
      "Authorization analysis",
      "Risk explanation",
      "Engineering remediation guidance"
    ],
    approach: [
      {
        title: "Map identities and objects",
        description:
          "Understand users, roles, resources and the actions that connect them before testing boundaries."
      },
      {
        title: "Challenge authorization",
        description:
          "Test whether users can reach objects, functions or workflows outside their intended permissions."
      },
      {
        title: "Examine business behavior",
        description:
          "Look beyond endpoint syntax to identify security weaknesses created by application logic."
      }
    ]
  },
  {
    slug: "infrastructure-security",
    number: "03",
    title: "Infrastructure Security Assessment",
    shortTitle: "Infrastructure Security",
    eyebrow: "Infrastructure",
    summary:
      "Assess exposed services, network weaknesses, configuration and potential attack paths.",
    description:
      "Review infrastructure from an adversarial perspective to identify reachable services, configuration weaknesses and paths that can increase attacker access.",
    scope: [
      "External attack surface",
      "Internal network exposure",
      "Reachable services",
      "Configuration weaknesses",
      "Segmentation",
      "Credential-related attack paths",
      "Privilege escalation opportunities",
      "Security control validation"
    ],
    deliverables: [
      "Attack-surface summary",
      "Technical findings",
      "Exposure evidence",
      "Attack-path explanation",
      "Prioritized remediation",
      "Defensive recommendations"
    ],
    approach: [
      {
        title: "Discover exposure",
        description:
          "Identify services, entry points and reachable infrastructure relevant to the agreed scope."
      },
      {
        title: "Analyze paths",
        description:
          "Examine how isolated weaknesses could combine into more meaningful compromise paths."
      },
      {
        title: "Prioritize fixes",
        description:
          "Focus remediation guidance on exposure, exploitability and operational impact."
      }
    ]
  },
  {
    slug: "security-training",
    number: "04",
    title: "Cybersecurity Training",
    shortTitle: "Security Training",
    eyebrow: "Education",
    summary:
      "Practical cybersecurity learning for teams, universities and technical communities.",
    description:
      "Training engagements focused on applied cybersecurity concepts, offensive-security thinking and hands-on technical development.",
    scope: [
      "Web security",
      "API security",
      "Offensive security foundations",
      "Red team foundations",
      "Security methodology",
      "AI security concepts",
      "University workshops",
      "Custom team sessions"
    ],
    deliverables: [
      "Defined learning objectives",
      "Structured technical sessions",
      "Hands-on exercises",
      "Supporting learning material",
      "Practical demonstrations",
      "Program completion guidance"
    ],
    approach: [
      {
        title: "Learn by doing",
        description:
          "Sessions prioritize practical application over passive presentation."
      },
      {
        title: "Build methodology",
        description:
          "Learners develop repeatable ways to investigate security problems rather than memorize isolated tricks."
      },
      {
        title: "Connect concepts",
        description:
          "Technical exercises are tied back to the broader security decisions they support."
      }
    ]
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
