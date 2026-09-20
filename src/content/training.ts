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
        "Develop a repeatable web-testing methodology",
        "Analyze authentication and authorization behavior",
        "Identify useful attack-surface relationships",
        "Connect individual weaknesses into realistic attack paths",
        "Improve evidence and technical communication"
      ],
      modules: [
        {
          number: "01",
          title:
            "Application Mapping",
          description:
            "Understand routes, identities, state and application behavior."
        },
        {
          number: "02",
          title:
            "Authentication",
          description:
            "Analyze login, recovery, session and account workflows."
        },
        {
          number: "03",
          title:
            "Authorization",
          description:
            "Test object and function boundaries across user roles."
        },
        {
          number: "04",
          title:
            "Input & Data Flow",
          description:
            "Trace user-controlled data through application behavior."
        },
        {
          number: "05",
          title:
            "Business Logic",
          description:
            "Challenge assumptions embedded in workflows and state transitions."
        },
        {
          number: "06",
          title:
            "Attack Chains",
          description:
            "Combine technical observations into meaningful exploitation paths."
        }
      ],
      prerequisites: [
        "Basic HTTP knowledge",
        "Familiarity with web applications",
        "Some exposure to common web-security concepts"
      ],
      audience: [
        "Web-security learners",
        "Bug bounty practitioners",
        "Junior application-security professionals",
        "Developers studying offensive web security"
      ],
      outcomes: [
        "A repeatable application-mapping process",
        "Stronger authorization-testing reasoning",
        "Improved business-logic analysis",
        "Better evidence and attack-chain communication"
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
