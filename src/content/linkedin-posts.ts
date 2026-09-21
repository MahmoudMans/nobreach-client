export type LinkedInPostSource =
  | "No Breach"
  | "Nouha Ben Brahim"
  | "No Breach Training Hub";

export type LinkedInPost = {
  id: string;
  source: LinkedInPostSource;
  topic: string;
  title: string;
  summary: string;
  href: string;
};

export const linkedInPosts:
  readonly LinkedInPost[] = [
    {
      id:
        "red-team-foundations",

      source:
        "No Breach Training Hub",

      topic:
        "Training",

      title:
        "Red Team Foundations",

      summary:
        "A four-week live program structured around the progression of an attack: reconnaissance, weakness discovery, access, escalation, movement and reporting.",

      href:
        "https://www.linkedin.com/posts/no-breach-training-hub_red-team-foundations-program-8-sessions-activity-7487434826179047425-xO_9"
    },

    {
      id:
        "web-exploitation-mentorship",

      source:
        "No Breach Training Hub",

      topic:
        "Web Security",

      title:
        "Web Exploitation Techniques Mentorship Program",

      summary:
        "A public Training Hub post focused on advanced web-exploitation concepts and hands-on mentorship for people developing deeper web-security methodology.",

      href:
        "https://www.linkedin.com/posts/no-breach-training-hub_no-breach-training-hub-web-attacks-activity-7475524163009548289-91NL"
    },

    {
      id:
        "ai-security-fundamentals",

      source:
        "Nouha Ben Brahim",

      topic:
        "AI Security",

      title:
        "Cybersecurity fundamentals still matter with AI tools",

      summary:
        "Nouha discusses why architecture, trust boundaries, sandboxing and security fundamentals remain important as AI-assisted security and coding become more capable.",

      href:
        "https://www.linkedin.com/posts/nouha-ben-brahim-4b749b278_ai-appsec-cybersec-activity-7471176138510364672--F1k"
    },

    {
      id:
        "recon-is-the-work",

      source:
        "Nouha Ben Brahim",

      topic:
        "Pentesting",

      title:
        "Recon is the work",

      summary:
        "A practical perspective on passive reconnaissance, active reconnaissance, manual endpoint exploration and carrying reconnaissance throughout an assessment.",

      href:
        "https://www.linkedin.com/posts/activity-7439342851370401792-G6w3"
    },

    {
      id:
        "ramadan-2026",

      source:
        "No Breach",

      topic:
        "Company",

      title:
        "Ramadan 2026",

      summary:
        "An official No Breach LinkedIn update published for Ramadan 2026.",

      href:
        "https://www.linkedin.com/posts/no-breach_ramadan2026-activity-7429962851605217280-Rixl"
    },

    {
      id:
        "offensive-security-coaching",

      source:
        "Nouha Ben Brahim",

      topic:
        "Mentorship",

      title:
        "Offensive-security fundamentals and coaching",

      summary:
        "Nouha reflects on coaching aspiring security practitioners and emphasizes networking, system architecture, fundamentals, patience and technical depth.",

      href:
        "https://www.linkedin.com/posts/activity-7419796680159604736-HRpA"
    },

    {
      id:
        "graphql-api-security",

      source:
        "No Breach",

      topic:
        "API Security",

      title:
        "GraphQL and Web API security",

      summary:
        "An official No Breach technical update focused on GraphQL, web applications, APIs, cybersecurity and bug-bounty methodology.",

      href:
        "https://www.linkedin.com/posts/no-breach_graphql-web-api-activity-7415022343623933952-skfs"
    },

    {
      id:
        "security-update",

      source:
        "No Breach",

      topic:
        "Security",

      title:
        "No Breach security update",

      summary:
        "An image-led public update from the official No Breach LinkedIn page.",

      href:
        "https://www.linkedin.com/posts/no-breach_activity-7412507462970306560-fECy"
    },

    {
      id:
        "idor-web-pentesting",

      source:
        "No Breach",

      topic:
        "Web Security",

      title:
        "IDOR and web pentesting",

      summary:
        "A No Breach security post associated with web pentesting, web hacking, IDOR and bug-bounty topics.",

      href:
        "https://www.linkedin.com/posts/no-breach_cybersecurity-webpentesting-webhacking-activity-7409888175642341376-ARp5"
    },

    {
      id:
        "ssrf-red-teaming",

      source:
        "No Breach",

      topic:
        "Offensive Security",

      title:
        "Web security, red teaming and SSRF",

      summary:
        "A No Breach technical post covering web security, penetration testing, red teaming, SSRF, exploit and bypass themes.",

      href:
        "https://www.linkedin.com/posts/no-breach_websecurity-pentesting-redteaming-activity-7408808552582062080-wawf"
    },

    {
      id:
        "securiday-17",

      source:
        "Nouha Ben Brahim",

      topic:
        "Speaking",

      title:
        "Speaking at SECURIDAY_17",

      summary:
        "Nouha's public post after speaking at SECURIDAY_17, an event focused on cybersecurity and enterprise-security topics.",

      href:
        "https://www.linkedin.com/posts/nouha-ben-brahim-4b749b278_had-an-amazing-time-speaking-at-securiday-activity-7264264001205813248-vtAR"
    },

    {
      id:
        "cod3-r3d",

      source:
        "Nouha Ben Brahim",

      topic:
        "University",

      title:
        "COD3 R3D at South Mediterranean University",

      summary:
        "Nouha shares her experience participating in COD3 R3D at South Mediterranean University and exchanging cybersecurity knowledge with the community.",

      href:
        "https://www.linkedin.com/posts/nouha-ben-brahim-4b749b278_cybersecurity-tunisia-activity-7170750469571596288-whi_"
    },

    {
      id:
        "hackathon-6",

      source:
        "Nouha Ben Brahim",

      topic:
        "Community",

      title:
        "Hackathon 6.0 judge",

      summary:
        "Nouha shares her experience serving as a judge at Hackathon 6.0 organized by ATLAS Future Leaders — TBS Chapter at Université Sesame.",

      href:
        "https://www.linkedin.com/posts/nouha-ben-brahim-4b749b278_hackathon-mentorship-techinnovation-activity-7167883628276871169-24WH"
    },

    {
      id:
        "no-breach-hiring",

      source:
        "Nouha Ben Brahim",

      topic:
        "No Breach",

      title:
        "No Breach freelance pentester opportunity",

      summary:
        "An early No Breach recruitment post from Nouha seeking freelance pentesters and bug-bounty practitioners with programming or networking skills.",

      href:
        "https://fr.linkedin.com/posts/nouha-ben-brahim-4b749b278_hiring-activity-7122325982182559744-I8cA"
    }
  ];

export const linkedInPostResearchNote =
  "Only direct public LinkedIn post permalinks that could be verified are included. Reposts or updates without a stable public post URL are intentionally omitted rather than linked to a guessed address.";
