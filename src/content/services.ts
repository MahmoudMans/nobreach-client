import type {
  Service
} from "@/types/content";

const commonEngagement = [
  {
    number: "01",
    title: "Initial context",
    description:
      "Establish objectives, business context, target systems and the reason the assessment is being requested."
  },
  {
    number: "02",
    title: "Scope definition",
    description:
      "Agree on technical boundaries, permitted testing activity, timing and communication expectations."
  },
  {
    number: "03",
    title: "Assessment",
    description:
      "Perform structured testing with human reasoning at the center and tooling used where it improves coverage."
  },
  {
    number: "04",
    title: "Validation",
    description:
      "Confirm meaningful findings carefully and avoid overstating unverified security impact."
  },
  {
    number: "05",
    title: "Reporting",
    description:
      "Document technical evidence, impact context and prioritized remediation guidance."
  }
] as const;

export const services: Service[] = [
  {
    slug: "web-application-pentesting",
    number: "01",
    title:
      "Web Application Penetration Testing",
    shortTitle:
      "Web Application Security",
    eyebrow:
      "Application security",
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
        title:
          "Understand the application",
        description:
          "Map workflows, roles, trust boundaries and important business behavior before deeper testing."
      },
      {
        title:
          "Test manually",
        description:
          "Use tooling where it improves coverage while keeping human reasoning at the center of the assessment."
      },
      {
        title:
          "Validate impact",
        description:
          "Confirm findings carefully and separate meaningful weaknesses from low-value scanner noise."
      }
    ],
    suitableFor: [
      "Customer-facing web applications",
      "Internal business applications",
      "Applications before important releases",
      "Systems with multiple user roles",
      "Applications handling sensitive workflows"
    ],
    engagement:
      commonEngagement.map(
        (item) => ({ ...item })
      ),
    faqs: [
      {
        question:
          "Is the assessment fully automated?",
        answer:
          "No. Automated tools may support discovery and coverage, but the assessment is designed around manual reasoning, application behavior and validation."
      },
      {
        question:
          "Can testing be black-box or white-box?",
        answer:
          "The appropriate level of access depends on the objective and agreed scope. Black-box, grey-box and white-box approaches can support different security questions."
      },
      {
        question:
          "What should be shared through the public contact form?",
        answer:
          "Only high-level project context. Passwords, production credentials, access tokens and confidential infrastructure details should not be submitted through the public website."
      }
    ]
  },
  {
    slug: "api-security",
    number: "02",
    title:
      "API Security Testing",
    shortTitle:
      "API Security",
    eyebrow:
      "API security",
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
        title:
          "Map identities and objects",
        description:
          "Understand users, roles, resources and the actions that connect them before testing boundaries."
      },
      {
        title:
          "Challenge authorization",
        description:
          "Test whether users can reach objects, functions or workflows outside their intended permissions."
      },
      {
        title:
          "Examine business behavior",
        description:
          "Look beyond endpoint syntax to identify security weaknesses created by application logic."
      }
    ],
    suitableFor: [
      "REST API platforms",
      "GraphQL applications",
      "Mobile application backends",
      "Multi-tenant platforms",
      "Role-based application APIs"
    ],
    engagement:
      commonEngagement.map(
        (item) => ({ ...item })
      ),
    faqs: [
      {
        question:
          "Does API testing include authorization?",
        answer:
          "Yes. Authorization boundaries are a central part of API security testing because technically valid requests can still violate intended access rules."
      },
      {
        question:
          "Can REST and GraphQL both be assessed?",
        answer:
          "Yes. The testing approach is adapted to the interface and application architecture within the agreed scope."
      },
      {
        question:
          "Are business-logic issues considered?",
        answer:
          "Yes. API security is not limited to malformed input or scanner findings. Workflow and business behavior are part of the assessment."
      }
    ]
  },
  {
    slug:
      "infrastructure-security",
    number: "03",
    title:
      "Infrastructure Security Assessment",
    shortTitle:
      "Infrastructure Security",
    eyebrow:
      "Infrastructure",
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
        title:
          "Discover exposure",
        description:
          "Identify services, entry points and reachable infrastructure relevant to the agreed scope."
      },
      {
        title:
          "Analyze paths",
        description:
          "Examine how isolated weaknesses could combine into more meaningful compromise paths."
      },
      {
        title:
          "Prioritize fixes",
        description:
          "Focus remediation guidance on exposure, exploitability and operational impact."
      }
    ],
    suitableFor: [
      "Internet-facing infrastructure",
      "Internal corporate networks",
      "Infrastructure changes",
      "Security-control validation",
      "Organizations reviewing exposed services"
    ],
    engagement:
      commonEngagement.map(
        (item) => ({ ...item })
      ),
    faqs: [
      {
        question:
          "Can external and internal scopes be separated?",
        answer:
          "Yes. External exposure and internal network assessment answer different security questions and can be scoped independently."
      },
      {
        question:
          "Does the engagement require production credentials?",
        answer:
          "That depends on the agreed assessment model. Sensitive credentials should never be submitted through the public website."
      },
      {
        question:
          "Are findings prioritized?",
        answer:
          "Reporting is intended to help teams understand which exposures and attack paths deserve attention first."
      }
    ]
  },
  {
    slug:
      "security-training",
    number: "04",
    title:
      "Cybersecurity Training",
    shortTitle:
      "Security Training",
    eyebrow:
      "Education",
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
        title:
          "Learn by doing",
        description:
          "Sessions prioritize practical application over passive presentation."
      },
      {
        title:
          "Build methodology",
        description:
          "Learners develop repeatable ways to investigate security problems rather than memorize isolated tricks."
      },
      {
        title:
          "Connect concepts",
        description:
          "Technical exercises are tied back to the broader security decisions they support."
      }
    ],
    suitableFor: [
      "Engineering teams",
      "Universities",
      "Cybersecurity clubs",
      "Technical communities",
      "Learners moving into offensive security"
    ],
    engagement:
      commonEngagement.map(
        (item) => ({ ...item })
      ),
    faqs: [
      {
        question:
          "Are training sessions practical?",
        answer:
          "The training model emphasizes practical exercises, technical reasoning and repeatable methodology."
      },
      {
        question:
          "Can training be adapted for universities or teams?",
        answer:
          "The content can be structured around the audience, learning objectives and available technical background."
      },
      {
        question:
          "Is this the same as the public Training Hub?",
        answer:
          "This service page addresses organizational and group training engagements. The Training Hub contains published learner-oriented programs."
      }
    ]
  }
];

export function getService(
  slug: string
) {
  return services.find(
    (service) =>
      service.slug === slug
  );
}
