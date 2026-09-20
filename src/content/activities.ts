import type {
  Activity
} from "@/types/content";

export const activities:
  Activity[] = [
    {
      slug:
        "ai-security-foundations-2026",
      title:
        "AI Security Foundations",
      year:
        "2026",
      category:
        "training",
      location:
        "Tunis / Online",
      summary:
        "Training activity focused on security boundaries around AI applications, prompt injection and tool-using systems.",
      description:
        "A No Breach Training Hub activity focused on understanding how traditional application-security thinking extends into modern AI-enabled systems.",
      highlights: [
        "AI application attack surfaces",
        "Prompt-injection concepts",
        "Tool-use security boundaries",
        "Application-security context"
      ],
      sections: [
        {
          title:
            "Security beyond the model",
          paragraphs: [
            "AI-enabled applications introduce security questions that extend beyond model behavior alone. The surrounding application, data sources, external tools and authorization model all contribute to the attack surface.",
            "The activity is structured around understanding those boundaries rather than treating AI security as an isolated discipline."
          ]
        },
        {
          title:
            "Practical security perspective",
          paragraphs: [
            "Participants examine how prompt manipulation, tool invocation and application permissions can interact.",
            "The objective is to connect emerging AI-security concepts to security principles already familiar from application and API testing."
          ]
        }
      ],
      relatedTrainingSlug:
        "ai-security-foundations"
    },
    {
      slug:
        "red-team-foundations-2026",
      title:
        "Red Team Foundations",
      year:
        "2026",
      category:
        "training",
      location:
        "Tunis / Online",
      summary:
        "A practical learning program following an offensive-security engagement from reconnaissance through reporting.",
      description:
        "A structured Training Hub activity designed to help learners understand the sequence and discipline behind offensive-security work.",
      highlights: [
        "Reconnaissance",
        "Attack-surface discovery",
        "Privilege concepts",
        "Operational discipline",
        "Security reporting"
      ],
      sections: [
        {
          title:
            "From isolated techniques to methodology",
          paragraphs: [
            "The program is organized around the progression of an offensive-security engagement rather than a disconnected list of tools.",
            "Learners move from reconnaissance and attack-surface understanding toward validation, privilege concepts and reporting."
          ]
        },
        {
          title:
            "Operational thinking",
          paragraphs: [
            "Technical ability is only one part of an engagement. Scope, operational discipline, evidence and communication are also treated as part of the security workflow."
          ]
        }
      ],
      relatedTrainingSlug:
        "red-team-foundations"
    },
    {
      slug:
        "cr4ckout-2",
      title:
        "CR4CKOUT 2.0",
      year:
        "2025",
      category:
        "ctf",
      location:
        "Tunis, Tunisia",
      summary:
        "A cybersecurity community event centered on practical challenges, workshops and CTF-style learning.",
      description:
        "A CR4CKOUT community event bringing practical cybersecurity activity, technical challenges and shared learning into the same experience.",
      highlights: [
        "CTF-style challenges",
        "Technical workshops",
        "Hands-on learning",
        "Cybersecurity community participation"
      ],
      sections: [
        {
          title:
            "Designed for participation",
          paragraphs: [
            "CR4CKOUT is presented as a hands-on cybersecurity initiative rather than a passive conference format.",
            "Technical challenges and workshops create opportunities for participants to actively work through security problems."
          ]
        },
        {
          title:
            "Community around practice",
          paragraphs: [
            "The event reflects the broader No Breach approach of connecting security practice with education and community participation."
          ]
        }
      ],
      relatedEventSlug:
        "cr4ckout-2-0"
    },
    {
      slug:
        "training-hub-established",
      title:
        "No Breach Training Hub",
      year:
        "2024",
      category:
        "community",
      location:
        "Tunis, Tunisia",
      summary:
        "A dedicated educational initiative focused on practical cybersecurity learning and mentorship.",
      description:
        "The Training Hub formalizes the education side of the No Breach ecosystem through practical cybersecurity programs and mentorship.",
      highlights: [
        "Practical cybersecurity education",
        "Mentorship",
        "Structured learning programs",
        "Security methodology"
      ],
      sections: [
        {
          title:
            "A dedicated education layer",
          paragraphs: [
            "Training is treated as a distinct part of the No Breach identity rather than an incidental extension of consulting work.",
            "The Training Hub creates a clear home for learner-oriented security programs."
          ]
        },
        {
          title:
            "Practice as the learning model",
          paragraphs: [
            "Programs emphasize technical reasoning, hands-on investigation and repeatable methodology."
          ]
        }
      ]
    },
    {
      slug:
        "cr4ckout-launched",
      title:
        "CR4CKOUT launched",
      year:
        "2024",
      category:
        "community",
      location:
        "Tunis, Tunisia",
      summary:
        "The beginning of a community initiative bringing cybersecurity learners and practitioners together.",
      description:
        "CR4CKOUT expands the No Breach ecosystem into a dedicated cybersecurity community initiative.",
      highlights: [
        "Cybersecurity community",
        "Hands-on security",
        "Technical challenges",
        "Shared learning"
      ],
      sections: [
        {
          title:
            "Community as part of the security ecosystem",
          paragraphs: [
            "CR4CKOUT creates a separate identity for community-driven cybersecurity activity while remaining connected to No Breach.",
            "The initiative reinforces the idea that practical security knowledge grows through participation and shared technical experience."
          ]
        }
      ]
    }
  ];

export function getActivity(
  slug: string
) {
  return activities.find(
    (activity) =>
      activity.slug === slug
  );
}
