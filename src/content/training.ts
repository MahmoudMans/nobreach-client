import type {
  TrainingProgram
} from "@/types/content";

export const trainingPrograms:
  TrainingProgram[] = [
    {
      slug:
        "red-team-foundations",
      title:
        "Red Team Foundations",
      category:
        "Offensive Security",
      summary:
        "A structured introduction to how offensive-security engagements progress from reconnaissance to reporting.",
      description:
        "A practical program for learners who want to understand the logic, sequence and discipline behind offensive-security operations.",
      level:
        "Beginner → Intermediate",
      format:
        "Live sessions",
      duration:
        "8 sessions",
      status:
        "available",
      objectives: [
        "Understand the lifecycle of an offensive-security engagement",
        "Build a disciplined reconnaissance methodology",
        "Recognize how attack paths develop across multiple stages",
        "Understand privilege and movement concepts",
        "Improve reporting and operational thinking"
      ],
      modules: [
        {
          number: "01",
          title:
            "Reconnaissance",
          description:
            "Establish targets, context and information sources."
        },
        {
          number: "02",
          title:
            "Attack Surface Discovery",
          description:
            "Map reachable systems, services and application exposure."
        },
        {
          number: "03",
          title:
            "Initial Access",
          description:
            "Understand how weaknesses become viable entry points."
        },
        {
          number: "04",
          title:
            "Exploitation",
          description:
            "Validate technical weaknesses while respecting scope."
        },
        {
          number: "05",
          title:
            "Privilege Escalation",
          description:
            "Study how attackers expand access from an initial foothold."
        },
        {
          number: "06",
          title:
            "Movement",
          description:
            "Understand relationships between systems, identities and trust."
        },
        {
          number: "07",
          title:
            "OPSEC",
          description:
            "Introduce operational discipline and engagement constraints."
        },
        {
          number: "08",
          title:
            "Reporting",
          description:
            "Turn technical work into actionable security communication."
        }
      ],
      prerequisites: [
        "Basic networking knowledge",
        "Comfort using a command line",
        "General understanding of web and operating-system concepts"
      ],
      audience: [
        "Cybersecurity learners",
        "Students entering offensive security",
        "Junior security practitioners",
        "Developers exploring adversarial security thinking"
      ],
      outcomes: [
        "A clearer offensive-security workflow",
        "Improved reconnaissance discipline",
        "Better understanding of attack-path development",
        "Stronger reporting methodology"
      ]
    },
    {
      slug:
        "web-exploitation-techniques",
      title:
        "Web Exploitation Techniques",
      category:
        "Web Security",
      summary:
        "A mentorship-oriented program focused on understanding web application behavior and exploitation methodology.",
      description:
        "Go beyond memorizing vulnerability names by learning how to reason about application state, trust boundaries, authorization and attack chains.",
      level:
        "Intermediate",
      format:
        "Mentorship",
      status:
        "available",
      objectives: [
      "Build a behavior map before testing for vulnerabilities.",
      "Model identity, state, data flow and privilege as connected trust boundaries.",
      "Turn unusual application behavior into clear testable hypotheses.",
      "Challenge workflows by changing sequence, role, object and state.",
      "Validate impact with minimal, reproducible evidence."
    ],
      modules: [
      {
        number: "01",
        title: "Observe",
        description: "Reconstruct the application from the outside: routes, roles, state transitions, data movement and browser behavior."
      },
      {
        number: "02",
        title: "Model",
        description: "Identify trust boundaries, hidden assumptions and places where identity, objects or state should constrain behavior."
      },
      {
        number: "03",
        title: "Challenge",
        description: "Design focused experiments that vary sequence, privilege, input and application state instead of spraying payloads."
      },
      {
        number: "04",
        title: "Prove",
        description: "Connect observations into realistic attack paths, confirm impact and capture evidence another tester can reproduce."
      }
    ],
      prerequisites: [
      "Comfort reading HTTP requests and responses.",
      "Basic browser DevTools or intercepting-proxy usage.",
      "Basic web-application concepts; advanced exploitation experience is not required."
    ],
      audience: [
      "Practitioners who can read an HTTP exchange and want to understand the application behind it.",
      "Developers learning how identity, state and trust boundaries fail across real workflows.",
      "Security testers moving from checklist-driven testing to hypothesis-driven investigation."
    ],
      outcomes: [
      "A reusable application-behavior map.",
      "A hypothesis-driven testing workflow.",
      "Stronger trust-boundary and attack-path reasoning.",
      "Cleaner reproduction notes and security evidence."
    ]
    },
    {
      slug:
        "ai-security-foundations",
      title:
        "AI Security Foundations",
      category:
        "AI Security",
      summary:
        "An introduction to security risks created by modern AI applications and tool-using systems.",
      description:
        "Explore security boundaries around AI applications, prompts, external tools and the systems that surround model behavior.",
      level:
        "Beginner → Intermediate",
      format:
        "Live sessions",
      duration:
        "3 sessions",
      status:
        "available",
      objectives: [
        "Understand the security model of modern AI applications",
        "Recognize prompt-injection risk",
        "Understand tool-calling and permission boundaries",
        "Connect traditional application security to AI-enabled systems"
      ],
      modules: [
        {
          number: "01",
          title:
            "AI Application Attack Surface",
          description:
            "Map models, applications, data, tools and trust boundaries."
        },
        {
          number: "02",
          title:
            "Prompt Injection",
          description:
            "Understand direct and indirect instruction-manipulation risks."
        },
        {
          number: "03",
          title:
            "Tool-Using Systems",
          description:
            "Examine authorization and control boundaries around agentic actions."
        }
      ],
      prerequisites: [
        "Basic application-security awareness",
        "No advanced machine-learning background required"
      ],
      audience: [
        "Application-security learners",
        "Developers working with AI-enabled applications",
        "Security practitioners expanding into AI security",
        "Technical teams exploring agentic systems"
      ],
      outcomes: [
        "A clear model of AI application trust boundaries",
        "Understanding of prompt-injection risk",
        "Awareness of tool-use authorization problems",
        "Ability to connect AI security to conventional application security"
      ]
    },
    {
      slug: "grc-enterprise",
      title: "GRC Enterprise Training Program",
      category: "Governance, Risk & Compliance",
      summary: "Build practical, enterprise-grade GRC capability with ISO 27001, NIST CSF, SOC 2 and GDPR, from risk registers to audit-ready evidence.",
      description: "Learn to translate technical security findings into business risk, map controls across major frameworks, build audit-ready GRC artifacts and present an enterprise GRC roadmap.",
      level: "Professional / Enterprise",
      format: "Live training · 2 sessions per week",
      duration: "3 weeks · 6 sessions · 1.5–2 hours each",
      status: "available",
      objectives: [
        "Translate pentest and vulnerability findings, including CVSS context, into business risk and remediation priorities",
        "Create and maintain a risk register with defensible risk statements",
        "Map ISO 27001, NIST CSF, SOC 2 and GDPR into a unified control matrix",
        "Perform gap analysis, control testing and audit-evidence organization",
        "Understand enterprise GRC platform workflows in ServiceNow, Archer and OneTrust",
        "Present a maturity-informed GRC program roadmap and 12-month plan"
      ],
      modules: [
        {
          number: "01",
          title: "Technical findings to business risk",
          description: "Interpret vulnerability and pentest outputs, CVSS and business context to express risk in language decision-makers can use."
        },
        {
          number: "02",
          title: "Risk registers and treatment priorities",
          description: "Structure risk statements, owners, likelihood, impact and remediation priorities into working risk-register artifacts."
        },
        {
          number: "03",
          title: "Cross-framework control mapping",
          description: "Connect ISO 27001, NIST CSF, SOC 2 and GDPR through a unified, reusable control matrix."
        },
        {
          number: "04",
          title: "Gap analysis, controls and audit evidence",
          description: "Work with gap analyses, evidence repositories and control testing as practical audit-readiness activities."
        },
        {
          number: "05",
          title: "Enterprise GRC platforms",
          description: "Understand GRC workflows and platform concepts associated with ServiceNow, Archer and OneTrust."
        },
        {
          number: "06",
          title: "Maturity, executive reporting and roadmap",
          description: "Translate findings and maturity assessments into a defensible 12-month enterprise GRC plan and capstone presentation."
        }
      ],
      prerequisites: [
        "Specific entry prerequisites have not been published; contact No Breach for suitability guidance."
      ],
      audience: [
        "Learners preparing for GRC, risk, compliance or IT audit roles",
        "Security practitioners translating technical findings into business decisions",
        "Consultants and security professionals who work with risk and audit stakeholders",
        "Students seeking practical enterprise GRC experience"
      ],
      outcomes: [
        "A practice-oriented risk register and findings-to-risk workflow",
        "A cross-framework control mapping approach for ISO 27001, NIST CSF, SOC 2 and GDPR",
        "A repeatable gap-analysis and audit-evidence workflow",
        "A maturity-informed 12-month GRC roadmap for capstone presentation",
        "An included program certificate with portfolio and resume value"
      ]
    }
  ];

export function getTrainingProgram(
  slug: string
) {
  return trainingPrograms.find(
    (program) =>
      program.slug === slug
  );
}
