import { JsonLd } from "@/components/ui/json-ld";
import { siteConfig } from "@/content/site";
import type {
  TrainingProgram
} from "@/types/content";

type Props = {
  program: TrainingProgram;
};

export function TrainingStructuredData({
  program
}: Props) {
  return (
    <JsonLd
      data={{
        "@context":
          "https://schema.org",
        "@type": "Course",
        name:
          program.title,
        description:
          program.summary,
        provider: {
          "@type":
            "Organization",
          name:
            siteConfig.name,
          sameAs:
            siteConfig.linkedin
        },
        educationalLevel:
          program.level,
        teaches:
          program.objectives
      }}
    />
  );
}
