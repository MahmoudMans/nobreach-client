export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  summary: string;
  scope: string[];
  deliverables: string[];
  approach: {
    title: string;
    description: string;
  }[];
  suitableFor: string[];
  engagement: {
    number: string;
    title: string;
    description: string;
  }[];
  faqs: ServiceFaq[];
};

export type TrainingStatus =
  | "available"
  | "upcoming"
  | "archived";

export type TrainingModule = {
  number: string;
  title: string;
  description: string;
};

export type TrainingProgram = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  level: string;
  format: string;
  duration?: string;
  status: TrainingStatus;
  objectives: string[];
  modules: TrainingModule[];
  prerequisites: string[];
  audience: string[];
  outcomes: string[];
};

export type ActivityCategory =
  | "conference"
  | "training"
  | "workshop"
  | "ctf"
  | "university"
  | "community"
  | "media";

export type ActivitySection = {
  title: string;
  paragraphs: string[];
};

export type Activity = {
  slug: string;
  title: string;
  year: string;
  category: ActivityCategory;
  location?: string;
  summary: string;
  description: string;
  highlights: string[];
  sections: ActivitySection[];
  relatedEventSlug?: string;
  relatedTrainingSlug?: string;
};

export type EventStatus =
  | "upcoming"
  | "ongoing"
  | "past";

export type EventItem = {
  slug: string;
  title: string;
  year: string;
  status: EventStatus;
  location: string;
  summary: string;
  description: string[];
  format: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  specialties: string[];
  linkedin?: string;
  status: "current" | "alumni";
};

export type Insight = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  publishedAt: string;
  readingTime: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
};
