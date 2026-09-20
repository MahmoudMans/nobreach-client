export const siteConfig = {
  name: "No Breach",
  shortName: "NB",
  description:
    "No Breach is a Tunisia-based cybersecurity organization focused on offensive security, practical training and community initiatives.",
  founded: "2023",
  location: "Tunis, Tunisia",
  linkedin: "https://www.linkedin.com/company/no-breach/",
  founder: {
    name: "Nouha Ben Brahim",
    role: "Founder",
    linkedin: "https://www.linkedin.com/in/nouha-ben-brahim-4b749b278/"
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
} as const;

export const methodology = [
  {
    number: "01",
    title: "Scope",
    description: "Define boundaries, objectives, systems and acceptable testing conditions."
  },
  {
    number: "02",
    title: "Reconnaissance",
    description: "Understand exposed information, technology and reachable attack surfaces."
  },
  {
    number: "03",
    title: "Attack Surface Mapping",
    description: "Map application, API and infrastructure paths before deeper testing begins."
  },
  {
    number: "04",
    title: "Testing",
    description: "Exercise controls manually with attention to context and business logic."
  },
  {
    number: "05",
    title: "Validation",
    description: "Confirm meaningful weaknesses without overstating impact."
  },
  {
    number: "06",
    title: "Reporting",
    description: "Translate technical findings into clear evidence, impact and remediation."
  },
  {
    number: "07",
    title: "Remediation",
    description: "Provide practical guidance that engineering teams can act on."
  }
] as const;

export const companyTimeline = [
  {
    year: "2023",
    title: "No Breach founded",
    description: "A cybersecurity organization centered on offensive security and practical learning."
  },
  {
    year: "2024",
    title: "Training Hub established",
    description: "Hands-on security education becomes a dedicated part of the No Breach ecosystem."
  },
  {
    year: "2024",
    title: "CR4CKOUT launched",
    description: "A community initiative built around cybersecurity, challenges and shared learning."
  },
  {
    year: "2025–2026",
    title: "Community and training expansion",
    description: "Programs and activities continue across offensive security, web security and AI security."
  },
  {
    year: "TODAY",
    title: "Building the next chapter",
    description: "Services, education and community remain the three pillars of the brand."
  }
] as const;
